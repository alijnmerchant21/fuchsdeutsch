-- Fuchsdeutsch control center: Prüfung waitlist, problem reports, sent emails.
-- Run once in Supabase: SQL Editor > New query > paste all of this > Run.
-- Needs schema.sql (is_admin) and pruefung-app/supabase/exam_schema.sql (exam_candidates) to be run before.

-- 1. Prüfung waitlist. A candidate fills the Prüfung form (exam_candidates) and waits.
--    Approved = a row here. Only admins add or remove rows.
create table if not exists public.exam_access (
  user_id uuid primary key references auth.users (id) on delete cascade,
  approved_at timestamptz not null default now(),
  approved_by uuid default auth.uid()
);
alter table public.exam_access enable row level security;
drop policy if exists "exam access read" on public.exam_access;
create policy "exam access read" on public.exam_access for select using (user_id = auth.uid() or public.is_admin());
drop policy if exists "exam access admin" on public.exam_access;
create policy "exam access admin" on public.exam_access for all using (public.is_admin()) with check (public.is_admin());
revoke all on public.exam_access from anon;
grant select, insert, delete on public.exam_access to authenticated;

-- Everyone who already uses Prüfung keeps access.
insert into public.exam_access (user_id, approved_at, approved_by)
select user_id, now(), null from public.exam_candidates
on conflict (user_id) do nothing;

-- 2. "Report a problem" from every page of the course, Prüfung and Spiele.
create table if not exists public.site_reports (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  app text not null check (app in ('kurs', 'pruefung', 'spiele')),
  page text check (page is null or length(page) <= 300),
  subject text not null check (length(subject) between 1 and 140),
  body text not null check (length(body) between 1 and 4000),
  email text check (email is null or length(email) <= 254),
  user_id uuid default auth.uid() references auth.users (id) on delete set null,
  user_agent text check (user_agent is null or length(user_agent) <= 400),
  status text not null default 'open' check (status in ('open', 'done'))
);
create index if not exists site_reports_open on public.site_reports (status, created_at desc);
alter table public.site_reports enable row level security;
drop policy if exists "anyone reports" on public.site_reports;
create policy "anyone reports" on public.site_reports for insert to anon, authenticated
  with check (status = 'open' and (user_id is null or user_id = auth.uid()));
drop policy if exists "admin reads reports" on public.site_reports;
create policy "admin reads reports" on public.site_reports for select using (public.is_admin());
drop policy if exists "admin updates reports" on public.site_reports;
create policy "admin updates reports" on public.site_reports for update using (public.is_admin()) with check (public.is_admin());
grant insert on public.site_reports to anon, authenticated;
grant select, update on public.site_reports to authenticated;

-- 3. Every email sent from the admin (approval emails and your own messages).
create table if not exists public.sent_emails (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  to_email text not null,
  user_id uuid references auth.users (id) on delete set null,
  app text not null default 'kurs' check (app in ('kurs', 'pruefung', 'spiele')),
  kind text not null default 'custom',
  subject text not null,
  body text,
  sent_by uuid default auth.uid()
);
create index if not exists sent_emails_to on public.sent_emails (to_email, created_at desc);
alter table public.sent_emails enable row level security;
drop policy if exists "admin emails" on public.sent_emails;
create policy "admin emails" on public.sent_emails for all using (public.is_admin()) with check (public.is_admin());
revoke all on public.sent_emails from anon;
grant select, insert on public.sent_emails to authenticated;

-- Check: should list the three tables.
select table_name from information_schema.tables where table_schema = 'public' and table_name in ('exam_access', 'site_reports', 'sent_emails');
