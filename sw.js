// Service worker: deixa o app abrir rápido e funcionar com internet fraca.
// Login e banco de dados (Supabase e /api) sempre vão direto para a internet.
const CACHE = "pe-v2";
const PRECACHE = [
  "/", "/app", "/espaco", "/corpo", "/bebe", "/privacidade", "/nova-senha",
  "/site.css", "/favicon.svg", "/manifest.webmanifest",
  "/js/i18n.js", "/js/sb.js", "/js/serie.js", "/js/pwa.js",
  "/content/espaco.js", "/content/corpo.js", "/content/bebe.js",
  "/icons/icon-192.png", "/icons/icon-512.png", "/icons/apple-touch-icon.png",
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(PRECACHE)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== location.origin || url.pathname.startsWith("/api/")) return;

  // Páginas: tenta a internet primeiro (para pegar a versão nova), cai no cache se estiver sem sinal.
  if (req.mode === "navigate") {
    e.respondWith(
      fetch(req).then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(url.pathname, copy));
        return res;
      }).catch(() => caches.match(url.pathname).then((r) => r || caches.match("/")))
    );
    return;
  }

  // Arquivos (css, js, imagens, conteúdo): responde do cache e atualiza em segundo plano.
  e.respondWith(
    caches.match(req).then((cached) => {
      const net = fetch(req).then((res) => {
        if (res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); }
        return res;
      }).catch(() => cached);
      return cached || net;
    })
  );
});
