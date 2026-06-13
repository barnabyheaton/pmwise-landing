# PMWise — Project Guidelines

## Accessibility — WCAG 2.2 AA (foundational, non-negotiable)

Everything we build must meet **WCAG 2.2 Level AA as a minimum**. This is a
hard requirement, not an aspiration. Treat an accessibility failure the same
as a broken build. When a design or instruction conflicts with AA, AA wins —
raise the conflict rather than shipping the violation.

Concretely, every UI change must satisfy:

- **Contrast** — Text contrast ≥ 4.5:1 (≥ 3:1 for large text ≥ 24px or 18.66px
  bold). Non-text UI (icons, borders, focus indicators, form controls) ≥ 3:1.
  - The brand green `#58CC03` does **not** pass 4.5:1 on white. For text or
    links on light surfaces use `#367E02` (color-700) or darker. Reserve raw
    `#58CC03` for large brand moments / fills where contrast still passes.
- **Keyboard** — All interactive elements reachable and operable by keyboard,
  in a logical order, with no traps.
- **Focus visible** — A clearly visible focus indicator on every focusable
  element (≥ 3:1 against adjacent colours). Never remove outlines without an
  equivalent replacement. (WCAG 2.2: 2.4.11 Focus Not Obscured, 2.4.13 Focus
  Appearance.)
- **Semantics** — Use real landmarks and semantic HTML (`header`, `nav`,
  `main`, `footer`, headings in order, lists, buttons vs links used correctly).
  One `<h1>` per page; don't skip heading levels.
- **Names & labels** — Every control, link, and image has an accessible name
  (`alt`, `aria-label`, or visible label). Decorative images get `alt=""`.
- **Target size** — Interactive targets ≥ 24×24 CSS px (WCAG 2.2: 2.5.8).
- **Forms** — Inputs have associated `<label>`s, errors are described in text
  (not colour alone), and required/invalid states are programmatically exposed.
- **Colour not sole signal** — Never convey meaning by colour alone.
- **Motion & language** — Respect `prefers-reduced-motion`; set `lang` on
  `<html>`.

Before considering any UI work done, verify contrast and keyboard/focus
behaviour. If something can't meet AA, flag it explicitly instead of shipping.

## Brand — PMWise design kit

Source of truth: `DESIGN.md` (Anymark brand kit). Key rules:

- **Palette** — Use brand tokens, not Tailwind defaults.
  - primary `#58CC03` · dark `#1F2937` · white `#FFFFFF`
  - color-800 `#214B01` · color-700 `#367E02` · color-600 `#4CB003`
  - color-500 `#58CC03` · color-400 `#7BFC1D` · color-300 `#98FC4F`
  - color-200 `#B6FD81` · color-100 `#D3FEB4`
- **Token usage** — Primary tokens (`primary`, `dark`, `white`) should cover
  ~80% of surfaces. Don't reach for ad-hoc greys (`#374151`, `#6b7280`, etc.)
  or off-brand greens (`#f0fdf4`); use `dark` and the palette shades.
- **Buttons** — primary: bg `color-700`, text white; hover bg `color-800`.
  secondary: white bg, `color-700` text; hover `color-800` text.
- **Primary colour is functional, not decorative** — reserve `#58CC03` for
  CTAs, active states, and brand moments. Don't use it as body/wordmark text
  (also fails contrast — see above).
- **Logo** — prefer `pmwise_logo.svg`; `pmwise_logo_white.png` on dark/photo
  backgrounds. Don't rotate, distort, recolour, or add effects to the logo.

## Stack notes

- Next.js (App Router) + Tailwind. Define brand colours as Tailwind theme
  tokens so there's a single source of truth; prefer them over inline hex.
- `app/layout.jsx` owns the single `<html>`/`<body>`. Page components must
  **not** render their own `<html>`/`<body>`.
