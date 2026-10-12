import type { GameDef } from './types';
import { games2 } from './kapitel2';
import { games3 } from './kapitel3';
import { games4 } from './kapitel4';
import { games5 } from './kapitel5';
import { games6 } from './kapitel6';
import { games7 } from './kapitel7';
import { games8 } from './kapitel8';
import { gamesA1 } from './a1/course';
import { gamesA2 } from './a2/course';

// Kapitel 1 game data. The games of the other chapters live in their chapter files.
const partizipien: { inf: string; aux: 'hat' | 'ist'; p: string; wrong: string[] }[] = [
  { inf: 'machen', aux: 'hat', p: 'gemacht', wrong: ['gemachen', 'macht'] },
  { inf: 'gehen', aux: 'ist', p: 'gegangen', wrong: ['gegeht', 'gegehen'] },
  { inf: 'aufstehen', aux: 'ist', p: 'aufgestanden', wrong: ['geaufstanden', 'aufgesteht'] },
  { inf: 'einkaufen', aux: 'hat', p: 'eingekauft', wrong: ['geeinkauft', 'einkauft'] },
  { inf: 'verstehen', aux: 'hat', p: 'verstanden', wrong: ['vergestanden', 'geverstanden'] },
  { inf: 'erzählen', aux: 'hat', p: 'erzählt', wrong: ['geerzählt', 'ergezählt'] },
  { inf: 'telefonieren', aux: 'hat', p: 'telefoniert', wrong: ['getelefoniert', 'telefonieren'] },
  { inf: 'denken', aux: 'hat', p: 'gedacht', wrong: ['gedenkt', 'gedachten'] },
  { inf: 'bringen', aux: 'hat', p: 'gebracht', wrong: ['gebringt', 'gebrungen'] },
  { inf: 'wissen', aux: 'hat', p: 'gewusst', wrong: ['gewissen', 'gewisst'] },
  { inf: 'kommen', aux: 'ist', p: 'gekommen', wrong: ['gekommt', 'gekamen'] },
  { inf: 'schreiben', aux: 'hat', p: 'geschrieben', wrong: ['geschreibt', 'geschreiben'] },
  { inf: 'nehmen', aux: 'hat', p: 'genommen', wrong: ['genehmt', 'genehmen'] },
  { inf: 'bleiben', aux: 'ist', p: 'geblieben', wrong: ['gebleibt', 'gebleiben'] },
  { inf: 'finden', aux: 'hat', p: 'gefunden', wrong: ['gefindet', 'gefanden'] },
  { inf: 'vereinbaren', aux: 'hat', p: 'vereinbart', wrong: ['vergeeinbart', 'gevereinbart'] },
  { inf: 'absagen', aux: 'hat', p: 'abgesagt', wrong: ['geabsagt', 'abgesagen'] },
  { inf: 'verschieben', aux: 'hat', p: 'verschoben', wrong: ['verschiebt', 'vergeschoben'] },
  { inf: 'anrufen', aux: 'hat', p: 'angerufen', wrong: ['angeruft', 'geanrufen'] },
  { inf: 'schlafen', aux: 'hat', p: 'geschlafen', wrong: ['geschlaft', 'geschliefen'] },
  { inf: 'aufwachen', aux: 'ist', p: 'aufgewacht', wrong: ['geaufwacht', 'aufgewachen'] },
  { inf: 'vergessen', aux: 'hat', p: 'vergessen', wrong: ['vergegessen', 'vergesst'] },
  { inf: 'beantworten', aux: 'hat', p: 'beantwortet', wrong: ['gebeantwortet', 'begeantwortet'] },
  { inf: 'fahren', aux: 'ist', p: 'gefahren', wrong: ['gefahrt', 'gefuhren'] },
];

const praeteritum: [string, string][] = [
  ['gehen', 'ging'], ['kommen', 'kam'], ['stehen', 'stand'], ['finden', 'fand'], ['schreiben', 'schrieb'],
  ['nehmen', 'nahm'], ['bleiben', 'blieb'], ['denken', 'dachte'], ['wissen', 'wusste'], ['sein', 'war'],
  ['haben', 'hatte'], ['fahren', 'fuhr'], ['sehen', 'sah'], ['geben', 'gab'], ['sprechen', 'sprach'], ['essen', 'aß'],
];

