import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, ArrowRight, Compass, Pause, Play, RotateCcw, Volume2, VolumeX, Zap } from 'lucide-react';
import CosmicCanvas from './CosmicCanvas';
import { soundscape } from './audio';

export const FRAMES = [
  {
    num: '01',
    name: 'THE VOID',
    time: 1.2,
    timeRange: [0, 2.5],
    eyebrow: 'STAGE 01 // 00:00 — 00:02.5s',
    headline: 'A Completely Dark Universe',
    desc: 'Before code and matter coexist, there is only a silent void. A single point of light pulses in the deep distance without a known origin.',
    paradoxMeaning: 'Light existing without a source.',
  },
  {
    num: '02',
    name: 'THE DISTORTION',
    time: 3.8,
    timeRange: [2.5, 5.0],
    eyebrow: 'STAGE 02 // 00:02.5 — 00:05.0s',
    headline: 'Space Bends Around The Light',
    desc: 'Spacetime curves under non-Euclidean gravitational pull, forming a radiant glowing accretion ring with no visible celestial body.',
    paradoxMeaning: 'Curvature without mass.',
  },
  {
    num: '03',
    name: 'THE CONTRADICTION',
    time: 6.2,
    timeRange: [5.0, 7.5],
    eyebrow: 'STAGE 03 // 00:05.0 — 00:07.5s',
    headline: 'The Inverted City Emerges',
    desc: 'An upside-down cybernetic metropolis hangs suspended in space, directly above an infinite digital landscape stretching endlessly below it.',
    paradoxMeaning: 'Opposing worlds sharing identical coordinates.',
  },
  {
    num: '04',
    name: 'THE WITNESS',
    time: 8.8,
    timeRange: [7.5, 10.0],
    eyebrow: 'STAGE 04 // 00:07.5 — 00:10.0s',
    headline: 'Astronaut & Contained World',
    desc: 'A lone astronaut approaches a transparent hypercube floating in the vacuum, containing an entire flourishing miniature ecosystem within.',
    paradoxMeaning: 'Limits holding limitlessness.',
  },
  {
    num: '05',
    name: 'THE REVEAL',
    time: 11.2,
    timeRange: [10.0, 12.0],
    eyebrow: 'STAGE 05 // 00:10.0 — 00:12.0s',
    headline: 'Fracture Into The Dimensional Portal',
    desc: 'The hypercube shatters into iridescent prismatic shards. The camera accelerates forward through the threshold, emerging into the festival screen.',
    paradoxMeaning: 'The barrier is the doorway.',
  },
];

