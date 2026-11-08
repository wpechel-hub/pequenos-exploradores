// Conexão com o Supabase (login e banco de dados)
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/+esm";

export { SERIES } from "/js/catalog.js";

let clientPromise;
export function sb() {
  if (!clientPromise) {
    clientPromise = (async () => {
      const r = await fetch("/api/config");
      if (!r.ok) throw new Error("config");
      const c = await r.json();
      if (!c.url || !c.key) throw new Error("config");
      return createClient(c.url, c.key, {
        auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true },
      });
    })();
    clientPromise.catch(() => { clientPromise = null; });
  }
  return clientPromise;
}

export function esc(t) {
  return String(t ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}
