import React, { useState } from 'react';
import { ArrowUpRight, Binary, Bot, Cpu, Eye, EyeOff, Gamepad2, Layers, Sparkles, Trophy, Users, X } from 'lucide-react';
import { COMPETITIONS } from './FestEvents';

/**
 * Events — Schrödinger Grid
 * Features two overlapping visual states:
 * - Unobserved State: Blurred, offset event names suggesting two simultaneous possibilities coexisting.
 * - Observed State (hover / keyboard focus / mobile tap): Smoothly collapses into a clear observed state,
 *   revealing the actual event title, details, and registration button.
 * Styling: Dark textured background, subtle charcoal surfaces, thin burnt-orange borders, and warm orange highlights.
 */
export default function SchrodingerEventsGrid({ onSelectTrack }) {
  const [observedCards, setObservedCards] = useState({});
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  // Pure tap-to-observe: tap to observe, tap again to unobserve, tap another card collapses previous
  const handleCardTap = (id) => {
    setObservedCards((prev) => {
      const isCurrentlyObserved = !!prev[id];
      // If tapping the already observed card, collapse it back into superposition
      if (isCurrentlyObserved) {
        return {};
      }
      // Collapse wave-function exclusively to the tapped card
      return { [id]: true };
    });
  };

  const handleMouseEnter = (id) => {
    // Only apply hover state if user has a true hovering device
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      setObservedCards({ [id]: true });
    }
  };

  const handleMouseLeave = (id) => {
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      setObservedCards({});
    }
  };

  const filtered =
    activeCategory === 'all'
      ? COMPETITIONS
      : COMPETITIONS.filter((item) => item.category === activeCategory);

  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <span className="font-mono text-xs text-amber-molten uppercase tracking-[0.25em] block mb-2 font-bold">
            [ 01 // SCHRÖDINGER GRID ]
          </span>
          <h2 className="font-cinzel font-black text-3xl sm:text-5xl text-white tracking-wide uppercase">
            Quantum <span className="text-gradient-gold">Events</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-starlight-400 mt-2 max-w-lg font-light">
            Every event exists in simultaneous dual probability states until observation collapses the wave function. Hover, focus, or tap any card to observe its verified parameters.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap gap-2 font-mono text-xs">
          {[
            { id: 'all', label: 'ALL REALITIES' },
            { id: 'code', label: 'CODE & HACK' },
            { id: 'robotics', label: 'ROBOTICS' },
            { id: 'cyber', label: 'CYBERSECURITY' },
            { id: 'esports', label: 'ESPORTS' },
            { id: 'creative', label: 'DESIGN & AI' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-3.5 py-1.5 rounded-xl transition-all border ${
                activeCategory === tab.id
                  ? 'bg-amber-molten text-void font-bold shadow-lg shadow-amber-molten/25 border-amber-molten'
                  : 'bg-surface/80 text-starlight-400 hover:text-white border-white/10 hover:border-amber-molten/40'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Schrödinger Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item) => {
          const isObserved = !!observedCards[item.id];
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              tabIndex={0}
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={() => handleMouseLeave(item.id)}
              onFocus={() => handleMouseEnter(item.id)}
              onBlur={() => handleMouseLeave(item.id)}
              onClick={() => handleCardTap(item.id)}
              className={`relative rounded-2xl p-5 sm:p-7 transition-all duration-500 cursor-pointer overflow-hidden border select-none ${
                isObserved
                  ? 'bg-[#0E131F] border-[#EA580C] shadow-[0_0_35px_rgba(234,88,12,0.22)] -translate-y-1'
                  : 'bg-[#080B12] border-[#EA580C]/25 hover:border-[#EA580C]/60'
              }`}
            >
              {/* Subtle Charcoal Texture Grid */}
              <div className="absolute inset-0 bg-spacetime-grid opacity-15 pointer-events-none" />

              {/* State Status Indicator */}
              <div className="relative z-10 flex items-center justify-between mb-5 font-mono text-[10px]">
                <div className="flex items-center space-x-2">
                  <span
                    className={`w-2 h-2 rounded-full transition-colors ${
                      isObserved ? 'bg-[#EA580C] animate-pulse' : 'bg-starlight-500'
                    }`}
                  />
                  <span
                    className={`tracking-widest uppercase transition-colors ${
                      isObserved ? 'text-[#FB923C] font-bold' : 'text-starlight-500'
                    }`}
                  >
                    {isObserved ? 'STATE: COLLAPSED' : '|ψ⟩ UNOBSERVED'}
                  </span>
                </div>

                <div className="flex items-center space-x-1.5 text-starlight-500">
                  {isObserved ? <Eye size={13} className="text-[#FB923C]" /> : <EyeOff size={13} />}
                  <span className="uppercase tracking-wider text-[9px]">
                    {isObserved ? 'OBSERVED' : 'TAP / HOVER'}
                  </span>
                </div>
              </div>

              {/* OVERLAPPING BLURRED SCHRÖDINGER TITLE LAYERS */}
              <div className="relative z-10 mb-4 min-h-[52px] sm:min-h-[58px] flex items-center">
                {/* Dual Offset Ghosted State (Visible when Unobserved) */}
                <div
                  className={`absolute inset-0 transition-all duration-500 pointer-events-none flex flex-col justify-center ${
                    isObserved
                      ? 'opacity-0 scale-95'
                      : 'opacity-100 scale-100'
                  }`}
                >
                  {/* Possibility Layer A (Offset Top-Left with Warm Amber Blur) */}
                  <div
                    className="font-cinzel font-bold text-lg sm:text-2xl text-[#FB923C]/80 uppercase tracking-wide select-none filter blur-[2px] transform -translate-x-1 -translate-y-0.5 leading-snug"
                    aria-hidden="true"
                  >
                    {item.title}
                  </div>
                  {/* Possibility Layer B (Offset Bottom-Right with Cool Charcoal-Indigo Blur) */}
                  <div
                    className="absolute inset-0 flex items-center font-cinzel font-bold text-lg sm:text-2xl text-starlight-300/60 uppercase tracking-wide select-none filter blur-[2px] transform translate-x-1 translate-y-0.5 mix-blend-screen leading-snug"
                    aria-hidden="true"
                  >
                    {item.title}
                  </div>
                </div>

                {/* Resolved Solid State (Crisp on Interaction) */}
                <h3
                  className={`font-cinzel font-bold text-lg sm:text-2xl uppercase tracking-wide transition-all duration-500 leading-snug ${
                    isObserved
                      ? 'text-white opacity-100 filter blur-0'
                      : 'text-transparent opacity-0 filter blur-sm'
                  }`}
                >
                  {item.title}
                </h3>
              </div>

              {/* Paradox Axiom Eyebrow */}
              <div className="relative z-10 font-serif italic text-xs text-gold-pale mb-3">
                "{item.paradox}"
              </div>

              {/* Description & Collapsed Parameters */}
              <div className="relative z-10">
                <p
                  className={`font-sans text-xs leading-relaxed font-light transition-all duration-500 ${
                    isObserved
                      ? 'text-starlight-300 opacity-100 filter blur-0'
                      : 'text-starlight-500 opacity-40 line-clamp-2 filter blur-[1px]'
                  }`}
                >
                  {item.description}
                </p>

                {/* Meta details revealed on observation */}
                <div
                  className={`mt-5 pt-4 border-t border-white/10 transition-all duration-500 flex items-center justify-between font-mono text-xs ${
                    isObserved ? 'opacity-100 translate-y-0' : 'opacity-50'
                  }`}
                >
                  <div>
                    <span className="text-[10px] text-starlight-500 block uppercase tracking-wider">
                      TOTAL BOUNTY
                    </span>
                    <span className="text-white font-bold text-sm font-cinzel text-gradient-gold">
                      {item.bounty}
                    </span>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedEvent(item);
                    }}
                    className={`px-3 py-1.5 rounded-lg font-mono text-[11px] font-bold uppercase transition-all flex items-center space-x-1 ${
                      isObserved
                        ? 'bg-[#EA580C] text-white shadow-md shadow-[#EA580C]/30 hover:bg-[#F97316]'
                        : 'bg-white/10 text-starlight-300'
                    }`}
                  >
                    <span>DETAILS</span>
                    <ArrowUpRight size={13} />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Specification Modal (Reused for consistent event inspection) */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-void/85 backdrop-blur-2xl animate-fade-in">
          <div className="glass-panel-amber border border-amber-molten/40 rounded-3xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto relative shadow-2xl">
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-surface border border-white/15 hover:border-amber-molten flex items-center justify-center text-white transition-colors"
            >
              <X size={17} />
            </button>

            <span className="font-mono text-xs text-amber-molten uppercase tracking-[0.2em] block mb-1">
              [ OBSERVED EVENT DOSSIER ]
            </span>
            <h3 className="font-cinzel font-black text-2xl sm:text-3xl text-white uppercase tracking-wider">
              {selectedEvent.title}
            </h3>
            <p className="font-serif italic text-sm text-gold-pale mt-1">
              "{selectedEvent.paradox}"
            </p>

            <p className="font-sans text-xs sm:text-sm text-starlight-300 mt-4 leading-relaxed font-light">
              {selectedEvent.description}
            </p>

            {/* Metrics HUD */}
            <div className="grid grid-cols-3 gap-3 my-6 font-mono text-xs">
              <div className="p-3.5 rounded-xl bg-surface border border-amber-molten/25">
                <span className="text-starlight-500 text-[10px] block uppercase tracking-wider">BOUNTY</span>
                <span className="text-[#FB923C] font-bold text-sm font-cinzel">{selectedEvent.bounty}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-surface border border-white/10">
                <span className="text-starlight-500 text-[10px] block uppercase tracking-wider">VENUE</span>
                <span className="text-starlight-200 text-xs truncate block">{selectedEvent.venue}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-surface border border-white/10">
                <span className="text-starlight-500 text-[10px] block uppercase tracking-wider">CREW SPEC</span>
                <span className="text-starlight-200 text-xs">{selectedEvent.team}</span>
              </div>
            </div>

            {/* Rounds Milestones */}
            <div className="mb-6">
              <h4 className="font-mono text-xs uppercase tracking-wider text-white mb-3 flex items-center space-x-2">
                <Trophy size={14} className="text-amber-molten" />
                <span>ARENA PHASES & SCHEDULE</span>
              </h4>
              <div className="space-y-2.5 font-mono text-xs">
                {selectedEvent.rounds.map((round, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-surface border border-white/5 flex flex-col sm:flex-row justify-between sm:items-center gap-1"
                  >
                    <div>
                      <span className="text-starlight-200 font-semibold block">{round.name}</span>
                      <span className="text-starlight-500 text-[11px] font-sans">{round.note}</span>
                    </div>
                    <span className="text-[#FB923C] font-bold">{round.date}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Protocols */}
            <div className="mb-6">
              <h4 className="font-mono text-xs uppercase tracking-wider text-white mb-2">
                ENGAGEMENT PROTOCOLS
              </h4>
              <ul className="space-y-1.5 text-xs text-starlight-400 font-sans list-disc list-inside">
                {selectedEvent.rules.map((rule, idx) => (
                  <li key={idx}>{rule}</li>
                ))}
              </ul>
            </div>

            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10">
              <button
                onClick={() => {
                  if (onSelectTrack) onSelectTrack(selectedEvent.title);
                  setSelectedEvent(null);
                  const el = document.getElementById('pass-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto flex-1 py-3 px-6 rounded-xl font-mono text-xs font-bold uppercase tracking-wider text-void bg-gradient-to-r from-gold-pale via-gold to-amber-molten hover:brightness-110 transition-all shadow-lg flex items-center justify-center space-x-2"
              >
                <span>MINT DELEGATE PASS FOR THIS EVENT</span>
                <ArrowUpRight size={15} />
              </button>
              <button
                onClick={() => setSelectedEvent(null)}
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

