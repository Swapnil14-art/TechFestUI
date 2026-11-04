import React, { useState } from 'react';
import { ArrowUpRight, Binary, Bot, Cpu, Gamepad2, Layers, Shield, Sparkles, Trophy, Users, X } from 'lucide-react';

export const COMPETITIONS = [
  {
    id: 'singularity',
    title: 'The Singularity Hackathon',
    paradox: 'Infinite compute within a finite byte',
    category: 'code',
    bounty: '₹1,50,000',
    team: '2–4 Innovators',
    duration: '36 Hours Nonstop',
    venue: 'MPSTME Computing Complex',
    description: 'Build autonomous multi-agent systems, zero-knowledge verifiable circuits, and non-deterministic logic engines that break standard architectural bottlenecks.',
    icon: Binary,
    tag: 'FLAGSHIP HACK',
    rounds: [
      { name: 'Ideation Superposition', date: 'Mar 01', note: 'Abstract submission & architectural blueprint' },
      { name: '36-Hour Onsite Code Sprint', date: 'Mar 11-12', note: 'Nonstop building with midnight mentor reviews' },
      { name: 'Jury Teleportation Pitch', date: 'Mar 13', note: 'Live demonstration to industry engineering heads' },
    ],
    rules: [
      'All code written during the 36-hour onsite window.',
      'Must incorporate a verifiable contradiction or non-deterministic algorithm.',
      'Open to all university students across India.',
    ],
  },
  {
    id: 'robotics',
    title: 'Cyber-Classical Robotics',
    paradox: 'Ancient stone meets synthetic consciousness',
    category: 'robotics',
    bounty: '₹1,00,000',
    team: '3–5 Engineers',
    duration: '2 Days Live Arena',
    venue: 'Indoor Sports Arena Arena A',
    description: 'Ground rovers and autonomous micro-drones traversing optical illusion arenas, real-time LiDAR mapping, and precision manipulation under sensor distortion.',
    icon: Bot,
    tag: 'HARDWARE & SENSORS',
    rounds: [
      { name: 'Telemetry Simulation Review', date: 'Mar 03', note: 'Virtual simulation pass & safety verification' },
      { name: 'Non-Euclidean Maze Gauntlet', date: 'Mar 11', note: 'Autonomous obstacle evasion and pathfinding' },
      { name: 'The Final Speed & Payload Duel', date: 'Mar 12', note: 'Head-to-head agility and micro-manipulation' },
    ],
    rules: [
      'Bot dimensions strictly capped at 45 × 45 × 45 cm.',
      'Autonomous algorithm mode required for tier 2 checkpoint.',
      'Dual-channel safety kill switch is strictly mandatory.',
    ],
  },
  {
    id: 'cipher',
    title: "Schrödinger's Cryptographic CTF",
    paradox: 'A door that locks when observed',
    category: 'cyber',
    bounty: '₹75,000',
    team: '1–3 Operators',
    duration: '18 Hours Siege',
    venue: 'Cyber Defense Lab 204',
    description: 'Post-quantum lattice ciphers, memory buffer corruption, zero-knowledge proofs, and reverse-engineering proprietary obfuscated binaries.',
    icon: Cpu,
    tag: 'CYBER DEFENSE',
    rounds: [
      { name: 'Qualifier Matrix', date: 'Mar 05', note: 'Online jeopardy-style elimination round' },
      { name: 'Onsite Attack & Defense Siege', date: 'Mar 12', note: 'Live network infrastructure battle' },
    ],
    rules: [
      'Zero unauthorized traffic against platform hosts.',
      'Dynamic scoring decay based on time-to-solve.',
      'Flag sharing results in immediate team elimination.',
    ],
  },
  {
    id: 'design',
    title: 'Non-Euclidean Creative Lab',
    paradox: 'Art governed by impossible mathematics',
    category: 'creative',
    bounty: '₹60,000',
    team: 'Solo / Duo',
    duration: '24 Hours',
    venue: 'Media Studio B',
    description: 'Craft real-time WebGL shaders, spatial UI/UX designs, and paradoxical identity systems that play with optical illusions and multidimensional perspectives.',
    icon: Layers,
    tag: 'GENERATIVE DESIGN',
    rounds: [
      { name: 'Dimension Brief Release', date: 'Mar 10', note: 'Challenging constraints announced live' },
      { name: 'Shader & Interactive Build', date: 'Mar 11', note: 'Prototyping in browser or graphics engine' },
      { name: 'Interactive Gallery Showcase', date: 'Mar 12', note: 'Exhibition and peer jury critique' },
    ],
    rules: [
      'All submissions must run interactive in browser or executable 3D.',
      'Concept must visually embody the coexistence of opposites.',
    ],
  },
  {
    id: 'esports',
    title: 'Quantum League: Valorant & BGMI',
    paradox: 'Split-second reflex in a timeless arena',
    category: 'esports',
    bounty: '₹1,20,000',
    team: 'Rosters of 5',
    duration: '3 Days Tournament',
    venue: 'Main Amphitheatre Live Stage',
    description: 'High-stakes collegiate esports tournament played on tournament rigs with live spectator projection, professional casting, and holographic match analytics.',
    icon: Gamepad2,
    tag: 'COLLEGIATE ESPORTS',
    rounds: [
      { name: 'Online Regional Brackets', date: 'Feb 26-28', note: 'Single-elimination online brackets' },
      { name: 'LAN Quarterfinals & Semis', date: 'Mar 11', note: 'Played on campus tournament stages' },
      { name: 'Grand Arena Finale', date: 'Mar 12', note: 'Best-of-5 championship match with live audience' },
    ],
    rules: [
      'Official competitive match guidelines strictly enforced.',
      'Hardware verifiers and anti-cheat clients mandatory.',
    ],
  },
  {
    id: 'ai-derby',
    title: 'Generative Adversarial Duel',
    paradox: 'Teaching intelligence to break its own constraints',
    category: 'creative',
    bounty: '₹50,000',
    team: 'Solo Combatant',
    duration: '12 Hours',
    venue: 'AI Seminar Hall 3',
    description: 'Competitive prompt architecture and adversarial red-teaming. Compel frontier reasoning models to solve paradoxical logic puzzles under token constraints.',
    icon: Sparkles,
    tag: 'FRONTIER AI',
    rounds: [
      { name: 'Logic Benchmark Sprint', date: 'Mar 11', note: 'High-speed algorithmic riddle solving' },
      { name: 'Adversarial Jailbreak Knockout', date: 'Mar 12', note: 'Head-to-head system prompt circumvention' },
    ],
    rules: [
      'Standardized token quotas per round.',
      'Ranked by reasoning depth, latency, and bypass fidelity.',
    ],
  },
];

