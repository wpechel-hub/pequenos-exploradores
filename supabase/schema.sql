-- Pequenos Exploradores: tabelas e regras de segurança.
-- Cole tudo no Supabase > SQL Editor > New query e clique em Run (uma vez só).

create table if not exists public.children (
  id uuid primary key default gen_random_uuid(),
  parent_id uuid not null default auth.uid() references auth.users (id) on delete cascade,
  name text not null check (char_length(btrim(name)) between 1 and 40),
  created_at timestamptz not null default now()
);
create index if not exists children_parent_idx on public.children (parent_id);

create table if not exists public.progress (
  child_id uuid not null references public.children (id) on delete cascade,
  series text not null constraint progress_series_check check (series ~ '^[a-z0-9-]{2,40}$'),
  done smallint[] not null default '{}' check (coalesce(array_length(done, 1), 0) <= 30),
  updated_at timestamptz not null default now(),
  primary key (child_id, series)
);

alter table public.children enable row level security;
alter table public.progress enable row level security;

-- Cada adulto só vê e altera os próprios filhos
drop policy if exists "familia_children" on public.children;
create policy "familia_children" on public.children
  for all to authenticated
  using (parent_id = (select auth.uid()))
  with check (parent_id = (select auth.uid()));

-- E só o progresso desses filhos
drop policy if exists "familia_progress" on public.progress;
create policy "familia_progress" on public.progress
  for all to authenticated
  using (exists (select 1 from public.children c where c.id = child_id and c.parent_id = (select auth.uid())))
  with check (exists (select 1 from public.children c where c.id = child_id and c.parent_id = (select auth.uid())));

-- Limite de 10 crianças por conta
create or replace function public.limite_criancas() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if (select count(*) from public.children where parent_id = new.parent_id) >= 10 then
    raise exception 'Limite de 10 crianças por conta';
  end if;
  return new;
end $$;
drop trigger if exists limite_criancas on public.children;
create trigger limite_criancas before insert on public.children
  for each row execute function public.limite_criancas();

grant select, insert, update, delete on public.children, public.progress to authenticated;
revoke all on public.children, public.progress from anon;

-- Permite que o próprio adulto apague a conta (e, em cascata, as crianças e o progresso)
create or replace function public.apagar_minha_conta() returns void
language sql security definer set search_path = public as $$
  delete from auth.users where id = auth.uid();
$$;
revoke all on function public.apagar_minha_conta() from public, anon;
grant execute on function public.apagar_minha_conta() to authenticated;
