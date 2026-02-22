// Ariana Birthday Site — vanilla JS

const CONFIG = {
  herName: "Ариаша",
  herNameCute: "Арианочка",
  yourName: "Свят❤❤❤", // поменяй на своё имя
  dateLabel: "С Днём Рождения",
};

const compliments = [
  "Ты невероятная — и я каждый день в этом убеждаюсь.",
  "Твоя улыбка делает мой день лучше.",
  "Ты красивая не только внешне, но и душой.",
  "Ты умеешь согревать одним взглядом.",
  "С тобой даже тишина становится уютной.",
  "Ты — моё вдохновение и мотивация.",
  "Ты такая нежная, что хочется беречь тебя всегда.",
  "Ты умеешь делать мир вокруг добрее.",
  "Твои глаза — как маленькое волшебство.",
  "Ты прекрасна в каждом своём настроении.",
  "Ты — самый тёплый человек в моей жизни.",
  "Ты умная, сильная и одновременно очень ласковая.",
  "Мне нравится в тебе всё: от голоса до характера.",
  "Ты — та, рядом с кем хочется становиться лучше.",
  "Ты умеешь любить по-настоящему.",
  "Ты очень стильная и такая «твоя» — особенная.",
  "Твоя забота — это лучший подарок.",
  "Ты — мой дом и моё спокойствие.",
  "С тобой хочется строить планы и мечтать.",
  "Ты умеешь превращать обычное в красивое.",
  "Твои объятия — мой любимый антистресс.",
  "Ты очаровательная, даже когда просто молчишь.",
  "Ты светишься изнутри — это видно всем.",
  "Ты умеешь быть нежной и смелой одновременно.",
  "Ты самая родная.",
  "Ты пахнешь счастьем.",
  "Ты — мой любимый человек.",
  "Ты такая настоящая — за это я тебя обожаю.",
  "Ты достойна всего самого прекрасного.",
  "Ты — чудо, которое случилось со мной.",
  "Твой смех — моя любимая музыка.",
  "Ты делаешь меня счастливым.",
  "Ты очень красивая, особенно когда улыбаешься.",
  "Ты умеешь поддержать так, что становится легче.",
  "Ты — моё «хочу» и моё «люблю».",
  "Ты — нежность в человеческом виде.",
  "Ты такая яркая, что рядом невозможно грустить.",
  "Ты — моя гордость.",
  "Ты — любовь.",
  "Ты умеешь вдохновлять одним сообщением.",
  "Ты прекрасна утром, днём и ночью.",
  "Ты умеешь слушать и слышать — это редкость.",
  "Ты — моя самая тёплая привычка.",
  "Ты украшаешь мой мир каждый день.",
  "Ты самая красивая девочка на свете.",
  "Твои мечты обязательно сбудутся — я в это верю.",
  "Ты умеешь быть мягкой, но сильной — восхищаюсь.",
  "Ты — моё счастье и моё вдохновение.",
  "Ты — как солнце: согреваешь и светишь.",
  "С тобой хочется жить «всю жизнь».",
];

const wishes = [
  "счастья — спокойного, настоящего и твоего",
  "здоровья и энергии на всё, что любишь",
  "много поводов улыбаться каждый день",
  "вдохновения и красивых мечт",
  "тепла рядом — в людях и в событиях",
  "лёгкости в душе и уверенности в себе",
  "удачи во всех начинаниях",
  "любви — нежной, заботливой и взаимной",
  "исполнения самых заветных желаний",
  "приятных сюрпризов и маленьких чудес",
  "уютных вечеров и ярких путешествий",
  "гармонии, спокойствия и радости",
  "веры в себя и своих сил",
  "чтобы тебя всегда ценили и берегли",
  "чтобы всё получалось легко и красиво",
  "чтобы мечты превращались в планы и сбывались",
  "больше фотографий, улыбок и моментов «в сердце»",
  "чтобы каждый день был чуть-чуть лучше предыдущего",
  "чтобы рядом были только искренние люди",
  "чтобы ты всегда чувствовала: тебя любят ♥",
];

const quotes = [
  "Ты — моё счастье. Спасибо тебе за каждый момент рядом.",
  "Пусть твоя жизнь будет такой же красивой, как ты.",
  "Я рядом, даже когда далеко. Всегда сердцем.",
  "Ты достойна самого лучшего — и я буду стараться давать тебе это.",
  "Пусть в твоей душе всегда будет весна 🌷",
  "Люблю тебя сильнее, чем слова умеют говорить.",
  "С тобой я понимаю, что такое настоящее тепло.",
  "Пусть этот день будет самым нежным и запомнится навсегда ✨",
];