export default function FestEvents({ onSelectTrack }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedEvent, setSelectedEvent] = useState(null);

  const filtered =
    activeCategory === 'all'
      ? COMPETITIONS
      : COMPETITIONS.filter((item) => item.category === activeCategory);

  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <span className="font-mono text-xs text-rose uppercase tracking-widest block mb-2">
            [ COMPETITIVE ARENAS & HACKATHONS ]
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
            Contradiction <span className="text-gradient-cosmic">Arenas</span>
          </h2>
        </div>

        {/* Technical Filter Tabs */}
        <div className="flex flex-wrap gap-2 font-mono text-xs">
          {[
            { id: 'all', label: 'ALL ARENAS' },
            { id: 'code', label: 'CODE & HACK' },
            { id: 'robotics', label: 'ROBOTICS' },
            { id: 'cyber', label: 'CYBERSECURITY' },
            { id: 'esports', label: 'ESPORTS' },
            { id: 'creative', label: 'DESIGN & AI' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-3.5 py-1.5 rounded-lg transition-all ${
                activeCategory === tab.id
                  ? 'bg-white text-void font-bold shadow-lg'
                  : 'glass-panel text-gray-400 hover:text-white border border-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Event Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              onClick={() => setSelectedEvent(item)}
              className="glass-panel hover:glass-panel-glow p-6 rounded-2xl cursor-pointer group transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between border border-white/10"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[10px] tracking-wider px-2.5 py-0.5 rounded bg-white/5 border border-white/10 text-gray-300 uppercase">
                    {item.tag}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-white group-hover:bg-violet transition-colors">
                    <ArrowUpRight size={16} />
                  </div>
                </div>

                <div className="font-serif italic text-xs text-rose mb-1.5">
                  "{item.paradox}"
                </div>

                <h3 className="font-display font-black text-xl text-white group-hover:text-cyan transition-colors">
                  {item.title}
                </h3>

                <p className="font-sans text-xs text-gray-400 mt-2.5 line-clamp-3 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Card Meta */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs">
                <div>
                  <span className="text-[10px] text-gray-500 block">TOTAL BOUNTY</span>
                  <span className="text-white font-bold text-sm tracking-wide">{item.bounty}</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-gray-500 block">SQUAD SPEC</span>
                  <span className="text-bone-300 text-[11px]">{item.team}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Slide-over Specification Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-void/80 backdrop-blur-xl animate-fade-in">
          <div className="glass-panel-glow border border-violet/40 rounded-3xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <X size={18} />
            </button>

            <span className="font-mono text-xs text-rose uppercase tracking-widest block mb-1">
              [ SPECIFICATION DOSSIER ]
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
              {selectedEvent.title}
            </h3>
            <p className="font-serif italic text-sm text-cyan mt-1">
              "{selectedEvent.paradox}"
            </p>

            <p className="font-sans text-xs sm:text-sm text-bone-300 mt-4 leading-relaxed">
              {selectedEvent.description}
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-3 my-6 font-mono text-xs">
              <div className="p-3 rounded-xl bg-void/70 border border-white/10">
                <span className="text-gray-400 text-[10px] block">TOTAL BOUNTY</span>
                <span className="text-white font-bold text-sm">{selectedEvent.bounty}</span>
              </div>
              <div className="p-3 rounded-xl bg-void/70 border border-white/10">
                <span className="text-gray-400 text-[10px] block">VENUE</span>
                <span className="text-bone-200 text-xs truncate block">{selectedEvent.venue}</span>
              </div>
              <div className="p-3 rounded-xl bg-void/70 border border-white/10">
                <span className="text-gray-400 text-[10px] block">SQUAD SPEC</span>
                <span className="text-bone-200 text-xs">{selectedEvent.team}</span>
              </div>
            </div>

            {/* Rounds Milestones */}
            <div className="mb-6">
              <h4 className="font-mono text-xs uppercase tracking-wider text-white mb-3 flex items-center space-x-2">
                <Trophy size={14} className="text-violet" />
                <span>ARENA PHASES & SCHEDULE</span>
              </h4>
              <div className="space-y-2 font-mono text-xs">
                {selectedEvent.rounds.map((round, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-white/5 border border-white/5 flex flex-col sm:flex-row justify-between sm:items-center gap-1"
                  >
                    <div>
                      <span className="text-bone-200 font-semibold block">{round.name}</span>
                      <span className="text-gray-400 text-[11px] font-sans">{round.note}</span>
                    </div>
                    <span className="text-rose font-bold">{round.date}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Protocols */}
            <div className="mb-6">
              <h4 className="font-mono text-xs uppercase tracking-wider text-white mb-2">
                ENGAGEMENT PROTOCOLS
              </h4>
              <ul className="space-y-1.5 text-xs text-gray-400 font-sans list-disc list-inside">
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
                className="w-full sm:w-auto flex-1 py-3 px-6 rounded-xl font-mono text-xs font-bold uppercase tracking-wider text-void bg-gradient-to-r from-cyan to-violet hover:brightness-110 transition-all shadow-lg flex items-center justify-center space-x-2"
              >
                <span>MINT DELEGATE PASS FOR THIS ARENA</span>
                <ArrowUpRight size={15} />
              </button>
              <button
                onClick={() => setSelectedEvent(null)}
                className="py-3 px-6 rounded-xl font-mono text-xs border border-white/15 text-gray-300 hover:text-white"
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

