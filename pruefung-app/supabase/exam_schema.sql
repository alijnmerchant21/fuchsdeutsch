-- Fuchsdeutsch Prüfung (Exam Edition). Run once in the Fuchsdeutsch Supabase project:
-- SQL Editor > New query > paste all of this > Run.
-- Uses the same accounts as Fuchsdeutsch. Admin = public.profiles.is_admin (admin@fuchsdeutsch.de).
-- Every row belongs to one candidate (user_id). Candidates only see their own rows.

create table if not exists public.exam_candidates (
  user_id uuid primary key references auth.users (id) on delete cascade,
  email text not null,
  name text not null default '',
  exam_date date not null,
  study_days int[] not null default '{1,2,3,4,5}',
  minutes_per_day int not null default 30 check (minutes_per_day between 5 and 600),
  modules text[] not null default '{hoeren,lesen,schreiben}',
  exam_center text,
  first_language text,
  attempt_type text check (attempt_type in ('erst', 'wiederholung', 'offen')),
  -- Modules the admin unlocked (free beta now, paid later). Candidates cannot change this.
  unlocked text[] not null default '{}',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.exam_attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  kind text not null check (kind in ('diagnose', 'block', 'mock')),
  ref text not null,
  block_id uuid,
  answers jsonb not null default '{}'::jsonb,
  -- per answer: s = sicher (sure), g = geraten (guessed)
  conf jsonb not null default '{}'::jsonb,
  writing jsonb not null default '{}'::jsonb,
  scores jsonb not null default '{}'::jsonb,
  -- Schreiben correction, written by the admin only.
  feedback jsonb,
  started_at timestamptz not null default now(),
  finished_at timestamptz not null default now()
);
create index if not exists exam_attempts_user on public.exam_attempts (user_id, finished_at);

create table if not exists public.exam_blocks (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  seq int not null,
  starts_on date not null,
  ends_on date not null check (ends_on >= starts_on),
  content jsonb not null,
  created_at timestamptz not null default now(),
  unique (user_id, seq)
);

alter table public.exam_candidates enable row level security;
alter table public.exam_attempts enable row level security;
alter table public.exam_blocks enable row level security;

-- Admin check. Works with or without the Fuchsdeutsch profiles table.
create or replace function public.exam_is_admin() returns boolean
language plpgsql security definer stable set search_path = public as $$
begin
  return coalesce((select is_admin from public.profiles where id = auth.uid()), false);
exception when undefined_table then
  return false;
end $$;
revoke all on function public.exam_is_admin() from public, anon;
grant execute on function public.exam_is_admin() to authenticated;

-- Candidates: read and write own setup. Admin reads all.
drop policy if exists "exam cand read" on public.exam_candidates;
create policy "exam cand read" on public.exam_candidates for select using (user_id = auth.uid() or public.exam_is_admin());
drop policy if exists "exam cand insert" on public.exam_candidates;
create policy "exam cand insert" on public.exam_candidates for insert with check (user_id = auth.uid());
drop policy if exists "exam cand update" on public.exam_candidates;
create policy "exam cand update" on public.exam_candidates for update using (user_id = auth.uid()) with check (user_id = auth.uid());
revoke insert, update on public.exam_candidates from anon, authenticated;
grant select on public.exam_candidates to authenticated;
grant insert (user_id, email, name, exam_date, study_days, minutes_per_day, modules, exam_center, first_language, attempt_type) on public.exam_candidates to authenticated;
grant update (user_id, email, name, exam_date, study_days, minutes_per_day, modules, exam_center, first_language, attempt_type, updated_at) on public.exam_candidates to authenticated;

-- Attempts: candidates insert and read their own. Feedback only through exam_set_feedback.
drop policy if exists "exam att read" on public.exam_attempts;
create policy "exam att read" on public.exam_attempts for select using (user_id = auth.uid() or public.exam_is_admin());
drop policy if exists "exam att insert" on public.exam_attempts;
create policy "exam att insert" on public.exam_attempts for insert with check (user_id = auth.uid());
revoke insert, update, delete on public.exam_attempts from anon, authenticated;
grant select on public.exam_attempts to authenticated;
grant insert (user_id, kind, ref, block_id, answers, conf, writing, scores, started_at, finished_at) on public.exam_attempts to authenticated;

-- Blocks: candidates read their own. Only the admin creates, changes or deletes them.
drop policy if exists "exam block read" on public.exam_blocks;
create policy "exam block read" on public.exam_blocks for select using (user_id = auth.uid() or public.exam_is_admin());
drop policy if exists "exam block admin write" on public.exam_blocks;
create policy "exam block admin write" on public.exam_blocks for all using (public.exam_is_admin()) with check (public.exam_is_admin());
revoke all on public.exam_blocks from anon;
grant select, insert, update, delete on public.exam_blocks to authenticated;

