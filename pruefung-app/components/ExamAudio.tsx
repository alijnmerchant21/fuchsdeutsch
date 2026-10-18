'use client';
/* Exam player: one press plays the recording as often as in the real exam (with a short pause),
   no pausing or skipping. If the MP3 is missing, the browser's German voice reads the script. */
import { useEffect, useRef, useState } from 'react';
import { asset } from '@/lib/config';

type State = 'idle' | 'play' | 'pause' | 'used';
const GAP = 6; // seconds between plays

export function ExamAudio({ src, plays = 1, script }: { src?: string; plays?: number; script?: [string, string][] }) {
  const [state, setState] = useState<State>('idle');
  const [round, setRound] = useState(0);
  const [pct, setPct] = useState(0);
  const [tts, setTts] = useState(false);
  const audio = useRef<HTMLAudioElement | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const alive = useRef(true);

  useEffect(() => {
    alive.current = true;
    if (!src) { setTts(true); return; }
    const a = new Audio(asset(src));
    a.preload = 'auto';
    a.onerror = () => setTts(true);
    a.ontimeupdate = () => a.duration && setPct((100 * a.currentTime) / a.duration);
    audio.current = a;
    return () => { alive.current = false; a.pause(); if (timer.current) clearTimeout(timer.current); window.speechSynthesis?.cancel(); };
  }, [src]);

  const speak = () => new Promise<void>((done) => {
    const synth = window.speechSynthesis;
    if (!synth || !script?.length) { done(); return; }
    const voices = synth.getVoices().filter((v) => v.lang.startsWith('de'));
    const lines = script.map(([, t]) => t);
    let i = 0;
    const next = () => {
      if (!alive.current || i >= lines.length) { done(); return; }
      const u = new SpeechSynthesisUtterance(lines[i]);
      u.lang = 'de-DE'; u.rate = 0.92;
      if (voices.length) u.voice = voices[i % Math.min(voices.length, 3)];
      u.onend = () => { i += 1; setPct((100 * i) / lines.length); next(); };
      synth.speak(u);
    };
    next();
  });

  const playOnce = () => new Promise<void>((done) => {
    if (tts || !audio.current) { void speak().then(done); return; }
    const a = audio.current;
    a.currentTime = 0;
    a.onended = () => done();
    a.play().catch(() => { setTts(true); void speak().then(done); });
  });

  const start = async () => {
    if (state !== 'idle') return;
    for (let r = 1; r <= plays; r++) {
      if (!alive.current) return;
      setRound(r); setPct(0); setState('play');
      await playOnce();
      if (r < plays) { setState('pause'); await new Promise((res) => { timer.current = setTimeout(res, GAP * 1000); }); }
    }
    if (alive.current) { setState('used'); setPct(100); }
  };

  const label = state === 'idle' ? `Start: Sie hören den Text ${plays === 2 ? 'zweimal' : 'einmal'}.`
    : state === 'play' ? `Hören … (${round}. Mal)`
      : state === 'pause' ? `Pause, gleich kommt das ${round + 1}. Mal`
        : 'Fertig gehört. Beantworten Sie jetzt die Aufgaben.';

  return (
    <div className="player" data-state={state}>
      <button type="button" className="pbtn" onClick={start} disabled={state !== 'idle'} aria-label="Abspielen">
        {state === 'idle' ? '▶' : state === 'used' ? '✓' : '♪'}
      </button>
      <div className="pinfo">
        <span className="pstate">{label}</span>
        <span className="pbar"><i style={{ width: `${pct}%` }} /></span>
        <span className="pdots">{Array.from({ length: plays }, (_, i) => <i key={i} className={round > i ? 'on' : ''} />)}</span>
        {tts && <span className="small dim">Browser-Stimme (Aufnahme fehlt noch)</span>}
      </div>
    </div>
  );
}
