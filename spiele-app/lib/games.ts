/* The game catalog. To open a game: set `live: true` and give it an `href`. */
export type Level = 'a1' | 'a2' | 'b1' | 'b2';
export type Hue = 'lilac' | 'sky' | 'mint' | 'peach' | 'rose' | 'butter';

export interface Game {
  id: string;
  level: Level;
  title: string;
  /** one line in German */
  tagline: string;
  /** the same line in English (shown with English-Hilfe or on the English home page) */
  taglineEn: string;
  /** what you practice, short German chips */
  skills: string[];
  players: string;
  playersEn: string;
  minutes: number;
  hue: Hue;
  /** key into the Art set in components/GameArt.tsx */
  art: string;
  live?: boolean;
  /** path inside this app */
  href?: string;
  isNew?: boolean;
}

export const LEVELS: { id: Level; name: string; de: string; en: string }[] = [
  { id: 'a1', name: 'A1', de: 'Einstieg', en: 'Beginner' },
  { id: 'a2', name: 'A2', de: 'Grundlagen', en: 'Elementary' },
  { id: 'b1', name: 'B1', de: 'Mittelstufe', en: 'Intermediate' },
  { id: 'b2', name: 'B2', de: 'Fortgeschritten', en: 'Upper intermediate' },
];

export const GAMES: Game[] = [
  {
    id: 'schluessel-bitte', level: 'b1', title: 'Schlüssel, bitte!', live: true, isNew: true, href: '/spiel/schluessel-bitte',
    tagline: 'Wohnung suchen, umziehen, Nachbarn kennenlernen: das Brettspiel rund ums Wohnen.',
    taglineEn: 'Find an apartment, move in, meet the neighbors: the board game about housing.',
    skills: ['Wohnen', 'Mietvertrag', 'Höflich fragen'], players: '1 bis 3 · gegen den Computer', playersEn: '1 to 3 · vs the computer', minutes: 20, hue: 'butter', art: 'key',
  },
  {
    id: 'hallo-nachbar', level: 'a1', title: 'Hallo, Nachbar!',
    tagline: 'Begrüßen, vorstellen, verabschieden. Wer findet die passende Antwort zuerst?',
    taglineEn: 'Greet, introduce yourself, say goodbye. Who finds the right reply first?',
    skills: ['Begrüßung', 'sich vorstellen'], players: '1 bis 2', playersEn: '1 to 2', minutes: 10, hue: 'peach', art: 'wave',
  },
  {
    id: 'zahlen-sprint', level: 'a1', title: 'Zahlen-Sprint',
    tagline: 'Hör die Zahl, tipp sie ein. Von 1 bis 1000, immer schneller.',
    taglineEn: 'Hear the number, type it. From 1 to 1000, faster and faster.',
    skills: ['Zahlen', 'Hören', 'Uhrzeit'], players: '1', playersEn: '1', minutes: 5, hue: 'sky', art: 'numbers',
  },
  {
    id: 'einkaufsliste', level: 'a1', title: 'Die Einkaufsliste',
    tagline: 'Merk dir die Liste und pack den Korb im Supermarkt richtig.',
    taglineEn: 'Remember the list and fill the basket at the supermarket.',
    skills: ['Lebensmittel', 'Artikel', 'Mengen'], players: '1', playersEn: '1', minutes: 10, hue: 'mint', art: 'basket',
  },
  {
    id: 'artikel-regen', level: 'a2', title: 'Der, die, das: Regen', live: true, isNew: true, href: '/spiel/artikel-regen',
    tagline: 'Wörter regnen vom Himmel. Schick jedes in die richtige Artikel-Wolke, bevor es landet.',
    taglineEn: 'Words rain from the sky. Send each one to the right article before it lands.',
    skills: ['Artikel', 'Wortschatz'], players: '1 · Highscore', playersEn: '1 · high score', minutes: 5, hue: 'sky', art: 'rain',
  },
  {
    id: 'satzbaustelle', level: 'a2', title: 'Satzbaustelle',
    tagline: 'Bau Sätze aus Bausteinen. Das Verb muss an die richtige Stelle.',
    taglineEn: 'Build sentences from blocks. The verb has to go in the right place.',
    skills: ['Satzbau', 'Perfekt', 'Nebensätze'], players: '1 bis 2', playersEn: '1 to 2', minutes: 10, hue: 'peach', art: 'blocks',
  },
  {
    id: 'stadt-rallye', level: 'a2', title: 'Stadt-Rallye',
    tagline: 'Frag nach dem Weg und lauf mit Fuchsi durch die Stadt zum Ziel.',
    taglineEn: 'Ask for directions and walk Fuchsi through the city to the goal.',
    skills: ['Wegbeschreibung', 'Präpositionen'], players: '1 bis 3', playersEn: '1 to 3', minutes: 15, hue: 'lilac', art: 'map',
  },
  {
    id: 'wohin-damit', level: 'b1', title: 'Wohin damit?',
    tagline: 'Richte die neue Wohnung ein: auf den Tisch oder auf dem Tisch?',
    taglineEn: 'Furnish the new apartment: auf den Tisch or auf dem Tisch?',
    skills: ['Wechselpräpositionen', 'Wohnen'], players: '1', playersEn: '1', minutes: 10, hue: 'rose', art: 'sofa',
  },
  {
    id: 'konnektoren-kette', level: 'b1', title: 'Konnektoren-Kette',
    tagline: 'weil, obwohl, deshalb: verbinde die Sätze zu einer langen Kette.',
    taglineEn: 'weil, obwohl, deshalb: link the sentences into one long chain.',
    skills: ['Konnektoren', 'Wortstellung'], players: '1 bis 2', playersEn: '1 to 2', minutes: 10, hue: 'mint', art: 'chain',
  },
  {
    id: 'debattier-duell', level: 'b2', title: 'Debattier-Duell',
    tagline: 'Pro oder contra? Sortier die Argumente und gewinn die Diskussion.',
    taglineEn: 'For or against? Sort the arguments and win the debate.',
    skills: ['Argumentieren', 'Meinung'], players: '2 · gegen den Computer', playersEn: '2 · vs the computer', minutes: 15, hue: 'lilac', art: 'debate',
  },
  {
    id: 'redewendungen', level: 'b2', title: 'Tomaten auf den Augen',
    tagline: 'Redewendungen raten: Was meint man wirklich, wenn man das sagt?',
    taglineEn: 'Guess the idioms: what do people really mean when they say that?',
    skills: ['Redewendungen', 'Umgangssprache'], players: '1 bis 3', playersEn: '1 to 3', minutes: 10, hue: 'rose', art: 'tomato',
  },
  {
    id: 'nominal-fabrik', level: 'b2', title: 'Die Nominal-Fabrik',
    tagline: 'Aus Verben werden Nomen: verwandle Alltagssätze in Zeitungsdeutsch.',
    taglineEn: 'Turn verbs into nouns: change everyday sentences into newspaper German.',
    skills: ['Nominalstil', 'Schreiben'], players: '1', playersEn: '1', minutes: 10, hue: 'butter', art: 'factory',
  },
];

export const levelName = (l: Level) => LEVELS.find((x) => x.id === l)!.name;
