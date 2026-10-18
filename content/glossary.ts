import type { GlossaryEntry } from './types';
import { glossaryA1 } from './a1/glossary';
import { glossaryA2 } from './a2/glossary';
import { glossaryB1 } from './b1/glossary';
import { glossary2 } from './kapitel2';
import { glossary3 } from './kapitel3';
import { glossary4 } from './kapitel4';
import { glossary5 } from './kapitel5';
import { glossary6 } from './kapitel6';
import { glossary7 } from './kapitel7';
import { glossary8 } from './kapitel8';


// Every [[Wort]] in a text looks up its entry here.
// Easy mode shows `de` + `en`. Advanced mode shows `de` only.
const glossary1: Record<string, GlossaryEntry> = {
  Nachtmensch: { de: 'Eine Person, die abends und nachts wach und aktiv ist.', en: 'night owl', ex: 'Ich bin ein Nachtmensch, vor zehn Uhr kann ich nicht denken.' },
  Frühaufsteher: { de: 'Eine Person, die gern sehr früh aufsteht.', en: 'early riser', ex: 'Frühaufsteher sind morgens sofort fit.' },
  Eule: { de: 'Ein Vogel, der nachts wach ist. Auch: ein Mensch, der spät ins Bett geht.', en: 'owl; a night person' },
  Lerche: { de: 'Ein Vogel, der früh am Morgen singt. Auch: ein Mensch, der früh aufsteht.', en: 'lark; a morning person' },
  spontan: { de: 'Ohne Plan, aus dem Moment heraus.', en: 'spontaneous', ex: 'Wir sind spontan ans Meer gefahren.' },
  pünktlich: { de: 'Genau zur richtigen Zeit, nicht zu spät.', en: 'on time, punctual' },
  Backstube: { de: 'Der Raum in einer Bäckerei, in dem man Brot und Kuchen backt.', en: 'the baking room of a bakery' },
  Feierabend: { de: 'Die freie Zeit nach der Arbeit. Die Arbeit ist für heute zu Ende.', en: 'the end of the working day', ex: 'Um 17 Uhr habe ich Feierabend.' },
  erreichbar: { de: 'Andere Menschen können mich anrufen oder mir schreiben, und ich antworte.', en: 'reachable, available', ex: 'Im Urlaub bin ich nicht erreichbar.' },
  Haushalt: { de: 'Alle Arbeiten zu Hause: kochen, putzen, waschen.', en: 'household, housework' },
  erledigen: { de: 'Eine Aufgabe machen, bis sie fertig ist.', en: 'to get something done', ex: 'Ich muss noch zwei Mails erledigen.' },
  hetzen: { de: 'Sehr schnell gehen oder arbeiten, weil man keine Zeit hat.', en: 'to rush', ex: 'Ich hetze von Termin zu Termin.' },
  gleichzeitig: { de: 'Zur selben Zeit.', en: 'at the same time, simultaneously' },
  Wahnsinn: { de: 'Hier: eine verrückte Situation, in der alles zu viel ist.', en: 'madness, craziness' },
  zufrieden: { de: 'Man ist glücklich mit dem, was man hat, und will nichts ändern.', en: 'content, satisfied' },
  verpassen: { de: 'Etwas nicht erleben oder nicht bekommen, weil man zu spät ist oder nicht da ist.', en: 'to miss (an event, a bus)', ex: 'Ich habe den Zug verpasst.' },
  Wecker: { de: 'Eine Uhr, die am Morgen klingelt, damit man aufwacht.', en: 'alarm clock' },
  Schlummertaste: { de: 'Der Knopf am Wecker für „noch ein paar Minuten schlafen“.', en: 'snooze button' },
  Pflicht: { de: 'Etwas, das man machen muss.', en: 'duty, obligation', ex: 'Die Schule ist für Kinder Pflicht.' },
  ausschlafen: { de: 'So lange schlafen, bis man von allein wach wird.', en: 'to sleep in' },
  Wert: { de: 'Hier: etwas, das für einen Menschen oder eine Gesellschaft wichtig ist, zum Beispiel Fleiß oder Freiheit.', en: 'a value (something people consider important)' },
  Fleiß: { de: 'Wenn man viel und gern arbeitet.', en: 'diligence, hard work' },
  faul: { de: 'Man will nicht arbeiten und nichts tun.', en: 'lazy' },
  selbstverständlich: { de: 'Ganz normal, man muss nicht darüber sprechen.', en: 'taken for granted, a matter of course' },
  Sinnesorgan: { de: 'Ein Körperteil, mit dem man die Welt wahrnimmt: Auge, Ohr, Nase, Zunge, Haut.', en: 'sense organ' },
  Zeitempfinden: { de: 'Das Gefühl dafür, wie schnell oder langsam die Zeit vergeht.', en: 'perception of time' },
  'innere Uhr': { de: 'Der natürliche Rhythmus des Körpers. Er sagt uns, wann wir müde oder wach sind.', en: 'body clock' },
  Chronotyp: { de: 'Der Typ Mensch nach seiner inneren Uhr: früh wach oder spät wach.', en: 'chronotype' },
  Schichtarbeit: { de: 'Arbeit zu wechselnden Zeiten, zum Beispiel eine Woche morgens, eine Woche nachts.', en: 'shift work' },
  Gehirn: { de: 'Das Organ im Kopf, mit dem wir denken.', en: 'brain' },
  verarbeiten: { de: 'Hier: Informationen aufnehmen und ordnen.', en: 'to process' },
  Vorgang: { de: 'Etwas, das abläuft, Schritt für Schritt.', en: 'a process', ex: 'Das Lernen ist ein langer Vorgang.' },
  Widerspruch: { de: 'Zwei Dinge passen logisch nicht zusammen.', en: 'contradiction' },
  Rückblick: { de: 'Wenn man später an eine Zeit zurückdenkt.', en: 'looking back, in retrospect' },
  vergehen: { de: 'Die Zeit läuft weiter und ist dann vorbei.', en: 'to pass (of time)', ex: 'Die Ferien sind schnell vergangen.' },
  sichLangweilen: { de: 'Nichts Interessantes zu tun haben, die Zeit wird lang.', en: 'to be bored' },
  verfügen: { de: 'Etwas haben und benutzen können. Immer mit „über“ + Akkusativ.', en: 'to have at one’s disposal', ex: 'Sie verfügt über viel Erfahrung.' },
  Termin: { de: 'Eine feste Zeit für ein Treffen, zum Beispiel beim Arzt.', en: 'appointment' },
  vereinbaren: { de: 'Zusammen etwas planen und fest ausmachen.', en: 'to arrange, to agree on', ex: 'Wir haben einen Termin vereinbart.' },
  verschieben: { de: 'Auf eine spätere oder frühere Zeit legen.', en: 'to postpone, to reschedule' },
  absagen: { de: 'Sagen, dass man nicht kommt oder dass etwas nicht stattfindet.', en: 'to cancel' },
  Sprechstunde: { de: 'Die Zeit, in der eine Praxis oder ein Büro für Besucher offen ist.', en: 'consultation hours, office hours' },
  Ordination: { de: 'Österreichisch für: Arztpraxis.', en: 'Austrian word for a doctor’s practice' },
  passen: { de: 'Hier: Die Zeit ist gut für mich.', en: 'to suit, to work (for someone)', ex: 'Passt Ihnen Dienstag?' },
  ausmachen: { de: 'Hier: einen Termin zusammen festlegen.', en: 'to arrange, to fix (a time)' },
  Bescheid: { de: '„Bescheid sagen“ heißt: jemanden informieren.', en: 'to let someone know', ex: 'Sag mir bitte Bescheid, wenn du da bist.' },
  dazwischenkommen: { de: 'Etwas passiert plötzlich, und der Plan funktioniert nicht mehr.', en: 'to come up unexpectedly', ex: 'Mir ist leider etwas dazwischengekommen.' },
  Ergänzung: { de: 'Ein Satzteil, den das Verb braucht, damit der Satz vollständig ist.', en: 'complement (object the verb requires)' },
  Präteritum: { de: 'Eine Vergangenheitsform, vor allem in geschriebenen Texten: ich ging, sie machte.', en: 'simple past tense' },
  Perfekt: { de: 'Die Vergangenheitsform für das Sprechen: ich bin gegangen, sie hat gemacht.', en: 'present perfect, the spoken past' },
  Plusquamperfekt: { de: 'Die Form für etwas, das noch früher passiert ist: ich war gegangen, sie hatte gemacht.', en: 'past perfect' },
  damals: { de: 'In einer Zeit, die schon lange vorbei ist.', en: 'back then' },
  neulich: { de: 'Vor kurzer Zeit, vor ein paar Tagen oder Wochen.', en: 'recently, the other day' },
  heutzutage: { de: 'In der Zeit, in der wir jetzt leben.', en: 'nowadays' },
  Lebenslauf: { de: 'Ein Text mit den wichtigsten Stationen im Leben: Schule, Ausbildung, Arbeit.', en: 'CV, résumé' },
};

// Later chapters win if a word appears twice, so each chapter can give its own example.
export const glossary: Record<string, GlossaryEntry> = {
  ...glossary1, ...glossary2, ...glossary3, ...glossary4, ...glossary5, ...glossary6, ...glossary7, ...glossary8,
};

/** Each course has its own word explanations, so A1 learners get simpler ones. */
const glossaries: Record<string, Record<string, GlossaryEntry>> = { 'b2-1': glossary, a1: glossaryA1, a2: glossaryA2, b1: glossaryB1 };
export const glossaryFor = (courseId: string) => glossaries[courseId] || glossary;

/** "sichEinigen" is stored without a space so it can be a key. Show it as "sich einigen". */
export const termLabel = (key: string) => key.replace(/^sich([A-ZÄÖÜ])/, (_m, c: string) => `sich ${c.toLowerCase()}`);
