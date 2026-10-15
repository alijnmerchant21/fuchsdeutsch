import type { Story } from './types';

/**
 * Optional A1 reading. Stories are short, present tense, and tied to course themes.
 * Placed as optional extras — not required to unlock chapters.
 */
export const storiesA1: Story[] = [
  {
    id: 'a1-mein-tag',
    level: 'A1',
    title: 'Mein Tag',
    minutes: 3,
    afterChapter: 'a1-k5',
    why: 'Passt zu Kapitel 5: Tagesablauf und Uhrzeit.',
    whyEn: 'Fits chapter 5: daily routine and telling the time.',
    body: `Ich stehe jeden Morgen um sieben Uhr auf. Dann gehe ich ins Bad und dusche schnell. Zum Frühstück esse ich Brot mit Marmelade und trinke einen Kaffee. Um acht Uhr gehe ich zur Arbeit. Ich arbeite im Büro.

Am Nachmittag kaufe ich im Supermarkt ein. Ich kaufe Brot, Milch und Gemüse. Am Abend koche ich mit meiner Schwester. Danach sehen wir einen Film. Um zehn Uhr gehe ich ins Bett. Ich bin müde, aber glücklich.`,
    en: 'A simple day: wake up, breakfast, work, shopping, cooking with a sister, a film, then bed.',
    quiz: [
      { q: 'Wann steht die Person auf?', options: ['um 6 Uhr', 'um 7 Uhr', 'um 8 Uhr'], answer: 1 },
      { q: 'Wo arbeitet sie?', options: ['im Büro', 'im Café', 'in der Schule'], answer: 0 },
      { q: 'Mit wem kocht sie am Abend?', options: ['mit dem Bruder', 'mit der Schwester', 'allein'], answer: 1 },
    ],
  },
  {
    id: 'a1-im-park',
    level: 'A1',
    title: 'Im Park',
    minutes: 3,
    afterChapter: 'a1-k3',
    why: 'Passt zu Kapitel 3: Stadt, Wetter und Freizeit.',
    whyEn: 'Fits chapter 3: city, weather and free time.',
    body: `Heute ist das Wetter schön und sonnig. Ich gehe mit meinem Freund in den Park. Viele Leute spazieren dort. Kinder spielen fröhlich Fußball. Alte Menschen sitzen auf Bänken und lesen Zeitungen.

Ich sehe viele bunte Blumen. Der Park ist groß und grün. Ich mache Fotos von den Blumen. Wir sitzen im Gras und essen ein Eis. Es ist ein perfekter Tag im Park. Ich bleibe lange dort und lese ein Buch.`,
    en: 'A sunny day in the park with a friend: football, flowers, ice cream and a book.',
    quiz: [
      { q: 'Wie ist das Wetter?', options: ['regnerisch', 'schön und sonnig', 'kalt und windig'], answer: 1 },
      { q: 'Was spielen die Kinder?', options: ['Tennis', 'Fußball', 'Karten'], answer: 1 },
      { q: 'Was essen sie im Gras?', options: ['ein Eis', 'Pizza', 'Brot'], answer: 0 },
    ],
  },
  {
    id: 'a1-meine-familie',
    level: 'A1',
    title: 'Meine Familie',
    minutes: 3,
    afterChapter: 'a1-k5',
    why: 'Passt zu Kapitel 5: Familie und Personen.',
    whyEn: 'Fits chapter 5: family and people.',
    body: `Meine Familie ist klein, aber sehr freundlich. Wir sind vier Personen: meine Mutter, mein Vater, meine Schwester und ich. Meine Mutter ist Lehrerin und kocht gern. Mein Vater liest jeden Abend Bücher. Meine Schwester spielt Klavier.

Am Sonntag gehen wir oft spazieren oder besuchen Oma und Opa. Wir essen zusammen Kuchen und trinken Kaffee. Abends spielen wir Gesellschaftsspiele. Ich liebe meine Familie sehr. Sie ist für mich das Wichtigste.`,
    en: 'A small family of four: mother (teacher), father (reads), sister (piano), and Sunday visits to grandparents.',
    quiz: [
      { q: 'Wie viele Personen sind in der Familie?', options: ['drei', 'vier', 'fünf'], answer: 1 },
      { q: 'Was ist die Mutter von Beruf?', options: ['Ärztin', 'Lehrerin', 'Köchin'], answer: 1 },
      { q: 'Wann besuchen sie Oma und Opa oft?', options: ['am Montag', 'am Sonntag', 'am Freitag'], answer: 1 },
    ],
  },
  {
    id: 'a1-im-cafe',
    level: 'A1',
    title: 'Im Café',
    minutes: 3,
    afterChapter: 'a1-k6',
    why: 'Passt zu Kapitel 6: Einladung, Café und Bestellen.',
    whyEn: 'Fits chapter 6: invitations, cafés and ordering.',
    body: `Heute treffe ich meine Freundin Lena im Café. Das Café heißt „Fuchsbau“. Es ist klein und gemütlich. Lena kommt um vier Uhr. Wir bestellen: ich einen Kaffee, Lena einen Tee und einen Kuchen.

Wir sprechen über die Arbeit und über das Wochenende. Lena hat am Samstag Geburtstag. Sie macht eine kleine Party. „Kommst du?“ fragt sie. „Ja, gerne!“ sage ich. Um fünf Uhr bezahlen wir und gehen. Es war schön.`,
    en: 'Meeting a friend at Café Fuchsbau, ordering coffee and cake, and getting invited to a birthday party.',
    quiz: [
      { q: 'Wie heißt das Café?', options: ['Fuchsbau', 'Leipzig', 'Sonnenschein'], answer: 0 },
      { q: 'Was bestellt Lena?', options: ['nur Kaffee', 'Tee und Kuchen', 'Pizza'], answer: 1 },
      { q: 'Wann hat Lena Geburtstag?', options: ['am Freitag', 'am Samstag', 'am Sonntag'], answer: 1 },
    ],
  },
  {
    id: 'a1-einkaufen',
    level: 'A1',
    title: 'Einkaufen',
    minutes: 3,
    afterChapter: 'a1-k4',
    why: 'Passt zu Kapitel 4: Essen, Trinken und Einkaufen.',
    whyEn: 'Fits chapter 4: food, drink and shopping.',
    body: `Der Kühlschrank ist leer. Ich gehe zum Supermarkt. Zuerst kaufe ich Brot und Brötchen. Dann hole ich Milch, Butter und Käse. Für das Abendessen brauche ich Nudeln und Tomaten.

An der Kasse sage ich: „Guten Tag!“ Die Verkäuferin fragt: „Haben Sie eine Kundenkarte?“ „Nein, danke.“ Das macht zwölf Euro fünfzig. Ich bezahle bar und gehe nach Hause. Heute koche ich Spaghetti.`,
    en: 'An empty fridge, a trip to the supermarket, and cooking spaghetti at home.',
    quiz: [
      { q: 'Warum geht die Person einkaufen?', options: ['Der Kühlschrank ist leer.', 'Sie hat Hunger im Café.', 'Es ist Sonntag.'], answer: 0 },
      { q: 'Was kostet der Einkauf?', options: ['2,50 €', '12,50 €', '20 €'], answer: 1 },
      { q: 'Was kocht sie heute?', options: ['Pizza', 'Suppe', 'Spaghetti'], answer: 2 },
    ],
  },
  {
    id: 'a1-willkommen-kenji',
    level: 'A1',
    title: 'Willkommen, Kenji!',
    minutes: 4,
    afterChapter: 'a1-k1',
    why: 'Extra zur Fuchsbau-WG aus Kapitel 1.',
    whyEn: 'Extra story about the Fuchsbau flat share from chapter 1.',
    body: `Kenji steht vor der Tür in der Fuchsstraße. Er hat zwei große Taschen. Er klingelt. Nele macht die Tür auf. „Hallo! Bist du Kenji?“ „Ja. Hallo!“ „Komm rein! Willkommen in der WG.“

In der Küche sitzen Amara und Felix. Amara gibt Kenji einen Tee. Felix sagt: „Servus! Ich komme aus Wien.“ Kenji lächelt. „Ich komme aus Osaka. Ich spreche ein bisschen Deutsch.“ „Super,“ sagt Nele. „Wir sprechen langsam. Versprochen!“

Am Abend zeigen sie Kenji sein Zimmer. Es ist klein, aber hell. Am Fenster sieht er die Straße. Kenji denkt: Hier ist gut. Hier wohne ich jetzt.`,
    en: 'Kenji arrives at the Fuchsbau flat share, meets Nele, Amara and Felix, and sees his new room.',
    quiz: [
      { q: 'Wer macht die Tür auf?', options: ['Amara', 'Nele', 'Felix'], answer: 1 },
      { q: 'Was gibt Amara Kenji?', options: ['Kaffee', 'Tee', 'Wasser'], answer: 1 },
      { q: 'Wie ist Kenjis Zimmer?', options: ['groß und dunkel', 'klein, aber hell', 'ohne Fenster'], answer: 1 },
    ],
  },
];
