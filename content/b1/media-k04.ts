// Pictures and diagrams for B1 Kapitel 4: Arbeitswelt.
import { who } from '../a1/images';
import { v2, type Visual } from '../a1/visuals';

export const SCENES_B1_K4: Record<string, { id: string; prompt: string }> = {
  'b1-k4/e-over': { id: 'b1-k4-intro', prompt: `a cozy December evening in a shared kitchen in an old Leipzig apartment, ${who('amara')} holding her phone with a happy but nervous face, ${who('nele', 'felix', 'sofia', 'kenji')} around the table with soup bowls, fairy lights at the window` },
  'b1-k4-t1-audio': { id: 'b1-k4-work-talks', prompt: `three panels: ${who('amara')} in nurse uniform talking kindly to a colleague at a hospital ward desk, ${who('sofia')} arriving out of breath at a bright startup office meeting table, ${who('kenji')} on the phone in his restaurant kitchen next to a crate of potatoes` },
  'b1-k4/t2-text': { id: 'b1-k4-dream-jobs', prompt: 'four small portraits in a magazine layout: a young nurse in scrubs, a bus driver dreaming of cooking with a thought bubble of a small restaurant, an architect at a drawing table thinking of a garden, a teenager with a backpack thinking of a world map, no readable text' },
  'b1-k4/t2-anzeige': { id: 'b1-k4-music-shop', prompt: 'a friendly independent music shop in Leipzig with guitars on the wall, amplifiers, a wooden sales counter, warm light, no readable text' },
  'b1-k4-t2-tel': { id: 'b1-k4-phone-call', prompt: `${who('felix')} on the phone in his room with a guitar on the bed and a notepad, split screen with a young shop assistant answering a phone at a music shop counter` },
  'b1-k4/t3-text': { id: 'b1-k4-application', prompt: 'a tidy desk with a laptop, a printed CV with a small portrait photo, a cover letter, a pen and a cup of coffee, seen from above, no readable text' },
  'b1-k4/wg-intro': { id: 'b1-k4-folge', prompt: `Sunday evening in the shared kitchen, ${who('amara')} showing an email on her phone, ${who('nele', 'felix', 'sofia', 'kenji')} reacting with surprise and joy, steaming soup on the table` },
  'b1-k4-wg-audio': { id: 'b1-k4-folge', prompt: '' },
  'b1-k4/wg-mail': { id: 'b1-k4-email', prompt: 'a smartphone on a kitchen table showing an email app with a simple hospital logo, blurred lines instead of text, a cup of tea next to it' },
  'b1-k4-wg-interview': { id: 'b1-k4-video-interview', prompt: `${who('amara')} in a blouse sitting at a laptop in her room for a video call, on the screen a friendly gray-haired man in a shirt in a hospital office, a plant and a lamp in the background` },
  'b1-k4/w-match': { id: 'b1-k4-objects', prompt: 'work objects on a table: a CV with a photo, a contract with a pen, a headset, a name badge, a shift schedule pinned to a board, no readable text' },
};

export const VOCAB_B1_K4: Record<string, string> = {
  'der Lebenslauf': 'a two-page CV with a small portrait photo, blurred lines instead of text',
  'das Bewerbungsfoto': 'a friendly professional portrait photo of a smiling woman in a blazer',
  'die Stellenanzeige': 'a newspaper page with small job ads, one circled in red, no readable text',
  'der Arbeitsvertrag': 'a contract on a desk with a pen next to the signature line, no readable text',
  'das Headset': 'an office headset with a microphone',
  'der Dienstplan': 'a colorful shift schedule grid pinned to a hospital notice board, no readable text',
  'das Namensschild': 'a small name badge clipped to a blue nurse uniform, no readable text',
  'das Anschreiben': 'a one-page cover letter in an envelope, no readable text',
};

export const VISUALS_B1_K4: Record<string, Visual> = {
  'b1-k4/t2-gram': {
    kind: 'positions', title: 'Irreale Bedingung: nach dem wenn-Satz das Verb', titleEn: 'Unreal condition: after the wenn-clause comes the verb',
    rows: [
      v2('wenn-Satz vorne', 'wenn-clause first', ['Wenn ich Zeit hätte,', 'würde', 'ich', 'kommen.'], [1, 3]),
      v2('mit hätte', 'with hätte', ['Wenn ich reich wäre,', 'hätte', 'ich', 'ein Haus am Meer.']),
      v2('Hauptsatz vorne', 'main clause first', ['Ich', 'würde', 'kommen,', 'wenn ich Zeit hätte.'], [1, 2]),
    ],
  },
  'b1-k4/g-2': {
    kind: 'positions', title: 'Pronominaladverb als Platzhalter', titleEn: 'Pronominal adverb as a placeholder',
    rows: [
      v2('mit Nomen', 'with a noun', ['Ich', 'warte', 'auf den Bus.']),
      v2('Sache', 'thing', ['Ich', 'warte', 'darauf.']),
      v2('mit dass-Satz', 'with a dass-clause', ['Ich', 'warte', 'darauf,', 'dass sie anruft.']),
      v2('mit zu + Infinitiv', 'with zu + infinitive', ['Ich', 'freue mich', 'darauf,', 'dich zu sehen.']),
    ],
  },
};
