-- Fuchsdeutsch Prüfung, update 2: levels A1 to B2, audio for practice blocks, email log.
-- Run once after exam_schema.sql: SQL Editor > New query > paste all of this > Run. Safe to run again.

-- 1. Exam level per candidate (a1, a2, b1, b2). Existing candidates stay on B1.
alter table public.exam_candidates add column if not exists level text not null default 'b1';
alter table public.exam_candidates drop constraint if exists exam_candidates_level_check;
alter table public.exam_candidates add constraint exam_candidates_level_check check (level in ('a1', 'a2', 'b1', 'b2'));
grant insert (user_id, email, name, exam_date, study_days, minutes_per_day, modules, exam_center, first_language, attempt_type, level) on public.exam_candidates to authenticated;
grant update (user_id, email, name, exam_date, study_days, minutes_per_day, modules, exam_center, first_language, attempt_type, level, updated_at) on public.exam_candidates to authenticated;

-- 2. Audio for new Hören texts in practice blocks. Public read (the MP3 links sit in the block),
--    only the admin uploads. Files live under <candidate id>/<block id>/...
insert into storage.buckets (id, name, public) values ('exam-audio', 'exam-audio', true) on conflict (id) do update set public = true;
drop policy if exists "exam audio admin upload" on storage.objects;
create policy "exam audio admin upload" on storage.objects for insert to authenticated
  with check (bucket_id = 'exam-audio' and public.exam_is_admin());
drop policy if exists "exam audio admin update" on storage.objects;
create policy "exam audio admin update" on storage.objects for update to authenticated
  using (bucket_id = 'exam-audio' and public.exam_is_admin());
drop policy if exists "exam audio admin delete" on storage.objects;
create policy "exam audio admin delete" on storage.objects for delete to authenticated
  using (bucket_id = 'exam-audio' and public.exam_is_admin());

-- 3. Log of emails the admin sent to candidates (sent by hand with the Resend button).
create table if not exists public.exam_emails (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  kind text not null,
  subject text not null,
  sent_by uuid references auth.users (id) on delete set null,
  resend_id text,
  created_at timestamptz not null default now()
);
alter table public.exam_emails enable row level security;
drop policy if exists "exam emails admin" on public.exam_emails;
create policy "exam emails admin" on public.exam_emails for all using (public.exam_is_admin()) with check (public.exam_is_admin());
revoke all on public.exam_emails from anon;
grant select, insert on public.exam_emails to authenticated;
