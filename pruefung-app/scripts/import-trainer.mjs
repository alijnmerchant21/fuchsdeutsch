// Imports the own (original) practice sets from the B1-Trainer into content/bank.json
// and builds the free diagnostic (content/diagnose.json).
// Usage: node scripts/import-trainer.mjs "<path to B1-Trainer>"
// Only sets marked as original are imported. Book (Cornelsen) sets are skipped on purpose.
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const root = process.argv[2];
if (!root) { console.error('Pass the B1-Trainer folder.'); process.exit(1); }
const files = [
  ['content/hoeren.js', 'hoeren'],
  ['content/woche1.js', 'hoeren'],
  ['_Archiv/Lesen-bis-15-10-2026/content/lesen.js', 'lesen'],
];
const window = { HR_SETS: {}, LS_SETS: {} };
const ctx = vm.createContext({ window, Object });
for (const [f] of files) vm.runInContext(fs.readFileSync(path.join(root, f), 'utf8'), ctx);

const audio = (a) => (a ? 'audio/own/' + path.basename(a) : undefined);
const bank = {};
const tips = { hoeren: window.HR_TEILE, lesen: window.LS_TEILE, traps: { hoeren: window.HR_TRAPS, lesen: window.LS_TRAPS } };

for (const [id, s] of Object.entries(window.HR_SETS)) {
  if (s.book) continue;
  bank[id] = {
    id, module: 'hoeren', teil: s.teil, instr: s.instr, source: 'own',
    ...(s.who ? { who: s.who } : {}), speakers: s.speakers,
    groups: s.groups.map((g) => ({
      title: g.title, audio: audio(g.audio), plays: g.plays, script: g.script,
      items: g.items.map((i) => ({ n: i.n, type: i.type, q: i.q, ...(i.opts ? { opts: i.opts } : {}), a: i.a, trap: i.trap, ev: i.ev, why: i.why })),
    })),
  };
}

for (const [id, s] of Object.entries(window.LS_SETS)) {
  const base = { id: 'l-' + id, module: 'lesen', teil: s.teil, instr: s.instr, source: 'own', ...(s.topic ? { topic: s.topic } : {}) };
  if (s.teil === 3) {
    bank[base.id] = { ...base, ads: s.ads, groups: [{ items: s.items.map((i) => ({ n: i.n, type: 'ad', q: i.q, a: i.a, trap: i.trap, why: i.why })) }] };
    continue;
  }
  const type = s.teil === 1 ? 'rf' : s.teil === 4 ? 'jn' : 'abc';
  bank[base.id] = {
    ...base,
    groups: s.groups.map((g) => ({
      title: g.title, body: g.body,
      items: g.items.map((i) => ({ n: i.n, type, q: i.q, ...(i.opts ? { opts: i.opts } : {}), a: i.a, trap: i.trap, ev: i.ev, why: i.why })),
    })),
  };
}

// Own Schreiben tasks (Goethe B1 format).
const write = (id, aufgabe, situation, points, words, max) => ({
  id, module: 'schreiben', teil: aufgabe, source: 'own', groups: [],
  instr: aufgabe === 3
    ? 'Schreiben Sie eine kurze Nachricht (circa 40 Wörter). Achten Sie auf die Anrede und den Gruß.'
    : aufgabe === 2
      ? 'Schreiben Sie Ihre Meinung (circa 80 Wörter).'
      : 'Schreiben Sie eine E-Mail (circa 80 Wörter). Behandeln Sie alle drei Punkte.',
  tasks: [{ id, aufgabe, situation, points, words, max }],
});
const writing = [
  write('s3-kursleiterin', 3,
    'Ihre Kursleiterin, Frau Weber, hat Sie für Freitag zu einem Gespräch über Ihre Prüfung eingeladen. Sie können am Freitag nicht kommen.',
    ['Entschuldigen Sie sich höflich.', 'Nennen Sie den Grund.', 'Schlagen Sie einen neuen Termin vor.'], 40, 20),
  write('s3-vermieter', 3,
    'Ihr Vermieter, Herr Brandt, möchte am Montag um 9 Uhr die Heizung in Ihrer Wohnung prüfen lassen. Sie sind um diese Zeit bei der Arbeit.',
    ['Bedanken Sie sich für die Information.', 'Erklären Sie, warum es nicht geht.', 'Machen Sie einen anderen Vorschlag.'], 40, 20),
  write('s1-umzug', 1,
    'Sie sind vor zwei Wochen in eine neue Stadt umgezogen. Ein Freund, Daniel, hat Ihnen beim Umzug geholfen.',
    ['Beschreiben Sie: Wie ist die neue Wohnung?', 'Begründen Sie: Was gefällt Ihnen an der Stadt, was nicht?', 'Machen Sie einen Vorschlag für ein Treffen.'], 80, 40),
  write('s1-geburtstag', 1,
    'Ihre Freundin Mia hat Sie zu ihrem Geburtstag eingeladen. Sie können leider nicht kommen.',
    ['Bedanken Sie sich für die Einladung.', 'Erklären Sie, warum Sie nicht kommen können.', 'Schlagen Sie vor, wie Sie zusammen feiern können.'], 80, 40),
  write('s2-homeoffice', 2,
    'Sie haben im Radio eine Sendung zum Thema „Homeoffice: Besser zu Hause arbeiten?“ gehört. Im Online-Gästebuch der Sendung lesen Sie: „Zu Hause arbeite ich viel ruhiger und spare jeden Tag eine Stunde Fahrzeit.“ (Jonas)',
    ['Schreiben Sie Ihre Meinung zum Thema.'], 80, 40),
  write('s2-auto', 2,
    'Sie haben in einer Zeitschrift einen Artikel zum Thema „Autofreie Innenstädte“ gelesen. Im Online-Forum schreibt Petra: „Ohne Autos ist die Stadt leiser und schöner. Ich fahre nur noch mit dem Rad.“',
    ['Schreiben Sie Ihre Meinung zum Thema.'], 80, 40),
];
for (const w of writing) bank[w.id] = w;

