import React, { useState } from 'react';
import { ArrowUpRight, Binary, Bot, Cpu, Gamepad2, Layers, ShieldCheck, Sparkles, Trophy, Users, X } from 'lucide-react';

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
    description: 'Build autonomous multi-agent swarms, zero-knowledge verifiable circuits, and non-deterministic logic engines that break standard architectural bottlenecks.',
    icon: Binary,
    tag: 'FLAGSHIP HACKATHON',
    accent: 'gold',
    visualStyle: 'from-gold-bronze/40 via-surface to-void',
    rounds: [
      { name: 'Ideation Superposition', date: 'Mar 01', note: 'Abstract submission & architectural blueprint' },
      { name: '36-Hour Onsite Code Sprint', date: 'Mar 11-12', note: 'Nonstop building with midnight mentor reviews' },
      { name: 'Jury Teleportation Pitch', date: 'Mar 13', note: 'Live demonstration to industry engineering heads' },
    ],
    rules: [
      'All code written during the 36-hour onsite window.',
      'Must incorporate a verifiable contradiction or non-deterministic algorithm.',
      'Open to all accredited universities across India.',
    ],
  },
  {
    id: 'robotics',
    title: 'Cyber-Classical Robotics',
    paradox: 'Ancient marble meets synthetic consciousness',
    category: 'robotics',
    bounty: '₹1,00,000',
    team: '3–5 Engineers',
    duration: '2 Days Live Arena',
    venue: 'Indoor Arena A, Shirpur Campus',
    description: 'Ground rovers and autonomous micro-drones traversing optical illusion arenas, real-time LiDAR mapping, and precision manipulation under sensor distortion.',
    icon: Bot,
    tag: 'HARDWARE & SENSORS',
    accent: 'amber',
    visualStyle: 'from-amber-molten/30 via-surface to-void',
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
    accent: 'indigo',
    visualStyle: 'from-indigo-900/40 via-surface to-void',
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
    venue: 'Media Studio B, Design Wing',
    description: 'Craft real-time WebGL shaders, spatial UI/UX designs, and paradoxical identity systems that play with optical illusions and multidimensional perspectives.',
    icon: Layers,
    tag: 'GENERATIVE SHADERS',
    accent: 'gold',
    visualStyle: 'from-gold/25 via-surface to-void',
    rounds: [
      { name: 'Dimension Brief Release', date: 'Mar 10', note: 'Challenging spatial constraints announced live' },
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
    accent: 'amber',
    visualStyle: 'from-amber-flare/30 via-surface to-void',
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
    tag: 'FRONTIER AI DERBY',
    accent: 'prismatic',
    visualStyle: 'from-violet-glow/25 via-surface to-void',
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
      {/* Section Heading with Chiaroscuro Metallic Flair */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <span className="font-mono text-xs text-gold-antique uppercase tracking-[0.2em] block mb-2">
            [ SECTION 02 // PARADOX COMPETITION ARENAS ]
          </span>
          <h2 className="font-cinzel font-black text-3xl sm:text-5xl text-white tracking-wide uppercase">
            Contradiction <span className="text-gradient-gold">Arenas</span>
          </h2>
        </div>

        {/* Technical Category Filter Tabs */}
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
              className={`px-3.5 py-1.5 rounded-xl transition-all ${
                activeCategory === tab.id
                  ? 'bg-gradient-to-r from-gold-pale via-gold to-gold-bronze text-void font-bold shadow-lg shadow-gold/20'
                  : 'glass-panel text-starlight-400 hover:text-white border border-white/5 hover:border-gold-antique/30'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Asymmetric Editorial Grid of Event Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item, index) => {
          const Icon = item.icon;
          const isLarge = index === 0 || index === 4;

          return (
            <div
              key={item.id}
              onClick={() => setSelectedEvent(item)}
              className={`glass-panel-gold rounded-2xl p-6 sm:p-7 cursor-pointer group transition-all duration-300 hover:-translate-y-1.5 relative overflow-hidden flex flex-col justify-between border border-gold-antique/20 hover:border-gold-antique/60 ${
                isLarge ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Background Chiaroscuro Texture Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.visualStyle} opacity-30 group-hover:opacity-50 transition-opacity pointer-events-none`}
              />

              <div className="relative z-10">
                {/* Top Badge & Action Arrow */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[10px] tracking-[0.2em] px-2.5 py-0.5 rounded-full bg-surface border border-gold-antique/30 text-gold-pale uppercase">
                    {item.tag}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-surface border border-white/10 flex items-center justify-center text-starlight-400 group-hover:text-void group-hover:bg-gold-bright transition-all">
                    <ArrowUpRight size={15} />
                  </div>
                </div>

                {/* Paradox Axiom */}
                <div className="font-serif italic text-xs text-gold-pale mb-1.5">
                  "{item.paradox}"
                </div>

                {/* Card Title */}
                <h3 className="font-cinzel font-bold text-xl sm:text-2xl text-white group-hover:text-gold-bright transition-colors uppercase tracking-wide">
                  {item.title}
                </h3>

                <p className="font-sans text-xs text-starlight-400 mt-2.5 line-clamp-3 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              {/* Bottom Card Meta */}
              <div className="relative z-10 mt-6 pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs">
                <div>
                  <span className="text-[10px] text-starlight-500 block uppercase tracking-wider">PRIZE BOUNTY</span>
                  <span className="text-white font-bold text-sm tracking-wide font-cinzel text-gradient-gold">
                    {item.bounty}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-starlight-500 block uppercase tracking-wider">CREW SPEC</span>
                  <span className="text-starlight-300 text-[11px]">{item.team}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Slide-over Specification Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-void/85 backdrop-blur-2xl animate-fade-in">
          <div className="glass-panel-gold border border-gold/40 rounded-3xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto relative shadow-2xl">
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-surface border border-white/15 hover:border-gold flex items-center justify-center text-white transition-colors"
            >
              <X size={17} />
            </button>

            <span className="font-mono text-xs text-gold uppercase tracking-[0.2em] block mb-1">
              [ SPECIFICATION DOSSIER // MPSTME ]
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
              <div className="p-3.5 rounded-xl bg-surface border border-gold-antique/25">
                <span className="text-starlight-500 text-[10px] block uppercase tracking-wider">BOUNTY</span>
                <span className="text-gold-bright font-bold text-sm font-cinzel">{selectedEvent.bounty}</span>
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
                <Trophy size={14} className="text-gold" />
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
                    <span className="text-gold font-bold">{round.date}</span>
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
                <span>MINT DELEGATE PASS FOR THIS ARENA</span>
                <ArrowUpRight size={15} />
              </button>
              <button
                onClick={() => setSelectedEvent(null)}
                className="py-3 px-6 rounded-xl font-mono text-xs border border-white/15 text-starlight-300 hover:text-white"
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
