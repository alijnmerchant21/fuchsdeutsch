-- Fuchsdeutsch database. Run this once in Supabase: SQL Editor > New query > paste > Run.

-- One row per learner. Created on first sign-in.
create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  email text not null,
  name text,
  is_admin boolean not null default false,
  -- Full progress (finished sections, exam results, game scores, streak, daily XP).
  progress jsonb not null default '{}'::jsonb,
  -- Copies of the headline numbers so the admin list and future leaderboards can sort fast.
  xp integer not null default 0,
  streak integer not null default 0,
  last_active date,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Deposit and deadline per learner and course. Not used by the app yet; ready for payments.
create table if not exists public.enrollments (
  user_id uuid not null references public.profiles (id) on delete cascade,
  course_id text not null,
  started_at timestamptz not null default now(),
  deadline timestamptz,
  -- 'trial' = joined in the free window, no deposit. Others are set by the payment webhook.
  deposit_status text not null default 'trial' check (deposit_status in ('trial', 'paid', 'refunded', 'forfeited')),
  completed_at timestamptz,
  primary key (user_id, course_id)
);

alter table public.profiles enable row level security;
alter table public.enrollments enable row level security;

-- Admin check that does not trigger the profiles policies again.
create or replace function public.is_admin() returns boolean
language sql security definer stable set search_path = public as $$
  select coalesce((select is_admin from public.profiles where id = auth.uid()), false);
$$;

drop policy if exists "read own profile or admin" on public.profiles;
create policy "read own profile or admin" on public.profiles for select using (id = auth.uid() or public.is_admin());
drop policy if exists "insert own profile" on public.profiles;
create policy "insert own profile" on public.profiles for insert with check (id = auth.uid());
drop policy if exists "update own profile" on public.profiles;
create policy "update own profile" on public.profiles for update using (id = auth.uid()) with check (id = auth.uid());

drop policy if exists "read own enrollment or admin" on public.enrollments;
create policy "read own enrollment or admin" on public.enrollments for select using (user_id = auth.uid() or public.is_admin());

-- Learners may write their own progress but can never make themselves admin:
-- the is_admin column is not in the list of columns they can insert or update.
revoke insert, update on public.profiles from anon, authenticated;
grant insert (id, email, name, progress, xp, streak, last_active, updated_at) on public.profiles to authenticated;
grant update (email, name, progress, xp, streak, last_active, updated_at) on public.profiles to authenticated;
grant select on public.profiles, public.enrollments to authenticated;

-- Make yourself admin after your first sign-in:
--   update public.profiles set is_admin = true where email = 'you@example.com';

-- Planned tables (not created yet): forum_posts, chat_messages (Supabase Realtime),
-- tutor_threads (AI tutor), townhall_sessions. They all hang off profiles.id.
-- Returns the top learners. game = null ranks by total XP, otherwise by the high score in that game.
-- Only the first name, the score and the streak leave the database. Learners who opted out are skipped.
create or replace function public.leaderboard(game text default null, max_rows int default 50)
returns table (player text, score int, streak_days int, is_me boolean)
language sql security definer stable set search_path = public as $$
  select
    coalesce(nullif(split_part(coalesce(p.progress -> 'profile' ->> 'name', p.name, ''), ' ', 1), ''), 'Lernfuchs') as player,
    (case when game is null then p.xp else coalesce((p.progress -> 'games' ->> game)::int, 0) end) as score,
    p.streak as streak_days,
    (p.id = auth.uid()) as is_me
  from public.profiles p
  where coalesce((p.progress -> 'profile' ->> 'board')::boolean, true)
    and (case when game is null then p.xp else coalesce((p.progress -> 'games' ->> game)::int, 0) end) > 0
  order by 2 desc, p.updated_at asc
  limit least(greatest(max_rows, 1), 100);
$$;

revoke all on function public.leaderboard(text, int) from public, anon;
grant execute on function public.leaderboard(text, int) to authenticated;
