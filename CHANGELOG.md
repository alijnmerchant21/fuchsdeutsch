# Changelog

All notable changes from the `cursor/fox-mascot-admin-experience` work stream (October 2026).

Format: newest first. Branch commits: `fdd45e2` → `b308c64` → `9160179` → `1651c98`.

---

## 2026-10-18 — A2 enrichment, stories, pictures and diagrams

### A2 content
- Mined the Netzwerk neu A2 answer keys (Kursbuch K1–6, Übungsbuch K1–12) for themes, phrases and exercise patterns, rewritten for the Fuchsbau-WG. Sources stay outside the repo.
- Every A2 chapter's "Das kann ich jetzt" section gained 6–7 blocks: phrases (Redemittel), match, gap, sort or order, two mcqs. A2 now has 574 blocks (A1: 581).
- Six optional A2 stories (`content/stories/a2.ts`): Das Klassentreffen, Ein Tag offline, Der erste Arbeitstag, Der falsche Zug, Das große Spiel, Ein Bild im Museum. Chapters point to them. `/geschichten` groups stories by level.

### Pictures and diagrams
- `content/a2/images.ts`: 64 A2 scenes and 79 vocabulary pictures. All courses are combined in `content/images.ts`. `npm run images -- --course a2` makes only A2. Without `--course`, A1 is finished first.
- `content/a2/visuals.ts`: 15 A2 diagrams (weil/dass/wenn, clause order, adjective endings, indirect questions, deshalb/trotzdem, relative clauses, wo/wohin) plus a new route diagram (durch, über, vorbei, entlang, um … herum, gegenüber).
- Cast cards also appear in A2 Kapitel 1 and on the A2 course page.

---

## 2026-10-16 — Pictures and visual grammar for A1

- `content/a1/images.ts`: fixed looks for the cast, 65 scene prompts (one per reading, listening and episode), 80 picture-vocabulary prompts. One shared pastel picture-book style.
- `npm run images` (`scripts/generate-images.mjs`): makes the pictures with FLUX.1 schnell on Cloudflare Workers AI, free for about 170 a day. Saves `public/images/<id>.webp` and `manifest.json`. Resumes where it stopped.
- Lessons show the scene picture on reading and listening screens. Audio players show cast faces. Match exercises show drawn objects instead of emoji. Chapter cards get a banner. The Fuchsbau-WG cast cards sit on the A1 course page and in the first lesson.
- Visual grammar drawn in code (`content/a1/visuals.ts`, `components/GrammarVisual.tsx`): verb positions and the sentence bracket, article colors, clock, prepositions, wo/wohin, seasons, compass. 17 diagrams in A1.
- Pictures only appear once their file exists, so the site looks the same until you run the script. `npm run check` flags picture keys that match no block.

---

## 2026-10-15 — Closed beta, privacy page, English hints, games removed

- Homepage is a two-step closed-beta sign-up: email and consent, then the same welcome questions new learners answer. "Free during the beta", deposit struck out.
- The answers are stored with the sign-up (`beta_signups.profile`). When an approved tester logs in, they are applied to the account, so the welcome form is never asked twice.
- Only approved emails (and admins) can use the course. Others see "You’re on the list". Existing accounts are approved automatically.
- `supabase/006_beta.sql`: `beta_signups` table, `beta_signup()`, `beta_profile()`, `beta_access()`, `my_beta_profile()`. Until it is run, the site stays open.
- Admin page: Beta-Warteliste with Freigeben / zurücknehmen and "copy approved emails".
- Site-wide footer with Privacy and Contact. English privacy page at `/privacy`. No Impressum for now.
- A1 to B1: every German instruction shows an English line (tasks, exercise feedback, lesson player, exams). Missing translations live in `content/taskEn.ts`, and `npm run check` fails if one is missing.
- Welcome questions moved into `components/ProfileForm.tsx` (used by `/willkommen` and the homepage).
- Games page and game links removed (game data kept in `content/` for later). Leaderboard ranks by XP only.

---

## 2026-10-15 — Step-by-step lesson flow (v3 UI)

### Lessons
- Sections now play one screen at a time instead of one long page (`components/Player.tsx`).
- `lib/phases.ts` splits each section into steps by block type (Einstieg, Lesen, Hören, Regel, Üben). No content files changed.
- Orientation on every screen: breadcrumb, progress bar, step rail, "Schritt x von y · Aufgabe x von y", "Was jetzt?" line, "Als Nächstes" preview. Text or rule stays one tap away while answering.
- Weiter unlocks when the task is solved (same rule as before). New finish screen: what you can do now, next section.

