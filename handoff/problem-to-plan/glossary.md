# Glossary — every user-facing noun, with the definition the product means

Taken from the built UI (`pmwise-app` @ `ee158bc`) and reconciled against the canon
(`pmwise-core/GLOSSARY.md`, `docs/concepts/`). Where the UI and the canon disagree, or the UI
disagrees with itself, it is flagged.

**Use these words on the site.** The list at the bottom records where the site currently
invents its own.

---

## The spine

**Problem** — What the client brings, in their own words, before any structure is imposed.
Unstructured prose. It is the root of the traceability chain: everything downstream must be able to
name the problem it came from. A Problem is *Unassigned* until part of its chain is actioned into a
project, then *Assigned*.

**Candidate issue** — One of up to five distinct issues the system finds inside a Problem. Has a
short heading and a one-or-two sentence statement. Ranked by the user (array order = importance),
individually refreshable, rejectable. A candidate becomes real only when *actioned*.

**Issue** — A downside that has already happened: the problem, the as-is state. Precisely: *what a
Risk becomes once it has manifested.* Not a synonym for "problem" — a Problem contains several
Issues.

**Reward** — The upside face of the same situation. *What a Benefit becomes once it has
manifested.* Every Issue must have a paired Reward; an IRP with only one face saves as **Draft**.

**Issue/Reward Pair (IRP)** — The atomic unit of PMWise. One issue, one reward, bound together,
each hung off a parent (Risk, Benefit). Coded `IRP-001`. **Every unit of work in the plan traces
back through an IRP to a Problem** — this is the product's founding rule, not a convention.

**Risk** — An uncertain future *threat*: something that could happen and would hurt. The parent an
Issue traces back to. Coded `RSK-001`. Carries a category (one of eleven), an **Impact** and a
**Likelihood**.

**Benefit** — A Risk inverted: an unrealised *opportunity*. The parent a Reward traces back to.
Coded `BEN-001`. By default it inherits its Risk's category, on the grounds that both are faces of
the same uncertainty.

**Impact / Likelihood** — The two coordinates that place a Risk or Benefit on the matrix. Both are
required. Risk impact runs Negligible → Catastrophic; benefit impact runs No impact →
Transformative. Likelihood runs Impossible → Certain for both.

**IR Matrix** — Likelihood × impact on one plane, with risk impact running left from centre and
benefit impact running right. Each IRP is one point.

**As-is** — The situation today that creates the issue. User-authored prose. UI label: *"As-is —
the situation today"*.

**To-be** — What things look like once the reward is realised. User-authored prose. UI label:
*"To-be — the reward realised"*.

**Analysis** — The step where as-is and to-be are captured and metrics drawn from them. Several
IRPs can be analysed together so they share one context.

**Solution** — The derived approach that closes the gap between as-is and to-be. Six fields:
statement, approach type, what "done" looks like, why this approach not another, design principles
& constraints, assumptions & dependencies. It is *unassigned* until actioned.

**Approach type** — The kind of solution: Build · Change behavior · Redesign process · Acquire ·
Train · Restructure · Policy change. Changing it and re-deriving rewrites the whole draft for that
approach.

**Project** — What a Solution becomes when it is **named**. Naming is the commitment act: it
assigns the whole chain (Problem, IRPs, Analysis, Solution) behind that name. One to three words.

**Plan** — The terminus. The live synthesis of Scope, Quality, Resources and Time as one
horizontal tree, every node traced to the IRP it serves.

---

## The radars (the in-project design sequence)

**Radar** — PMWise's word for a discipline's whole view of a project. The tab bar order is
**Solution statement · Scope boundaries · Deliverables · Quality · Integrations · Exclusions ·
Resources · Time · Plan**.

**Scope boundaries** — The edges of the work and the constraints on it: boundaries & constraints,
stakeholders, exclusions, assumptions, external dependencies. Plus the budget ceiling and deadline.

**Deliverable** — A largest logical piece of work the project must produce. Coded `DLV-001`. 3–6
per project typically, returned in build sequence.

