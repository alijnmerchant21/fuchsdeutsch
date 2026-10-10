-- Fuchsdeutsch update 2: leaderboard.
-- Run once in Supabase: SQL Editor > New query > paste > Run.
-- (The welcome form needs no new columns: its answers live in profiles.progress -> 'profile'.)

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
