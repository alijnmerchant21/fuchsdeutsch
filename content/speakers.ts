import type { Speaker } from './types';

// The cast for all listening texts. Each speaker has a region and a speaking style.
// `voiceId` is the ElevenLabs voice used by `npm run audio`. Until audio files exist,
// the player falls back to the browser voice with the pitch and rate below.
export const speakers: Record<string, Speaker> = {
  erzaehler: { id: 'erzaehler', name: 'Erzählerin', origin: 'Hannover', style: 'Standarddeutsch, ruhig', lang: 'de-DE', pitch: 1.0, rate: 0.95 },
  jonas: { id: 'jonas', name: 'Jonas', origin: 'Köln', style: 'jung, schnell, locker', lang: 'de-DE', pitch: 1.15, rate: 1.08 },
  mira: { id: 'mira', name: 'Mira', origin: 'Leipzig', style: 'Poetry-Slam, rhythmisch', lang: 'de-DE', pitch: 1.25, rate: 0.9 },
  frauHuber: { id: 'frauHuber', name: 'Frau Huber', origin: 'Wien, Österreich', style: 'Wienerisch, gemütlich', lang: 'de-AT', pitch: 1.05, rate: 0.9 },
  herrYilmaz: { id: 'herrYilmaz', name: 'Herr Yılmaz', origin: 'Graz, Österreich', style: 'höflich, klar', lang: 'de-AT', pitch: 0.85, rate: 0.98 },
  atze: { id: 'atze', name: 'Atze', origin: 'Berlin', style: 'Berlinerisch, direkt', lang: 'de-DE', pitch: 0.75, rate: 1.05 },
  priya: { id: 'priya', name: 'Priya', origin: 'Berlin', style: 'freundlich, deutlich', lang: 'de-DE', pitch: 1.2, rate: 1.0 },
  frauBaumann: { id: 'frauBaumann', name: 'Frau Baumann', origin: 'Zürich, Schweiz', style: 'Schweizer Hochdeutsch, langsam', lang: 'de-CH', pitch: 1.1, rate: 0.85 },
  tomasz: { id: 'tomasz', name: 'Tomasz', origin: 'Zürich, Schweiz', style: 'sachlich', lang: 'de-DE', pitch: 0.9, rate: 1.0 },
  opaFiete: { id: 'opaFiete', name: 'Opa Fiete', origin: 'Husum, Nordsee', style: 'norddeutsch, trocken', lang: 'de-DE', pitch: 0.65, rate: 0.85 },
  lena: { id: 'lena', name: 'Lena', origin: 'Husum', style: 'neugierig, jung', lang: 'de-DE', pitch: 1.35, rate: 1.05 },
};
