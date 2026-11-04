import React, { useState } from 'react';
import { Menu, Sparkles, Volume2, VolumeX, X } from 'lucide-react';
import { soundscape } from '../audio';

export default function Navbar({ onScrollTo, onOpenPass, onOpenRegister }) {
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
      <div className="max-w-7xl mx-auto flex items-center justify-between glass-panel px-5 py-3 rounded-2xl pointer-events-auto border border-gold-antique/25 shadow-2xl">
        {/* Brand Logo with Mobius Infinity */}
        <button
          onClick={() => handleNav('hero-section')}
          className="flex items-center space-x-3 text-left group"
        >
          <div className="w-8 h-8 rounded-lg bg-surface border border-gold-antique/40 flex items-center justify-center font-cinzel font-black text-white text-base group-hover:border-gold transition-colors">
            ∞
          </div>
          <div>
            <span className="font-cinzel font-black tracking-wider text-xs sm:text-sm text-white block group-hover:text-gold-bright transition-colors leading-none uppercase">
              NMIMS SHIRPUR
            </span>
            <span className="font-mono text-[9px] tracking-[0.2em] text-gold-pale/70 uppercase block mt-0.5">
              TECH FIESTA 2026
            </span>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center space-x-7 font-mono text-xs uppercase tracking-wider text-starlight-300">
          <button onClick={() => handleNav('hero-section')} className="hover:text-gold transition-colors">
            01. Horizon
          </button>
          <button onClick={() => handleNav('events-section')} className="hover:text-gold transition-colors">
            02. Events (Schrödinger)
          </button>
          <button onClick={() => handleNav('arenas-section')} className="hover:text-gold transition-colors">
            03. Arenas (Figure/Ground)
          </button>
          <button onClick={() => handleNav('schedule-section')} className="hover:text-gold transition-colors">
            04. Mirror Schedule
          </button>
          <button onClick={() => handleNav('pass-section')} className="hover:text-gold transition-colors">
            05. Pass Studio
          </button>
        </nav>

        {/* Action Tools */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Spatial Sound FX Toggle */}
          <button
            onClick={toggleSound}
            className={`p-2 rounded-xl border text-xs font-mono transition-all ${
              audioOn
                ? 'bg-gold/20 border-gold text-gold-bright shadow-md shadow-gold/20'
                : 'bg-surface/70 border-white/10 text-starlight-400 hover:text-white hover:border-gold-antique/40'
            }`}
            title="Toggle Generative Relativistic Ambience"
          >
            {audioOn ? <Volume2 size={15} className="text-gold-bright animate-pulse" /> : <VolumeX size={15} />}
          </button>

          {/* Mint Pass CTA */}
          <button
            onClick={onOpenPass}
            className="px-4 py-1.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider text-void bg-gradient-to-r from-gold-pale via-gold to-amber-molten hover:brightness-110 transition-all shadow-md hidden sm:flex items-center space-x-1.5"
          >
            <Sparkles size={12} className="text-void" />
            <span>CLAIM PASS</span>
          </button>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-white hover:text-gold transition-colors"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden mt-3 max-w-7xl mx-auto glass-panel-gold rounded-2xl p-6 pointer-events-auto border border-gold-antique/30 space-y-4 font-mono text-sm animate-fade-in shadow-2xl">
          <button
            onClick={() => handleNav('hero-section')}
            className="block w-full text-left py-2 text-starlight-200 hover:text-gold"
          >
            <span className="text-gold mr-2">01.</span> Cinematic Horizon
          </button>
          <button
            onClick={() => handleNav('events-section')}
            className="block w-full text-left py-2 text-starlight-200 hover:text-gold"
          >
            <span className="text-gold mr-2">02.</span> Schrödinger Events Grid
          </button>
          <button
            onClick={() => handleNav('arenas-section')}
            className="block w-full text-left py-2 text-starlight-200 hover:text-gold"
          >
            <span className="text-gold mr-2">03.</span> Contradiction Arenas (Figure/Ground)
          </button>
          <button
            onClick={() => handleNav('schedule-section')}
            className="block w-full text-left py-2 text-starlight-200 hover:text-gold"
          >
            <span className="text-gold mr-2">04.</span> Spacetime Mirror Timeline
          </button>
          <button
            onClick={() => handleNav('pass-section')}
            className="block w-full text-left py-2 text-starlight-200 hover:text-gold"
          >
            <span className="text-gold mr-2">05.</span> Cosmic Pass Studio
          </button>
          <button
            onClick={() => {
              setMobileOpen(false);
              onOpenPass();
            }}
            className="block w-full text-left py-2 text-gold hover:text-white font-bold pt-2 border-t border-white/10"
          >
            <span className="text-gold mr-2">★</span> Mint Holographic Badge
          </button>
        </div>
      )}
    </header>
  );
}
