# PMWise — Project Guidelines

## Accessibility — WCAG 2.2 AA (foundational, non-negotiable)

Everything we build must meet **WCAG 2.2 Level AA as a minimum**. This is a
hard requirement, not an aspiration. Treat an accessibility failure the same
as a broken build. When a design or instruction conflicts with AA, AA wins —
raise the conflict rather than shipping the violation.

Concretely, every UI change must satisfy:

- **Contrast** — Text contrast ≥ 4.5:1 (≥ 3:1 for large text ≥ 24px or 18.66px
  bold). Non-text UI (icons, borders, focus indicators, form controls) ≥ 3:1.
  - The brand magenta `#EC003F` measures 4.53:1 on white — it passes for text
    by a hair, so prefer `#AE0933` (600, 7.27:1) or `#880727` (700, 9.97:1) for
    text and links on light surfaces.
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
- **Tone** — Honest, personal, plain-spoken, anti-jargon. ⚠️ Do NOT use
  "built in the open" — Barnaby finds it jarring (24 Sep 2026). Never mention any
  work Barnaby does alongside PMWISE. Made in Cygnet, on Melukerdee Country
  (lutruwita/Tasmania); the footer carries the Acknowledgement of Country. No hype, no guarantees — "just the method,
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

## Brand — PMWise magenta (settled — do not change)

⚠️ **The brand colour is magenta `#EC003F`, set 4 July 2026 after a long process, and
Barnaby confirmed on 23 September 2026 that it must not change.** Earlier versions of
this file described a green palette (`#58CC03`) — that is superseded. The tokens live in
`tailwind.config.js` as `brand-*`; use them, never raw hex, and never Tailwind's own
reds/pinks.

- **Palette** — dark `#1F2937` · white `#FFFFFF` · primary/500 `#EC003F`
  - 800 `#61051C` · 700 `#880727` · 600 `#AE0933` · 500 `#EC003F`
  - 400 `#F42A5C` · 300 `#F65A81` · 200 `#F98BA6` · 100 `#FCC0CF` · 50 `#FEE7ED`
- **Measured contrast** (WCAG, recompute if a token changes):
  - on white: 500 4.53 · 600 7.27 · 700 9.97 · 800 13.58
  - on dark `#1F2937`: 200 6.48 · 300 4.68 · 400 3.73 (large text only) ·
    500 3.24 (large text / non-text only)
  - white text on 500 fill: 4.53
- **Token usage** — `dark`, `white` and the 50 tint cover most surfaces; use `dark`
  with opacity (e.g. `dark/75`) for secondary text, not ad-hoc greys.
- **Buttons** — primary: bg 700, white text, hover 800. On dark surfaces: bg 500,
  white text, hover 600.
- **Focus** — the global ring is 800 (13.58:1 on white) but **1.08:1 on dark**, so any
  dark or 500-filled section must carry the `on-dark` class, which turns it white.
- **Logo** — `app/pmwise_icon_color.png`. Don't rotate, distort, recolour, or add
  effects to the logo.
- **Status pills, badges, legends** — the meaning is in the word, never the colour
  alone (1.4.1).

## Stack notes

- Next.js (App Router) + Tailwind. Define brand colours as Tailwind theme
  tokens so there's a single source of truth; prefer them over inline hex.
- `app/layout.jsx` owns the single `<html>`/`<body>` and the `next/font`
  setup. Page components must **not** render their own `<html>`/`<body>`.
