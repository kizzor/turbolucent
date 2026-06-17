'use client';

import React, { useState, useEffect, useRef } from 'react';

export default function HeroActionButton() {
    const [stage, setStage] = useState<'button' | 'loading' | 'video'>('button');
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        // Mobile Check & Run 3-second delay configuration
        const isMobile = window.matchMedia('(max-width: 768px)').matches;

        if (isMobile) {
            const delayTimer = setTimeout(() => {
                setStage('loading');
            }, 3000);
            return () => clearTimeout(delayTimer);
        }
    }, []);

    // Desktop Interaction Handlers
    const handleMouseEnter = () => {
        const isDesktop = window.matchMedia('(min-width: 769px)').matches;
        if (isDesktop) {
            setStage('video');
            // Enforce play programmatically on state changes
            setTimeout(() => {
                if (videoRef.current) videoRef.current.play().catch(() => { });
            }, 50);
        }
    };

    const handleMouseLeave = () => {
        const isDesktop = window.matchMedia('(min-width: 769px)').matches;
        if (isDesktop) {
            setStage('button');
            if (videoRef.current) {
                videoRef.current.pause();
                videoRef.current.currentTime = 0;
            }
        }
    };

    return (
        <div
            className="relative inline-flex items-center justify-center min-h-[60px] w-full max-w-sm mx-auto"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Stage Button Layer */}
            {stage !== 'video' && (
                <a
                    href="https://wa.me/qr/QR33UE3YBU3WL1"
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-center justify-center w-full px-8 py-4 text-base font-semibold rounded-lg border border-[#06B6D4] bg-[#06B6D4]/5 text-[#F8FAFC] shadow-[0_0_15px_rgba(6,182,212,0.2)] hover:bg-[#06B6D4] hover:text-[#0F172A] transition-all duration-500 ${stage === 'loading' ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'
                        }`}
                >
                    Automate Your Operations
                </a>
            )}

            {/* Video Content Overlay Frame */}
            <div
                className={`absolute inset-0 w-full h-full rounded-lg overflow-hidden border border-[#06B6D4]/30 shadow-[0_0_25px_rgba(6,182,212,0.15)] transition-all duration-500 ${stage === 'loading' || stage === 'video' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                    }`}
            >
                <video
                    ref={videoRef}
                    src="/videos/automate-preview.mp4"
                    className="w-full h-full object-cover"
                    muted
                    playsInline
                    loop
                    autoPlay={false}
                    onCanPlay={() => {
                        // Native autoplay fallback fallback for delayed mobile state transition
                        if (stage === 'loading') {
                            setStage('video');
                            if (videoRef.current) videoRef.current.play().catch(() => { });
                        }
                    }}
                />
            </div>
        </div>
    );
}