import React, { useState, useEffect, useRef } from 'react';
import { Clock, MapPin, Orbit, Sparkles } from 'lucide-react';

const TIMELINE_DATA = [
  {
    day: 'DAY 01',
    date: 'MARCH 10, 2026',
    time: '09:00 AM — 10:30 AM',
    title: 'Grand Inauguration & Keynote',
    venue: 'Main Amphitheatre',
    theme: 'The Inception // Genesis of the Anomaly',
    tag: 'CEREMONY',
    mirroredNote: 'YNOREMEC // ELANIF LAITRAP',
  },
  {
    day: 'DAY 01',
    date: 'MARCH 10, 2026',
    time: '03:00 PM — 04:30 PM',
    title: 'The Singularity Hackathon Drop',
    venue: 'Central Auditorium',
    theme: 'Problem statements unsealed across India',
    tag: 'HACKATHON',
    mirroredNote: 'NOHTAKCAH // EPORD METSYS',
  },
  {
    day: 'DAY 02',
    date: 'MARCH 11, 2026',
    time: '09:00 AM',
    title: '36-Hour Hackathon Clocks Start',
    venue: 'MPSTME Innovation Hall',
    theme: 'Nonstop building across collegiate squads',
    tag: 'SPRINT',
    mirroredNote: 'TNIRPS // KSOLC TINI',
  },
  {
    day: 'DAY 02',
    date: 'MARCH 11, 2026',
    time: '10:30 AM — 01:30 PM',
    title: 'Cyber-Classical Robotics Trials',
    venue: 'Indoor Arena A',
    theme: 'Autonomous navigation under sensor noise',
    tag: 'ROBOTICS',
    mirroredNote: 'SCITOBOR // SLAIRT ENOD',
  },
  {
    day: 'DAY 03',
    date: 'MARCH 12, 2026',
    time: '02:00 PM — 05:00 PM',
    title: 'Schrödinger’s Cryptographic CTF',
    venue: 'Cyber Defense Lab 204',
    theme: '18-Hour siege on post-quantum lattice ciphers',
    tag: 'CYBERSECURITY',
    mirroredNote: 'FTC // EHGEIS ENIL',
  },
  {
    day: 'DAY 03',
    date: 'MARCH 12, 2026',
    time: '09:00 PM',
    title: 'The Singularity Code Freeze',
    venue: 'MPSTME Innovation Hall',
    theme: 'Repository commits locked for jury inspection',
    tag: 'CHECKPOINT',
    mirroredNote: 'EZEERF EDOC // KCOL TINU',
  },
  {
    day: 'DAY 04',
    date: 'MARCH 13, 2026',
    time: '02:00 PM — 04:00 PM',
    title: 'Top 10 Finalists Grand Jury Pitches',
    venue: 'Central Auditorium',
    theme: 'Final live teleportation demonstrations',
    tag: 'FINALS',
    mirroredNote: 'SLAINIF // SEHCTIP YRUJ',
  },
  {
    day: 'DAY 04',
    date: 'MARCH 13, 2026',
    time: '05:00 PM — 07:30 PM',
    title: 'Grand Valedictory & Awards Ceremony',
    venue: 'Main Amphitheatre',
    theme: '₹5,00,000+ Prize dispersal & official close',
    tag: 'VALEDICTORY',
    mirroredNote: 'SROTCIDEVAL // SLLUF ETAD',
  },
];

/**
 * Spacetime Schedule — Mirror Timeline
 * Features:
 * - Central vertical thin burnt-orange mirror line with "MIRROR" axis marker.
 * - Right Side: Current/future chronological fest schedule with clear typography and dates.
 * - Left Side: Mirrored counterpart with horizontally flipped visual parity and subdued reflection.
 * - Opposing Scroll Motion: Scrolling moves the two sides in opposite vertical directions!
 * - Mobile: Adapts to a single-column layout preserving the mirrored reflection without overflow.
 */
