'use client';
import { useEffect, useRef, useState } from 'react';
import type { AudioBlock } from '@/content/types';
import { speakers } from '@/content/speakers';
import { canSpeak, hasRecording, speakLines } from '@/lib/audio';
import { Rich } from './Rich';

export function AudioPlayer({ b }: { b: AudioBlock }) {
  const [playing, setPlaying] = useState(false);
  const [line, setLine] = useState(-1);
  const [showText, setShowText] = useState(false);
  const [slow, setSlow] = useState(false);
  const [recorded, setRecorded] = useState(false);
  const [plays, setPlays] = useState(0);
  const stop = useRef<() => void>(() => {});
  const el = useRef<HTMLAudioElement | null>(null);

  useEffect(() => { void hasRecording(b.id).then(setRecorded); return () => stop.current(); }, [b.id]);

  const cast = [...new Set(b.lines.map((l) => l.speaker))].map((id) => speakers[id]).filter(Boolean);

  const toggle = () => {
    if (playing) { stop.current(); el.current?.pause(); setPlaying(false); setLine(-1); return; }
    setPlaying(true); setPlays((n) => n + 1);
    if (recorded) {
      const a = el.current ?? new Audio(`/audio/${b.id}.mp3`);
      el.current = a; a.playbackRate = slow ? 0.8 : 1; a.currentTime = 0;
      a.onended = () => setPlaying(false);
      void a.play();
      stop.current = () => a.pause();
    } else {
      stop.current = speakLines(b.lines, setLine, () => { setPlaying(false); setLine(-1); }, slow ? 0.8 : 1);
    }
  };

  return (
    <div className="audio">
      <div className="audio-top">
        <button type="button" className={`play ${playing ? 'is-playing' : ''}`} onClick={toggle} aria-label={playing ? 'Stopp' : 'Abspielen'}>
          {playing ? <span className="bars" aria-hidden><i /><i /><i /><i /></span> : <span className="tri" aria-hidden />}
        </button>
        <div className="audio-meta">
          <h3>{b.title}</h3>
          <div className="cast">
            {cast.map((s) => (
              <span key={s.id} className="cast-chip"><b>{s.name}</b> {s.origin}, {s.style}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="audio-tools">
        <button type="button" className="chip-btn" aria-pressed={slow} onClick={() => setSlow((s) => !s)}>🐢 Langsam</button>
        <button type="button" className="chip-btn" aria-pressed={showText} onClick={() => setShowText((s) => !s)}>📄 Text {showText ? 'verstecken' : 'zeigen'}</button>
        {plays > 0 && <span className="muted small">{plays}× gehört</span>}
        {!recorded && <span className="muted small">{canSpeak() ? 'Vorschau mit Browser-Stimme' : 'Dein Browser kann nicht vorlesen. Lies den Text.'}</span>}
      </div>
      {b.note && <div className="audio-note"><Rich text={b.note} /></div>}
      {showText && (
        <ol className="transcript">
          {b.lines.map((l, i) => (
            <li key={i} className={i === line ? 'now' : ''}><b>{speakers[l.speaker]?.name}:</b> {l.text}</li>
          ))}
        </ol>
      )}
    </div>
  );
}
