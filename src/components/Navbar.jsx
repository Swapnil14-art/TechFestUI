import React, { useState } from 'react';
import { Menu, Sparkles, Volume2, VolumeX, X } from 'lucide-react';
import { soundscape } from '../audio';

export default function Navbar({ onScrollTo, onOpenPass }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [audioOn, setAudioOn] = useState(false);

  const toggleSound = () => {
    const active = soundscape.toggle();
    setAudioOn(active);
  };

  const handleNav = (id) => {
    setMobileOpen(false);
    onScrollTo(id);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 lg:px-8 py-3.5 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass-panel px-5 py-3 rounded-2xl pointer-events-auto border border-white/10 shadow-2xl">
        {/* Brand Logo */}
        <button
          onClick={() => handleNav('hero-scroll-container')}
          className="flex items-center space-x-3 text-left group"
        >
          <div className="w-8 h-8 rounded-lg bg-void border border-violet/40 flex items-center justify-center font-display font-black text-white text-base group-hover:border-cyan transition-colors">
            ∞
          </div>
          <div>
            <span className="font-display font-black tracking-wider text-xs sm:text-sm text-white block group-hover:text-cyan transition-colors leading-none">
              NMIMS SHIRPUR
            </span>
            <span className="font-mono text-[9px] tracking-widest text-gray-400 uppercase block mt-0.5">
              TECH FIESTA '26
            </span>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center space-x-7 font-mono text-xs uppercase tracking-wider text-gray-300">
          <button onClick={() => handleNav('hero-scroll-container')} className="hover:text-cyan transition-colors">
            01. Anomaly
          </button>
          <button onClick={() => handleNav('arenas-section')} className="hover:text-cyan transition-colors">
            02. Arenas
          </button>
          <button onClick={() => handleNav('workshops-section')} className="hover:text-cyan transition-colors">
            03. Masterclasses
          </button>
          <button onClick={() => handleNav('schedule-section')} className="hover:text-cyan transition-colors">
            04. Schedule
          </button>
          <button onClick={() => handleNav('matrix-section')} className="hover:text-cyan transition-colors">
            05. Dual Matrix
          </button>
        </nav>

        {/* Action Tools */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Spatial Sound FX Toggle */}
          <button
            onClick={toggleSound}
            className={`p-2 rounded-xl border text-xs font-mono transition-all ${
              audioOn
                ? 'bg-violet/20 border-violet text-cyan shadow-md shadow-violet/20'
                : 'bg-void/70 border-white/10 text-gray-400 hover:text-white'
            }`}
            title="Toggle Generative Spatial Ambience"
          >
            {audioOn ? <Volume2 size={15} className="text-cyan animate-pulse" /> : <VolumeX size={15} />}
          </button>

          {/* Mint Pass CTA */}
          <button
            onClick={onOpenPass}
            className="px-4 py-1.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider text-void bg-gradient-to-r from-cyan via-violet to-rose hover:brightness-110 transition-all shadow-md hidden sm:flex items-center space-x-1.5"
          >
            <Sparkles size={12} />
            <span>MINT PASS</span>
          </button>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-white hover:text-cyan transition-colors"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden mt-3 max-w-7xl mx-auto glass-panel-glow rounded-2xl p-6 pointer-events-auto border border-white/15 space-y-4 font-mono text-sm animate-fade-in">
          <button
            onClick={() => handleNav('hero-scroll-container')}
            className="block w-full text-left py-2 text-gray-200 hover:text-cyan"
          >
            <span className="text-rose mr-2">01.</span> The Glitch Anomaly
          </button>
          <button
            onClick={() => handleNav('arenas-section')}
            className="block w-full text-left py-2 text-gray-200 hover:text-cyan"
          >
            <span className="text-rose mr-2">02.</span> Contradiction Arenas
          </button>
          <button
            onClick={() => handleNav('workshops-section')}
            className="block w-full text-left py-2 text-gray-200 hover:text-cyan"
          >
            <span className="text-rose mr-2">03.</span> Technical Masterclasses
          </button>
          <button
            onClick={() => handleNav('schedule-section')}
            className="block w-full text-left py-2 text-gray-200 hover:text-cyan"
          >
            <span className="text-rose mr-2">04.</span> 4-Day Chronology
          </button>
          <button
            onClick={() => handleNav('matrix-section')}
            className="block w-full text-left py-2 text-gray-200 hover:text-cyan"
          >
            <span className="text-rose mr-2">05.</span> Dual Reality Matrix
          </button>
          <button
            onClick={() => {
              setMobileOpen(false);
              onOpenPass();
            }}
            className="block w-full text-left py-2 text-rose hover:text-white font-bold pt-2 border-t border-white/10"
          >
            <span className="text-rose mr-2">★</span> Mint Holographic Pass
          </button>
        </div>
      )}
    </header>
  );
}

