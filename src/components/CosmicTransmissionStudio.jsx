import React, { useState, useRef } from 'react';
import { Check, Copy, Download, RefreshCw, ShieldCheck, Sparkles, UserCheck } from 'lucide-react';

/**
 * Cosmic Transmission Studio — Delegate Pass Creation Feature
 * Full interactive functionality:
 * - Inputs for Delegate Name, Affiliation, Track Selection, Clearance Hash
 * - Validation & instant live update
 * - 3D Tilt perspective with dynamic gold light glare
 * - Dual State switch: Verified Physical Clearance vs Quantum Superposition Mode
 * - Functional Copy Pass ID & Download Badge Image via off-screen HTML5 Canvas
 */
export default function CosmicTransmissionStudio() {
  const [name, setName] = useState('JOSEPH COOPER');
  const [college, setCollege] = useState('NMIMS SHIRPUR // MPSTME');
  const [track, setTrack] = useState('The Singularity Hackathon');
  const [quantumState, setQuantumState] = useState(false); // false = Physical Verified, true = Quantum Superposition
  const [passId, setPassId] = useState('ANOMALY-2026-7491');
  const [copied, setCopied] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

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

  // Real Canvas-based Badge PNG Downloader
  const downloadBadge = () => {
    setIsDownloading(true);
    const canvas = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 750;
    const ctx = canvas.getContext('2d');

    // Background gradient
    const bgGrad = ctx.createLinearGradient(0, 0, 1200, 750);
    if (quantumState) {
      bgGrad.addColorStop(0, '#04060C');
      bgGrad.addColorStop(0.5, '#1E1B4B');
      bgGrad.addColorStop(1, '#020408');
    } else {
      bgGrad.addColorStop(0, '#0B0F19');
      bgGrad.addColorStop(0.5, '#161F33');
      bgGrad.addColorStop(1, '#04060A');
    }
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, 1200, 750);

    // Border
    ctx.strokeStyle = quantumState ? '#8B5CF6' : '#D4AF37';
    ctx.lineWidth = 6;
    ctx.strokeRect(30, 30, 1140, 690);

    // Header Logo & Branding
    ctx.font = 'bold 38px Cinzel, serif';
    ctx.fillStyle = '#FFFFFF';
    ctx.fillText('NMIMS SHIRPUR // MPSTME', 70, 100);

    ctx.font = '22px JetBrains Mono, monospace';
    ctx.fillStyle = quantumState ? '#A78BFA' : '#D4AF37';
    ctx.fillText(`ANNUAL TECH FIESTA 2026 • ${quantumState ? 'SUPERPOSITION TIER' : 'VERIFIED CLEARANCE'}`, 70, 140);

    // Pass ID on top right
    ctx.textAlign = 'right';
    ctx.font = 'bold 26px JetBrains Mono, monospace';
    ctx.fillStyle = '#E2E8F0';
    ctx.fillText(passId, 1130, 100);
    ctx.textAlign = 'left';

    // Delegate Name
    ctx.font = '20px JetBrains Mono, monospace';
    ctx.fillStyle = '#94A3B8';
    ctx.fillText('DELEGATE OPERATOR', 70, 290);

    ctx.font = 'bold 64px Cinzel, serif';
    ctx.fillStyle = '#FFFFFF';
    ctx.fillText(name.toUpperCase() || 'ANONYMOUS WITNESS', 70, 370);

    ctx.font = '30px JetBrains Mono, monospace';
    ctx.fillStyle = quantumState ? '#C4B5FD' : '#FBBF24';
    ctx.fillText(college.toUpperCase() || 'COSMIC OBSERVER', 70, 430);

    // Mission Track
    ctx.font = '20px JetBrains Mono, monospace';
    ctx.fillStyle = '#94A3B8';
    ctx.fillText('MISSION CLEARANCE TRACK', 70, 560);

    ctx.font = 'bold 36px Cinzel, serif';
    ctx.fillStyle = '#FFFFFF';
    ctx.fillText(track, 70, 615);

    // Barcode Graphic & Coordinates
    ctx.textAlign = 'right';
    ctx.font = '20px JetBrains Mono, monospace';
    ctx.fillStyle = '#94A3B8';
    ctx.fillText('20.8845° N, 74.8940° E', 1130, 640);
    ctx.fillText('STATION SHIRPUR // DIMENSION 001', 1130, 670);

    // Trigger download
    const link = document.createElement('a');
    link.download = `${passId}_DELEGATE_PASS.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
    setIsDownloading(false);
  };

  return (
    <div className="w-full">
      {/* Section Heading */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <span className="font-mono text-xs text-gold uppercase tracking-[0.2em] block mb-2">
            [ SECTION 05 // CARD CREATION STUDIO ]
          </span>
          <h2 className="font-cinzel font-black text-3xl sm:text-5xl text-white tracking-wide uppercase">
            Cosmic Transmission <span className="text-gradient-gold">Studio</span>
          </h2>
        </div>
        <p className="font-sans text-xs sm:text-sm text-starlight-400 max-w-md leading-relaxed font-light">
          Generate and mint your official holographic delegate entry badge. Coexisting in dual states between physical access clearance and quantum superposition.
        </p>
      </div>

      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Refined Metallic Controls */}
        <div className="lg:col-span-5 space-y-5 glass-panel-gold p-6 sm:p-7 rounded-3xl border border-gold-antique/25 shadow-2xl">
          <div className="border-b border-white/10 pb-4">
            <span className="font-mono text-[10px] text-gold-antique uppercase tracking-[0.2em] block mb-1">
              OPERATOR CONFIGURATION
            </span>
            <h3 className="font-cinzel font-bold text-xl text-white uppercase tracking-wider">
              Badge Parameterization
            </h3>
          </div>

          <div className="space-y-4 font-mono text-xs">
            <div>
              <label className="text-starlight-300 block mb-1.5 uppercase tracking-wider text-[10px]">
                DELEGATE FULL NAME *
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value.toUpperCase())}
                maxLength={26}
                className="w-full px-4 py-2.5 rounded-xl bg-surface border border-white/15 text-white focus:outline-none focus:border-gold transition-colors"
                placeholder="YOUR FULL NAME"
              />
            </div>

            <div>
              <label className="text-starlight-300 block mb-1.5 uppercase tracking-wider text-[10px]">
                AFFILIATED INSTITUTION *
              </label>
              <input
                type="text"
                value={college}
                onChange={(e) => setCollege(e.target.value.toUpperCase())}
                maxLength={36}
                className="w-full px-4 py-2.5 rounded-xl bg-surface border border-white/15 text-white focus:outline-none focus:border-gold transition-colors"
                placeholder="COLLEGE / UNIVERSITY"
              />
            </div>

            <div>
              <label className="text-starlight-300 block mb-1.5 uppercase tracking-wider text-[10px]">
                MISSION TRACK SELECTION
              </label>
              <select
                value={track}
                onChange={(e) => setTrack(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-surface border border-white/15 text-white focus:outline-none focus:border-gold transition-colors"
              >
                <option value="The Singularity Hackathon">The Singularity Hackathon (36-Hour)</option>
                <option value="Cyber-Classical Robotics">Cyber-Classical Robotics Arena</option>
                <option value="Non-Euclidean Creative Lab">Non-Euclidean Creative Lab & Shaders</option>
                <option value="Schrödinger's Cryptographic CTF">Schrödinger's Cryptographic CTF</option>
                <option value="Quantum League Esports">Quantum League: Valorant & BGMI</option>
              </select>
            </div>
          </div>

          {/* Action Tools */}
          <div className="flex flex-wrap gap-2.5 pt-2">
            <button
              onClick={() => setQuantumState(!quantumState)}
              className="px-4 py-2.5 rounded-xl font-mono text-xs font-bold bg-gradient-to-r from-gold-pale via-gold to-amber-molten text-void flex items-center space-x-2 transition-all shadow-lg shadow-gold/20"
            >
              <RefreshCw size={13} className={quantumState ? 'animate-spin' : ''} />
              <span>FLIP REALITY STATE</span>
            </button>

            <button
              onClick={regenerateId}
              className="px-4 py-2.5 rounded-xl font-mono text-xs border border-white/15 text-starlight-300 hover:border-gold hover:text-white transition-colors"
            >
              NEW HASH
            </button>

            <button
              onClick={downloadBadge}
              disabled={isDownloading}
              className="px-4 py-2.5 rounded-xl font-mono text-xs border border-gold-antique/40 bg-gold/10 text-gold-pale hover:bg-gold hover:text-void transition-all flex items-center space-x-1.5 font-bold"
            >
              <Download size={13} />
              <span>{isDownloading ? 'RENDERING...' : 'DOWNLOAD PNG'}</span>
            </button>
          </div>
        </div>

        {/* Right: 3D Perspective Card Live Holographic Preview */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center">
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `perspective(1000px) rotateX(${cardTilt.x}deg) rotateY(${cardTilt.y}deg)`,
              transition: 'transform 0.1s ease-out',
            }}
            className={`w-full max-w-sm sm:max-w-md aspect-[1.6/1] rounded-3xl relative p-6 sm:p-8 overflow-hidden select-none cursor-pointer transition-all ${
              quantumState
                ? 'bg-gradient-to-br from-[#060911] via-[#1E1B4B] to-[#020408] border-2 border-violet-glow shadow-2xl shadow-violet-glow/25'
                : 'bg-gradient-to-br from-[#0B0F19] via-[#161F33] to-[#04060A] border-2 border-gold-antique shadow-2xl shadow-gold/20'
            }`}
          >
            {/* Hologram Light Glare Dynamic Overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `radial-gradient(circle at ${cardTilt.glareX}% ${cardTilt.glareY}%, rgba(255, 255, 255, 0.22) 0%, rgba(212, 175, 55, 0.15) 35%, transparent 65%)`,
              }}
            />

            {/* Shimmer Overlay */}
            <div className="absolute inset-0 hologram-shimmer opacity-30 pointer-events-none" />

            {/* Top Bar of Pass */}
            <div className="flex justify-between items-start relative z-10">
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-lg bg-void/90 border border-gold-antique/40 flex items-center justify-center font-cinzel font-black text-white text-base">
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
                  className={`font-mono text-[9px] px-2 py-0.5 rounded-full uppercase font-bold tracking-widest ${
                    quantumState ? 'bg-violet-glow text-white' : 'bg-gold-bright text-void'
                  }`}
                >
                  {quantumState ? 'SUPERPOSITION' : 'VERIFIED TIER'}
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
              <div className="font-mono text-xs text-gold-bright mt-1 truncate">
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

              {/* Barcode Graphic */}
              <div className="flex flex-col items-end">
                <div className="flex space-x-1 h-5 items-end">
                  {[4, 8, 12, 6, 14, 10, 16, 5, 11, 7, 15, 9].map((h, i) => (
                    <span
                      key={i}
                      style={{ height: `${h}px` }}
                      className={`w-0.5 ${
                        quantumState ? 'bg-violet-subtle' : 'bg-gold-bright'
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
              className="flex items-center space-x-1.5 hover:text-white transition-colors cursor-pointer"
            >
              {copied ? <Check size={13} className="text-gold" /> : <Copy size={13} />}
              <span>{copied ? 'HASH COPIED' : 'COPY PASS HASH'}</span>
            </button>
            <span>•</span>
            <span className="text-starlight-500 text-[11px]">Hover or tilt device to preview gold glare</span>
          </div>
        </div>
      </div>
    </div>
  );
}
