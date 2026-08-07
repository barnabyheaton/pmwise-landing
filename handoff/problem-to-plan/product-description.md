# Problem to Plan — what it actually does

Plain description of the built product as of 7 August 2026 (`pmwise-app` @ `ee158bc`).
No marketing voice — that's your job. Where the product is unfinished this says so.

---

## In about 150 words, as you'd explain it to another engineer

Problem to Plan is a guided chain of screens that turns a paragraph of prose into a costed,
scheduled project plan, keeping a traceable link from every line item back to the sentence that
justified it.

You type a problem in your own words. The system proposes up to five distinct *issues* hiding
inside it. You rank them, reject what doesn't fit, and action one — which opens an **Issue/Reward
Pair (IRP)**: the downside and its inverted upside, each hung off a Risk and a Benefit parent that
plot on a likelihood×impact matrix. You then describe the current and desired states in prose, and
the system extracts measurable baselines and targets from them. From that it drafts a Solution —
approach, rejected alternatives, principles, assumptions — which you name, turning it into a
Project. Eight radar screens then decompose it into deliverables, quality expectations,
integration seams, costs and dates. The final Plan screen renders the whole thing as one tree, with
every node traceable back to the founding problem.

The organising constraint: nothing exists in the plan that can't name what it's for.

---

## The steps, in order, with their exact UI names

Top navigation reads: **Client · Problems · Issues & Rewards · Analysis · Solutions · Projects ·
Plans · Deliveries**. Plans and Deliveries carry a **SOON** badge (see Limits — the Plans badge is
wrong; that area works).

### 1. Problems → "Record a new problem"
- **User does:** types into "Describe the problem in your own words". No structure required.
- **System does:** on "✦ Suggest issues", returns up to five **candidate issues**, each with a
  short heading and a one-or-two sentence statement, presented as "Candidate issues — ranked by
  importance".
- **User decides:** reorders with ↑ ↓ (array order *is* the ranking), rejects any, regenerates a
  single one with "↻ Refresh", then "Action this issue → IRP" on the one to pursue.

### 2. Edit IRP-00n — the Issue/Reward Pair
- **Issue face** — carried over from the actioned candidate.
- **Reward face** — "✦ Suggest rewards" returns **exactly three meaningfully divergent** reward
  directions. The user picks one with "Use this", or refreshes an individual one. This is the
  inversion the product is built around: every issue must have a paired reward.
- **Risk parent** — "✦ Derive risk from issue" drafts a title, a Specific description and one of
  eleven categories.
- **Benefit parent** — "✦ Derive benefit from reward". Its category *inherits the risk's* on the
  grounds that a benefit is the same uncertainty inverted; the UI says so and lets you override.
- **User must decide:** **Impact** and **Likelihood** on both parents. These are required — they
  are the matrix coordinates, and the product refuses to save without them.
- Saves via "Save Issue Reward Pair (IRP)". An IRP with only one face saves as **Draft**.

### 3. Issues & Rewards → the **IR Matrix**
Likelihood × impact on one plane, risk impact running left and benefit impact running right from a
shared centre. Each IRP is one dot; clicking it opens the IRP or its Analysis.

### 4. Analysis
Reached from the Analysis area; multiple IRPs can be ticked and analysed together in one hit
("Analyse selected →") so they share one as-is/to-be context. Five numbered sections:
1. **The issue & reward** (read-only, carried through)
2. **As-is — the situation today** — user-authored prose. "Describe the circumstances today that
   create this issue."
3. **To-be — the reward realised** — user-authored prose.
4. **Metrics — baselines & targets** — "✦ Draw these out from the context" extracts Measurable /
   Resourced / Timely metrics from the two paragraphs, each with a baseline and a target. Rows are
   auto-graded **Gold / Silver / Bronze** by pair completeness.
5. **Stakeholders** — cohort affected (Attributable) and owner (Accountable).