// ---------- Free diagnostic: about 40 minutes, every Teil touched ----------
const pick = (src, newId, pickGroups, pickItems) => {
  const s = JSON.parse(JSON.stringify(bank[src]));
  s.id = newId;
  if (pickGroups) s.groups = pickGroups.map((i) => s.groups[i]);
  if (pickItems) s.groups.forEach((g) => { g.items = g.items.filter((i) => pickItems.includes(i.n)); });
  s.groups = s.groups.filter((g) => g.items.length);
  return s;
};
const diagSets = [
  pick('hdA1', 'diag-h1', [0, 1]),
  pick('hdA2', 'diag-h2'),
  pick('hdB3', 'diag-h3'),
  pick('hdB4', 'diag-h4'),
  pick('l-dA1', 'diag-l1', null, [1, 3, 5, 6]),
  pick('l-dA2', 'diag-l2', [0]),
  pick('l-dB3', 'diag-l3', null, [13, 15, 16, 19]),
  pick('l-dB4', 'diag-l4', [0, 1, 2, 3]),
  pick('l-dB5', 'diag-l5', null, [27, 28]),
  { ...bank['s3-kursleiterin'], id: 'diag-s3' },
];
// Renumber items per module so the candidate sees 1, 2, 3 …
for (const mod of ['hoeren', 'lesen']) {
  let n = 1;
  for (const s of diagSets.filter((x) => x.module === mod)) for (const g of s.groups) for (const i of g.items) i.n = n++;
}
// The instructions name the original item numbers; make them generic.
for (const s of diagSets) s.instr = s.instr.replace(/die Aufgaben \d+ bis \d+/, 'die Aufgaben').replace(/Situationen \d+ bis \d+/, 'Situationen').replace(/Texte \d+ bis \d+/, 'Texte').replace(/Aufgaben \d+ bis \d+/, 'Aufgaben');
diagSets[0].instr = 'Sie hören zwei kurze Texte. Sie hören jeden Text zweimal. Zu jedem Text lösen Sie zwei Aufgaben. Wählen Sie bei jeder Aufgabe die richtige Lösung.';
diagSets[5].instr = 'Lesen Sie den Text und die Aufgaben. Wählen Sie die richtige Lösung a, b oder c.';
for (const s of diagSets) bank[s.id] = s;

const diagnose = {
  id: 'diagnose',
  title: 'Mock Test 1 · Diagnose',
  en: 'Free diagnostic, about 40 minutes: Hören, Lesen, Schreiben',
  sections: [
    { module: 'hoeren', title: 'Hören', minutes: 20, sets: ['diag-h1', 'diag-h2', 'diag-h3', 'diag-h4'] },
    { module: 'lesen', title: 'Lesen', minutes: 15, sets: ['diag-l1', 'diag-l2', 'diag-l3', 'diag-l4', 'diag-l5'] },
    { module: 'schreiben', title: 'Schreiben', minutes: 8, sets: ['diag-s3'] },
  ],
};

fs.writeFileSync('content/bank.json', JSON.stringify(bank, null, 1));
fs.writeFileSync('content/diagnose.json', JSON.stringify(diagnose, null, 1));
fs.writeFileSync('content/tips.json', JSON.stringify(tips, null, 1));
console.log('bank sets:', Object.keys(bank).length, Object.keys(bank).join(' '));
