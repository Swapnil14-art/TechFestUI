import React, { useState, useRef } from 'react';
import { Check, Copy, RefreshCw, ShieldCheck, Sparkles } from 'lucide-react';

export default function HolographicPassGenerator() {
  const [name, setName] = useState('JOSEPH COOPER');
  const [college, setCollege] = useState('NMIMS SHIRPUR // MPSTME');
  const [track, setTrack] = useState('The Singularity Hackathon');
  const [quantumState, setQuantumState] = useState(false); // false = Physical Verified, true = Quantum Superposition
  const [passId, setPassId] = useState('ANOMALY-2026-7491');
  const [copied, setCopied] = useState(false);

  const cardRef = useRef(null);
  const [cardTilt, setCardTilt] = useState({ x: 0, y: 0, glareX: 50, glareY: 50 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = -((y - centerY) / centerY) * 12;
    const rotY = ((x - centerX) / centerX) * 12;
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setCardTilt({ x: rotX, y: rotY, glareX, glareY });
  };

  const handleMouseLeave = () => {
    setCardTilt({ x: 0, y: 0, glareX: 50, glareY: 50 });
  };

  const regenerateId = () => {
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    setPassId(`ANOMALY-2026-${randomNum}`);
  };

  const copyPassId = () => {
    navigator.clipboard.writeText(passId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      {/* Configuration Form */}
      <div className="lg:col-span-5 space-y-5">
        <div>
          <span className="font-mono text-xs text-indigo-light uppercase tracking-[0.2em] block mb-1">
            [ DELEGATE MISSION CLEARANCE ]
          </span>
          <h3 className="font-cinzel font-black text-2xl sm:text-3xl text-white uppercase tracking-wider">
            Mint Your <span className="font-serif italic font-normal text-indigo-accent">Schrödinger Pass</span>
          </h3>
          <p className="text-xs text-starlight-400 mt-2 leading-relaxed font-light">
            Every pass coexists in two simultaneous states: verified physical clearance and quantum encrypted superposition. Enter your details to generate your digital badge.
          </p>
        </div>

        <div className="space-y-4 font-mono text-xs">
          <div>
            <label className="text-starlight-300 block mb-1.5 uppercase tracking-wider text-[11px]">DELEGATE NAME</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value.toUpperCase())}
              maxLength={26}
              className="w-full px-4 py-2.5 rounded-xl bg-surface border border-white/10 text-white focus:outline-none focus:border-indigo-light transition-colors"
              placeholder="YOUR FULL NAME"
            />
          </div>

          <div>
            <label className="text-starlight-300 block mb-1.5 uppercase tracking-wider text-[11px]">AFFILIATED INSTITUTION</label>
            <input
              type="text"
              value={college}
              onChange={(e) => setCollege(e.target.value.toUpperCase())}
              maxLength={36}
              className="w-full px-4 py-2.5 rounded-xl bg-surface border border-white/10 text-white focus:outline-none focus:border-indigo-light transition-colors"
              placeholder="COLLEGE / UNIVERSITY"
            />
          </div>

          <div>
            <label className="text-starlight-300 block mb-1.5 uppercase tracking-wider text-[11px]">PRIMARY MISSION TRACK</label>
            <select
              value={track}
              onChange={(e) => setTrack(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-surface border border-white/10 text-white focus:outline-none focus:border-indigo-light transition-colors"
            >
              <option value="The Singularity Hackathon">The Singularity Hackathon (36-Hour)</option>
              <option value="Cyber-Classical Robotics">Cyber-Classical Robotics Arena</option>
              <option value="Non-Euclidean Creative Lab">Non-Euclidean Creative Lab & Shaders</option>
              <option value="Schrödinger's Cryptographic CTF">Schrödinger's Cryptographic CTF</option>
              <option value="Quantum League Esports">Quantum League: Valorant & BGMI</option>
            </select>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap gap-3 pt-2">
          <button
            onClick={() => setQuantumState(!quantumState)}
            className="px-4 py-2.5 rounded-xl font-mono text-xs font-bold bg-starlight-200 hover:bg-white text-void flex items-center space-x-2 transition-all shadow-lg"
          >
            <RefreshCw size={13} className={quantumState ? 'animate-spin' : ''} />
            <span>FLIP REALITY STATE</span>
          </button>

          <button
            onClick={regenerateId}
            className="px-4 py-2.5 rounded-xl font-mono text-xs border border-white/15 text-starlight-300 hover:border-indigo-light hover:text-white transition-colors"
          >
            NEW HASH
          </button>
        </div>
      </div>

      {/* 3D Holographic Card Display */}
      <div className="lg:col-span-7 flex flex-col items-center justify-center">
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: `perspective(1000px) rotateX(${cardTilt.x}deg) rotateY(${cardTilt.y}deg)`,
            transition: 'transform 0.1s ease-out',
          }}
          className={`w-full max-w-sm sm:max-w-md aspect-[1.6/1] rounded-2xl relative p-6 sm:p-8 overflow-hidden select-none cursor-pointer transition-all ${
            quantumState
              ? 'bg-gradient-to-br from-[#060911] via-[#1E1B4B] to-[#030508] border border-violet-glow shadow-2xl shadow-violet-glow/20'
              : 'bg-gradient-to-br from-[#0B0F19] via-[#111827] to-[#04060A] border border-indigo-light/50 shadow-2xl shadow-indigo-light/15'
          }`}
        >
          {/* Hologram Light Glare Overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(circle at ${cardTilt.glareX}% ${cardTilt.glareY}%, rgba(255, 255, 255, 0.18) 0%, rgba(99, 102, 241, 0.12) 35%, transparent 65%)`,
            }}
          />

          {/* Card Noise / Shimmer */}
          <div className="absolute inset-0 hologram-shimmer opacity-25 pointer-events-none" />

          {/* Top Bar of Pass */}
          <div className="flex justify-between items-start relative z-10">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-void/90 border border-white/20 flex items-center justify-center font-cinzel font-black text-white text-base">
                ∞
              </div>
              <div>
                <span className="font-cinzel font-black text-xs sm:text-sm tracking-wider text-white block">
                  NMIMS SHIRPUR
                </span>
                <span className="font-mono text-[9px] text-starlight-500 tracking-widest block uppercase">
                  TECH FIESTA 2026
                </span>
              </div>
            </div>

            <div className="flex flex-col items-end">
              <span
                className={`font-mono text-[9px] px-2 py-0.5 rounded uppercase font-bold tracking-widest ${
                  quantumState ? 'bg-violet-glow text-white' : 'bg-indigo-light text-void'
                }`}
              >
                {quantumState ? 'SUPERPOSITION' : 'VERIFIED CLEARANCE'}
              </span>
              <span className="font-mono text-[10px] text-starlight-400 mt-1">{passId}</span>
            </div>
          </div>

          {/* Middle Body */}
          <div className="mt-6 sm:mt-8 relative z-10">
            <div className="font-mono text-[9px] text-starlight-500 uppercase tracking-widest">
              DELEGATE OPERATOR
            </div>
            <div className="font-cinzel font-black text-2xl sm:text-3xl text-white tracking-wide truncate mt-0.5">
              {name || 'ANONYMOUS WITNESS'}
            </div>
            <div className="font-mono text-xs text-indigo-accent mt-1 truncate">
              {college || 'COSMIC OBSERVER'}
            </div>
          </div>

          {/* Bottom Row */}
          <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 flex justify-between items-end z-10 border-t border-white/10 pt-3">
            <div>
              <span className="font-mono text-[9px] text-starlight-500 block uppercase">MISSION CLEARANCE</span>
              <span className="font-mono text-[11px] text-starlight-200 font-semibold truncate max-w-[220px] block">
                {track}
              </span>
            </div>

            {/* Futuristic Interstellar Barcode */}
            <div className="flex flex-col items-end">
              <div className="flex space-x-1 h-5 items-end">
                {[4, 8, 12, 6, 14, 10, 16, 5, 11, 7, 15, 9].map((h, i) => (
                  <span
                    key={i}
                    style={{ height: `${h}px` }}
                    className={`w-0.5 ${
                      quantumState ? 'bg-violet-subtle' : 'bg-indigo-light'
                    } transition-all`}
                  />
                ))}
              </div>
              <span className="font-mono text-[8px] text-starlight-500 tracking-wider mt-1">
                20.8845°N 74.8940°E
              </span>
            </div>
          </div>
        </div>

        {/* Quick Helper below pass */}
        <div className="mt-4 flex items-center space-x-4 font-mono text-xs text-starlight-400">
          <button
            onClick={copyPassId}
            className="flex items-center space-x-1.5 hover:text-white transition-colors"
          >
            {copied ? <Check size={13} className="text-indigo-light" /> : <Copy size={13} />}
            <span>{copied ? 'HASH COPIED' : 'COPY PASS HASH'}</span>
          </button>
          <span>•</span>
          <span className="text-starlight-500 text-[11px]">Tilt device / move cursor to preview glare</span>
        </div>
      </div>
    </div>
  );
}
