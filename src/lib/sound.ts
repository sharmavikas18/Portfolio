// Bulletproof Web Audio API Synthesizer (never throws, zero external dependencies)

class SoundFX {
  private ctx: AudioContext | null = null;
  public enabled: boolean = false;

  private initCtx(): boolean {
    if (typeof window === "undefined" || !this.enabled) return false;
    try {
      if (!this.ctx) {
        const AudioCtx =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (AudioCtx) {
          this.ctx = new AudioCtx();
        }
      }
      if (this.ctx && this.ctx.state === "suspended") {
        this.ctx.resume().catch(() => { });
      }
      return !!this.ctx;
    } catch {
      return false;
    }
  }

  public playClick(freq = 600, duration = 0.04) {
    if (!this.enabled) return;
    try {
      if (!this.initCtx() || !this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(Math.max(10, freq * 0.5), this.ctx.currentTime + duration);

      gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch {
      // safe fallback
    }
  }

  public playKeypress() {
    if (!this.enabled) return;
    try {
      if (!this.initCtx() || !this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      const freqs = [380, 420, 460, 500, 540];
      const freq = freqs[Math.floor(Math.random() * freqs.length)];

      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(0.03, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.03);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.03);
    } catch {
      // safe fallback
    }
  }

  public playSuccess() {
    if (!this.enabled) return;
    try {
      if (!this.initCtx() || !this.ctx) return;

      const now = this.ctx.currentTime;
      [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
        try {
          const osc = this.ctx!.createOscillator();
          const gain = this.ctx!.createGain();

          osc.type = "sine";
          osc.frequency.setValueAtTime(freq, now + i * 0.07);

          gain.gain.setValueAtTime(0.05, now + i * 0.07);
          gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.07 + 0.12);

          osc.connect(gain);
          gain.connect(this.ctx!.destination);

          osc.start(now + i * 0.07);
          osc.stop(now + i * 0.07 + 0.12);
        } catch {
          // safe
        }
      });
    } catch {
      // safe fallback
    }
  }

  public playSynthPad(noteIndex = 0) {
    try {
      // If user clicks a synth pad, auto-enable sound for the pad
      this.enabled = true;
      if (!this.initCtx() || !this.ctx) return;

      const pentatonic = [261.63, 293.66, 329.63, 392.0, 440.0, 523.25, 587.33, 659.25];
      const freq = pentatonic[noteIndex % pentatonic.length];

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.4);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.4);
    } catch {
      // safe fallback
    }
  }
}

export const soundFX = new SoundFX();