const galleryItems = [
  { src: "assets/img/us-1.jpg", cap: "Мы 💗" },
  { src: "assets/img/us-2.jpg", cap: "Любовь" },
  { src: "assets/img/us-3.jpg", cap: "Вместе" },
  { src: "assets/img/card-1.png", cap: "Открытка 1" },
  { src: "assets/img/card-2.png", cap: "Открытка 2" },
  { src: "assets/img/card-3.png", cap: "Открытка 3" },
  { src: "assets/img/card-4.png", cap: "Открытка 4" },
  { src: "assets/img/card-5.png", cap: "Открытка 5" },
  { src: "assets/img/card-6.png", cap: "Открытка 6" },
  { src: "assets/img/card-7.png", cap: "Открытка 7" },
];

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// localStorage иногда может быть выключен (инкогнито/встроенный браузер) —
// тогда доступ к нему кидает исключение и весь JS «умирает».
// Делаем безопасную обёртку.
const storage = (() => {
  try {
    const k = "__ariana_test__";
    localStorage.setItem(k, "1");
    localStorage.removeItem(k);
    return localStorage;
  } catch (e) {
    return {
      getItem: () => null,
      setItem: () => {},
      removeItem: () => {},
    };
  }
})();

function ready(fn) {
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", fn);
  else fn();
}

