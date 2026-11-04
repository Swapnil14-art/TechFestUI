import React from 'react';
import { ArrowUpRight, Cpu, Globe, Shield, Terminal, Zap } from 'lucide-react';

const ALLIES = [
  { name: 'GOOGLE CLOUD', tier: 'Compute Infrastructure', icon: Globe },
  { name: 'NVIDIA INCEPTION', tier: 'AI Hardware Acceleration', icon: Cpu },
  { name: 'GITHUB EDUCATION', tier: 'Developer Ecosystem', icon: Terminal },
  { name: 'INTEL ONEAPI', tier: 'Parallel Computing', icon: Zap },
  { name: 'POLYGON LABS', tier: 'Decentralized Tech', icon: Shield },
  { name: 'RAZORPAY RIFT', tier: 'Fintech Innovation', icon: ArrowUpRight },
];

export default function SponsorsEcosystem() {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
        <div>
          <span className="font-mono text-xs text-cyan uppercase tracking-widest block mb-2">
            [ 04 // ECOSYSTEM & ALLIES ]
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
            Allies From <span className="text-gradient-cosmic">Parallel Realities</span>
          </h2>
        </div>
        <p className="mt-3 md:mt-0 font-sans text-xs sm:text-sm text-bone-400 max-w-md leading-relaxed">
          Powered by industry pioneers advancing high-performance computing, frontier intelligence, and developer empowerment.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {ALLIES.map((ally, idx) => {
          const Icon = ally.icon;
          return (
            <div
              key={idx}
              className="glass-panel hover:glass-panel-glow p-5 rounded-2xl flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-10 h-10 rounded-xl bg-void/80 border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-cyan group-hover:border-cyan transition-all mb-3">
                <Icon size={18} />
              </div>
              <span className="font-display font-bold text-xs sm:text-sm text-white group-hover:text-cyan transition-colors">
                {ally.name}
              </span>
              <span className="font-mono text-[9px] text-gray-500 mt-1 uppercase tracking-wider">
                {ally.tier}
              </span>
            </div>
          );
        })}
      </div>

      <div className="mt-8 p-4 rounded-xl glass-pill text-center font-mono text-[11px] text-gray-400 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span>INTERESTED IN COLLIDING DIMENSIONS WITH US?</span>
        <a
          href="mailto:techfest@nmims.edu"
          className="text-violet hover:text-white flex items-center space-x-1 uppercase font-bold"
        >
          <span>BECOME AN ECOSYSTEM PARTNER</span>
          <ArrowUpRight size={13} />
        </a>
      </div>
    </div>
  );
}

