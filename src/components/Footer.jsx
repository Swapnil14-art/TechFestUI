import React from 'react';
import { ArrowUp, ArrowUpRight, Compass, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer({ onScrollTop }) {
  return (
    <footer className="border-t border-white/10 py-16 bg-abyss/40 font-mono text-xs text-gray-400 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
          {/* Column 1: Institutional & Identity */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center space-x-3">
              <span className="w-8 h-8 rounded-lg bg-void border border-white/20 flex items-center justify-center font-display font-black text-white text-base">
                ∞
              </span>
              <div>
                <span className="font-display font-black text-sm text-white block">
                  NMIMS SHIRPUR
                </span>
                <span className="font-mono text-[9px] text-gray-500 tracking-widest block uppercase">
                  MPSTME ANNUAL TECH FIESTA 2026
                </span>
              </div>
            </div>

            <p className="font-sans text-xs text-gray-400 max-w-sm leading-relaxed">
              Mukesh Patel School of Technology Management & Engineering (MPSTME), Shirpur Campus. Babulde, Bank of Tapi River, Mumbai-Agra National Highway, Shirpur, Maharashtra 425405.
            </p>

            <div className="pt-2 text-[11px] text-cyan flex items-center space-x-2">
              <Compass size={13} />
              <span>COORDINATES: 20.8845° N, 74.8940° E // DIMENSION 001</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <span className="text-white font-bold block mb-2 uppercase tracking-wider">
              NAVIGATION
            </span>
            <a href="#hero-scroll-container" className="block hover:text-white transition-colors">
              The Glitch Anomaly
            </a>
            <a href="#arenas-section" className="block hover:text-white transition-colors">
              Competitions & Bounties
            </a>
            <a href="#workshops-section" className="block hover:text-white transition-colors">
              Technical Masterclasses
            </a>
            <a href="#schedule-section" className="block hover:text-white transition-colors">
              Chronological Schedule
            </a>
            <a href="#pass-section" className="block hover:text-white transition-colors">
              Delegate Pass Minting
            </a>
          </div>

          {/* Column 3: Contact & Inquiries */}
          <div className="md:col-span-4 space-y-2">
            <span className="text-white font-bold block mb-2 uppercase tracking-wider">
              COMMUNICATION MATRIX
            </span>
            <div className="flex items-center space-x-2 text-gray-300">
              <Mail size={13} className="text-rose" />
              <span>techfest@nmims.edu</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <Phone size={13} className="text-cyan" />
              <span>+91 (02563) 286545 / 286546</span>
            </div>
            <div className="pt-4 font-serif italic text-sm text-bone-300 border-t border-white/5 mt-3">
              "The impossible does not wait for permission to exist."
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500 gap-4">
          <span>© 2026 NMIMS SHIRPUR. ALL RIGHTS RESERVED. REALITY IS ONLY A VARIABLE.</span>

          <button
            onClick={onScrollTop}
            className="flex items-center space-x-1.5 text-bone-300 hover:text-cyan transition-colors"
          >
            <span>RETURN TO SINGULARITY</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
}

