// O avião em 30 dias: a história e como ele voa
module.exports = {
  theme: { sky: "#1B3A6B", sky2: "#4A8AD4", bg: "#EEF6FF", line: "#D3E3F5", hero: ["✈️", "☁️", "🌤️"], cert: ["✈️", "🛫", "☁️"] },
  ui: {
    pt: { title: "O avião em 30 dias", sub: "Uma historinha, curiosidades, um experimento e uma atividade por dia.", who: "piloto mirim", Who: "Piloto Mirim", file: "certificado-aviao.png", listen: "Apertem os cintos…", beats: ["3", "2", "1!"], c1: "Missão: o avião em 30 dias", c2: "Brevê de Piloto Mirim", c3: "Certificamos que", c4: "completou os 30 dias de voo e descobriu a história", c5: "dos aviões e os segredos que fazem eles voarem!", c6: "Data", c7: "Comandante da Escola de Voo", s1: "Missão", s2: "cumprida", lab: {} },
    en: { title: "Airplanes in 30 Days", sub: "A story, fun facts, an experiment and an activity every day.", who: "junior pilot", Who: "Junior Pilot", cheer: "Mission complete", file: "airplanes-certificate.png", listen: "Fasten your seatbelts…", beats: ["3", "2", "1!"], c1: "Mission: Airplanes in 30 Days", c2: "Junior Pilot Wings", c3: "This certifies that", c4: "completed all 30 days of flight and discovered the history", c5: "of airplanes and the secrets that make them fly!", c6: "Date", c7: "Flight School Captain", s1: "Mission", s2: "complete", lab: {} },
    es: { title: "El avión en 30 días", sub: "Un cuentito, curiosidades, un experimento y una actividad cada día.", who: "piloto junior", Who: "Piloto Junior", file: "certificado-avion.png", listen: "Abróchense los cinturones…", beats: ["3", "2", "¡1!"], c1: "Misión: el avión en 30 días", c2: "Alas de Piloto Junior", c3: "Certificamos que", c4: "completó los 30 días de vuelo y descubrió la historia", c5: "de los aviones y los secretos que los hacen volar!", c6: "Fecha", c7: "Comandante de la Escuela de Vuelo", s1: "Misión", s2: "cumplida", lab: {} },
  },
  days: [...require("./aviao-1.js"), ...require("./aviao-2.js"), ...require("./aviao-3.js")],
};
