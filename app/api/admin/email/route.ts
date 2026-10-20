/* Admin: send one email through Resend and log it (table sent_emails). Nothing is sent automatically. */
import { asAdmin } from '@/lib/server';

export const runtime = 'nodejs';

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** Plain text to simple HTML: blank lines make paragraphs, lines starting with "- " make a list. */
function html(text: string, link: string, button: string, brand: string) {
  const blocks = text.trim().split(/\n{2,}/).map((p) => {
    const lines = p.split('\n');
    if (lines.some((l) => l.startsWith('- '))) {
      const head = lines.filter((l) => !l.startsWith('- ')).map(esc).join('<br>');
      const items = lines.filter((l) => l.startsWith('- ')).map((l) => `<li style="margin:0 0 6px">${esc(l.slice(2))}</li>`).join('');
      return `${head ? `<p style="margin:0 0 8px">${head}</p>` : ''}<ul style="margin:0 0 14px;padding-left:20px">${items}</ul>`;
    }
    return `<p style="margin:0 0 14px">${esc(p).replace(/\n/g, '<br>')}</p>`;
  }).join('');
  return `<!doctype html><html><body style="margin:0;background:#f4f4f5;font-family:Helvetica,Arial,sans-serif;color:#1c1d1f">
<div style="max-width:540px;margin:0 auto;padding:28px 18px">
<p style="font-weight:800;font-size:18px;margin:0 0 18px">🦊 ${esc(brand)}</p>
<div style="background:#ffffff;border:1px solid #e4e4e7;border-radius:16px;padding:26px 24px;font-size:16px;line-height:1.55">${blocks}
${button ? `<p style="margin:22px 0 4px"><a href="${esc(link)}" style="background:#1c1d1f;color:#ffffff;text-decoration:none;padding:12px 22px;border-radius:10px;font-weight:700;display:inline-block">${esc(button)}</a></p>` : ''}</div>
<p style="font-size:12px;color:#777;margin:18px 4px 0">You get this email because you signed up for ${esc(brand)}. Reply to this email if you do not want any more messages.</p>
</div></body></html>`;
}

export async function POST(req: Request) {
  const who = await asAdmin(req);
  if (who instanceof Response) return who;
  const { sb } = who;
  const key = process.env.RESEND_API_KEY;
  if (!key) return Response.json({ error: 'RESEND_API_KEY is missing in Vercel (main project > Settings > Environment Variables).' }, { status: 500 });

  const b = (await req.json()) as { to: string; userId?: string | null; app?: string; kind?: string; subject: string; text: string; button?: string; link?: string };
  const to = String(b.to || '').trim();
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(to)) return Response.json({ error: 'No valid email address.' }, { status: 400 });
  if (!b.subject?.trim() || !b.text?.trim()) return Response.json({ error: 'Subject and text are needed.' }, { status: 400 });
  const app = b.app === 'pruefung' || b.app === 'spiele' ? b.app : 'kurs';
  const brand = app === 'pruefung' ? 'Fuchsdeutsch Prüfung' : app === 'spiele' ? 'Fuchsdeutsch Spiele' : 'Fuchsdeutsch';
  const link = b.link || 'https://www.fuchsdeutsch.de';
  const from = process.env.RESEND_FROM ?? `${brand} <team@fuchsdeutsch.de>`;

  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from, to: [to], reply_to: process.env.RESEND_REPLY_TO ?? 'admin@fuchsdeutsch.de', subject: b.subject.trim(),
      text: `${b.text.trim()}\n\n${b.button ? `${b.button}: ` : ''}${link}`, html: html(b.text, link, b.button || '', brand),
    }),
  });
  if (!r.ok) return Response.json({ error: `Resend: ${(await r.text()).slice(0, 300)}` }, { status: 502 });
  const { error } = await sb.from('sent_emails').insert({ to_email: to, user_id: b.userId || null, app, kind: b.kind || 'custom', subject: b.subject.trim(), body: b.text.trim() });
  return Response.json({ ok: true, logged: !error });
}
