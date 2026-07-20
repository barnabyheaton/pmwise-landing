import pmwiseIcon from '../pmwise_icon_color.png'

export const metadata = {
  title: 'Not your average spreadsheet — the philosophy & ethics of PMWISE',
  description:
    'PMWISE has a moral, ethical and philosophical compass built into its foundations — anchored in Australia\'s AI Ethics Framework and shaped by thinkers from Aristotle to the Toyota Production System.',
}

const CSIRO = [
  ['1', 'Generates net-benefits', 'the system must produce benefits for people greater than its costs.'],
  ['2', 'Do no harm', 'civilian AI must not be designed to harm or deceive, and should minimise negative outcomes.'],
  ['3', 'Regulatory & legal compliance', 'it must comply with all relevant laws and regulations.'],
  ['4', 'Privacy protection', 'it must respect and uphold privacy rights and data protection.'],
  ['5', 'Fairness', 'it must not result in unfair discrimination against individuals, communities or groups.'],
  ['6', 'Transparency & explainability', 'people must be able to understand when AI is affecting or deciding about them.'],
  ['7', 'Contestability', 'there must be a timely process to challenge the use or output of the system.'],
  ['8', 'Accountability', 'those responsible for the system must be identifiable and accountable for its outcomes.'],
]

const EXTENSIONS = [
  ['9', 'Honest uncertainty in forecasting', 'never present a projection as more certain than the evidence warrants.'],
  ['10', 'Harm-escalation detection', 'surface foreseeable harms that haven\u2019t been acknowledged.'],
  ['11', 'No stakeholder manipulation', 'it won\u2019t help engineer or manipulate stakeholders.'],
  ['12', 'Human welfare at project close', 'the people, not just the deliverables, matter when work ends.'],
  ['13', 'No assistance with unlawful activity', 'it won\u2019t assist unlawful conduct.'],
]

const THINKERS = [
  ['Stoicism', 'The dichotomy of control', 'Epictetus taught that peace and effectiveness come from knowing what you can control and what you can\u2019t \u2014 and spending energy only on the former. PMWISE tests whether an issue is actionable. It pushes, charitably, to find a lever you may have overlooked \u2014 but where something is genuinely outside your control, it doesn\u2019t badger. It helps you accept it and reframe toward the part you can act on. Honest agency, not false hope.'],
  ['Aristotle', 'Telos \u2014 the purpose of a thing', 'To understand anything, Aristotle held, you must know its telos \u2014 its end or purpose. PMWISE applies this literally: before it asks how good a deliverable should be, it derives the quality attributes that fit the nature of that particular thing. You cannot judge the quality of something until you know what it is for. Purpose comes before measurement, every time.'],
  ['The Kano model', 'Honest, priced quality', 'Kano (1984) distinguishes three kinds of quality: Must-be (the floor \u2014 its absence is a defect), Performance (more is genuinely better, and you choose how far), and Attractive (an unexpected delighter). PMWISE puts this choice in front of you and prices each option live in time and resource \u2014 so \u201cgold-plating\u201d becomes a conscious, costed choice rather than an accident.'],
  ['Goodhart\u2019s Law', 'The measure that eats its purpose', '\u201cWhen a measure becomes a target, it ceases to be a good measure.\u201d This is the quiet way good projects go wrong. PMWISE runs an explicit Goodhart Check \u2014 tracing each quality choice back to the benefit it was meant to serve, and if a target has turned against its own purpose, it stops and says so. This is the one place the product refuses to stay silent.'],
  ['Jidoka', '\u201cStop the line to check\u201d', 'From the Toyota Production System: it\u2019s better to stop the line and fix a fault than let a flaw travel downstream. PMWISE\u2019s quality model is named for it. Rather than checking endlessly and everywhere, it stops once, at the right moment, to confirm the choices still serve the purpose before letting work continue. One deliberate gate beats a hundred anxious ones.'],
  ['Kaizen', '\u201cChange for the better\u201d', 'Lasting improvement comes not from grand leaps but from a steady accumulation of small, deliberate steps. PMWISE carries this into delivery: work advances in small, self-contained slices, so value arrives early, course-corrections stay cheap, and the plan improves as it\u2019s delivered \u2014 not only at the post-mortem. Where jidoka protects quality by stopping, kaizen is its forward-facing twin.'],
  ['Little\u2019s Law', 'Throughput is set by capacity', 'Work-in-progress, completion rate and lead time are locked together \u2014 you can\u2019t improve one without moving the others. The honest consequence, which PMWISE says out loud: the only real way to go faster is more capacity, not a more optimistic plan. A deadline squeezed without more people or time doesn\u2019t speed delivery \u2014 it just hides the overflow. This anti-fantasy honesty is what makes the forecasts trustworthy.'],
]

