-- Fuchsdeutsch: closed beta sign-up.
-- Run once in Supabase: SQL Editor > New query > paste all of this > Run.
-- Visitors leave their email and answer the welcome questions on the homepage.
-- Only approved emails (and admins) can use the course. Approve people on the Admin page.
-- Everyone who already has an account when you run this file is approved automatically.

create table if not exists public.beta_signups (
  email text primary key check (email = lower(email) and email ~ '^[^@\s]+@[^@\s]+\.[^@\s]+$' and length(email) <= 254),
  -- Answers from the welcome questions: name, reasons, course, goal, first language, leaderboard choice.
  profile jsonb check (profile is null or length(profile::text) <= 4000),
  approved boolean not null default false,
  created_at timestamptz not null default now(),
  approved_at timestamptz
);

alter table public.beta_signups enable row level security;

-- Only admins read or change the list directly. Visitors go through the functions below.
drop policy if exists "admin reads beta" on public.beta_signups;
create policy "admin reads beta" on public.beta_signups for select using (public.is_admin());
drop policy if exists "admin updates beta" on public.beta_signups;
create policy "admin updates beta" on public.beta_signups for update using (public.is_admin()) with check (public.is_admin());
revoke all on public.beta_signups from anon, authenticated;
grant select on public.beta_signups to authenticated;
grant update (approved, approved_at) on public.beta_signups to authenticated;

-- Step 1: join the list with an email.
-- Returns 'ok' if the welcome questions are still to be answered, 'exists' if this email has already done both steps.
create or replace function public.beta_signup(p_email text)
returns text language plpgsql security definer set search_path = public as $$
declare
  e text := lower(trim(p_email));
  has_profile boolean;
begin
  insert into public.beta_signups (email) values (e) on conflict (email) do nothing;
  select profile is not null into has_profile from public.beta_signups where email = e;
  return case when has_profile then 'exists' else 'ok' end;
end;
$$;
revoke all on function public.beta_signup(text) from public;
grant execute on function public.beta_signup(text) to anon, authenticated;

-- Step 2: save the welcome answers. Only works once per email, so nobody can overwrite them later.
create or replace function public.beta_profile(p_email text, p_profile jsonb)
returns text language plpgsql security definer set search_path = public as $$
begin
  update public.beta_signups set profile = p_profile
  where email = lower(trim(p_email)) and profile is null;
  return case when found then 'ok' else 'exists' end;
end;
$$;
revoke all on function public.beta_profile(text, jsonb) from public;
grant execute on function public.beta_profile(text, jsonb) to anon, authenticated;

-- True if the signed-in account may use the course.
create or replace function public.beta_access() returns boolean
language sql stable security definer set search_path = public as $$
  select public.is_admin() or exists (
    select 1 from public.beta_signups b
    where b.approved and b.email = lower(coalesce(auth.jwt() ->> 'email', ''))
  );
$$;
revoke all on function public.beta_access() from public, anon;
grant execute on function public.beta_access() to authenticated;

-- The welcome answers for the signed-in account, so approved testers are not asked again.
create or replace function public.my_beta_profile() returns jsonb
language sql stable security definer set search_path = public as $$
  select profile from public.beta_signups
  where email = lower(coalesce(auth.jwt() ->> 'email', ''));
$$;
revoke all on function public.my_beta_profile() from public, anon;
grant execute on function public.my_beta_profile() to authenticated;

-- Existing accounts keep their access.
insert into public.beta_signups (email, approved, approved_at)
select lower(u.email), true, now()
from auth.users u
where u.email is not null
on conflict (email) do update set approved = true, approved_at = coalesce(public.beta_signups.approved_at, now());

-- Check: how many are approved now.
select count(*) filter (where approved) as approved, count(*) as total from public.beta_signups;
