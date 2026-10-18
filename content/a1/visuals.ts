// Visual grammar for A1: a small diagram above the grammar table. Drawn in code, so text is always sharp.
// Key: "<chapter id>/<grammar block id>".

export type Visual =
  | { kind: 'positions'; title: string; titleEn: string; rows: { label: string; labelEn: string; parts: string[]; verb: number[] }[] }
  | { kind: 'articles'; examples: [string, string, string, string]; caseLabel?: string; title?: string; titleEn?: string }
  | { kind: 'clock' }
  | { kind: 'places' }
  | { kind: 'wowohin' }
  | { kind: 'seasons' }
  | { kind: 'compass' }
  | { kind: 'routes' };

export const v2 = (label: string, labelEn: string, parts: string[], verb: number[] = [1]) => ({ label, labelEn, parts, verb });

export const VISUALS: Record<string, Visual> = {
  'a1-k1/g-2': {
    kind: 'positions', title: 'Das Verb steht auf Position 2', titleEn: 'The verb is in position 2',
    rows: [v2('Aussage', 'Statement', ['Ich', 'komme', 'aus Japan.']), v2('Mit Zeit vorne', 'Time first', ['Heute', 'komme', 'ich.']), v2('W-Frage', 'W-question', ['Woher', 'kommst', 'du?'])],
  },
  'a1-k1/t2-gram': {
    kind: 'positions', title: 'W-Fragen: W-Wort, dann Verb', titleEn: 'Question word, then verb',
    rows: [v2('Wie?', 'How?', ['Wie', 'heißt', 'du?']), v2('Woher?', 'Where from?', ['Woher', 'kommst', 'du?']), v2('Wo?', 'Where?', ['Wo', 'wohnst', 'du?'])],
  },
  'a1-k2/t1-gram': {
    kind: 'positions', title: 'Ja/Nein-Frage: das Verb kommt zuerst', titleEn: 'Yes/no question: the verb comes first',
    rows: [v2('Aussage', 'Statement', ['Du', 'spielst', 'gern Fußball.']), v2('Frage', 'Question', ['Spielst', 'du', 'gern Fußball?'], [0])],
  },
  'a1-k5/g-1': {
    kind: 'positions', title: 'Die Satzklammer: zwei Verbteile', titleEn: 'The sentence bracket: two verb parts',
    rows: [v2('Modalverb', 'Modal verb', ['Ich', 'kann', 'heute nicht', 'kommen.'], [1, 3]), v2('Modalverb', 'Modal verb', ['Wir', 'müssen', 'die Küche', 'putzen.'], [1, 3])],
  },
  'a1-k5/t3-gram': {
    kind: 'positions', title: 'Modalverb auf 2, Infinitiv am Ende', titleEn: 'Modal on 2, infinitive at the end',
    rows: [v2('können', 'can', ['Felix', 'kann', 'gut', 'kochen.'], [1, 3]), v2('wollen', 'want', ['Ich', 'will', 'Deutsch', 'lernen.'], [1, 3])],
  },
  'a1-k6/t2-gram': {
    kind: 'positions', title: 'Trennbare Verben: der Anfang geht ans Ende', titleEn: 'Separable verbs: the prefix goes to the end',
    rows: [v2('anfangen', 'to start', ['Die Party', 'fängt', 'um 20 Uhr', 'an.'], [1, 3]), v2('einladen', 'to invite', ['Kenji', 'lädt', 'Amara', 'ein.'], [1, 3])],
  },
  'a1-k6/g-1': {
    kind: 'positions', title: 'Trennbare Verben im Satz', titleEn: 'Separable verbs in a sentence',
    rows: [v2('einkaufen', 'to shop', ['Ich', 'kaufe', 'heute', 'ein.'], [1, 3]), v2('aufstehen', 'to get up', ['Amara', 'steht', 'um fünf Uhr', 'auf.'], [1, 3])],
  },
  'a1-k10/g-1': {
    kind: 'positions', title: 'Perfekt: haben oder sein + Partizip am Ende', titleEn: 'Perfect: haben or sein + participle at the end',
    rows: [v2('mit haben', 'with haben', ['Ich', 'habe', 'gestern Pizza', 'gegessen.'], [1, 3]), v2('mit sein', 'with sein', ['Wir', 'sind', 'nach Dresden', 'gefahren.'], [1, 3])],
  },
  'a1-k2/g-art': { kind: 'articles', examples: ['der Tisch', 'das Handy', 'die Lampe', 'die Tische'] },
  'a1-k3/g-1': { kind: 'articles', examples: ['der Park', 'das Hotel', 'die Kirche', 'die Parks'] },
  'a1-k4/g-1': { kind: 'articles', examples: ['den Apfel', 'das Brot', 'die Milch', 'die Eier'], caseLabel: 'Akkusativ' },
  'a1-k7/t2-gram': { kind: 'articles', examples: ['dem Bus', 'dem Auto', 'der Bahn', 'den Kollegen'], caseLabel: 'Dativ' },
  'a1-k5/t1-gram': { kind: 'clock' },
  'a1-k9/t3-gram': { kind: 'places' },
  'a1-k9/t3-wohin': { kind: 'wowohin' },
  'a1-k3/t3-gram': { kind: 'seasons' },
  'a1-k12/t1-himmel': { kind: 'compass' },
};
