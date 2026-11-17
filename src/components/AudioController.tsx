import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface AudioControllerProps {
  onLabel: string;
  offLabel: string;
  hintLabel: string;
  volumeLabel: string;
}

/**
 * Optional, muted-by-default Web Audio API synthesizer.
 * Generates original ambient pad tones and subtle UI chimes locally
 * without any third-party or copyrighted audio files.
 */
export default function AudioController({
  onLabel,
  offLabel,
  hintLabel,
  volumeLabel,
}: AudioControllerProps) {
  const [enabled, setEnabled] = useState(false);
  const [volume, setVolume] = useState(0.25);
  const ctxRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const oscNodesRef = useRef<OscillatorNode[]>([]);

  const stopAmbient = () => {
    oscNodesRef.current.forEach((osc) => {
      try {
        osc.stop();
        osc.disconnect();
      } catch {
        // Ignore already-stopped oscillators
      }
    });
    oscNodesRef.current = [];
    if (ctxRef.current && ctxRef.current.state === 'running') {
      ctxRef.current.suspend().catch(() => {});
    }
  };

  const startAmbient = async () => {
    if (typeof window === 'undefined') return;
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;

    if (!ctxRef.current) {
      ctxRef.current = new AudioCtx();
    }
    const ctx = ctxRef.current;
    if (ctx.state === 'suspended') {
      await ctx.resume();
    }

    const master = ctx.createGain();
    master.gain.setValueAtTime(0.0001, ctx.currentTime);
    master.gain.exponentialRampToValueAtTime(Math.max(0.01, volume * 0.09), ctx.currentTime + 0.6);

    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(420, ctx.currentTime);

    master.connect(filter);
    filter.connect(ctx.destination);
    masterGainRef.current = master;

    // Soft minor-9th midnight chord (A2, E3, B3, C#4) — purely synthesized
    const freqs = [110, 164.81, 246.94, 277.18];
    const created: OscillatorNode[] = freqs.map((freq, idx) => {
      const osc = ctx.createOscillator();
      osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      const oscGain = ctx.createGain();
      oscGain.gain.setValueAtTime(0.22 / freqs.length, ctx.currentTime);
      osc.connect(oscGain);
      oscGain.connect(master);
      osc.start();
      return osc;
    });
    oscNodesRef.current = created;
  };

  const handleToggle = async () => {
    if (enabled) {
      stopAmbient();
      setEnabled(false);
    } else {
      try {
        await startAmbient();
        setEnabled(true);
      } catch {
        setEnabled(false);
      }
    }
  };

  useEffect(() => {
    if (masterGainRef.current && ctxRef.current && enabled) {
      masterGainRef.current.gain.setTargetAtTime(
        Math.max(0.001, volume * 0.09),
        ctxRef.current.currentTime,
        0.08
      );
    }
  }, [volume, enabled]);

  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden && enabled) {
        stopAmbient();
        setEnabled(false);
      }
    };
    const handlePageHide = () => {
      if (enabled) {
        stopAmbient();
        setEnabled(false);
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);
    window.addEventListener('pagehide', handlePageHide);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibility);
      window.removeEventListener('pagehide', handlePageHide);
      stopAmbient();
    };
  }, [enabled]);

  return (
    <div className="audio-ctrl" title={hintLabel}>
      <button
        type="button"
        onClick={handleToggle}
        className={`audio-ctrl__btn ${enabled ? 'is-on' : ''}`}
        aria-pressed={enabled}
        aria-label={hintLabel}
      >
        {enabled ? <Volume2 size={15} aria-hidden="true" /> : <VolumeX size={15} aria-hidden="true" />}
        <span>{enabled ? onLabel : offLabel}</span>
      </button>
      {enabled && (
        <input
          type="range"
          min={0.05}
          max={1}
          step={0.05}
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
          className="audio-ctrl__slider"
          aria-label={volumeLabel}
        />
      )}
    </div>
  );
}
