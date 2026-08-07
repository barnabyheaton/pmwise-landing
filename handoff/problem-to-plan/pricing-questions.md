# The two pricing questions — short factual answers

Not diplomatic, as requested. Sources named so you can check.

---

## 1. Is there any usage cap, fair-use limit, or throttle on the $5/month plan? What actually happens if someone hammers it?

**No. There is no cap, no fair-use limit, and no throttle of any kind. If someone hammers it,
nothing stops them, and the bill lands on us.**

This is not an inference — it is a known, open, documented finding:

- **Security review finding M2**, `pmwise-app/docs/security/reviews/2026-06-23-app-security-review.md`:
  *"No rate limiting on the paid AI Server Actions (cost / DoS abuse) … Each call spends Anthropic
  tokens. The only backstop is the manual spend cap suggested in `.env.example`. A single
  gate-holder (or a leaked gate password) can run up cost or exhaust quota."* Classed **Medium**.
  Still open — the suggested fix ("add per-session/IP rate limiting") has not been implemented.
- **`pmwise-app/docs/environments.md`** confirms it is still open as of 29 July 2026:
  *"there's no rate limiting yet (review finding M2)."*
- Confirmed by reading the code: the ~29 AI call sites across nine action files go straight to
  `client.messages.create` with no counter, quota, budget check or per-user accounting anywhere.
  There is no per-user anything, because **there are no users** (see question 2).

**What actually happens, in order:**

1. Nothing, for a while. Every derive costs Anthropic tokens against a single shared API key.
2. If the manual monthly spend cap set in the Anthropic console is reached, the API starts
   refusing calls.
3. At that point **every AI feature fails for everyone simultaneously**, showing *"The AI is busy
   right now — wait a few seconds and try again"* or *"Something went wrong, please try again"*.
   There is no degradation, no queue, no per-account isolation — one heavy user takes the product
   down for all of them.
4. The affected screens still load; the derive buttons just stop working.

**One further thing you should know before the pricing page goes live:** access to the whole
deployment is currently a **single shared password** — `lib/gate.ts` calls it *"a 'doormat', NOT a
login system"*. There is no per-user identity, so there is no unit to attach a cap to even if we
wanted one. Anyone who has (or guesses, or is given) that password can spend our API budget. The
same security review flags the gate as brute-forceable with no rate limiting on it either
(finding M3).

**Recommendation for the pricing page: say nothing about limits.** Any words at all — "unlimited",
"fair use applies", "generous limits" — would be a claim we currently have no mechanism to keep or
enforce. If you need a line, the honest one is that limits aren't set yet and will be published
before general availability.

---

## 2. What does a 200-person organisation get charged, and does anything change at that scale (SSO, admin, support, contracts)?

**Short answer: it depends entirely on how many of the 200 need to *create and change* things, and
nothing changes at that scale, because nothing exists at that scale.**

### The charge

Headcount is not the billing unit. Read/write access is. Read-only is free and unlimited.

So a 200-person organisation pays for the people who actually do the work:

| Read/write people | Monthly |
|---|---|
| 5 | $25 |
| 20 | $100 |
| 50 | $250 |
| all 200 | $1,000 |

The canon's own expectation is that this stays small: `licensing.md` §1 says *"A typical project
might have 3–5 licensed read/write users and 10–50 read-only Members."* On that basis a 200-person
organisation running, say, eight concurrent projects lands somewhere around **25–40 paid seats —
$125 to $200 a month** — with the other 160-odd people reading everything for free.

**But flag this before it goes on the page:** the pricing page says **$5 per read/write member per
month**; the canon (`pmwise-core/docs/concepts/platform/licensing.md`, §3 and §4) says **$1 per
week per licensed user**, billed **weekly**, with a weekly billing day and pro-rata top-ups for
mid-week additions. $1/week is ~$4.33/month, so the *number* is roughly reconciled, but the
**billing model is not** — weekly vs monthly are different products from a finance team's point of
view, and the canon's whole §4a is about the weekly payment day. The canon also states its price in
**USD**; the pricing page reads as AUD ("GST and card fees included"). One of the two documents is
out of date and somebody needs to decide which.

### What changes at 200 people: nothing

There is no enterprise tier. There is no volume discount, no minimum, no contract, and no
different product. Specifically:

- **SSO — no.** *"deliberately scoped out of the MVP to avoid integration complexity … Flag as a
  future enterprise feature."* (`identity-and-authorisation.md` §7.3). Azure AD / Okta are named as
  what enterprises would want; neither is built.
- **Admin console — no.** A designated account administrator managing licences across projects
  without being an Owner on any of them is listed as *"a future enterprise tier feature — the MVP
  does not require it."* (`licensing.md` §9.2).
- **Annual invoicing / PO / contracts — no.** Flagged as a likely enterprise need
  (*"may create administrative friction for corporate finance teams that prefer annual
  invoicing … Flag for commercial discussion"*, `licensing.md` §9.3), not decided and not built.
- **Support tiers — nothing documented at any level.** No SLA, no support commitment, no named
  contact.
- **Data residency — open.** Named as requiring legal counsel before launch for the APAC market.
- **Currency localisation — open.** AUD/SGD/JPY/INR flagged as needed, not built.

There *is* a corporate-vs-personal distinction in the canon — business projects must be paid from a
corporate payment method, and there is an annual **recertification** cycle that lapses licences for
people who no longer need them — but that is a documented model, not shipped code.

### The thing that most affects what you can say

**None of the licensing model is implemented.** The built app has no accounts, no roles, no seats,
no billing and no payment integration — one shared password for the entire deployment. Everything
above describes an intended model held in `pmwise-core`, not behaviour you could demonstrate today.

**Recommendation:** price the page for the individual and the small team, where the model is
honest and the maths is simple, and treat 200-person organisations as a conversation ("talk to us")
rather than a published tier. Publishing an enterprise tier we cannot yet deliver — SSO, admin,
contracts — is the one claim on this page that could cost a real deal later. It also fits the
site's own voice: *"no hype, no guarantees — just the method, the journey, and the proof as it
comes."*
