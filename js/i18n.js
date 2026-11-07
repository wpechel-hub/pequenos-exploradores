// Idiomas do site: português, inglês e espanhol
export const LANGS = [
  ["pt", "Português"],
  ["en", "English"],
  ["es", "Español"],
];

export function getLang() {
  try {
    const q = new URLSearchParams(location.search).get("lang");
    if (q && ["pt", "en", "es"].includes(q)) localStorage.setItem("pe-lang", q);
    const l = q || localStorage.getItem("pe-lang") || (navigator.language || "pt").slice(0, 2).toLowerCase();
    return ["pt", "en", "es"].includes(l) ? l : "pt";
  } catch (e) { return "pt"; }
}

export function setLang(l) {
  try { localStorage.setItem("pe-lang", l); } catch (e) {}
  const u = new URL(location.href);
  u.searchParams.delete("lang");
  location.replace(u.toString());
}

const T = {
pt: {
  "pwa.title": "Instale o app", "pwa.install": "Instalar", "pwa.close": "Fechar",
  "pwa.android": "Coloque o Pequenos Exploradores na tela inicial e abra com um toque.",
  "pwa.ios": "No Safari, toque em Compartilhar (quadrado com seta ↑) e depois em “Adicionar à Tela de Início”.",
  "brand": "Pequenos Exploradores",
  "lang": "Idioma",
  "nav.login": "Entrar", "nav.logout": "Sair", "nav.panel": "Painel",
  "hero.a": "Um dia de cada vez,", "hero.b": "descobrindo o mundo juntos.",
  "hero.lead": "Séries de curiosidades para fazer em família: todo dia uma historinha, curiosidades, um experimento, uma atividade e uma pergunta pra conversar.",
  "s.espaco": "30 dias no espaço", "s.espaco.d": "Sol, Lua, planetas e buracos negros",
  "s.corpo": "30 dias no corpo humano", "s.corpo.d": "Coração, cérebro, ossos e sentidos",
  "s.bebe": "Bônus: o bebê na barriga", "s.bebe.d": "16 dias extras dentro do corpo humano",
  "auth.login": "Entre na sua conta", "auth.signup": "Crie a conta da família",
  "auth.tabLogin": "Entrar", "auth.tabSignup": "Criar conta",
  "auth.email": "Email", "auth.pass": "Senha",
  "auth.adult": "Sou maior de 18 anos. Vou criar perfis para as crianças da minha família.",
  "auth.btnLogin": "Entrar", "auth.btnSignup": "Criar conta",
  "auth.forgot": "Esqueci minha senha", "auth.free": "É grátis.",
  "m.badEmail": "Digite um email válido.", "m.shortPass": "A senha precisa ter pelo menos 6 caracteres.",
  "m.adult": "Confirme que você é maior de 18 anos.", "m.loading": "O site ainda está carregando. Tente de novo.",
  "m.created": "Conta criada! Enviamos um email para {email}. Clique no link dele para ativar a conta (veja também o spam).",
  "m.forgotNeedEmail": "Digite seu email acima e toque de novo em “Esqueci minha senha”.",
  "m.forgotSent": "Se esse email tiver conta, enviamos um link para criar uma nova senha.",
  "m.config": "O site ainda está sendo configurado.",
  "st1.t": "Crie a conta da família", "st1.p": "Um adulto cria a conta com email e senha.",
  "st2.t": "Adicione as crianças", "st2.p": "Cada criança tem o próprio progresso. Use só o primeiro nome ou um apelido.",
  "st3.t": "Um dia por noite", "st3.p": "Leiam a historinha juntos, façam o experimento e ganhem o certificado no final.",
  "f.privacy": "Privacidade", "f.tag": "Feito com carinho para famílias curiosas",
  "app.kids": "Crianças", "app.kidName": "Nome da criança", "app.kidPh": "Primeiro nome ou apelido",
  "app.add": "Adicionar", "app.noKids": "Adicione a primeira criança para começar.",
  "app.seriesOf": "Séries de {name}", "app.start": "Começar", "app.continue": "Continuar", "app.done": "Completo! 🏅",
  "app.days": "dias", "app.of": "de", "app.bonus": "Bônus",
  "app.rename": "Renomear", "app.delete": "Apagar", "app.renamePrompt": "Novo nome:",
  "app.confirmDelete": "Apagar {name} e todo o progresso? Isso não pode ser desfeito.",
  "app.account": "Conta", "app.deleteAccount": "Apagar minha conta",
  "app.confirmAccount": "Apagar a sua conta, todas as crianças e todo o progresso? Isso não pode ser desfeito.",
  "app.limit": "Limite de 10 crianças por conta.", "app.saveErr": "Não consegui salvar. Verifique a internet.",
  "rs.title": "Criar uma nova senha", "rs.new": "Nova senha", "rs.save": "Salvar senha",
  "rs.ok": "Senha alterada! Entrando…", "rs.invalid": "Este link expirou. Peça um novo em “Esqueci minha senha”.",
  "e.invalidLogin": "Email ou senha incorretos.",
  "e.notConfirmed": "Confirme seu email antes de entrar. Procure a mensagem na sua caixa de entrada (e no spam).",
  "e.exists": "Esse email já tem uma conta. Tente entrar.",
  "e.weak": "A senha precisa ter pelo menos 6 caracteres.",
  "e.badEmail": "Esse email não parece válido.",
  "e.rate": "Muitas tentativas seguidas. Espere um minutinho e tente de novo.",
  "e.network": "Sem conexão. Verifique a internet e tente de novo.",
  "e.same": "A nova senha precisa ser diferente da antiga.",
  "e.generic": "Algo deu errado. Tente de novo.",
},
en: {
  "pwa.title": "Install the app", "pwa.install": "Install", "pwa.close": "Close",
  "pwa.android": "Put Little Explorers on your home screen and open it with one tap.",
  "pwa.ios": "In Safari, tap Share (the square with an ↑ arrow), then “Add to Home Screen”.",
  "brand": "Little Explorers",
  "lang": "Language",
  "nav.login": "Log in", "nav.logout": "Log out", "nav.panel": "Dashboard",
  "hero.a": "One day at a time,", "hero.b": "discovering the world together.",
  "hero.lead": "Fun-fact series for families to do together: every day a short story, fun facts, an experiment, an activity and a question to talk about.",
  "s.espaco": "30 Days in Space", "s.espaco.d": "The Sun, the Moon, planets and black holes",
  "s.corpo": "30 Days in the Human Body", "s.corpo.d": "Heart, brain, bones and senses",
  "s.bebe": "Bonus: The Baby in the Belly", "s.bebe.d": "16 extra days inside the human body series",
  "auth.login": "Log in to your account", "auth.signup": "Create your family account",
  "auth.tabLogin": "Log in", "auth.tabSignup": "Sign up",
  "auth.email": "Email", "auth.pass": "Password",
  "auth.adult": "I'm 18 or older. I'll create profiles for the kids in my family.",
  "auth.btnLogin": "Log in", "auth.btnSignup": "Create account",
  "auth.forgot": "Forgot my password", "auth.free": "It's free.",
  "m.badEmail": "Enter a valid email.", "m.shortPass": "Your password needs at least 6 characters.",
  "m.adult": "Please confirm you're 18 or older.", "m.loading": "The site is still loading. Please try again.",
  "m.created": "Account created! We sent an email to {email}. Click the link in it to activate your account (check spam too).",
  "m.forgotNeedEmail": "Type your email above and tap “Forgot my password” again.",
  "m.forgotSent": "If that email has an account, we sent a link to create a new password.",
  "m.config": "The site is still being set up.",
  "st1.t": "Create a family account", "st1.p": "A grown-up creates the account with an email and password.",
  "st2.t": "Add your kids", "st2.p": "Each child has their own progress. Use just a first name or a nickname.",
  "st3.t": "One day each night", "st3.p": "Read the story together, do the experiment and earn a certificate at the end.",
  "f.privacy": "Privacy", "f.tag": "Made with love for curious families",
  "app.kids": "Kids", "app.kidName": "Child's name", "app.kidPh": "First name or nickname",
  "app.add": "Add", "app.noKids": "Add your first child to get started.",
  "app.seriesOf": "{name}'s series", "app.start": "Start", "app.continue": "Continue", "app.done": "Complete! 🏅",
  "app.days": "days", "app.of": "of", "app.bonus": "Bonus",
  "app.rename": "Rename", "app.delete": "Delete", "app.renamePrompt": "New name:",
  "app.confirmDelete": "Delete {name} and all their progress? This can't be undone.",
  "app.account": "Account", "app.deleteAccount": "Delete my account",
  "app.confirmAccount": "Delete your account, all kids and all progress? This can't be undone.",
  "app.limit": "Limit of 10 kids per account.", "app.saveErr": "Couldn't save. Check your internet connection.",
  "rs.title": "Create a new password", "rs.new": "New password", "rs.save": "Save password",
  "rs.ok": "Password changed! Logging you in…", "rs.invalid": "This link has expired. Request a new one with “Forgot my password”.",
  "e.invalidLogin": "Incorrect email or password.",
  "e.notConfirmed": "Please confirm your email before logging in. Look for the message in your inbox (and spam).",
  "e.exists": "That email already has an account. Try logging in.",
  "e.weak": "Your password needs at least 6 characters.",
  "e.badEmail": "That email doesn't look valid.",
  "e.rate": "Too many attempts in a row. Wait a minute and try again.",
  "e.network": "No connection. Check your internet and try again.",
  "e.same": "The new password must be different from the old one.",
  "e.generic": "Something went wrong. Please try again.",
},
es: {
  "pwa.title": "Instala la app", "pwa.install": "Instalar", "pwa.close": "Cerrar",
  "pwa.android": "Pon Pequeños Exploradores en tu pantalla de inicio y ábrelo con un toque.",
  "pwa.ios": "En Safari, toca Compartir (el cuadrado con la flecha ↑) y luego “Agregar a inicio”.",
  "brand": "Pequeños Exploradores",
  "lang": "Idioma",
  "nav.login": "Entrar", "nav.logout": "Salir", "nav.panel": "Panel",
  "hero.a": "Un día a la vez,", "hero.b": "descubriendo el mundo juntos.",
  "hero.lead": "Series de curiosidades para hacer en familia: cada día un cuentito, curiosidades, un experimento, una actividad y una pregunta para conversar.",
  "s.espaco": "30 días en el espacio", "s.espaco.d": "El Sol, la Luna, planetas y agujeros negros",
  "s.corpo": "30 días en el cuerpo humano", "s.corpo.d": "Corazón, cerebro, huesos y sentidos",
  "s.bebe": "Extra: el bebé en la panza", "s.bebe.d": "16 días extra dentro del cuerpo humano",
  "auth.login": "Entra a tu cuenta", "auth.signup": "Crea la cuenta de la familia",
  "auth.tabLogin": "Entrar", "auth.tabSignup": "Crear cuenta",
  "auth.email": "Correo", "auth.pass": "Contraseña",
  "auth.adult": "Soy mayor de 18 años. Voy a crear perfiles para los niños de mi familia.",
  "auth.btnLogin": "Entrar", "auth.btnSignup": "Crear cuenta",
  "auth.forgot": "Olvidé mi contraseña", "auth.free": "Es gratis.",
  "m.badEmail": "Escribe un correo válido.", "m.shortPass": "La contraseña necesita al menos 6 caracteres.",
  "m.adult": "Confirma que eres mayor de 18 años.", "m.loading": "El sitio todavía está cargando. Inténtalo de nuevo.",
  "m.created": "¡Cuenta creada! Enviamos un correo a {email}. Haz clic en el enlace para activar tu cuenta (revisa también el spam).",
  "m.forgotNeedEmail": "Escribe tu correo arriba y toca otra vez “Olvidé mi contraseña”.",
  "m.forgotSent": "Si ese correo tiene cuenta, enviamos un enlace para crear una contraseña nueva.",
  "m.config": "El sitio todavía se está configurando.",
  "st1.t": "Crea la cuenta de la familia", "st1.p": "Un adulto crea la cuenta con correo y contraseña.",
  "st2.t": "Agrega a los niños", "st2.p": "Cada niño tiene su propio progreso. Usa solo el primer nombre o un apodo.",
  "st3.t": "Un día cada noche", "st3.p": "Lean juntos el cuentito, hagan el experimento y ganen el certificado al final.",
  "f.privacy": "Privacidad", "f.tag": "Hecho con cariño para familias curiosas",
  "app.kids": "Niños", "app.kidName": "Nombre del niño o la niña", "app.kidPh": "Primer nombre o apodo",
  "app.add": "Agregar", "app.noKids": "Agrega al primer niño o niña para empezar.",
  "app.seriesOf": "Series de {name}", "app.start": "Empezar", "app.continue": "Continuar", "app.done": "¡Completo! 🏅",
  "app.days": "días", "app.of": "de", "app.bonus": "Extra",
  "app.rename": "Cambiar nombre", "app.delete": "Borrar", "app.renamePrompt": "Nuevo nombre:",
  "app.confirmDelete": "¿Borrar a {name} y todo su progreso? No se puede deshacer.",
  "app.account": "Cuenta", "app.deleteAccount": "Borrar mi cuenta",
  "app.confirmAccount": "¿Borrar tu cuenta, todos los niños y todo el progreso? No se puede deshacer.",
  "app.limit": "Límite de 10 niños por cuenta.", "app.saveErr": "No se pudo guardar. Revisa tu conexión.",
  "rs.title": "Crear una contraseña nueva", "rs.new": "Contraseña nueva", "rs.save": "Guardar contraseña",
  "rs.ok": "¡Contraseña cambiada! Entrando…", "rs.invalid": "Este enlace expiró. Pide uno nuevo en “Olvidé mi contraseña”.",
  "e.invalidLogin": "Correo o contraseña incorrectos.",
  "e.notConfirmed": "Confirma tu correo antes de entrar. Busca el mensaje en tu bandeja de entrada (y en spam).",
  "e.exists": "Ese correo ya tiene una cuenta. Intenta entrar.",
  "e.weak": "La contraseña necesita al menos 6 caracteres.",
  "e.badEmail": "Ese correo no parece válido.",
  "e.rate": "Demasiados intentos seguidos. Espera un minuto e inténtalo de nuevo.",
  "e.network": "Sin conexión. Revisa tu internet e inténtalo de nuevo.",
  "e.same": "La contraseña nueva debe ser diferente de la anterior.",
  "e.generic": "Algo salió mal. Inténtalo de nuevo.",
},
};

