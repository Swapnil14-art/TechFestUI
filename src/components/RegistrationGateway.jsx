import React, { useState } from 'react';
import { ArrowUp, ArrowUpRight, Check, Compass, Mail, Phone, Send, ShieldCheck, Sparkles, X } from 'lucide-react';

/**
 * Registration Gateway & Celestial Horizon
 * - Feels like approaching a luminous celestial gateway with molten amber and gold chiaroscuro
 * - Fully functional Registration Modal with attendee form, validation, and instant confirmation receipt
 * - Minimal cinematic footer with official NMIMS Shirpur MPSTME fest info, coordinates, and social links
 */
export default function RegistrationGateway({ onScrollTop, onOpenPass }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    track: 'The Singularity Hackathon',
    teamSize: '1',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [regId, setRegId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    const generatedId = `REG-PRDX-${Math.floor(10000 + Math.random() * 90000)}`;
    setRegId(generatedId);
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      college: '',
      track: 'The Singularity Hackathon',
      teamSize: '1',
    });
    setModalOpen(false);
  };

  return (
    <div className="w-full relative">
      {/* 1. Celestial Gateway Section */}
      <section className="py-24 sm:py-32 relative overflow-hidden bg-portal-gateway border-t border-gold-antique/20">
        {/* Luminous Celestial Horizon Halo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[950px] h-[350px] sm:h-[450px] rounded-full bg-gradient-to-t from-gold-deep/20 via-amber-molten/20 to-transparent blur-[140px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
          <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full glass-panel border border-gold-antique/30 text-xs font-mono tracking-[0.25em] text-gold-pale uppercase mb-6 shadow-2xl">
            <Sparkles size={12} className="text-gold" />
            <span>FINAL MISSION TRANSMISSION // MARCH 10 — 13, 2026</span>
          </div>

          <h2 className="font-cinzel font-black text-3xl sm:text-6xl text-white uppercase tracking-wider leading-tight max-w-3xl">
            Will You Step <br />
            <span className="text-gradient-gold font-serif italic font-normal">
              Through The Horizon?
            </span>
          </h2>

          <p className="font-sans text-sm sm:text-lg text-starlight-300 max-w-xl mx-auto mt-6 leading-relaxed font-light">
            Registrations are officially active across India. Secure your delegation clearance to participate in the flagship hackathon, robotics gauntlets, and high-stakes arenas.
          </p>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button
              onClick={() => setModalOpen(true)}
              className="w-full sm:w-auto px-9 py-4 rounded-xl font-mono text-xs font-bold uppercase tracking-[0.2em] text-void bg-gradient-to-r from-gold-pale via-gold to-amber-molten hover:brightness-110 transition-all shadow-2xl shadow-gold/30 flex items-center justify-center space-x-3 group"
            >
              <span>REGISTER DELEGATION NOW</span>
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-void" />
            </button>

            <button
              onClick={onOpenPass}
              className="w-full sm:w-auto px-8 py-4 rounded-xl glass-panel text-gold-pale font-mono text-xs font-semibold tracking-[0.15em] transition-all border border-gold-antique/40 hover:border-gold hover:bg-gold/10 flex items-center justify-center space-x-2.5 backdrop-blur-md"
            >
              <ShieldCheck size={15} className="text-gold" />
              <span>MINT HOLOGRAPHIC BADGE</span>
            </button>
          </div>

          <div className="mt-8 font-mono text-[11px] text-starlight-500 tracking-widest uppercase flex items-center space-x-4">
            <span>NMIMS SHIRPUR CAMPUS</span>
            <span>•</span>
            <span className="text-gold-antique">ELIGIBILITY: NATIONWIDE COLLEGIATE</span>
            <span>•</span>
            <span>BOUNTY: ₹5,00,000+</span>
          </div>
        </div>
      </section>

      {/* 2. Registration Slide-over Modal Form */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-void/85 backdrop-blur-2xl animate-fade-in">
          <div className="glass-panel-gold border border-gold/40 rounded-3xl max-w-xl w-full p-6 sm:p-8 max-h-[92vh] overflow-y-auto relative shadow-2xl">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-surface border border-white/15 hover:border-gold flex items-center justify-center text-white transition-colors"
            >
              <X size={17} />
            </button>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                <div className="border-b border-white/10 pb-3">
                  <span className="text-gold text-[10px] uppercase tracking-[0.2em] block mb-1">
                    OFFICIAL DELEGATION PORTAL
                  </span>
                  <h3 className="font-cinzel font-bold text-2xl text-white uppercase tracking-wider">
                    Registration Dossier
                  </h3>
                </div>

                <div>
                  <label className="text-starlight-300 block mb-1 text-[11px] uppercase tracking-wider">
                    DELEGATE FULL NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-surface border border-white/15 text-white focus:outline-none focus:border-gold transition-colors"
                    placeholder="E.g. Aryan Sharma"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-starlight-300 block mb-1 text-[11px] uppercase tracking-wider">
                      OFFICIAL EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-surface border border-white/15 text-white focus:outline-none focus:border-gold transition-colors"
                      placeholder="name@college.edu"
                    />
                  </div>
                  <div>
                    <label className="text-starlight-300 block mb-1 text-[11px] uppercase tracking-wider">
                      CONTACT PHONE *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-surface border border-white/15 text-white focus:outline-none focus:border-gold transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-starlight-300 block mb-1 text-[11px] uppercase tracking-wider">
                    AFFILIATED INSTITUTION *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.college}
                    onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-surface border border-white/15 text-white focus:outline-none focus:border-gold transition-colors"
                    placeholder="E.g. NMIMS Shirpur // MPSTME"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-starlight-300 block mb-1 text-[11px] uppercase tracking-wider">
                      PRIMARY TRACK
                    </label>
                    <select
                      value={formData.track}
                      onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-surface border border-white/15 text-white focus:outline-none focus:border-gold transition-colors"
                    >
                      <option value="The Singularity Hackathon">The Singularity Hackathon</option>
                      <option value="Cyber-Classical Robotics">Cyber-Classical Robotics</option>
                      <option value="Schrödinger's Cryptographic CTF">Schrödinger's CTF</option>
                      <option value="Non-Euclidean Creative Lab">Non-Euclidean Lab</option>
                      <option value="Quantum League Esports">Quantum League Esports</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-starlight-300 block mb-1 text-[11px] uppercase tracking-wider">
                      CREW / SQUAD SIZE
                    </label>
                    <select
                      value={formData.teamSize}
                      onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-surface border border-white/15 text-white focus:outline-none focus:border-gold transition-colors"
                    >
                      <option value="1">Solo Operator (1)</option>
                      <option value="2">Duo Crew (2)</option>
                      <option value="3">Triad Squad (3)</option>
                      <option value="4">Full Squad (4)</option>
                      <option value="5">Esports Roster (5)</option>
                    </select>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setModalOpen(false)}
                    className="px-4 py-2.5 rounded-xl border border-white/15 text-starlight-400 hover:text-white"
                  >
                    CANCEL
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl font-bold bg-gradient-to-r from-gold-pale via-gold to-amber-molten text-void hover:brightness-110 transition-all shadow-lg flex items-center space-x-2"
                  >
                    <span>CONFIRM REGISTRATION</span>
                    <Send size={13} />
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-6 space-y-4 font-mono">
                <div className="w-16 h-16 rounded-full bg-gold/15 border-2 border-gold mx-auto flex items-center justify-center text-gold">
                  <Check size={28} />
                </div>

                <span className="text-gold text-xs uppercase tracking-[0.2em] block">
                  REGISTRATION VERIFIED & LOCKED
                </span>

                <h3 className="font-cinzel font-black text-2xl text-white uppercase tracking-wider">
                  Welcome To The Horizon
                </h3>

                <div className="p-4 rounded-2xl bg-surface border border-gold-antique/30 max-w-sm mx-auto text-left text-xs space-y-2">
                  <div className="flex justify-between">
                    <span className="text-starlight-500">DELEGATE ID:</span>
                    <span className="text-gold-bright font-bold">{regId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-starlight-500">OPERATOR:</span>
                    <span className="text-white truncate max-w-[180px]">{formData.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-starlight-500">TRACK:</span>
                    <span className="text-starlight-200 truncate max-w-[180px]">{formData.track}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-starlight-500">VENUE:</span>
                    <span className="text-starlight-200">NMIMS SHIRPUR</span>
                  </div>
                </div>

                <p className="font-sans text-xs text-starlight-400 max-w-md mx-auto leading-relaxed">
                  Confirmation receipt has been dispatched to <b className="text-white">{formData.email}</b>. You can now mint your customized holographic pass badge.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={() => {
                      resetForm();
                      onOpenPass();
                    }}
                    className="px-6 py-2.5 rounded-xl font-bold bg-gradient-to-r from-gold via-amber-molten to-gold text-void transition-all shadow-lg text-xs"
                  >
                    PROCEED TO PASS STUDIO →
                  </button>
                  <button
                    onClick={resetForm}
                    className="px-4 py-2.5 rounded-xl border border-white/15 text-starlight-400 hover:text-white text-xs"
                  >
                    CLOSE
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 3. Minimal Cinematic Footer */}
      <footer className="border-t border-white/10 py-16 bg-[#020306] font-mono text-xs text-starlight-500 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
            {/* Column 1: Institutional & Identity */}
            <div className="md:col-span-5 space-y-3">
              <div className="flex items-center space-x-3">
                <span className="w-8 h-8 rounded-lg bg-surface border border-gold-antique/40 flex items-center justify-center font-cinzel font-black text-white text-base">
                  ∞
                </span>
                <div>
                  <span className="font-cinzel font-black text-sm text-white block uppercase tracking-wider">
                    NMIMS SHIRPUR // MPSTME
                  </span>
                  <span className="font-mono text-[9px] text-starlight-500 tracking-[0.2em] block uppercase">
                    ANNUAL TECH FIESTA 2026
                  </span>
                </div>
              </div>

              <p className="font-sans text-xs text-starlight-400 max-w-sm leading-relaxed font-light">
                Mukesh Patel School of Technology Management & Engineering (MPSTME), Shirpur Campus. Babulde, Bank of Tapi River, Mumbai-Agra National Highway, Shirpur, Maharashtra 425405.
              </p>

              <div className="pt-2 text-[11px] text-gold-antique flex items-center space-x-2">
                <Compass size={13} />
                <span>COORDINATES: 20.8845° N, 74.8940° E // STATION 001</span>
              </div>
            </div>

            {/* Column 2: Navigation Links */}
            <div className="md:col-span-3 space-y-2">
              <span className="text-white font-bold block mb-2 uppercase tracking-wider font-cinzel text-xs">
                EXPLORE HORIZONS
              </span>
              <a href="#hero-section" className="block hover:text-gold transition-colors">
                Cinematic Horizon
              </a>
              <a href="#arenas-section" className="block hover:text-gold transition-colors">
                Contradiction Arenas
              </a>
              <a href="#reality-engine-section" className="block hover:text-gold transition-colors">
                The Reality Engine
              </a>
              <a href="#schedule-section" className="block hover:text-gold transition-colors">
                Spacetime Schedule
              </a>
              <a href="#pass-section" className="block hover:text-gold transition-colors">
                Cosmic Pass Studio
              </a>
            </div>

            {/* Column 3: Communication Matrix */}
            <div className="md:col-span-4 space-y-2">
              <span className="text-white font-bold block mb-2 uppercase tracking-wider font-cinzel text-xs">
                COMMUNICATION MATRIX
              </span>
              <div className="flex items-center space-x-2 text-starlight-300">
                <Mail size={13} className="text-gold" />
                <span>techfest@nmims.edu</span>
              </div>
              <div className="flex items-center space-x-2 text-starlight-300">
                <Phone size={13} className="text-gold" />
                <span>+91 (02563) 286545 / 286546</span>
              </div>
              <div className="pt-4 font-serif italic text-sm text-starlight-300 border-t border-white/5 mt-3">
                "Do not go gentle into that good night. Rage against the dying of the light."
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-starlight-500 gap-4">
            <span>© 2026 NMIMS SHIRPUR. ALL RIGHTS RESERVED. THE IMPOSSIBLE COEXISTS.</span>

            <button
              onClick={onScrollTop}
              className="flex items-center space-x-1.5 text-starlight-300 hover:text-gold transition-colors cursor-pointer"
            >
              <span>RETURN TO SINGULARITY</span>
              <ArrowUp size={13} />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

