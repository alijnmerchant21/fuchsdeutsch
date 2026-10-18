/* Server-side helpers for API routes: a Supabase client acting as the signed-in user, and an admin check. */
import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import { SUPABASE_ANON_KEY, SUPABASE_URL } from './config';

/** Supabase client with the caller's token, or an error response if the caller is not the admin. */
export async function asAdmin(req: Request): Promise<{ sb: SupabaseClient; uid: string } | Response> {
  const token = req.headers.get('authorization')?.replace(/^Bearer\s+/i, '');
  if (!token || !SUPABASE_URL) return Response.json({ error: 'Not signed in' }, { status: 401 });
  const sb = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    global: { headers: { Authorization: `Bearer ${token}` } },
    auth: { persistSession: false, autoRefreshToken: false },
  });
  const { data: u } = await sb.auth.getUser(token);
  if (!u.user) return Response.json({ error: 'Not signed in' }, { status: 401 });
  const { data: admin } = await sb.rpc('exam_is_admin');
  if (!admin) return Response.json({ error: 'Admin only' }, { status: 403 });
  return { sb, uid: u.user.id };
}

/** Keys from env: ELEVENLABS_API_KEYS (comma separated) or ELEVENLABS_API_KEY, ELEVENLABS_API_KEY_1 … _20. */
export function elevenKeys(): string[] {
  const out: string[] = [];
  for (const k of (process.env.ELEVENLABS_API_KEYS ?? '').split(',')) if (k.trim()) out.push(k.trim());
  if (process.env.ELEVENLABS_API_KEY) out.push(process.env.ELEVENLABS_API_KEY);
  for (let i = 1; i <= 20; i++) { const k = process.env[`ELEVENLABS_API_KEY_${i}`]; if (k) out.push(k); }
  return [...new Set(out)];
}
