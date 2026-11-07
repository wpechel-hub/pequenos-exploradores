# Pequenos Exploradores

Site de séries de curiosidades para famílias, em português, inglês e espanhol.
Um adulto cria a conta, adiciona as crianças, e cada criança tem o próprio progresso.

- **30 dias no espaço**
- **30 dias no corpo humano**, com o bônus **o bebê na barriga** (16 dias)

Hospedagem: **Vercel** (grátis). Login e banco de dados: **Supabase** (grátis).

---

## Como publicar (uma vez só, uns 15 minutos)

### 1. Colocar o código no GitHub
1. Entre em github.com e clique em **New repository**.
2. Nome: `pequenos-exploradores`. Deixe **Private** e clique em **Create repository**.
3. Na página do repositório, clique em **uploading an existing file**.
4. Abra a pasta descompactada e arraste **todo o conteúdo dela** (não a pasta em si) para a página.
5. Clique em **Commit changes**.

### 2. Publicar no Vercel
1. Entre em vercel.com, clique em **Add New… → Project**.
2. Escolha o repositório `pequenos-exploradores` e clique em **Import**.
3. Não mude nada (Framework: *Other*) e clique em **Deploy**.
4. Vai aparecer um endereço tipo `https://pequenos-exploradores.vercel.app`. Anote.

### 3. Criar o banco de dados (Supabase) pelo próprio Vercel
1. No projeto do Vercel, abra a aba **Storage**.
2. Clique em **Create Database** e escolha **Supabase**. Siga os passos (plano gratuito).
3. Quando pedir, **conecte ao projeto** `pequenos-exploradores`. Isso cria as chaves automaticamente.
4. Volte na aba **Deployments**, clique nos **⋯** do último deploy e em **Redeploy**.

### 4. Criar as tabelas
1. Na aba **Storage** do Vercel, clique no banco Supabase e depois em **Open in Supabase**.
2. No Supabase, abra **SQL Editor → New query**.
3. Abra o arquivo `supabase/schema.sql`, copie tudo, cole e clique em **Run**. Deve aparecer *Success*.

### 5. Ajustar o login
1. No Supabase, vá em **Authentication → URL Configuration**.
2. Em **Site URL**, coloque o seu endereço do Vercel (ex.: `https://pequenos-exploradores.vercel.app`).
3. Em **Redirect URLs**, adicione o mesmo endereço com `/**` no final (ex.: `https://pequenos-exploradores.vercel.app/**`).
4. Clique em **Save**.

Pronto! Abra o seu endereço, crie uma conta e teste.

---

## Antes de abrir para muita gente

- **Emails de confirmação:** o Supabase grátis manda poucos emails por hora. Para muitos cadastros, configure um serviço de email (por exemplo, Resend, que tem plano grátis) em **Authentication → Emails → SMTP Settings**.
- **Projeto pausado:** no plano grátis, o Supabase pausa o projeto depois de 1 semana sem nenhum acesso. É só reativar no painel.
- **Nome e marca:** antes de vender, confira se o nome "Pequenos Exploradores" está livre para registro de marca.
- **Leis de privacidade de crianças** (COPPA nos EUA, LGPD no Brasil): o site já foi feito para que só adultos criem conta, guarda apenas o primeiro nome da criança e permite apagar tudo. Antes de cobrar, vale uma conversa com um advogado.

---

## Onde mudar as coisas

| O que | Arquivo |
|---|---|
| Textos do site (login, painel) nos 3 idiomas | `js/i18n.js` |
| Conteúdo das séries (historinhas, curiosidades, experimentos) | `content/espaco.js`, `content/corpo.js`, `content/bebe.js` |
| Ilustrações e certificado de cada série | `espaco.html`, `corpo.html`, `bebe.html` |
| Lista de séries (ordem, cores, bônus) | `js/sb.js` |
| Tabelas e regras de segurança | `supabase/schema.sql` |

Depois de mudar qualquer arquivo no GitHub, o Vercel publica a nova versão sozinho.
