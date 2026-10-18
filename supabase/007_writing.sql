-- Fuchsdeutsch: free writing ("Schreiben").
-- Run once in Supabase: SQL Editor > New query > paste all of this > Run.
-- Learners write a text in a chapter and submit it. It is stored here with status 'submitted'.
-- On the Admin page you export the open texts for Claude, paste Claude's marking back,
-- and each learner sees points, corrections and tips under their text (status 'reviewed').

create table if not exists public.writing_submissions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null default auth.uid() references auth.users on delete cascade,
  email text,
  name text check (name is null or length(name) <= 80),
  course text not null check (length(course) <= 20),
  chapter text not null check (length(chapter) <= 40),
  block text not null check (length(block) <= 60),
  level text check (level is null or length(level) <= 10),
  prompt text check (prompt is null or length(prompt) <= 3000),
  body text not null check (length(body) between 1 and 6000),
  words integer,
  status text not null default 'submitted' check (status in ('submitted', 'reviewed')),
  score integer,
  max_score integer,
  -- Claude's marking: { summary, summaryEn, criteria: [{ name, points, max, note }], errors: [{ wrong, right, why }], corrected }
  feedback jsonb check (feedback is null or length(feedback::text) <= 20000),
  created_at timestamptz not null default now(),
  reviewed_at timestamptz
);

create index if not exists writing_by_user on public.writing_submissions (user_id, chapter, block, created_at desc);
create index if not exists writing_open on public.writing_submissions (status, created_at);

alter table public.writing_submissions enable row level security;

-- Learners hand in their own texts (only as 'submitted', without marking) and read their own texts.
drop policy if exists "learner submits writing" on public.writing_submissions;
create policy "learner submits writing" on public.writing_submissions for insert to authenticated
  with check (user_id = auth.uid() and status = 'submitted' and feedback is null and score is null);
drop policy if exists "learner reads own writing" on public.writing_submissions;
create policy "learner reads own writing" on public.writing_submissions for select to authenticated
  using (user_id = auth.uid() or public.is_admin());

-- Only admins mark texts.
drop policy if exists "admin marks writing" on public.writing_submissions;
create policy "admin marks writing" on public.writing_submissions for update to authenticated
  using (public.is_admin()) with check (public.is_admin());

revoke all on public.writing_submissions from anon;
grant select, insert on public.writing_submissions to authenticated;
grant update (status, score, max_score, feedback, reviewed_at) on public.writing_submissions to authenticated;
