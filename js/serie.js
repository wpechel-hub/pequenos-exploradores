// Liga a página de uma série à conta da família: carrega e salva o progresso da criança escolhida.
import { sb, esc } from "/js/sb.js";
import { SERIES, stitle, sdesc, href } from "/js/catalog.js";
import { t, langPicker, LANG } from "/js/i18n.js";

const SID = new URL(import.meta.url).searchParams.get("s") || new URLSearchParams(location.search).get("s");
const serie = SERIES.find((s) => s.id === SID);
const childId = new URLSearchParams(location.search).get("c");

const bar = document.createElement("div");
bar.className = "pe-bar";
bar.innerHTML = `<a href="/app" class="pe-back">← ${esc(t("nav.panel"))}</a><span class="pe-right"><span class="pe-kid"></span></span>`;
bar.querySelector(".pe-right").appendChild(langPicker());
const st = document.createElement("style");
st.textContent = `.pe-bar{display:flex;align-items:center;justify-content:space-between;gap:8px;margin:0 2px 12px;font-family:"Baloo 2","Nunito",system-ui,sans-serif;font-weight:700;font-size:16px;flex-wrap:wrap}
.pe-bar a,.pe-kid,.pe-bar select{color:var(--ink);text-decoration:none;background:var(--card);border:2px solid var(--line);border-radius:14px;padding:6px 12px;font:inherit}
.pe-right{display:flex;gap:8px;align-items:center;min-width:0}
.pe-kid{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:40vw}
.pe-bonus{display:flex;align-items:center;gap:14px;margin-top:22px;padding:16px 18px;border-radius:22px;background:#7A2A52;color:#fff;text-decoration:none;font-family:"Baloo 2",system-ui,sans-serif}
.pe-bonus b{font-size:21px;display:block;line-height:1.15}.pe-bonus small{font-family:"Nunito",system-ui,sans-serif;font-size:15px;color:#FFD6E2}
.pe-bonus .ic{font-size:34px}.pe-bonus .go{margin-left:auto;font-size:24px}
.pe-toast{position:fixed;left:50%;bottom:calc(18px + env(safe-area-inset-bottom,0px));transform:translateX(-50%);background:#1E2156;color:#fff;padding:10px 18px;border-radius:14px;font-family:"Nunito",system-ui,sans-serif;font-size:15px;z-index:50;box-shadow:0 6px 20px rgba(0,0,0,.25)}`;
document.head.appendChild(st);
const wrap = document.querySelector(".wrap");
wrap.insertBefore(bar, wrap.firstChild);

function toast(msg) {
  const el = document.createElement("div");
  el.className = "pe-toast";
  el.textContent = msg;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 3500);
}

const go = (url) => location.replace(url);

(async () => {
  let client;
  try { client = await sb(); } catch (e) { go("/"); return; }
  const { data: { session } } = await client.auth.getSession();
  if (!session) { go("/"); return; }
  if (!childId || !serie) { go("/app"); return; }

  const { data: child, error } = await client.from("children").select("id,name").eq("id", childId).maybeSingle();
  if (error || !child) { go("/app"); return; }

  bar.querySelector(".pe-kid").textContent = "🧒 " + child.name;
  document.title = stitle(serie, LANG) + " · " + child.name;
  nome.value = child.name; // eslint-disable-line no-undef

  // Atalho para o bônus (ex.: bebê dentro do corpo humano)
  const bonuses = SERIES.filter((s) => s.bonusOf === SID && s.ready);
  for (const bonus of bonuses) {
    const a = document.createElement("a");
    a.className = "pe-bonus";
    a.href = href(bonus, childId);
    a.innerHTML = `<span class="ic">${bonus.emoji}</span><span><b>${esc(stitle(bonus, LANG))}</b><small>${esc(sdesc(bonus, LANG))}</small></span><span class="go">→</span>`;
    const grid = document.getElementById("grid");
    grid.parentNode.insertBefore(a, document.getElementById("verCert"));
  }
  const parent = serie.bonusOf && SERIES.find((s) => s.id === serie.bonusOf);
  if (parent) {
    const back = bar.querySelector(".pe-back");
    back.href = href(parent, childId);
    back.textContent = "← " + stitle(parent, LANG);
  }

  const { data: row } = await client.from("progress").select("done").eq("child_id", childId).eq("series", SID).maybeSingle();
  const valid = (n) => Number.isInteger(n) && n >= 0 && n < serie.days;
  /* global done, render */
  done = Array.isArray(row?.done) ? row.done.filter(valid) : []; // eslint-disable-line no-global-assign
  render();

  let queue = Promise.resolve();
  window.onSave = (d) => {
    const body = { child_id: childId, series: SID, done: [...new Set(d)].filter(valid).sort((a, b) => a - b), updated_at: new Date().toISOString() };
    queue = queue
      .then(() => client.from("progress").upsert(body))
      .then((r) => { if (r && r.error) toast(t("app.saveErr")); })
      .catch(() => toast(t("app.saveErr")));
  };
})();