**Component** — A structural building block a Deliverable is made of — a system, process, team or
policy. Coded `COMP-001`.

**Feature** — A specific capability a Deliverable must provide; what it must *do* for the client to
call it a success. Coded `FEAT-001`. Ranked from 1 (most critical).

> The hierarchy, as the UI states it: **Deliverable → made of → Components → each with → Features.**

**Minimum Viable Component (MVC)** — The hard floor: the smallest set of components without which
a deliverable cannot function at all. Typically 1–3 per deliverable.

**Necessity tier** — `must_have` (removing it makes the deliverable impossible) or `nice_to_have`.

**Traceability** — The line carried on every derived item naming which IRP, metric or Solution
element it serves. On the Plan it is rendered as a **TRACES TO** chain: *Problem → IRP-001 →
Solution → Deliverable*. This is the product's central claim made visible.

**Domain lens** — An optional overlay for the field a project sits in (e.g. *Clinical service
implementation*), drawn from about 75 domain packs. Up to **three** may be applied. It layers that
field's standard considerations — permits, approvals, compliance — onto a derive so the
"everyone-knows-that" items aren't missed. The core scope engine is domain-agnostic without it.

**Quality / Jidoka** — The quality step, run in two stages per item.

**Telos** — Stage one: up to three attributes describing the *nature* of an item — the dimensions
that are even askable of it. **Deliberately hidden from the client**; only its consequences show.

**Kano triad** — Stage two, client-facing. For each Telos attribute, exactly three options:
- **Must-be** — the floor. Its absence is a defect. No credit for having it.
- **Performance** — scales linearly; a concrete point on a scale.
- **Attractive** — an unexpected delighter; no penalty if absent.

Each option carries its own resource impact, and is **Accepted** or **Rejected** by the user.

**Goodhart** — Named in the Quality radar's description (Telos → Kano Triad → Goodhart) as the
third stage, guarding against measures that stop being good measures once they become targets. Not
visible as a distinct UI step in the built app.

**Integration activity / seam** — A resourced-and-timed *connective* step between a deliverable and
something in its environment: an approval, a vendor interface, a supply lead-time, a handover, a
cutover. Explicitly "the activities that fall between the work packages and are routinely missed".

**Exclusion** — Something the project has explicitly decided it will **not** deliver. Three sources:
stated on Scope boundaries, turned out of scope, or a declined quality expectation. Ranked by
impact and reconciled before the plan is costed.

**Resource line** — One input at a charging basis: *quantity × unit × unit cost*. The AI proposes
quantity and basis only, **never a rate**. A line without a rate is *pending confirmation* and
contributes $0.

**Resource class** — Labour · Materials & Consumables · Equipment & Tools · Facilities & Space ·
Technology & Digital · Services · IP · Regulatory · Other. The **labour vs services** distinction is
load-bearing: *labour* is the client's own team (consumes their capacity and lengthens the item);
*services* is a bought-in professional (lengthens the item but does not consume the team).

**Charging basis** — How a resource is metered: time (hour/day/week/month) · quantity (unit/m²/kg) ·
usage (GB/transaction) · access (seat/license/site) · event (trip/call-out/occurrence) · outcome
(lump sum/% of value) · hybrid (retainer + usage).

**Milestone** — A dated marker on the Gantt, **Internal** or **External**. The stated completion
date appears as one automatically.

**Tuning** — On the Plan: turning items off to see what the plan *would* cost. Every control
**proposes**; nothing changes until accepted.

---

## Measurement

**SMAAART** — PMWise's extension of SMART. **S**pecific · **M**easurable · **A**ttributable ·
**A**chievable · **A**greed · **R**esourced · **T**imely. Attributable, Achievable and Agreed are
the additions.

**Metric (M-R-T)** — A quantity that moves from as-is to to-be, in exactly one of three categories:
- **Measurable** — a state or outcome quantity (an error rate, a satisfaction score). The catch-all
  for numbers that are neither a cost nor a time.
