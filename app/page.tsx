import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-[#F8FAFC] font-sans antialiased relative overflow-x-hidden pt-[80px]">
      {/* Decorative Orbs */}
      <div className="fixed -top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full blur-[120px] pointer-events-none opacity-35 bg-gradient-to-r from-[#06B6D4] to-transparent z-0" />
      <div className="fixed -bottom-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full blur-[120px] pointer-events-none opacity-35 bg-gradient-to-r from-[#67E8F9] to-transparent z-0" />

      {/* Header Navigation */}
      <header className="fixed top-0 left-0 w-full h-[80px] bg-[#0F172A]/60 backdrop-blur-md border-b border-white/10 z-[300] flex items-center md:pl-[240px]">
        <a href="#home" className="absolute top-0 left-0 h-[80px] w-[240px] bg-white/5 border-r border-white/10 flex items-center justify-center overflow-hidden">
          <img src="https://labs.google.com/pomelli_downloads/websites/90MDYs0lXoL4vts7yp_4q3/resources/aK3Lf547gmMcmqfL91w_iZ?authuser=0" alt="Turbolucent Logo" className="w-full h-full object-cover" />
        </a>
        <div className="max-w-[1200px] mx-auto px-8 flex justify-between items-center w-full relative z-10">
          <nav className="hidden md:flex gap-8 text-[0.9rem] font-medium text-[#F8FAFC]/70">
            <a href="#comparison" className="hover:text-[#F8FAFC] transition-colors">ROI</a>
            <a href="#what-we-do" className="hover:text-[#F8FAFC] transition-colors">Capabilities</a>
            <a href="#showcase" className="hover:text-[#F8FAFC] transition-colors">Case Studies</a>
            <a href="#platform" className="hover:text-[#F8FAFC] transition-colors">Platform</a>
            <a href="#architecture" className="hover:text-[#F8FAFC] transition-colors">Architecture</a>
            <a href="#blogs" className="hover:text-[#F8FAFC] transition-colors">Blogs</a>
          </nav>
          <div className="ml-auto">
            <a href="https://t.me/c/2345641452/954" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-6 py-2.5 text-[0.9rem] font-medium rounded-lg border border-[#06B6D4] bg-[#06B6D4]/5 text-[#F8FAFC] shadow-[0_0_15px_rgba(6,182,212,0.2)] hover:bg-[#06B6D4] hover:text-[#0F172A] transition-all transform hover:-translate-y-0.5">
              Book an appointment
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main>
        <section id="home" className="py-24 border-b border-white/10 flex items-center relative min-h-[calc(100vh-80px)]">
          <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-cover bg-bottom bg-no-repeat z-0" style={{ backgroundImage: "url('https://labs.google.com/pomelli_downloads/websites/90MDYs0lXoL4vts7yp_4q3/resources/a9kXuYP9U8Geh8yB27K_ua?authuser=0')" }} />
          <div className="max-w-[1200px] mx-auto px-8 relative z-10 text-center w-full">
            <span className="inline-block px-4 py-1.5 bg-[#06B6D4]/10 border border-white/10 text-[#06B6D4] rounded-full text-xs font-medium tracking-widest uppercase mb-8 backdrop-blur-sm">
              Agentic E-commerce Automation
            </span>
            <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-[#67E8F9] to-[#06B6D4] bg-clip-text text-transparent">Your Business,</span> Professionalized.
            </h1>
            <p className="text-xl text-[#F8FAFC]/70 max-w-xl mx-auto mb-10">From WhatsApp DMs to a High-Performance Storefront.</p>
            <a href="https://t.me/c/2345641452/954" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg border border-[#06B6D4] bg-[#06B6D4]/5 text-[#F8FAFC] shadow-[0_0_15px_rgba(6,182,212,0.2)] hover:bg-[#06B6D4] hover:text-[#0F172A] transition-all">
              Automate Your Operations
            </a>
          </div>
        </section>

        {/* Comparison Area */}
        <section id="comparison" className="py-24 relative">
          <div className="max-w-[1200px] mx-auto px-8 text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">The Cost of Manual Operations</h2>
            <p className="text-[#F8FAFC]/70 max-w-2xl mx-auto text-lg">Visually proving the ROI of moving from DMs and manual workflows to a fully automated architecture.</p>
          </div>
          <div className="max-w-[900px] mx-auto px-8 grid md:grid-cols-2 gap-8 relative z-10">
            <div className="p-10 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
              <h3 className="text-xl font-bold mb-6 pb-4 border-b border-white/10 text-red-400">✕ Manual (WhatsApp/IG)</h3>
              <ul className="space-y-4 text-[#F8FAFC]/70 text-[1.05rem]">
                <li className="flex items-start gap-4">❌ Missed messages &amp; lost sales</li>
                <li className="flex items-start gap-4">❌ Spreadsheets for inventory tracking</li>
                <li className="flex items-start gap-4">❌ 24+ hour response times to inquiries</li>
                <li className="flex items-start gap-4">❌ Unprofessional presentation to clients</li>
              </ul>
            </div>
            <div className="p-10 rounded-xl bg-[#06B6D4]/5 border border-[#06B6D4] shadow-[0_0_15px_rgba(6,182,212,0.2)] relative backdrop-blur-md">
              <span className="absolute -top-4 right-5 px-4 py-1 bg-[#0F172A] border border-white/10 text-[#06B6D4] rounded-full text-xs font-medium tracking-widest uppercase">Turbolucent Protocol</span>
              <h3 className="text-xl font-bold mb-6 pb-4 border-b border-[#06B6D4]/20 text-[#67E8F9]">✓ Agentic Automation</h3>
              <ul className="space-y-4 text-[#F8FAFC]/70 text-[1.05rem]">
                <li className="flex items-start gap-4">✅ High-conversion, centralized Web Store</li>
                <li className="flex items-start gap-4">✅ Real-time, automatic stock synchronization</li>
                <li className="flex items-start gap-4">✅ Instant AI-handled customer support</li>
                <li className="flex items-start gap-4">✅ Lightning-fast, authoritative storefront</li>
              </ul>
            </div>
          </div>
          <div className="max-w-[900px] mx-auto px-8 mt-16 text-center">
            <div className="inline-block p-6 bg-white/5 border border-white/10 backdrop-blur-md rounded-xl">
              <img src="https://labs.google.com/pomelli_downloads/websites/90MDYs0lXoL4vts7yp_4q3/resources/8ADRjAJy_wpec4o8FmkOfM?authuser=0" alt="Automation Dashboard" className="border border-white/10 rounded-lg shadow-2xl mx-auto" />
            </div>
          </div>
        </section>

        {/* Capabilities Area */}
        <section id="what-we-do" className="py-24 relative">
          <div className="max-w-[1200px] mx-auto px-8 text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Capabilities</h2>
            <p className="text-[#F8FAFC]/70 max-w-2xl mx-auto text-lg">Authoritative, business-focused infrastructure designed to transform retail, wholesale, and offline operations.</p>
          </div>
          <div className="max-w-[1200px] mx-auto px-8 grid md:grid-cols-3 gap-8 relative z-10">
            {[
              { title: "Digital Migration", desc: "Moving businesses from fragmented WhatsApp or Instagram DMs to a centralized, professional Web Store designed for conversion." },
              { title: "Operational Automation", desc: "Deploying Agentic AI to automatically handle customer inquiries, process order tracking, and maintain real-time stock updates." },
              { title: "High-Performance Architecture", desc: "Engineered for absolute speed. We build lightning-fast infrastructure to ensure you never lose a customer to slow load times." }
            ].map((item, idx) => (
              <div key={idx} className="p-12 text-center bg-white/5 border border-white/10 backdrop-blur-md rounded-xl hover:border-[#06B6D4]/30 transition-all transform hover:-translate-y-1">
                <h3 className="text-2xl font-bold mb-4 text-[#67E8F9]">{item.title}</h3>
                <p className="text-[#F8FAFC]/70 text-base leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Business Transformation Case Studies */}
        <section id="showcase" className="py-24 relative border-t border-white/10">
          <div className="max-w-[1200px] mx-auto px-8 text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Business Transformation Case Studies</h2>
            <p className="text-[#F8FAFC]/70 max-w-2xl mx-auto text-lg">Real-world examples of offline shops and retail brands migrated to our high-performance, automated architecture.</p>
          </div>
          <div className="max-w-[1200px] mx-auto px-8 grid md:grid-cols-3 gap-8 relative z-10">
            {[
              { img: "8Oc1y3wLzzX2q0TEcwpk40", tag: "Sub-200ms", title: "Aura Apparel", desc: "Minimalist Fashion Storefront" },
              { img: "8-J2_rVTxwV3Q0EiHw6k4V", tag: "Real-time Sync", title: "Velocity Threads", desc: "High-End Streetwear" },
              { img: "aE505NpvUZKaMBXFDxnkR3", tag: "Zero-Latency", title: "Nexus Couture", desc: "Avant-Garde Collection" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:scale-[1.02] hover:border-[#06B6D4]/40 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all flex flex-col cursor-pointer">
                <div className="relative w-full aspect-[4/5]">
                  <img src={`https://labs.google.com/pomelli_downloads/websites/90MDYs0lXoL4vts7yp_4q3/resources/${item.img}?authuser=0`} alt={item.title} className="w-full h-full object-cover" />
                  <div className="absolute top-3 right-3 bg-[#0F172A]/80 backdrop-blur-md border border-[#06B6D4]/50 text-[#67E8F9] px-2.5 py-1 rounded-full text-xs font-bold shadow-lg">{item.tag}</div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-[#F8FAFC]">{item.title}</h4>
                  <p className="text-sm text-[#F8FAFC]/70 m-0">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Hardware Infrastructure Case Studies */}
        <section id="showcase-hardware" className="py-24 border-t border-white/10 bg-gradient-to-t from-[#06B6D4]/5 to-transparent relative">
          <div className="max-w-[1200px] mx-auto px-8 text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Hardware Infrastructure Case Studies</h2>
            <p className="text-[#F8FAFC]/70 max-w-2xl mx-auto text-lg">High-performance infrastructure tailored for wholesale components and specialized retail solutions.</p>
          </div>
          <div className="max-w-[1200px] mx-auto px-8 grid md:grid-cols-3 gap-8 relative z-10">
            {[
              { img: "b38kNnDs0qs0adPzsx2Ofo", tag: "Ultra-Fast", title: "Quantum Logic Board", desc: "High-Performance Motherboard" },
              { img: "b5EL-E_9gi96Ue6ALVv499", tag: "Durable", title: "CoreLink Cables", desc: "Sockets & Wiring" },
              { img: "arrK7D06Q_CdZV5wggjOHR", tag: "Cooling", title: "AeroFlow Fan", desc: "Advanced Thermal Control" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:scale-[1.02] hover:border-[#06B6D4]/40 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all flex flex-col cursor-pointer">
                <div className="relative w-full aspect-[4/5]">
                  <img src={`https://labs.google.com/pomelli_downloads/websites/90MDYs0lXoL4vts7yp_4q3/resources/${item.img}?authuser=0`} alt={item.title} className="w-full h-full object-cover" />
                  <div className="absolute top-3 right-3 bg-[#0F172A]/80 backdrop-blur-md border border-[#06B6D4]/50 text-[#67E8F9] px-2.5 py-1 rounded-full text-xs font-bold shadow-lg">{item.tag}</div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-[#F8FAFC]">{item.title}</h4>
                  <p className="text-sm text-[#F8FAFC]/70 m-0">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Transparent Results Section */}
        <section id="platform" className="py-24 relative border-t border-white/10">
          <div className="max-w-[1200px] mx-auto px-8 grid md:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <h2 className="text-4xl font-bold mb-6">Transparent Results.<br />Unmatched Velocity.</h2>
              <p className="text-[#F8FAFC]/70 text-lg mb-6">Turbolucent is engineered specifically for the modern e-commerce landscape. We strip away the opacity of traditional software, providing tools that deliver measurable performance enhancements directly to your bottom line.</p>
              <p className="text-[#F8FAFC]/70 text-lg">Our luminous, lucid interface ensures you always see exactly how our high-energy solutions are optimizing your store's environment.</p>
            </div>
            <div className="p-4 bg-white/5 border border-white/10 backdrop-blur-md rounded-xl shadow-2xl">
              <img src="https://labs.google.com/pomelli_downloads/websites/90MDYs0lXoL4vts7yp_4q3/resources/9jAgfMSpE7S4xg_or_g4-j?authuser=0" alt="Minimalist dashboard UI search page" className="rounded-lg border border-white/10" />
            </div>
          </div>
        </section>

        {/* Terminal Tree Map */}
        <section id="architecture" className="py-24 border-t border-white/10 relative">
          <div className="max-w-[1200px] mx-auto px-8 text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Component Architecture</h2>
            <p className="text-[#F8FAFC]/70 max-w-2xl mx-auto text-lg">Engineered with modular structure designed for absolute speed and effortless future composition.</p>
          </div>
          <div className="max-w-[800px] mx-auto px-8 relative z-10">
            <div className="bg-[#0B1120] border border-white/10 rounded-xl shadow-2xl overflow-hidden">
              <div className="bg-white/5 px-4 py-3 flex gap-2 border-b border-white/10">
                <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
              </div>
              <div className="p-6 overflow-x-auto text-[#06B6D4] font-mono text-sm leading-relaxed whitespace-pre">
                {`turbolucent/
├── core/
│   ├── layout.tsx
│   └── agentic-ai.ts
├── store/
│   ├── gallery/
│   │   ├── ProductCard.tsx
│   │   └── SyncEngine.tsx
│   ├── automation/
│   │   └── InventoryTracker.tsx
│   └── ui/               
│       ├── conversion-button.tsx
│       ├── skeleton.tsx
└── infrastructure/
    └── velocity.ts`}
              </div>
            </div>
          </div>
        </section>

        {/* Product Spotlights Blogs */}
        <section id="blogs" className="py-24 border-t border-white/10 bg-gradient-to-b from-[#06B6D4]/5 to-transparent relative">
          <div className="max-w-[1200px] mx-auto px-8 text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">E-commerce Product Spotlights</h2>
            <p className="text-[#F8FAFC]/70 max-w-2xl mx-auto text-lg">Sample specific product images from modern e-commerce stores pushing the boundaries of performance and design.</p>
          </div>
          <div className="max-w-[1200px] mx-auto px-8 grid md:grid-cols-3 gap-8 relative z-10">
            {[
              { img: "9p1nFUzxJry7PTh0hj5k2Q", title: "Optimizing High-Res Apparel Imagery", desc: "Discover how top fashion stores ensure 4K product images load with zero latency without sacrificing material details." },
              { img: "aN8TMf-_exKbxkIWSw__-D", title: "Presenting Denim Collections", desc: "Techniques for rendering intricate fabric textures and details while maintaining a lightning-fast digital storefront." },
              { img: "bZwJiioRE021JIvq0vXk-U", title: "The Future of Digital Lookbooks", desc: "Syncing physical product catalogs with high-speed virtual storefronts to deliver real-time stylistic clarity." }
            ].map((blog, idx) => (
              <article key={idx} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-[#06B6D4]/30 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] transition-all flex flex-col">
                <div className="w-full aspect-[16/9] relative">
                  <img src={`https://labs.google.com/pomelli_downloads/websites/90MDYs0lXoL4vts7yp_4q3/resources/${blog.img}?authuser=0`} alt={blog.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold mb-3 text-[#F8FAFC]">{blog.title}</h3>
                  <p className="text-sm text-[#F8FAFC]/70 leading-relaxed flex-grow">{blog.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* Complete Footer Component */}
      <footer className="border-t border-white/10 py-16 bg-black/30 relative z-10">
        <div className="max-w-[1200px] mx-auto px-8 flex flex-col items-center text-center gap-6">
          <img src="https://labs.google.com/pomelli_downloads/websites/90MDYs0lXoL4vts7yp_4q3/resources/aK3Lf547gmMcmqfL91w_iZ?authuser=0" alt="Turbolucent Logo" className="h-[60px] w-[240px] bg-white object-cover rounded-md p-1" />
          <div className="flex flex-wrap justify-center gap-8 mt-2 text-[#F8FAFC]/70 text-sm">
            <div className="flex items-center gap-2">📞 <span>+91 9944722783</span></div>
            <div className="flex items-center gap-2">✉️ <a href="mailto:turbolucent@gmail.com" className="hover:text-white transition-colors">turbolucent@gmail.com</a></div>
            <div className="flex items-center gap-2">🐦 <a href="https://www.x.com/turbolucent" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">X (Twitter)</a></div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 w-full text-center">
            <p className="text-xs text-white/40">© Turbolucent. High-performance SaaS with crystal-clear results.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}