export default function CinematicHeroIntro({ onEnterFest }) {
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [audioActive, setAudioActive] = useState(false);
  const rafRef = useRef(null);
  const lastTimestampRef = useRef(null);

  // Playback timer loop (0s - 12s)
  useEffect(() => {
    if (!isPlaying) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lastTimestampRef.current = null;
      return;
    }

    const loop = (timestamp) => {
      if (!lastTimestampRef.current) lastTimestampRef.current = timestamp;
      const delta = (timestamp - lastTimestampRef.current) / 1000;
      lastTimestampRef.current = timestamp;

      setCurrentTime((prev) => {
        const next = prev + delta;
        if (next >= 12.0) {
          // Loop or stop
          return 0;
        }
        return next;
      });

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isPlaying]);

  // Determine current active frame
  const currentFrame =
    FRAMES.find((f) => currentTime >= f.timeRange[0] && currentTime < f.timeRange[1]) ||
    FRAMES[FRAMES.length - 1];

  const handleFrameSelect = (targetTime) => {
    setCurrentTime(targetTime);
    soundscape.playTriggerPing(620);
  };

  const toggleSound = () => {
    const active = soundscape.toggle();
    setAudioActive(active);
  };

  const restartIntro = () => {
    setCurrentTime(0);
    setIsPlaying(true);
  };

  return (
    <section className="relative w-full min-h-screen bg-void overflow-hidden flex flex-col justify-between select-none">
      {/* 3D WebGL Canvas Layer */}
      <CosmicCanvas time={currentTime} interactive={true} />

      {/* Top Telemetry & Direction Bar */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-void/80 border border-violet/40 flex items-center justify-center font-display font-black text-white text-base">
            ∞
          </div>
          <div>
            <span className="font-display font-black text-xs sm:text-sm tracking-wider text-white block">
              NMIMS SHIRPUR • TECH FIESTA '26
            </span>
            <span className="font-mono text-[9px] text-gray-400 tracking-widest block uppercase">
              CONCEPT A // THE UNIVERSE HAS A GLITCH
            </span>
          </div>
        </div>

        {/* Top Actions */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Spatial Sound FX Toggle */}
          <button
            onClick={toggleSound}
            className={`px-3 py-1.5 rounded-lg border font-mono text-[11px] flex items-center space-x-2 transition-all ${
              audioActive
                ? 'bg-violet/20 border-violet text-cyan shadow-lg shadow-violet/20'
                : 'bg-void/60 border-white/10 text-gray-400 hover:text-white hover:border-white/20'
            }`}
            title="Toggle Generative Spatial Audio Drone"
          >
            {audioActive ? <Volume2 size={13} className="text-cyan animate-pulse" /> : <VolumeX size={13} />}
            <span className="hidden sm:inline">{audioActive ? 'AUDIO: AMBIENT ON' : 'AUDIO: OFF'}</span>
          </button>

          {/* Quick Enter Festival Deck Button */}
          <button
            onClick={onEnterFest}
            className="px-4 py-1.5 rounded-lg font-mono text-xs font-bold bg-white text-void hover:bg-cyan transition-all flex items-center space-x-1.5 shadow-lg"
          >
            <span>ENTER FEST</span>
            <ArrowRight size={13} />
          </button>
        </div>
      </div>

      {/* Center Cinematic Narrative Overlay */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center text-center">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-panel border border-white/10 font-mono text-[10px] text-rose uppercase tracking-widest mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-rose animate-ping" />
          <span>{currentFrame.eyebrow}</span>
        </div>

        <h1 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase max-w-3xl leading-tight">
          {currentFrame.headline}
        </h1>

        <p className="font-serif italic text-base sm:text-xl text-cyan/90 max-w-2xl mt-3 leading-relaxed">
          "{currentFrame.desc}"
        </p>

        <div className="mt-4 inline-flex items-center space-x-2 font-mono text-xs text-gray-400">
          <span className="text-violet font-semibold">PARADOX MOTIF:</span>
          <span className="text-bone-200">{currentFrame.paradoxMeaning}</span>
        </div>
      </div>

      {/* Bottom Cinematic Control Dock */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="glass-panel-glow rounded-2xl p-4 sm:p-5 border border-white/15">
          {/* Frame Indicator Pills */}
          <div className="grid grid-cols-5 gap-2 mb-4">
            {FRAMES.map((f) => {
              const isActive = currentFrame.num === f.num;
              return (
                <button
                  key={f.num}
                  onClick={() => handleFrameSelect(f.time)}
                  className={`py-2 px-2 sm:px-3 rounded-xl font-mono text-[10px] sm:text-xs text-center transition-all ${
                    isActive
                      ? 'bg-violet text-void font-bold shadow-lg shadow-violet/40 scale-105'
                      : 'bg-void/60 text-gray-400 hover:text-white hover:bg-white/5 border border-white/5'
                  }`}
                >
                  <span className="hidden sm:inline">{f.num}. </span>
                  <span className="truncate block sm:inline">{f.name}</span>
                </button>
              );
            })}
          </div>

          {/* Time Scrubber & Controls */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-violet text-white hover:text-void flex items-center justify-center transition-all flex-shrink-0"
              title={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? <Pause size={15} /> : <Play size={15} className="ml-0.5" />}
            </button>

            <button
              onClick={restartIntro}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all flex-shrink-0 hidden sm:flex"
              title="Restart Intro"
            >
              <RotateCcw size={14} />
            </button>

            {/* Scrubber slider */}
            <div className="flex-1 flex items-center space-x-3">
              <input
                type="range"
                min="0"
                max="12"
                step="0.05"
                value={currentTime}
                onChange={(e) => {
                  setCurrentTime(parseFloat(e.target.value));
                  setIsPlaying(false);
                }}
                className="w-full accent-rose cursor-pointer h-1.5 bg-white/20 rounded-lg"
              />
              <span className="font-mono text-xs text-bone-300 flex-shrink-0 w-20 text-right">
                {currentTime.toFixed(1)}s / 12.0s
              </span>
            </div>

            {/* Jump to Fest CTA */}
            <button
              onClick={onEnterFest}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-violet to-rose text-white font-mono text-xs font-bold uppercase tracking-wider hover:brightness-125 transition-all shadow-lg hidden md:flex items-center space-x-1.5"
            >
              <span>ENTER PORTAL</span>
              <ArrowDown size={13} />
            </button>
          </div>
        </div>

        {/* Scroll Helper Indicator */}
        <div className="mt-4 flex justify-between items-center font-mono text-[10px] text-gray-500 uppercase tracking-widest px-2">
          <span>CINEMATIC TIMELINE CONTROLLER</span>
          <button
            onClick={onEnterFest}
            className="flex items-center space-x-1 hover:text-cyan transition-colors"
          >
            <span>SCROLL OR CLICK TO ENTER FESTIVAL</span>
            <ArrowDown size={11} className="animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}

