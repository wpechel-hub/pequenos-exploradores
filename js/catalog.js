// Catálogo de todas as séries do site.
// ready: true  -> aparece no painel (o conteúdo em /content/<id>.js já existe)
// page         -> página própria (séries antigas); sem page usa /serie?s=<id>
// bonusOf      -> aparece como bônus dentro de outra série
export const CATS = [
  { id: "ciencia", t: { pt: "Espaço e ciência", en: "Space & science", es: "Espacio y ciencia" } },
  { id: "corpo", t: { pt: "Corpo e mente", en: "Body & mind", es: "Cuerpo y mente" } },
  { id: "natureza", t: { pt: "Natureza e planeta", en: "Nature & planet", es: "Naturaleza y planeta" } },
  { id: "historia", t: { pt: "História", en: "History", es: "Historia" } },
  { id: "como", t: { pt: "Como funciona", en: "How it works", es: "Cómo funciona" } },
  { id: "mundo", t: { pt: "Mundo e cultura", en: "World & culture", es: "Mundo y cultura" } },
];

const S = (id, cat, emoji, bg, accent, t, d, extra = {}) => ({ id, cat, emoji, bg, accent, t, d, days: 30, ready: false, ...extra });

export const SERIES = [
  // Espaço e ciência
  S("espaco", "ciencia", "🚀", "#1B1E4B", "#FFC93C", { pt: "30 dias no espaço", en: "30 Days in Space", es: "30 días en el espacio" }, { pt: "Sol, Lua, planetas e buracos negros", en: "The Sun, the Moon, planets and black holes", es: "El Sol, la Luna, planetas y agujeros negros" }, { page: "/espaco", ready: true }),
  S("foguetes", "ciencia", "🛰️", "#20264F", "#8FD3FF", { pt: "Foguetes e viagens espaciais", en: "Rockets & Space Travel", es: "Cohetes y viajes espaciales" }, { pt: "De Sputnik às missões a Marte", en: "From Sputnik to missions to Mars", es: "Del Sputnik a las misiones a Marte" }),
  S("quimica", "ciencia", "🧪", "#2B2D6E", "#7BE0C0", { pt: "Química na cozinha", en: "Kitchen Chemistry", es: "Química en la cocina" }, { pt: "Misturas, reações e cores", en: "Mixtures, reactions and colors", es: "Mezclas, reacciones y colores" }),
  S("matematica", "ciencia", "🔢", "#3A2F7A", "#FFC93C", { pt: "Matemática divertida", en: "Fun Math", es: "Matemática divertida" }, { pt: "Números, formas e truques", en: "Numbers, shapes and tricks", es: "Números, formas y trucos" }),
  // Corpo e mente
  S("corpo", "corpo", "❤️", "#5B1A3A", "#FF6F7F", { pt: "30 dias no corpo humano", en: "30 Days in the Human Body", es: "30 días en el cuerpo humano" }, { pt: "Coração, cérebro, ossos e sentidos", en: "Heart, brain, bones and senses", es: "Corazón, cerebro, huesos y sentidos" }, { page: "/corpo", ready: true }),
  S("bebe", "corpo", "👶", "#7A2A52", "#FF9FB2", { pt: "Bônus: o bebê na barriga", en: "Bonus: The Baby in the Belly", es: "Extra: el bebé en la panza" }, { pt: "16 dias extras dentro do corpo humano", en: "16 extra days inside the human body series", es: "16 días extra dentro del cuerpo humano" }, { page: "/bebe", ready: true, days: 16, bonusOf: "corpo" }),
  S("sentidos", "corpo", "👀", "#6B2350", "#FFC93C", { pt: "Bônus: nossos sentidos", en: "Bonus: Our Senses", es: "Extra: nuestros sentidos" }, { pt: "15 dias extras para ver, ouvir, cheirar, provar e sentir", en: "15 extra days to see, hear, smell, taste and touch", es: "15 días extra para ver, oír, oler, probar y tocar" }, { days: 15, bonusOf: "corpo", ready: true }),
  S("emocoes", "corpo", "💛", "#4A2C6B", "#FFC93C", { pt: "Emoções", en: "Feelings", es: "Emociones" }, { pt: "Medo, raiva, alegria e como lidar", en: "Fear, anger, joy and how to handle them", es: "Miedo, enojo, alegría y cómo manejarlos" }),
  S("alimentacao", "corpo", "🥦", "#24543A", "#FFC93C", { pt: "De onde vem a comida", en: "Where Food Comes From", es: "De dónde viene la comida" }, { pt: "Do campo ao prato", en: "From the farm to your plate", es: "Del campo al plato" }),
  S("esportes", "corpo", "⚽", "#1E4D6B", "#FFC93C", { pt: "Esportes e movimento", en: "Sports & Movement", es: "Deportes y movimiento" }, { pt: "O corpo em ação", en: "The body in action", es: "El cuerpo en acción" }),
  // Natureza e planeta
  S("terra", "natureza", "🌎", "#14466B", "#7BE0C0", { pt: "Nosso planeta Terra", en: "Our Planet Earth", es: "Nuestro planeta Tierra" }, { pt: "Camadas, continentes, oceanos e estações", en: "Layers, continents, oceans and seasons", es: "Capas, continentes, océanos y estaciones" }),
  S("clima", "natureza", "🌦️", "#2A4C7A", "#FFC93C", { pt: "O tempo e o clima", en: "Weather & Climate", es: "El tiempo y el clima" }, { pt: "Chuva, raios, arco-íris e furacões", en: "Rain, lightning, rainbows and hurricanes", es: "Lluvia, rayos, arcoíris y huracanes" }),
  S("vulcoes", "natureza", "🌋", "#5A2418", "#FFB020", { pt: "Vulcões, terremotos e montanhas", en: "Volcanoes, Earthquakes & Mountains", es: "Volcanes, terremotos y montañas" }, { pt: "A Terra que se mexe", en: "The moving Earth", es: "La Tierra que se mueve" }),
  S("mar", "natureza", "🐳", "#0F3D5E", "#5FD3E8", { pt: "O fundo do mar", en: "Under the Sea", es: "El fondo del mar" }, { pt: "Baleias, corais e criaturas misteriosas", en: "Whales, corals and mysterious creatures", es: "Ballenas, corales y criaturas misteriosas" }),
  S("florestas", "natureza", "🌳", "#1F4A2C", "#9BE07B", { pt: "Florestas e plantas", en: "Forests & Plants", es: "Bosques y plantas" }, { pt: "Da semente à Amazônia", en: "From a seed to the Amazon", es: "De la semilla a la Amazonia" }),
  S("insetos", "natureza", "🐝", "#4A3A12", "#FFC93C", { pt: "Insetos e bichinhos", en: "Bugs & Critters", es: "Insectos y bichitos" }, { pt: "Abelhas, formigas, aranhas e mais", en: "Bees, ants, spiders and more", es: "Abejas, hormigas, arañas y más" }),
  S("animais", "natureza", "🦁", "#5A3A14", "#FFC93C", { pt: "Animais do mundo", en: "Animals of the World", es: "Animales del mundo" }, { pt: "Da savana ao polo", en: "From the savanna to the poles", es: "De la sabana a los polos" }),
  S("ciclos", "natureza", "🦋", "#3C2A6B", "#FF9FB2", { pt: "Metamorfoses e ciclos da vida", en: "Life Cycles & Metamorphosis", es: "Metamorfosis y ciclos de vida" }, { pt: "Ovo, lagarta, casulo e borboleta", en: "Egg, caterpillar, chrysalis and butterfly", es: "Huevo, oruga, crisálida y mariposa" }),
  S("planeta", "natureza", "♻️", "#1D5045", "#7BE0C0", { pt: "Cuidando do planeta", en: "Caring for the Planet", es: "Cuidando el planeta" }, { pt: "Água, lixo, energia e natureza", en: "Water, trash, energy and nature", es: "Agua, basura, energía y naturaleza" }),
  // História
  S("mundo", "historia", "🌍", "#3B2A1A", "#FFC93C", { pt: "História do mundo em 30 dias", en: "World History in 30 Days", es: "Historia del mundo en 30 días" }, { pt: "Das cavernas à internet", en: "From caves to the internet", es: "De las cavernas a internet" }, { ready: true }),
  S("brasil", "historia", "🇧🇷", "#0F5132", "#FFD43B", { pt: "História do Brasil", en: "History of Brazil", es: "Historia de Brasil" }, { pt: "Dos povos indígenas até hoje", en: "From Indigenous peoples to today", es: "De los pueblos indígenas a hoy" }),
  S("eua", "historia", "🇺🇸", "#1C2E5C", "#FF6F7F", { pt: "História dos Estados Unidos", en: "History of the United States", es: "Historia de Estados Unidos" }, { pt: "Dos povos nativos até hoje", en: "From Native nations to today", es: "De los pueblos nativos a hoy" }),
  S("antigas", "historia", "🏛️", "#4A3520", "#E8CF8A", { pt: "Civilizações antigas", en: "Ancient Civilizations", es: "Civilizaciones antiguas" }, { pt: "Egito, Grécia, Roma, China, Maias e mais", en: "Egypt, Greece, Rome, China, the Maya and more", es: "Egipto, Grecia, Roma, China, los mayas y más" }),
  S("dinos", "historia", "🦖", "#2E4A1E", "#B6E07B", { pt: "Dinossauros", en: "Dinosaurs", es: "Dinosaurios" }, { pt: "A vida antes de nós", en: "Life before us", es: "La vida antes de nosotros" }),
  S("exploradores", "historia", "🧭", "#1E3A4A", "#FFC93C", { pt: "Grandes exploradores", en: "Great Explorers", es: "Grandes exploradores" }, { pt: "Viagens que mudaram o mapa", en: "Journeys that changed the map", es: "Viajes que cambiaron el mapa" }),
  S("inventores", "historia", "💡", "#3A2E14", "#FFC93C", { pt: "Inventores e invenções", en: "Inventors & Inventions", es: "Inventores e inventos" }, { pt: "Ideias que mudaram o mundo", en: "Ideas that changed the world", es: "Ideas que cambiaron el mundo" }),
  // Como funciona
  S("aviao", "como", "✈️", "#1B3A6B", "#8FD3FF", { pt: "O avião", en: "Airplanes", es: "El avión" }, { pt: "A história e como ele voa", en: "Their history and how they fly", es: "Su historia y cómo vuela" }),
  S("eletricidade", "como", "⚡", "#2A2350", "#FFD43B", { pt: "Eletricidade", en: "Electricity", es: "Electricidad" }, { pt: "Ímãs, pilhas, raios e circuitos", en: "Magnets, batteries, lightning and circuits", es: "Imanes, pilas, rayos y circuitos" }),
  S("tecnologia", "como", "📱", "#1E2E4A", "#7BE0C0", { pt: "Celular, internet e computadores", en: "Phones, Internet & Computers", es: "Celular, internet y computadoras" }, { pt: "Como a tecnologia funciona", en: "How technology works", es: "Cómo funciona la tecnología" }),
  S("transportes", "como", "🚂", "#4A2418", "#FFC93C", { pt: "Carros, trens e navios", en: "Cars, Trains & Ships", es: "Autos, trenes y barcos" }, { pt: "Como as coisas se movem", en: "How things move", es: "Cómo se mueven las cosas" }),
  S("robos", "como", "🤖", "#23305A", "#8FD3FF", { pt: "Robôs e programação", en: "Robots & Coding", es: "Robots y programación" }, { pt: "Lógica e códigos sem computador", en: "Logic and code without a computer", es: "Lógica y código sin computadora" }),
  S("construcoes", "como", "🏗️", "#3A3A44", "#FFB020", { pt: "Pontes, prédios e construções", en: "Bridges, Buildings & Structures", es: "Puentes, edificios y construcciones" }, { pt: "Como as coisas ficam de pé", en: "How things stay standing", es: "Cómo se sostienen las cosas" }),
  // Mundo e cultura
  S("paises", "mundo", "🗺️", "#1E4A5A", "#FFC93C", { pt: "Volta ao mundo", en: "Around the World", es: "La vuelta al mundo" }, { pt: "Um país por dia", en: "One country a day", es: "Un país por día" }),
  S("artistas", "mundo", "🎨", "#4A1E4A", "#FFC93C", { pt: "Grandes artistas", en: "Great Artists", es: "Grandes artistas" }, { pt: "Conheça e pinte igual", en: "Meet them and paint like them", es: "Conócelos y pinta como ellos" }),
  S("musica", "mundo", "🎵", "#2A1E4A", "#FF9FB2", { pt: "Música e instrumentos", en: "Music & Instruments", es: "Música e instrumentos" }, { pt: "Como o som vira música", en: "How sound becomes music", es: "Cómo el sonido se vuelve música" }),
  S("dinheiro", "mundo", "💰", "#1E4A2E", "#FFD43B", { pt: "Dinheiro para crianças", en: "Money for Kids", es: "Dinero para niños" }, { pt: "Ganhar, poupar, gastar e doar", en: "Earn, save, spend and share", es: "Ganar, ahorrar, gastar y compartir" }),
];

export function stitle(s, lang) { return s.t[lang] || s.t.pt; }
export function sdesc(s, lang) { return s.d[lang] || s.d.pt; }
export function href(s, childId) {
  const base = s.page || "/serie";
  const q = new URLSearchParams();
  if (!s.page) q.set("s", s.id);
  if (childId) q.set("c", childId);
  return base + "?" + q.toString();
}
export function readySeries() { return SERIES.filter((s) => s.ready); }
