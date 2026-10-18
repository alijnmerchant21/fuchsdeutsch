/* Calls the app's own API routes with the signed-in user's token. */
import { BASE, DEMO_MODE } from './config';
import { supabase } from './supabase';

export async function callApi<T = Record<string, unknown>>(path: string, body: unknown): Promise<T> {
  if (DEMO_MODE) throw new Error('Nur mit Supabase (nicht im Demo-Modus).');
  const { data } = await supabase()!.auth.getSession();
  const r = await fetch(`${BASE}/api/${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${data.session?.access_token ?? ''}` },
    body: JSON.stringify(body),
  });
  const out = (await r.json().catch(() => ({ error: `HTTP ${r.status}` }))) as T & { error?: string };
  if (!r.ok || out.error) throw new Error(out.error ?? `HTTP ${r.status}`);
  return out;
}

export interface EmailLog { id: string; user_id: string; kind: string; subject: string; created_at: string }

export async function emailLog(userId: string): Promise<EmailLog[]> {
  const sb = supabase();
  if (!sb) return [];
  const { data } = await sb.from('exam_emails').select('id,user_id,kind,subject,created_at').eq('user_id', userId).order('created_at', { ascending: false });
  return (data as EmailLog[] | null) ?? [];
}
