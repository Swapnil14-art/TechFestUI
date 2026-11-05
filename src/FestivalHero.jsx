import React, { useState, useEffect } from 'react';
import { ArrowRight, Compass, Sparkles, Terminal, Shield, Orbit } from 'lucide-react';

export default function FestivalHero({ onExploreArenas, onOpenPass }) {
  // Live ticking countdo wn to March 11, 2026
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

  return (
    <section id="hero-deck" className="relative w-full min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Background Ambience Layers */}
      <div className="absolute inset-0 bg-grid-perspective opacity-40 pointer-events-none" />

      {/* Accretion Ring Distortion in Center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[540px] h-[340px] sm:h-[540px] rounded-full accretion-ring opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Top Floating Status HUD */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          <div className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full glass-panel border border-white/10 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-cyan animate-ping" />
            <span className="text-bone-300 uppercase tracking-widest text-[11px]">
              REALITY STATE: QUANTUM SUPERPOSITION
            </span>
          </div>

          {/* Live Countdown Timer */}
          <div className="flex items-center space-x-3 sm:space-x-5 font-mono text-center">
            <div>
              <span className="text-xl sm:text-2xl font-black text-rose font-display">
                {String(timeLeft.days).padStart(2, '0')}
              </span>
              <span className="text-[9px] text-gray-400 block tracking-widest">DAYS</span>
            </div>
            <span className="text-gray-600">:</span>
            <div>
              <span className="text-xl sm:text-2xl font-black text-white font-display">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="text-[9px] text-gray-400 block tracking-widest">HOURS</span>
            </div>
            <span className="text-gray-600">:</span>
            <div>
              <span className="text-xl sm:text-2xl font-black text-white font-display">
                {String(timeLeft.mins).padStart(2, '0')}
              </span>
              <span className="text-[9px] text-gray-400 block tracking-widest">MINS</span>
            </div>
            <span className="text-gray-600">:</span>
            <div>
              <span className="text-xl sm:text-2xl font-black text-cyan font-display">
                {String(timeLeft.secs).padStart(2, '0')}
              </span>
              <span className="text-[9px] text-gray-400 block tracking-widest">SECS</span>
            </div>
          </div>
        </div>

        {/* Main Grid: Left Narrative + Right Dimensional Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center space-x-3 text-xs font-mono text-violet tracking-widest">
              <span>01 / 04</span>
              <span className="w-8 h-[1px] bg-violet/40" />
              <span>NMIMS SHIRPUR CAMPUS</span>
            </div>

            <h1 className="font-serif italic font-normal text-5xl sm:text-7xl lg:text-8xl text-white leading-[0.95] tracking-tight">
              The Impossible <br />
              <span className="font-display font-black not-italic text-gradient-paradox">
                Coexists Here
              </span>
            </h1>

            <p className="font-sans text-sm sm:text-lg text-bone-300 max-w-xl leading-relaxed font-light">
              A flagship convergence of technology, non-Euclidean architectures, and creative contradictions. Where conflicting states fuel breakthrough computing.
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={onExploreArenas}
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-mono text-xs font-bold uppercase tracking-wider text-void bg-gradient-to-r from-cyan via-violet to-rose hover:brightness-110 transition-all shadow-xl shadow-violet/25 flex items-center justify-center space-x-3 group"
              >
                <span>EXPLORE ARENAS</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenPass}
                className="w-full sm:w-auto px-8 py-4 rounded-xl glass-panel text-white hover:bg-white/10 font-mono text-xs font-semibold tracking-wider transition-all border border-white/15 flex items-center justify-center space-x-2"
              >
                <Sparkles size={14} className="text-rose" />
                <span>MINT DELEGATE PASS</span>
              </button>
            </div>

            {/* Micro Metadata */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 font-mono text-xs text-gray-400">
              <div>
                <span className="text-[10px] text-gray-500 block">DATES</span>
                <span className="text-bone-200 font-bold">10 — 13 MARCH 2026</span>
              </div>
              <div className="w-[1px] h-6 bg-white/10" />
              <div>
                <span className="text-[10px] text-gray-500 block">LOCATION</span>
                <span className="text-bone-200 font-bold">CAMPUS GROUNDS, SHIRPUR</span>
              </div>
              <div className="w-[1px] h-6 bg-white/10" />
              <div>
                <span className="text-[10px] text-gray-500 block">TOTAL BOUNTY</span>
                <span className="text-cyan font-bold">₹5,00,000+</span>
              </div>
            </div>
          </div>

          {/* Right Column: Dimensional Visual Card (Contained Infinity & Inverted City) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl glass-panel-glow border border-violet/30 p-6 flex flex-col justify-between overflow-hidden group">
              {/* Internal Holographic Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-violet/20 via-transparent to-rose/20 pointer-events-none" />

              {/* Top Card Bar */}
              <div className="flex justify-between items-start z-10 font-mono text-xs">
                <span className="px-2.5 py-1 rounded bg-black/60 border border-white/10 text-cyan text-[10px] tracking-wider uppercase">
                  DIMENSIONAL PORTAL
                </span>
                <span className="text-gray-400 text-[10px]">COORDINATE: 001</span>
              </div>

              {/* Stylized Visual Composition: Inverted City & Floating Astronaut */}
              <div className="relative my-auto flex flex-col items-center justify-center py-8">
                {/* Upper Inverted Monoliths Graphic */}
                <div className="w-full flex justify-center space-x-2 opacity-70 mb-4 transform rotate-180">
                  <div className="w-6 h-20 bg-gradient-to-t from-violet to-transparent rounded-b" />
                  <div className="w-8 h-28 bg-gradient-to-t from-cyan to-transparent rounded-b" />
                  <div className="w-10 h-36 bg-gradient-to-t from-rose to-transparent rounded-b" />
                  <div className="w-7 h-24 bg-gradient-to-t from-violet to-transparent rounded-b" />
                </div>

                {/* Center Portal Frame with astronaut silhouette */}
                <div className="relative w-48 h-64 rounded-2xl border-2 border-rose/80 p-1 shadow-2xl shadow-rose/30 flex items-center justify-center bg-black/40 backdrop-blur-md overflow-hidden group-hover:border-cyan transition-colors">
                  <div className="absolute inset-0 hologram-shimmer opacity-25" />
                  <div className="text-center p-4 z-10">
                    <div className="w-12 h-12 rounded-full border border-cyan/60 mx-auto flex items-center justify-center text-rose mb-3 animate-spin-slow">
                      ∞
                    </div>
                    <span className="font-serif italic text-base text-bone-100 block">
                      "Unreal, yet existing."
                    </span>
                    <span className="font-mono text-[9px] text-gray-400 mt-2 block tracking-widest uppercase">
                      THE PORTAL IS ACTIVE
                    </span>
                  </div>
                </div>

                {/* Ground Digital Grid Reflection */}
                <div className="w-full h-8 bg-gradient-to-b from-transparent to-violet/20 mt-4 rounded-full blur-sm" />
              </div>

              {/* Bottom Card Footer */}
              <div className="z-10 pt-4 border-t border-white/10 flex justify-between items-center font-mono text-[11px] text-gray-400">
                <span>PARADOX ENGINE // 2026</span>
                <span className="text-white font-bold">10 — 13 MARCH</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

