import React, { useState } from 'react';
import { ArrowUpRight, Binary, Bot, Cpu, Crosshair, Eye, Flame, Gamepad2, Layers, Sparkles, Trophy, Users, X } from 'lucide-react';

export const ARENAS = [
  {
    id: 'singularity',
    title: 'The Singularity Hackathon',
    paradox: 'Infinite compute within a finite byte',
    category: 'tech',
    prize: '₹1,50,000',
    team: '2–4 Innovators',
    duration: '36 Hours Nonstop',
    description: 'Build autonomous multi-agent swarms, zero-knowledge decentralized circuits, and non-deterministic logic engines that defy classical compute limits.',
    visualType: 'blackhole',
    icon: Binary,
    glow: 'from-violet to-cyan',
    badge: 'FLAGSHIP HACK',
    rounds: [
      { name: 'Ideation Superposition', date: 'Mar 01' },
      { name: '36H Prototype Sprint', date: 'Mar 11-12' },
      { name: 'Jury Teleportation Pitch', date: 'Mar 13' },
    ],
    rules: [
      'Original code created during the 36-hour sprint window.',
      'Must incorporate at least one paradoxical/non-deterministic design paradigm.',
      'Open to all accredited universities across India.',
    ],
  },
  {
    id: 'robotics',
    title: 'Cyber-Classical Robotics',
    paradox: 'Ancient marble meets synthetic consciousness',
    category: 'hardware',
    prize: '₹1,00,000',
    team: '3–5 Engineers',
    duration: '2 Days Live Trials',
    description: 'Autonomous ground rovers navigating non-Euclidean optical mazes, LiDAR obstacle evasion, and precision micro-manipulation arms.',
    visualType: 'cyborg',
    icon: Bot,
    glow: 'from-cyan to-violet',
    badge: 'AUTONOMOUS HARDWARE',
    rounds: [
      { name: 'Virtual Simulation Telemetry', date: 'Mar 02' },
      { name: 'Arena Obstacle Gauntlet', date: 'Mar 11' },
      { name: 'Final Speed & Precision Duel', date: 'Mar 12' },
    ],
    rules: [
      'Bots must fit standard dimension specs (45x45x45 cm).',
      'Both autonomous algorithm mode and manual RF telemetry allowed in tier stages.',
      'Safety cutoff switch is strictly mandatory.',
    ],
  },
  {
    id: 'design',
    title: 'Non-Euclidean Design Arena',
    paradox: 'Art governed by impossible mathematics',
    category: 'creative',
    prize: '₹60,000',
    team: 'Solo / Duo',
    duration: '24 Hours',
    description: 'Craft WebGL interactive shaders, spatial UI/UX designs, and paradoxical branding that simulate optical illusions and impossible spatial dimensions.',
    visualType: 'cube',
    icon: Layers,
    glow: 'from-rose to-violet',
    badge: 'CREATIVE LAB',
    rounds: [
      { name: 'Dimension Brief Release', date: 'Mar 10' },
      { name: 'Live Shader & UI Build', date: 'Mar 11' },
      { name: 'Critique & Gallery Showcase', date: 'Mar 12' },
    ],
    rules: [
      'Work must be interactive in browser or 3D engine.',
      'Must reflect the theme of coexistence and optical contradiction.',
      'Source files and render recordings required.',
    ],
  },
  {
    id: 'cipher',
    title: "Schrödinger's Cryptographic CTF",
    paradox: 'A door that locks when observed',
    category: 'tech',
    prize: '₹75,000',
    team: '1–3 Operators',
    duration: '18 Hours',
    description: 'Post-quantum lattice cryptography, memory corruption exploits, Zero-Knowledge proofs, and reverse-engineering obfuscated binaries.',
    visualType: 'lock',
    icon: Cpu,
    glow: 'from-cyan to-rose',
    badge: 'CYBERSECURITY',
    rounds: [
      { name: 'Qualifier Matrix', date: 'Mar 05' },
      { name: 'Onsite Attack/Defense Arena', date: 'Mar 12' },
    ],
    rules: [
      'Strict no-DDoS against platform infrastructure.',
      'Dynamic scoring based on solve latency.',
      'Flag sharing strictly results in immediate disqualification.',
    ],
  },
  {
    id: 'esports',
    title: 'Quantum League: Valorant & BGMI',
    paradox: 'Split-second reflex in a timeless arena',
    category: 'gaming',
    prize: '₹1,20,000',
    team: 'Squads (4/5)',
    duration: '3 Days Tournament',
    description: 'Collegiate esports clash broadcast live from NMIMS Shirpur main amphitheatre with high-refresh telemetry and holographic match analytics.',
    visualType: 'crosshair',
    icon: Gamepad2,
    glow: 'from-rose to-cyan',
    badge: 'ESPORTS ANOMALY',
    rounds: [
      { name: 'Online Brackets Qualifier', date: 'Feb 26-28' },
      { name: 'LAN Quarter & Semifinals', date: 'Mar 11' },
      { name: 'Grand Arena Finale', date: 'Mar 12' },
    ],
    rules: [
      'Official competitive rule sets applied.',
      'Anti-cheat verifiers mandatory on tournament devices.',
      'LAN finals played on campus tournament rigs.',
    ],
  },
  {
    id: 'ai-duel',
    title: 'Generative Prompt Paradox',
    paradox: 'Teaching intelligence to break its own rules',
    category: 'creative',
    prize: '₹50,000',
    team: 'Solo Combatant',
    duration: '12 Hours',
    description: 'Competitive prompt architecture and adversarial red-teaming. Force frontier models to solve paradoxical logic riddles under strict latency limits.',
    visualType: 'spark',
    icon: Sparkles,
    glow: 'from-violet to-rose',
    badge: 'AI RED-TEAM',
    rounds: [
      { name: 'Speed Benchmark Sprint', date: 'Mar 11' },
      { name: 'Adversarial Jailbreak Knockout', date: 'Mar 12' },
    ],
    rules: [
      'Standardized LLM token counts per round.',
      'Evaluated on latency, novelty, and bypass integrity.',
    ],
  },
];

