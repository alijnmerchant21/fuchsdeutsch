import type { Metadata } from 'next';
import { LEGAL } from '@/lib/legal';

export const metadata: Metadata = { title: 'Privacy · Fuchsdeutsch' };

export default function Privacy() {
  const mail = <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a>;
  return (
    <main className="v3-page v3-legal">
      <h1>Privacy</h1>
      <p className="muted">Last updated: {LEGAL.updated}</p>
      <p className="v3-legal-en">In short: we only store what the course needs to work. No ads, no tracking, no analytics. You can ask us to see or delete your data at any time: {mail}.</p>

      <h2>What we collect</h2>
      <ul>
        <li><b>Beta sign-up:</b> your email and your answers to the welcome questions (first name, which course, why you learn German, daily goal, first language, how to address you, leaderboard choice). We use this only to give you a beta spot and to contact you about it.</li>
        <li><b>Your account:</b> email, name, login data and your learning progress (finished sections, exam results, points, streak).</li>
        <li><b>Technical data:</b> when a page loads, our host processes your IP address, time, page and browser type to deliver the site and protect it from abuse.</li>
      </ul>

      <h2>Who processes it</h2>
      <ul>
        <li><b>Vercel</b> hosts the website.</li>
        <li><b>Supabase</b> stores accounts, progress and beta sign-ups, and sends login links by email.</li>
        <li><b>Google</b>, only if you choose “Continue with Google”. Google then shares your name and email with us and knows you signed in to Fuchsdeutsch.</li>
      </ul>
      <p>Fonts and audio are served from our own site. We do not sell or share your data with anyone else.</p>

      <h2>Leaderboard</h2>
      <p>Other signed-in learners see your first name, points and streak on the leaderboard. You can switch this off in your profile at any time.</p>

      <h2>Storage in your browser</h2>
      <p>We keep your login, a copy of your progress and your settings in your browser’s local storage, so the site works and is fast. We do not use cookies for ads or analytics.</p>

      <h2>How long we keep it</h2>
      <p>Beta sign-ups are deleted when the beta ends or when you ask. Account data stays while you have an account. Write to us and we delete it.</p>

      <h2>Your rights</h2>
      <p>You can ask to see, correct, export or delete your data, and you can withdraw your consent for the beta sign-up at any time. Email {mail}.</p>

      <h2>Changes</h2>
      <p>If we add new features, for example AI feedback or payments, we will update this page.</p>
    </main>
  );
}
