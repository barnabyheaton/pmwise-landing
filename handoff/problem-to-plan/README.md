# Problem to Plan — marketing assets handoff

Raw material for showing the actual product on the landing and pricing pages.
No design, no marketing copy — that's yours. Captured 7 August 2026 against
`pmwise-app` @ `ee158bc`.

```
demo-scenario.md        The one seeded project behind every asset, and how it was produced.
                        READ THE "HOW THIS WAS PRODUCED" SECTION — there is one caveat
                        about the AI-written prose that affects what you can claim.
product-description.md  What Problem to Plan does, the steps with their exact UI names,
                        inputs, outputs, timings, exactly where the AI is, and the limits.
glossary.md             Every user-facing noun with the definition the product means,
                        plus where the UI contradicts itself and where the site invents words.
screenshots.md          One line per image: what it shows, which step, whether it's final.
screenshots/            35 desktop + mobile PNGs, 2× DPR, numbered in journey order.
screenshots/dark/       8 key screens in dark mode.
sample-solution.md      The real export, straight from the product, unedited.
sample-solution.docx    The same export as Word — the product emits both.
pricing-questions.md    The two pricing answers.
```

## The four things you should read before designing anything

1. **The AI prose in the screenshots is representative, not a live model run.** The screens,
   the structure and the behaviour are entirely real; the words in AI-generated fields were
   hand-written because this sandbox has no API key. Details in `demo-scenario.md`. Don't
   caption any of it "actual output" without re-shooting against a live deployment.
2. **The app is teal; the brand is green.** Every screenshot shows a teal accent, not
   `#58CC03`/`#367E02`. Decide before launch whether the app changes or the site accepts it.
3. **There is no plan export.** The brief asked for the finished plan as a real user gets it.
   A real user gets the *Solution* document (included here). The Plan itself lives in the app
   and cannot be exported in any format.
4. **If you use one image, use `26-plan-traceability-desktop.png`** — a line item selected,
   showing `TRACES TO: Problem → IRP-001 → Solution → Unified referral intake register` with
   its rolled cost. That single frame is the product's whole claim, happening.

## Things we'd like a decision on

- **Light or dark?** Your `CLAUDE.md` makes dark the default for app UI. The app ships a
  System toggle and defaults to neither. Both sets are here.
- **Over or under budget?** The demo plan is $325,540 against a $180,000 ceiling. We think
  over-budget is the more honest and more interesting image; it's your call, and we can re-run.
- **Feature the IR Matrix?** It's distinctive but sparse with one IRP. Say the word and we'll
  seed six to eight IRPs and re-shoot it properly rather than crop around the emptiness.