export default function MirrorScheduleTimeline() {
  const containerRef = useRef(null);
  const [scrollParallax, setScrollParallax] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const mid = window.innerHeight / 2;
      const delta = (rect.top - mid) * 0.08;
      setScrollParallax(delta);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="w-full relative overflow-hidden select-none">
      {/* Section Heading */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <span className="font-mono text-xs text-amber-molten uppercase tracking-[0.25em] block mb-2 font-bold">
            [ 02 // MIRROR TIMELINE ]
          </span>
          <h2 className="font-cinzel font-black text-3xl sm:text-5xl text-white tracking-wide uppercase">
            Spacetime <span className="text-gradient-gold">Schedule</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-starlight-400 mt-2 max-w-lg font-light">
            Two timelines running in opposing relativistic parity across the mirror axis. The forward schedule on the right reflects its inverted counterpart on the left as you scroll.
          </p>
        </div>

        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-panel border border-amber-molten/30 text-amber-molten text-[10px] font-mono tracking-widest uppercase">
          <Sparkles size={11} />
          <span>PARITY SYMMETRY: T = ± Δt</span>
        </div>
      </div>

      {/* BILATERAL OPPOSING MIRROR TIMELINE (Preserved across both Desktop and Mobile) */}
      <div className="relative py-8 sm:py-12">
        {/* Central Vertical Burnt-Orange Mirror Axis Line */}
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1.5px] bg-gradient-to-b from-transparent via-[#EA580C] to-transparent pointer-events-none z-20" />

        {/* Central "MIRROR" Axis Marker */}
        <div className="sticky top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex items-center justify-center my-4 sm:my-6 pointer-events-none">
          <div className="px-2.5 sm:px-3.5 py-1 rounded-full bg-[#0E131F] border border-[#EA580C] text-[#FB923C] font-mono text-[8px] sm:text-[9px] tracking-[0.2em] sm:tracking-[0.25em] uppercase font-bold shadow-[0_0_20px_rgba(234,88,12,0.5)] flex items-center space-x-1.5 sm:space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C] animate-ping" />
            <span>MIRROR AXIS</span>
          </div>
        </div>

        {/* Opposing Parallel Columns: 2 Columns maintained on all screen dimensions */}
        <div className="grid grid-cols-2 gap-3 sm:gap-8 md:gap-12 relative z-10">
          {/* LEFT SIDE: Mirrored Anti-Timeline (Moves opposite scroll direction) */}
          <div
            style={{
              transform: `translateY(${-scrollParallax * 0.8}px)`,
              transition: 'transform 0.15s ease-out',
            }}
            className="space-y-4 sm:space-y-8 pr-1.5 sm:pr-8 text-right opacity-65 hover:opacity-100 transition-opacity"
          >
            {TIMELINE_DATA.map((item, idx) => (
              <div
                key={`left-${idx}`}
                className="glass-panel p-3.5 sm:p-5 rounded-xl sm:rounded-2xl border border-white/10 bg-[#090C14]/80 transform scale-x-[-1] hover:border-amber-molten/40 transition-colors shadow-lg"
                style={{ direction: 'rtl' }}
              >
                <div className="transform scale-x-[-1]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between font-mono text-[9px] sm:text-[10px] text-starlight-500 mb-1.5 gap-0.5">
                    <span className="text-[#EA580C] font-bold truncate">{item.mirroredNote}</span>
                    <span className="text-[8px] sm:text-[10px]">{item.date}</span>
                  </div>
                  <h4 className="font-cinzel font-bold text-xs sm:text-base text-starlight-200 uppercase tracking-wide line-clamp-2">
                    {item.title}
                  </h4>
                  <p className="font-sans text-[10px] sm:text-xs text-starlight-500 mt-1 font-light line-clamp-2 hidden sm:block">
                    {item.theme}
                  </p>
                  <div className="mt-2 text-[8px] sm:text-[10px] font-mono text-starlight-400 border-t border-white/5 pt-1.5 flex flex-wrap gap-1 justify-end">
                    <span>{item.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE: Forward Real Timeline (Moves with scroll direction) */}
          <div
            style={{
              transform: `translateY(${scrollParallax * 0.8}px)`,
              transition: 'transform 0.15s ease-out',
            }}
            className="space-y-4 sm:space-y-8 pl-1.5 sm:pl-8 text-left"
          >
            {TIMELINE_DATA.map((item, idx) => (
              <div
                key={`right-${idx}`}
                className="glass-panel-amber p-3.5 sm:p-6 rounded-xl sm:rounded-2xl border border-amber-molten/30 bg-[#0E1321] hover:border-[#EA580C] shadow-xl shadow-black/70 transition-all hover:-translate-y-1"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between font-mono text-[9px] sm:text-[10px] mb-1.5 gap-1">
                  <div className="flex items-center space-x-1.5">
                    <span className="px-1.5 sm:px-2 py-0.5 rounded-full bg-amber-molten/20 text-[#FB923C] font-bold uppercase tracking-wider text-[8px] sm:text-[10px]">
                      {item.tag}
                    </span>
                    <span className="text-white font-bold">{item.day}</span>
                  </div>
                  <span className="text-starlight-400 font-semibold text-[8px] sm:text-[10px] hidden xs:inline">{item.date}</span>
                </div>

                <h4 className="font-cinzel font-bold text-xs sm:text-lg text-white uppercase tracking-wide text-gradient-gold line-clamp-2">
                  {item.title}
                </h4>

                <p className="font-sans text-[10px] sm:text-xs text-starlight-300 mt-1 font-light leading-relaxed line-clamp-2 hidden sm:block">
                  {item.theme}
                </p>

                <div className="mt-2.5 sm:mt-4 pt-2 sm:pt-3 border-t border-white/10 flex flex-wrap items-center justify-between font-mono text-[9px] sm:text-xs text-starlight-400 gap-1">
                  <div className="flex items-center space-x-1 text-starlight-300">
                    <Clock size={11} className="text-[#EA580C] shrink-0" />
                    <span className="truncate">{item.time}</span>
                  </div>
                  <div className="hidden sm:flex items-center space-x-1 text-starlight-400">
                    <MapPin size={11} className="text-gold-antique shrink-0" />
                    <span className="truncate">{item.venue}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

