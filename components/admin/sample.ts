/* Sample people for a local preview of the control center (/admin?sample in demo mode). Never used in production. */
import { courses } from '@/content/course';
import { sectionKey } from '@/lib/unlock';
import { dayKey, type AdminData, type ProfileRow } from './data';

const ago = (d: number) => { const x = new Date(); x.setDate(x.getDate() - d); return x; };
const iso = (d: number) => ago(d).toISOString();

export function sampleData(): AdminData {
  const people = [
    { name: 'Manisha', email: 'manisha@example.com', course: 'b2-1', done: 9, days: 12, acc: 0.82 },
    { name: 'Jonas', email: 'jonas@example.com', course: 'a1', done: 26, days: 20, acc: 0.91 },
    { name: 'Priya', email: 'priya@example.com', course: 'a2', done: 14, days: 9, acc: 0.74 },
    { name: 'Elif', email: 'elif@example.com', course: 'b1', done: 4, days: 3, acc: 0.68 },
  ];
  const profiles: ProfileRow[] = people.map((p, i) => {
    const course = courses.find((c) => c.id === p.course) || courses[0];
    const keys = course.chapters.flatMap((ch) => ch.sections.map((s) => sectionKey(ch.id, s.id))).slice(0, p.done);
    const done = Object.fromEntries(keys.map((k, j) => [k, iso(p.days - Math.floor((j / keys.length) * p.days))]));
    const time = Object.fromEntries(keys.map((k) => [k, 500 + Math.round(Math.random() * 600)]));
    const timeDays = Object.fromEntries(Array.from({ length: 30 }, (_, d) => [dayKey(ago(d)), d < p.days && Math.random() > 0.3 ? 600 + Math.round(Math.random() * 1800) : 0]));
    const scores = Object.fromEntries(keys.map((k) => [k, Object.fromEntries(Array.from({ length: 5 }, (_, b) => [`b${b}`, Math.random() < p.acc ? 1 : 0])) ]));
    const exams = Object.fromEntries(course.chapters.slice(0, Math.floor(p.done / 8)).map((ch, j) => [ch.id, { best: 55 + ((j * 13 + i * 7) % 40), passed: true, attempts: 1 }]));
    return {
      id: `u${i}`, email: p.email, name: p.name, is_admin: false, xp: p.done * 45, streak: Math.min(p.days, 6), last_active: dayKey(ago(i)), created_at: iso(p.days + 2), updated_at: iso(i),
      progress: { course: p.course, done, time, timeDays, scores, exams, profile: { name: p.name, gender: 'none', reasons: ['job', 'exam'], nativeLanguage: ['English', 'German', 'Hindi', 'Turkish'][i], goal: 50, board: true, uiLang: 'en' } },
    };
  });
  return {
    beta: [
      ...people.map((p, i) => ({ email: p.email, profile: { name: p.name, course: p.course, reasons: ['job', 'exam'], nativeLanguage: 'English', uiLang: 'en' as const }, approved: true, created_at: iso(p.days + 3) })),
      { email: 'new.person@example.com', profile: { name: 'Sam', course: 'a1', reasons: ['travel'], nativeLanguage: 'Spanish', uiLang: 'en' as const }, approved: false, created_at: iso(0) },
      { email: 'lena@example.com', profile: null, approved: false, created_at: iso(1) },
    ],
    profiles,
    cands: [
      { user_id: 'u0', email: 'manisha@example.com', name: 'Manisha', level: 'b2', exam_date: dayKey(ago(-40)), study_days: [1, 2, 3, 4, 5], minutes_per_day: 45, modules: ['hoeren', 'lesen', 'schreiben'], first_language: 'English', attempt_type: 'erst', unlocked: [], created_at: iso(5) },
      { user_id: 'p1', email: 'omar@example.com', name: 'Omar', level: 'b1', exam_date: dayKey(ago(-21)), study_days: [1, 3, 5], minutes_per_day: 30, modules: ['hoeren', 'lesen'], first_language: 'Arabic', attempt_type: 'wiederholung', unlocked: [], created_at: iso(0) },
    ],
    access: [{ user_id: 'u0', approved_at: iso(4) }],
    attempts: [
      { id: 'a1', user_id: 'u0', kind: 'diagnose', ref: 'diagnose-b2', scores: { 'hoeren-1': { right: 7, total: 10 }, 'lesen-1': { right: 5, total: 9 }, 'schreiben-1': { right: 12, total: 20 } }, writing: { 'b2-schreiben-1': 'Liebe Frau Weber,\n\nvielen Dank für Ihre Einladung. Leider kann ich am Samstag nicht kommen, weil meine Schwester heiratet. Könnten wir uns nächste Woche treffen?\n\nViele Grüße\nManisha' }, feedback: null, started_at: iso(3), finished_at: new Date(ago(3).getTime() + 41 * 60000).toISOString() },
    ],
    writing: [],
    reports: [
      { id: 'r1', created_at: iso(0), app: 'kurs', page: '/kurs/a1-k2/teil-1', subject: 'Audio does not play', body: 'In Teil 1 the second audio stops after 3 seconds on my iPhone.', email: 'jonas@example.com', user_id: 'u1', user_agent: 'Safari', status: 'open' },
      { id: 'r2', created_at: iso(2), app: 'pruefung', page: '/pruefung/diagnose', subject: 'Typo in question 4', body: '"Wohnug" should be "Wohnung".', email: null, user_id: null, user_agent: 'Chrome', status: 'done' },
    ],
    emails: [{ id: 'e1', created_at: iso(4), to_email: 'manisha@example.com', user_id: 'u0', app: 'pruefung', kind: 'pruefung-approved', subject: 'Your free Goethe mock test is ready', body: 'Hi Manisha, …' }],
    missing: [],
  };
}
