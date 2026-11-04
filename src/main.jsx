import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import Navbar from './components/Navbar';
import InterstellarHeroVideo from './components/InterstellarHeroVideo';
import DimensionalTransition from './components/DimensionalTransition';
import SchrodingerEventsGrid from './components/SchrodingerEventsGrid';
import FigureGroundArenas from './components/FigureGroundArenas';
import FestWorkshops from './components/FestWorkshops';
import MirrorScheduleTimeline from './components/MirrorScheduleTimeline';
import CosmicTransmissionStudio from './components/CosmicTransmissionStudio';
import RegistrationGateway from './components/RegistrationGateway';
import SponsorsEcosystem from './SponsorsEcosystem';

function App() {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [orbitAngle, setOrbitAngle] = useState(0);
  const [audioActive, setAudioActive] = useState(false);

  const handleToggleAudio = () => {
    setAudioActive((prev) => !prev);
  };

  // Relativistic Gravitational Accretion Cursor (Desktop only)
  useEffect(() => {
    const onMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', onMove);

    const timer = setInterval(() => {
      setOrbitAngle((prev) => (prev + 0.035) % (Math.PI * 2));
    }, 16);

    return () => {
      window.removeEventListener('mousemove', onMove);
      clearInterval(timer);
    };
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-void text-starlight-300 antialiased selection:bg-gold selection:text-void relative font-sans">
      {/* Relativistic Gravitational Cursor */}
      <div
        id="gravitational-cursor"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
        }}
        className="hidden md:block w-7 h-7 rounded-full border border-gold/40 relative pointer-events-none"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-gold-pale absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div
          style={{
            transform: `translate(${Math.cos(orbitAngle) * 15}px, ${Math.sin(orbitAngle) * 15}px)`,
          }}
          className="w-1 h-1 rounded-full bg-amber-molten absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"
        />
      </div>

      {/* Floating Minimalist Header Dock */}
      <Navbar
        onScrollTo={scrollTo}
        onOpenPass={() => scrollTo('pass-section')}
        onOpenRegister={() => scrollTo('gateway-section')}
        audioOn={audioActive}
        onToggleAudio={handleToggleAudio}
      />

      {/* 1. CINEMATIC HERO: FULLSCREEN INTERSTELLAR VIDEO BACKGROUND */}
      <div id="hero-section">
        <InterstellarHeroVideo
          onExploreEvents={() => scrollTo('events-section')}
          onOpenPass={() => scrollTo('pass-section')}
          isAudioActive={audioActive}
          onToggleAudio={handleToggleAudio}
        />
      </div>

      {/* 2. EVENT HORIZON TRANSITION BRIDGE */}
      <DimensionalTransition />

      {/* 3. EVENTS — SCHRÖDINGER GRID (DUAL OVERLAPPING PROBABILITY STATES) */}
      <section id="events-section" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 bg-celestial-events rounded-3xl my-6 border border-[#EA580C]/25 shadow-2xl">
        <SchrodingerEventsGrid
          onSelectTrack={(trackName) => {
            scrollTo('pass-section');
          }}
        />
      </section>

      {/* 4. CONTRADICTION ARENAS — FIGURE/GROUND GESTALT MATRIX */}
      <section id="arenas-section" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 my-6">
        <FigureGroundArenas
          onSelectTrack={(trackName) => {
            scrollTo('pass-section');
          }}
        />
      </section>

      {/* 5. TECHNICAL MASTERCLASSES & WORKSHOPS */}
      <section id="workshops-section" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 border-t border-white/5">
        <FestWorkshops onRegisterPass={() => scrollTo('pass-section')} />
      </section>

      {/* 6. SPACETIME SCHEDULE — MIRROR TIMELINE (CENTRAL AXIS & OPPOSING PARALLAX) */}
      <section id="schedule-section" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 bg-deep-schedule rounded-3xl my-6 border border-[#EA580C]/20 shadow-2xl">
        <MirrorScheduleTimeline />
      </section>

      {/* 7. CARD CREATION STUDIO: COSMIC TRANSMISSION STUDIO */}
      <section id="pass-section" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 bg-obsidian-studio rounded-3xl my-6 border border-gold-antique/25 shadow-2xl">
        <CosmicTransmissionStudio />
      </section>

      {/* 8. ECOSYSTEM & TECH ALLIES */}
      <section id="partners-section" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 border-t border-white/5">
        <SponsorsEcosystem />
      </section>

      {/* 9. REGISTRATION CELESTIAL GATEWAY & MINIMAL FOOTER */}
      <div id="gateway-section">
        <RegistrationGateway
          onScrollTop={() => scrollTo('hero-section')}
          onOpenPass={() => scrollTo('pass-section')}
        />
      </div>
    </div>
  );
}

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(<App />);
}
