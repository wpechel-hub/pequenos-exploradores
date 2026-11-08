// Dinossauros em 30 dias
module.exports = {
  theme: { sky: "#2E4A1E", sky2: "#6A9A3A", bg: "#F3F8EA", line: "#DCE8C8", hero: ["🦖", "🦕", "🌿"], cert: ["🦕", "🦴", "🥚"] },
  ui: {
    pt: { title: "Dinossauros em 30 dias", sub: "Uma historinha, curiosidades, um experimento e uma atividade por dia.", who: "paleontólogo mirim", Who: "Paleontólogo Mirim", file: "certificado-dinossauros.png", listen: "Abrindo o museu…", beats: ["3", "2", "1!"], c1: "Missão: dinossauros em 30 dias", c2: "Paleontólogo Mirim", c3: "Certificamos que", c4: "completou os 30 dias e montou o seu próprio museu,", c5: "descobrindo os gigantes que viveram antes de nós!", c6: "Data", c7: "Diretor do Museu", s1: "Missão", s2: "cumprida", lab: {} },
    en: { title: "Dinosaurs in 30 Days", sub: "A story, fun facts, an experiment and an activity every day.", who: "junior paleontologist", Who: "Junior Paleontologist", cheer: "Mission complete", file: "dinosaurs-certificate.png", listen: "Opening the museum…", beats: ["3", "2", "1!"], c1: "Mission: Dinosaurs in 30 Days", c2: "Junior Paleontologist", c3: "This certifies that", c4: "completed all 30 days and built a museum of their own,", c5: "discovering the giants that lived before us!", c6: "Date", c7: "Museum Director", s1: "Mission", s2: "complete", lab: {} },
    es: { title: "Dinosaurios en 30 días", sub: "Un cuentito, curiosidades, un experimento y una actividad cada día.", who: "paleontólogo junior", Who: "Paleontólogo Junior", file: "certificado-dinosaurios.png", listen: "Abriendo el museo…", beats: ["3", "2", "¡1!"], c1: "Misión: dinosaurios en 30 días", c2: "Paleontólogo Junior", c3: "Certificamos que", c4: "completó los 30 días y armó su propio museo,", c5: "¡descubriendo a los gigantes que vivieron antes que nosotros!", c6: "Fecha", c7: "Director del Museo", s1: "Misión", s2: "cumplida", lab: {} },
  },
  days: [...require("./dinos-1.js"), ...require("./dinos-2.js"), ...require("./dinos-3.js")],
};
