'use client';

import React, { useState, useEffect } from 'react';

export default function HeroActionButton() {
    const [isMobileVideoActive, setIsMobileVideoActive] = useState(false);

    useEffect(() => {
        // Mobile strict 3-second delay configuration logic
        const isMobile = window.matchMedia('(max-width: 768px)').matches;

        if (isMobile) {
            const delayTimer = setTimeout(() => {
                setIsMobileVideoActive(true);
            }, 3000);
            return () => clearTimeout(delayTimer);
        }
    }, []);

    return (
        <a
            href="https://wa.me/qr/QR33UE3YBU3WL1"
            target="_blank"
            rel="noreferrer"
            className="relative inline-flex items-center justify-center min-h-[60px] w-full max-w-sm mx-auto group cursor-pointer"
        >
            {/* 1. Base State: Static CTA Button (Visible by default, hidden on desktop hover, hidden on mobile after 3s) */}
            <div
                className={`inline-flex items-center justify-center w-full px-8 py-4 text-base font-semibold rounded-lg border border-[#06B6D4] bg-[#06B6D4]/5 text-[#F8FAFC] shadow-[0_0_15px_rgba(6,182,212,0.2)] group-hover:md:opacity-0 group-hover:md:scale-95 transition-all duration-500 ${isMobileVideoActive ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'
                    }`}
            >
                Automate Your Operations
            </div>

            {/* 2. Video Overlay: Triggers automatically on mobile delay OR instantly on desktop group-hover */}
            <div
                className={`absolute inset-0 w-full h-full rounded-lg overflow-hidden border border-[#06B6D4]/30 shadow-[0_0_25px_rgba(6,182,212,0.15)] md:opacity-0 md:scale-95 group-hover:md:opacity-100 group-hover:md:scale-100 transition-all duration-500 ${isMobileVideoActive ? 'opacity-100 scale-100' : 'pointer-events-none'
                    }`}
            >
                <video
                    src="/videos/automate-preview.mp4"
                    className="w-full h-full object-cover"
                    muted
                    playsInline
                    loop
                    autoPlay
                />
            </div>
        </a>
    );
}