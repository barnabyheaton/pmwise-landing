export default function PMWiseLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-green-600">PMWISE.AI</div>
          <a 
            href="mailto:info@pmwise.ai"
            className="text-gray-700 hover:text-green-600 transition"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        {/* Knight Icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-32 h-32 bg-green-100 rounded-lg flex items-center justify-center">
            <svg className="w-24 h-24 text-green-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
            </svg>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-6xl font-bold text-gray-900 mb-4">PMWISE.AI</h1>

        {/* Slogan */}
        <h2 className="text-2xl text-gray-700 mb-12 font-semibold">
          Guaranteed Traceable Benefit Realisation
        </h2>

        {/* Body Copy */}
        <div className="max-w-3xl mx-auto text-left mb-12 space-y-6">
          <p className="text-gray-700 leading-relaxed">
            Despite 70 years of modern project management practice, 70% of projects still fail—a multi-trillion-dollar loss annually.
          </p>

          <p className="text-gray-700 leading-relaxed">
            The root cause: Projects measure scope, budget, and timeline. They ignore why the project exists in the first place.
          </p>

          <p className="text-gray-700 leading-relaxed">
            <strong>PMWISE.AI inverts this.</strong> We place your project's purpose—the benefit you're trying to realise—at the centre of everything. Using AI-powered analysis, we help you identify your highest-impact opportunities, then deliver real-time, fully traceable benefit realisation throughout execution.
          </p>

          <p className="text-gray-700 leading-relaxed">
            The difference is stark: Most project managers avoid high-risk areas because they believe there's little to gain. We know the opposite is true. The Stoics had it right: <em>"The obstacle is the way."</em> Your greatest opportunities hide in the problems you'd rather avoid.
          </p>
        </div>

        {/* What We Do */}
        <div className="bg-green-50 rounded-lg p-8 mb-12 max-w-3xl mx-auto text-left">
          <h3 className="text-xl font-bold text-gray-900 mb-6">What We Do</h3>
          <ol className="space-y-4 text-gray-700">
            <li className="flex gap-4">
              <span className="text-green-600 font-bold flex-shrink-0">1.</span>
              <span>Identify your most impactful opportunities (the risks others avoid)</span>
            </li>
            <li className="flex gap-4">
              <span className="text-green-600 font-bold flex-shrink-0">2.</span>
              <span>Define them precisely using our SMAAART framework</span>
            </li>
            <li className="flex gap-4">
              <span className="text-green-600 font-bold flex-shrink-0">3.</span>
              <span>Invert them into concrete, measurable benefits</span>
            </li>
            <li className="flex gap-4">
              <span className="text-green-600 font-bold flex-shrink-0">4.</span>
              <span>Execute with full traceability—every decision auditable, every outcome proven</span>
            </li>
          </ol>
          <p className="text-gray-900 font-semibold mt-6">
            The result: Projects that deliver what they promised.
          </p>
        </div>

        {/* CTA Section */}
        <div className="mb-12">
          <p className="text-lg text-gray-700 mb-6">
            Early adopters in ANZ and APAC are already using PMWISE.AI.
          </p>
          <p className="text-xl font-semibold text-gray-900 mb-8">
            Join the movement. Get early access:
          </p>

          <div className="max-w-md mx-auto">
            <p className="text-sm text-gray-600 mb-4">
              Email: <a href="mailto:info@pmwise.ai" className="text-green-600 font-semibold hover:underline">info@pmwise.ai</a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-600">
          <p>© 2026 PMWISE.AI. All rights reserved.</p>
          <p className="text-sm mt-2">
            <a href="mailto:info@pmwise.ai" className="text-green-600 hover:underline">info@pmwise.ai</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