export default function ContradictionArenas({ onSelectPassTrack }) {
  const [filter, setFilter] = useState('all');
  const [selectedArena, setSelectedArena] = useState(null);

  const filtered = filter === 'all' ? ARENAS : ARENAS.filter((a) => a.category === filter);

  return (
    <div className="w-full">
      {/* Heading & Filter Bar */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <span className="font-mono text-xs text-violet uppercase tracking-widest block mb-2">
            [ 02 // CONTRADICTION ARENAS ]
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
            Where Logic Meets <span className="text-gradient-cosmic">The Unexpected</span>
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 font-mono text-xs">
          {[
            { id: 'all', label: 'ALL ARENAS' },
            { id: 'tech', label: 'CODE & CTF' },
            { id: 'hardware', label: 'ROBOTICS' },
            { id: 'gaming', label: 'ESPORTS' },
            { id: 'creative', label: 'DESIGN & AI' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 rounded-lg transition-all ${
                filter === tab.id
                  ? 'bg-violet text-void font-bold shadow-lg shadow-violet/30'
                  : 'glass-panel text-gray-300 hover:text-white hover:border-white/20'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Arena Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filtered.map((arena) => {
          const Icon = arena.icon;
          return (
            <div
              key={arena.id}
              onClick={() => setSelectedArena(arena)}
              className="glass-panel hover:glass-panel-glow p-6 sm:p-7 rounded-2xl cursor-pointer group transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Top Accent Gradient Line */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${arena.glow} opacity-70 group-hover:opacity-100 transition-opacity`}
              />

              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="font-mono text-[10px] tracking-widest px-2.5 py-1 rounded bg-white/5 border border-white/10 text-bone-300 uppercase">
                    {arena.badge}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-white group-hover:bg-violet transition-all">
                    <ArrowUpRight size={16} />
                  </div>
                </div>

                {/* Paradox Concept Eyebrow */}
                <div className="font-serif italic text-xs text-rose mb-1.5">
                  "{arena.paradox}"
                </div>

                <h3 className="font-display font-black text-xl sm:text-2xl text-white group-hover:text-cyan transition-colors">
                  {arena.title}
                </h3>

                <p className="font-sans text-xs text-bone-400 mt-2.5 line-clamp-3 leading-relaxed">
                  {arena.description}
                </p>
              </div>

              {/* Bottom Card Meta */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs">
                <div>
                  <span className="text-[10px] text-gray-500 block uppercase">PRIZE POOL</span>
                  <span className="text-white font-bold text-sm tracking-wide">{arena.prize}</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-gray-500 block uppercase">TEAM SPEC</span>
                  <span className="text-bone-300 text-[11px]">{arena.team}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Arena Details Modal Drawer */}
      {selectedArena && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-void/80 backdrop-blur-xl animate-fade-in">
          <div className="glass-panel-glow border border-violet/40 rounded-3xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={() => setSelectedArena(null)}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <X size={18} />
            </button>

            <span className="font-mono text-xs text-rose uppercase tracking-widest block mb-1">
              [ ARENA SPECIFICATION DOSSIER ]
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
              {selectedArena.title}
            </h3>
            <p className="font-serif italic text-sm text-cyan mt-1">
              "{selectedArena.paradox}"
            </p>

            <p className="font-sans text-xs sm:text-sm text-bone-300 mt-4 leading-relaxed">
              {selectedArena.description}
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-3 gap-3 my-6 font-mono text-xs">
              <div className="p-3 rounded-xl bg-void/70 border border-white/10">
                <span className="text-gray-400 text-[10px] block">TOTAL BOUNTY</span>
                <span className="text-white font-bold text-sm">{selectedArena.prize}</span>
              </div>
              <div className="p-3 rounded-xl bg-void/70 border border-white/10">
                <span className="text-gray-400 text-[10px] block">FORMAT</span>
                <span className="text-bone-200 text-xs">{selectedArena.duration}</span>
              </div>
              <div className="p-3 rounded-xl bg-void/70 border border-white/10">
                <span className="text-gray-400 text-[10px] block">SQUAD SIZE</span>
                <span className="text-bone-200 text-xs">{selectedArena.team}</span>
              </div>
            </div>

            {/* Rounds Timeline */}
            <div className="mb-6">
              <h4 className="font-mono text-xs uppercase tracking-wider text-white mb-3 flex items-center space-x-2">
                <Trophy size={14} className="text-violet" />
                <span>ARENA PHASES & MILESTONES</span>
              </h4>
              <div className="space-y-2 font-mono text-xs">
                {selectedArena.rounds.map((round, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center p-2.5 rounded-lg bg-white/5 border border-white/5"
                  >
                    <span className="text-bone-200">{round.name}</span>
                    <span className="text-rose font-semibold">{round.date}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Protocol Rules */}
            <div className="mb-6">
              <h4 className="font-mono text-xs uppercase tracking-wider text-white mb-2">
                ENGAGEMENT PROTOCOLS
              </h4>
              <ul className="space-y-1.5 text-xs text-bone-400 font-sans list-disc list-inside">
                {selectedArena.rules.map((rule, idx) => (
                  <li key={idx}>{rule}</li>
                ))}
              </ul>
            </div>

            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10">
              <button
                onClick={() => {
                  if (onSelectPassTrack) onSelectPassTrack(selectedArena.title);
                  setSelectedArena(null);
                  const el = document.getElementById('pass-generator');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto flex-1 py-3 px-6 rounded-xl font-mono text-xs font-bold uppercase tracking-wider text-void bg-cyan hover:bg-cyan-glow transition-all shadow-lg flex items-center justify-center space-x-2"
              >
                <span>MINT PASS FOR THIS ARENA</span>
                <ArrowUpRight size={15} />
              </button>
              <button
                onClick={() => setSelectedArena(null)}
                className="py-3 px-6 rounded-xl font-mono text-xs border border-white/15 text-bone-300 hover:text-white"
              >
                CLOSE DOSSIER
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

