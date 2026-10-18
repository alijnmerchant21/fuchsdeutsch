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
  seppi: { id: 'seppi', name: 'Sepp', origin: 'München', style: 'Bairisch, gemütlich', lang: 'de-DE', pitch: 0.8, rate: 0.92 },
  frauHaeberle: { id: 'frauHaeberle', name: 'Frau Häberle', origin: 'Stuttgart', style: 'Schwäbisch, genau', lang: 'de-DE', pitch: 1.15, rate: 0.95 },
  herrLehmann: { id: 'herrLehmann', name: 'Herr Lehmann', origin: 'Dresden', style: 'Sächsisch, freundlich', lang: 'de-DE', pitch: 0.9, rate: 0.95 },
  jule: { id: 'jule', name: 'Jule', origin: 'Hamburg', style: 'norddeutsch, jung, direkt', lang: 'de-DE', pitch: 1.3, rate: 1.08 },
  elif: { id: 'elif', name: 'Elif', origin: 'Köln', style: 'rheinisch, herzlich', lang: 'de-DE', pitch: 1.2, rate: 1.05 },
  moderatorin: { id: 'moderatorin', name: 'Moderatorin', origin: 'Radio', style: 'Standarddeutsch, Radiostimme', lang: 'de-DE', pitch: 1.05, rate: 1.0 },
  ben: { id: 'ben', name: 'Ben', origin: 'Leipzig', style: 'Podcast, locker', lang: 'de-DE', pitch: 0.95, rate: 1.05 },
  urs: { id: 'urs', name: 'Urs', origin: 'Bern, Schweiz', style: 'Schweizer Hochdeutsch, ruhig', lang: 'de-CH', pitch: 0.8, rate: 0.85 },
  resi: { id: 'resi', name: 'Resi', origin: 'Innsbruck, Österreich', style: 'Tirolerisch, fröhlich', lang: 'de-AT', pitch: 1.25, rate: 0.98 },
  // A1 cast: the Fuchsbau flat share in Leipzig. They speak slowly and clearly.
  nele: { id: 'nele', name: 'Nele', origin: 'Leipzig', style: 'Studentin, freundlich, langsam', lang: 'de-DE', pitch: 1.2, rate: 0.82 },
  kenji: { id: 'kenji', name: 'Kenji', origin: 'Osaka, Japan', style: 'lernt Deutsch, Koch, ruhig', lang: 'de-DE', pitch: 0.95, rate: 0.78 },
  amara: { id: 'amara', name: 'Amara', origin: 'Accra, Ghana', style: 'lernt Deutsch, Pflegerin, fröhlich', lang: 'de-DE', pitch: 1.3, rate: 0.8 },
  felix: { id: 'felix', name: 'Felix', origin: 'Wien, Österreich', style: 'Musiker, gemütlich', lang: 'de-AT', pitch: 0.85, rate: 0.82 },
  frauKlein: { id: 'frauKlein', name: 'Frau Klein', origin: 'Kassel', style: 'Lehrerin, sehr deutlich', lang: 'de-DE', pitch: 1.05, rate: 0.75 },
  herrAdler: { id: 'herrAdler', name: 'Herr Adler', origin: 'Hamburg', style: 'Verkäufer, freundlich, langsam', lang: 'de-DE', pitch: 0.85, rate: 0.8 },
  // B1 (Season 3) additions.
  sofia: { id: 'sofia', name: 'Sofia', origin: 'São Paulo, Brasilien', style: 'neu in der WG, UX-Designerin, lebhaft', lang: 'de-DE', pitch: 1.25, rate: 0.95 },
  lina: { id: 'lina', name: 'Lina', origin: 'Leipzig', style: 'Felix’ Freundin, Lehrerin, warm', lang: 'de-DE', pitch: 1.2, rate: 0.98 },
  herrVogt: { id: 'herrVogt', name: 'Herr Vogt', origin: 'München', style: 'Hausverwalter, förmlich, sachlich', lang: 'de-DE', pitch: 0.8, rate: 0.95 },
  lena: { id: 'lena', name: 'Lena', origin: 'Husum', style: 'neugierig, jung', lang: 'de-DE', pitch: 1.35, rate: 1.05 },
};