### Dashboard and course
- `/lernen`: one clear next step with a preview of its steps, a single stats strip, courses as rows (`lib/next.ts`).
- New `/kurs`: current chapter in focus, finished chapters compact, later chapters folded. Exam pages link back to `/kurs`.
- Nav: Start, Mein Kurs, Spiele, Geschichten, Bestenliste. English-Hilfe switch moved into lessons and the course page.

### Look
- `app/v3.css`: white cards, thin grey lines, dark solid buttons, pastel accents only. Calms the older sticker styles site-wide.

### Branch
- `cursor/fox-mascot-admin-experience` fully merged into `main` and closed.

---

## [Unreleased] — local only (not committed)

- Local textbook / PDF clones under `.content-sources/` (gitignored)
- ClamAV / PDF safety scan notes for those sources
- `.env.local` ElevenLabs keys (gitignored)
- Unstaged Supabase files: `supabase/schema.sql`, `supabase/005_fix_profiles.sql`

---

## 2026-10-15 — Enrich A1 + optional stories (`1651c98`)

### A1 textbook enrichment

- Kept the **Fuchsbau-WG** storyline (not 1:1 Netzwerk mapping).
- **Kapitel 1:** deeper practice — age, address, nationality, forms, pronouns, greetings; glossary expansions; no Bangla.
- **Kapitel 2–12:** extra match / gap / mcq (and tips / story pointers) in “Das kann ich jetzt” blocks.
- Content aligned loosely with Goethe A1 topic inventory (person, city, food, time, etc.).

### Stories

- New optional reading track in TypeScript:
  - `content/stories/types.ts`, `a1.ts`, `index.ts`
  - Six A1 stories with quizzes (e.g. *Mein Tag*, *Im Park*, *Einkaufen*, *Willkommen, Kenji!*)
- Routes: `/geschichten`, `/geschichten/[id]`
- Nav link **Geschichten**; Community page shows a sample
- After finishing a chapter’s last section, optional story links when tagged to that chapter
- Styles for story cards / quiz feedback in `app/globals.css`

### Auth redirect polish

- `lib/site.ts`: default canonical site `https://www.fuchsdeutsch.de`; auth callback URL without query; next path stored in `localStorage`
- `app/auth/callback/page.tsx`: simpler session wait + clearer error/expiry messages

---

## 2026-10-14 — A1 AI listening audio (`9160179`)

### Audio assets

- Generated **64/64** A1 listening MP3s (all 12 chapters + final exam Hören) into `public/audio/`
- Updated `public/audio/manifest.json`

### Pipeline

- Upgraded `scripts/generate-audio.mjs`:
  - Model default `eleven_v3`
  - `--course`, `--prefix`, `--only`, `--force`, `--dry`, `--voices`, `--max-chars`
  - Pauses between speakers + loudness normalisation (`ffmpeg`)
  - Reads `.env.local` via `npm run audio`
- Added `scripts/voices.json` (cast → ElevenLabs voice IDs) and expanded `voices.example.json` for A1 flat-share characters
- Documented `ELEVENLABS_MODEL` in `.env.example`

### Player behaviour

- No robotic browser TTS when an MP3 is missing — show transcript + “audio coming” message
- Glossary word speak is a no-op until recorded assets exist (`lib/audio.ts`, `components/AudioPlayer.tsx`)

---

## 2026-10-14 — Brand logo + custom-domain auth (`b308c64`)

### Logo

- Replaced flat SVG / photo mascot with low-poly brand mark `public/fox-logo.png`
- Updated `components/Fox.tsx` + related CSS

### Session / domain

- Canonical site helper `lib/site.ts` + `NEXT_PUBLIC_SITE_URL` in `.env.example`
- Auth redirects go through `/auth/callback` (PKCE code exchange) instead of raw `/lernen`
- Middleware: production `*.vercel.app` → custom domain (308) when `NEXT_PUBLIC_SITE_URL` is set
- Supabase client: `persistSession`, `autoRefreshToken`, `flowType: 'pkce'`, `localStorage`
- `.gitignore`: ignore `.content-sources/` for private PDF clones

**Ops note (dashboard, not in repo):** set Vercel `NEXT_PUBLIC_SITE_URL=https://www.fuchsdeutsch.de` and Supabase Site URL + Redirect URLs to `https://www.fuchsdeutsch.de/auth/callback` (and `/**`).