### 5. Solutions → the Solution screen
- **"The Black Box's read of your situation"** — before proposing anything, the system plays the
  user's own as-is and to-be back in its own words, under the headings "AS-IS (AS THE BLACK BOX
  READS IT)" / "TO-BE (…)". Explicitly so the client can check it understood first. "↻ Rethink"
  re-reads.
- **"Derive a solution"** then drafts six fields, each individually re-derivable with "↻ Rethink":
  - **Solution statement** (one sentence)
  - **Approach type** — one of: Build · Change behavior · Redesign process · Acquire · Train ·
    Restructure · Policy change. Change it and re-derive, and the whole draft is rewritten for that
    approach.
  - **What "done" looks like** (plain language)
  - **Why this approach, not another** (alternatives considered)
  - **Design principles & constraints** (non-negotiables)
  - **Assumptions & dependencies** (what must hold true)
- **Working name** + "Save name" — a label so you can find the solution again.
- **"Action this Solution → name a Project"** — the user types a **Project name of one to three
  words** (the UI nudges: "Meaningful, whimsical, inspirational, or an acronym"). Naming it is the
  act that converts the Solution into a Project and assigns the entire chain behind it.

### 6–13. The in-project design sequence
A second-tier tab bar on every project screen: **Solution statement · Scope boundaries ·
Deliverables · Quality · Integrations · Exclusions · Resources · Time · Plan.**

| Step | UI name | User does | System does |
|---|---|---|---|
| 6 | **Solution statement** | Nothing — it is deliberately read-only here, with "← Edit this solution" routing back | Shows the locked statement plus the Benefit measures (gold/silver only) the project will be judged on |
| 7 | **Scope boundaries** | Enters a maximum budget and a completion date (both optional, both "highly recommended") | "Derive boundaries" drafts five fields: Boundaries & constraints · Stakeholders · Exclusions · Assumptions · External dependencies |
| 8 | **Deliverables** | Accepts or changes the domain lens; reorders, edits, adds or excludes deliverables | "Detect domain" proposes a lens from about 75 domain packs (max 3); "Derive" proposes 3–6 deliverables in build sequence; per-deliverable "Derive components & features ↺" breaks each into Components and Features. Every one carries a **traceability** line naming the IRP/metric/Solution element it serves |
| 9 | **Quality** | Accepts or rejects each option; "Adjust"; "+ Add your own" | "Derive quality expectations" runs a two-step Jidoka pass per item: up to three hidden **Telos** attributes, then for each a **Kano triad** — one Must-be (the floor), one Performance (a concrete point on a scale), one Attractive (a delighter). Each option carries its own resource impact in days and class |
| 10 | **Integrations** | Adds own activities | "Derive integrations →" proposes the **connective seams** — approvals, vendor interfaces, handovers, cutovers — that fall between work packages. Each cites what in the captured content implies it. Returning an empty list is explicitly a correct answer |
| 11 | **Exclusions** | Reviews | Derived only, no AI call: the stated exclusions plus everything turned out of scope or declined at Quality, ranked |
| 12 | **Resources** | **Supplies the unit rate for every line** and confirms it | "Suggest resources" proposes lines as *quantity × charging basis* only — it never guesses a rate. Lines sit as "pending confirmation" and contribute $0 until a rate is entered. Running total is shown against the budget ceiling with a within/over verdict |
| 13 | **Time** | Sets start dates and durations, adds milestones, sets working days and holidays | Renders the decomposition Gantt (Days/Weeks/Months/Quarters/Years), rolls dates up, snaps successors to dependencies, and keeps a "What changed" log |
| 14 | **Plan** | Explores; "Turn off" any node to *propose* a change | Renders the whole project as one horizontal tree — Problem → IRP → Solution → Deliverable → Component → Feature — with rolled cost on every node and a traceability panel showing the full "TRACES TO" chain for whatever is selected. Tuning is staged: proposals show what the plan *would* cost, and nothing lands until you accept |

---

## Inputs — what a user has to bring

Just prose. There is no required form, no template, no import.

