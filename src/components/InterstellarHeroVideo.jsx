import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowRight, ShieldCheck, Sparkles, Terminal, Volume2, VolumeX } from 'lucide-react';

// Verified Web-optimized video with faststart (+moov at file head)
const heroVideo = '/assets/hero/techfest-hero-final.mp4';

/**
 * Interstellar × Cosmic Mythology Hero Component
 * - Fullscreen hero/techfesthero.mp4 background with subtle grain and cinematic chiaroscuro
 * - 100% native hardware synchronized audio directly tied to video playback timestamp
 * - Sparkling micro-starlight canvas overlay with real-time gravitational lens deflection
 * - Monumental editorial typography in antique gold and prismatic highlights
 * - Live relativistic countdown HUD & NMIMS Shirpur station coordinates
 * - Functional CTAs for Explore Events and Register Now
 */
export default function InterstellarHeroVideo({
  onExploreEvents,
  onOpenPass,
  isAudioActive = false,
  onToggleAudio,
}) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000, radius: 160 });

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

  // Initialize video autoplay (muted initially to comply with browser autoplay policies)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !isAudioActive;
    video.defaultMuted = true;
    video.playsInline = true;

    const attemptPlay = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          // Autoplay fallback: guarantee muted and retry
          video.muted = true;
          video.play().catch(() => {});
        });
      }
    };

    if (video.readyState >= 2) {
      attemptPlay();
    } else {
      video.addEventListener('loadeddata', attemptPlay, { once: true });
      video.addEventListener('canplay', attemptPlay, { once: true });
    }
  }, []);

  // Synchronize video audio state directly with video's native audio track
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isAudioActive) {
      video.muted = false;
      video.volume = 1.0;
      if (video.paused) {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => { });
        }
      }
    } else {
      video.muted = true;
    }
  }, [isAudioActive]);

  // Prevent phantom audio when tab is backgrounded
  useEffect(() => {
    const handleVisibilityChange = () => {
      const video = videoRef.current;
      if (!video) return;
      if (document.hidden) {
        video.pause();
      } else {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => { });
        }
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  // Synchronize video audio state directly with video's native audio track
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isAudioActive) {
      video.muted = false;
      video.volume = 1.0;
      if (video.paused) {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {});
        }
      }
    } else {
      video.muted = true;
    }
  }, [isAudioActive]);

  // Prevent phantom audio when tab is backgrounded
  useEffect(() => {
    const handleVisibilityChange = () => {
      const video = videoRef.current;
      if (!video) return;
      if (document.hidden) {
        video.pause();
      } else {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {});
        }
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
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

    const onMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };
    window.addEventListener('mousemove', onMouseMove);

    // 160 fine sparkling particles with gold, amber, and silver tones
    const particleCount = 160;
    const particles = [];
    const colors = [
      'rgba(254, 243, 199, ', // pale gold
      'rgba(212, 175, 55, ',  // antique gold
      'rgba(249, 115, 22, ',  // molten amber
      'rgba(248, 250, 252, ', // starlight silver
      'rgba(139, 92, 246, ',  // cosmic violet
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.7 + 0.3,
        twinkleSpeed: 0.015 + Math.random() * 0.03,
        twinklePhase: Math.random() * Math.PI * 2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
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
        const currentAlpha = p.alpha * (0.55 + 0.45 * Math.sin(p.twinklePhase));

        let renderX = p.x;
        let renderY = p.y;
        if (mx > 0 && my > 0) {
          const dx = mx - p.x;
          const dy = my - p.y;
          const dist = Math.hypot(dx, dy);
          if (dist < r && dist > 1) {
            // Einstein light-bending deflection
            const force = (1 - dist / r) * 22;
            renderX += (dx / dist) * force;
            renderY += (dy / dist) * force;
          }
        }

        ctx.fillStyle = p.color + currentAlpha + ')';
        ctx.beginPath();
        ctx.arc(renderX, renderY, p.size, 0, Math.PI * 2);
        ctx.fill();

        if (p.size > 1.3 && currentAlpha > 0.65) {
          ctx.strokeStyle = p.color + currentAlpha * 0.4 + ')';
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(renderX - 3.5, renderY);
          ctx.lineTo(renderX + 3.5, renderY);
          ctx.moveTo(renderX, renderY - 3.5);
          ctx.lineTo(renderX, renderY + 3.5);
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
          muted={!isAudioActive}
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-center filter contrast-[1.06] brightness-[0.92]"
        />

        {/* Chiaroscuro Cinematic Overlays: Obsidian, Amber & Gold Atmospheres (5-8% lighter center clarity) */}
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/35 to-void/70 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-void/80 via-transparent to-void/80 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_32%,rgba(2,4,8,0.65)_75%,#020408_100%)] pointer-events-none" />

        {/* Molten Amber & Gold Accretion Flare */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-gradient-to-b from-gold-deep/20 via-amber-molten/10 to-transparent blur-[140px] rounded-full pointer-events-none" />
      </div>

      {/* 2. Sparkling Starlight Canvas with Gravitational Deflection */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
      />

      {/* 3. Top Telemetry HUD Header */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 flex items-center justify-between font-mono text-[11px] text-starlight-400">
        <div className="flex items-center space-x-3">
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-ping" />
          <span className="text-starlight-200 tracking-[0.2em] uppercase">
            ORBITAL STATION // NMIMS SHIRPUR [20.8845° N, 74.8940° E]
          </span>
        </div>

        <div className="hidden sm:flex items-center space-x-4 tracking-wider">
          {onToggleAudio && (
            <button
              onClick={onToggleAudio}
              className={`flex items-center space-x-1.5 px-3 py-1 rounded-full border transition-all pointer-events-auto cursor-pointer ${isAudioActive
                  ? 'bg-gold/20 border-gold text-gold-bright shadow-sm shadow-gold/30'
                  : 'glass-panel border-white/10 text-starlight-400 hover:text-white hover:border-gold/40'
                }`}
              title={isAudioActive ? 'Mute Video Soundtrack' : 'Unmute Synchronized Video Audio'}
            >
              {isAudioActive ? (
                <>
                  <Volume2 size={12} className="text-gold-bright animate-pulse" />
                  <span className="text-[10px] font-bold">AUDIO ACTIVE</span>
                </>
              ) : (
                <>
                  <VolumeX size={12} />
                  <span className="text-[10px]">SOUNDTRACK MUTED</span>
                </>
              )}
            </button>
          )}

          {onToggleAudio && (
            <button
              onClick={onToggleAudio}
              className={`flex items-center space-x-1.5 px-3 py-1 rounded-full border transition-all pointer-events-auto cursor-pointer ${
                isAudioActive
                  ? 'bg-gold/20 border-gold text-gold-bright shadow-sm shadow-gold/30'
                  : 'glass-panel border-white/10 text-starlight-400 hover:text-white hover:border-gold/40'
              }`}
              title={isAudioActive ? 'Mute Video Soundtrack' : 'Unmute Synchronized Video Audio'}
            >
              {isAudioActive ? (
                <>
                  <Volume2 size={12} className="text-gold-bright animate-pulse" />
                  <span className="text-[10px] font-bold">AUDIO ACTIVE</span>
                </>
              ) : (
                <>
                  <VolumeX size={12} />
                  <span className="text-[10px]">SOUNDTRACK MUTED</span>
                </>
              )}
            </button>
          )}

          <span className="text-starlight-500">HORIZON STATUS:</span>
          <span className="text-gold-antique font-semibold flex items-center space-x-1">
            <span>SINGULARITY APEX</span>
          </span>
          <span className="text-starlight-600">|</span>
          <span className="text-starlight-300">10 — 13 MARCH 2026</span>
        </div>
      </div>

      {/* 4. Center Hero Cinematic Content */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-auto text-center flex flex-col items-center py-12">
        {/* Technical Eyebrow */}
        <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full glass-panel border border-gold-antique/30 backdrop-blur-md mb-6 font-mono text-[10px] tracking-[0.25em] text-gold-pale uppercase shadow-2xl">
          <Sparkles size={11} className="text-gold-bright animate-pulse" />
          <span>PARADOX // ANNUAL TECH FIESTA 2026</span>
        </div>

        {/* Hero Title: Monumental Cinzel with Gold & Prismatic Finish */}
        <h1 className="font-cinzel font-black text-4xl sm:text-7xl md:text-8xl text-white tracking-[0.06em] uppercase leading-[1.04] drop-shadow-2xl">
          The Impossible <br />
          <span className="text-gradient-gold font-light italic font-serif">
            Coexists
          </span>
        </h1>

        {/* Narrative Proposition */}
        <p className="font-sans text-sm sm:text-lg text-starlight-300 max-w-2xl mx-auto mt-6 leading-relaxed font-light tracking-wide">
          Where gravitational physics bend the computational horizon. Enter three days of non-Euclidean architectures, impossible robotics, zero-knowledge ciphers, and frontier collegiate competition.
        </p>

        {/* Primary Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={onExploreEvents}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-mono text-xs font-bold uppercase tracking-[0.2em] text-void bg-gradient-to-r from-gold-pale via-gold to-amber-molten hover:brightness-110 transition-all shadow-xl shadow-gold/20 flex items-center justify-center space-x-3 group"
          >
            <span>EXPLORE ARENAS</span>
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform text-void" />
          </button>

          <button
            onClick={onOpenPass}
            className="w-full sm:w-auto px-8 py-4 rounded-xl glass-panel text-gold-pale font-mono text-xs font-semibold tracking-[0.15em] transition-all border border-gold-antique/40 hover:border-gold hover:bg-gold/10 flex items-center justify-center space-x-2.5 backdrop-blur-md shadow-lg"
          >
            <ShieldCheck size={15} className="text-gold" />
            <span>CLAIM DELEGATE PASS</span>
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
            <span className="text-2xl sm:text-3xl font-bold text-gold-bright font-cinzel block">
              {String(timeLeft.secs).padStart(2, '0')}
            </span>
            <span className="text-[9px] text-gold uppercase tracking-widest mt-1 block">SECONDS</span>
          </div>
        </div>
      </div>

      {/* 5. Bottom Cinematic Scroll Cue & Coordinates */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 flex items-center justify-between font-mono text-[11px] text-starlight-500">
        <div className="flex items-center space-x-2">
          <span>PRIZE BOUNTY: ₹5,00,000+</span>
        </div>

        <button
          onClick={onExploreEvents}
          className="flex items-center space-x-2 text-starlight-300 hover:text-gold transition-colors group cursor-pointer"
        >
          <span className="tracking-[0.2em] uppercase text-[10px]">SCROLL TO DISOBEY GRAVITY</span>
          <ArrowDown size={14} className="animate-bounce text-gold group-hover:translate-y-1 transition-transform" />
        </button>

        <div className="hidden sm:block">
          <span>ANCHOR // MPSTME CAMPUS</span>
        </div>
      </div>
    </section>
  );
}