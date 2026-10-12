# Fuchsdeutsch

Free German course, A1 to C2. Open courses: A1 (12 chapters, Start Deutsch 1 style final) and B2.1 (8 chapters, the B1+ bridge into B2). A1 content lives in content/a1/, B2.1 in content/kapitel1-8.ts. Add a course by adding a Course object to `courses` in content/course.ts.

Stack: Next.js (App Router) + Supabase (Google login, Postgres). Deploys to Vercel.

## Run it

```
npm install
npm run dev
```

Open http://localhost:3000. With no `.env.local` the app runs in **demo mode**: sign in with any name and email, progress is saved in the browser only.

## Go live (in this order)

1. **Supabase**: create a project at supabase.com. In SQL Editor, run `supabase/schema.sql`.
2. **Google login**: Supabase > Authentication > Providers > Google. Follow the two-field setup (client id + secret from Google Cloud Console). Add your site URL under Authentication > URL Configuration.
3. **Keys**: copy `.env.example` to `.env.local` and fill in the two `NEXT_PUBLIC_SUPABASE_*` values (Supabase > Project Settings > API).
4. **Admin**: sign in once, then run in SQL Editor: `update public.profiles set is_admin = true where email = 'you@example.com';`
5. **GitHub + Vercel**: push this folder to a GitHub repo, import it in Vercel, add the same two env vars there.
6. **Voices**: copy `scripts/voices.example.json` to `scripts/voices.json`, put in ElevenLabs voice ids, run `ELEVENLABS_API_KEY=... npm run audio`. Commit the MP3s in `public/audio/`. Until then the player uses the browser's German voice.

## Where things are

| What | Where |
| --- | --- |
| Course outline (8 chapters) | `content/course.ts` |
| Kapitel 1 to 8: texts, audio scripts, exercises, exam, games | `content/kapitel1.ts` … `content/kapitel8.ts` |
| Short builders used by the chapter files | `content/helpers.ts` |
| Word explanations (German + English) | `content/glossary.ts` |
| Speakers and dialects | `content/speakers.ts` |
| Final exam (Goethe format) | `content/final.ts` |
| Game word lists | `content/games.ts` |
| Trial length, deposit, pass mark | `lib/config.ts` |
| Login, progress, streak, XP | `lib/store.tsx` |
| Unlock rules | `lib/unlock.ts` |
| Design tokens and all styles | `app/globals.css` |

## Add or change content

Each chapter is one file. Copy `content/kapitel8.ts` for a new chapter, add it to `content/course.ts`, its games to `content/games.ts` and its glossary to `content/glossary.ts`. Locking, exam, progress and the dashboard pick it up automatically.

After any content change run `npm run check`. It verifies every exercise: answers in range, word banks complete, glossary links, speakers, exam size.

## Rules built in

- A section opens when the one before it is finished. A chapter opens when the exam of the chapter before is passed (60%).
- The final exam opens when every chapter exam is passed.
- Admin view (Admin page) opens everything without changing the admin's own progress.
- Easy mode: explanations in simple German + English. Deutsch pur: simple German only.
- Streak: one activity a day. A streak freeze covers one missed day. A new freeze every 7 days, at most 2.
- Trial: `TRIAL_START` + 45 days in `lib/config.ts`. The deposit is described on the site but no payment is taken yet.

## Not built yet (the data model leaves room)

Payments for the deposit, AI tutor (also for free writing and speaking, which are replaced by checkable sentence building for now), live AI conversation, daily town hall, forum and live chat, videos.
