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

      {/* DESKTOP DUAL-SIDED MIRROR TIMELINE */}
      <div className="hidden md:block relative py-12">
        {/* Central Vertical Burnt-Orange Mirror Axis */}
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-transparent via-[#EA580C] to-transparent pointer-events-none" />

        {/* Central "MIRROR" Axis Marker */}
        <div className="sticky top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex items-center justify-center my-6">
          <div className="px-3.5 py-1 rounded-full bg-[#0E131F] border border-[#EA580C] text-[#FB923C] font-mono text-[9px] tracking-[0.25em] uppercase font-bold shadow-[0_0_20px_rgba(234,88,12,0.4)] flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C] animate-ping" />
            <span>MIRROR AXIS</span>
          </div>
        </div>

        {/* Opposing Parallel Columns */}
        <div className="grid grid-cols-2 gap-12 relative z-10">
          {/* LEFT SIDE: Mirrored / Subdued Anti-Timeline (Moves Upwards with scroll) */}
          <div
            style={{
              transform: `translateY(${-scrollParallax * 1.2}px)`,
              transition: 'transform 0.15s ease-out',
            }}
            className="space-y-8 pr-8 text-right opacity-60 hover:opacity-90 transition-opacity"
          >
            {TIMELINE_DATA.map((item, idx) => (
              <div
                key={`left-${idx}`}
                className="glass-panel p-5 rounded-2xl border border-white/5 bg-[#090C14]/70 transform scale-x-[-1] hover:border-amber-molten/40 transition-colors"
                style={{ direction: 'rtl' }}
              >
                <div className="transform scale-x-[-1]">
                  <div className="flex items-center justify-between font-mono text-[10px] text-starlight-500 mb-2">
                    <span className="text-[#EA580C] font-bold">{item.mirroredNote}</span>
                    <span>{item.date}</span>
                  </div>
                  <h4 className="font-cinzel font-bold text-base text-starlight-300 uppercase tracking-wide">
                    {item.title}
                  </h4>
                  <p className="font-sans text-xs text-starlight-500 mt-1 font-light">
                    {item.theme}
                  </p>
                  <div className="mt-3 text-[10px] font-mono text-starlight-500">
                    {item.venue} • {item.time}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE: Current Forward Timeline (Moves Downwards with scroll) */}
          <div
            style={{
              transform: `translateY(${scrollParallax * 1.2}px)`,
              transition: 'transform 0.15s ease-out',
            }}
            className="space-y-8 pl-8 text-left"
          >
            {TIMELINE_DATA.map((item, idx) => (
              <div
                key={`right-${idx}`}
                className="glass-panel-amber p-6 rounded-2xl border border-amber-molten/30 bg-[#0E1321] hover:border-[#EA580C] shadow-lg shadow-black/60 transition-all hover:-translate-y-1"
              >
                <div className="flex items-center justify-between font-mono text-[10px] mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-0.5 rounded-full bg-amber-molten/20 text-[#FB923C] font-bold uppercase tracking-wider">
                      {item.tag}
                    </span>
                    <span className="text-white font-bold">{item.day}</span>
                  </div>
                  <span className="text-starlight-400 font-semibold">{item.date}</span>
                </div>

                <h4 className="font-cinzel font-bold text-lg text-white uppercase tracking-wide text-gradient-gold">
                  {item.title}
                </h4>

                <p className="font-sans text-xs text-starlight-300 mt-1 font-light leading-relaxed">
                  {item.theme}
                </p>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between font-mono text-xs text-starlight-400">
                  <div className="flex items-center space-x-1.5 text-starlight-400">
                    <Clock size={12} className="text-[#EA580C]" />
                    <span>{item.time}</span>
                  </div>
                  <div className="flex items-center space-x-1.5 text-starlight-400">
                    <MapPin size={12} className="text-gold-antique" />
                    <span>{item.venue}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MOBILE READABLE SINGLE-COLUMN MIRROR TIMELINE (Clean, No Horizontal Overflow) */}
      <div className="md:hidden space-y-6 py-6">
        <div className="flex items-center justify-center my-4">
          <div className="px-3 py-1 rounded-full bg-[#0E131F] border border-[#EA580C] text-[#FB923C] font-mono text-[9px] tracking-widest uppercase font-bold shadow-md flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C] animate-pulse" />
            <span>MIRROR TIMELINE STREAM</span>
          </div>
        </div>

        {TIMELINE_DATA.map((item, idx) => (
          <div
            key={`mobile-${idx}`}
            className="rounded-2xl p-5 bg-[#0C101A] border border-[#EA580C]/35 relative overflow-hidden space-y-3"
          >
            {/* Primary Forward Event */}
            <div>
              <div className="flex items-center justify-between font-mono text-[10px] mb-1.5">
                <span className="px-2 py-0.5 rounded-full bg-[#EA580C]/20 text-[#FB923C] font-bold uppercase tracking-wider">
                  {item.tag} • {item.day}
                </span>
                <span className="text-starlight-400">{item.date}</span>
              </div>

              <h4 className="font-cinzel font-bold text-base text-white uppercase tracking-wide">
                {item.title}
              </h4>

              <p className="font-sans text-xs text-starlight-300 mt-1 font-light">
                {item.theme}
              </p>

              <div className="mt-3 flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] text-starlight-400">
                <div className="flex items-center space-x-1">
                  <Clock size={11} className="text-[#EA580C]" />
                  <span>{item.time}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin size={11} className="text-gold" />
                  <span>{item.venue}</span>
                </div>
              </div>
            </div>

            {/* Subdued Embedded Mirrored Parity Strip */}
            <div className="pt-2.5 border-t border-dashed border-white/10 flex items-center justify-between font-mono text-[9px] text-starlight-500 opacity-60">
              <span className="tracking-widest uppercase text-[#EA580C]">MIRROR PARITY:</span>
              <span className="italic">{item.mirroredNote}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
