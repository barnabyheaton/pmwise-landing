# What we're building, and why

Orientation for the design chat. Read this before the other documents — they describe *what
the product does*; this one is about *what it is for*, because the rest only makes sense
against it.

Written 7 August 2026, in the product's own vocabulary (see `glossary.md`).

---

## The one-sentence version

**PMWise makes a project unable to forget why it exists.**

Everything else — the screens, the AI, the radars — is machinery in service of that.

---

## The problem we're actually solving

Around 70% of projects miss what they set out to do. The interesting question is *how*, because
almost nobody sets out to fail, and very few projects fail through incompetence.

They fail by drift. Someone starts with a real problem — a clinic losing 30% of its referrals.
By the time that becomes a plan, it is 200 tasks in a spreadsheet. Every one of those tasks was
added by a reasonable person for a reasonable reason. But the reason lives in that person's
head, or in a meeting six weeks ago, and the task now lives in row 147.

Then the project gets squeezed. Something has to go. And here is the failure: **the team cannot
tell which tasks are load-bearing and which are habit**, because nothing in the plan records
what each task was *for*. So they cut what looks expendable, which is usually whatever is
hardest to justify in a meeting — and the thing that gets cut is disproportionately often the
thing the project was for in the first place.

The project then finishes. On time, roughly on budget, and it did not deliver the benefit.
Everyone involved behaved reasonably at every step.

**That is the problem. Not planning. Not tracking. Forgetting.**

## What we built instead

Every unit of work in a PMWise plan is structurally attached to the reason it exists. Not by
convention, not by a "notes" field someone might fill in — attached, in the data model, such
that work which cannot name its reason cannot exist.

The chain is:

```
Problem  →  Issue/Reward Pair  →  Solution  →  Deliverable  →  Component  →  Feature
```

Read it left to right and it is a decomposition. Read it **right to left and it is a
justification** — and that is the direction that matters. Select any line item in the Plan and
the product will tell you: *this exists because of IRP-001, which exists because of this
sentence the client wrote about their referral tray.*

That's what `26-plan-traceability-desktop.png` is showing. It looks like a small UI panel. It
is the entire thesis.

## The three ideas that make it work

**1. Every problem has an upside, and you have to name it.**

This is the piece most people miss on first contact, and it is the most important.

A PMWise project doesn't start from a task list or a goal. It starts from an **Issue** — a
downside that is really happening — and forces you to state the **Reward**, the upside of
fixing it. The two are stored as one object: an **Issue/Reward Pair**. You cannot save one
without the other.

Why force it? Because *"referrals sit in an unowned tray"* tells you to build a better tray.
*"Every referral has a named owner from arrival to booking"* tells you something different and
more valuable. The issue describes the pain; the reward describes the prize. Projects that only
name the pain end up optimising the pain.

Behind each pair sit its parents: the **Risk** (the threat that, once it happened, became this
issue) and the **Benefit** (the opportunity that, once realised, becomes this reward). A benefit
is a risk inverted — same uncertainty, opposite face. That's why the product plots them on one
matrix rather than keeping a risk register and a benefits register in different rooms, which is
what everything else does.

**2. The AI advises. The human decides. The boundary is drawn deliberately, in code.**

The product will happily draft a whole solution from a paragraph. It will not:

- **pick your reward.** It offers three genuinely different directions and chooses none.
- **guess a price.** It sizes work as *quantity × charging basis* and stops. Rates depend on
  your market and your arrangements. A line without a rate you supplied sits marked "pending
  confirmation" and contributes $0 to the total.
- **invent a number to fill a gap.** If your description of the future never said what "good"
  looks like for something, that target stays empty and the metric is graded Bronze rather than
  dressed up as complete.
- **accept its own suggestions.** Every quality expectation and every integration seam sits
  "suggested, not yet accepted" until a person accepts it.

That last set is not timidity, and it isn't a limitation we're apologising for. It is the
product's position: **the machine is very good at surfacing what you'd have missed, and has no
business deciding what you want.** Every prompt carries a ten-point ethics preamble saying so,
grounded in Australia's AI Ethics Framework.

If the site wants one honest differentiator against every "AI project manager" on the market,
it is this: ours is built to tell you when it doesn't know.

**3. It shows you the cost of your own ambition, immediately.**

State a budget and a deadline, and the Plan will tell you, live, whether what you're describing
fits — and by how much it doesn't. Our demo project comes out at **$325,540 against a $180,000
ceiling**, and the screen says so in red.

That's not a demo we failed to tidy. That is the product working. First passes *are* over
budget; the useful question is what you trade away, and you can only answer it if you can see
what each thing costs and what each thing is for. Turning something off on the Plan proposes
the change and shows what the plan *would* cost — nothing lands until you accept it.

## What makes this different from a spreadsheet

A spreadsheet is two-dimensional: rows and columns. You can record *that* a task exists and
*what* it costs. You cannot record *why* it exists in a way the spreadsheet itself understands —
so when you delete row 147, nothing objects, and nothing tells you that row 147 was the only
thing serving the outcome the project was funded for.

PMWise is the same information with the *why* as a first-class relationship rather than a
comment. That's the whole difference. Everything visible in the screenshots — the traceability
panel, the Kano triads, the exclusions ledger, the resource lines that refuse to guess — is a
consequence of taking that one thing seriously.

The tagline **"enterprise capable, individual accessible"** is exactly this: the rigour is
industrial (70 years of project practice, encoded), and the entry point is a person typing a
paragraph about what's bothering them.

## What it is not, yet — be careful here

The site should not imply any of this:

- **It doesn't run your project.** Problem→Plan is the *design* half. Delivery, progress
  tracking, and the reconciliation of what-we-said against what-we-did are unbuilt. The nav
  says "Deliveries — SOON" and it means it.
- **There's no "Agree" yet.** The plan can be tuned but not yet formally signed off.
- **You can't export the plan.** Only the Solution document leaves the app today.
- **There are no accounts.** One shared password for the whole deployment. No users, roles or
  permissions are implemented — the licensing model is designed, not built.
- **It hasn't been used in anger.** No case studies, no measured outcomes, no proof. The claim
  is the method and the machinery, not results we don't have.

That last one matters most, and it fits the voice you already have: *"no hype, no guarantees —
just the method, the journey, and the proof as it comes."* The honest pitch right now is *here
is how we think a project should work, and here is the thing we built to prove it.* Anyone
promising more than that on this page is writing a cheque the product can't cash yet.

## If you take three things into the design

1. **Lead with the forgetting problem, not the planning problem.** Everybody has a planning
   tool. Nobody has an answer to drift.
2. **Show the traceability panel.** It is the one frame where the argument becomes visible
   instead of stated.
3. **Let it refuse things.** The empty targets, the unpriced lines, the over-budget red — the
   moments the product declines to pretend are the most persuasive thing in the whole set,
   precisely because no competitor's marketing screenshot would ever show them.
