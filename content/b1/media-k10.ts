// Pictures and diagrams for B1 Kapitel 10: Miteinander.
import { who } from '../a1/images';
import { v2, type Visual } from '../a1/visuals';

export const SCENES_B1_K10: Record<string, { id: string; prompt: string }> = {
  'b1-k10/e-over': { id: 'b1-k10-intro', prompt: `a warm June evening in a Leipzig courtyard with an old brick apartment building, ${who('nele', 'amara', 'felix', 'sofia')} and ${who('herrLehmann')} hanging a hand-painted banner with a fox symbol from a window, neighbors watching and smiling, no readable text` },
  'b1-k10/t1-text': { id: 'b1-k10-mini-muenchen', prompt: 'a colorful children’s play city in a big hall and outdoor area: kids running a small bakery, a kids’ newspaper desk, a little town hall with children voting, play money, cardboard houses, cheerful summer light, no readable text' },
  'b1-k10-t2-audio': { id: 'b1-k10-ehrenamt', prompt: 'a friendly radio studio with a female host at a microphone, small bubbles showing volunteers sorting vegetables at a food bank and teenagers painting the walls of a youth center' },
  'b1-k10/t3-text': { id: 'b1-k10-europa', prompt: 'a bright modern parliament hall with semicircular rows of seats, a blue flag with a circle of yellow stars, and a simple map of Europe on a screen, no readable text' },
  'b1-k10/wg-intro': { id: 'b1-k10-mieterverein', prompt: `${who('nele')} and ${who('herrLehmann')} in a good jacket holding a folder full of letters, sitting at the desk of a friendly adviser in a small office of a tenants’ association, shelves with binders, no readable text` },
  'b1-k10-wg-audio': { id: 'b1-k10-mieterverein', prompt: '' },
  'b1-k10-wg-treffen': { id: 'b1-k10-treffen', prompt: `a neighborhood meeting in a cozy Japanese-German restaurant with tables pushed together, ${who('kenji')} pouring tea, ${who('nele', 'sofia', 'felix', 'amara')} and ${who('herrLehmann')} among about twenty neighbors of all ages, a clipboard list next to the cash register, evening light` },
  'b1-k10/wg-protokoll': { id: 'b1-k10-protokoll', prompt: `${who('lina')} writing notes in a notebook at a restaurant table, a teapot, a stack of flyers with a fox drawing and a signature list next to her, no readable text` },
  'b1-k10-u-aus': { id: 'b1-k10-aussprache', prompt: `${who('frauKlein')} at a whiteboard with two big arrows pointing at two simple pictures, a coffee cup and a tea cup, students in a bright classroom, no readable text` },
  'b1-k10/w-match': { id: 'b1-k10-objects', prompt: 'objects on a table for a citizens’ initiative and an election: a poster, a signature list on a clipboard, flyers, a donation can, a ballot paper, a ballot box, a small blue flag with yellow stars, a microphone, no readable text' },
};

export const VOCAB_B1_K10: Record<string, string> = {
  'das Plakat': 'a colorful event poster on a wall, no readable text',
  'die Unterschriftenliste': 'a signature list on a clipboard with a pen, no readable text',
  'der Flyer': 'a small stack of colorful flyers',
  'die Spendendose': 'a sealed metal donation can with a coin slot',
  'der Stimmzettel': 'a paper ballot with checkboxes and a cross, no readable text',
  'die Wahlurne': 'a transparent ballot box with folded papers inside',
  'die Europaflagge': 'the blue flag with a circle of twelve yellow stars',
  'das Rathaus': 'a grand old town hall with a tall tower',
  'das Mikrofon': 'a microphone on a stand',
};

export const VISUALS_B1_K10: Record<string, Visual> = {
  'b1-k10/t1-gram': {
    kind: 'positions', title: 'Passiv: werden auf 2, Partizip am Ende', titleEn: 'Passive: werden in position 2, participle at the end',
    rows: [
      v2('Präsens', 'present', ['Die Briefe', 'werden', 'heute', 'geschrieben.'], [1, 3]),
      v2('Präteritum', 'simple past', ['Die Tafel', 'wurde', '2015', 'eröffnet.'], [1, 3]),
      v2('Perfekt', 'present perfect', ['Das Haus', 'ist', 'renoviert worden.'], [1, 2]),
    ],
  },
  'b1-k10/g-1': {
    kind: 'positions', title: 'Passiv mit Modalverb: Partizip + werden am Ende', titleEn: 'Passive with a modal: participle + werden at the end',
    rows: [
      v2('müssen', 'must', ['Der Antrag', 'muss', 'bis Freitag', 'abgegeben werden.'], [1, 3]),
      v2('sollen', 'should', ['Ein Anwalt', 'soll', 'vorher', 'gefragt werden.'], [1, 3]),
    ],
  },
};
