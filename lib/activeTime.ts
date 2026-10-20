'use client';
/* Counts active learning time on a page: the tab is visible and the learner did something
   (click, key, scroll, touch, audio playing) in the last 90 seconds. Saved every 30 seconds and when leaving. */
import { useEffect, useRef } from 'react';
import { useStore } from './store';

const IDLE_MS = 90_000;
const TICK_S = 5;

export function useActiveTime(key: string | null) {
  const { addTime } = useStore();
  const add = useRef(addTime);
  add.current = addTime;
  useEffect(() => {
    if (!key) return;
    let last = Date.now();
    let acc = 0;
    const act = () => { last = Date.now(); };
    const flush = () => { if (acc > 0) { add.current(key, acc); acc = 0; } };
    const tick = window.setInterval(() => {
      if (document.visibilityState === 'visible' && Date.now() - last < IDLE_MS) acc += TICK_S;
      if (acc >= 30) flush();
    }, TICK_S * 1000);
    const hide = () => { if (document.visibilityState === 'hidden') flush(); };
    const events = ['pointerdown', 'keydown', 'scroll', 'touchstart', 'wheel'] as const;
    events.forEach((e) => window.addEventListener(e, act, { passive: true }));
    document.addEventListener('timeupdate', act, true); // audio or video playing
    document.addEventListener('visibilitychange', hide);
    window.addEventListener('pagehide', flush);
    return () => {
      window.clearInterval(tick);
      flush();
      events.forEach((e) => window.removeEventListener(e, act));
      document.removeEventListener('timeupdate', act, true);
      document.removeEventListener('visibilitychange', hide);
      window.removeEventListener('pagehide', flush);
    };
  }, [key]);
}
