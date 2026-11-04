import React, { useState } from 'react';
import { ArrowUpRight, Check, Clock, Code, Cpu, MapPin, Terminal, Users } from 'lucide-react';

const WORKSHOPS = [
  {
    id: 'ws-1',
    title: 'Autonomous Agent Orchestration',
    subtitle: 'Building Self-Refining Multi-LLM Swarms',
    mentor: 'Dr. Evelyn Vance',
    role: 'Staff AI Researcher, Autonomous Systems',
    date: 'MAR 10, 2026',
    time: '10:00 AM — 01:00 PM',
    venue: 'Computing Lab 402, MPSTME',
    seats: '60 Seats Available',
    prerequisites: 'Python 3.10+, basic understanding of LangChain or OpenAI function calling.',
    topics: ['Recursive Agent Memory Chains', 'Adversarial Prompt Guardrails', 'Subagent Message Broker Architecture'],
  },
  {
    id: 'ws-2',
    title: 'Post-Quantum Zero-Knowledge Proofs',
    subtitle: 'Cryptographic Privacy in Untrusted Networks',
    mentor: 'Kiran Deshmukh',
    role: 'Principal Cryptographer, ZeroK Labs',
    date: 'MAR 10, 2026',
    time: '02:00 PM — 05:00 PM',
    venue: 'Seminar Hall 1, Main Block',
    seats: '80 Seats Available',
    prerequisites: 'Familiarity with discrete mathematics and basic Rust or C++.',
    topics: ['Lattice-based Ring Signatures', 'zk-SNARK vs zk-STARK Implementations', 'Verifiable Off-chain State Verification'],
  },
  {
    id: 'ws-3',
    title: 'Micro-Kinematics & ROS2 Telemetry',
    subtitle: 'Hardware Autonomous Navigation Under Sensor Noise',
    mentor: 'Prof. Raghavan Nair',
    role: 'Director, Advanced Robotics Initiative',
    date: 'MAR 11, 2026',
    time: '11:00 AM — 02:00 PM',
    venue: 'Robotics Fabrication Lab',
    seats: '45 Seats Available',
    prerequisites: 'C++ or Python, basic mechanics of micro-controllers.',
    topics: ['LiDAR Point-cloud Fusion', 'Kalman Filtering in Real-time', 'Motor Driver Telemetry & Trajectory Planning'],
  },
  {
    id: 'ws-4',
    title: 'GLSL Shaders & Spatial 3D WebGL',
    subtitle: 'Rendering Non-Euclidean Worlds in the Browser',
    mentor: 'Anya Chen',
    role: 'Creative Technologist & 3D Director',
    date: 'MAR 11, 2026',
    time: '03:00 PM — 06:00 PM',
    venue: 'Media Studio A, Design Wing',
    seats: '50 Seats Available',
    prerequisites: 'JavaScript knowledge and familiarity with vector math.',
    topics: ['Raymarching & Signed Distance Functions', 'Post-processing Chromatic Dispersion', 'Procedural Nebula Particle Synthesis'],
  },
];

export default function FestWorkshops({ onRegisterPass }) {
  const [reservedSeats, setReservedSeats] = useState({});

  const handleReserve = (id) => {
    setReservedSeats((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <span className="font-mono text-xs text-cyan uppercase tracking-widest block mb-2">
            [ HANDS-ON MASTERCLASSES ]
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
            Technical <span className="text-gradient-cosmic">Masterclasses</span>
          </h2>
        </div>
        <p className="font-sans text-xs sm:text-sm text-gray-400 max-w-md leading-relaxed">
          Intensive 3-hour deep-dives mentored by leading researchers and engineers. Strictly limited seating to ensure deep hands-on engagement.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {WORKSHOPS.map((ws) => {
          const isReserved = reservedSeats[ws.id];
          return (
            <div
              key={ws.id}
              className="glass-panel p-6 sm:p-7 rounded-2xl flex flex-col justify-between border border-white/10 hover:border-violet/40 transition-colors"
            >
              <div>
                {/* Timing & Venue */}
                <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs text-gray-400 mb-3 pb-3 border-b border-white/10">
                  <div className="flex items-center space-x-2 text-rose font-bold">
                    <Clock size={13} />
                    <span>{ws.date} • {ws.time}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-400">
                    <MapPin size={12} className="text-cyan" />
                    <span>{ws.venue}</span>
                  </div>
                </div>

                <h3 className="font-display font-black text-xl sm:text-2xl text-white mt-1">
                  {ws.title}
                </h3>
                <p className="font-serif italic text-sm text-cyan mt-0.5">
                  "{ws.subtitle}"
                </p>

                {/* Mentor Info */}
                <div className="mt-4 p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between text-xs font-mono">
                  <div>
                    <span className="text-white font-bold block">{ws.mentor}</span>
                    <span className="text-gray-400 text-[11px] block">{ws.role}</span>
                  </div>
                  <span className="text-rose text-[11px]">{ws.seats}</span>
                </div>

                {/* Topics Covered */}
                <div className="mt-4 space-y-1.5 font-sans text-xs text-gray-300">
                  <span className="font-mono text-[10px] text-gray-500 block uppercase tracking-wider">
                    MODULE CURRICULUM
                  </span>
                  {ws.topics.map((t, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Reservation Button */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="font-mono text-[10px] text-gray-500 max-w-[200px] truncate">
                  REQ: {ws.prerequisites}
                </span>

                <button
                  onClick={() => handleReserve(ws.id)}
                  className={`px-4 py-2 rounded-xl font-mono text-xs font-bold transition-all flex items-center space-x-1.5 ${
                    isReserved
                      ? 'bg-cyan/20 border border-cyan text-cyan'
                      : 'bg-white hover:bg-violet text-void hover:text-white shadow-md'
                  }`}
                >
                  {isReserved ? (
                    <>
                      <Check size={13} />
                      <span>SEAT RESERVED</span>
                    </>
                  ) : (
                    <>
                      <span>RESERVE SEAT</span>
                      <ArrowUpRight size={13} />
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

