import React, { useState } from 'react';
import { Calendar, CheckCircle2, ChevronRight, Clock, Compass, Orbit, Sparkles } from 'lucide-react';

const TIMELINE_NODES = [
  {
    id: 1,
    title: 'The Singularity Call',
    date: 'FEB 01, 2026',
    status: 'COMPLETED',
    quote: 'The beginning of the anomaly: when zero becomes infinite possibility.',
    details: 'Nationwide portal activation for hackathons, paper submissions, and competitive collegiate registrations.',
    coord: 'EVENT HORIZON 01',
  },
  {
    id: 2,
    title: 'Quantum Shortlisting',
    date: 'MAR 01, 2026',
    status: 'IN PROGRESS',
    quote: 'Ideas exist in superposition until the jury collapses the wave function.',
    details: 'Round 1 technical review. Top 150 hackathon teams, 40 robotic squads, and esports qualifiers announced.',
    coord: 'EVENT HORIZON 02',
  },
  {
    id: 3,
    title: 'The Anomaly Masterclasses',
    date: 'MAR 10, 2026',
    status: 'UPCOMING',
    quote: 'Knowledge is learning the rules; mastery is learning when rules cease to apply.',
    details: 'Intensive deep-dives with industry engineers from Google Cloud, NVIDIA, and top AI research labs.',
    coord: 'EVENT HORIZON 03',
  },
  {
    id: 4,
    title: 'Main Fest: Reality Shift',
    date: 'MAR 11 — 13, 2026',
    status: 'FLAGSHIP',
    quote: 'Three days where physical campus dimensions yield to the impossible.',
    details: '36-hour hackathon, live robot arena gauntlets, esports LAN amphitheatre, and nighttime drone light orchestrations.',
    coord: 'GRAVITATIONAL APEX',
  },
  {
    id: 5,
    title: 'The Event Horizon Verdict',
    date: 'MAR 13, 2026',
    status: 'UPCOMING',
    quote: 'Winners emerge not by solving equations, but by rewriting them.',
    details: 'Grand Valedictory ceremony, ₹5,00,000+ cumulative prize pool dispersal, and venture angel mentorship offers.',
    coord: 'EVENT HORIZON 05',
  },
  {
    id: 6,
    title: 'Temporal Echoes',
    date: 'MAR 20, 2026',
    status: 'UPCOMING',
    quote: 'The festival concludes, but its ripple permanently bends the timeline.',
    details: 'Official 4K aftermovie premiere, open-source repository release, and global digital hall of fame minting.',
    coord: 'EVENT HORIZON 06',
  },
];

export default function SpacetimeTimeline() {
  const [activeNode, setActiveNode] = useState(3); // Default to Main Fest (index 3)

  const current = TIMELINE_NODES[activeNode];

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
        <div>
          <span className="font-mono text-xs text-rose uppercase tracking-widest block mb-2">
            [ 03 // GRAVITATIONAL CHRONOLOGY ]
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
            A Sequence of <span className="text-gradient-cosmic">Contradictions</span>
          </h2>
        </div>
        <p className="mt-3 md:mt-0 font-sans text-xs sm:text-sm text-bone-400 max-w-md leading-relaxed">
          Time does not move in a straight line at NMIMS Shirpur. Trace the gravitational arc of key festival milestones.
        </p>
      </div>

      {/* Interactive Celestial Orbit Path */}
      <div className="glass-panel-glow p-6 sm:p-10 rounded-3xl relative overflow-hidden">
        {/* Orbit Arc SVG line */}
        <div className="relative py-8">
          <div className="hidden md:block absolute top-1/2 left-4 right-4 h-0.5 bg-gradient-to-r from-cyan via-violet to-rose transform -translate-y-1/2 opacity-30 pointer-events-none" />

          {/* Node Circles */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 relative z-10">
            {TIMELINE_NODES.map((node, index) => {
              const isSelected = activeNode === index;
              return (
                <button
                  key={node.id}
                  onClick={() => setActiveNode(index)}
                  className={`flex flex-col items-center p-3 rounded-2xl transition-all text-center group ${
                    isSelected
                      ? 'bg-white/10 border border-violet/70 shadow-lg shadow-violet/20 -translate-y-2'
                      : 'hover:bg-white/5 border border-transparent'
                  }`}
                >
                  {/* Planet Node Marker */}
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                      isSelected
                        ? 'bg-violet text-void font-bold shadow-lg shadow-violet/50 scale-110 accretion-ring'
                        : 'bg-void border border-white/20 text-gray-400 group-hover:border-violet group-hover:text-white'
                    }`}
                  >
                    <span className="font-mono text-xs">0{node.id}</span>
                  </div>

                  <span className="font-mono text-[10px] text-gray-400 mt-3 uppercase tracking-wider block">
                    {node.date}
                  </span>
                  <span className="font-display font-bold text-xs text-white mt-1 group-hover:text-cyan transition-colors line-clamp-1">
                    {node.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Horizon Card */}
        <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-8">
            <div className="flex items-center space-x-3 mb-2 font-mono text-xs">
              <span className="px-2.5 py-0.5 rounded bg-violet/20 border border-violet/40 text-violet font-semibold">
                {current.coord}
              </span>
              <span className="text-gray-400">•</span>
              <span className="text-rose font-bold">{current.date}</span>
            </div>

            <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
              {current.title}
            </h3>

            <p className="font-serif italic text-sm sm:text-base text-cyan mt-1">
              "{current.quote}"
            </p>

            <p className="font-sans text-xs sm:text-sm text-bone-300 mt-3 leading-relaxed max-w-2xl">
              {current.details}
            </p>
          </div>

          <div className="md:col-span-4 flex flex-col justify-center items-start md:items-end font-mono text-xs space-y-2">
            <div className="px-4 py-2 rounded-xl bg-void/80 border border-white/10 w-full md:w-auto text-left md:text-right">
              <span className="text-gray-500 text-[10px] block">TIMELINE STATUS</span>
              <span className="text-white font-bold tracking-wider">{current.status}</span>
            </div>
            <div className="px-4 py-2 rounded-xl bg-void/80 border border-white/10 w-full md:w-auto text-left md:text-right">
              <span className="text-gray-500 text-[10px] block">COORDINATE</span>
              <span className="text-gray-400 text-[11px]">NMIMS SHIRPUR HUB</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

