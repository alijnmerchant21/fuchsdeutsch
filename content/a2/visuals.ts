// Visual grammar for A2. Key: "<chapter id>/<grammar block id>". Kinds are drawn in components/GrammarVisual.tsx.
import { v2, type Visual } from '../a1/visuals';

const end = (label: string, labelEn: string, parts: string[]) => v2(label, labelEn, parts, [parts.length - 1]);

export const VISUALS_A2: Record<string, Visual> = {
  'a2-k1/t3-gram': {
    kind: 'positions', title: 'weil: das Verb geht ans Ende', titleEn: 'weil: the verb goes to the end',
    rows: [v2('Hauptsatz', 'Main clause', ['Ich', 'bleibe', 'zu Hause.']), end('weil-Satz', 'weil clause', ['…, weil', 'ich', 'krank', 'bin.']), end('mit Modalverb', 'with a modal', ['…, weil', 'ich', 'arbeiten', 'muss.'])],
  },
  'a2-k1/g-1': {
    kind: 'positions', title: 'Hauptsatz und Nebensatz', titleEn: 'Main clause and subordinate clause',
    rows: [v2('Hauptsatz', 'Main clause', ['Kenji', 'kocht', 'heute.']), end('Nebensatz', 'Subordinate clause', ['…, weil', 'Kenji', 'heute', 'kocht.']), end('Perfekt', 'Perfect', ['…, weil', 'er', 'viel gekocht', 'hat.'])],
  },
  'a2-k3/t2-gram': {
    kind: 'positions', title: 'dass: Meinung, dann Verb am Ende', titleEn: 'dass: opinion, then the verb at the end',
    rows: [end('Meinung', 'Opinion', ['Ich finde,', 'dass', 'das Handy', 'wichtig', 'ist.']), end('mit Modalverb', 'with a modal', ['Ich glaube,', 'dass', 'man Pausen', 'machen', 'sollte.'])],
  },
  'a2-k3/g-1': {
    kind: 'positions', title: 'weil und dass: gleiche Regel', titleEn: 'weil and dass: same rule',
    rows: [end('weil', 'because', ['…, weil', 'ich', 'kein Handy', 'habe.']), end('dass', 'that', ['…, dass', 'du', 'immer online', 'bist.'])],
  },
  'a2-k4/t1-gram': {
    kind: 'positions', title: 'wenn: Bedingung, Verb am Ende', titleEn: 'wenn: condition, verb at the end',
    rows: [end('wenn hinten', 'wenn second', ['Ich schlafe,', 'wenn', 'ich', 'müde', 'bin.']), v2('wenn vorne', 'wenn first', ['Wenn ich müde bin,', 'schlafe', 'ich.'])],
  },
  'a2-k4/g-1': {
    kind: 'positions', title: 'Nebensatz zuerst: Verb, Komma, Verb', titleEn: 'Clause first: verb, comma, verb',
    rows: [v2('wenn', 'if/when', ['Wenn es regnet,', 'bleibe', 'ich zu Hause.']), v2('weil', 'because', ['Weil ich krank bin,', 'komme', 'ich nicht.'])],
  },
  'a2-k5/t1-gram': { kind: 'articles', examples: ['der neue Job', 'das neue Handy', 'die neue Jacke', 'die neuen Schuhe'], title: 'Nach der, das, die: meistens -e, im Plural -en', titleEn: 'After der, das, die: mostly -e, plural -en' },
  'a2-k5/g-1': { kind: 'articles', examples: ['den neuen Job', 'das neue Handy', 'die neue Jacke', 'die neuen Schuhe'], title: 'Akkusativ: nur maskulin ändert sich', titleEn: 'Accusative: only masculine changes' },
  'a2-k6/t2-gram': { kind: 'articles', examples: ['ein neuer Job', 'ein neues Handy', 'eine neue Jacke', 'keine neuen Schuhe'], title: 'Nach ein, kein, mein: die Endung zeigt das Genus', titleEn: 'After ein, kein, mein: the ending shows the gender' },
  'a2-k7/t1-gram': {
    kind: 'positions', title: 'Indirekte Frage: höflich, Verb am Ende', titleEn: 'Indirect question: polite, verb at the end',
    rows: [v2('direkt', 'direct', ['Wann', 'kommt', 'der Zug?']), end('indirekt', 'indirect', ['Wissen Sie,', 'wann', 'der Zug', 'kommt?']), end('ob', 'whether', ['Ich frage,', 'ob', 'der Zug', 'pünktlich', 'ist.'])],
  },
  'a2-k7/t2-gram': { kind: 'routes' },
  'a2-k9/t2-gram': {
    kind: 'positions', title: 'deshalb und trotzdem: Position 1, dann Verb', titleEn: 'deshalb and trotzdem: position 1, then the verb',
    rows: [v2('deshalb', 'that is why', ['Es regnet,', 'deshalb', 'bleibe', 'ich zu Hause.'], [2]), v2('trotzdem', 'anyway', ['Es regnet,', 'trotzdem', 'jogge', 'ich.'], [2])],
  },
  'a2-k10/t2-gram': { kind: 'wowohin' },
  'a2-k12/t2-gram': {
    kind: 'positions', title: 'Relativsatz: Pronomen vorne, Verb am Ende', titleEn: 'Relative clause: pronoun first, verb at the end',
    rows: [end('Nominativ', 'subject', ['der Sänger,', 'der', 'sehr beliebt', 'ist']), end('Akkusativ', 'object', ['der Film,', 'den', 'wir gesehen', 'haben'])],
  },
  'a2-k12/g-1': {
    kind: 'positions', title: 'So funktionieren Relativsätze', titleEn: 'How relative clauses work',
    rows: [end('maskulin', 'masculine', ['Der Mann,', 'der', 'neben uns', 'wohnt,']), end('feminin', 'feminine', ['Die Frau,', 'die', 'ich', 'kenne,']), end('neutral', 'neuter', ['Das Bild,', 'das', 'Lina', 'malt,'])],
  },
};
