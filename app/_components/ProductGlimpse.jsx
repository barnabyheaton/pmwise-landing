// An ILLUSTRATION of a PMWISE plan, drawn in HTML so it stays readable, scalable and honest.
// It is labelled as an illustration in its caption — never let it pass for a screenshot.
// The radar names are the real ones the app has (pmwise-app/app/project/[id]/…), and the
// trace is the product's central idea: every item on the plan answers to the benefit it serves.
//
// Contrast (measured): body text #1F2937 on #FFFFFF 14.68:1; muted text brand-dark/70 on white
// ≈ 6.3:1; the "Why" chip #880727 on #FEE7ED 8.6:1.

const RADARS = [
  'Problem',
  'Solution',
  'Benefit',
  'Scope',
  'Deliverables',
  'Quality',
  'Risk',
  'Resources',
  'Time',
  'Plan',
]

const TRACE = [
  { kind: 'Why', text: '40 local households growing food together by next spring' },
  { kind: 'Deliverable', text: 'Raised beds on the vacant council lot' },
  { kind: 'Quality', text: 'Every third bed at wheelchair height' },
  { kind: 'Risk', text: 'Lease not renewed — ask for a five-year term first' },
]

export default function ProductGlimpse() {
  return (
    <figure className="relative">
      <div className="overflow-hidden rounded-[20px] border border-brand-dark/15 bg-white shadow-[0_24px_60px_-20px_rgba(31,41,55,0.35)]">
        <div className="flex items-center gap-2 border-b border-brand-dark/10 bg-brand-dark/[0.03] px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-brand-dark/20" aria-hidden="true" />
          <span className="h-2.5 w-2.5 rounded-full bg-brand-dark/20" aria-hidden="true" />
          <span className="h-2.5 w-2.5 rounded-full bg-brand-dark/20" aria-hidden="true" />
          <span className="ml-2 truncate font-display text-[13px] font-semibold text-brand-dark/70">
            Community garden · Plan
          </span>
        </div>
        <div className="grid grid-cols-[112px_1fr] sm:grid-cols-[132px_1fr]">
          <div className="border-r border-brand-dark/10 py-3">
            <p className="px-4 pb-2 font-display text-[11px] font-bold uppercase tracking-[0.1em] text-brand-dark/70">
              Radars
            </p>
            <ul className="list-none">
              {RADARS.map((r) => (
                <li
                  key={r}
                  className={
                    r === 'Plan'
                      ? 'border-l-[3px] border-brand-700 bg-brand-50 px-[13px] py-1.5 font-display text-[13.5px] font-semibold text-brand-800'
                      : 'px-4 py-1.5 font-display text-[13.5px] text-brand-dark/80'
                  }
                >
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-4 sm:p-5">
            <p className="font-display text-[11px] font-bold uppercase tracking-[0.1em] text-brand-dark/70">
              Traced back to the why
            </p>
            <ol className="mt-3 list-none">
              {TRACE.map((t, i) => (
                <li key={t.kind} className="relative pb-4 pl-6 last:pb-0">
                  {i < TRACE.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="absolute left-[5px] top-[14px] h-full w-px bg-brand-dark/20"
                    />
                  )}
                  <span
                    aria-hidden="true"
                    className={`absolute left-0 top-[5px] h-[11px] w-[11px] rounded-full border-2 ${
                      i === 0 ? 'border-brand-700 bg-brand-700' : 'border-brand-dark/40 bg-white'
                    }`}
                  />
                  <span
                    className={`inline-block rounded-full px-2 py-0.5 font-display text-[11px] font-bold uppercase tracking-[0.06em] ${
                      i === 0 ? 'bg-brand-50 text-brand-700' : 'bg-brand-dark/[0.06] text-brand-dark/80'
                    }`}
                  >
                    {t.kind}
                  </span>
                  <p className="mt-1 text-[15px] leading-[1.35] text-brand-dark">{t.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
      <figcaption className="mt-3 text-center text-[14px] italic text-brand-dark/70">
        An illustration, not a screenshot — every item on a PMWISE plan answers to the benefit it
        serves.
      </figcaption>
    </figure>
  )
}