const saetze: { parts: string[]; hint: string }[] = [
  { parts: ['Ich', 'schenke', 'meiner Mutter', 'einen Kalender.'], hint: 'Dativ vor Akkusativ' },
  { parts: ['Ich', 'schenke', 'ihn', 'meiner Mutter.'], hint: 'Akkusativ-Pronomen vor Dativ' },
  { parts: ['Der Arzt', 'gibt', 'dem Patienten', 'einen Termin.'], hint: 'Dativ vor Akkusativ' },
  { parts: ['Kannst du', 'mir', 'die Uhrzeit', 'sagen?'], hint: 'Pronomen vor Nomen' },
  { parts: ['Sie', 'erklärt', 'es', 'ihm', 'noch einmal.'], hint: 'Zwei Pronomen: Akkusativ zuerst' },
  { parts: ['Nachtarbeit', 'schadet', 'der Gesundheit.'], hint: 'schaden + Dativ' },
  { parts: ['Wir', 'beschäftigen uns', 'mit dem Thema', 'Zeit.'], hint: 'sich beschäftigen mit + Dativ' },
  { parts: ['Ich', 'habe', 'dem Chef', 'eine Mail', 'geschrieben.'], hint: 'Partizip am Ende' },
  { parts: ['Nachdem ich', 'gegessen hatte,', 'ging ich', 'spazieren.'], hint: 'Nebensatz zuerst, dann Verb' },
  { parts: ['Er', 'konzentriert sich', 'auf die Prüfung.'], hint: 'sich konzentrieren auf + Akkusativ' },
];

// 0 = Vergangenheit, 1 = Gegenwart, 2 = Zukunft
const zeitwoerter: [string, 0 | 1 | 2][] = [
  ['gestern', 0], ['vorgestern', 0], ['damals', 0], ['neulich', 0], ['früher', 0], ['vorhin', 0], ['letztes Jahr', 0], ['einst', 0],
  ['jetzt', 1], ['heute', 1], ['gerade', 1], ['heutzutage', 1], ['im Moment', 1], ['momentan', 1], ['zurzeit', 1],
  ['morgen', 2], ['übermorgen', 2], ['bald', 2], ['demnächst', 2], ['später', 2], ['nächste Woche', 2], ['in Zukunft', 2], ['gleich', 2],
];

const games1: GameDef[] = [
  {
    id: 'partizip-sprint', engine: 'sprint', title: 'Partizip-Sprint', blurb: '60 Sekunden. Wie viele Partizipien schaffst du?', skill: 'Perfekt', tone: 'mint', chapter: 1, emoji: '⚡',
    rules: 'Du siehst ein Verb. Tippe auf das richtige Partizip II. Du hast 60 Sekunden.',
    label: 'Infinitiv', items: partizipien.map((p) => ({ q: p.inf, sub: `er/sie ${p.aux} …`, a: p.p, wrong: p.wrong })),
  },
  {
    id: 'zeit-memory', engine: 'memory', title: 'Zeitreise-Memory', blurb: 'Finde die Paare: Infinitiv und Präteritum.', skill: 'Präteritum', tone: 'lilac', chapter: 1, emoji: '🃏',
    rules: 'Dreh zwei Karten um. Ein Paar ist ein Infinitiv mit seinem Präteritum, zum Beispiel gehen und ging.',
    kinds: ['Infinitiv', 'Präteritum'], pairs: praeteritum,
  },
  {
    id: 'satzbau', engine: 'satzbau', title: 'Satzbau-Werkstatt', blurb: 'Bau Sätze. Dativ oder Akkusativ zuerst?', skill: 'Ergänzungen', tone: 'sky', chapter: 1, emoji: '🧱',
    rules: 'Tippe die Satzteile in der richtigen Reihenfolge an. Achte auf Dativ und Akkusativ.',
    sentences: saetze,
  },
  {
    id: 'zeitstrahl', engine: 'regen', title: 'Wortregen', blurb: 'Fang die Zeitwörter: gestern, heute oder morgen?', skill: 'Zeitadverbien', tone: 'rose', chapter: 1, emoji: '☔',
    rules: 'Ein Zeitwort fällt herunter. Tippe auf die richtige Gruppe, bevor es unten ankommt. Du hast drei Leben.',
    buckets: ['Vergangenheit', 'Gegenwart', 'Zukunft'], words: zeitwoerter,
  },
];

export const games: GameDef[] = [...gamesA1, ...gamesA2, ...games1, ...games2, ...games3, ...games4, ...games5, ...games6, ...games7, ...games8];
export const gameById = (id: string) => games.find((g) => g.id === id);
