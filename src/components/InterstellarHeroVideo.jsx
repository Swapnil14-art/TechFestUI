import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowRight, Compass, ShieldCheck, Sparkles } from 'lucide-react';
import heroVideo from '../../hero/Hero_Video.mp4';

/**
 * Interstellar-inspired Hero Video Component
 * Full-screen video background from root hero/Hero_Video.mp4 (served via /Hero_Video.mp4)
 * - Autoplay, muted, loop, playsInline, zero controls
 * - Subtle sparkling micro-starlight canvas overlay with gentle gravitational cursor lensing
 * - Dark cinematic radial vignette & violet-indigo atmospheric overlays
 * - High-clarity typography with generous letter-spacing and technical telemetry
 */
export default function InterstellarHeroVideo({ onExploreEvents, onOpenPass }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000, radius: 140 });

  // Live countdown to March 10, 2026
  const [timeLeft, setTimeLeft] = useState({ days: 12, hours: 4, mins: 31, secs: 9 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.secs > 0) return { ...prev, secs: prev.secs - 1 };
        if (prev.mins > 0) return { ...prev, mins: prev.mins - 1, secs: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, mins: 59, secs: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, mins: 59, secs: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Ensure video plays smoothly across all browsers
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.playsInline = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Fallback if browser requires user interaction
        });
      }
    }
  }, []);

  // Interactive Crisp Starlight & Gravitational Lensing Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const onResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);

    // Track mouse for gravitational warp
    const onMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };
    window.addEventListener('mousemove', onMouseMove);

    // Create 180 crisp, fine starlight particles
    const particleCount = 180;
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        baseX: 0,
        baseY: 0,
        size: Math.random() * 1.4 + 0.6,
        alpha: Math.random() * 0.7 + 0.3,
        twinkleSpeed: 0.015 + Math.random() * 0.025,
        twinklePhase: Math.random() * Math.PI * 2,
        color: Math.random() > 0.4 ? 'rgba(248, 250, 252, ' : 'rgba(129, 140, 248, ',
      });
      particles[i].baseX = particles[i].x;
      particles[i].baseY = particles[i].y;
    }

    const render = () => {
      animId = requestAnimationFrame(render);
      ctx.clearRect(0, 0, width, height);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const r = mouseRef.current.radius;

      for (let i = 0; i < particleCount; i++) {
        const p = particles[i];
        p.twinklePhase += p.twinkleSpeed;
        const currentAlpha = p.alpha * (0.6 + 0.4 * Math.sin(p.twinklePhase));

        // Gravitational lens deflection calculation
        let renderX = p.x;
        let renderY = p.y;
        if (mx > 0 && my > 0) {
          const dx = mx - p.x;
          const dy = my - p.y;
          const dist = Math.hypot(dx, dy);
          if (dist < r && dist > 1) {
            // Light bends towards gravitational center (Einstein ring effect)
            const force = (1 - dist / r) * 18;
            renderX += (dx / dist) * force;
            renderY += (dy / dist) * force;
          }
        }

        ctx.fillStyle = p.color + currentAlpha + ')';
        ctx.beginPath();
        ctx.arc(renderX, renderY, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Slight star cross-glimmer for brighter stars
        if (p.size > 1.3 && currentAlpha > 0.7) {
          ctx.strokeStyle = p.color + currentAlpha * 0.4 + ')';
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(renderX - 3, renderY);
          ctx.lineTo(renderX + 3, renderY);
          ctx.moveTo(renderX, renderY - 3);
          ctx.lineTo(renderX, renderY + 3);
          ctx.stroke();
        }
      }
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-void select-none">
      {/* 1. Fullscreen Hero Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <video
          ref={videoRef}
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-center filter contrast-[1.05] brightness-[0.88]"
        />

        {/* Cinematic Vignette & Atmospheric Deep Tints */}
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/40 to-void/70 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-void/80 via-transparent to-void/80 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(3,5,8,0.75)_80%,#030508_100%)] pointer-events-none" />
        
        {/* Subtle Violet-Indigo Cosmic Rim Light */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-indigo-900/25 blur-[120px] rounded-full pointer-events-none" />
      </div>

      {/* 2. Sparkling Micro-Starlight Canvas with Gravitational Warp */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
      />

      {/* 3. Top Telemetry HUD Header */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 flex items-center justify-between font-mono text-[11px] text-starlight-400">
        <div className="flex items-center space-x-3">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-light animate-ping" />
          <span className="text-starlight-200 tracking-widest uppercase">
            STATION // NMIMS SHIRPUR [20.8845° N, 74.8940° E]
          </span>
        </div>

        <div className="hidden sm:flex items-center space-x-4 tracking-wider">
          <span className="text-starlight-500">EVENT HORIZON:</span>
          <span className="text-indigo-accent font-semibold">GARGANTUA MATRIX</span>
          <span className="text-starlight-600">|</span>
          <span className="text-starlight-300">10 — 13 MARCH 2026</span>
        </div>
      </div>

      {/* 4. Center Hero Cinematic Content (Nolan / Interstellar Style) */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-auto text-center flex flex-col items-center py-12">
        {/* Technical Eyebrow */}
        <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-surface/70 border border-white/10 backdrop-blur-md mb-6 font-mono text-[10px] tracking-[0.25em] text-starlight-300 uppercase shadow-2xl">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-glow" />
          <span>ANNUAL INTERCAMPUS TECH FIESTA 2026</span>
        </div>

        {/* Hero Title: Cormorant / Cinzel Monumental Monolith */}
        <h1 className="font-cinzel font-black text-4xl sm:text-7xl md:text-8xl text-white tracking-[0.08em] uppercase leading-[1.05] drop-shadow-2xl">
          The Impossible <br />
          <span className="bg-gradient-to-r from-starlight-100 via-indigo-accent to-starlight-300 bg-clip-text text-transparent font-light italic font-serif">
            Coexists
          </span>
        </h1>

        {/* Cinematic Scientific Proposition */}
        <p className="font-sans text-sm sm:text-lg text-starlight-300 max-w-2xl mx-auto mt-6 leading-relaxed font-light tracking-wide">
          Beyond classical axioms, where gravitational pull bends the frame of technology. Experience three days of impossible computing, non-Euclidean robotics, zero-knowledge ciphers, and frontier collegiate competition.
        </p>

        {/* Primary Action Group */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={onExploreEvents}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-mono text-xs font-bold uppercase tracking-[0.2em] text-void bg-starlight-200 hover:bg-white transition-all shadow-xl hover:shadow-starlight-200/25 flex items-center justify-center space-x-3 group"
          >
            <span>ENTER THE ANOMALY</span>
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform text-indigo-900" />
          </button>

          <button
            onClick={onOpenPass}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-surface/60 hover:bg-surface/90 text-starlight-200 font-mono text-xs font-semibold tracking-[0.15em] transition-all border border-white/15 flex items-center justify-center space-x-2.5 backdrop-blur-md hover:border-indigo-light"
          >
            <ShieldCheck size={15} className="text-indigo-accent" />
            <span>MINT DELEGATE PASS</span>
          </button>
        </div>

        {/* Live Relativistic Countdown Clock HUD */}
        <div className="mt-12 pt-6 border-t border-white/10 w-full max-w-lg flex items-center justify-between font-mono text-center">
          <div className="flex-1">
            <span className="text-2xl sm:text-3xl font-bold text-white font-cinzel block">
              {String(timeLeft.days).padStart(2, '0')}
            </span>
            <span className="text-[9px] text-starlight-500 uppercase tracking-widest mt-1 block">DAYS</span>
          </div>
          <span className="text-starlight-600 text-lg">:</span>
          <div className="flex-1">
            <span className="text-2xl sm:text-3xl font-bold text-white font-cinzel block">
              {String(timeLeft.hours).padStart(2, '0')}
            </span>
            <span className="text-[9px] text-starlight-500 uppercase tracking-widest mt-1 block">HOURS</span>
          </div>
          <span className="text-starlight-600 text-lg">:</span>
          <div className="flex-1">
            <span className="text-2xl sm:text-3xl font-bold text-white font-cinzel block">
              {String(timeLeft.mins).padStart(2, '0')}
            </span>
            <span className="text-[9px] text-starlight-500 uppercase tracking-widest mt-1 block">MINUTES</span>
          </div>
          <span className="text-starlight-600 text-lg">:</span>
          <div className="flex-1">
            <span className="text-2xl sm:text-3xl font-bold text-indigo-accent font-cinzel block">
              {String(timeLeft.secs).padStart(2, '0')}
            </span>
            <span className="text-[9px] text-indigo-accent uppercase tracking-widest mt-1 block">SECONDS</span>
          </div>
        </div>
      </div>

      {/* 5. Bottom Cinematic Scroll Cue & Coordinates */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 flex items-center justify-between font-mono text-[11px] text-starlight-500">
        <div className="flex items-center space-x-2">
          <span>COSMIC BOUNTY: ₹5,00,000+</span>
        </div>

        <button
          onClick={onExploreEvents}
          className="flex items-center space-x-2 text-starlight-300 hover:text-white transition-colors group cursor-pointer"
        >
          <span className="tracking-[0.2em] uppercase text-[10px]">SCROLL TO DESCEND</span>
          <ArrowDown size={14} className="animate-bounce text-indigo-accent group-hover:translate-y-1 transition-transform" />
        </button>

        <div className="hidden sm:block">
          <span>DIMENSIONAL ANCHOR: MPSTME CAMPUS</span>
        </div>
      </div>
    </section>
  );
}