- **Resourced** — an input or cost: money, hours of effort, opportunity cost.
- **Timely** — time: durations, horizons, cadence.

**Baseline / Target** — The reading today (from the as-is) and the reading once realised (from the
to-be). Either may legitimately be empty.

**Gold / Silver / Bronze** — How complete a metric pair is. **Gold** when both baseline and target
are complete (a movement you can measure); **Silver** when both have a value; **Bronze** when only
one side is filled. Set automatically, not chosen.

**Benefit measure** — The subset of metrics the business will judge the investment against. Gold
and silver only; bronze is excluded from the benefit case by design.

**Black Box** — The AI layer between the client and the radars. The product's own name for it, used
in the UI: *"The Black Box's read of your situation"*, *"The Black Box reads your Solution and
drafts…"*. It is what makes the radars a thinking tool rather than a set of forms.

---

## Where the UI is inconsistent

Real findings from this capture. Worth fixing in the app rather than working around on the site.

1. **"Issues & Rewards" vs "IRP" vs "Issue Reward Pair"** — all three are used for the same thing:
   the nav says *Issues & Rewards*, the page title says *Edit IRP-001*, the save button says
   *Save Issue Reward Pair (IRP)*, and candidate actioning says *Action this issue → IRP*. The site
   should pick one; **Issue/Reward Pair (IRP)** is the canon's term.

2. **"Solution" names three different things** — the nav area (*Solutions*), the derived document
   (the six fields), and the first project step (*Solution statement*, read-only). A reader can't
   tell from the word alone which is meant.

3. **"Analysis" vs "Solution"** — the Analysis screen and the Solution screen are the same entity
   in the data model (same id, `/analysis/{id}` and `/solution/{id}`). Once the solution is actioned
   into a project, both redirect to the project screen. Defensible internally, confusing as
   vocabulary.

4. **"Scope" is overloaded** — there is a *Scope boundaries* step, a *Scope Radar* in the canon that
   also owns as-is/to-be capture, a "Show scope ▼" control on each deliverable meaning its
   components and features, and an *Excluded from scope* list. Four different referents.

5. **"Plans" is badged SOON in the nav but the area is built and works.** Stale badge.

6. **"Integration" vs "Integrations"** — the tab says *Integrations*, the page heading says
   *Threshold — Integration*, the canon says *Integration Radar*.

7. **Exclusions appear in two places with different meanings** — an *Exclusions* field on Scope
   boundaries (things the project won't do) and an *Exclusions* radar (a ranked reconciliation of
   everything excluded from all sources). Same word, different scope.

8. **"Deliveries" (nav) vs "Delegate/Do" (canon)** for the unbuilt second half.

---

## Words the website currently uses that the product does not

Checked against `pmwise-landing/app`. If the site is going to show the product, these should
converge — a visitor who reads the site and then opens the app should meet the same nouns.

| Site says | Product says | Note |
|---|---|---|
| "Benefit Driven Project Delivery" / "traceable benefit realisation" | **Benefit measure**, **Reward**, **Traceability** | The site's phrase is a positioning line, not a product noun. Fine as a tagline; don't let it stand in for *Reward*, which is the thing the product actually tracks. |
| "member" / "read/write member" (pricing page) | **Owner**, **Member**, **Originator** (canon `licensing.md`); the built app has **no user model at all** | The site's word is closest to the canon's *Owner*. In the canon, **Member** means the *free, read-only* role — so "read/write member" is a contradiction in the product's own vocabulary. |
| "enterprise teams" | no product noun | Nothing in the built product is team-scoped. |
| "the method" | **PDLC**, **the radars**, **the Black Box** | The site's generic word for what the canon names precisely. |

**Words the product owns that the site does not use at all, and probably should:**
**Issue/Reward Pair**, **as-is / to-be**, **Telos**, **Kano triad (Must-be / Performance /
Attractive)**, **Gold/Silver/Bronze**, **domain lens**, **integration seam**, **traceability /
TRACES TO**, **the Black Box**, **SMAAART**.
