// Entrega para o navegador o endereço do Supabase e a chave pública (anon).
// Os valores vêm das variáveis de ambiente que a integração Supabase do Vercel cria.
export default function handler(req, res) {
  const env = process.env;
  const url = env.NEXT_PUBLIC_SUPABASE_URL || env.SUPABASE_URL || "";
  const key =
    env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    env.SUPABASE_ANON_KEY ||
    env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
    env.SUPABASE_PUBLISHABLE_KEY ||
    "";
  res.setHeader("Cache-Control", "public, max-age=60");
  res.status(200).json({ url, key });
}
