# Landing page drift review — 23 September 2026

The landing page was last changed on 7 August 2026. This is what it said compared with
`pmwise-app` and `pmwise-core` as of 22 September, and what the branch
`claude/serene-ptolemy-chj31z` changes.

## What had drifted

| Where | The page said | What is true now | Source |
|---|---|---|---|
| Pricing | $5 per read/write member, and nothing else. "No seats you have to buy in blocks." | $5/month per read/write seat (tax included), **or $350 lifetime + GST for five seats**. Extra storage is 5 GB for $50 + GST. Every account gets 10 GB. The sixth seat on a lifetime account is $5/month. | `licensing.md` §0, §0b, §3a |
| Pricing | Nothing about what happens if you stop paying | The account goes read-only. Export stays, nothing is deleted, and sensitive documents stay visible to the client. | `licensing.md` §6a |
| Pricing | "GST & card fees already in" on every price | Only the $5 seat is quoted with tax included. The other prices are ex GST, and PMWise is not registered yet. | `licensing.md` §0b table |
| Pricing | No mention of the day rate | $1,500/day ex GST exists as a product. **It is held back** until there is legal advice (see questions below). | `licensing.md` §0b |
| Security | "Multi-factor sign-in — Planned" | **Struck** 24 Aug / 8 Sep: a password to sign in, and resets by emailed link only | NOW.md §3 |
| Security | "Every document is private to your profile" | Documents belong to projects and can be shared per project, with a separate sensitive tier | NOW.md B1 |
| Security | "Database access is locked down and mediated only through our server" | Stronger than that: the database itself checks every read and write (RLS), and the master key is kept for a short audited list of jobs | NOW.md A3–A4 |
| Security | "Scanned for malware — Live" | Only partly true. The built-in checks are live (contents-based type check, executables, EICAR). ClamAV is built but switched off. | `document-scan.ts` |
| Security | "One-click export — Planned" | Export of reports in several formats is live. It survives a lapse. | `ExportDialog.tsx`, §6a |
| Security | (absent) | Stripe is live behind a shut door, and card details never touch PMWise | NOW.md C2 |
| Home | Never showed or named the product | Problem → Plan is built: IRP, Solution, Benefit, and the Scope, Deliverables, Quality, Risk, Resources, Time and Plan radars, plus trace and export | `pmwise-app/app` |
| Home | No mention of stakeholders | Readers are free, access is per project, and a shared report lets its reader ask to see the project (B-phase). This is the funnel described in `licensing.md` §8. | NOW.md B |
| Home | "Individually crafted" | The tagline is "Enterprise capable, individual accessible" | landing `CLAUDE.md` |

## Accessibility defects fixed

- **Focus ring invisible on dark surfaces:** `#61051C` on `#1F2937` = **1.08:1**, so every button in a
  dark band had no visible focus. `.on-dark` now switches it to white: 14.68:1 on dark and 4.53:1 on
  `#EC003F`.
- The pricing page had no header, no skip link and no footer. All four pages now share one header and
  one footer (`app/_components/`).
- The secondary button border measured 1.65:1. It is now 3.52:1.
- Status pills carry their meaning in words. The security legend no longer relies on coloured dots.

## Questions still open (all for Barnaby)

1. **Brand colour.** `tailwind.config.js` has been red (`#EC003F`) since 4 July, but this repo's
   `CLAUDE.md` still describes the green palette, and `DESIGN.md` does not exist. The app itself uses
   neutral greys and emerald. Which is the brand?
2. **Lifetime price in public.** Should $350 lifetime appear on the site before the lawyer has seen
   the terms? The branch shows it, marked "not on sale yet".
3. **Day rate.** Should the price appear, or only "by arrangement"? The branch uses "by arrangement"
   until there is legal advice.
4. **The "7 in 10" claim.** It now cites Standish CHAOS 2020 (31% fully successful). Ask the lawyer
   whether that wording is safe under Australian Consumer Law.
