/* Copy of shared/shell/report-route.ts. Edit the original, then run: npm run shell */
/* POST /api/report: "Report a problem" from any page. Saves the report (table site_reports, supabase/008_control_center.sql)
   and emails it to the team through Resend. Source of truth: shared/shell/report-route.ts (`npm run shell` copies it). */
import { createClient } from '@supabase/supabase-js';

export const runtime = 'nodejs';

const URL = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const ANON = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const APPS = ['kurs', 'pruefung', 'spiele'] as const;
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// Very small guard against floods: at most 5 reports per address per 10 minutes (per server instance).
const recent = new Map<string, number[]>();
function tooMany(ip: string) {
  const now = Date.now();
  const list = (recent.get(ip) || []).filter((t) => now - t < 10 * 60_000);
  list.push(now);
  recent.set(ip, list);
  return list.length > 5;
}

export async function POST(req: Request) {
  let data: { app?: string; page?: string; subject?: string; body?: string; email?: string; website?: string };
  try { data = await req.json(); } catch { return Response.json({ error: 'Bad request' }, { status: 400 }); }
  if (data.website) return Response.json({ ok: true }); // honeypot field: bots fill it, people never see it
  const app = APPS.includes(data.app as (typeof APPS)[number]) ? (data.app as (typeof APPS)[number]) : 'kurs';
  const subject = String(data.subject || '').trim().slice(0, 140);
  const body = String(data.body || '').trim().slice(0, 4000);
  const email = String(data.email || '').trim().slice(0, 254) || null;
  const page = String(data.page || '').slice(0, 300) || null;
  if (!subject || !body) return Response.json({ error: 'Subject and description are needed.' }, { status: 400 });
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'local';
  if (tooMany(ip)) return Response.json({ error: 'Too many reports. Please try again in a few minutes.' }, { status: 429 });

  const ua = (req.headers.get('user-agent') || '').slice(0, 400);
  const token = req.headers.get('authorization')?.replace(/^Bearer\s+/i, '');
  let saved = false;
  if (URL && ANON) {
    const sb = createClient(URL, ANON, {
      global: token ? { headers: { Authorization: `Bearer ${token}` } } : undefined,
      auth: { persistSession: false, autoRefreshToken: false },
    });
    const { error } = await sb.from('site_reports').insert({ app, page, subject, body, email, user_agent: ua });
    if (error) console.error('report insert', error.message);
    else saved = true;
  }

  const key = process.env.RESEND_API_KEY;
  let mailed = false;
  if (key) {
    const appName = app === 'pruefung' ? 'Prüfung' : app === 'spiele' ? 'Spiele' : 'Kurs';
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: process.env.RESEND_FROM_REPORTS ?? 'Fuchsdeutsch Reports <reports@fuchsdeutsch.de>',
        to: [process.env.REPORT_TO ?? 'admin@fuchsdeutsch.de'],
        ...(email ? { reply_to: email } : {}),
        subject: `[Report · ${appName}] ${subject}`,
        text: `${body}\n\nApp: ${appName}\nPage: ${page ?? '-'}\nFrom: ${email ?? 'not given'}\nBrowser: ${ua}`,
        html: `<div style="font-family:Helvetica,Arial,sans-serif;font-size:15px;line-height:1.5;color:#1d1d1f">
<p style="font-weight:700;font-size:17px;margin:0 0 10px">${esc(subject)}</p>
<p style="white-space:pre-wrap;margin:0 0 16px">${esc(body)}</p>
<p style="color:#666;font-size:13px;margin:0">App: ${appName}<br>Page: ${esc(page ?? '-')}<br>From: ${esc(email ?? 'not given')}<br>Browser: ${esc(ua)}</p></div>`,
      }),
    });
    mailed = r.ok;
    if (!r.ok) console.error('report mail', r.status, await r.text());
  }
  if (!saved && !mailed) return Response.json({ error: 'Could not send the report right now. Please email admin@fuchsdeutsch.de.' }, { status: 500 });
  return Response.json({ ok: true });
}
