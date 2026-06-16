import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">

      {/* HEADER / NAVIGATION */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              TURBOLUCENT
            </span>
          </div>
          <a
            href="tel:+919944722783"
            className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/20"
          >
            Book an appointment
          </a>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">

        {/* HERO BANNER */}
        <section className="text-center space-y-6 max-w-4xl mx-auto pt-8">
          <p className="text-cyan-400 text-sm font-bold tracking-widest uppercase">
            Agentic E-commerce Automation
          </p>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            Your Business, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Professionalized.</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto">
            From WhatsApp DMs to a High-Performance Storefront. Automate your operations completely.
          </p>
          <div className="pt-4">
            <a
              href="mailto:turbolucent@gmail.com"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold bg-slate-800 text-white border border-slate-700 hover:bg-slate-700 hover:border-slate-600 transition-all"
            >
              Automate Your Operations
            </a>
          </div>
        </section>

        {/* ROI BLOCK */}
        <section className="space-y-8 bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 sm:p-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">The Cost of Manual Operations</h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Visually proving the ROI of moving from DMs and manual workflows to a fully automated architecture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 pt-4">
            {/* Manual Workflows */}
            <div className="bg-slate-900/80 border border-red-950/40 rounded-xl p-6 space-y-4">
              <h3 className="text-lg font-bold text-red-400 flex items-center gap-2">
                ✕ Manual (WhatsApp/IG)
              </h3>
              <ul className="space-y-3 text-sm text-slate-400">
                <li className="flex items-start gap-2">• Missed messages & lost sales</li>
                <li className="flex items-start gap-2">• Spreadsheets for inventory tracking</li>
                <li className="flex items-start gap-2">• 24+ hour response times to inquiries</li>
                <li className="flex items-start gap-2">• Unprofessional presentation to clients</li>
              </ul>
            </div>

            {/* Agentic Automation */}
            <div className="bg-slate-900/80 border border-cyan-950/40 rounded-xl p-6 space-y-4 shadow-xl shadow-cyan-950/10">
              <h3 className="text-lg font-bold text-cyan-400 flex items-center gap-2">
                ✓ Agentic Automation
              </h3>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-2">✓ High-conversion, centralized Web Store</li>
                <li className="flex items-start gap-2">✓ Real-time, automatic stock synchronization</li>
                <li className="flex items-start gap-2">✓ Instant AI-handled customer support</li>
                <li className="flex items-start gap-2">✓ Lightning-fast, authoritative storefront</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Our Capabilities</h2>
            <p className="text-slate-400 text-sm">
              Authoritative, business-focused infrastructure designed to transform retail, wholesale, and offline operations.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-slate-900/30 border border-slate-800 p-6 rounded-xl space-y-3">
              <div className="text-cyan-400 text-xl font-bold">01 / Digital Migration</div>
              <p className="text-sm text-slate-400">
                Moving businesses from fragmented WhatsApp or Instagram DMs to a centralized, professional Web Store designed for conversion.
              </p>
            </div>
            <div className="bg-slate-900/30 border border-slate-800 p-6 rounded-xl space-y-3">
              <div className="text-cyan-400 text-xl font-bold">02 / Operational Automation</div>
              <p className="text-sm text-slate-400">
                Deploying Agentic AI to automatically handle customer inquiries, process order tracking, and maintain real-time stock updates.
              </p>
            </div>
            <div className="bg-slate-900/30 border border-slate-800 p-6 rounded-xl space-y-3">
              <div className="text-cyan-400 text-xl font-bold">03 / High-Performance Architecture</div>
              <p className="text-sm text-slate-400">
                Engineered for absolute speed. We build lightning-fast infrastructure to ensure you never lose a customer to slow load times.
              </p>
            </div>
          </div>
        </section>

        {/* CASE STUDIES */}
        <section className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Business Transformation Case Studies</h2>
            <p className="text-slate-400 text-sm">
              Real-world examples of offline shops and retail brands migrated to our high-performance, automated architecture.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-slate-900/20 border border-slate-800 rounded-xl p-5 space-y-2">
              <span className="text-xs font-mono px-2 py-1 bg-slate-800 text-cyan-400 rounded">Sub-200ms</span>
              <h4 className="font-bold text-white pt-2">Aura Apparel</h4>
              <p className="text-xs text-slate-400">Minimalist Fashion Storefront</p>
            </div>
            <div className="bg-slate-900/20 border border-slate-800 rounded-xl p-5 space-y-2">
              <span className="text-xs font-mono px-2 py-1 bg-slate-800 text-cyan-400 rounded">Real-time Sync</span>
              <h4 className="font-bold text-white pt-2">Velocity Threads</h4>
              <p className="text-xs text-slate-400">High-End Streetwear</p>
            </div>
            <div className="bg-slate-900/20 border border-slate-800 rounded-xl p-5 space-y-2">
              <span className="text-xs font-mono px-2 py-1 bg-slate-800 text-cyan-400 rounded">Zero-Latency</span>
              <h4 className="font-bold text-white pt-2">Nexus Couture</h4>
              <p className="text-xs text-slate-400">Avant-Garde Collection</p>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER & CONTACT INFO */}
      <footer className="mt-24 border-t border-slate-900 bg-slate-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-slate-500">
          <div className="space-y-2 text-center sm:text-left">
            <p className="font-bold text-slate-400 text-base">TURBOLUCENT</p>
            <p>© Turbolucent. High-performance SaaS with crystal-clear results.</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-slate-300">
            <a href="tel:+919944722783" className="hover:text-cyan-400 transition-colors font-medium">
              📞 +91 99447 22783
            </a>
            <a href="mailto:turbolucent@gmail.com" className="hover:text-cyan-400 transition-colors">
              ✉ turbolucent@gmail.com
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}