create or replace function public.exam_set_feedback(p_attempt uuid, p_feedback jsonb) returns void
language plpgsql security definer set search_path = public as $$
begin
  if not public.exam_is_admin() then raise exception 'admin only'; end if;
  update public.exam_attempts set feedback = p_feedback where id = p_attempt;
end $$;
revoke all on function public.exam_set_feedback(uuid, jsonb) from public, anon;
grant execute on function public.exam_set_feedback(uuid, jsonb) to authenticated;

create or replace function public.exam_set_unlocked(p_user uuid, p_modules text[]) returns void
language plpgsql security definer set search_path = public as $$
begin
  if not public.exam_is_admin() then raise exception 'admin only'; end if;
  update public.exam_candidates set unlocked = p_modules, updated_at = now() where user_id = p_user;
end $$;
revoke all on function public.exam_set_unlocked(uuid, text[]) from public, anon;
grant execute on function public.exam_set_unlocked(uuid, text[]) to authenticated;

-- ---------- Pass guarantee ("Kostenlos weiter, bis du bestehst") ----------

alter table public.exam_candidates add column if not exists unlocked_at timestamptz;

create or replace function public.exam_set_unlocked(p_user uuid, p_modules text[]) returns void
language plpgsql security definer set search_path = public as $$
begin
  if not public.exam_is_admin() then raise exception 'admin only'; end if;
  update public.exam_candidates
     set unlocked = p_modules,
         unlocked_at = case when coalesce(array_length(p_modules, 1), 0) > 0 then coalesce(unlocked_at, now()) else unlocked_at end,
         updated_at = now()
   where user_id = p_user;
end $$;

create table if not exists public.exam_claims (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  exam_taken_on date not null,
  result_received_on date not null,
  results jsonb not null,
  next_exam_date date,
  file_path text not null,
  file_name text not null,
  status text not null default 'pending' check (status in ('pending', 'approved', 'rejected')),
  admin_note text,
  voucher_until date,
  voucher_modules text[],
  created_at timestamptz not null default now(),
  decided_at timestamptz
);
alter table public.exam_claims enable row level security;
drop policy if exists "exam claim read" on public.exam_claims;
create policy "exam claim read" on public.exam_claims for select using (user_id = auth.uid() or public.exam_is_admin());
drop policy if exists "exam claim insert" on public.exam_claims;
create policy "exam claim insert" on public.exam_claims for insert with check (user_id = auth.uid());
revoke insert, update, delete on public.exam_claims from anon, authenticated;
grant select on public.exam_claims to authenticated;
grant insert (user_id, exam_taken_on, result_received_on, results, next_exam_date, file_path, file_name) on public.exam_claims to authenticated;

-- Admin decision. Approving extends the plan: failed modules unlocked, new exam date set.
create or replace function public.exam_decide_claim(p_claim uuid, p_status text, p_note text, p_until date, p_modules text[], p_next_exam date)
returns void language plpgsql security definer set search_path = public as $$
declare uid uuid;
begin
  if not public.exam_is_admin() then raise exception 'admin only'; end if;
  update public.exam_claims set status = p_status, admin_note = p_note, voucher_until = p_until, voucher_modules = p_modules, decided_at = now()
   where id = p_claim returning user_id into uid;
  if p_status = 'approved' then
    update public.exam_candidates
       set unlocked = (select array(select distinct unnest(unlocked || p_modules))),
           exam_date = coalesce(p_next_exam, exam_date),
           updated_at = now()
     where user_id = uid;
  end if;
end $$;
revoke all on function public.exam_decide_claim(uuid, text, text, date, text[], date) from public, anon;
grant execute on function public.exam_decide_claim(uuid, text, text, date, text[], date) to authenticated;

-- Private bucket for result letters. Files live under <user id>/...
insert into storage.buckets (id, name, public) values ('exam-results', 'exam-results', false) on conflict (id) do nothing;
drop policy if exists "exam results upload own" on storage.objects;
create policy "exam results upload own" on storage.objects for insert to authenticated
  with check (bucket_id = 'exam-results' and (storage.foldername(name))[1] = auth.uid()::text);
drop policy if exists "exam results read own or admin" on storage.objects;
create policy "exam results read own or admin" on storage.objects for select to authenticated
  using (bucket_id = 'exam-results' and ((storage.foldername(name))[1] = auth.uid()::text or public.exam_is_admin()));
