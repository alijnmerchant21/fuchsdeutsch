import type { Story } from './types';

/**
 * Optional A2 reading: a little longer, with past tense and linked sentences (weil, dass, wenn, als).
 * Not required to unlock chapters.
 */
export const storiesA2: Story[] = [
  {
    id: 'a2-das-klassentreffen',
    level: 'A2',
    title: 'Das Klassentreffen',
    minutes: 4,
    afterChapter: 'a2-k2',
    why: 'Passt zu Kapitel 2: Schulzeit und Wege nach der Schule.',
    whyEn: 'Fits chapter 2: school days and paths after school.',
    body: `Zehn Jahre nach dem Abitur gab es ein Klassentreffen. Nele war nervös, weil sie viele Leute lange nicht gesehen hatte. In der Schule musste sie immer in der ersten Reihe sitzen, und sie durfte nie ihr Handy benutzen.

Beim Buffet traf sie Marco. Früher wollte er Pilot werden. Jetzt ist er Krankenpfleger und sehr glücklich. „Nach der Schule konnte ich mich nicht entscheiden“, erzählte er. „Deshalb habe ich zuerst ein Freiwilliges Soziales Jahr gemacht. Das war die beste Entscheidung.“

Am Ende des Abends tauschten alle ihre Nummern. Nele freute sich, dass sie gekommen war.`,
    en: 'Ten years after school, Nele goes to a class reunion. Marco once wanted to be a pilot but became a nurse after a voluntary social year. Nele is glad she came.',
    quiz: [
      { q: 'Warum war Nele nervös?', options: ['Sie hatte keine Zeit.', 'Sie hatte viele Leute lange nicht gesehen.', 'Sie mochte das Essen nicht.'], answer: 1 },
      { q: 'Was wollte Marco früher werden?', options: ['Lehrer', 'Pilot', 'Koch'], answer: 1 },
      { q: 'Was hat Marco nach der Schule zuerst gemacht?', options: ['ein FSJ', 'ein Studium', 'eine Weltreise'], answer: 0 },
    ],
  },
  {
    id: 'a2-ein-tag-offline',
    level: 'A2',
    title: 'Ein Tag offline',
    minutes: 4,
    afterChapter: 'a2-k3',
    why: 'Passt zu Kapitel 3: Medien und Meinungen mit dass.',
    whyEn: 'Fits chapter 3: media and opinions with dass.',
    body: `Am Sonntag hat Kenji einen Test gemacht: einen ganzen Tag ohne Handy. Am Morgen war es schwer. Er wollte das Wetter checken, aber das Handy lag im Schrank. Also hat er aus dem Fenster geschaut.

Am Nachmittag ist er mit dem Fahrrad an den See gefahren. Er hat ein Buch gelesen und mit einem alten Mann über Fische gesprochen. Kenji fand es komisch, dass ihm niemand eine Nachricht schreiben konnte. Aber er fand es auch schön, dass er ganz ruhig war.

Am Abend hat er das Handy wieder angemacht: 37 Nachrichten! Die meisten waren nicht wichtig. „Ich glaube, dass ich das jetzt jeden Sonntag mache“, sagte Kenji.`,
    en: 'Kenji spends a Sunday without his phone. It is hard at first, then calm. In the evening he finds 37 mostly unimportant messages and decides to do it every Sunday.',
    quiz: [
      { q: 'Wo war Kenjis Handy am Morgen?', options: ['im Schrank', 'im Auto', 'bei Nele'], answer: 0 },
      { q: 'Was hat Kenji am Nachmittag gemacht?', options: ['Er hat gearbeitet.', 'Er ist an den See gefahren.', 'Er hat Videos gesehen.'], answer: 1 },
      { q: 'Was möchte Kenji in Zukunft machen?', options: ['ein neues Handy kaufen', 'jeden Sonntag offline sein', 'mehr Nachrichten schreiben'], answer: 1 },
    ],
  },
  {
    id: 'a2-der-erste-arbeitstag',
    level: 'A2',
    title: 'Der erste Arbeitstag',
    minutes: 4,
    afterChapter: 'a2-k6',
    why: 'Passt zu Kapitel 6: Arbeitswelten und werden.',
    whyEn: 'Fits chapter 6: the world of work and werden.',
    body: `Amara war sehr aufgeregt, weil sie eine neue Stelle auf der Kinderstation bekommen hatte. Sie ist um fünf Uhr aufgestanden und hat eine große Tasse Tee getrunken.

Im Krankenhaus hat eine nette Kollegin ihr alles gezeigt: den Pausenraum, die Zimmer und den alten Computer, der immer langsam ist. Am Mittag hat ein kleiner Junge geweint, weil er Angst vor einer Spritze hatte. Amara hat ihm eine Geschichte erzählt, und er ist ruhig geworden.

Am Abend war Amara müde, aber glücklich. „Ich glaube, das wird ein guter Job“, sagte sie in der WG. Felix hat für alle gekocht. Das war eine Überraschung, weil Felix fast nie kocht.`,
    en: 'Amara starts a new job on a children’s ward. A colleague shows her around, she calms a scared boy with a story, and in the evening Felix surprises everyone by cooking.',
    quiz: [
      { q: 'Wo arbeitet Amara jetzt?', options: ['in einer Schule', 'auf der Kinderstation', 'in einem Restaurant'], answer: 1 },
      { q: 'Warum hat der Junge geweint?', options: ['Er hatte Hunger.', 'Er hatte Angst vor einer Spritze.', 'Er wollte nach Hause.'], answer: 1 },
      { q: 'Was war am Abend die Überraschung?', options: ['Felix hat gekocht.', 'Kenji hatte Geburtstag.', 'Es gab ein Konzert.'], answer: 0 },
    ],
  },
  {
    id: 'a2-der-falsche-zug',
    level: 'A2',
    title: 'Der falsche Zug',
    minutes: 4,
    afterChapter: 'a2-k7',
    why: 'Passt zu Kapitel 7: Verkehr und indirekte Fragen.',
    whyEn: 'Fits chapter 7: transport and indirect questions.',
    body: `Felix wollte nach München zu einem Konzert fahren. Er war spät dran und ist schnell in den Zug auf Gleis 4 gestiegen. Nach zehn Minuten hat er eine Frau gefragt: „Entschuldigung, wissen Sie, wann wir in München ankommen?“

Die Frau hat gelacht. „In München? Dieser Zug fährt nach Berlin!“

Felix wurde ganz blass. Er hat den Schaffner gefragt, ob er in Halle umsteigen kann. „Ja“, sagte der Schaffner, „aber Sie müssen eine neue Fahrkarte kaufen.“ In Halle hat Felix eine Stunde gewartet. Er ist trotzdem pünktlich zum Konzert gekommen, weil das Konzert später angefangen hat. „Glück gehabt“, sagte er.`,
    en: 'Felix rushes onto the wrong train, heading to Berlin instead of Munich. He changes in Halle, buys a new ticket, and still makes the concert because it starts late.',
    quiz: [
      { q: 'Wohin wollte Felix fahren?', options: ['nach Berlin', 'nach München', 'nach Halle'], answer: 1 },
      { q: 'Wo ist Felix umgestiegen?', options: ['in Halle', 'in Leipzig', 'in Dresden'], answer: 0 },
      { q: 'Warum ist er pünktlich gekommen?', options: ['Der Zug war schnell.', 'Das Konzert hat später angefangen.', 'Er ist geflogen.'], answer: 1 },
    ],
  },
  {
    id: 'a2-das-grosse-spiel',
    level: 'A2',
    title: 'Das große Spiel',
    minutes: 4,
    afterChapter: 'a2-k9',
    why: 'Passt zu Kapitel 9: Sport, deshalb und trotzdem.',
    whyEn: 'Fits chapter 9: sport, deshalb and trotzdem.',
    body: `Am Samstag spielte Neles Volleyballteam im Finale. Es regnete, trotzdem kamen viele Zuschauer. Die ganze WG saß in der ersten Reihe. Kenji hatte ein großes Plakat gemalt.

Im ersten Satz war das andere Team stärker. Nele war enttäuscht, deshalb sprach die Trainerin mit ihr: „Du spielst gut. Hab Geduld!“ Im zweiten Satz wurde es besser. Nele machte drei Punkte nacheinander, und die Zuschauer schrien: „Wahnsinn!“

Am Ende hat das Team knapp gewonnen. Nach dem Spiel hat Nele Kenji umarmt. „Ohne euch hätte ich das nicht geschafft“, sagte sie.`,
    en: 'Nele’s volleyball team plays the final in the rain. After a weak first set the coach encourages her, Nele scores three points in a row, and the team wins narrowly.',
    quiz: [
      { q: 'Wie war das Wetter?', options: ['Es war sonnig.', 'Es regnete.', 'Es schneite.'], answer: 1 },
      { q: 'Was hatte Kenji gemacht?', options: ['ein Plakat gemalt', 'einen Kuchen gebacken', 'ein Lied geschrieben'], answer: 0 },
      { q: 'Wer hat das Spiel gewonnen?', options: ['das andere Team', 'Neles Team', 'niemand'], answer: 1 },
    ],
  },
  {
    id: 'a2-im-museum',
    level: 'A2',
    title: 'Ein Bild im Museum',
    minutes: 4,
    afterChapter: 'a2-k12',
    why: 'Passt zu Kapitel 12: Kultur, Bildbeschreibung und Relativsätze.',
    whyEn: 'Fits chapter 12: culture, describing pictures and relative clauses.',
    body: `Am Sonntag war die WG im Museum. Es gab eine neue Ausstellung mit Bildern, die alle das Meer zeigen. Kenji blieb lange vor einem kleinen Bild stehen.

Im Vordergrund sah man drei Boote: ein rotes, ein blaues und ein gelbes. Im Hintergrund war ein Leuchtturm, der im Abendlicht hellrosa aussah. „Das ist das Bild, das ich am schönsten finde“, sagte Kenji. „Es erinnert mich an unseren Urlaub an der Nordsee.“

Amara mochte lieber die großen, dunklen Bilder, auf denen Sturm war. Felix fand alles ein bisschen langweilig, aber das Café im Museum fand er super. Am Ende kaufte Kenji eine Postkarte mit seinem Lieblingsbild.`,
    en: 'The flatmates visit a sea-themed exhibition. Kenji loves a small painting of three boats and a lighthouse that reminds him of their North Sea holiday. He buys it as a postcard.',
    quiz: [
      { q: 'Was zeigen die Bilder in der Ausstellung?', options: ['das Meer', 'die Berge', 'die Stadt'], answer: 0 },
      { q: 'Was sieht man im Hintergrund von Kenjis Lieblingsbild?', options: ['einen Leuchtturm', 'ein Haus', 'einen Wald'], answer: 0 },
      { q: 'Was fand Felix super?', options: ['die dunklen Bilder', 'das Café', 'die Postkarten'], answer: 1 },
    ],
  },
];
