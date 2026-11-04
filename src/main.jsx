import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import Navbar from './components/Navbar';
import InterstellarHeroVideo from './components/InterstellarHeroVideo';
import FestEvents from './components/FestEvents';
import FestWorkshops from './components/FestWorkshops';
import FestSchedule from './components/FestSchedule';
import ContradictionEngine from './ContradictionEngine';
import HolographicPassGenerator from './HolographicPassGenerator';
import SponsorsEcosystem from './SponsorsEcosystem';
import Footer from './components/Footer';

function App() {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [orbitAngle, setOrbitAngle] = useState(0);

  // Subtle Gravitational Accretion Cursor (desktop only)
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
    <div className="min-h-screen bg-void text-starlight-300 antialiased selection:bg-indigo-light selection:text-white relative font-sans">
      {/* Subtle Gravitational Lensing Cursor */}
      <div
        id="gravitational-cursor"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
        }}
        className="hidden md:block w-7 h-7 rounded-full border border-indigo-light/30 relative pointer-events-none"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div
          style={{
            transform: `translate(${Math.cos(orbitAngle) * 15}px, ${Math.sin(orbitAngle) * 15}px)`,
          }}
          className="w-1 h-1 rounded-full bg-indigo-accent absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"
        />
      </div>

      {/* Global Minimalist Header Dock */}
      <Navbar
        onScrollTo={scrollTo}
        onOpenPass={() => scrollTo('pass-section')}
      />

      {/* 1. HERO VIDEO: FULLSCREEN CINEMATIC INTERSTELLAR BACKGROUND */}
      <div id="hero-section">
        <InterstellarHeroVideo
          onExploreEvents={() => scrollTo('arenas-section')}
          onOpenPass={() => scrollTo('pass-section')}
        />
      </div>

      {/* 2. COMPETITIONS & HACKATHONS */}
      <section id="arenas-section" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 border-t border-white/5">
        <FestEvents
          onSelectTrack={(trackName) => {
            scrollTo('pass-section');
          }}
        />
      </section>

      {/* 3. TECHNICAL MASTERCLASSES & WORKSHOPS */}
      <section id="workshops-section" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 border-t border-white/5">
        <FestWorkshops onRegisterPass={() => scrollTo('pass-section')} />
      </section>

      {/* 4. FOUR-DAY FESTIVAL CHRONOLOGICAL SCHEDULE */}
      <section id="schedule-section" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 border-t border-white/5">
        <FestSchedule />
      </section>

      {/* 5. ATMOSPHERIC SECTION: GRAVITATIONAL DUALITY MATRIX (ORDER vs SINGULARITY) */}
      <section id="matrix-section" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 border-t border-white/5">
        <ContradictionEngine />
      </section>

      {/* 6. SCHRÖDINGER'S HOLOGRAPHIC PASS GENERATOR */}
      <section id="pass-section" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 border-t border-white/5">
        <HolographicPassGenerator />
      </section>

      {/* 7. ALLIES & ECOSYSTEM */}
      <section id="partners-section" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 border-t border-white/5">
        <SponsorsEcosystem />
      </section>

      {/* 8. EDITORIAL FOOTER */}
      <Footer onScrollTop={() => scrollTo('hero-section')} />
    </div>
  );
}

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(<App />);
}
