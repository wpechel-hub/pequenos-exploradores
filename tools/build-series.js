// Monta content/<id>.js a partir de series-src/<id>.js (conteúdo nos 3 idiomas).
// Uso: node tools/build-series.js mundo [outra ...]
const fs = require("fs"), path = require("path");
const { common } = require("./ui.js");
const ROOT = path.join(__dirname, "..");
const LANGS = ["pt", "en", "es"];
const NEED = ["h", "t", "f", "x", "s", "at", "m", "p", "q"]; // "ex" (experimento) é opcional
for (const id of process.argv.slice(2)) {
  const src = require(path.join(ROOT, "series-src", id + ".js"));
  const out = { theme: src.theme };
  for (const L of LANGS) {
    const days = src.days.map((d, i) => {
      const o = d[L];
      if (!o) throw new Error(`${id}[${i}] sem ${L}`);
      for (const k of NEED) if (o[k] == null) throw new Error(`${id}[${i}].${L} sem ${k}`);
      if ((o.ex && o.ex.p.length !== 3) || o.p.length !== 3 || o.s.length < 3) throw new Error(`${id}[${i}].${L} listas incompletas`);
      return { e: d.e, art: d.art, ...o };
    });
    out[L] = { ui: { ...common[L], ...src.ui[L] }, days };
  }
  fs.writeFileSync(path.join(ROOT, "content", id + ".js"), "window.CONTENT=" + JSON.stringify(out) + ";\n");
  console.log(id, src.days.length, "dias", fs.statSync(path.join(ROOT, "content", id + ".js")).size, "bytes");
}
