'use client';
import type { AudioLine } from '@/content/types';
import { speakers } from '@/content/speakers';

// Listening texts play from /audio/<id>.mp3 when that file exists (made by `npm run audio`).
// Without a file, the browser reads the lines aloud, one voice setting per speaker.

let manifest: Promise<string[]> | null = null;

/** public/audio/manifest.json lists the ids that have an MP3. `npm run audio` writes it. */
export function hasRecording(id: string): Promise<boolean> {
  if (!manifest) {
    manifest = fetch('/audio/manifest.json').then((r) => (r.ok ? (r.json() as Promise<string[]>) : [])).catch(() => []);
  }
  return manifest.then((ids) => ids.includes(id));
}

function pickVoice(lang: string, seed: number): SpeechSynthesisVoice | undefined {
  const all = window.speechSynthesis.getVoices();
  const exact = all.filter((v) => v.lang.replace('_', '-') === lang);
  const german = all.filter((v) => v.lang.toLowerCase().startsWith('de'));
  const pool = exact.length ? exact : german;
  return pool.length ? pool[seed % pool.length] : undefined;
}

export const canSpeak = () => typeof window !== 'undefined' && 'speechSynthesis' in window;

export function speakLines(lines: AudioLine[], onLine: (i: number) => void, onEnd: () => void, speed = 1): () => void {
  if (!canSpeak()) { onEnd(); return () => {}; }
  const synth = window.speechSynthesis;
  synth.cancel();
  let stopped = false;
  const ids = Object.keys(speakers);
  const say = (i: number) => {
    if (stopped) return;
    if (i >= lines.length) { onEnd(); return; }
    const sp = speakers[lines[i].speaker];
    const u = new SpeechSynthesisUtterance(lines[i].text);
    u.lang = sp?.lang || 'de-DE';
    u.pitch = sp?.pitch ?? 1;
    u.rate = (sp?.rate ?? 1) * speed;
    const v = pickVoice(u.lang, Math.max(0, ids.indexOf(lines[i].speaker)));
    if (v) u.voice = v;
    u.onend = () => say(i + 1);
    u.onerror = () => { if (!stopped) say(i + 1); };
    onLine(i);
    synth.speak(u);
  };
  say(0);
  return () => { stopped = true; synth.cancel(); };
}

/** Word playback uses recorded assets only; browser TTS is intentionally disabled. */
export function speakWord(_text: string) {
  /* no-op until per-word or line MP3s exist */
}
