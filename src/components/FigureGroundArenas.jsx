import React, { useState } from 'react';
import { ArrowUpRight, Binary, Bot, Cpu, Eye, Gamepad2, Layers, Sparkles, Trophy, Users, X } from 'lucide-react';
import { COMPETITIONS } from './FestEvents';

/**
 * Contradiction Arenas — Figure/Ground Section
 * Gestalt visual composition where:
 * - The positive cards are crafted in warm ivory / muted metallic surfaces with dark minimal typography.
 * - The negative space between cards forms a hidden iconic symbol (the Paradox "∞" and "P" glyph).
 * - On hover/focus, cards subtly shift while the negative space illuminates with a restrained amber/gold glow.
 * - Grid recalculates responsively on mobile to maintain deliberate geometric composition.
 */
export default function FigureGroundArenas({ onSelectTrack }) {
  const [hoveredArena, setHoveredArena] = useState(null);
  const [selectedArena, setSelectedArena] = useState(null);

  return (
    <div className="w-full relative select-none">
      {/* Section Heading */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <span className="font-mono text-xs text-amber-molten uppercase tracking-[0.25em] block mb-2 font-bold">
            [ 03 // FIGURE / GROUND MATRIX ]
          </span>
          <h2 className="font-cinzel font-black text-3xl sm:text-5xl text-white tracking-wide uppercase">
            Contradiction <span className="text-gradient-gold">Arenas</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-starlight-400 mt-2 max-w-lg font-light">
            An architectural Gestalt composition where the cards and the negative space between them form two simultaneous realities. Hover to illuminate the hidden figure.
          </p>
        </div>

        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-panel border border-white/10 text-[10px] font-mono text-starlight-400 uppercase tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          <span>GESTALT OPTICAL PARADOX</span>
        </div>
      </div>

      {/* FIGURE / GROUND GRID CONTAINER (Scrollable Landscape Viewport on Mobile, Native Grid on Laptop) */}
      <div className="relative p-3 sm:p-8 rounded-3xl bg-[#04060C] border border-white/10 overflow-hidden shadow-2xl">
        {/* Background Hidden Negative Space Symbol (Illuminates on hover or tap) */}
        <div
          className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-700 ${
            hoveredArena !== null ? 'opacity-90 scale-105' : 'opacity-25 scale-100'
          }`}
        >
          {/* Luminous Giant Infinity & P Monogram in Negative Space */}
          <div className="w-[320px] sm:w-[500px] h-[320px] sm:h-[500px] rounded-full bg-gradient-to-tr from-amber-molten/15 via-gold/25 to-violet/15 blur-3xl" />
          <div className="absolute font-cinzel font-black text-[28vw] md:text-[18vw] text-gold-antique/10 select-none tracking-tighter">
            ∞
          </div>
        </div>

        {/* Mobile Horizontal Scroll Hint */}
        <div className="md:hidden flex items-center justify-between pb-3 px-1 text-[10px] font-mono text-starlight-400">
          <span className="flex items-center space-x-1.5 text-amber-molten">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-molten animate-ping" />
            <span>GESTALT HORIZONTAL MOSAIC</span>
          </span>
          <span className="text-[9px] text-starlight-500 uppercase tracking-widest">
            SWIPE HORIZONTALLY →
          </span>
        </div>

        {/* Horizontal Scroll wrapper for phones, clean responsive grid on tablet/laptop */}
        <div className="overflow-x-auto pb-4 md:pb-0 scrollbar-thin scrollbar-thumb-amber-molten/30 -mx-1 px-1">
          {/* Multi-column mosaic layout preserved on all devices (min 860px on mobile to guarantee laptop landscape layout) */}
          <div className="grid grid-cols-4 gap-4 sm:gap-6 relative z-10 min-w-[860px] md:min-w-0">
            {/* Card 1: Hackathon (Spans 2 columns) */}
            <div
              onMouseEnter={() => setHoveredArena('singularity')}
              onMouseLeave={() => setHoveredArena(null)}
              onClick={() => {
                setHoveredArena((prev) => (prev === 'singularity' ? null : 'singularity'));
                setSelectedArena(COMPETITIONS[0]);
              }}
              className="col-span-2 rounded-2xl p-5 sm:p-8 bg-[#E5E2D9] hover:bg-[#EDEAE1] text-[#0A0D15] transition-all duration-500 cursor-pointer shadow-xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-[10px] text-[#4A5568] uppercase tracking-wider mb-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-black/10 font-bold">
                    {COMPETITIONS[0].tag}
                  </span>
                  <span className="font-bold text-[#0A0D15]">FLAGSHIP // 01</span>
                </div>
                <h3 className="font-cinzel font-bold text-xl sm:text-3xl uppercase tracking-wide text-[#0A0D15] group-hover:text-[#B45309] transition-colors">
                  {COMPETITIONS[0].title}
                </h3>
                <p className="font-serif italic text-xs text-[#78350F] mt-1 font-semibold">
                  "{COMPETITIONS[0].paradox}"
                </p>
                <p className="font-sans text-xs text-[#2D3748] mt-3 line-clamp-2 font-light">
                  {COMPETITIONS[0].description}
                </p>
              </div>
              <div className="mt-5 sm:mt-6 pt-4 border-t border-black/10 flex items-center justify-between font-mono text-xs">
                <div>
                  <span className="text-[9px] text-[#718096] block uppercase tracking-wider">BOUNTY</span>
                  <span className="font-bold text-[#0A0D15] text-sm sm:text-base">{COMPETITIONS[0].bounty}</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-black/10 group-hover:bg-[#0A0D15] group-hover:text-white flex items-center justify-center transition-all">
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </div>

            {/* Card 2: Robotics (Single Column) */}
            <div
              onMouseEnter={() => setHoveredArena('robotics')}
              onMouseLeave={() => setHoveredArena(null)}
              onClick={() => {
                setHoveredArena((prev) => (prev === 'robotics' ? null : 'robotics'));
                setSelectedArena(COMPETITIONS[1]);
              }}
              className="col-span-1 rounded-2xl p-5 sm:p-6 bg-[#D8D5CC] hover:bg-[#E3DFD5] text-[#0A0D15] transition-all duration-500 cursor-pointer shadow-xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-[10px] text-[#4A5568] uppercase tracking-wider mb-3">
                  <span className="px-2 py-0.5 rounded-full bg-black/10 font-bold">
                    {COMPETITIONS[1].tag}
                  </span>
                  <span>02</span>
                </div>
                <h3 className="font-cinzel font-bold text-base sm:text-xl uppercase tracking-wide text-[#0A0D15] group-hover:text-[#B45309] transition-colors">
                  {COMPETITIONS[1].title}
                </h3>
                <p className="font-serif italic text-xs text-[#78350F] mt-1 font-semibold">
                  "{COMPETITIONS[1].paradox}"
                </p>
              </div>
              <div className="mt-4 sm:mt-6 pt-4 border-t border-black/10 flex items-center justify-between font-mono text-xs">
                <span className="font-bold text-[#0A0D15] text-xs sm:text-sm">{COMPETITIONS[1].bounty}</span>
                <div className="w-7 h-7 rounded-full bg-black/10 group-hover:bg-[#0A0D15] group-hover:text-white flex items-center justify-center transition-all">
                  <ArrowUpRight size={13} />
                </div>
              </div>
            </div>

            {/* DELIBERATE NEGATIVE SPACE CELL (The Ground Silhouette - Visible on all devices) */}
            <div className="col-span-1 rounded-2xl border border-dashed border-amber-molten/40 p-5 flex flex-col items-center justify-center text-center font-mono text-xs text-starlight-300 bg-void/60 backdrop-blur-md">
              <span className="text-[10px] text-amber-molten tracking-widest uppercase font-bold">
                NEGATIVE HORIZON
              </span>
              <div className="font-cinzel font-black text-xl sm:text-2xl text-gradient-gold my-1.5">
                PARADOX
              </div>
              <span className="text-[9px] text-starlight-500 uppercase tracking-widest">
                NMIMS SHIRPUR '26
              </span>
            </div>

            {/* Card 3: Cryptographic CTF */}
            <div
              onMouseEnter={() => setHoveredArena('cipher')}
              onMouseLeave={() => setHoveredArena(null)}
              onClick={() => {
                setHoveredArena((prev) => (prev === 'cipher' ? null : 'cipher'));
                setSelectedArena(COMPETITIONS[2]);
              }}
              className="col-span-1 rounded-2xl p-5 sm:p-6 bg-[#D8D5CC] hover:bg-[#E3DFD5] text-[#0A0D15] transition-all duration-500 cursor-pointer shadow-xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-[10px] text-[#4A5568] uppercase tracking-wider mb-3">
                  <span className="px-2 py-0.5 rounded-full bg-black/10 font-bold">
                    {COMPETITIONS[2].tag}
                  </span>
                  <span>03</span>
                </div>
                <h3 className="font-cinzel font-bold text-base sm:text-xl uppercase tracking-wide text-[#0A0D15] group-hover:text-[#B45309] transition-colors">
                  {COMPETITIONS[2].title}
                </h3>
                <p className="font-serif italic text-xs text-[#78350F] mt-1 font-semibold">
                  "{COMPETITIONS[2].paradox}"
                </p>
              </div>
              <div className="mt-4 sm:mt-6 pt-4 border-t border-black/10 flex items-center justify-between font-mono text-xs">
                <span className="font-bold text-[#0A0D15] text-xs sm:text-sm">{COMPETITIONS[2].bounty}</span>
                <div className="w-7 h-7 rounded-full bg-black/10 group-hover:bg-[#0A0D15] group-hover:text-white flex items-center justify-center transition-all">
                  <ArrowUpRight size={13} />
                </div>
              </div>
            </div>

            {/* Card 4: Design Arena */}
            <div
              onMouseEnter={() => setHoveredArena('design')}
              onMouseLeave={() => setHoveredArena(null)}
              onClick={() => {
                setHoveredArena((prev) => (prev === 'design' ? null : 'design'));
                setSelectedArena(COMPETITIONS[3]);
              }}
              className="col-span-1 rounded-2xl p-5 sm:p-6 bg-[#D8D5CC] hover:bg-[#E3DFD5] text-[#0A0D15] transition-all duration-500 cursor-pointer shadow-xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-[10px] text-[#4A5568] uppercase tracking-wider mb-3">
                  <span className="px-2 py-0.5 rounded-full bg-black/10 font-bold">
                    {COMPETITIONS[3].tag}
                  </span>
                  <span>04</span>
                </div>
                <h3 className="font-cinzel font-bold text-base sm:text-xl uppercase tracking-wide text-[#0A0D15] group-hover:text-[#B45309] transition-colors">
                  {COMPETITIONS[3].title}
                </h3>
                <p className="font-serif italic text-xs text-[#78350F] mt-1 font-semibold">
                  "{COMPETITIONS[3].paradox}"
                </p>
              </div>
              <div className="mt-4 sm:mt-6 pt-4 border-t border-black/10 flex items-center justify-between font-mono text-xs">
                <span className="font-bold text-[#0A0D15] text-xs sm:text-sm">{COMPETITIONS[3].bounty}</span>
                <div className="w-7 h-7 rounded-full bg-black/10 group-hover:bg-[#0A0D15] group-hover:text-white flex items-center justify-center transition-all">
                  <ArrowUpRight size={13} />
                </div>
              </div>
            </div>

            {/* Card 5: Esports (Spans 2 columns) */}
            <div
              onMouseEnter={() => setHoveredArena('esports')}
              onMouseLeave={() => setHoveredArena(null)}
              onClick={() => {
                setHoveredArena((prev) => (prev === 'esports' ? null : 'esports'));
                setSelectedArena(COMPETITIONS[4]);
              }}
              className="col-span-2 rounded-2xl p-5 sm:p-8 bg-[#E5E2D9] hover:bg-[#EDEAE1] text-[#0A0D15] transition-all duration-500 cursor-pointer shadow-xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-[10px] text-[#4A5568] uppercase tracking-wider mb-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-black/10 font-bold">
                    {COMPETITIONS[4].tag}
                  </span>
                  <span className="font-bold text-[#0A0D15]">LAN STAGE // 05</span>
                </div>
                <h3 className="font-cinzel font-bold text-xl sm:text-3xl uppercase tracking-wide text-[#0A0D15] group-hover:text-[#B45309] transition-colors">
                  {COMPETITIONS[4].title}
                </h3>
                <p className="font-serif italic text-xs text-[#78350F] mt-1 font-semibold">
                  "{COMPETITIONS[4].paradox}"
                </p>
                <p className="font-sans text-xs text-[#2D3748] mt-3 line-clamp-2 font-light">
                  {COMPETITIONS[4].description}
                </p>
              </div>
              <div className="mt-5 sm:mt-6 pt-4 border-t border-black/10 flex items-center justify-between font-mono text-xs">
                <div>
                  <span className="text-[9px] text-[#718096] block uppercase tracking-wider">PRIZE BOUNTY</span>
                  <span className="font-bold text-[#0A0D15] text-sm sm:text-base">{COMPETITIONS[4].bounty}</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-black/10 group-hover:bg-[#0A0D15] group-hover:text-white flex items-center justify-center transition-all">
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Specification Modal (Reused) */}
      {selectedArena && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-void/85 backdrop-blur-2xl animate-fade-in">
          <div className="glass-panel-amber border border-amber-molten/40 rounded-3xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto relative shadow-2xl">
            <button
              onClick={() => setSelectedArena(null)}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-surface border border-white/15 hover:border-amber-molten flex items-center justify-center text-white transition-colors"
            >
              <X size={17} />
            </button>

            <span className="font-mono text-xs text-amber-molten uppercase tracking-[0.2em] block mb-1">
              [ ARENA SPECIFICATION // GESTALT MATRIX ]
            </span>
            <h3 className="font-cinzel font-black text-2xl sm:text-3xl text-white uppercase tracking-wider">
              {selectedArena.title}
            </h3>
            <p className="font-serif italic text-sm text-gold-pale mt-1">
              "{selectedArena.paradox}"
            </p>

            <p className="font-sans text-xs sm:text-sm text-starlight-300 mt-4 leading-relaxed font-light">
              {selectedArena.description}
            </p>

            {/* Metrics HUD */}
            <div className="grid grid-cols-3 gap-3 my-6 font-mono text-xs">
              <div className="p-3.5 rounded-xl bg-surface border border-amber-molten/25">
                <span className="text-starlight-500 text-[10px] block uppercase tracking-wider">BOUNTY</span>
                <span className="text-[#FB923C] font-bold text-sm font-cinzel">{selectedArena.bounty}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-surface border border-white/10">
                <span className="text-starlight-500 text-[10px] block uppercase tracking-wider">VENUE</span>
                <span className="text-starlight-200 text-xs truncate block">{selectedArena.venue}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-surface border border-white/10">
                <span className="text-starlight-500 text-[10px] block uppercase tracking-wider">CREW SPEC</span>
                <span className="text-starlight-200 text-xs">{selectedArena.team}</span>
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10">
              <button
                onClick={() => {
                  if (onSelectTrack) onSelectTrack(selectedArena.title);
                  setSelectedArena(null);
                  const el = document.getElementById('pass-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto flex-1 py-3 px-6 rounded-xl font-mono text-xs font-bold uppercase tracking-wider text-void bg-gradient-to-r from-gold-pale via-gold to-amber-molten hover:brightness-110 transition-all shadow-lg flex items-center justify-center space-x-2"
              >
                <span>MINT DELEGATE PASS FOR THIS ARENA</span>
                <ArrowUpRight size={15} />
              </button>
              <button
                onClick={() => setSelectedArena(null)}
                className="py-3 px-6 rounded-xl font-mono text-xs border border-white/15 text-starlight-300 hover:text-white"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

