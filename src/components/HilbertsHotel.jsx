import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Info, RefreshCw, Sparkles, UserPlus, Users } from 'lucide-react';

/**
 * Hilbert’s Hotel — The Infinite Capacity Paradox
 * Designed exclusively for the Technical Masterclasses section.
 *
 * Visual & Interaction Architecture:
 * - Muted charcoal browser-style frame with rounded corners and subtle header dots.
 * - Prominent "SOLD OUT: All ∞ slots taken" banner with contrasting coral "Join anyway" CTA.
 * - Dense, evenly spaced room grid (#1 through #11, ending with #∞).
 * - Interactive FLIP shift: when user joins, everyone shifts n -> n + 1.
 * - Room #1 is assigned to 'YOU' with a bright coral/orange background.
 * - Previous assignments clearly indicated ('was #1', 'was #2', etc.).
 * - Supporting explanation: “Everyone moved from #n to #n+1 so you could have #1.”
 * - Mobile responsive without horizontal overflow.
 */

// Initial guests occupying rooms 1 to 11
const INITIAL_GUESTS = [
  { originalRoom: 1, name: 'Dr. Evelyn Vance', track: 'Agent Swarms' },
  { originalRoom: 2, name: 'Kiran Deshmukh', track: 'ZK Proofs' },
  { originalRoom: 3, name: 'Prof. Raghavan Nair', track: 'Kinematics' },
  { originalRoom: 4, name: 'Anya Chen', track: 'GLSL Shaders' },
  { originalRoom: 5, name: 'Alex Rivera', track: 'Neural Systems' },
  { originalRoom: 6, name: 'Elena Rostova', track: 'Lattice Crypto' },
  { originalRoom: 7, name: 'Devon Miller', track: 'Sensor Fusion' },
  { originalRoom: 8, name: 'Tara Campbell', track: 'Raymarching' },
  { originalRoom: 9, name: 'Siddharth Rao', track: 'Quantum ML' },
  { originalRoom: 10, name: 'Maya Lin', track: 'Spatial UI' },
  { originalRoom: 11, name: 'Julian Vance', track: 'Swarm Telemetry' },
];

