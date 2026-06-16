import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#030712] text-gray-100 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      {/* Navigation */}
      <nav className="border-b border-gray-800/80 bg-[#030712]/80 backdrop-blur-md sticky top-0 z-50 px-6 py-4 flex justify-between items-center max-w-7xl mx-auto w-full">
        <div className="text-xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
          TURBOLUCENT
        </div>
        <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-medium px-5 py-2.5 rounded-xl transition-all duration-200 shadow-lg shadow-blue-500/20 active:scale-95 text-sm">
          Book an appointment
        </button>
      </nav>

      {/* Hero Section */}
      <header className="max-w-5xl mx-auto px-6 pt-24 pb-20 text-center relative z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
        <span className="text-blue-400 text-xs font-bold tracking-widest uppercase bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/20">
          Agentic E-Commerce Automation
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mt-6 mb-8 bg-gradient-to-b from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
          Your Business, <br />
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">Professionalized.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          From WhatsApp DMs to a High-Performance Storefront. Automate your operations completely.
        </p>
        <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold px-8 py-4 rounded-xl transition-all shadow-lg shadow-blue-500/20 active:scale-95 inline-flex items-center gap-3 group">
          Automate Your Operations
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </button>
      </header>

      {/* Comparison Grid */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-gray-900">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4 text-white">The Cost of Manual Operations</h2>
          <p className="text-gray-400">Visually proving the ROI of moving from DMs and manual workflows to a fully automated architecture.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-950/40 border border-red-500/10 p-8 rounded-2xl relative overflow-hidden backdrop-blur-sm">
            <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 rounded-full blur-2xl"></div>
            <h3 className="text-red-400 font-bold text-lg mb-6 flex items-center gap-2">✕ Manual (WhatsApp/IG)</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3"><span className="text-red-500 font-bold">✕</span> Missed messages & lost sales</li>
              <li className="flex items-start gap-3"><span className="text-red-500 font-bold">✕</span> Spreadsheets for inventory tracking</li>
              <li className="flex items-start gap-3"><span className="text-red-500 font-bold">✕</span> 24+ hour response times to inquiries</li>
              <li className="flex items-start gap-3"><span className="text-red-500 font-bold">✕</span> Unprofessional presentation to clients</li>
            </ul>
          </div>
          <div className="bg-gray-950/40 border border-emerald-500/10 p-8 rounded-2xl relative overflow-hidden backdrop-blur-sm">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl"></div>
            <div className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-2">Turbolucent Protocol</div>
            <h3 className="text-emerald-400 font-bold text-lg mb-6 flex items-center gap-2">✓ Agentic Automation</h3>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li className="flex items-start gap-3"><span className="text-emerald-400 font-bold">✓</span> High-conversion, centralized Web Store</li>
              <li className="flex items-start gap-3"><span className="text-emerald-400 font-bold">✓</span> Real-time, automatic stock synchronization</li>
              <li className="flex items-start gap-3"><span className="text-emerald-400 font-bold">✓</span> Instant AI-handled customer support</li>
              <li className="flex items-start gap-3"><span className="text-emerald-400 font-bold">✓</span> Lightning-fast, authoritative storefront</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-gray-900">
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4 text-white">Our Capabilities</h2>
          <p className="text-gray-400 max-w-2xl">Authoritative, business-focused infrastructure designed to transform retail, wholesale, and offline operations.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { num: "01", title: "Digital Migration", desc: "Moving businesses from fragmented WhatsApp or Instagram DMs to a centralized, professional Web Store designed for conversion." },
            { num: "02", title: "Operational Automation", desc: "Deploying Agentic AI to automatically handle customer inquiries, process order tracking, and maintain real-time stock updates." },
            { num: "03", title: "High-Performance Architecture", desc: "Engineered for absolute speed. We build lightning-fast infrastructure to ensure you never lose a customer to slow load times." }
          ].map((cap, idx) => (
            <div key={idx} className="bg-gradient-to-b from-gray-950 to-transparent border border-gray-900 p-8 rounded-2xl hover:border-gray-800 transition-colors">
              <div className="text-blue-500 font-mono text-sm font-bold mb-4">{cap.num} /</div>
              <h3 className="text-lg font-bold mb-2 text-white">{cap.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{cap.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Business Transformation Case Studies */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-gray-900">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4 text-white">Business Transformation Case Studies</h2>
          <p className="text-gray-400 max-w-2xl">Real-world examples of offline shops and retail brands migrated to our high-performance, automated architecture.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { tag: "Sub-200ms", name: "Aura Apparel", type: "Minimalist Fashion Storefront" },
            { tag: "Real-time Sync", name: "Velocity Threads", type: "High-End Streetwear" },
            { tag: "Zero-Latency", name: "Nexus Couture", type: "Avant-Garde Collection" }
          ].map((caseStudy, idx) => (
            <div key={idx} className="bg-gray-950/60 border border-gray-900 rounded-2xl p-6 hover:border-gray-700 transition-all">
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-gray-900 text-cyan-400 border border-gray-800">
                {caseStudy.tag}
              </span>
              <h3 className="text-xl font-bold mt-6 mb-1 text-white">{caseStudy.name}</h3>
              <p className="text-gray-400 text-sm">{caseStudy.type}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Hardware Infrastructure Case Studies */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-gray-900">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4 text-white">Hardware Infrastructure Case Studies</h2>
          <p className="text-gray-400 max-w-2xl">High-performance infrastructure tailored for wholesale components and specialized retail solutions.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { tag: "Ultra-Fast", name: "Quantum Logic Board", type: "High-Performance Motherboard" },
            { tag: "Durable", name: "CoreLink Cables", type: "Sockets & Wiring" },
            { tag: "Cooling", name: "AeroFlow Fan", type: "Advanced Thermal Control" }
          ].map((hardware, idx) => (
            <div key={idx} className="bg-gray-950/60 border border-gray-900 rounded-2xl p-6 hover:border-gray-700 transition-all">
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-gray-900 text-blue-400 border border-gray-800">
                {hardware.tag}
              </span>
              <h3 className="text-xl font-bold mt-6 mb-1 text-white">{hardware.name}</h3>
              <p className="text-gray-400 text-sm">{hardware.type}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Brand Ethos Statement */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center border-t border-gray-900">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-white">Transparent Results. Unmatched Velocity.</h2>
        <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
          Turbolucent is engineered specifically for the modern e-commerce landscape. We strip away the opacity of traditional software, providing tools that deliver measurable performance enhancements directly to your bottom line. Our luminous, lucid interface ensures you always see exactly how our high-energy solutions are optimizing your store's environment.
        </p>
      </section>

      {/* Component Architecture Map */}
      <section className="max-w-3xl mx-auto px-6 py-16 border-t border-gray-900 bg-gray-950/20 rounded-3xl border border-gray-900">
        <h2 className="text-2xl font-bold tracking-tight mb-2 text-white text-center">Component Architecture</h2>
        <p className="text-gray-500 text-sm text-center mb-8">Engineered with modular structure designed for absolute speed and effortless future composition.</p>
        <div className="font-mono text-sm text-gray-400 bg-black/50 p-6 rounded-xl border border-gray-800 shadow-inner max-w-md mx-auto">
          <div className="text-blue-400 font-bold">turbolucent/</div>
          <div className="pl-4 text-gray-500">├── core/</div>
          <div className="pl-8 text-gray-300">│   ├── layout.tsx</div>
          <div className="pl-8 text-gray-300">│   └── agentic-ai.ts</div>
          <div className="pl-4 text-gray-500">├── store/</div>
          <div className="pl-8 text-gray-500">│   ├── gallery/</div>
          <div className="pl-12 text-gray-300">│   │   ├── ProductCard.tsx</div>
          <div className="pl-12 text-gray-300">│   │   └── SyncEngine.tsx</div>
          <div className="pl-8 text-gray-500">│   ├── automation/</div>
          <div className="pl-12 text-gray-300">│   │   └── InventoryTracker.tsx</div>
          <div className="pl-8 text-gray-500">│   └── ui/</div>
          <div className="pl-12 text-gray-300">│   │   ├── conversion-button.tsx</div>
          <div className="pl-12 text-gray-300">│   │   └── skeleton.tsx</div>
          <div className="pl-4 text-gray-500">└── infrastructure/</div>
          <div className="pl-8 text-gray-300">    └── velocity.ts</div>
        </div>
      </section>

      {/* E-commerce Product Spotlights */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-t border-gray-900">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4 text-white">E-commerce Product Spotlights</h2>
          <p className="text-gray-400">Sample specific product configurations pushing the boundaries of performance and design.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Optimizing High-Res Apparel Imagery", desc: "Discover how top fashion stores ensure 4K product images load with zero latency without sacrificing material details." },
            { title: "Presenting Denim Collections", desc: "Techniques for rendering intricate fabric textures and details while maintaining a lightning-fast digital storefront." },
            { title: "The Future of Digital Lookbooks", desc: "Syncing physical product catalogs with high-speed virtual storefronts to deliver real-time stylistic clarity." }
          ].map((spotlight, idx) => (
            <div key={idx} className="bg-gray-950/40 border border-gray-900 p-8 rounded-2xl hover:border-gray-800 transition-colors">
              <h3 className="text-lg font-bold mb-3 text-white leading-snug">{spotlight.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{spotlight.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-900 bg-black/40 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <div className="text-lg font-black text-white tracking-wider mb-2">TURBOLUCENT</div>
            <p className="text-xs text-gray-500">© {new Date().getFullYear()} Turbolucent. High-performance SaaS with crystal-clear results.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 text-sm text-gray-400 items-center">
            <span className="hover:text-white transition-colors">📞 +91 99447 22783</span>
            <a href="mailto:turbolucent@gmail.com" className="hover:text-white transition-colors">✉ turbolucent@gmail.com</a>
          </div>
        </div>
      </footer>
    </div>
  );
}