import React, { useEffect, useRef, useState } from 'react';
import { Compass, Sparkles } from 'lucide-react';

/**
 * Dimensional Transition Component (The Gravitational Ring Breach)
 * Smoothly transitions from the Hero through an Einstein accretion ring into the Event Arenas.
 * Features scroll-linked transforms, layered parallax, and chiaroscuro gold flares.
 */
export default function DimensionalTransition() {
  const containerRef = useRef(null);
  const [scrollYProgress, setScrollYProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight + rect.height)));
      setScrollYProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full py-20 overflow-hidden bg-void flex items-center justify-center select-none"
    >
      {/* Background Accretion Glow & Cosmic Lensing Grid */}
      <div className="absolute inset-0 bg-spacetime-grid opacity-25 pointer-events-none" />

      {/* Accretion Disk Ring expanding with scroll */}
      <div
        style={{
          transform: `scale(${0.85 + scrollYProgress * 0.4}) rotate(${scrollYProgress * 45}deg)`,
          opacity: Math.sin(scrollYProgress * Math.PI) * 0.9 + 0.1,
          transition: 'transform 0.1s ease-out, opacity 0.2s ease-out',
        }}
        className="w-[480px] sm:w-[650px] h-[480px] sm:h-[650px] rounded-full accretion-ring absolute pointer-events-none"
      />

      {/* Secondary Inner Golden Event Horizon Ring */}
      <div
        style={{
          transform: `scale(${0.6 + scrollYProgress * 0.5}) rotate(${-scrollYProgress * 60}deg)`,
          transition: 'transform 0.1s ease-out',
        }}
        className="w-[280px] sm:w-[380px] h-[280px] sm:h-[380px] rounded-full border border-gold-bright/40 absolute pointer-events-none shadow-[0_0_50px_rgba(245,158,11,0.3)]"
      />

      {/* Atmospheric Flare Shimmer */}
      <div className="absolute w-[600px] h-[200px] bg-gradient-to-r from-transparent via-gold/15 to-transparent blur-3xl pointer-events-none" />

      {/* Content Threshold Message */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-panel border border-gold-antique/30 text-[10px] font-mono tracking-[0.25em] text-gold-pale uppercase">
          <Sparkles size={11} className="text-gold" />
          <span>EVENT HORIZON CROSSING // DIMENSIONAL BREACH</span>
        </div>

        <h3 className="font-cinzel font-black text-2xl sm:text-4xl text-white tracking-wider uppercase">
          Entering The <span className="text-gradient-gold">Arena Horizon</span>
        </h3>

        <p className="font-serif italic text-sm sm:text-base text-starlight-300 max-w-lg mx-auto">
          "Gravitational physics do not end at the event horizon; they simply rewrite the rules of what is possible."
        </p>

        <div className="pt-2 font-mono text-[10px] text-starlight-500 tracking-widest flex items-center justify-center space-x-4 uppercase">
          <span>PARADOX ARENAS DETECTED</span>
          <span>•</span>
          <span className="text-gold-antique">LATENCY: ZERO</span>
          <span>•</span>
          <span>TOTAL PRIZE: ₹5,00,000+</span>
        </div>
      </div>
    </div>
  );
}