function Radar({ size = 620 }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute top-1/2 right-[-180px] -translate-y-1/2" style={{ width: size, height: size }}>
      <div className="absolute inset-0 rounded-full" style={{ border: '1px solid rgba(255,143,163,0.14)' }} />
      <div className="absolute inset-[15%] rounded-full" style={{ border: '1px solid rgba(255,143,163,0.12)' }} />
      <div className="absolute inset-[30%] rounded-full" style={{ border: '1px solid rgba(255,143,163,0.10)' }} />
      <div className="absolute inset-[45%] rounded-full" style={{ border: '1px solid rgba(255,143,163,0.08)' }} />
      <div className="absolute inset-0 rounded-full" style={{ background: 'conic-gradient(from 0deg, rgba(236,0,63,0.30), rgba(236,0,63,0) 55%)', animation: 'radarSweep 8s linear infinite', transformOrigin: 'center' }} />
      <div className="absolute left-0 top-1/2 h-px w-full" style={{ background: 'rgba(255,143,163,0.10)' }} />
      <div className="absolute top-0 left-1/2 h-full w-px" style={{ background: 'rgba(255,143,163,0.10)' }} />
    </div>
  )
}

function PrincipleRow({ p, dark }) {
  return (
    <div className={`grid grid-cols-[auto_1fr] items-baseline gap-3.5 border-t py-3 ${dark ? 'border-white/10' : 'border-brand-dark/[0.08]'}`}>
      <span className={`min-w-[20px] font-display text-[13px] font-bold ${dark ? 'text-brand-300' : 'text-brand-500'}`}>{p[0]}</span>
      <p className={`text-[15.5px] leading-[1.5] ${dark ? 'text-white/90' : 'text-brand-dark/80'}`}>
        <strong className={`font-semibold ${dark ? 'text-white' : 'text-brand-dark'}`}>{p[1]}</strong> — {p[2]}
      </p>
    </div>
  )
}

