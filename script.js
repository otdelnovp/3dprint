const root = document.documentElement;
const body = document.body;
const themeToggles = document.querySelectorAll(".theme-toggle");
const menuShell = document.querySelector(".mobile-nav-shell");
const menuToggle = document.querySelector(".menu-toggle");
const menuClose = document.querySelector(".menu-close");
const mobileMenuLayer = document.querySelector("#mobile-menu");
const mobileMenuOverlay = document.querySelector(".mobile-menu-overlay");
const mobileNavLinks = document.querySelectorAll(".mobile-nav a");
const fileInput = document.querySelector("#project-file");
const fileName = document.querySelector(".file-field-name");
const contactForm = document.querySelector(".contact-form");
const feedback = document.querySelector(".form-feedback");
const storageKey = "forgelayer-theme";

body.classList.add("js-enhanced");

const setTheme = (theme) => {
  const nextTheme = theme === "dark" ? "light" : "dark";
  const toggleLabel =
    nextTheme === "light"
      ? "Переключить на светлую тему"
      : "Переключить на тёмную тему";

  root.dataset.theme = theme;
  themeToggles.forEach((toggle) => {
    toggle.setAttribute("aria-pressed", String(theme === "dark"));
    toggle.setAttribute("aria-label", toggleLabel);
    toggle.setAttribute("title", toggleLabel);
  });
};

const storedTheme = window.localStorage.getItem(storageKey);
const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)");

if (storedTheme === "light" || storedTheme === "dark") {
  setTheme(storedTheme);
} else {
  setTheme(systemPrefersDark.matches ? "dark" : "light");
}

themeToggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    window.localStorage.setItem(storageKey, nextTheme);
  });
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

const closeMobileMenu = () => {
  if (!menuShell || !menuToggle) {
    return;
  }

  menuShell.classList.remove("is-open");
  mobileMenuLayer?.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Открыть меню");
  mobileMenuLayer?.setAttribute("aria-hidden", "true");
  mobileMenuLayer?.setAttribute("inert", "");
  body.classList.remove("mobile-menu-open");
};

const openMobileMenu = () => {
  if (!menuShell || !menuToggle) {
    return;
  }

  menuShell.classList.add("is-open");
  mobileMenuLayer?.classList.add("is-open");
  menuToggle.setAttribute("aria-expanded", "true");
  menuToggle.setAttribute("aria-label", "Закрыть меню");
  mobileMenuLayer?.setAttribute("aria-hidden", "false");
  mobileMenuLayer?.removeAttribute("inert");
  body.classList.add("mobile-menu-open");
};

menuToggle?.addEventListener("click", () => {
  if (menuShell?.classList.contains("is-open")) {
    closeMobileMenu();
    return;
  }

  openMobileMenu();
});

mobileNavLinks.forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});

menuClose?.addEventListener("click", closeMobileMenu);

mobileMenuOverlay?.addEventListener("click", closeMobileMenu);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMobileMenu();
  }
});

const mobileMenuBreakpoint = window.matchMedia("(max-width: 920px)");
const syncMobileMenuBreakpoint = (event) => {
  if (!event.matches) {
    closeMobileMenu();
  }
};

if (typeof mobileMenuBreakpoint.addEventListener === "function") {
  mobileMenuBreakpoint.addEventListener("change", syncMobileMenuBreakpoint);
} else if (typeof mobileMenuBreakpoint.addListener === "function") {
  mobileMenuBreakpoint.addListener(syncMobileMenuBreakpoint);
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
