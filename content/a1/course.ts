import type { Course, GameDef } from '../types';
import { a1k1, gamesA1k1 } from './k01';
import { a1k2, gamesA1k2 } from './k02';
import { a1k3, gamesA1k3 } from './k03';
import { a1k4, gamesA1k4 } from './k04';
import { a1k5, gamesA1k5 } from './k05';
import { a1k6, gamesA1k6 } from './k06';
import { a1k7, gamesA1k7 } from './k07';
import { a1k8, gamesA1k8 } from './k08';
import { a1k9, gamesA1k9 } from './k09';
import { a1k10, gamesA1k10 } from './k10';
import { a1k11, gamesA1k11 } from './k11';
import { a1k12, gamesA1k12 } from './k12';
import { finalA1 } from './final';
import { scopeAudio, withWriting } from '../helpers';
import { WRITING } from '../writing';

// A1 follows the order and themes of a common A1 textbook (12 chapters). All content is original.
export const a1: Course = {
  id: 'a1',
  level: 'A1',
  title: 'Deutsch A1',
  examName: 'Goethe-Zertifikat A1: Start Deutsch 1',
  blurb: 'Dein Start ins Deutsche. Zwölf Kapitel mit der Fuchsbau-WG in Leipzig, Hören, Grammatik, vier Spielen pro Kapitel und einer Prüfung.',
  blurbEn: 'Start from zero. Twelve chapters, a flat-share story, Start Deutsch 1 style final exam.',
  weeks: 8,
  finalKey: 'a1-final',
  chapters: [a1k1, a1k2, a1k3, a1k4, a1k5, a1k6, a1k7, a1k8, a1k9, a1k10, a1k11, a1k12].map(scopeAudio).map(withWriting(WRITING)),
  final: finalA1,
};

export const gamesA1: GameDef[] = [
  ...gamesA1k1, ...gamesA1k2, ...gamesA1k3, ...gamesA1k4, ...gamesA1k5, ...gamesA1k6,
  ...gamesA1k7, ...gamesA1k8, ...gamesA1k9, ...gamesA1k10, ...gamesA1k11, ...gamesA1k12,
].map((g) => ({ ...g, course: 'a1' }));
