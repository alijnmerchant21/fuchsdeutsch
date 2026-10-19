# Fuchsdeutsch Spiele

Games to learn and improve German, A1 to B2. Same look, same login and same setup as Fuchsdeutsch Prüfung.

Home page (signed out) → Anmelden → game library with a level filter (Alle, A1, A2, B1, B2) → game.
Playable: **Schlüssel, bitte!** (B1, board game with a 3D board and dice) and **Der, die, das: Regen** (A2, arcade game). Every other card is grey with "Kommt bald".

## Run it

```
npm install
npm run dev
```

Open http://localhost:3200/spiele (the app always runs under /spiele, like www.fuchsdeutsch.de/spiele).
With no `.env.local` it runs in **demo mode**: sign in with any email, saved in this browser only.

## Real login (shared with Fuchsdeutsch)

1. Copy `.env.example` to `.env.local` and paste the same two Supabase values as Fuchsdeutsch.
2. Supabase > Authentication > URL Configuration: add `http://localhost:3200/spiele/auth/callback` and `https://www.fuchsdeutsch.de/spiele/auth/callback`.

3. Supabase > SQL Editor: run `supabase/spiele_schema.sql` once (table `spiele_plays` and function `spiele_leaderboard`).
4. Google login works as soon as the keys are in `.env.local`: it is the same Google provider as Fuchsdeutsch.

## XP, streaks, leaderboard

- A game sends XP to the app with `window.parent.postMessage({ source: 'fds-game', type: 'xp', amount: 10 }, '*')`. The app saves it (`lib/progress.ts`).
- Streak = days in a row with at least one XP. Daily goal 50 XP. Shown above the library.
- Bestenliste (`/bestenliste`): this week or all time, all games or one game. First names only, same opt-out as the Fuchsdeutsch leaderboard.
- The app tells a game when English-Hilfe changes: `{ source: 'fds-app', type: 'en', on: true }`.
- Demo mode keeps XP in the browser and fills the leaderboard with labeled sample players.

## Add or open a game

- Catalog: `lib/games.ts`. To open a game, set `live: true` and an `href`.
- Card drawings: `components/GameArt.tsx`.
- A self-contained HTML game goes in `public/games/` and gets a small page under `app/spiel/<id>/` (see `schluessel-bitte`). Realistic pictures for Schlüssel go in the `IMG` map at the top of its script.

## Go live at www.fuchsdeutsch.de/spiele

Same as the exam app:

1. Push the Fuchsdeutsch repo.
2. Vercel > Add New > Project > the `fuchsdeutsch` repo > Root Directory `spiele-app`. Env vars: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`. Deploy, then check `https://<project>.vercel.app/spiele`.
3. Vercel, Fuchsdeutsch project > Environment Variables: `SPIELE_ORIGIN=https://<project>.vercel.app`. Redeploy.
4. Open `https://www.fuchsdeutsch.de/spiele`.

Note: the game file in `public/games/` can be opened directly by its URL without signing in. The library and the game page need a login.
