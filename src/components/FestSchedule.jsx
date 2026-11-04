import React, { useState } from 'react';
import { Clock, MapPin, Orbit, Sparkles, Trophy } from 'lucide-react';

const ORBITAL_DAYS = {
  day1: {
    orbitNum: '01',
    label: 'DAY 01',
    date: 'MARCH 10, 2026',
    theme: 'The Inception // Genesis of the Anomaly',
    orbitalAngle: '0° HORIZON',
    events: [
      { time: '09:00 AM — 10:30 AM', title: 'Grand Inauguration & Keynote on Relativistic Computing', venue: 'Main Amphitheatre', tag: 'CEREMONY' },
      { time: '11:00 AM — 02:00 PM', title: 'Technical Masterclasses (Track A & B)', venue: 'Computing Labs 401 & 402', tag: 'WORKSHOPS' },
      { time: '03:00 PM — 04:30 PM', title: 'The Singularity Hackathon: Problem Statements Drop', venue: 'Central Auditorium', tag: 'HACKATHON' },
      { time: '05:00 PM — 07:30 PM', title: 'Creative Non-Euclidean Design Exhibition', venue: 'Design Wing Gallery', tag: 'EXHIBITION' },
      { time: '08:00 PM — 10:00 PM', title: 'Night Astronomy & Celestial Observation', venue: 'Campus Observatory Deck', tag: 'EXPERIENCE' },
    ],
  },
  day2: {
    orbitNum: '02',
    label: 'DAY 02',
    date: 'MARCH 11, 2026',
    theme: 'The Collision // 36-Hour Hackathon Commences',
    orbitalAngle: '90° HORIZON',
    events: [
      { time: '09:00 AM', title: 'The Singularity 36-Hour Hackathon Clocks Start', venue: 'MPSTME Innovation Hall', tag: 'HACKATHON' },
      { time: '10:30 AM — 01:30 PM', title: 'Cyber-Classical Robotics: Obstacle Gauntlet Trials', venue: 'Indoor Arena A', tag: 'ROBOTICS' },
      { time: '02:00 PM — 05:00 PM', title: 'Quantum League: Valorant Collegiate Semifinals', venue: 'Esports Amphitheatre', tag: 'ESPORTS' },
      { time: '06:00 PM — 09:00 PM', title: 'Schrödinger’s Cryptographic CTF Phase 1', venue: 'Cyber Defense Lab 204', tag: 'SECURITY' },
      { time: '11:00 PM', title: 'Midnight Mentor Scrum & Lightning Checkpoint', venue: 'Hackathon Bay', tag: 'MENTORSHIP' },
    ],
  },
  day3: {
    orbitNum: '03',
    label: 'DAY 03',
    date: 'MARCH 12, 2026',
    theme: 'The Event Horizon // Deep Sprint & Arenas',
    orbitalAngle: '180° HORIZON',
    events: [
      { time: '08:00 AM — 12:00 PM', title: 'Autonomous Drone Swarm Navigation Finals', venue: 'Open Sports Complex', tag: 'ROBOTICS' },
      { time: '01:00 PM — 04:00 PM', title: 'Quantum League: BGMI Grand Finals LAN', venue: 'Main Amphitheatre', tag: 'ESPORTS' },
      { time: '04:30 PM — 07:00 PM', title: 'Generative AI Prompt Duel: Adversarial Showdown', venue: 'Seminar Hall 3', tag: 'AI DERBY' },
      { time: '09:00 PM', title: 'The Singularity Hackathon Code Freeze', venue: 'Innovation Hall', tag: 'HACKATHON' },
      { time: '09:30 PM — 11:30 PM', title: 'Campus Starlight EDM & Ambient Sound Stage', venue: 'Central Quadrangle', tag: 'CULTURE' },
    ],
  },
  day4: {
    orbitNum: '04',
    label: 'DAY 04',
    date: 'MARCH 13, 2026',
    theme: 'The Convergence // Verdict & Valedictory',
    orbitalAngle: '270° HORIZON',
    events: [
      { time: '09:30 AM — 01:00 PM', title: 'Top 10 Hackathon Finalists Grand Jury Pitches', venue: 'Central Auditorium', tag: 'FINALS' },
      { time: '02:00 PM — 04:00 PM', title: 'Exhibition of Autonomous Systems & Awards Jury', venue: 'Campus Foyer', tag: 'EXPO' },
      { time: '05:00 PM — 07:30 PM', title: 'Grand Valedictory Ceremony & ₹5,00,000+ Prize Dispersal', venue: 'Main Amphitheatre', tag: 'VALEDICTORY' },
      { time: '08:00 PM — 09:30 PM', title: 'Drone Light Choreography & Temporal Aftermovie Reveal', venue: 'Campus Grounds', tag: 'FINALE' },
    ],
  },
};

