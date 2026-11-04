import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Tag } from 'lucide-react';

const SCHEDULE = {
  day1: {
    label: 'DAY 01',
    date: 'MARCH 10, 2026',
    theme: 'The Inception // Genesis of the Anomaly',
    events: [
      { time: '09:00 AM — 10:30 AM', title: 'Grand Inauguration & Keynote', venue: 'Main Amphitheatre', tag: 'CEREMONY' },
      { time: '11:00 AM — 02:00 PM', title: 'Technical Masterclasses (Track A & B)', venue: 'Computing Labs 401 & 402', tag: 'WORKSHOPS' },
      { time: '03:00 PM — 04:30 PM', title: 'The Singularity Hackathon: Problem Statements Drop', venue: 'Central Auditorium', tag: 'HACKATHON' },
      { time: '05:00 PM — 07:30 PM', title: 'Creative Non-Euclidean Design Exhibition', venue: 'Design Wing Gallery', tag: 'EXHIBITION' },
      { time: '08:00 PM — 10:00 PM', title: 'Night Astronomy & Celestial Observation', venue: 'Campus Observatory Deck', tag: 'EXPERIENCE' },
    ],
  },
  day2: {
    label: 'DAY 02',
    date: 'MARCH 11, 2026',
    theme: 'The Collision // 36-Hour Hackathon Begins',
    events: [
      { time: '09:00 AM', title: 'The Singularity 36-Hour Hackathon Clocks Start', venue: 'MPSTME Innovation Hall', tag: 'HACKATHON' },
      { time: '10:30 AM — 01:30 PM', title: 'Cyber-Classical Robotics: Obstacle Gauntlet Trials', venue: 'Indoor Arena A', tag: 'ROBOTICS' },
      { time: '02:00 PM — 05:00 PM', title: 'Quantum League: Valorant Collegiate Semifinals', venue: 'Esports Amphitheatre', tag: 'ESPORTS' },
      { time: '06:00 PM — 09:00 PM', title: 'Schrödinger’s Cryptographic CTF Phase 1', venue: 'Cyber Defense Lab', tag: 'SECURITY' },
      { time: '11:00 PM', title: 'Midnight Mentor Scrum & Lightning Checkpoint', venue: 'Hackathon Bay', tag: 'MENTORSHIP' },
    ],
  },
  day3: {
    label: 'DAY 03',
    date: 'MARCH 12, 2026',
    theme: 'The Event Horizon // Deep Sprint & Arenas',
    events: [
      { time: '08:00 AM — 12:00 PM', title: 'Autonomous Drone Swarm Navigation Finals', venue: 'Open Sports Complex', tag: 'ROBOTICS' },
      { time: '01:00 PM — 04:00 PM', title: 'Quantum League: BGMI Grand Finals LAN', venue: 'Main Amphitheatre', tag: 'ESPORTS' },
      { time: '04:30 PM — 07:00 PM', title: 'Generative AI Prompt Duel: Adversarial Showdown', venue: 'Seminar Hall 3', tag: 'AI DERBY' },
      { time: '09:00 PM', title: 'The Singularity Hackathon Code Freeze', venue: 'Innovation Hall', tag: 'HACKATHON' },
      { time: '09:30 PM — 11:30 PM', title: 'Campus Starlight EDM & Ambient Sound Stage', venue: 'Central Quadrangle', tag: 'CULTURE' },
    ],
  },
  day4: {
    label: 'DAY 04',
    date: 'MARCH 13, 2026',
    theme: 'The Convergence // Verdict & Valedictory',
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

  const current = SCHEDULE[activeDay];

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <span className="font-mono text-xs text-rose uppercase tracking-widest block mb-2">
            [ FOUR-DAY GRAVITATIONAL TIMELINE ]
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
            Festival <span className="text-gradient-cosmic">Schedule</span>
          </h2>
        </div>

        {/* Day Switcher */}
        <div className="flex flex-wrap gap-2 font-mono text-xs">
          {Object.keys(SCHEDULE).map((key) => {
            const day = SCHEDULE[key];
            const isSelected = activeDay === key;
            return (
              <button
                key={key}
                onClick={() => setActiveDay(key)}
                className={`px-4 py-2 rounded-xl transition-all ${
                  isSelected
                    ? 'bg-white text-void font-bold shadow-lg'
                    : 'glass-panel text-gray-400 hover:text-white border border-white/5'
                }`}
              >
                <span>{day.label}</span>
                <span className="hidden sm:inline text-[10px] ml-1.5 opacity-60">
                  ({day.date.split(',')[0]})
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Day Content */}
      <div className="glass-panel-glow p-6 sm:p-8 rounded-3xl border border-white/10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-white/10 gap-2 font-mono text-xs">
          <div>
            <span className="text-rose font-bold text-sm block">{current.date}</span>
            <span className="text-gray-400 font-serif italic text-base mt-0.5 block">
              "{current.theme}"
            </span>
          </div>
          <span className="text-cyan px-3 py-1 rounded bg-cyan/10 border border-cyan/20 w-fit">
            NMIMS SHIRPUR CAMPUS
          </span>
        </div>

        {/* Schedule List */}
        <div className="space-y-4 font-mono text-xs">
          {current.events.map((ev, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-colors flex flex-col md:flex-row justify-between md:items-center gap-3"
            >
              <div className="flex items-center space-x-4">
                <span className="w-1.5 h-8 bg-violet rounded-full hidden sm:block" />
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-[10px] px-2 py-0.5 rounded bg-white/10 text-gray-300 font-bold uppercase">
                      {ev.tag}
                    </span>
                    <span className="text-gray-400 text-[11px]">{ev.time}</span>
                  </div>
                  <h4 className="font-display font-bold text-base text-white">
                    {ev.title}
                  </h4>
                </div>
              </div>

              <div className="flex items-center space-x-2 text-gray-400 text-xs pl-0 sm:pl-4 md:pl-0">
                <MapPin size={13} className="text-cyan flex-shrink-0" />
                <span className="truncate">{ev.venue}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

