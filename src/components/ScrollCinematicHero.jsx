import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, ArrowRight, Compass, Sparkles } from 'lucide-react';
import CosmicScrollCanvas from './CosmicScrollCanvas';

const NARRATIVE_STAGES = [
  {
    range: [0.0, 0.22],
    index: '01',
    title: 'THE VOID',
    headline: 'A Completely Dark Universe',
    quote: 'Before form and function, there is only a silent anomaly. A tiny point of light pulses in the deep distance without a known origin.',
    contradiction: 'Light existing without a source',
  },
  {
    range: [0.22, 0.44],
    index: '02',
    title: 'THE DISTORTION',
    headline: 'Space Bends Around The Light',
    quote: 'Spacetime curves under non-Euclidean gravitational pull, forming a radiant luminous ring with no visible celestial body.',
    contradiction: 'Curvature without mass',
  },
  {
    range: [0.44, 0.66],
    index: '03',
    title: 'THE CONTRADICTION',
    headline: 'The Inverted Metropolis',
    quote: 'An inverted city composed of architectural monoliths hangs upside down in space, above a digital landscape stretching endlessly below.',
    contradiction: 'Opposing worlds sharing identical coordinates',
  },
  {
    range: [0.66, 0.85],
    index: '04',
    title: 'THE WITNESS',
    headline: 'Observer & Contained World',
    quote: 'A lone astronaut approaches a transparent hypercube floating in deep vacuum, containing a thriving miniature ecosystem inside.',
    contradiction: 'Limits holding limitlessness',
  },
  {
    range: [0.85, 1.0],
    index: '05',
    title: 'THE REVEAL',
    headline: 'The Impossible Coexists',
    quote: 'The hypercube fractures into dimensional portal shards. The threshold opens, revealing the festival grounds.',
    contradiction: 'The boundary becomes the gateway',
  },
];