export default function HilbertsHotel({ onRegisterPass, onSelectWorkshop }) {
  // shiftCount tracks how many guests have been inserted into room #1
  const [shiftCount, setShiftCount] = useState(0);
  const [isShifting, setIsShifting] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [feedbackMsg, setFeedbackMsg] = useState('');

  // Handle "Join anyway" click
  const handleJoinAnyway = () => {
    if (isShifting) return;

    setIsShifting(true);
    setFeedbackMsg('');

    // Trigger FLIP animation
    setTimeout(() => {
      setShiftCount((prev) => prev + 1);
      setIsShifting(false);
      setFeedbackMsg(
        shiftCount === 0
          ? 'Wavefunction collapsed: Room #1 allocated to YOU. All infinite existing guests shifted to n+1.'
          : `Another traveler inserted! You occupy Room #1; previous entrants shifted further into infinity.`
      );
    }, 400);
  };

  const handleReset = () => {
    setShiftCount(0);
    setSelectedRoom(null);
    setFeedbackMsg('Corridor reset to initial steady state. All rooms occupied.');
  };

  const hasJoined = shiftCount > 0;

  return (
    <div className="w-full my-8">
      {/* Outer Browser-Style Frame */}
      <div className="w-full rounded-2xl sm:rounded-3xl bg-[#090B10] border border-[#222736] overflow-hidden shadow-2xl transition-all">
        {/* Frame Topbar (Browser Style Window Controls & Identity) */}
        <div className="px-4 sm:px-6 py-3.5 bg-[#0D1017] border-b border-[#1E2330] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-[#EF4444]/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#F59E0B]/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#10B981]/80 inline-block" />
            <span className="ml-3 font-mono text-[11px] text-[#8E9BB0] tracking-wider uppercase font-medium">
              hilbert-hotel-protocol://masterclasses.paradox/v26
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <span className="font-mono text-[10px] text-[#EA580C] bg-[#EA580C]/10 border border-[#EA580C]/25 px-2.5 py-0.5 rounded-full uppercase tracking-wider font-semibold">
              MATHEMATICAL PARADOX
            </span>
            {hasJoined && (
              <button
                onClick={handleReset}
                className="font-mono text-[10px] text-[#A0AEC0] hover:text-white flex items-center space-x-1 transition-colors px-2 py-0.5 rounded border border-white/10 hover:border-white/30"
                title="Reset corridor to original state"
              >
                <RefreshCw size={10} className={isShifting ? 'animate-spin' : ''} />
                <span>RESET CORRIDOR</span>
              </button>
            )}
          </div>
        </div>

        {/* Content Container */}
        <div className="p-5 sm:p-8 lg:p-10 space-y-8">
          {/* Header & Sold-Out Banner */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#1B202D]">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-[#EA580C] font-mono text-xs uppercase tracking-[0.2em] font-bold">
                  [ CAPACITY PARADOX ]
                </span>
                <span className="text-white/30 text-xs">•</span>
                <span className="text-[#8E9BB0] font-mono text-xs uppercase tracking-wider">
                  DAVID HILBERT (1924)
                </span>
              </div>
              <h3 className="font-cinzel font-black text-2xl sm:text-4xl text-[#F4EFE6] tracking-wide uppercase">
                Hilbert’s Hotel <span className="text-[#EA580C]">Masterclass Registry</span>
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#9CA3AF] mt-2 max-w-xl font-light leading-relaxed">
                A hotel with infinitely many rooms, all completely occupied. When a new learner arrives, every occupant moves from room <code className="text-[#EA580C] font-mono font-semibold">n</code> to <code className="text-[#EA580C] font-mono font-semibold">n + 1</code>, freeing up Room #1 without unseating anyone.
              </p>
            </div>

            {/* A. Sold-out registration banner with contrasting CTA */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 bg-[#121622] p-3.5 sm:p-5 rounded-xl border border-[#2A3144] shrink-0">
              <div className="pr-2 sm:pr-4 sm:border-r sm:border-[#2A3144] flex items-center justify-between sm:block">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444] animate-ping shrink-0" />
                  <span className="font-mono font-black text-base sm:text-xl text-[#F87171] tracking-wider">
                    {hasJoined ? 'PARADOX EXPANDED' : 'SOLD OUT'}
                  </span>
                </div>
                <span className="font-mono text-[10px] sm:text-xs text-[#9CA3AF] block sm:mt-0.5 tracking-wide">
                  {hasJoined ? `All ∞ + ${shiftCount} slots filled` : 'All ∞ slots taken'}
                </span>
              </div>

              <button
                onClick={handleJoinAnyway}
                disabled={isShifting}
                className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-mono text-xs font-bold uppercase tracking-wider bg-[#EA580C] hover:bg-[#F97316] active:scale-95 text-white transition-all shadow-lg shadow-[#EA580C]/25 flex items-center justify-center space-x-2 cursor-pointer border border-[#FB923C]/40 group"
              >
                <UserPlus size={14} className="group-hover:rotate-12 transition-transform" />
                <span>{hasJoined ? 'SHIFT & ENTER AGAIN' : 'JOIN ANYWAY'}</span>
              </button>
            </div>
          </div>

          {/* Feedback & Status Message */}
          {feedbackMsg && (
            <div className="p-3.5 rounded-xl bg-[#151926] border border-[#EA580C]/30 flex items-center justify-between text-xs font-mono text-[#F4EFE6] animate-fade-in">
              <div className="flex items-center space-x-2.5">
                <CheckCircle2 size={15} className="text-[#EA580C] shrink-0" />
                <span>{feedbackMsg}</span>
              </div>
              {onRegisterPass && (
                <button
                  onClick={onRegisterPass}
                  className="hidden sm:inline-flex items-center space-x-1 text-[#EA580C] hover:underline uppercase text-[11px] font-bold ml-4"
                >
                  <span>MINT PASS</span>
                  <ArrowRight size={12} />
                </button>
              )}
            </div>
          )}

          {/* B. Infinite Room Grid (Responsive 2 to 6 columns, with horizontal landscape support on mobile) */}
          <div>
            <div className="flex flex-wrap items-center justify-between mb-4 gap-2">
              <span className="font-mono text-[10px] sm:text-[11px] text-[#718096] uppercase tracking-wider">
                CORRIDOR ROOM ASSIGNMENTS (CARDINALITY ℵ₀)
              </span>
              <span className="font-mono text-[10px] sm:text-[11px] text-[#A0AEC0] flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-[#EA580C] inline-block" />
                <span>Active Occupant = YOU</span>
              </span>
            </div>

            {/* Room grid: 2 cols on smallest mobile, 3 on larger mobile, 4 on tablet, 6 on desktop */}
            <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5 sm:gap-4">
              {/* Room 1: If joined, this is YOU! If not joined, initial occupant #1 */}
              <div
                onClick={() => setSelectedRoom(1)}
                className={`rounded-xl p-3 sm:p-4 transition-all duration-500 flex flex-col justify-between min-h-[105px] sm:min-h-[110px] cursor-pointer border relative overflow-hidden select-none active:scale-95 ${
                  hasJoined
                    ? 'bg-[#EA580C] border-[#FB923C] text-white shadow-xl shadow-[#EA580C]/30 scale-[1.02]'
                    : 'bg-[#12151F] border-[#222736] hover:border-[#384055] text-[#E2E8F0]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`font-mono text-base sm:text-lg font-black tracking-tight ${
                      hasJoined ? 'text-white' : 'text-[#F4EFE6]'
                    }`}
                  >
                    #1
                  </span>
                  {hasJoined ? (
                    <span className="px-1.5 py-0.5 rounded-full bg-white text-[#EA580C] font-mono text-[9px] font-black tracking-widest uppercase shadow">
                      YOU
                    </span>
                  ) : (
                    <span className="font-mono text-[9px] text-[#718096] uppercase">
                      OCCUPIED
                    </span>
                  )}
                </div>

                <div className="mt-1.5">
                  <span
                    className={`block font-sans text-[11px] sm:text-xs font-semibold truncate ${
                      hasJoined ? 'text-white' : 'text-[#CBD5E1]'
                    }`}
                  >
                    {hasJoined ? 'You (New Entrant)' : INITIAL_GUESTS[0].name}
                  </span>
                  <span
                    className={`block font-mono text-[9px] sm:text-[10px] truncate mt-0.5 ${
                      hasJoined ? 'text-white/80' : 'text-[#718096]'
                    }`}
                  >
                    {hasJoined ? 'Track: Reserved' : `Track: ${INITIAL_GUESTS[0].track}`}
                  </span>
                </div>

                {hasJoined ? (
                  <div className="mt-1 font-mono text-[8px] text-white/90 font-medium">
                    Allocated via shift
                  </div>
                ) : (
                  <div className="mt-1 font-mono text-[8px] text-[#718096]">
                    Slot 1 / ∞
                  </div>
                )}
              </div>

              {/* Rooms 2 through 11 */}
              {INITIAL_GUESTS.slice(1).map((guest, idx) => {
                const roomNumber = idx + 2;
                const occupant = hasJoined
                  ? INITIAL_GUESTS[idx]
                  : guest;

                const wasRoom = hasJoined ? roomNumber - 1 : null;

                return (
                  <div
                    key={roomNumber}
                    onClick={() => setSelectedRoom(roomNumber)}
                    className={`rounded-xl p-3 sm:p-4 transition-all duration-500 flex flex-col justify-between min-h-[105px] sm:min-h-[110px] cursor-pointer border relative select-none bg-[#12151F] border-[#222736] hover:border-[#384055] hover:bg-[#161A26] text-[#E2E8F0] active:scale-95 ${
                      isShifting ? 'translate-x-1 opacity-70' : 'translate-x-0 opacity-100'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-base sm:text-lg font-bold text-[#F4EFE6]">
                        #{roomNumber}
                      </span>
                      {wasRoom !== null ? (
                        <span className="px-1.5 py-0.5 rounded bg-[#EA580C]/20 border border-[#EA580C]/40 text-[#FB923C] font-mono text-[8px] sm:text-[9px] font-bold">
                          was #{wasRoom}
                        </span>
                      ) : (
                        <span className="font-mono text-[9px] text-[#64748B] uppercase">
                          OCCUPIED
                        </span>
                      )}
                    </div>

                    <div className="mt-1.5">
                      <span className="block font-sans text-[11px] sm:text-xs font-medium text-[#CBD5E1] truncate">
                        {occupant.name}
                      </span>
                      <span className="block font-mono text-[9px] sm:text-[10px] text-[#718096] truncate mt-0.5">
                        Track: {occupant.track}
                      </span>
                    </div>

                    {wasRoom !== null ? (
                      <div className="mt-1 font-mono text-[8px] text-[#A0AEC0]">
                        Shifted {wasRoom} → {roomNumber}
                      </div>
                    ) : (
                      <div className="mt-1 font-mono text-[8px] text-[#718096]">
                        Slot {roomNumber} / ∞
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Special Room #∞ Card */}
              <div
                onClick={() => setSelectedRoom('infinity')}
                className="rounded-xl p-3 sm:p-4 border border-[#EA580C]/35 bg-[#14121B] hover:bg-[#1A1624] flex flex-col justify-between min-h-[105px] sm:min-h-[110px] cursor-pointer relative overflow-hidden select-none transition-all group active:scale-95"
              >
                <div className="flex items-center justify-between">
                  <span className="font-cinzel text-xl sm:text-2xl font-black text-[#FB923C] group-hover:scale-110 transition-transform">
                    #∞
                  </span>
                  <span className="px-1.5 py-0.5 rounded-full bg-[#EA580C]/20 border border-[#EA580C]/40 text-[#FB923C] font-mono text-[8px] sm:text-[9px] font-bold uppercase">
                    CONTINUUM
                  </span>
                </div>

                <div className="mt-1.5">
                  <span className="block font-sans text-[11px] sm:text-xs font-semibold text-[#F4EFE6] truncate">
                    Infinite Continuum
                  </span>
                  <span className="block font-mono text-[9px] sm:text-[10px] text-[#EA580C]/80 mt-0.5 truncate">
                    {hasJoined ? 'n → n+1 to infinity' : 'Rooms continue forever'}
                  </span>
                </div>

                <div className="mt-1 font-mono text-[8px] text-[#718096]">
                  Cardinality ℵ₀ boundless
                </div>
              </div>
            </div>
          </div>

          {/* D. Supporting explanation */}
          <div className="pt-4 border-t border-[#1E2330] flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <p className="font-serif italic text-sm sm:text-base text-[#E2E8F0]">
              “Everyone moved from <span className="text-[#EA580C] font-mono font-semibold">#n</span> to{' '}
              <span className="text-[#EA580C] font-mono font-semibold">#n+1</span> so you could have{' '}
              <span className="text-[#EA580C] font-mono font-semibold">#1</span>.”
            </p>

            <span className="font-mono text-[11px] text-[#718096] uppercase tracking-wider shrink-0">
              NO CAPACITY LIMITS IN THE INFINITE MATRIX
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