ready(() => {
  /* ---- Gate (start screen) ---- */
  const gate = $("#gate");
  const openBtn = $("#openBtn");

  function openGate() {
    if (!gate) return;
    gate.hidden = true;
    document.body.style.overflow = "auto";

    const note = $("#autoplayNote");
    if (note) note.hidden = false;

    burstHearts(14);
  }

  if (gate) {
    document.body.style.overflow = "hidden";

    if (openBtn) {
      openBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        openGate();
      });
    }

    // ВАЖНО: на GitHub Pages иногда фон оверлея (.gate__bg) может перехватывать клики.
    // Поэтому открываем, если кликнули в любую область, КРОМЕ самой карточки.
    gate.addEventListener("click", (e) => {
      const clickedInsideCard = e.target && e.target.closest && e.target.closest(".gate__card");
      if (clickedInsideCard) return;
      openGate();
    });
  }

  /* ---- Personalization ---- */
  setText("herNameGate", CONFIG.herName);
  setText("herNameTitle", CONFIG.herName);
  setText("herNameLetter", CONFIG.herNameCute);
  setText("herNameFinal", CONFIG.herName);
  setText("yourName", CONFIG.yourName);
  setText("dateLabel", CONFIG.dateLabel);

  /* ---- Footer year ---- */
  setText("year", String(new Date().getFullYear()));

  /* ---- Music toggle ---- */
  const bgMusic = $("#bgMusic");
  const musicBtn = $("#musicBtn");
  const autoplayNote = $("#autoplayNote");

  let musicOn = storage.getItem("musicOn") === "1";

  async function setMusic(on) {
    musicOn = on;
    storage.setItem("musicOn", on ? "1" : "0");

    if (!bgMusic || !musicBtn) return;

    musicBtn.setAttribute("aria-pressed", String(on));
    musicBtn.textContent = on ? "Выключить музыку" : "Включить музыку";

    if (on) {
      try {
        await bgMusic.play();
        if (autoplayNote) autoplayNote.hidden = true;
      } catch (err) {
        // Autoplay blocked — show note
        if (autoplayNote) autoplayNote.hidden = false;
      }
    } else {
      bgMusic.pause();
    }
  }

  if (musicBtn) musicBtn.addEventListener("click", () => setMusic(!musicOn));

  // пробуем восстановить музыку после первого клика пользователя
  if (musicOn) {
    window.addEventListener(
      "pointerdown",
      () => {
        setMusic(true);
      },
      { once: true }
    );
  }

  /* ---- Voice controls ---- */
  const voice = $("#voice");
  const voicePlayBtn = $("#voicePlayBtn");
  const voiceStopBtn = $("#voiceStopBtn");

  if (voicePlayBtn) {
    voicePlayBtn.addEventListener("click", async () => {
      try {
        if (bgMusic && !bgMusic.paused) bgMusic.pause();
        if (voice) await voice.play();
      } catch (e) {}
    });
  }

  if (voiceStopBtn) {
    voiceStopBtn.addEventListener("click", () => {
      if (voice) voice.pause();
    });
  }

  /* ---- Compliments ---- */
  const complimentText = $("#complimentText");
  const newComplimentBtn = $("#newComplimentBtn");
  const copyComplimentBtn = $("#copyComplimentBtn");

  function showCompliment() {
    if (!complimentText) return;
    complimentText.textContent = pick(compliments);
  }

  if (newComplimentBtn) {
    newComplimentBtn.addEventListener("click", () => {
      showCompliment();
      burstHearts(8);
    });
  }

  if (copyComplimentBtn) {
    copyComplimentBtn.addEventListener("click", async () => {
      const text = (complimentText && complimentText.textContent) || "";
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(text);
        } else {
          // fallback
          window.prompt("Скопируй текст:", text);
        }

        copyComplimentBtn.textContent = "Скопировано ✓";
        setTimeout(() => (copyComplimentBtn.textContent = "Скопировать"), 1200);
      } catch (e) {
        window.prompt("Скопируй текст:", text);
      }
    });
  }

  const list = $("#complimentsList");
  if (list) {
    compliments.forEach((t) => {
      const div = document.createElement("div");
      div.className = "listItem";
      div.textContent = t;
      list.appendChild(div);
    });
  }
  showCompliment();

  /* ---- Wishes / Quotes ---- */
  const wishList = $("#wishList");
  if (wishList) {
    wishes.forEach((t) => {
      const li = document.createElement("li");
      li.textContent = t;
      wishList.appendChild(li);
    });
  }

  const quotesBox = $("#quotes");
  if (quotesBox) {
    quotes.forEach((t) => {
      const q = document.createElement("div");
      q.className = "quote";
      q.textContent = t;
      quotesBox.appendChild(q);
    });
  }

  /* ---- Gallery ---- */
  const galleryGrid = $("#galleryGrid");
  let lightboxIndex = 0;

  function createGallery() {
    if (!galleryGrid) return;
    galleryItems.forEach((it, i) => {
      const btn = document.createElement("button");
      btn.className = "gItem";
      btn.type = "button";
      btn.setAttribute("data-idx", String(i));
      btn.setAttribute("aria-label", "Открыть: " + it.cap);

      const img = document.createElement("img");
      img.src = it.src;
      img.alt = it.cap;
      img.loading = "lazy";
      img.decoding = "async";

      const cap = document.createElement("div");
      cap.className = "gItem__cap";
      cap.textContent = it.cap;

      btn.appendChild(img);
      btn.appendChild(cap);

      // mosaic layout variations
      if (i === 0) btn.style.gridColumn = "span 6";
      if (i === 1) btn.style.gridColumn = "span 6";
      if (i === 3) btn.style.gridColumn = "span 6";
      if (i === 4) btn.style.gridColumn = "span 6";

      btn.addEventListener("click", () => openLightbox(i));
      galleryGrid.appendChild(btn);
    });
  }
  createGallery();

  /* ---- Lightbox ---- */
  const lightbox = $("#lightbox");
  const lightboxImg = $("#lightboxImg");
  const lightboxCaption = $("#lightboxCaption");

  function openLightbox(i) {
    lightboxIndex = i;
    if (!lightbox || !lightboxImg) return;

    const it = galleryItems[i];
    lightboxImg.src = it.src;
    lightboxImg.alt = it.cap;

    if (lightboxCaption) lightboxCaption.textContent = it.cap;

    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    burstHearts(10);
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
  }

  function stepLightbox(dir) {
    const next = (lightboxIndex + dir + galleryItems.length) % galleryItems.length;
    openLightbox(next);
  }

  const lightboxClose = $("#lightboxClose");
  const lightboxPrev = $("#lightboxPrev");
  const lightboxNext = $("#lightboxNext");

  if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);

  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  if (lightboxPrev) lightboxPrev.addEventListener("click", () => stepLightbox(-1));
  if (lightboxNext) lightboxNext.addEventListener("click", () => stepLightbox(1));

  window.addEventListener("keydown", (e) => {
    if (!lightbox || !lightbox.classList.contains("is-open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") stepLightbox(-1);
    if (e.key === "ArrowRight") stepLightbox(1);
  });

  /* Polaroids open lightbox too */
  $$(".polaroid").forEach((p) => {
    p.addEventListener("click", () => {
      const src = p.getAttribute("data-lightbox");
      const idx = galleryItems.findIndex((x) => x.src === src);

      if (idx >= 0) openLightbox(idx);
      else if (src) {
        // fallback: open direct
        galleryItems.unshift({ src, cap: "Фото" });
        openLightbox(0);
      }
    });
  });

  /* ---- Surprise / Hearts ---- */
  const surpriseBtn = $("#surpriseBtn");
  const confettiBtn = $("#confettiBtn");

  function spawnHeart() {
    const el = document.createElement("div");
    el.className = "heart";

    const emojis = ["💗", "💖", "💕", "💞", "💘", "❤️", "✨"];
    el.textContent = pick(emojis);

    const x = Math.random() * 100;
    const s = 0.7 + Math.random() * 1.2;
    const drift = -10 + Math.random() * 20 + "vw";
    const r = -40 + Math.random() * 80 + "deg";
    const dur = 6 + Math.random() * 5 + "s";

    el.style.setProperty("--x", x + "vw");
    el.style.setProperty("--s", s.toFixed(2));
    el.style.setProperty("--drift", drift);
    el.style.setProperty("--r", r);
    el.style.animationDuration = dur;

    el.style.fontSize = 18 + Math.random() * 22 + "px";

    document.body.appendChild(el);
    setTimeout(() => el.remove(), 12000);
  }

  function burstHearts(n = 12) {
    for (let i = 0; i < n; i++) {
      setTimeout(spawnHeart, i * 80);
    }
  }

  if (surpriseBtn) {
    surpriseBtn.addEventListener("click", () => {
      burstHearts(22);
      showCompliment();
      setMusic(true);
    });
  }

  if (confettiBtn) confettiBtn.addEventListener("click", () => burstHearts(24));

  /* little ambient hearts sometimes (not too many) */
  let ambient = 0;
  setInterval(() => {
    if (document.hidden) return;
    ambient++;
    if (ambient % 3 === 0) spawnHeart();
  }, 2500);

  /* Smooth scrolling */
  document.documentElement.style.scrollBehavior = "smooth";
});