export default function ScrollCinematicHero({ onExploreArenas, onMintPass }) {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Live countdown to March 10, 2026
  const [timeLeft, setTimeLeft] = useState({ days: 12, hours: 4, mins: 31, secs: 9 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.secs > 0) return { ...prev, secs: prev.secs - 1 };
        if (prev.mins > 0) return { ...prev, mins: prev.mins - 1, secs: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, mins: 59, secs: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, mins: 59, secs: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Track scroll progress within pinned container
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;
      if (totalScrollable <= 0) return;

      const currentScroll = -rect.top;
      const progress = Math.max(0, Math.min(1, currentScroll / totalScrollable));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Find active narrative stage
  const activeStage =
    NARRATIVE_STAGES.find(
      (s) => scrollProgress >= s.range[0] && scrollProgress < s.range[1]
    ) || NARRATIVE_STAGES[NARRATIVE_STAGES.length - 1];

  const isFinalStage = scrollProgress >= 0.85;

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[280vh] select-none"
      id="hero-scroll-container"
    >
      {/* Pinned Sticky Viewport */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col justify-between">
        {/* 3D WebGL Canvas Layer */}
        <CosmicScrollCanvas scrollProgress={scrollProgress} />

        {/* Ambient Noise Texture & Vignette */}
        <div className="absolute inset-0 bg-radial-vignette pointer-events-none z-10 opacity-70" />

        {/* Top Technical Metadata Bar (Ash Thorp style telemetry) */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 flex items-center justify-between font-mono text-[11px] text-gray-400">
          <div className="flex items-center space-x-3">
            <span className="text-white font-bold tracking-wider">
              NMIMS SHIRPUR // MPSTME
            </span>
            <span className="text-gray-600">|</span>
            <span className="hidden sm:inline text-gray-400">
              COORDINATES: 20.8845° N, 74.8940° E
            </span>
          </div>

          <div className="flex items-center space-x-3 text-right">
            <span className="text-rose font-semibold tracking-wider">
              {activeStage.index} // {activeStage.title}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-rose animate-ping" />
          </div>
        </div>

        {/* Center Stage Presentation */}
        <div className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-auto text-center flex flex-col items-center">
          {!isFinalStage ? (
            /* Stages 01 to 04: Cinematic Storyboard Progression */
            <div className="space-y-4 max-w-3xl transition-all duration-500 animate-fade-in">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full glass-panel border border-white/10 font-mono text-[10px] text-cyan uppercase tracking-widest">
                <span>CONTRADICTION MOTIF:</span>
                <span className="text-white font-semibold">{activeStage.contradiction}</span>
              </div>

              <h1 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase leading-tight">
                {activeStage.headline}
              </h1>

              <p className="font-serif italic text-base sm:text-xl text-bone-300 max-w-2xl mx-auto leading-relaxed">
                "{activeStage.quote}"
              </p>
            </div>
          ) : (
            /* Stage 05: The Final Tech Fest Cockpit Reveal */
            <div className="space-y-6 max-w-4xl transition-all duration-700 animate-fade-in">
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-panel border border-violet/30 font-mono text-[11px] text-cyan">
                <Sparkles size={13} className="text-rose" />
                <span className="uppercase tracking-widest">
                  DIMENSION UNLOCKED • ANNUAL TECH FIESTA 2026
                </span>
              </div>

              <h1 className="font-serif italic font-normal text-5xl sm:text-7xl md:text-8xl text-white leading-[0.95] tracking-tight">
                The Impossible <br />
                <span className="font-display font-black not-italic text-gradient-paradox">
                  Coexists Here.
                </span>
              </h1>

              <p className="font-sans text-sm sm:text-lg text-bone-300 max-w-2xl mx-auto leading-relaxed font-light">
                Where rigorous computing meets unbounded lateral thinking. Join over 3,000+ engineers, creative hackers, and researchers across India at NMIMS Shirpur.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={onExploreArenas}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl font-mono text-xs font-bold uppercase tracking-wider text-void bg-gradient-to-r from-cyan via-violet to-rose hover:brightness-110 transition-all shadow-xl shadow-violet/25 flex items-center justify-center space-x-3 group"
                >
                  <span>EXPLORE ARENAS</span>
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={onMintPass}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl glass-panel text-white hover:bg-white/10 font-mono text-xs font-semibold tracking-wider transition-all border border-white/15 flex items-center justify-center space-x-2"
                >
                  <Sparkles size={14} className="text-cyan" />
                  <span>MINT DELEGATE PASS</span>
                </button>
              </div>

              {/* Countdown Clock HUD */}
              <div className="pt-4 flex items-center justify-center space-x-6 sm:space-x-8 font-mono text-center">
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-rose font-display">
                    {String(timeLeft.days).padStart(2, '0')}
                  </span>
                  <span className="text-[9px] text-gray-400 block tracking-widest">DAYS</span>
                </div>
                <span className="text-gray-600 text-xl">:</span>
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-white font-display">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </span>
                  <span className="text-[9px] text-gray-400 block tracking-widest">HOURS</span>
                </div>
                <span className="text-gray-600 text-xl">:</span>
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-white font-display">
                    {String(timeLeft.mins).padStart(2, '0')}
                  </span>
                  <span className="text-[9px] text-gray-400 block tracking-widest">MINS</span>
                </div>
                <span className="text-gray-600 text-xl">:</span>
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-cyan font-display">
                    {String(timeLeft.secs).padStart(2, '0')}
                  </span>
                  <span className="text-[9px] text-gray-400 block tracking-widest">SECS</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Editorial Scroll Cue (Fades out as user scrolls) */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 flex items-center justify-between font-mono text-[11px] text-gray-500">
          <div className="flex items-center space-x-2">
            <span>DATES: 10 — 13 MARCH 2026</span>
          </div>

          <div
            style={{ opacity: Math.max(0, 1 - scrollProgress * 3.5) }}
            className="flex items-center space-x-2 text-bone-300 transition-opacity duration-300"
          >
            <span className="tracking-widest uppercase">SCROLL TO ADVANCE REALITY</span>
            <ArrowDown size={14} className="animate-bounce text-cyan" />
          </div>

          <div>
            <span>BOUNTY POOL: ₹5,00,000+</span>
          </div>
        </div>
      </div>
    </div>
  );
}

