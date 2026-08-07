# Screenshots — manifest

All from the one demo project (**Threshold**, the allied-health clinic — see `demo-scenario.md`),
captured 7 August 2026 against `pmwise-app` @ `ee158bc`.

**Format:** PNG, 2× device pixel ratio, viewport only, no browser chrome.
**Desktop:** 1440 × 900. **Mobile:** 390 × 844.
A few files are marked `-fullpage` where the screen is genuinely taller than the fold and the
whole thing is worth seeing; those are still 1440 wide at 2×, just taller.

**Read the "Final?" column before using anything.** And read the AI caveat in `demo-scenario.md`
— the screens are real, the AI-written prose in them is representative rather than a live model run.

---

## Desktop — the journey, in the order a user meets it

| # | File | What it shows | Journey step | Final? |
|---|---|---|---|---|
| 01 | `01-start-a-problem-desktop.png` | The empty Problem screen: one textarea, "Describe the problem in your own words", and "✦ Suggest issues". The entry point. | Entry | **Yes** |
| 02 | `02-problem-stated-desktop.png` | The same screen with the clinic's problem typed in, before anything is derived. | Stating the problem | **Yes** |
| 03 | `03-candidate-issues-desktop.png` | The five candidate issues the product found inside that paragraph, ranked, each with ↑ ↓ / ↻ Refresh / Reject / "Action this issue → IRP". | AI-assisted decomposition | **Yes** |
| 04 | `04-irp-opened-desktop-fullpage.png` | The IRP that opens when a candidate is actioned, still incomplete — the amber "needs its other face" notice is visible. Full page. | The IRP | **Yes** |
| 05 | `05-reward-inversion-desktop.png` | **The inversion.** Three meaningfully divergent reward directions offered for one issue, each with "Use this" / "↻ Refresh". The product proposes three and picks none. | The "why" / benefit definition | **Yes** |
| 06 | `06-risk-benefit-parents-desktop-fullpage.png` | Risk and Benefit parents derived, showing the note that the benefit's category **inherits the risk's** because a benefit is the risk inverted, plus the required Impact/Likelihood selects. Full page. | Intermediate analysis | **Yes** |
| 07 | `07-issue-reward-matrix-desktop.png` | **The IR Matrix** — likelihood × impact, risk impact running left and benefit impact right from a shared centre. Visually distinctive; one of the few non-card screens. | Intermediate analysis | ⚠️ See notes |
| 08 | `08-analysis-queue-desktop.png` | The Analysis queue: IRPs awaiting analysis, with "Select all" / "Analyse selected →" for analysing several against one shared context. | Analysis | **Yes** |
| 09 | `09-as-is-to-be-desktop.png` | The As-is and To-be capture, both filled with the clinic's prose. These are user-authored — no AI. | Stating current/future state | **Yes** |
| 10 | `10-metrics-baselines-targets-desktop.png` | **The honesty shot.** Metrics drawn out of that prose, each row auto-graded Gold/Silver/Bronze. Three rows are **Bronze with an empty target** because the client's own to-be never gave a number for them. The product declines to invent one. | Intermediate analysis | **Yes** |
| 10b | `10-metrics-baselines-targets-desktop-fullpage.png` | Same screen, whole page — all eight metric rows plus the Stakeholders section. | " | **Yes** |
| 11 | `11-solutions-list-desktop.png` | The Solutions list with the unassigned solution and its IRP count. | Navigation | **Yes** |
| 12 | `12-black-box-read-back-desktop.png` | **"The Black Box's read of your situation"** — the product plays the client's own as-is and to-be back in its own words *before* proposing anything, so the client can check it understood. | AI-assisted interrogation | **Yes** |
| 13 | `13-solution-derived-desktop.png` | The derived Solution: statement, approach type (Redesign process), and "What 'done' looks like". Every field individually re-derivable with "↻ Rethink". | The plan being assembled | **Yes** |
| 13b | `13b-solution-alternatives-desktop.png` | **"Why this approach, not another"** — the rejected options with reasons (hiring more admin staff; replacing the practice management system). Argument, not a list. | " | **Yes** |
| 14 | `14-name-the-project-desktop.png` | "Action this Solution → name a Project", with the 1–3 word constraint and the nudge to pick something meaningful. Naming is the commitment act. | Commitment | **Yes** |
| 15 | `15-solution-statement-locked-desktop-fullpage.png` | The locked Solution statement at the head of the project, plus the Benefit measures the investment will be judged against. Full page. | Project hub | **Yes** |
| 16 | `16-scope-boundaries-desktop-fullpage.png` | Scope boundaries: budget ceiling, deadline, and the five derived fields (boundaries, stakeholders, exclusions, assumptions, external dependencies). Full page. | Scope | **Yes** |
| 17 | `17-domain-lens-desktop.png` | The **domain lens** offer — the product detects this is a clinical service implementation and asks whether to apply that lens. Distinctive; nothing else on the market does this. | Scope | **Yes** |
| 18 | `18-deliverables-desktop-fullpage.png` | The eight deliverables, each with its **traceability line** naming the IRP, metric or principle it serves. Full page. | The plan being assembled | **Yes** |
| 19 | `19-deliverable-breakdown-desktop.png` | One deliverable opened into its Components and Features, with MVC and must-have flags. | " | **Yes** |
| 20 | `20-quality-kano-desktop-fullpage.png` | **The Kano triad** — for one Telos attribute, a Must-be floor, a Performance point and an Attractive delighter, each with its own resource impact and Accept/Reject. Full page. | Quality | ⚠️ See notes |
| 21 | `21-integration-seams-desktop.png` | Integration seams — the connective work between deliverables and the outside world (vendor interface, privacy advice, cutover), each marked "SUGGESTED — NOT YET ACCEPTED". | Integration | **Yes** |
| 22 | `22-resources-desktop.png` | Resources: the running total against the budget ceiling, with the **over-budget** verdict, and lines that are "pending confirmation" until the client supplies a rate. | Costing | **Yes** |
| 23 | `23-time-gantt-desktop.png` | The decomposition Gantt at month scale, all eight deliverables bar-charted, with the stated completion milestone. | Scheduling | ⚠️ See notes |
| 24 | `24-plan-abovefold-desktop.png` | **The money shot, above the fold.** The Plan: Problem → IRP-001 → Solution → the eight deliverables, each with its rolled cost and a "Turn off" tuning control. | The finished plan | **Yes** |
| 25 | `25-plan-expanded-desktop.png` | The same Plan with "Expand all" — the tree down through Components and Features. | " | ⚠️ See notes |
| 26 | `26-plan-traceability-desktop.png` | **The philosophical claim, happening.** A deliverable selected; the inspector shows **TRACES TO: Problem → IRP-001 → Solution → Unified referral intake register**, its rolled cost of $89,460, and the metric it serves. If you use one image on the homepage, use this one. | " | **Yes** |
| 27 | `27-projects-dashboard-desktop.png` | The Projects list showing Threshold in context with its progress. | Dashboard | **Yes** |
| 28 | `28-problems-in-context-desktop.png` | The Problems landing with the clinic's problem now assigned to Threshold — the round trip closed. | Dashboard | **Yes** |

