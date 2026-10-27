-- Fuchsdeutsch: who uses which app (course, Prüfung, Spiele). One account, a separate join per app.
-- Run once in Supabase: SQL Editor > New query > paste all of this > Run. Safe to run again.
-- Needs 006_beta.sql, 008_control_center.sql and pruefung-app/supabase/exam_schema.sql to be run before.
--
-- Access itself stays where it is today: beta_signups.approved (course) and exam_access (Prüfung).
-- Spiele is open: the first visit with an account joins it.
-- This table mirrors all of that automatically (triggers), so the admin can count sign-ups,
-- waiting, approved, active and overlap per app, and see where each person started.

create table if not exists public.app_access (
  email text not null,
  app text not null check (app in ('kurs', 'pruefung', 'spiele')),
  user_id uuid references auth.users (id) on delete set null,
  status text not null default 'waiting' check (status in ('waiting', 'approved')),
  -- first touch: referrer site or ?ref= / utm_source of the first visit, if any
  source text check (source is null or length(source) <= 120),
  created_at timestamptz not null default now(),
  approved_at timestamptz,
  last_seen_at timestamptz,
  primary key (email, app)
);
create index if not exists app_access_user on public.app_access (user_id);

alter table public.app_access enable row level security;
drop policy if exists "app access own" on public.app_access;
create policy "app access own" on public.app_access for select
  using (public.is_admin() or user_id = auth.uid() or email = lower(coalesce(auth.jwt() ->> 'email', '')));
drop policy if exists "app access admin" on public.app_access;
create policy "app access admin" on public.app_access for all using (public.is_admin()) with check (public.is_admin());
revoke all on public.app_access from anon;
grant select on public.app_access to authenticated;

-- Course: mirrors beta_signups (sign-up = waiting, approved = approved).
create or replace function public.app_access_from_beta() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  insert into public.app_access (email, app, status, created_at, approved_at)
  values (lower(new.email), 'kurs', case when new.approved then 'approved' else 'waiting' end, new.created_at,
          case when new.approved then coalesce(new.approved_at, now()) end)
  on conflict (email, app) do update set status = excluded.status, approved_at = excluded.approved_at;
  return new;
end $$;
drop trigger if exists beta_to_app_access on public.beta_signups;
create trigger beta_to_app_access after insert or update of approved on public.beta_signups
for each row execute function public.app_access_from_beta();

-- Prüfung: filling the setup form = waiting, a row in exam_access = approved.
create or replace function public.app_access_from_candidate() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  insert into public.app_access (email, app, user_id, status, created_at, approved_at)
  select lower(new.email), 'pruefung', new.user_id,
         case when exists (select 1 from public.exam_access x where x.user_id = new.user_id) then 'approved' else 'waiting' end,
         new.created_at, (select x.approved_at from public.exam_access x where x.user_id = new.user_id)
  on conflict (email, app) do update set user_id = excluded.user_id;
  return new;
end $$;
drop trigger if exists candidate_to_app_access on public.exam_candidates;
create trigger candidate_to_app_access after insert on public.exam_candidates
for each row execute function public.app_access_from_candidate();

create or replace function public.app_access_from_exam_access() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if tg_op = 'DELETE' then
    update public.app_access set status = 'waiting', approved_at = null where app = 'pruefung' and user_id = old.user_id;
    return old;
  end if;
  update public.app_access set status = 'approved', approved_at = new.approved_at where app = 'pruefung' and user_id = new.user_id;
  return new;
end $$;
drop trigger if exists exam_access_to_app_access on public.exam_access;
create trigger exam_access_to_app_access after insert or delete on public.exam_access
for each row execute function public.app_access_from_exam_access();

-- Called by each app once a day for a signed-in person: last seen, the account id, the first-touch source.
-- Spiele is open, so the first call there also joins it.
create or replace function public.app_touch(p_app text, p_source text default null) returns text
language plpgsql security definer set search_path = public as $$
declare
  e text := lower(coalesce(auth.jwt() ->> 'email', ''));
  s text;
begin
  if e = '' or auth.uid() is null or p_app not in ('kurs', 'pruefung', 'spiele') then return null; end if;
  if p_app = 'spiele' then
    insert into public.app_access (email, app, user_id, status, approved_at, source)
    values (e, 'spiele', auth.uid(), 'approved', now(), left(p_source, 120))
    on conflict (email, app) do nothing;
  end if;
  update public.app_access
     set last_seen_at = now(), user_id = coalesce(user_id, auth.uid()), source = coalesce(source, left(p_source, 120))
   where email = e and app = p_app
  returning status into s;
  return s;
end $$;
revoke all on function public.app_touch(text, text) from public, anon;
grant execute on function public.app_touch(text, text) to authenticated;

-- Fill in everyone who is already there.
insert into public.app_access (email, app, status, created_at, approved_at)
select lower(email), 'kurs', case when approved then 'approved' else 'waiting' end, created_at, case when approved then coalesce(approved_at, created_at) end
from public.beta_signups
on conflict (email, app) do update set status = excluded.status, approved_at = excluded.approved_at;

insert into public.app_access (email, app, user_id, status, created_at, approved_at)
select lower(c.email), 'pruefung', c.user_id, case when x.user_id is not null then 'approved' else 'waiting' end, c.created_at, x.approved_at
from public.exam_candidates c left join public.exam_access x on x.user_id = c.user_id
on conflict (email, app) do update set user_id = excluded.user_id, status = excluded.status, approved_at = excluded.approved_at;

-- Course accounts: link the account id, and last activity from the saved progress.
update public.app_access a set user_id = p.id, last_seen_at = coalesce(a.last_seen_at, p.updated_at)
from public.profiles p where a.app = 'kurs' and lower(p.email) = a.email;

-- Spiele: everyone who has played (only if the Spiele table exists).
do $$
begin
  if to_regclass('public.spiele_plays') is not null then
    insert into public.app_access (email, app, user_id, status, created_at, approved_at, last_seen_at)
    select lower(u.email), 'spiele', u.id, 'approved', min(sp.created_at), min(sp.created_at), max(sp.created_at)
    from public.spiele_plays sp join auth.users u on u.id = sp.user_id
    where u.email is not null
    group by u.email, u.id
    on conflict (email, app) do nothing;
  end if;
end $$;

-- Check: people per app and status.
select app, status, count(*) from public.app_access group by app, status order by app, status;
