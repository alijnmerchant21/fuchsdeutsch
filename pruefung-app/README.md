# Fuchsdeutsch Prüfung (Exam Edition)

Mock exam center for the Goethe-Zertifikat B1. Practice only, no teaching.
Free Mock Test 1 (diagnostic, about 40 minutes) → candidate enters exam date and study time → admin builds the next block with Claude → candidate only ever sees the current block.

## Run it

```
npm install
npm run dev
```

Open http://localhost:3100/pruefung (the app always runs under /pruefung, like on www.fuchsdeutsch.de/pruefung). With no `.env.local` it runs in **demo mode**: sign in with any name and email (tick "Als Admin testen" for the admin view). Everything is stored in this browser only.

## Connect to the Fuchsdeutsch Supabase (real login, data per user)

1. Supabase > SQL Editor: run `supabase/exam_schema.sql` once. It only adds `exam_` tables and functions.
2. Copy `.env.example` to `.env.local` and paste the same two values as Fuchsdeutsch (Supabase > Project Settings > API).
3. Supabase > Authentication > URL Configuration: add `http://localhost:3100/auth/callback` to the redirect URLs (only needed for email links and Google; password login works without it).
4. Admin is the Fuchsdeutsch admin (`profiles.is_admin`, e.g. admin@fuchsdeutsch.de).

## The admin loop (manual for now)

1. Admin > candidate > **Export erstellen und kopieren**. Paste into Claude.
2. Claude answers with JSON (`block` and/or `feedback` for Schreiben).
3. Paste it under **Antwort von Claude einfügen**. It is checked (dates, set ids, answers, exact quotes) before it is saved. The block is visible to the candidate right away.

Block rule (`lib/plan.ts`): 28+ days left → 7-day blocks, 8 to 27 → days/4 (min 2), 7 or fewer → 2-day blocks.
A block closes on its end date even if unfinished. The next block then shows the "built from partial results" notice.

## Content

| What | Where |
| --- | --- |
| Own items (Hören, Lesen, Schreiben) | `content/bank.json` |
| Free diagnostic | `content/diagnose.json` |
| Own audio (ElevenLabs) | `public/audio/own/` |
| Cornelsen full mocks (personal copy) | `public/licensed/` — gitignored, never commit or deploy |

`content/bank.json` is built from the B1-Trainer with `npm run import-trainer -- "<path to B1-Trainer>"` (only original sets, book sets are skipped).
Hören sets without an MP3 are read by the browser's German voice until audio is generated.

## Go live at www.fuchsdeutsch.de/pruefung

This folder lives in the Fuchsdeutsch repo as `pruefung-app/` and is deployed as its own Vercel project (Root Directory `pruefung-app`). The Fuchsdeutsch project forwards `/pruefung/*` to it (rewrite in the root `next.config.mjs`, switched on by `PRUEFUNG_ORIGIN`). Same domain, so the Supabase login is shared with Fuchsdeutsch. The course finals moved from `/pruefung/<course>` to `/abschlusspruefung/<course>` (old links redirect).

1. Supabase > SQL Editor: run `supabase/exam_schema.sql` (safe to run again).
2. Supabase > Authentication > URL Configuration: `https://www.fuchsdeutsch.de/pruefung/auth/callback` (and `http://localhost:3100/pruefung/auth/callback` for local tests).
3. Push the Fuchsdeutsch repo.
4. Vercel > Add New > Project > the same `fuchsdeutsch` repo > Root Directory `pruefung-app`. Env vars: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` (same as Fuchsdeutsch). Deploy. Check `https://<project>.vercel.app/pruefung`.
5. Vercel, Fuchsdeutsch project > Settings > Environment Variables: `PRUEFUNG_ORIGIN=https://<project>.vercel.app`. Redeploy.
6. Open `https://www.fuchsdeutsch.de/pruefung`, sign in, fill the form, do Mock Test 1, then check Admin.
