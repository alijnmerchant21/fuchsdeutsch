/* Admin button "E-Mail senden": sends one email to a candidate through Resend and logs it.
   Nothing is sent automatically. */
import { asAdmin } from '@/lib/server';

export const runtime = 'nodejs';

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function html(text: string, link: string, button: string) {
  const paras = text.trim().split(/\n{2,}/).map((p) => `<p style="margin:0 0 14px">${esc(p).replace(/\n/g, '<br>')}</p>`).join('');
  return `<!doctype html><html><body style="margin:0;background:#f2f2f0;font-family:Helvetica,Arial,sans-serif;color:#1d1d1f">
<div style="max-width:520px;margin:0 auto;padding:28px 18px">
<p style="font-weight:700;font-size:18px;margin:0 0 18px">🦊 Fuchsdeutsch Prüfung</p>
<div style="background:#fff;border-radius:16px;padding:24px 22px;font-size:16px;line-height:1.55">${paras}
<p style="margin:22px 0 4px"><a href="${link}" style="background:#1d1d1f;color:#fff;text-decoration:none;padding:12px 20px;border-radius:999px;font-weight:700;display:inline-block">${esc(button)}</a></p></div>
<p style="font-size:12px;color:#777;margin:18px 4px 0">Du bekommst diese E-Mail, weil du bei Fuchsdeutsch Prüfung angemeldet bist. Antworte einfach auf diese E-Mail, wenn du keine Nachrichten mehr möchtest.<br>You get this email because you signed up for Fuchsdeutsch Prüfung. Reply to this email if you do not want any more messages.</p>
</div></body></html>`;
}

export async function POST(req: Request) {
  const who = await asAdmin(req);
  if (who instanceof Response) return who;
  const { sb, uid } = who;
  const key = process.env.RESEND_API_KEY;
  if (!key) return Response.json({ error: 'RESEND_API_KEY fehlt in Vercel (Settings > Environment Variables).' }, { status: 500 });

  const { userId, kind, subject, text, button } = (await req.json()) as { userId: string; kind: string; subject: string; text: string; button?: string };
  if (!subject?.trim() || !text?.trim()) return Response.json({ error: 'Betreff und Text fehlen.' }, { status: 400 });
  const { data: cand, error } = await sb.from('exam_candidates').select('email,name').eq('user_id', userId).single();
  if (error || !cand?.email) return Response.json({ error: error?.message ?? 'Kandidat nicht gefunden' }, { status: 404 });

  const site = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.fuchsdeutsch.de/pruefung';
  const from = process.env.RESEND_FROM ?? 'Fuchsdeutsch Prüfung <pruefung@fuchsdeutsch.de>';
  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from, to: [cand.email], reply_to: process.env.RESEND_REPLY_TO ?? 'admin@fuchsdeutsch.de', subject,
      text: `${text}\n\n${site}`, html: html(text, site, button || 'Zur Prüfung'),
    }),
  });
  const out = (await r.json().catch(() => ({}))) as { id?: string; message?: string };
  if (!r.ok) return Response.json({ error: `Resend: ${out.message ?? r.status}` }, { status: 502 });
  await sb.from('exam_emails').insert({ user_id: userId, kind, subject, sent_by: uid, resend_id: out.id ?? null });
  return Response.json({ id: out.id });
}
