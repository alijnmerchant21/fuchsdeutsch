-- Fuchsdeutsch: make sure learner progress really reaches the database.
-- Safe to run more than once.

-- 1. The upsert needs UPDATE on id too (same as 005, in case 005 was never run).
grant update (id) on public.profiles to authenticated;

-- 2. A save function that does not depend on column grants. It only ever touches the caller's own row.
create or replace function public.save_progress(p jsonb) returns void
language plpgsql security definer set search_path = public as $$
declare uid uuid := auth.uid();
begin
  if uid is null then return; end if;
  insert into public.profiles (id, email, name, progress, xp, streak, last_active, updated_at)
  values (
    uid,
    coalesce((select email from auth.users where id = uid), ''),
    coalesce(p #>> '{profile,name}', split_part(coalesce((select email from auth.users where id = uid), ''), '@', 1)),
    p,
    coalesce((p ->> 'xp')::int, 0),
    coalesce((p #>> '{streak,count}')::int, 0),
    nullif(p #>> '{streak,last}', '')::date,
    now()
  )
  on conflict (id) do update set
    progress = excluded.progress,
    xp = excluded.xp,
    streak = excluded.streak,
    last_active = coalesce(excluded.last_active, public.profiles.last_active),
    updated_at = now();
end $$;
grant execute on function public.save_progress(jsonb) to authenticated;

-- 3. Check: who has saved progress so far?
select email, xp, last_active, updated_at,
       jsonb_typeof(progress) as kind,
       (select count(*) from jsonb_object_keys(coalesce(progress -> 'done', '{}'::jsonb))) as sections
from public.profiles order by updated_at desc nulls last;
