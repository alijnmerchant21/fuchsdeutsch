import type { Course, GameDef } from '../types';
import { b1k1, gamesB1k1 } from './k01';
import { b1k2, gamesB1k2 } from './k02';
import { b1k3, gamesB1k3 } from './k03';
import { b1k4, gamesB1k4 } from './k04';
import { b1k5, gamesB1k5 } from './k05';
import { b1k6, gamesB1k6 } from './k06';
import { b1k7, gamesB1k7 } from './k07';
import { b1k8, gamesB1k8 } from './k08';
import { b1k9, gamesB1k9 } from './k09';
import { b1k10, gamesB1k10 } from './k10';
import { b1k11, gamesB1k11 } from './k11';
import { b1k12, gamesB1k12 } from './k12';
import { scopeAudio } from '../helpers';

// B1 follows the order and themes of Netzwerk neu B1 (12 chapters). Season 3 of the Fuchsbau-WG. All content is original.
const chapters = [b1k1, b1k2, b1k3, b1k4, b1k5, b1k6, b1k7, b1k8, b1k9, b1k10, b1k11, b1k12].map(scopeAudio);

// TEMPORARY until the Goethe B1 final is written: chapter exams stand in. The final only opens
// after all chapter exams, and B1 is hidden on the live site, so no learner sees this.
const plain = (i: number) => chapters[i].exam.filter((it) => !it.stimulus);
const draftFinal = { lesen: plain(0), hoeren: plain(1), schreiben: plain(2), sprechen: plain(0) };

export const b1: Course = {
  id: 'b1',
  level: 'B1',
  title: 'Deutsch B1',
  examName: 'Goethe-Zertifikat B1',
  blurb: 'Die dritte Staffel der Fuchsbau-WG: Das Haus wird verkauft, und alle müssen sich entscheiden. Zwölf Kapitel mit Hören, Lesen, Grammatik, Prüfungstraining und einer Prüfung im Goethe-Format.',
  blurbEn: 'Season three of the flat-share story. Twelve chapters with Goethe B1 exam training and a B1-style final exam.',
  weeks: 12,
  finalKey: 'b1-final',
  chapters,
  final: draftFinal,
};

export const gamesB1: GameDef[] = [...gamesB1k1, ...gamesB1k2, ...gamesB1k3, ...gamesB1k4, ...gamesB1k5, ...gamesB1k6, ...gamesB1k7, ...gamesB1k8, ...gamesB1k9, ...gamesB1k10, ...gamesB1k11, ...gamesB1k12].map((g) => ({ ...g, course: 'b1' }));
