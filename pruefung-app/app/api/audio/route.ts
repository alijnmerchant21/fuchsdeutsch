/* Admin button "Audio erzeugen": makes the MP3 for one Hören group of a practice block with ElevenLabs,
   stores it in the public bucket exam-audio and writes the link into the block. One group per call,
   so each call stays well under the time limit. */
import { asAdmin, elevenKeys } from '@/lib/server';
import { SILENCE_MP3 } from '@/lib/silence';
import { assignVoices, TTS_MODEL, VOICE_SETTINGS } from '@/lib/voices';
import type { BlockContent } from '@/lib/types';

export const runtime = 'nodejs';
export const maxDuration = 60;

async function speak(keys: string[], voice: string, text: string, prev?: string, next?: string): Promise<Buffer> {
  const body: Record<string, unknown> = { text, model_id: TTS_MODEL, language_code: 'de', voice_settings: VOICE_SETTINGS };
  if (prev) body.previous_text = prev;
  if (next) body.next_text = next;
  let last = '';
  for (const key of keys) {
    for (let tries = 0; tries < 3; tries++) {
      const r = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voice}?output_format=mp3_44100_128`, {
        method: 'POST', headers: { 'xi-api-key': key, 'Content-Type': 'application/json', Accept: 'audio/mpeg' }, body: JSON.stringify(body),
      });
      if (r.ok) return Buffer.from(await r.arrayBuffer());
      last = `${r.status} ${(await r.text()).slice(0, 200)}`;
      if (r.status === 400 && last.includes('language_code') && body.language_code) { delete body.language_code; continue; }
      if (r.status === 429 && !/quota|credits/i.test(last)) { await new Promise((res) => setTimeout(res, 3000)); continue; }
      break; // quota, bad key: next key
    }
  }
  throw new Error(`ElevenLabs: ${last || 'no API key configured'}`);
}

export async function POST(req: Request) {
  const who = await asAdmin(req);
  if (who instanceof Response) return who;
  const { sb } = who;
  const { blockId, setId, group } = (await req.json()) as { blockId: string; setId: string; group: number };
  const keys = elevenKeys();
  if (!keys.length) return Response.json({ error: 'ELEVENLABS_API_KEYS fehlt in Vercel (Settings > Environment Variables).' }, { status: 500 });

  const { data: row, error } = await sb.from('exam_blocks').select('id,user_id,content').eq('id', blockId).single();
  if (error || !row) return Response.json({ error: error?.message ?? 'Block not found' }, { status: 404 });
  const content = row.content as BlockContent;
  const set = content.sets?.find((s) => s.id === setId);
  const g = set?.groups[group];
  if (!set || !g?.script?.length) return Response.json({ error: 'Set or script not found' }, { status: 404 });

  try {
    const voices = assignVoices(g.script.map(([c]) => c), set.genders, set.id);
    // Lines in parallel (4 at a time), joined in order with short pauses.
    const parts: Buffer[] = new Array(g.script.length);
    const lines = g.script;
    let i = 0;
    const worker = async () => {
      while (i < lines.length) {
        const k = i++;
        const [sp, text] = lines[k];
        const prev = k > 0 && lines[k - 1][0] === sp ? lines[k - 1][1] : undefined;
        const next = k + 1 < lines.length && lines[k + 1][0] === sp ? lines[k + 1][1] : undefined;
        parts[k] = await speak(keys, voices[sp], text, prev, next);
      }
    };
    await Promise.all([worker(), worker(), worker(), worker()]);
    const gap = Buffer.from(SILENCE_MP3, 'base64');
    const mp3 = Buffer.concat(parts.flatMap((p, k) => (k + 1 < parts.length ? [p, gap] : [p])));

    const path = `${row.user_id}/${row.id}/${set.id}-${group}-${Date.now()}.mp3`;
    const up = await sb.storage.from('exam-audio').upload(path, mp3, { contentType: 'audio/mpeg', upsert: true });
    if (up.error) throw new Error('Upload: ' + up.error.message);
    const url = sb.storage.from('exam-audio').getPublicUrl(path).data.publicUrl;

    g.audio = url;
    const { error: e2 } = await sb.from('exam_blocks').update({ content }).eq('id', blockId);
    if (e2) throw new Error('Block: ' + e2.message);
    return Response.json({ url, bytes: mp3.length });
  } catch (e) {
    return Response.json({ error: (e as Error).message }, { status: 500 });
  }
}
