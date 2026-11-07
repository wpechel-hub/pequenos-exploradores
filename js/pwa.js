// Registra o app (service worker) e mostra o convite para instalar na tela inicial.
import { t } from "/js/i18n.js";

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("/sw.js").catch(() => {}));
}

const standalone = matchMedia("(display-mode: standalone)").matches || navigator.standalone === true;
const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
const showBanner = document.body.dataset.install === "1";
let dismissed = false;
try { dismissed = localStorage.getItem("pe-install-dismissed") === "1"; } catch (e) {}

function banner(text, btnLabel, onBtn) {
  if (document.getElementById("pe-install")) return;
  const st = document.createElement("style");
  st.textContent = `#pe-install{position:fixed;left:12px;right:12px;bottom:calc(12px + env(safe-area-inset-bottom,0px));z-index:60;background:#1B1E4B;color:#fff;border-radius:20px;padding:12px 12px 12px 14px;display:flex;align-items:center;gap:12px;box-shadow:0 10px 30px rgba(0,0,0,.3);font-family:"Nunito",system-ui,sans-serif;max-width:560px;margin:0 auto}
#pe-install img{width:44px;height:44px;border-radius:12px;flex:none}
#pe-install p{margin:0;font-size:15px;line-height:1.35;flex:1}
#pe-install b{display:block;font-family:"Baloo 2",system-ui,sans-serif;font-size:18px}
#pe-install .go{border:0;border-radius:14px;background:#FFC93C;color:#1B1E4B;font-family:"Baloo 2",system-ui,sans-serif;font-weight:700;font-size:16px;padding:10px 14px;cursor:pointer;flex:none}
#pe-install .x{border:0;background:transparent;color:#fff;font-size:22px;width:36px;height:36px;cursor:pointer;flex:none;opacity:.8}`;
  document.head.appendChild(st);
  const el = document.createElement("div");
  el.id = "pe-install";
  el.setAttribute("role", "dialog");
  el.innerHTML = `<img src="/icons/icon-192.png" alt=""><p><b></b><span></span></p>${btnLabel ? '<button class="go"></button>' : ""}<button class="x" aria-label=""></button>`;
  el.querySelector("b").textContent = t("pwa.title");
  el.querySelector("span").textContent = text;
  el.querySelector(".x").setAttribute("aria-label", t("pwa.close"));
  el.querySelector(".x").textContent = "×";
  el.querySelector(".x").onclick = () => { el.remove(); try { localStorage.setItem("pe-install-dismissed", "1"); } catch (e) {} };
  if (btnLabel) { const b = el.querySelector(".go"); b.textContent = btnLabel; b.onclick = () => onBtn(el); }
  document.body.appendChild(el);
}

if (showBanner && !standalone && !dismissed) {
  if (isIOS) {
    setTimeout(() => banner(t("pwa.ios")), 1200);
  } else {
    window.addEventListener("beforeinstallprompt", (ev) => {
      ev.preventDefault();
      banner(t("pwa.android"), t("pwa.install"), async (el) => {
        el.remove();
        ev.prompt();
        try { await ev.userChoice; } catch (e) {}
      });
    });
  }
}