---

## 2026-10-14 — Admin as staff + mascot swap (`fdd45e2`)

### Admin experience

- Admins skip the welcome questionnaire (`RequireUser`)
- Course always unlocked for admins (no “admin view” gate on locks)
- No XP / streak / progress writes for admins (`completeSection`, `recordExam`, `recordGame`, `saveProfile`)
- Login and `/lernen` send admins to `/admin`
- Nav: hide learner streak/XP and learner links; show Admin badge
- Admin toggle copy updated for “staff browsing”

### Mascot (superseded later)

- First pass used a photorealistic fox image; later replaced by the low-poly logo in `b308c64`

---

## Decisions / paused (documented for later)

| Item | Status |
|------|--------|
| Picture-vocab games (Visual Dictionary) | Paused |
| Top-level **Exams** practice hub | Paused |
| Sprechen / live conversation AI | Paused (researched Gradium vs ElevenLabs) |
| AI writing correction (e.g. Gemini free tier) | Design only — free quotas unstable; ~250–1000 corrections/day possible depending on model |
| Human-recorded audio | Preferred long-term; AI (ElevenLabs) used as interim |
| Stories CMS | Stay on TS/Markdown for now |

---

## Source material — Hazrat-Ali9 repositories

Owner account: [Hazrat-Ali9](https://github.com/Hazrat-Ali9) (alternate GitHub account for the same author).  
These repos are **not** forked or linked inside the public Fuchsdeutsch repo. Clones live only in the local, gitignored folder `.content-sources/`. Bangla text in PDFs is **ignored** everywhere in the app (DE + EN only).

**How we use them:** PDFs are mined for themes, word lists, exercise *patterns*, and story ideas, then rewritten into Fuchsdeutsch TypeScript (`content/a1/*`, `content/stories/*`). We keep the Fuchsbau-WG course structure; we do **not** map 1:1 to Netzwerk chapter order.

### Used for A1 (this branch)

| Repository | What it contains | Where / how used in Fuchsdeutsch |
|------------|------------------|----------------------------------|
| [Deutschland-Book-A1](https://github.com/Hazrat-Ali9/Deutschland-Book-A1) | Netzwerk A1 Kurs-/Übungsbuch, glossaries, Goethe A1 Wortliste, Sprechen cards (PDFs; some via Git LFS) | **Primary textbook source.** Goethe Start Deutsch 1 Wortliste themes (Person, Adresse, Alter, Nationalität, …) guided Kapitel 1 enrichment; glossar/topic inventory informed K2–K12 extra drills in `content/a1/k01.ts` … `k12.ts`. |
| [Deutschland-Story](https://github.com/Hazrat-Ali9/Deutschland-Story) | Graded readers / A1 short-story PDFs | **Stories.** Themes and A1-level texts inspired optional readings rewritten into `content/stories/a1.ts` (e.g. *Mein Tag*, *Im Park*, *Meine Familie*, *Einkaufen*). Served at `/geschichten`. Also holds *German Visual Dictionary* (~1100 images) — **parked** for a future picture-vocab / Townsend-style app. |
| [Deutschland-Basic](https://github.com/Hazrat-Ali9/Deutschland-Basic) | Alphabet, numbers, time, starter sentences, mixed A1/A2 PDFs | **Enrichment reference** for early A1 skills (numbers, greetings, basics) already covered/extended in K1–K2 drills. |
| [Deutschland-Vocabulary-A1-B2](https://github.com/Hazrat-Ali9/Deutschland-Vocabulary-A1-B2) | Large A1–B2 word-list / glossary PDF set (often with Bangla) | **Vocab themes** for chapter check sections; Bangla columns discarded; German lemmas used as inspiration for match/gap/cards. |
| [Deutschland-Verb](https://github.com/Hazrat-Ali9/Deutschland-Verb) | Verb lists, Akk/Dativ, reflexive, irregulars | **Grammar drills** inspiration (Präsens, Perfekt, separable verbs) in K1, K6, K10 extras and existing verb games. |
| [Deutsch-Sentence-Making](https://github.com/Hazrat-Ali9/Deutsch-Sentence-Making) | A1 “sentence making day” drill PDFs | **Satzbau / order / compose** exercise patterns aligned with chapter practice. |
| [Deutschland-Preposition](https://github.com/Hazrat-Ali9/Deutschland-Preposition) | Cases, prepositions, pronouns PDFs | **Reference** for K7 Dativ-preposition style extras and later grammar modules. |

Cloned locally under `.content-sources/` for the A1 pass (also scanned with ClamAV; PDFs verified as real files after `git lfs pull` for Book-A1).

### Mapped / planned — not built into the app yet

| Repository | What it contains | Intended use (paused or later) |
|------------|------------------|--------------------------------|
| [German-Vocabulary-With-Picture](https://github.com/Hazrat-Ali9/German-Vocabulary-With-Picture) | Picture vocab / Bildwörterbuch PDFs | Future **picture-vocab games** + possible Townsend app sync — **paused**. |
| [Goethe-Zertifikat-in-Deutschland-A1](https://github.com/Hazrat-Ali9/Goethe-Zertifikat-in-Deutschland-A1) | Start Deutsch 1 style exam PDFs, Sprechen karten | Future **Exams** hub / extra mocks — **paused** (course already has `content/a1/final.ts`). |
| [Deutschland-Teil](https://github.com/Hazrat-Ali9/Deutschland-Teil) | Exam “Teil” PDFs by skill (Hören, Lesen, Schreiben, Sprechen) | Structure reference for skill drills in a future `/exams` section — **paused**. |
| [Goethe-Zertifikat-in-Deutschland-A2](https://github.com/Hazrat-Ali9/Goethe-Zertifikat-in-Deutschland-A2) | A2 exam materials | Later A2 exams hub. |
| [Goethe-Zertifikat-in-Deutschland-B1](https://github.com/Hazrat-Ali9/Goethe-Zertifikat-in-Deutschland-B1) | B1 exam materials | Later B1 exams hub. |

### Higher levels — not used in this A1 pass

| Repository | Level | Notes |
|------------|-------|--------|
| [Deutsch-Book-A2](https://github.com/Hazrat-Ali9/Deutsch-Book-A2) | A2 | Netzwerk A2 books — for later A2 enrichment. |
| [Deutschland-Book-A2](https://github.com/Hazrat-Ali9/Deutschland-Book-A2) | A2 | Overlaps A2 books / Fit fürs Goethe A2 — pick one when enriching A2. |
| [Deutschland-Book-B1](https://github.com/Hazrat-Ali9/Deutschland-Book-B1) | B1 | Netzwerk / Aspekte B1 — future B1 course. |
| [Deutsch-Book-B1](https://github.com/Hazrat-Ali9/Deutsch-Book-B1) | B1 | Broader B1 set + question banks — future B1. |
| [Deutschland-Book-B2](https://github.com/Hazrat-Ali9/Deutschland-Book-B2) | B2 | Aspekte B2 / glossaries — future B2. |
| [German-Book-B2](https://github.com/Hazrat-Ali9/German-Book-B2) | B2 | Extra B2 Wortlisten / Vortrag materials — future B2. |

### UI / empty — not used as content

| Repository | What it contains | How used |
|------------|------------------|----------|
| [Deutsch-Learn-Frontend](https://github.com/Hazrat-Ali9/Deutsch-Learn-Frontend) | Next.js + TypeScript + Tailwind German-learning frontend | **UI reference only** if needed; Fuchsdeutsch already has its own Next app. No code merged from it. |
| [Goethe-Institut-Deutschland](https://github.com/Hazrat-Ali9/Goethe-Institut-Deutschland) | README + licence only | **No content** — ignore. |

### Pipeline reminder

```
Hazrat-Ali9/*.git  →  .content-sources/ (local, gitignored)
                   →  extract themes / DE text (drop Bangla)
                   →  rewrite into content/a1/*.ts + content/stories/*.ts
                   →  public Fuchsdeutsch repo (no PDF dumps, no source-repo mentions in runtime code)
```

---

## Summary by area

| Area | What changed |
|------|----------------|
| Branding | Low-poly fox logo |
| Auth / domain | Callback route, site URL, session persistence, Vercel→www redirect |
| Admin | Staff mode: no learner gates, no gamification |
| A1 content | Extra drills K1–K12; Fuchsbau kept; sourced from Book-A1 / vocab / verb / basic repos |
| A1 audio | Full AI MP3 set (64 texts) |
| Stories | Optional A1 reading + quizzes + UI (inspired by Deutschland-Story) |
| Source repos | Documented Hazrat-Ali9 map; clones only in `.content-sources/` |
| Tooling | Audio script, voices config, content-sources gitignore |
