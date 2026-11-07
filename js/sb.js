// Conexão com o Supabase (login e banco de dados)
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/+esm";

// Séries do site. "bonusOf" = aparece como bônus dentro de outra série.
// Os títulos ficam em js/i18n.js (chaves s.<id> e s.<id>.d).
export const SERIES = [
  { id: "espaco", days: 30, page: "/espaco", emoji: "🚀", bg: "#1B1E4B", accent: "#FFC93C" },
  { id: "corpo", days: 30, page: "/corpo", emoji: "❤️", bg: "#5B1A3A", accent: "#FF6F7F" },
  { id: "bebe", days: 16, page: "/bebe", emoji: "👶", bg: "#7A2A52", accent: "#FF9FB2", bonusOf: "corpo" },
];

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
