{/* Header Navigation */ }
<header className="fixed top-0 left-0 w-full h-[80px] bg-[#0F172A]/80 border-b border-white/10 z-[300] flex items-center">
    <div className="max-w-[1200px] mx-auto px-4 md:px-8 flex justify-between items-center w-full relative z-10 gap-4">

        {/* Simplified Logo Container */}
        <a href="#home" className="h-full flex items-center">
            <img
                src="https://labs.google.com/pomelli_downloads/websites/90MDYs0lXoL4vts7yp_4q3/resources/aK3Lf547gmMcmqfL91w_iZ?authuser=0"
                alt="Turbolucent Logo"
                style={{ height: '40px', width: 'auto', objectFit: 'contain' }}
            />
        </a>

        {/* Navigation Items Link Matrix */}
        <nav className="hidden md:flex gap-8 text-[0.9rem] font-medium text-[#F8FAFC]/70">
            <a href="#comparison" className="hover:text-[#F8FAFC] transition-colors">ROI</a>
            <a href="#what-we-do" className="hover:text-[#F8FAFC] transition-colors">Capabilities</a>
            <a href="#showcase" className="hover:text-[#F8FAFC] transition-colors">Case Studies</a>
            <a href="#platform" className="hover:text-[#F8FAFC] transition-colors">Platform</a>
            <a href="#architecture" className="hover:text-[#F8FAFC] transition-colors">Architecture</a>
            <a href="#blogs" className="hover:text-[#F8FAFC] transition-colors">Blogs</a>
        </nav>

        {/* ... rest of your header items ... */}
    </div>
</header>