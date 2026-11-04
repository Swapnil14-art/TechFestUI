import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeftRight, Binary, Orbit, ShieldCheck, Sparkles } from 'lucide-react';

/**
 * Dual-Reality Contradiction Engine
 * Inspired by Christopher Nolan's Interstellar (Classical Physics vs Quantum Singularity)
 * - Side A: Deterministic Relativistic Precision (Keplerian orbits, provable invariants, bare-metal telemetry)
 * - Side B: Quantum Horizon Emergence (Gravitational singularities, non-linear tesseracts, generative emergence)
 */
export default function ContradictionEngine() {
  const [sliderPos, setSliderPos] = useState(50); // percentage 0 - 100
  const isDragging = useRef(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let pos = ((clientX - rect.left) / rect.width) * 100;
    if (pos < 5) pos = 5;
    if (pos > 95) pos = 95;
    setSliderPos(pos);
  };

  const onMouseDown = () => { isDragging.current = true; };
  const onMouseMove = (e) => {
    if (isDragging.current) handleMove(e.clientX);
  };
  const onTouchMove = (e) => {
    if (e.touches[0]) handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => { isDragging.current = false; };
    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
  }, []);

  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <span className="font-mono text-xs text-indigo-light uppercase tracking-[0.2em] block mb-2">
            [ GRAVITATIONAL DUALITY MATRIX ]
          </span>
          <h2 className="font-cinzel font-black text-3xl sm:text-5xl text-white tracking-wide uppercase">
            Order <span className="font-serif italic font-normal text-indigo-accent">Coexists</span> With The Singularity
          </h2>
        </div>
        <p className="font-sans text-xs sm:text-sm text-starlight-400 max-w-md leading-relaxed">
          The core anomaly of modern technology: rigid mathematical constants on one side, wild neural superposition and creative hallucination on the other. Drag the threshold to peel reality.
        </p>
      </div>

      {/* Interactive Split Window Container */}
      <div
        ref={containerRef}
        onMouseMove={onMouseMove}
        onTouchMove={onTouchMove}
        className="relative h-[420px] sm:h-[460px] rounded-2xl overflow-hidden glass-panel-glow border border-white/10 select-none cursor-ew-resize"
      >
        {/* Layer B: Quantum Horizon Emergence (Full background under layer A) */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#060911] via-[#15102A] to-[#04060A] p-8 sm:p-14 flex flex-col justify-center items-end text-right">
          <div className="max-w-md">
            <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-violet-dark/40 border border-violet-glow/30 font-mono text-[10px] text-violet-subtle uppercase tracking-widest mb-4">
              <Sparkles size={12} className="text-violet-glow" />
              <span>HORIZON B // QUANTUM EMERGENCE</span>
            </span>

            <h3 className="font-cinzel font-black text-2xl sm:text-4xl text-white leading-tight uppercase tracking-wider">
              Singularity <span className="text-violet-subtle font-serif italic">Entropy</span>
            </h3>

            <p className="font-serif italic text-base sm:text-lg text-starlight-300 mt-3 leading-relaxed">
              "Where classical mechanics dissolve into five-dimensional tesseracts, probabilistic quantum algorithms, and untamed generative cognition."
            </p>

            <div className="mt-6 flex flex-wrap justify-end gap-2.5 font-mono text-[11px] text-starlight-400">
              <span className="px-3 py-1 rounded-lg bg-surface/80 border border-white/10">
                Quantum State: Superposition
              </span>
              <span className="px-3 py-1 rounded-lg bg-surface/80 border border-white/10">
                Entropy: Non-Linear
              </span>
            </div>
          </div>
        </div>

        {/* Layer A: Deterministic Relativistic Order (Clipped on the left) */}
        <div
          style={{ width: `${sliderPos}%` }}
          className="absolute inset-y-0 left-0 bg-gradient-to-br from-[#04060A] via-[#091021] to-[#030508] border-r-2 border-indigo-light overflow-hidden"
        >
          {/* Inner fixed-width element so text doesn't warp during drag */}
          <div className="w-[800px] sm:w-[1000px] h-full p-8 sm:p-14 flex flex-col justify-center items-start text-left">
            <div className="max-w-md">
              <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-900/40 border border-indigo-light/30 font-mono text-[10px] text-indigo-accent uppercase tracking-widest mb-4">
                <Orbit size={12} className="text-indigo-light" />
                <span>HORIZON A // RELATIVISTIC PRECISION</span>
              </span>

              <h3 className="font-cinzel font-black text-2xl sm:text-4xl text-white leading-tight uppercase tracking-wider">
                Keplerian <span className="text-indigo-accent font-serif italic">Invariance</span>
              </h3>

              <p className="font-sans text-xs sm:text-sm text-starlight-300 mt-3 leading-relaxed font-light">
                Provable cryptographic algorithms, deterministic bare-metal memory safety, and immutable mathematical proofs that govern the computational universe.
              </p>

              <div className="mt-6 flex flex-wrap gap-2.5 font-mono text-[11px] text-starlight-400">
                <span className="px-3 py-1 rounded-lg bg-surface/80 border border-white/10">
                  Precision: 99.999%
                </span>
                <span className="px-3 py-1 rounded-lg bg-surface/80 border border-white/10">
                  Proof Invariants: Immutable
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Center Draggable Slider Handle */}
        <div
          style={{ left: `${sliderPos}%` }}
          onMouseDown={onMouseDown}
          onTouchStart={onMouseDown}
          className="absolute top-0 bottom-0 -ml-5 w-10 flex items-center justify-center cursor-ew-resize z-20 group"
        >
          <div className="w-10 h-10 rounded-full bg-void border-2 border-indigo-light shadow-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
            <ArrowLeftRight size={15} className="text-indigo-accent" />
          </div>
        </div>

        {/* Floating helper badges */}
        <div className="absolute bottom-4 left-6 z-10 font-mono text-[10px] text-indigo-accent/80 tracking-widest hidden sm:block">
          DETERMINISTIC: {Math.round(sliderPos)}%
        </div>
        <div className="absolute bottom-4 right-6 z-10 font-mono text-[10px] text-violet-subtle/80 tracking-widest hidden sm:block">
          SINGULARITY: {100 - Math.round(sliderPos)}%
        </div>
      </div>
    </div>
  );
}
