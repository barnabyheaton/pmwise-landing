# Three-day referral intake

*Point-in-time export from PMWISE.AI — 7 August 2026.*

## The problem

We're a 40-person allied health clinic across two sites — physio, occupational therapy and speech pathology. When a GP refers someone to us, it takes about eleven days from the referral landing to that person sitting in front of a clinician, and we lose roughly three out of ten referrals somewhere in that gap. They either go elsewhere or just give up. The referrals arrive every which way — faxed, emailed as PDFs, some through the secure messaging system, a few by phone. Reception re-types them into our practice management system by hand. If something's missing, a referral without a Medicare number or no indication of urgency, it goes into a tray and someone chases the GP practice, which can take days. Nobody owns that tray. Then triage: a senior clinician decides urgency and which discipline, but they only get to it between clients, so it can sit two or three days. After that we ring the patient to book, and half the time we can't reach them first go. I want intake under three days and I want to stop losing people. What I can't do is hire more admin staff — we don't have the margin. And I don't want to rip out the practice management system, we only put it in eighteen months ago.

## The issue this solves

### IRP-001 · Referral intake has no owner

**As-is.** Referrals reach us four ways — the fax machine at reception, a shared intake inbox, secure messaging from the larger GP practices, and the phone. Reception opens each one and re-types it into the practice management system. On an average week that is about 95 referrals across the two sites, and roughly a third of them arrive missing something we need: no Medicare number, no indication of urgency, or a referral that does not say which discipline it is for. Those go into a physical tray on the front desk. Nobody is rostered to that tray. Whoever notices it is quiet chases the GP practice, which typically takes two to four days to answer. Complete referrals then wait for triage, where one of two senior clinicians decides urgency and discipline between their own clients — that is another two to three days. Booking is a phone call, and about half the time we do not reach the person first go. End to end the median is eleven days, and roughly 30% of referrals never reach a first appointment at all. We cannot say where in that chain we lose them, because nothing records the stage a referral stopped at.

**To-be.** Every referral is allocated to a named intake owner the moment it arrives, whichever channel it came through, and that person stays with it until the patient is booked. Incomplete referrals are chased the same day rather than waiting to be noticed, so the tray stops existing as a holding pen. Referrals age visibly against a three-day target and anything stalling escalates on its own rather than relying on someone looking. Triage is still a clinical decision made by a senior clinician, but it arrives as a short scheduled block against a prepared queue instead of competing with clinical time ad hoc. Booking has a second channel — SMS with a self-booking link — so a missed phone call no longer costs a day. Every referral carries a status the whole way through, so when one is lost we can say at which stage. Intake runs at three days or under, referral loss is under 10%, and no new admin headcount has been added — the existing reception team absorbs it because the re-typing and the chasing have shrunk.

## The solution

**Statement.** Redesign referral intake around a single owned queue that sits in front of the existing practice management system: every referral, whatever channel it arrived on, is registered once with a named owner and a status, chased and triaged against a three-day clock, and booked through SMS self-booking as well as by phone. The practice management system stays as the clinical record; the queue is what gets built in front of it.

**Approach.** Redesign process — fix how something works

**What “done” looks like.** The eleven days are not caused by any one slow step — they are caused by three unowned waits stacked end to end: the incomplete-referral tray (2-4 days), the triage backlog (2-3 days), and repeated failed booking calls. None of them is a capacity problem, which is why hiring admin staff would buy very little; each is a queue with no owner and no clock. The redesign attacks the waits rather than the work.

All four channels — fax, shared inbox, secure messaging, phone — land in one intake register. Registration is a single short form that will not accept a referral without a Medicare number, an urgency indication and a named discipline; where the referrer has not supplied them the referral is registered as incomplete and immediately allocated, which is what converts the tray from a place things sit into a named person's work item. Same-day chasing replaces chase-when-noticed, and this alone should take the 2-4 day chase wait down to under one day.