Minimum to reach a Plan: one paragraph of problem description, one as-is paragraph, one to-be
paragraph, a project name, and — for the plan to show money and dates — unit rates and a schedule.

**Documents:** yes. Every step in the chain carries a "＋ Upload here" panel and a **Document
Radar**. The app has extractors for **PDF** (`unpdf`) and **Word .docx** (`mammoth`), plus plain
text; uploaded documents are read in place and can be attached to an IRP. We did not exercise
document upload in this capture, so we can't vouch for how well it works end to end — treat the
"upload a document" claim as unverified by us.

---

## Outputs — the complete list of artefacts

Inside the app, the chain produces: the **Problem** and its candidate issues; one or more
**IRPs** with **Risk** and **Benefit** parents plotted on the **IR Matrix**; an **As-is/To-be
analysis** with **M-R-T metrics** graded gold/silver/bronze; a **Solution** document (six fields);
a **Project**; **Scope boundaries**; a **Deliverable → Component → Feature** tree; **Quality**
Telos attributes with accepted Kano options; **Integration activities**; a ranked **Exclusions**
list; **Resource lines** with a costed total against budget; a **Gantt** with milestones; and the
**Plan** synthesis.

**Exportable today: one document.** The Solution screen offers **Print / PDF**, **Download .md**
and **Download .docx**. That is the whole export surface.

Both files are in this handoff as `sample-solution.md` / `sample-solution.docx`, straight from the
product with nothing edited. The filename the product generates is derived from the working name
(`three-day-referral-intake.md`). The document contains: the problem in the client's words, each
IRP with its as-is and to-be, the six solution fields, and the benefit measures — and it closes with
*"This is a point-in-time snapshot of the solution as it stood on the date above."*

**What is not exportable: the plan itself.** There is no PDF, Markdown, CSV, Excel or MS-Project
export of the Deliverables, Quality, Resources, Time or Plan screens. Your brief asked for "the
finished plan, exactly as a real user would get it" — a real user today does not get one. They get
the Solution document above, and the Plan lives in the app.

---

## Time — how long a first pass actually takes

For the demo project, from empty database to a full Plan: **eight AI-assisted derivations on the
main spine, plus one per deliverable across three further radars** — 30-odd model calls in total,
each taking roughly 10–20 seconds in normal use.

Realistically, for someone who knows their problem and doesn't agonise:

- **Problem → actioned IRP:** 10–15 minutes.
- **Analysis (the two prose paragraphs):** 20–40 minutes. This is the slowest human step and the
  one that determines the quality of everything downstream.
- **Solution derive + review:** 15–20 minutes.
- **Scope, Deliverables, Quality, Integrations:** 45–90 minutes, mostly reading and accepting.
- **Resources:** the long pole — someone has to supply a rate for **every** line (62 in our demo)
  and confirm each. Budget an hour, more if the rates need looking up.
- **Time:** 30–60 minutes to date and size the deliverables.

**Call it half a day to a full day for a first pass**, of which perhaps 20 minutes is waiting on
the AI and the rest is human judgement. We have not observed a real user do this, so treat these
as engineering estimates, not measurements.

---

## Where the AI is — precisely

**AI-assisted (the system drafts, always editable):** suggest issues · refresh one issue · suggest
three rewards · refresh one reward · derive risk · derive benefit · extract as-is detail · extract
to-be detail · draw out metrics · restate the client's situation · derive the solution (and each of
its six fields individually) · suggest benefit measures · derive scope boundaries · detect domain ·
derive deliverables · derive components & features · derive quality expectations · derive
integration seams · suggest resource lines.

**User-authored, no AI involved:** the problem statement · the as-is paragraph · the to-be
paragraph · the cohort and owner · the working name · the project name · the budget ceiling · the
deadline · every unit rate · every start date and duration · milestones · working days and holidays.

**Where a human must make the call — the product will not proceed without it:**

- **Ranking and rejecting candidate issues**, and choosing which one becomes an IRP.
- **Choosing one of the three rewards.** The system deliberately offers three divergent
  directions and picks none.
