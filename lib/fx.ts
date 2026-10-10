'use client';
import confetti from 'canvas-confetti';

const pastel = ['#FFD2B8', '#C4ECD3', '#C6E2FA', '#DDD4F8', '#FDEDA8', '#FBCFDC'];
const calm = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function party() {
  if (calm()) return;
  void confetti({ particleCount: 110, spread: 80, origin: { y: 0.65 }, colors: pastel, scalar: 1.1 });
}
export function sparkle(x = 0.5, y = 0.5) {
  if (calm()) return;
  void confetti({ particleCount: 18, spread: 50, startVelocity: 18, origin: { x, y }, colors: pastel, scalar: 0.7, ticks: 60 });
}
export const shuffle = <T,>(a: T[]): T[] => {
  const b = [...a];
  for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; }
  return b;
};
/** Forgiving comparison for typed answers. */
export const norm = (s: string) => s.trim().toLowerCase().replace(/\s+/g, ' ').replace(/ß/g, 'ss').replace(/[.!?,]+$/g, '');