Triage stays a senior clinical decision — that is not a step to automate — but it stops competing with clinical time. Two scheduled 20-minute blocks a day work a queue that is already complete and already ordered by the urgency the referrer indicated, so the clinician decides rather than sorts. The 2-3 day triage wait becomes hours.

Booking gains SMS with a self-booking link alongside the phone call, so the roughly half of patients not reached first go can book themselves rather than waiting for a second attempt. Every referral carries a status from registration to booked, which is what finally makes the 30% loss locatable — today the clinic cannot say where people leave, and until it can, no further improvement can be aimed.

Taken together this is designed to move the median from 11 days to 3 or under and referral loss from 30% to under 10%, without new admin headcount: the reception team's re-keying and chasing both shrink, and that recovered time is what absorbs the new registration step.

**Why this approach, not another.** Hiring one or two additional intake administrators was considered and rejected: the clinic has stated it has no margin for it, and more importantly the delays are queueing delays, not throughput delays — an extra pair of hands would still find an unowned tray and an unscheduled triage step, so most of the eleven days would survive the hire.

Replacing the practice management system was rejected on the client's own constraint (installed eighteen months ago) and on merit: none of the three waits is caused by the system's capability, so a replacement would carry very large cost and risk against a problem it does not touch.

Asking referring GP practices to change how they send referrals — a single mandated channel with mandatory fields — was considered and partly adopted. Fully adopting it was rejected because the clinic does not control referrer behaviour, and a solution that depends on it would stall; the design instead accepts all four channels and enforces completeness on its own side of the boundary, while leaving referrer-side improvement as an available later gain.

Automating triage by rules on referral text was rejected: urgency and discipline are clinical judgements, and getting them wrong is a patient-safety cost that dwarfs the days saved.

**Design principles & constraints.** One register, one owner, one status: every referral is allocated to a named person at the moment it arrives, and no referral is ever in a state where nobody is accountable for its next move.

The clock is visible and it escalates itself: referrals age against the three-day target in the open, and a stalled referral raises its own hand rather than depending on someone noticing.

Clinical judgement stays human: triage decisions are made by a senior clinician. The redesign changes when and how the decision arrives, never who makes it.

Enforce completeness at the boundary the clinic controls: the intake register refuses an incomplete registration rather than relying on the referring practice to change.

The practice management system remains the clinical record and is not replaced or duplicated — the intake queue hands over to it.

No new admin headcount: any step added to reception's work must be paid for by a step removed.

Every referral is locatable at every stage, because a loss you cannot locate is a loss you cannot fix.

**Assumptions & dependencies.** That reception's recovered time from reduced re-keying and chasing is genuinely sufficient to absorb the new registration step — this is the load-bearing assumption behind the no-new-headcount constraint, and it should be measured in the first month rather than trusted.

That two senior clinicians can commit to scheduled daily triage blocks, and that clinic leadership will protect that time from being reclaimed for clinical work.

That the existing practice management system can accept referral data from an intake queue without a replacement or a major integration project; the effort here is unverified and needs confirming with the vendor before the schedule is trusted.

That patients in this cohort will use an SMS self-booking link at a meaningful rate. This is not established for this clinic's patient mix and is the assumption most likely to be wrong — accessibility, language and age profile all bear on it, and the phone channel must remain in place regardless.

That sending appointment booking links by SMS is consistent with the clinic's privacy obligations for health information; this engages the Privacy Act and state health-records legislation and should be confirmed with qualified advice before launch, not assumed.

That the 30% loss figure and the 11-day median are reliable enough to serve as baselines. They are the client's own estimates and no stage-level data exists behind them, so the first weeks of status data may restate the starting point.

## Benefit measures

_The project's why metrics — the same aspect measured before and after. Ranked Gold → Silver → Bronze by how complete each measure is._

### [Silver] Referrals lost before first appointment

- **Baseline (today):** 30%
- **Target (once realised):** under 10%

---

_Generated by PMWISE.AI. This is a point-in-time snapshot of the solution as it stood on the date above._