- **Impact and Likelihood on the Risk and Benefit parents** — required fields; there is no
  AI-suggested default, because without both a point cannot plot on the matrix.
- **Accept or Reject on every Kano option.** Nothing enters the quality baseline unaccepted.
- **Accept or Discard every integration seam.** Proposed seams are marked "SUGGESTED — NOT YET
  ACCEPTED" and sit awaiting a decision; in our demo all 56 stayed in that state, which is what
  the Integration screenshot shows.
- **A rate on every resource line.** The prompt tells the model in capitals never to estimate a
  rate or a cost, on the grounds that it depends on the client's market and existing arrangements.
  An unrated line stays "pending confirmation" and contributes nothing to the total.
- **Naming the project** — the act that commits a Solution into work.
- **Accepting a tuning proposal** on the Plan. Turning something off only *proposes*; the screen
  shows what the plan would cost if accepted, and nothing lands until you accept.

Two things worth knowing about how the AI is instructed, because they are load-bearing for the
"honest" story the site tells:

1. **Every prompt is prefixed with a ten-point ethics preamble** ("Mode 0"), grounded in
   Australia's AI Ethics Framework (CSIRO Data61, 2019). It states that the AI advises and the
   human decides; that outputs are contestable without argument; that uncertainty must be
   calibrated honestly rather than blanket-hedged; and that legal, regulatory and net-harm
   concerns get surfaced, not gated.
2. **Blank fields are treated as correct.** The metrics prompt forbids inventing a value, cadence
   or trend to fill a field, and says in terms that padding a field to look complete is wrong. The
   grading then marks incomplete pairs Bronze rather than hiding them. Screenshot `10-…` shows this
   happening: three rows have no target because the client's own to-be never gave one.

---

## Limits — what it deliberately doesn't do yet

- **No Do half.** Problem→Plan is the *design* half. **Deliveries** is unbuilt and badged SOON.
  Delegate/Do, progress tracking and the GKB reconciliation are concept, not code.
- **No "Agree".** The canon has the Plan as the terminus the client tunes and then **Agrees**
  (a certification step). Tuning is built; Agree is not.
- **No plan export.** See Outputs.
- **No identity or accounts.** Access is one shared password for the whole deployment — the code
  calls it a "doormat, NOT a login system". There are no users, roles, permissions or audit trail
  in the built app; the licensing and access model is documented but not implemented.
- **No rate limiting on the AI actions.** Open security finding M2 — see `pricing-questions.md`.
- **Sequence gaps.** The step-by-step "Next →" walk stops at Time and does not flow into Plan;
  Plan is reached via the tab bar or the persistent "View current Plan →" link.
- **"Plans" is badged SOON but works.** The `/plans` area is built and functional; the badge is
  stale. **Don't screenshot the badge next to a claim that Plans is live.**
- **Multi-IRP is built but unexercised here.** A Solution can gather several IRPs and several can
  be analysed together; our demo used one, so we can't show you that working.
- **The domain lens is proposal-only.** It layers standard considerations onto the derive. It does
  not bring templates, benchmarks or reference costs.
- **Accessibility is stated but not fully verified.** WCAG 2.2 AA is a hard requirement in this
  codebase and buttons and text inputs were brought to AA on 29 July 2026 with contrast measured.
  Heading structure, form-label association, error announcement, colour-blind-safe status badges
  and the Gantt's screen-reader story are **not yet audited** — tracked as an open thread. Two
  things we noticed while capturing, neither audited formally:
  - Dates render **mm/dd/yyyy** on the Time screen despite `lang="en-AU"` on the document.
  - The Kano tiers and scope tones lean heavily on colour; the Quality screen's "7 of 8 items
    derived" renders in red, which reads as an error rather than a count.
- **The app's accent colour is teal, not the brand green.** Every screenshot here shows teal
  (`teal-700`) as the primary action colour, not `#58CC03`/`#367E02`. If the site puts these
  screenshots next to brand-green CTAs the mismatch will be obvious. Worth a decision before launch.
