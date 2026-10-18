'use client';
import confetti from 'canvas-confetti';

const pastel = ['#FFD2B8', '#C4ECD3', '#C6E2FA', '#DDD4F8', '#FDEDA8', '#FBCFDC'];
const calm = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Same confetti as Fuchsdeutsch. */
export function party() {
  if (calm()) return;
  void confetti({ particleCount: 110, spread: 80, origin: { y: 0.65 }, colors: pastel, scalar: 1.1 });
}
