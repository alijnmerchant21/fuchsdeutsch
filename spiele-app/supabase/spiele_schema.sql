-- Fuchsdeutsch Spiele: XP per game round, streaks and the games leaderboard.
-- Run once in Supabase: SQL Editor > New query > paste > Run. Safe to run again.
-- Uses the same accounts and the same leaderboard opt-out (profiles.progress -> 'profile' ->> 'board') as Fuchsdeutsch.

create table if not exists public.spiele_plays (
  id bigint generated always as identity primary key,
  user_id uuid not null references auth.users (id) on delete cascade,
  game_id text not null check (char_length(game_id) between 1 and 60),
  -- the player's local calendar day, so streaks follow their own midnight
  day date not null,
  xp integer not null check (xp between 0 and 500),
  created_at timestamptz not null default now()
);
create index if not exists spiele_plays_user_day on public.spiele_plays (user_id, day);
create index if not exists spiele_plays_day on public.spiele_plays (day);

alter table public.spiele_plays enable row level security;
drop policy if exists "read own plays" on public.spiele_plays;
create policy "read own plays" on public.spiele_plays for select using (user_id = auth.uid());
drop policy if exists "insert own plays" on public.spiele_plays;
-- A day may be at most one day off the server date (time zones), never in the past or future beyond that.
create policy "insert own plays" on public.spiele_plays for insert
  with check (user_id = auth.uid() and day between current_date - 1 and current_date + 1);
revoke all on public.spiele_plays from anon;
grant select, insert on public.spiele_plays to authenticated;

-- Top players. scope 'week' = since Monday, 'all' = all time. game null = all games.
-- Only the first name, the XP and the streak leave the database.
create or replace function public.spiele_leaderboard(scope text default 'week', game text default null, max_rows int default 50)
returns table (player text, score int, streak_days int, is_me boolean)
language sql security definer stable set search_path = public as $$
  with s as (
    select user_id, sum(xp)::int as score
    from public.spiele_plays
    where (game is null or game_id = game)
      and (scope <> 'week' or day >= date_trunc('week', current_date)::date)
    group by user_id
  ),
  days as (select distinct user_id, day from public.spiele_plays),
  -- gaps and islands: consecutive days share the same (day - row number)
  isl as (select user_id, day, day - (row_number() over (partition by user_id order by day))::int as grp from days),
  lastd as (select user_id, max(day) as last_day from days group by user_id),
  d as (
    -- streak = the run of days that ends on the last played day, if that was today or yesterday
    select i.user_id, count(*)::int as streak_days
    from isl i join lastd l on l.user_id = i.user_id
    where l.last_day >= current_date - 1
      and i.grp = (select i2.grp from isl i2 where i2.user_id = l.user_id and i2.day = l.last_day)
    group by i.user_id
  )
  select
    coalesce(nullif(split_part(coalesce(p.progress -> 'profile' ->> 'name', p.name, ''), ' ', 1), ''), 'Lernfuchs') as player,
    s.score,
    coalesce(d.streak_days, 0) as streak_days,
    (s.user_id = auth.uid()) as is_me
  from s
  join public.profiles p on p.id = s.user_id
  left join d on d.user_id = s.user_id
  where coalesce((p.progress -> 'profile' ->> 'board')::boolean, true) and s.score > 0
  order by s.score desc
  limit least(greatest(max_rows, 1), 100);
$$;

revoke all on function public.spiele_leaderboard(text, text, int) from public, anon;
grant execute on function public.spiele_leaderboard(text, text, int) to authenticated;
