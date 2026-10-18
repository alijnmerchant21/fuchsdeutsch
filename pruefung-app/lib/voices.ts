/* ElevenLabs default voices that speak German well with eleven_multilingual_v2.
   Shared by the admin audio button (server) and tools/make-audio.mjs (bank audio). */

export const FEMALE = ['EXAVITQu4vr4xnSDxMaL', 'XrExE9yKIg1WjnnlVkGX', 'cgSgspJ2msm6clMCkdW9', 'Xb7hH8MSUJpSbSDYk0k2', 'pFZP5JQG7iQjIQuC4Bku', 'FGY2WhTYpPnrIDTdsKH5'];
export const MALE = ['onwK4e9ZLuTAKqWW03F9', 'TX3LPaxmHKxFdv7VOQHJ', 'JBFqnCBsd6RMkjVDRZzb', 'bIHbv24MWmeRgasZH58o', 'nPczCjzI2devNBz1zQrb', 'cjVigY5qzO86Huf0OWal', 'iP95p4xoKVk53GoZ742B'];
export const VOICE_SETTINGS = { stability: 0.45, similarity_boost: 0.8, style: 0.15, use_speaker_boost: true, speed: 0.88 };
export const TTS_MODEL = 'eleven_multilingual_v2';

/** Gives every speaker code of one set its own voice, by gender, in order of first appearance.
    The seed (set id) varies which voices a set starts with, so not every text sounds the same. */
export function assignVoices(codes: string[], genders: Record<string, 'm' | 'f'> = {}, seed = ''): Record<string, string> {
  let h = 0; for (const ch of seed) h = (h * 31 + ch.charCodeAt(0)) | 0;
  const off = Math.abs(h);
  const out: Record<string, string> = {};
  let f = 0, m = 0;
  for (const c of codes) {
    if (out[c]) continue;
    const g = genders[c] ?? (/^(ANS|ANSAGE|SPRECHER|MOD|RADIO)/.test(c) ? 'm' : 'f');
    out[c] = g === 'm' ? MALE[(off + m++) % MALE.length] : FEMALE[(off + f++) % FEMALE.length];
  }
  return out;
}