export default function FestSchedule() {
  const [activeDay, setActiveDay] = useState('day1');

  const current = ORBITAL_DAYS[activeDay];

  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <span className="font-mono text-xs text-gold-antique uppercase tracking-[0.2em] block mb-2">
            [ SECTION 04 // ORBITAL TIMELINE ]
          </span>
          <h2 className="font-cinzel font-black text-3xl sm:text-5xl text-white tracking-wide uppercase">
            Spacetime <span className="text-gradient-gold">Schedule</span>
          </h2>
        </div>

        {/* Orbit Day Selection Markers */}
        <div className="flex flex-wrap gap-2.5 font-mono text-xs">
          {Object.keys(ORBITAL_DAYS).map((key) => {
            const day = ORBITAL_DAYS[key];
            const isSelected = activeDay === key;
            return (
              <button
                key={key}
                onClick={() => setActiveDay(key)}
                className={`px-4 py-2 rounded-xl transition-all flex items-center space-x-2 border ${
                  isSelected
                    ? 'bg-gradient-to-r from-gold-pale via-gold to-gold-bronze text-void font-bold shadow-lg shadow-gold/25 border-gold-bright'
                    : 'glass-panel text-starlight-400 hover:text-white border-white/10 hover:border-gold-antique/40'
                }`}
              >
                <span className="text-[10px] font-mono tracking-widest">{day.orbitNum}.</span>
                <span>{day.label}</span>
                <span className="hidden sm:inline text-[10px] opacity-70 font-sans">
                  ({day.date.split(',')[0]})
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Orbital Path & Event Presentation Card */}
      <div className="glass-panel-gold p-6 sm:p-9 rounded-3xl border border-gold-antique/25 shadow-2xl relative overflow-hidden">
        {/* Orbital Trajectory Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-white/10 gap-3 font-mono text-xs">
          <div>
            <div className="flex items-center space-x-2 text-gold-bright mb-1">
              <Orbit size={14} className="animate-spin-slow" />
              <span className="font-bold tracking-widest uppercase">
                TRAJECTORY {current.orbitalAngle} • {current.date}
              </span>
            </div>
            <span className="text-starlight-300 font-serif italic text-base block font-light">
              "{current.theme}"
            </span>
          </div>

          <div className="text-left sm:text-right">
            <span className="text-starlight-500 text-[10px] block uppercase tracking-wider">
              CENTRAL ANCHOR
            </span>
            <span className="text-starlight-200 font-semibold">
              NMIMS SHIRPUR MPSTME CAMPUS
            </span>
          </div>
        </div>

        {/* Timeline Events Stack */}
        <div className="space-y-4 font-mono text-xs">
          {current.events.map((ev, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-surface/75 hover:bg-surface border border-white/5 hover:border-gold-antique/30 transition-all flex flex-col md:flex-row justify-between md:items-center gap-3 group"
            >
              <div className="flex items-center space-x-4">
                {/* Node Pill */}
                <div className="w-8 h-8 rounded-full bg-void border border-gold-antique/40 flex items-center justify-center font-bold text-gold text-xs flex-shrink-0 group-hover:scale-110 group-hover:border-gold transition-all">
                  {idx + 1}
                </div>

                <div>
                  <div className="flex items-center space-x-2.5 mb-1">
                    <span className="text-[9px] px-2.5 py-0.5 rounded-full bg-gold-bronze/30 border border-gold-antique/30 text-gold-pale uppercase font-bold tracking-wider">
                      {ev.tag}
                    </span>
                    <span className="text-starlight-500 text-[11px] flex items-center space-x-1">
                      <Clock size={11} className="text-gold" />
                      <span>{ev.time}</span>
                    </span>
                  </div>

                  <h4 className="font-cinzel font-bold text-base sm:text-lg text-white group-hover:text-gold-bright transition-colors uppercase tracking-wide">
                    {ev.title}
                  </h4>
                </div>
              </div>

              {/* Venue Marker */}
              <div className="flex items-center space-x-1.5 text-starlight-400 text-xs pl-12 md:pl-0 flex-shrink-0">
                <MapPin size={13} className="text-gold-antique" />
                <span className="font-sans">{ev.venue}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