## Mobile (390 × 844)

The three or four that actually matter on a phone. Everything is responsive and readable;
the wide tables and the Gantt are the weak spots.

| File | What it shows | Final? |
|---|---|---|
| `01-start-a-problem-mobile.png` | The entry point. Works well — one field, one button. | **Yes** |
| `15-solution-statement-locked-mobile.png` | The Solution statement and benefit measures. Reads well; long but that's the content. Full page. | **Yes** |
| `18-deliverables-mobile.png` | The deliverables list on a phone. | **Yes** |
| `26-plan-mobile.png` | The Plan on a phone. **Honest warning: this is the weakest screen in the set** — the horizontal tree is a wide canvas and a 390px viewport shows very little of it. Don't put this on the homepage. | ⚠️ **No** |
| `27-projects-dashboard-mobile.png` | The Projects list. | **Yes** |

## Dark mode (`dark/`)

Eight of the key screens again in dark mode, because your `CLAUDE.md` says the app UI should
**default to 1B "Dark Studio"**, and everything above is light. Same viewport and DPR.

`01-start-a-problem-dark.png` · `07-issue-reward-matrix-dark.png` ·
`15-solution-statement-locked-dark.png` · `18-deliverables-dark.png` ·
`20-quality-kano-dark.png` · `22-resources-dark.png` · `23-time-gantt-dark.png` ·
`24-plan-abovefold-dark.png`

The app's actual default is neither — it ships a **System** toggle, so a visitor sees whichever
their OS prefers. Someone needs to decide whether the site shows light, dark, or both.

---

## The two flags you asked about

### Screens that are not final and will change

- **`24`, `25`, `26` — the Plan.** The most likely of the set to move. Tuning is built and works
  (turning something off *proposes* a change and shows what the plan would cost), but the
  **"Agree"** step that the canon has as the terminus — where the client certifies the plan —
  **is not built yet**. When it lands, this screen gains a significant new element. Anything
  shipped now is a snapshot of a screen mid-build.
- **`20` — Quality.** The Quality Radar is documented as Telos → Kano Triad → **Goodhart**. Only
  the first two stages are visible in the built app. The third will presumably add to this screen.
- **`23` — Time.** The Gantt has open work around dependency lines and effort flow, and the date
  formatting bug below needs fixing before this is a hero image.
- **`07` — the IR Matrix.** Functional and distinctive, but sparse with a single IRP. It is
  designed for a board of many IRPs, and with one dot it under-sells itself. **If you want to
  feature the matrix, tell us and we'll seed a project with six or eight IRPs and re-shoot** —
  that's the honest way to make it look like it's meant to look, rather than cropping.

### Screens we'd be uncomfortable seeing on the homepage as-is

Said plainly rather than tidied for the capture, as you asked:

1. **`26-plan-mobile.png`** — the Plan on a phone barely works. Not a crop problem; the
   horizontal-tree layout doesn't have a mobile story yet.
2. **`23-time-gantt-desktop.png`** — dates render **mm/dd/yyyy** despite `lang="en-AU"` on the
   document. An Australian product showing American dates on its scheduling screen is the kind of
   detail a sceptical visitor notices. Cheap to fix; please don't ship this shot until it is.
3. **`20-quality-kano-desktop-fullpage.png`** — shows "**7 of 8 items derived**" in red. That is
   an accurate count, not an error, but it renders exactly like an error state. Also relevant to
   your accessibility standard: it leans on colour to carry meaning.
4. **`22-resources-desktop.png`** — honest but unflattering: the plan is **$325,540 against a
   $180,000 ceiling**. We think the over-budget state is the more interesting image (it is what
   the tuning controls exist for, and it is the product telling the truth rather than flattering
   the client) but it is a choice, and it's yours. Say the word and we'll re-run under budget.
5. **`07-issue-reward-matrix-desktop.png`** — see above; sparse with one IRP.

### One more thing, which affects every image

**The app's accent colour is teal, not the brand green.** Every screenshot shows `teal-700` as
the primary action colour. The brand kit says buttons are `#367E02` on light and `#58CC03` for
CTAs. Put these screenshots on a brand-green page and the mismatch is immediate and obvious.
This is a real decision to make before launch — change the app, or accept that the product looks
different from the site — and not something to solve in the layout.
