import React, { useState, useEffect, useRef } from 'react';
import { Compass, Eye, Layers, Orbit, Sparkles, Wand2 } from 'lucide-react';

/**
 * The Reality Engine — Signature Interactive Paradox Feature
 * Three Selectable States:
 * 1. Gravity: Particles orbit, background bends, and surrounding elements curve toward the object.
 * 2. Reflection: A landscape and its mirrored counterpart move in opposing directions.
 * 3. Dimensions: Geometric layers separate to reveal a smaller golden world inside a larger one.
 */
export default function RealityEngine() {
  const [engineState, setEngineState] = useState('gravity'); // 'gravity' | 'reflection' | 'dimensions'
  const [warpIntensity, setWarpIntensity] = useState(65); // 10 to 100
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 300, y: 220, isHovered: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    let width = (canvas.width = canvas.parentElement.clientWidth || 700);
    let height = (canvas.height = 440);

    const onResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = 440;
    };
    window.addEventListener('resize', onResize);

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.isHovered = true;
    };
    const onMouseLeave = () => {
      mouseRef.current.isHovered = false;
      mouseRef.current.x = width / 2;
      mouseRef.current.y = height / 2;
    };

    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseleave', onMouseLeave);

    // Initial state particles
    const particles = [];
    const pCount = 140;
    for (let i = 0; i < pCount; i++) {
      particles.push({
        angle: Math.random() * Math.PI * 2,
        dist: 40 + Math.random() * 180,
        speed: (0.01 + Math.random() * 0.02) * (Math.random() > 0.5 ? 1 : -1),
        size: Math.random() * 2 + 0.8,
        color: Math.random() > 0.4 ? '#D4AF37' : '#F97316',
        yOffset: (Math.random() - 0.5) * 60,
      });
    }

    let time = 0;

    const render = () => {
      animId = requestAnimationFrame(render);
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const intensity = warpIntensity / 100;

      if (engineState === 'gravity') {
        // --- 1. GRAVITY STATE ---
        // Accretion disk & curving particles toward central mass
        ctx.save();
        ctx.translate(cx, cy);

        // Gravitational spacetime grid lines curving toward center
        ctx.strokeStyle = 'rgba(212, 175, 55, 0.08)';
        ctx.lineWidth = 1;
        for (let r = 50; r <= 220; r += 35) {
          ctx.beginPath();
          ctx.ellipse(0, 0, r * (1 + intensity * 0.2), r * 0.45, Math.PI / 8, 0, Math.PI * 2);
          ctx.stroke();
        }

        // Orbiting Keplerian particles
        particles.forEach((p) => {
          p.angle += p.speed * (1.2 + intensity);
          const rx = Math.cos(p.angle) * p.dist;
          const ry = Math.sin(p.angle) * (p.dist * 0.4);

          // Tilt orbit
          const tiltedX = rx * Math.cos(Math.PI / 8) - ry * Math.sin(Math.PI / 8);
          const tiltedY = rx * Math.sin(Math.PI / 8) + ry * Math.cos(Math.PI / 8);

          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(tiltedX, tiltedY, p.size, 0, Math.PI * 2);
          ctx.fill();

          // Particle orbit trail
          ctx.strokeStyle = p.color;
          ctx.globalAlpha = 0.25;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(tiltedX, tiltedY);
          ctx.lineTo(tiltedX - Math.sin(p.angle) * 8, tiltedY - Math.cos(p.angle) * 3);
          ctx.stroke();
          ctx.globalAlpha = 1;
        });

        // Central Singularity Black Hole & Accretion Halo
        const glowRad = 32 + Math.sin(time * 3) * 3;
        const grad = ctx.createRadialGradient(0, 0, 10, 0, 0, glowRad * 1.8);
        grad.addColorStop(0, '#020408');
        grad.addColorStop(0.4, '#04060C');
        grad.addColorStop(0.7, '#D4AF37');
        grad.addColorStop(0.9, '#F97316');
        grad.addColorStop(1, 'transparent');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(0, 0, glowRad * 1.8, 0, Math.PI * 2);
        ctx.fill();

        // Pure black singularity core
        ctx.fillStyle = '#020408';
        ctx.beginPath();
        ctx.arc(0, 0, 22, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = 'rgba(212, 175, 55, 0.9)';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.restore();
      } else if (engineState === 'reflection') {
        // --- 2. REFLECTION STATE ---
        // Opposing moving landscapes (Upper celestial towers & lower inverted realm)
        ctx.save();
        ctx.translate(cx, cy);

        // Center horizon division line (Prismatic threshold)
        const lineGrad = ctx.createLinearGradient(-cx, 0, cx, 0);
        lineGrad.addColorStop(0, 'transparent');
        lineGrad.addColorStop(0.5, 'rgba(212, 175, 55, 0.8)');
        lineGrad.addColorStop(1, 'transparent');
        ctx.strokeStyle = lineGrad;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(-cx, 0);
        ctx.lineTo(cx, 0);
        ctx.stroke();

        // Upper Realm structures (Moving Right)
        const shiftX = (time * 25 * (0.8 + intensity)) % 80;
        const towerCount = 18;
        for (let i = -towerCount; i <= towerCount; i++) {
          const x = i * 45 + shiftX;
          const h = 40 + Math.sin(i * 1.3) * 45;
          ctx.fillStyle = i % 2 === 0 ? 'rgba(212, 175, 55, 0.45)' : 'rgba(99, 102, 241, 0.35)';
          ctx.fillRect(x - 10, -h, 20, h);
          ctx.strokeStyle = '#D4AF37';
          ctx.lineWidth = 1;
          ctx.strokeRect(x - 10, -h, 20, h);
        }

        // Lower Inverted Realm structures (Moving Left in direct contradiction!)
        const shiftInvX = -(time * 25 * (0.8 + intensity)) % 80;
        for (let i = -towerCount; i <= towerCount; i++) {
          const x = i * 45 + shiftInvX;
          const h = 40 + Math.sin(i * 1.3) * 45;
          ctx.fillStyle = i % 2 === 0 ? 'rgba(249, 115, 22, 0.4)' : 'rgba(139, 92, 246, 0.35)';
          ctx.fillRect(x - 10, 0, 20, h);
          ctx.strokeStyle = '#F97316';
          ctx.lineWidth = 1;
          ctx.strokeRect(x - 10, 0, 20, h);
        }

        // Central Mobius Infinity Seal
        ctx.font = '24px Cinzel, serif';
        ctx.fillStyle = '#FFFFFF';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('∞', 0, 0);

        ctx.restore();
      } else {
        // --- 3. DIMENSIONS STATE ---
        // Geometric hypercube / tesseract layers separating to reveal miniature world
        ctx.save();
        ctx.translate(cx, cy);

        const separation = 40 * intensity;

        // Outer Hypercube layer
        ctx.strokeStyle = 'rgba(212, 175, 55, 0.7)';
        ctx.lineWidth = 1.5;
        ctx.save();
        ctx.rotate(time * 0.4);
        ctx.strokeRect(-90 - separation, -90 - separation, (90 + separation) * 2, (90 + separation) * 2);
        ctx.restore();

        // Intermediate Prismatic Diamond
        ctx.strokeStyle = 'rgba(249, 115, 22, 0.65)';
        ctx.lineWidth = 1.5;
        ctx.save();
        ctx.rotate(-time * 0.6);
        ctx.beginPath();
        const dSize = 65 + separation * 0.6;
        ctx.moveTo(0, -dSize);
        ctx.lineTo(dSize, 0);
        ctx.lineTo(0, dSize);
        ctx.lineTo(-dSize, 0);
        ctx.closePath();
        ctx.stroke();
        ctx.restore();

        // Inner Contained Living World (Miniature Glowing Ecosystem)
        const innerRad = 28 + Math.sin(time * 2) * 4;
        const innerGrad = ctx.createRadialGradient(0, 0, 5, 0, 0, innerRad);
        innerGrad.addColorStop(0, '#FEF3C7');
        innerGrad.addColorStop(0.5, '#F59E0B');
        innerGrad.addColorStop(0.9, '#F43F5E');
        innerGrad.addColorStop(1, 'transparent');

        ctx.fillStyle = innerGrad;
        ctx.beginPath();
        ctx.arc(0, 0, innerRad, 0, Math.PI * 2);
        ctx.fill();

        // Swarming mini particles inside the contained world
        for (let i = 0; i < 16; i++) {
          const a = (i / 16) * Math.PI * 2 + time * 1.8;
          const r = Math.sin(time + i) * (innerRad * 0.65);
          ctx.fillStyle = '#FFFFFF';
          ctx.beginPath();
          ctx.arc(Math.cos(a) * r, Math.sin(a) * r, 1.2, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [engineState, warpIntensity]);

  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <span className="font-mono text-xs text-gold uppercase tracking-[0.2em] block mb-2">
            [ SECTION 03 // SIGNATURE EXPERIMENT ]
          </span>
          <h2 className="font-cinzel font-black text-3xl sm:text-5xl text-white tracking-wide uppercase">
            The Reality <span className="text-gradient-gold">Engine</span>
          </h2>
        </div>
        <p className="font-sans text-xs sm:text-sm text-starlight-400 max-w-md leading-relaxed font-light">
          An interactive laboratory demonstrating the physical contradictions of PARADOX. Select a state below to distort gravitational coordinates, mirror realities, or unfold dimensions.
        </p>
      </div>

      {/* Main Interactive Stage Box */}
      <div className="glass-panel-gold rounded-3xl p-6 sm:p-8 relative overflow-hidden border border-gold-antique/30 shadow-2xl">
        {/* State Selection Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          <button
            onClick={() => setEngineState('gravity')}
            className={`p-4 rounded-2xl text-left transition-all border ${
              engineState === 'gravity'
                ? 'bg-gradient-to-r from-gold-bronze/40 via-surface to-surface border-gold shadow-lg shadow-gold/20'
                : 'bg-surface/60 border-white/10 hover:border-white/20 text-starlight-400'
            }`}
          >
            <div className="flex items-center space-x-2 text-gold mb-1">
              <Orbit size={16} />
              <span className="font-mono text-[10px] uppercase tracking-widest font-bold">STATE 01</span>
            </div>
            <h4 className="font-cinzel font-bold text-base text-white">Gravity Inversion</h4>
            <p className="text-[11px] text-starlight-400 font-sans mt-0.5 font-light">
              Particles orbit in relativistic fields; space curves inward.
            </p>
          </button>

          <button
            onClick={() => setEngineState('reflection')}
            className={`p-4 rounded-2xl text-left transition-all border ${
              engineState === 'reflection'
                ? 'bg-gradient-to-r from-amber-molten/30 via-surface to-surface border-amber-molten shadow-lg shadow-amber-molten/20'
                : 'bg-surface/60 border-white/10 hover:border-white/20 text-starlight-400'
            }`}
          >
            <div className="flex items-center space-x-2 text-amber-molten mb-1">
              <Eye size={16} />
              <span className="font-mono text-[10px] uppercase tracking-widest font-bold">STATE 02</span>
            </div>
            <h4 className="font-cinzel font-bold text-base text-white">Opposing Reflection</h4>
            <p className="text-[11px] text-starlight-400 font-sans mt-0.5 font-light">
              Dual structures glide in opposing parity across the threshold.
            </p>
          </button>

          <button
            onClick={() => setEngineState('dimensions')}
            className={`p-4 rounded-2xl text-left transition-all border ${
              engineState === 'dimensions'
                ? 'bg-gradient-to-r from-violet-glow/30 via-surface to-surface border-violet-glow shadow-lg shadow-violet-glow/20'
                : 'bg-surface/60 border-white/10 hover:border-white/20 text-starlight-400'
            }`}
          >
            <div className="flex items-center space-x-2 text-violet-subtle mb-1">
              <Layers size={16} />
              <span className="font-mono text-[10px] uppercase tracking-widest font-bold">STATE 03</span>
            </div>
            <h4 className="font-cinzel font-bold text-base text-white">Tesseract Layers</h4>
            <p className="text-[11px] text-starlight-400 font-sans mt-0.5 font-light">
              Geometric folds unseal to reveal a golden world contained inside.
            </p>
          </button>
        </div>

        {/* Interactive Canvas Stage */}
        <div className="relative w-full h-[440px] rounded-2xl bg-void/90 border border-white/10 overflow-hidden flex items-center justify-center">
          <canvas
            ref={canvasRef}
            className="w-full h-full cursor-crosshair block"
            title="Move cursor over canvas to interact with physics"
          />

          {/* Floating Telemetry Badge */}
          <div className="absolute top-4 left-4 pointer-events-none font-mono text-[10px] text-starlight-400 space-y-1">
            <div className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-ping" />
              <span className="text-white font-bold tracking-widest uppercase">
                ENGINE STATE: {engineState.toUpperCase()}
              </span>
            </div>
            <div className="text-starlight-500">
              PHYSICS MODEL: NON-EUCLIDEAN RELATIVISTIC
            </div>
          </div>
        </div>

        {/* Bottom Parameter Controls */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10 font-mono text-xs text-starlight-400">
          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <span className="text-starlight-500 text-[11px] uppercase tracking-wider">
              FIELD INTENSITY:
            </span>
            <input
              type="range"
              min="20"
              max="100"
              value={warpIntensity}
              onChange={(e) => setWarpIntensity(Number(e.target.value))}
              className="w-36 accent-gold cursor-pointer"
            />
            <span className="text-gold font-bold">{warpIntensity}%</span>
          </div>

          <div className="flex items-center space-x-4 text-[11px]">
            <span className="text-starlight-500 hidden md:inline">
              INTERACTION: CURSOR REACTIVE GRAVITATIONAL WARP
            </span>
            <button
              onClick={() => {
                const nextState =
                  engineState === 'gravity'
                    ? 'reflection'
                    : engineState === 'reflection'
                    ? 'dimensions'
                    : 'gravity';
                setEngineState(nextState);
              }}
              className="px-3 py-1.5 rounded-lg border border-gold-antique/40 hover:border-gold text-starlight-200 transition-colors uppercase text-[10px] font-bold"
            >
              CYCLE STATE →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
