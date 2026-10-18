'use client';
import { useEffect, useRef, useState } from 'react';

/** Countdown in exam mode (minutes > 0) or a plain stopwatch (minutes = 0). */
export function Timer({ minutes, onEnd }: { minutes: number; onEnd?: () => void }) {
  const start = useRef(Date.now());
  const [now, setNow] = useState(Date.now());
  const ended = useRef(false);
  useEffect(() => { const t = setInterval(() => setNow(Date.now()), 1000); return () => clearInterval(t); }, []);
  const passed = Math.floor((now - start.current) / 1000);
  const left = minutes * 60 - passed;
  useEffect(() => { if (minutes > 0 && left <= 0 && !ended.current) { ended.current = true; onEnd?.(); } }, [left, minutes, onEnd]);
  const show = minutes > 0 ? Math.max(0, left) : passed;
  const mm = String(Math.floor(show / 60)).padStart(2, '0'), ss = String(show % 60).padStart(2, '0');
  return (
    <span className={`clock ${minutes > 0 && left < 120 ? 'over' : ''}`} title={minutes > 0 ? 'Restzeit' : 'Zeit'}>
      {mm}:{ss}
    </span>
  );
}
