# PROJECT BRIEF — 3D PRINTING LANDING PAGE (HIGH-TECH STYLE)

ROLE  
Senior frontend engineer & creative technologist

GOAL  
Design and implement a high-tech, futuristic landing page for a professional 3D printing studio.

IMPORTANT RULE  
All instructions in this document are in English.  
ALL visible text on the website MUST be in Russian.  
The final generated website must be entirely Russian.

---

# DESIGN REASONING CONSTRAINTS (for GPT-5.4 Extra Think)

Before generating final code, internally reason about the design:

1. Define a **visual system** first: layout, typography, color hierarchy, grid, spacing.
2. Determine **interaction philosophy**: hover states, scrolling animations, subtle reveal effects.
3. Decide on **section rhythm**: asymmetric layouts, visual density, content blocks.
4. Use **high-tech / futuristic industrial cues**, not editorial newspaper or magazine style.
5. Plan **light and dark theme** with toggle button in navbar.
6. Accentuate highlights in **blue spectrum**, optionally with small neon green contrast.
7. Ensure **all elements feel intentional**, avoid template layouts or SaaS clichés.
8. Split final content into clearly defined sections, with all text in Russian.

---

# COLOR SYSTEM

Primary: Carbon / Dark Gray `#0D0D0D`  
Background Light Theme: Soft White `#F5F5F5`  
Background Dark Theme: Black `#0A0A0A`  
Accent Blue: Neon Blue `#1E90FF`  
Optional Accent Green: Neon Green `#2EFFC8`  
Muted: Alloy Gray `#A8A49C`

The color palette must support **dark/light toggle**.

---

# TYPOGRAPHY

Display font: Playfair Display (for hero)  
UI / Body font: DM Mono  
Quotes / Accent: Fraunces Italic  
Labels / Microcopy: ALL CAPS, letter spacing 0.4em

---

# PAGE STRUCTURE

1. Navbar with **theme toggle button**
2. Hero section — typography + 3D printing visual
3. Animated ticker — tech phrases
4. Projects / prototypes grid — asymmetric
5. Philosophy / statement section
6. Process / production pipeline
7. Materials section
8. Contact / file upload CTA
9. Footer

---

# INTERACTIONS

• Subtle hover states on buttons and project cards  
• Reveal animations on scroll  
• Marquee ticker loop  
• Theme toggle switches colors, backgrounds, and accent colors  
• Smooth transitions for all dynamic elements

---

# HERO VISUAL

• Large tech-style typography on left  
• Futuristic 3D printing visual on right  
• Layered / metallic / glowing details to emphasize high-tech  
• Main headline in Russian:

МЫ СОЗДАЕМ  
ИДЕИ  
ПО СЛОЯМ

Subheadline in Russian:

От прототипа до готовой детали

Small technical label:

ЛАБОРАТОРИЯ 3D ПЕЧАТИ

---

# WEBSITE COPY (ALL RUSSIAN)

NAVIGATION

Услуги  
Материалы  
Проекты  
Процесс  
Контакты

Theme toggle: Светлая / Тёмная

Status badge:  
ФЕРМА ПРИНТЕРОВ АКТИВНА

---

TICKER TEXT

3D ПЕЧАТЬ ✦ ПРОТОТИПИРОВАНИЕ ✦ ИНЖЕНЕРНЫЕ ДЕТАЛИ ✦ КАСТОМНЫЕ ИЗДЕЛИЯ ✦ FORGELAYER

---

PROJECT TITLES

Крепление для дрона  
Архитектурная модель  
Механическая шестерня  
Прототип корпуса устройства

Metadata example:  
PETG — 2025

---

PHILOSOPHY QUOTE

Идея становится реальностью, когда первый слой касается стола принтера.

---

DISCIPLINES LIST

Прототипирование  
Разработка изделий  
Кастомные детали  
Инженерные модели  
Мелкосерийное производство

---

PROCESS

01 — ЗАГРУЗКА  
Клиент загружает 3D модель или описывает задачу

02 — ОПТИМИЗАЦИЯ  
Мы анализируем модель, выбираем материал и параметры печати

03 — ПЕЧАТЬ  
Деталь производится на ферме 3D принтеров

04 — ФИНИШ  
Удаление поддержек, обработка и подготовка к передаче клиенту

---

MATERIALS SECTION TITLE

БИБЛИОТЕКА МАТЕРИАЛОВ

Materials list:

PLA  
PETG  
ABS  
TPU  
RESIN  
NYLON  
CARBON

---

CONTACT SECTION

Heading:

Начать печать

Form fields:

Имя  
Email  
Описание проекта  
Загрузить файл

Submit button:

ОТПРАВИТЬ МОДЕЛЬ

---

FOOTER

Column 1:

FORGELAYER  
Студия цифрового производства

Column 2:

Услуги  
Проекты  
Материалы  
Процесс  
Контакты

Column 3 status:

ФЕРМА ПРИНТЕРОВ АКТИВНА

Bottom text:

© 2026 FORGELAYER — ВСЕ ПРАВА ЗАЩИЩЕНЫ

---

# TECH STACK REQUIREMENTS

React  
Tailwind CSS  
GSAP + ScrollTrigger  
Lucide React

Animations triggered **only when in viewport**.

---

# FINAL DIRECTIVE

1. The website must communicate the narrative: IDEA → MODEL → MATERIAL → OBJECT
2. Layout must be **high-tech, futuristic, industrial**, not editorial
3. Include **light and dark theme** with toggle in navbar
4. Use **accent blue with optional neon green highlights**
5. All text **strictly in Russian**
6. Avoid templates and SaaS clichés.
