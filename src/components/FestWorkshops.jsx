import React, { useState } from 'react';
import { ArrowUpRight, Check, Clock, Code, Cpu, MapPin, Terminal, Users } from 'lucide-react';
import HilbertsHotel from './HilbertsHotel';

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
    seats: 'Capacity: ℵ₀ (Infinite)',
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
    seats: 'Capacity: ℵ₀ (Infinite)',
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
    seats: 'Capacity: ℵ₀ (Infinite)',
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
    seats: 'Capacity: ℵ₀ (Infinite)',
    prerequisites: 'JavaScript knowledge and familiarity with vector math.',
    topics: ['Raymarching & Signed Distance Functions', 'Post-processing Chromatic Dispersion', 'Procedural Nebula Particle Synthesis'],
  },
];

export default function FestWorkshops({ onRegisterPass }) {
  const [reservedSeats, setReservedSeats] = useState({});

  const handleReserve = (id) => {
    setReservedSeats((prev) => ({ ...prev, [id]: true }));
    if (onRegisterPass) {
      onRegisterPass();
    }
  };

  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <span className="font-mono text-xs text-[#EA580C] uppercase tracking-[0.25em] block mb-2 font-bold">
            [ 04 // TECHNICAL MASTERCLASSES ]
          </span>
          <h2 className="font-cinzel font-black text-3xl sm:text-5xl text-white tracking-wide uppercase">
            Technical <span className="text-gradient-gold">Masterclasses</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-starlight-400 mt-2 max-w-xl font-light leading-relaxed">
            Intensive 3-hour deep-dives mentored by leading researchers and engineers. Governed by the Hilbert Hotel capacity paradox: even when all slots are taken, infinite capacity accommodates every curious mind.
          </p>
        </div>
      </div>

      {/* HILBERT'S HOTEL INTERACTIVE PARADOX REGISTRY */}
      <HilbertsHotel onRegisterPass={onRegisterPass} />

      {/* CURRICULUM TRACKS */}
      <div className="mt-12">
        <div className="flex items-center justify-between mb-6">
          <span className="font-mono text-xs text-[#EA580C] uppercase tracking-wider font-semibold">
            CURRICULUM SPECIFICATIONS & SYLLABI
          </span>
          <span className="font-mono text-[11px] text-starlight-500">
            4 SPECIALIZED TRACKS
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {WORKSHOPS.map((ws) => {
            const isReserved = reservedSeats[ws.id];
            return (
              <div
                key={ws.id}
                className="bg-[#090C14] p-6 sm:p-7 rounded-2xl flex flex-col justify-between border border-[#222736] hover:border-[#EA580C]/40 transition-colors shadow-lg"
              >
                <div>
                  {/* Timing & Venue */}
                  <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs text-starlight-400 mb-3 pb-3 border-b border-white/5">
                    <div className="flex items-center space-x-2 text-[#EA580C] font-semibold">
                      <Clock size={13} />
                      <span>{ws.date} • {ws.time}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-starlight-400">
                      <MapPin size={12} className="text-[#EA580C]" />
                      <span>{ws.venue}</span>
                    </div>
                  </div>

                  <h3 className="font-cinzel font-bold text-xl sm:text-2xl text-white mt-1">
                    {ws.title}
                  </h3>
                  <p className="font-serif italic text-sm text-[#FB923C] mt-0.5">
                    "{ws.subtitle}"
                  </p>

                  {/* Mentor Info */}
                  <div className="mt-4 p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between text-xs font-mono">
                    <div>
                      <span className="text-white font-bold block">{ws.mentor}</span>
                      <span className="text-starlight-400 text-[11px] block">{ws.role}</span>
                    </div>
                    <span className="text-[#EA580C] text-[11px] font-semibold">{ws.seats}</span>
                  </div>

                  {/* Topics Covered */}
                  <div className="mt-4 space-y-1.5 font-sans text-xs text-starlight-300">
                    <span className="font-mono text-[10px] text-starlight-500 block uppercase tracking-wider">
                      MODULE CURRICULUM
                    </span>
                    {ws.topics.map((t, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C]" />
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Reservation Button */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="font-mono text-[10px] text-starlight-500 max-w-[200px] truncate">
                    REQ: {ws.prerequisites}
                  </span>

                  <button
                    onClick={() => handleReserve(ws.id)}
                    className={`px-4 py-2 rounded-xl font-mono text-xs font-bold transition-all flex items-center space-x-1.5 ${isReserved
                        ? 'bg-[#EA580C]/20 border border-[#EA580C] text-[#FB923C]'
                        : 'bg-[#EA580C] hover:bg-[#F97316] text-white shadow-md'
                      }`}
                  >
                    {isReserved ? (
                      <>
                        <Check size={13} />
                        <span>SEAT ALLOCATED</span>
                      </>
                    ) : (
                      <>
                        <span>CLAIM SYLLABUS PASS</span>
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
    </div>
  );
}

