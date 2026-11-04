// Generative Web Audio API ambient soundscape for cosmic paradox atmosphere
class ParadoxSoundscape {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.osc1 = null;
    this.osc2 = null;
    this.filter = null;
    this.gainNode = null;
    this.lfo = null;
    this.lfoGain = null;
  }

  init() {
    if (this.ctx) return;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    this.ctx = new AudioContext();

    // Master Gain
    this.gainNode = this.ctx.createGain();
    this.gainNode.gain.setValueAtTime(0, this.ctx.currentTime);
    this.gainNode.connect(this.ctx.destination);

    // Resonant Lowpass Filter (Cosmic space damping)
    this.filter = this.ctx.createBiquadFilter();
    this.filter.type = 'lowpass';
    this.filter.frequency.setValueAtTime(260, this.ctx.currentTime);
    this.filter.Q.setValueAtTime(3.5, this.ctx.currentTime);
    this.filter.connect(this.gainNode);

    // Deep sub-bass drone oscillator (55Hz - A1 note)
    this.osc1 = this.ctx.createOscillator();
    this.osc1.type = 'sawtooth';
    this.osc1.frequency.setValueAtTime(55, this.ctx.currentTime);
    this.osc1.connect(this.filter);

    // Ethereal fifth harmonic (82.5Hz - E2 note)
    this.osc2 = this.ctx.createOscillator();
    this.osc2.type = 'sine';
    this.osc2.frequency.setValueAtTime(82.5, this.ctx.currentTime);
    this.osc2.connect(this.filter);

    // Slow LFO for gravitational breathing pulse
    this.lfo = this.ctx.createOscillator();
    this.lfo.frequency.setValueAtTime(0.12, this.ctx.currentTime); // 8-second cycle
    this.lfoGain = this.ctx.createGain();
    this.lfoGain.gain.setValueAtTime(140, this.ctx.currentTime);
    this.lfo.connect(this.lfoGain);
    this.lfoGain.connect(this.filter.frequency);

    this.osc1.start();
    this.osc2.start();
    this.lfo.start();
  }

  toggle() {
    if (!this.ctx) {
      this.init();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    if (this.isPlaying) {
      if (this.gainNode) {
        this.gainNode.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + 1.2);
      }
      this.isPlaying = false;
    } else {
      if (this.gainNode) {
        this.gainNode.gain.cancelScheduledValues(this.ctx.currentTime);
        this.gainNode.gain.setValueAtTime(0.001, this.ctx.currentTime);
        this.gainNode.gain.exponentialRampToValueAtTime(0.18, this.ctx.currentTime + 1.8);
      }
      this.isPlaying = true;
    }
    return this.isPlaying;
  }

  playTriggerPing(freq = 520) {
    if (!this.ctx || !this.isPlaying) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 0.5, this.ctx.currentTime + 0.4);
      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.5);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.5);
    } catch {
      // ignore audio glitch
    }
  }
}

export const soundscape = new ParadoxSoundscape();

