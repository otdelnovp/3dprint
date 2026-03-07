const root = document.documentElement;
const body = document.body;
const themeToggle = document.querySelector(".theme-toggle");
const fileInput = document.querySelector("#project-file");
const fileName = document.querySelector(".file-field-name");
const contactForm = document.querySelector(".contact-form");
const feedback = document.querySelector(".form-feedback");
const storageKey = "forgelayer-theme";

body.classList.add("js-enhanced");

const setTheme = (theme) => {
  root.dataset.theme = theme;
  themeToggle?.setAttribute("aria-pressed", String(theme === "dark"));
};

const storedTheme = window.localStorage.getItem(storageKey);
const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)");

if (storedTheme === "light" || storedTheme === "dark") {
  setTheme(storedTheme);
} else {
  setTheme(systemPrefersDark.matches ? "dark" : "light");
}

themeToggle?.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
  setTheme(nextTheme);
  window.localStorage.setItem(storageKey, nextTheme);
});

const syncSystemTheme = (event) => {
  if (!window.localStorage.getItem(storageKey)) {
    setTheme(event.matches ? "dark" : "light");
  }
};

if (typeof systemPrefersDark.addEventListener === "function") {
  systemPrefersDark.addEventListener("change", syncSystemTheme);
} else if (typeof systemPrefersDark.addListener === "function") {
  systemPrefersDark.addListener(syncSystemTheme);
}

const revealNodes = document.querySelectorAll("[data-reveal]");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -40px 0px"
    }
  );

  revealNodes.forEach((node, index) => {
    node.style.transitionDelay = `${Math.min(index * 80, 240)}ms`;
    revealObserver.observe(node);
  });
} else {
  revealNodes.forEach((node) => node.classList.add("is-visible"));
}

fileInput?.addEventListener("change", () => {
  const file = fileInput.files?.[0];
  fileName.textContent = file ? `Файл: ${file.name}` : "Файл не выбран";
});

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  feedback.textContent =
    "Заявка принята. Мы свяжемся с вами после проверки модели и параметров печати.";
});
