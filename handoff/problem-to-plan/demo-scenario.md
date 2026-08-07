# Demo scenario — the seed behind every screenshot and artefact

One project. Every screenshot in `screenshots/` and the artefact in `sample-solution.md`
come from this single run, so the whole set tells one story.

Captured **7 August 2026** against `pmwise-app` at commit `ee158bc` (branch `main`).

---

## The scenario

We used the scenario in your brief, unchanged. It survived contact with the product well —
it has a real constraint set (no new headcount, no system replacement), which is what the
Solution engine needs in order to reject options rather than just list them.

> A 40-person allied-health clinic across two sites (physiotherapy, occupational therapy,
> speech pathology). Referral intake takes a median of 11 days and roughly 30% of referrals
> never reach a first appointment. The clinic wants intake under 3 days without adding admin
> staff, and without replacing the practice management system installed 18 months ago.

**No real clinic, patient or person appears anywhere.** The one invented name is
**Marguerite Ellery, Practice Manager**, entered as the accountable owner on the Analysis
screen. The clinic itself is unnamed — the product never asked for a client name in this flow.

## The exact seed text

This is what was typed into "Describe the problem in your own words" on `/problem/new`.
Everything downstream — the five candidate issues, the risk, the benefit, the solution, the
eight deliverables — was derived from it by the product, not written by us.

> We're a 40-person allied health clinic across two sites — physio, occupational therapy and
> speech pathology. When a GP refers someone to us, it takes about eleven days from the
> referral landing to that person sitting in front of a clinician, and we lose roughly three
> out of ten referrals somewhere in that gap. They either go elsewhere or just give up. The
> referrals arrive every which way — faxed, emailed as PDFs, some through the secure messaging
> system, a few by phone. Reception re-types them into our practice management system by hand.
> If something's missing, a referral without a Medicare number or no indication of urgency, it
> goes into a tray and someone chases the GP practice, which can take days. Nobody owns that
> tray. Then triage: a senior clinician decides urgency and which discipline, but they only get
> to it between clients, so it can sit two or three days. After that we ring the patient to
> book, and half the time we can't reach them first go. I want intake under three days and I
> want to stop losing people. What I can't do is hire more admin staff — we don't have the
> margin. And I don't want to rip out the practice management system, we only put it in
> eighteen months ago.

## What the client typed vs. what the product produced

Only five things in the whole demo were typed by "the client". Everything else on every
screenshot was derived by the product from those five inputs.

| Client typed | Where |
|---|---|
| The problem statement above | `/problem/new` |
| The As-is paragraph (≈190 words) | Analysis, Section 2 |
| The To-be paragraph (≈180 words) | Analysis, Section 3 |
| Cohort + owner (Marguerite Ellery) | Analysis, Section 5 |
| Project name: **Threshold**; solution working name: *Three-day referral intake* | Solution screen |

Client-supplied numbers, which the product deliberately never guesses (see
`product-description.md`, "Where the AI is"):

| Input | Value | Where |
|---|---|---|
| Budget ceiling | **AUD $180,000** | Scope boundaries |
| Deadline | **26 February 2027** | Scope boundaries |
| Unit rates on all 62 resource lines | $65/hr own-team labour · $140/hr technology · $1,900/day bought-in services · $2,500/site facilities | Resources |
| Start date + duration on all 8 deliverables | 1 Sep 2026 → 19 Feb 2027 | Time |

The resulting plan totals **$325,540 against a $180,000 ceiling** — i.e. the demo project is
over budget, and the Plan says so. We left it that way deliberately: the over-budget state is
what makes the Plan's tuning controls ("Turn off", "If accepted") mean anything, and it is a
truthful picture of what a first pass looks like before anything is traded away. If you would
rather show an under-budget plan we can re-run with a higher ceiling — tell us which reads better.

---

## How this was produced — read this before using the screenshots

Two things about the capture environment that you should know, because one of them affects
what "real" means for these images.

**1. It is the real product, driven through its real UI.** We ran `pmwise-app` at
`main`/`ee158bc` as a production build against a local Postgres with all 49 migrations
applied, and drove a real browser (Chromium, 1440×900 and 390×844 at 2× DPR) through the
whole journey with Playwright — typing into the real fields, clicking the real buttons,
following the real navigation. No mock-ups, no devtools edits, no CSS changes, no
screenshot retouching. Every pixel is the app as it is today.

**2. The AI responses are hand-authored, not live model output.** This is the important
caveat. The sandbox we work in has no `ANTHROPIC_API_KEY`, so the app could not reach Claude.
We stood up a local stand-in for the Anthropic endpoint that replays a hand-written reply for
each prompt the app sends.

What that does and does not mean:

- The **prompts** are the product's real prompts, unmodified — the actual system prompts,
  the actual JSON schemas, the actual model (`claude-sonnet-4-6`) requested.
- The **plumbing** is real: same Server Actions, same parsing, same validation, same storage.
  A reply that failed the product's schema or validation was rejected by the product, exactly
  as a bad model response would be.
- The **words** in every AI-derived field were written by us, in the shape and register the
  prompt demands, staying strictly inside what the client's own text supports. Where a prompt
  forbade invention we honoured it — see the Metrics screenshot (`10-…`), where three of the
  eight rows carry an empty target and a Bronze tier precisely because the client's To-be never
  stated a number for them.

So: the screens, the structure, the numbers-handling and the behaviour are the product's.
The prose in the AI-generated fields is representative rather than an actual model run.
**If the site is going to caption any of this as "actual output", re-shoot it against a
deployment with a live API key first.** It should look very similar — but "very similar" is
not "actual", and this is the one claim in the set we cannot stand behind.

Everything needed to reproduce the run is kept alongside this note in the working sandbox
(scenario text, the reply set, the Playwright driver); ask if you want it committed.
