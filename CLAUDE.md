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

## Voice & messaging

- **Tagline (organising idea)** — **"Enterprise capable, individual
  accessible."** This is the spine of the story: it resolves the core tension
  the product addresses (industrial-grade project rigour vs. a real person just
  trying to change something in their life). Lead with it; let page structure
  echo the two halves.
- **Positioning** — Benefit-driven project management. Keep the *why* at the
  centre; the method exists to serve the outcome, not the schedule/budget.
- **Tone** — Honest, personal, plain-spoken, anti-jargon. Built in the open
  from the Huon Valley, Tasmania. No hype, no guarantees — "just the method,
  the journey, and the proof as it comes." Prefer plain words over enterprise
  ceremony, even when describing enterprise-grade capability.
- **Recurring proof points** — 70 years of project best practice; ~70% of
  projects miss what they set out to do; "a whole team of delivery specialists
  in one person's hands"; "the issues you most want to avoid are usually
  exactly where your greatest value is hiding."

## Typography

Wired via `next/font/google` in `app/layout.jsx`, exposed as Tailwind tokens
(`font-display`, `font-body`) in `tailwind.config.js`.

- **Display / headings / UI** — **Bricolage Grotesque** (`font-display`).
  Weights 400–800. Use for headings, eyebrows, labels, buttons, wordmark, and
  large numeric moments (e.g. the "70%"). Tighten tracking on big headings
  (~ -0.02em to -0.03em).
- **Body / prose** — **Newsreader** (`font-body`, serif, incl. italic). The
  default body font — suits the personal, essay-driven voice. Use for
  paragraphs and long-form story copy.
- Don't introduce additional families without updating this file and the
  `next/font` setup. If a brand font is adopted later, replace here first.

## Brand — PMWise design kit

Source of truth: `DESIGN.md` (Anymark brand kit). Key rules:

- **Palette** — Use brand tokens, not Tailwind defaults.
  - primary `#58CC03` · dark `#1F2937` · white `#FFFFFF`
  - color-800 `#214B01` · color-700 `#367E02` · color-600 `#4CB003`
  - color-500 `#58CC03` · color-400 `#7BFC1D` · color-300 `#98FC4F`
  - color-200 `#B6FD81` · color-100 `#D3FEB4` · color-50 `#F4FEE9`
    (color-50 is the lightest tint — for soft surfaces / eyebrows)
- **Token usage** — Primary tokens (`primary`, `dark`, `white`) should cover
  ~80% of surfaces. Don't reach for ad-hoc greys (`#374151`, `#6b7280`, etc.)
  or off-brand greens (`#f0fdf4`); use `dark` (with opacity, e.g. `dark/70`)
  and the palette shades.
- **Buttons** — primary: bg `color-700`, text white; hover bg `color-800`.
  secondary: white bg, `color-700` text; hover `color-800` text.
- **Primary colour is functional, not decorative** — reserve `#58CC03` for
  CTAs, active states, and brand moments. Don't use it as body/wordmark text
  (also fails contrast — see above). On the `#58CC03` CTA fill, use `dark`
  (`#1F2937`) for text.
- **Bright greens on dark** — `color-400`/`color-300` (`#7BFC1D`/`#98FC4F`)
  are for accents/text on the `dark` (`#1F2937`) surface only, where contrast
  passes. Don't use them on white.
- **Logo** — prefer `pmwise_logo.svg`; `pmwise_logo_white.png` on dark/photo
  backgrounds. Don't rotate, distort, recolour, or add effects to the logo.

## Stack notes

## Two visual modes (decided)

Two coordinated visual directions off the same brand. Pick per medium; where a
surface supports theming, offer both.

### 1B — "Dark Studio" (DEFAULT)
Dark, punchy, high-contrast. For video production + the default theme for
on-screen UI (dashboards, app).
- Surface `#1F2937` · text `#FFFFFF` · secondary `#B6FD81`
- Accents (on dark only) `#7BFC1D`, `#98FC4F`
- Primary CTA `#58CC03` fill w/ `#113301` text, or `#1F2937` chips w/ white text
- Motif: 16px `#58CC03` left accent bar; soft green radial glow; faint icon watermark ~6%.

### 1A — "Light Editorial" (SECONDARY)
Calm, premium. For printed materials/docs + the light-mode option.
- Surface `#FFFFFF` · soft surface `#F4FEE9` · text `#1F2937` · secondary `rgba(31,41,55,0.7)`
- Accents/links (on light) `#367E02`, `#4CB003`
- Primary CTA `#367E02` fill white text; hover `#214B01`

### Dashboard / app UI theming rule
Default to 1B (dark); provide a light-mode switch to 1A. Same layout & component
shapes across both — only swap the token set. Never `#58CC03` as text on white
(use `#367E02`+); never `#7BFC1D`/`#98FC4F` on white (dark-surface only).

- Next.js (App Router) + Tailwind. Define brand colours as Tailwind theme
  tokens so there's a single source of truth; prefer them over inline hex.
- `app/layout.jsx` owns the single `<html>`/`<body>` and the `next/font`
  setup. Page components must **not** render their own `<html>`/`<body>`.
