import type { Course, GameDef } from '../types';
import { a2k1, gamesA2k1 } from './k01';
import { a2k2, gamesA2k2 } from './k02';
import { a2k3, gamesA2k3 } from './k03';
import { a2k4, gamesA2k4 } from './k04';
import { a2k5, gamesA2k5 } from './k05';
import { a2k6, gamesA2k6 } from './k06';
import { a2k7, gamesA2k7 } from './k07';
import { a2k8, gamesA2k8 } from './k08';
import { a2k9, gamesA2k9 } from './k09';
import { a2k10, gamesA2k10 } from './k10';
import { a2k11, gamesA2k11 } from './k11';
import { a2k12, gamesA2k12 } from './k12';
import { finalA2 } from './final';
import { scopeAudio } from '../helpers';

// A2 follows the order and themes of a common A2 textbook (12 chapters). All content is original.
export const a2: Course = {
  id: 'a2',
  level: 'A2',
  title: 'Deutsch A2',
  examName: 'Goethe-Zertifikat A2',
  blurb: 'Der nächste Schritt. Zwölf Kapitel mit der Fuchsbau-WG, ein Jahr später: Hören, Lesen, Grammatik, vier Spiele pro Kapitel und eine Prüfung.',
  blurbEn: 'Build on A1. Twelve chapters, season two of the flat-share story, Goethe A2 style final exam.',
  weeks: 10,
  finalKey: 'a2-final',
  chapters: [a2k1, a2k2, a2k3, a2k4, a2k5, a2k6, a2k7, a2k8, a2k9, a2k10, a2k11, a2k12].map(scopeAudio),
  final: finalA2,
};

export const gamesA2: GameDef[] = [
  ...gamesA2k1, ...gamesA2k2, ...gamesA2k3, ...gamesA2k4, ...gamesA2k5, ...gamesA2k6,
  ...gamesA2k7, ...gamesA2k8, ...gamesA2k9, ...gamesA2k10, ...gamesA2k11, ...gamesA2k12,
].map((g) => ({ ...g, course: 'a2' }));