export const LANG = getLang();

export function t(key, vars) {
  let s = (T[LANG] && T[LANG][key]) ?? T.pt[key] ?? key;
  if (vars) for (const k in vars) s = s.replaceAll("{" + k + "}", vars[k]);
  return s;
}

export function applyI18n(root = document) {
  document.documentElement.lang = LANG === "pt" ? "pt-BR" : LANG;
  root.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
  root.querySelectorAll("[data-i18n-ph]").forEach((el) => { el.placeholder = t(el.dataset.i18nPh); });
}

export function langPicker() {
  const sel = document.createElement("select");
  sel.className = "lang";
  sel.setAttribute("aria-label", t("lang"));
  for (const [code, name] of LANGS) {
    const o = document.createElement("option");
    o.value = code; o.textContent = code.toUpperCase(); o.title = name; o.selected = code === LANG;
    sel.appendChild(o);
  }
  sel.onchange = () => setLang(sel.value);
  return sel;
}

export function errMsg(e) {
  const m = (e && (e.message || e.error_description)) || String(e || "");
  const map = [
    [/invalid login credentials/i, "e.invalidLogin"],
    [/email not confirmed/i, "e.notConfirmed"],
    [/user already registered|already been registered/i, "e.exists"],
    [/password should be at least|weak password/i, "e.weak"],
    [/unable to validate email|invalid email|email address .* is invalid/i, "e.badEmail"],
    [/rate limit|too many requests|security purposes/i, "e.rate"],
    [/network|failed to fetch/i, "e.network"],
    [/same password|different from the old/i, "e.same"],
    [/limite de 10/i, "app.limit"],
  ];
  for (const [re, k] of map) if (re.test(m)) return t(k);
  return t("e.generic");
}