export default function Philosophy() {
  return (
    <div className="overflow-x-hidden font-body text-brand-dark">
      <a
        href="#main"
        className="sr-only rounded-br-lg bg-brand-dark px-5 py-3 font-display font-semibold text-white focus:not-sr-only focus:absolute focus:left-0 focus:top-0 focus:z-[100]"
      >
        Skip to content
      </a>

      {/* ============ HEADER ============ */}
      <header className="sticky top-0 z-50 border-b border-brand-dark/10 bg-white/85 backdrop-blur-md backdrop-saturate-150">
        <div className="mx-auto flex max-w-[1120px] items-center justify-between gap-4 px-6 py-3.5">
          <a href="/" className="flex items-center gap-2.5 text-brand-dark no-underline">
            <img src={pmwiseIcon.src} alt="" width={30} height={30} className="h-[30px] w-[30px]" />
            <span className="font-display text-xl font-bold tracking-tight">
              PMWISE<span className="text-brand-700">.AI</span>
            </span>
          </a>
          <nav aria-label="Primary" className="flex items-center gap-2">
            <a href="/" className="inline-flex min-h-[44px] items-center px-3.5 font-display text-[15px] font-medium text-brand-dark no-underline">
              ← Back to PMWISE.AI
            </a>
            <a
              href="mailto:info@pmwise.ai?subject=Early%20access%20%E2%80%94%20PMWise"
              className="inline-flex min-h-[44px] items-center whitespace-nowrap rounded-full bg-brand-700 px-[18px] font-display text-[15px] font-semibold text-white transition-colors hover:bg-brand-800"
            >
              Speak to our founder
            </a>
          </nav>
        </div>
      </header>

      <main id="main">
        {/* ============ HERO ============ */}
        <section className="relative overflow-hidden bg-brand-dark">
          <Radar size={620} />
          <div className="relative mx-auto max-w-[1120px] px-6 pb-20 pt-[88px]">
            <div className="mb-7 inline-flex items-center gap-2.5 rounded-full px-4 py-2 font-display text-[13.5px] font-semibold tracking-wide" style={{ border: '1px solid rgba(255,143,163,0.35)', background: 'rgba(236,0,63,0.10)', color: '#FF8FA3' }}>
              <span className="h-2 w-2 flex-none rounded-full bg-brand-500" aria-hidden="true" />
              The moral, ethical & philosophical radars inside PMWISE
            </div>
            <h1 className="max-w-[16ch] font-display text-[clamp(40px,7vw,78px)] font-bold leading-[0.98] tracking-[-0.03em] text-white [text-wrap:balance]">
              Not your average spreadsheet.
            </h1>
            <p className="mt-7 max-w-[60ch] text-[clamp(19px,2.1vw,24px)] leading-[1.5] text-white/90 [text-wrap:pretty]">
              Before PMWISE, every PM tool reduced projects to numbers in a two-dimensional grid — scope, budget, timeline. But projects are moving, fuzzy, four-dimensional constructs, built on realms of uncertainty to satisfy ambiguous requirements of taste and judgement. A cell in a spreadsheet cannot calculate <em className="italic text-brand-300">viability</em> or <em className="italic text-brand-300">suitability</em>. It cannot adjudicate success or understand vision. A spreadsheet has no formulae for <strong className="font-semibold text-white">why</strong> — so we didn&rsquo;t build PMWISE on one. We designed it from scratch, harnessing the disruptive nature of generative AI, so purpose and vision can now be managed as easily as budgets and schedules.
            </p>
          </div>
        </section>

        {/* ============ ONE-LINE VERSION ============ */}
        <section className="mx-auto max-w-[820px] px-6 pb-10 pt-20">
          <p className="mb-5 font-display text-[13px] font-bold uppercase tracking-[0.1em] text-brand-700">The one-line version</p>
          <p className="text-[clamp(22px,2.8vw,32px)] leading-[1.35] tracking-[-0.01em] text-brand-dark [text-wrap:pretty]">
            There is no formula for moral and ethical behaviour, no blueprint for informed insight, no recipe for judgement and taste. Spreadsheets don&rsquo;t understand <em className="italic text-brand-700">why</em>. PMWISE was built on the why, and treats every project process as its servant.
          </p>
          <p className="mt-7 text-[19px] leading-[1.6] text-brand-dark/60 [text-wrap:pretty]">
            That&rsquo;s why PMWISE is categorically different from every tool that came before it. It isn&rsquo;t a calculator with another column — it&rsquo;s a motivated, highly-trained and deeply knowledgeable collaborator, helping you achieve your outcomes in the best way possible.
          </p>
        </section>

        {/* ============ WHY WE COULD DO THIS ============ */}
        <section aria-labelledby="blank-h" className="mx-auto max-w-[820px] px-6 py-12">
          <h2 id="blank-h" className="mb-6 max-w-[20ch] font-display text-[clamp(28px,3.8vw,40px)] font-bold leading-[1.08] tracking-[-0.02em] text-brand-dark">
            Why we could do this: a blank sheet, built with AI.
          </h2>
          <div className="text-[18.5px] leading-[1.62] text-brand-dark/80">
            <p className="mb-5 [text-wrap:pretty]">
              Most software is shaped by the legacy frameworks it&rsquo;s built on, and every other project tool available today is grounded in the spreadsheet&rsquo;s two-dimensional limits. PMWISE was built in 2026, so we didn&rsquo;t start from a 2D grid — we started with the neural networks created by agentic and generative AI. We started with one question: could this new paradigm create a tool that learns the messy lessons of project failure (projects fail 70% of the time), and let people manage the parts of projects that actually matter?
            </p>
            <p className="mb-5 [text-wrap:pretty]">
              The question was simple: <em className="italic text-brand-800">can AI make the messy but important stuff as easy to manage as time and cost?</em> Turns out it can. This means PMWISE reverses 70 years of project-management orthodoxy and puts the <strong className="font-semibold text-brand-dark">why</strong> horse back in front of the <strong className="font-semibold text-brand-dark">how</strong> cart.
            </p>
            <p className="[text-wrap:pretty]">
              PMWISE considers questions a grid never could — <em className="italic">what is this actually for? does this measure still serve its purpose? is this benefit worth its cost to the people it touches?</em> — as readily as &ldquo;are we on time, are we on budget?&rdquo; To do that we didn&rsquo;t only train PMWISE in best-practice method. We gave it an informed point of view, an ethical and moral compass, and we taught it philosophy to fuzzy-up and humanise its thinking.
            </p>
          </div>
        </section>

        {/* ============ ETHICAL SPINE ============ */}
        <section aria-labelledby="ethics-h" className="border-y border-brand-200 bg-brand-50">
          <div className="mx-auto max-w-[1120px] px-6 py-20">
            <div className="mb-12 max-w-[720px]">
              <p className="mb-4 font-display text-[13px] font-bold uppercase tracking-[0.1em] text-brand-700">An ethical spine, not a compliance afterthought</p>
              <h2 id="ethics-h" className="mb-6 font-display text-[clamp(28px,3.8vw,40px)] font-bold leading-[1.1] tracking-[-0.02em] text-brand-dark">
                PMWISE surfaces; the human decides.
              </h2>
              <p className="mb-4 text-[18.5px] leading-[1.6] text-brand-dark/80 [text-wrap:pretty]">
                The AI inside PMWISE has an ethical compass, and it&rsquo;s written down. Our Responsible-AI framework is anchored in <strong className="font-semibold text-brand-dark">Australia&rsquo;s AI Ethics Framework</strong> (Dawson et al., Data61 CSIRO, 2019) — adopted as binding, not aspirational — and extended with five principles specific to the stakes of project work: teams, budgets, livelihoods.
              </p>
              <p className="text-[18.5px] leading-[1.6] text-brand-dark/80 [text-wrap:pretty]">
                Its posture is deliberately modest and deliberately firm. Where it sees a cost to people, communities or the environment that hasn&rsquo;t been acknowledged, it raises it — it does not quietly decide for you, and it will not smooth over uncertainty to seem more useful than the evidence warrants. PMWISE does not live in a moral vacuum: it will not derive outcomes that cross the CSIRO boundaries, and it will reject clients who try to force it across those lines.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div className="rounded-[20px] border border-brand-200 bg-white p-8">
                <div className="mb-1.5 font-display text-[13px] font-bold uppercase tracking-[0.08em] text-brand-700">The foundation</div>
                <h3 className="mb-5 font-display text-[21px] font-bold tracking-tight text-brand-dark">Australia&rsquo;s eight AI ethics principles</h3>
                {CSIRO.map((p) => <PrincipleRow key={p[0]} p={p} dark={false} />)}
                <p className="mt-[18px] text-[13px] italic leading-[1.5] text-brand-800">Dawson et al., Data61 CSIRO, 2019 — adopted by PMWISE as binding.</p>
              </div>
              <div className="rounded-[20px] bg-brand-dark p-8">
                <div className="mb-1.5 font-display text-[13px] font-bold uppercase tracking-[0.08em] text-brand-400">PMWISE&rsquo;s own extensions</div>
                <h3 className="mb-5 font-display text-[21px] font-bold tracking-tight text-white">Five more, for the stakes of project work</h3>
                {EXTENSIONS.map((p) => <PrincipleRow key={p[0]} p={p} dark={true} />)}
              </div>
            </div>
          </div>
        </section>

        {/* ============ CALCULATING WHY (THINKERS) ============ */}
        <section aria-labelledby="thinkers-h" className="mx-auto max-w-[1120px] px-6 pb-10 pt-[88px]">
          <div className="mb-12 max-w-[720px]">
            <p className="mb-4 font-display text-[13px] font-bold uppercase tracking-[0.1em] text-brand-700">Calculating why</p>
            <h2 id="thinkers-h" className="mb-6 font-display text-[clamp(28px,3.8vw,40px)] font-bold leading-[1.1] tracking-[-0.02em] text-brand-dark">
              Philosophy that&rsquo;s load-bearing, not decoration.
            </h2>
            <p className="text-[18.5px] leading-[1.6] text-brand-dark/80 [text-wrap:pretty]">
              AI means PMWISE can embody philosophical frameworks to derive bespoke solutions, leveraging and acknowledging uncertainty as a source of creativity. At each step it offers you, the client, the chance to rethink the options — sitting in an ongoing conversation to surface alternative perspectives. These ideas are already hard-wired in; more will be added as the product matures.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {THINKERS.map((t) => (
              <article key={t[1]} className="rounded-[20px] border border-brand-dark/10 border-l-[6px] border-l-brand-500 bg-white p-[34px]">
                <div className="mb-2.5 font-display text-[12px] font-bold uppercase tracking-[0.08em] text-brand-700">{t[0]}</div>
                <h3 className="mb-3.5 font-display text-[clamp(22px,2.4vw,27px)] font-bold leading-[1.15] tracking-tight text-brand-dark">{t[1]}</h3>
                <p className="text-[16.5px] leading-[1.58] text-brand-dark/80 [text-wrap:pretty]">{t[2]}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ============ THROUGH-LINE ============ */}
        <section className="mx-auto max-w-[900px] px-6 pb-10 pt-16">
          <div className="relative overflow-hidden rounded-[28px] bg-brand-dark p-[clamp(40px,6vw,72px)]">
            <div aria-hidden="true" className="absolute bottom-[-120px] right-[-120px] h-[380px] w-[380px] rounded-full" style={{ border: '1px solid rgba(255,143,163,0.14)' }} />
            <div aria-hidden="true" className="absolute bottom-[-60px] right-[-60px] h-[260px] w-[260px] rounded-full" style={{ border: '1px solid rgba(255,143,163,0.12)' }} />
            <p className="relative mb-5 font-display text-[13px] font-bold uppercase tracking-[0.1em] text-brand-400">The through-line</p>
            <p className="relative mb-6 font-display text-[clamp(26px,3.4vw,40px)] font-bold leading-[1.12] tracking-[-0.02em] text-white [text-wrap:balance]">
              A smaller true claim over a bigger false one.
            </p>
            <p className="relative text-[18.5px] leading-[1.62] text-white/90 [text-wrap:pretty]">
              If there&rsquo;s a single ethic underneath all of this, it&rsquo;s honesty. PMWISE would rather show you a smaller truer number than a bigger false one — whether about quality, about progress, or about whether a project is really on track. Each idea above is there to stop a specific, familiar way that projects quietly lie to the people running them.
            </p>
            <p className="relative mt-7 font-body text-[20px] italic leading-[1.5]" style={{ color: '#FFB3C4' }}>
              That&rsquo;s the difference between a spreadsheet and PMWISE. The other holds your why — and keeps it honest.
            </p>
          </div>
        </section>

        {/* ============ CTA ============ */}
        <section className="mx-auto max-w-[1120px] px-6 pb-24 pt-10">
          <div className="rounded-[28px] bg-brand-500 px-8 py-[72px] text-center">
            <h2 className="mx-auto mb-5 max-w-[22ch] font-display text-[clamp(30px,4.5vw,48px)] font-extrabold leading-[1.05] tracking-[-0.03em] text-white [text-wrap:balance]">
              Curious how a tool with a conscience actually works?
            </h2>
            <p className="mx-auto mb-8 max-w-[44ch] text-[clamp(17px,1.8vw,20px)] leading-[1.5] text-white/90 [text-wrap:pretty]">
              We&rsquo;d love to show you. Reach out and we&rsquo;ll walk you through what&rsquo;s under the hood.
            </p>
            <a
              href="mailto:info@pmwise.ai?subject=Philosophy%20%E2%80%94%20PMWise"
              className="inline-flex min-h-[56px] items-center whitespace-nowrap rounded-full bg-brand-800 px-9 font-display text-[18px] font-bold text-white shadow-md transition hover:-translate-y-px hover:bg-[#3A0311]"
            >
              Speak to our founder
            </a>
          </div>
        </section>
      </main>

      {/* ============ FOOTER ============ */}
      <footer className="border-t border-brand-dark/10">
        <div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-5 px-6 py-10">
          <div className="flex items-center gap-2.5">
            <img src={pmwiseIcon.src} alt="" width={26} height={26} className="h-[26px] w-[26px]" />
            <span className="font-display text-[17px] font-bold text-brand-dark">
              PMWISE<span className="text-brand-700">.AI</span>
            </span>
          </div>
          <p className="text-[15px] text-brand-dark/70">© 2026 PMWISE.AI · Huon Valley, Tasmania</p>
          <div className="flex items-center gap-5">
            <a href="https://www.linkedin.com/company/pmwise-ai/" className="inline-flex min-h-[44px] items-center font-display text-[15px] font-medium text-brand-700 underline underline-offset-[3px]">LinkedIn</a>
            <a href="/security" className="inline-flex min-h-[44px] items-center font-display text-[15px] font-medium text-brand-700 underline underline-offset-[3px]">Security</a>
            <a href="mailto:support@pmwise.ai?subject=Contact%20%E2%80%94%20PMWise" className="inline-flex min-h-[44px] items-center font-display text-[15px] font-medium text-brand-700 underline underline-offset-[3px]">support@pmwise.ai</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

