// Pictures and diagrams for B1 Kapitel 12: Geld regiert die Welt? (season finale)
import { who } from '../a1/images';
import { v2, type Visual } from '../a1/visuals';

export const SCENES_B1_K12: Record<string, { id: string; prompt: string }> = {
  'b1-k12/e-over': { id: 'b1-k12-intro', prompt: `a warm late-summer evening in the courtyard of an old Leipzig apartment building with tall windows and string lights, ${who('nele', 'amara', 'felix', 'sofia', 'kenji')} sitting together at a long table, a piggy bank and a folder of papers on the table` },
  'b1-k12-t1-audio': { id: 'b1-k12-bank-felix', prompt: `${who('felix')} with his guitar case sitting at a desk in a bright, modern bank office, across from a friendly female bank advisor in her fifties with glasses, a form and a pen on the desk, no readable text` },
  'b1-k12/t2-text': { id: 'b1-k12-cooperative', prompt: 'an old renovated apartment building seen from the front, diverse residents of all ages leaning out of the windows and waving, a few of them raising hands as if voting, friendly flat illustration, no text' },
  'b1-k12/t2-fugger': { id: 'b1-k12-fuggerei', prompt: 'a quiet cobbled lane in the Fuggerei in Augsburg: rows of small two-story ochre houses with green window shutters and steep gabled roofs, a fountain, an arched stone gate, summer afternoon, no text' },
  'b1-k12-t3-audio': { id: 'b1-k12-radio-debate', prompt: 'a radio studio discussion: a female host at a microphone, a young woman in a secondhand jacket and a young man arguing politely, an older businessman on a video screen, small bubbles showing a container ship and a small neighborhood shop' },
  'b1-k12/t3-tausch': { id: 'b1-k12-tauschring', prompt: 'neighbors trading help in a community room: a woman fixing a bicycle, a student tutoring a child in math, a man cutting hair, a large friendly hourglass in the middle, no money visible, no text' },
  'b1-k12/wg-intro': { id: 'b1-k12-folge-bank', prompt: `${who('nele', 'herrLehmann')} sitting in a cool bank office on a hot summer day, across from a friendly female bank advisor in her fifties with glasses, a thick folder with a financial plan and a calculator on the desk, no readable text` },
  'b1-k12-wg-bank': { id: 'b1-k12-folge-bank', prompt: '' },
  'b1-k12/wg-brief': { id: 'b1-k12-contract', prompt: `a notary office with a wooden table, ${who('nele', 'herrLehmann', 'herrVogt')} signing a thick contract with a fountain pen, a stamp next to it, Herr Vogt smiling and offering a handshake, no readable text` },
  'b1-k12-wg-fest': { id: 'b1-k12-summer-party', prompt: `a joyful summer party in the courtyard of the old building, string lights and plants everywhere, ${who('herrLehmann')} raising a glass for a short speech, ${who('sofia', 'nele', 'amara', 'kenji', 'lina')} raising their glasses, ${who('felix')} with his band on a small stage of pallets, a grill with corn on the cob` },
  'b1-k12/u-pt-text': { id: 'b1-k12-forum', prompt: 'a person typing a comment into an online forum on a laptop at a kitchen table, a cup of tea, a speech bubble with a small house icon above the screen, no readable text' },
  'b1-k12/w-match': { id: 'b1-k12-objects', prompt: 'money and business objects on a desk: a small safe, a calculator, a receipt, a rubber stamp, a bank statement, a toy shipping container, no readable text' },
};

export const VOCAB_B1_K12: Record<string, string> = {
  'der Geldautomat': 'an ATM cash machine in a wall',
  'die Kreditkarte': 'a plain credit card without logos',
  'das Sparschwein': 'a pink ceramic piggy bank',
  'die Münze': 'a single shiny euro coin',
  'der Geldschein': 'a euro banknote, simplified, no readable text',
  'das Portemonnaie': 'a brown leather wallet',
  'der Tresor': 'a heavy steel bank safe with a round dial',
  'der Taschenrechner': 'a simple pocket calculator',
  'der Stempel': 'a wooden rubber stamp with an ink pad',
  'der Container': 'a red shipping container',
};

export const VISUALS_B1_K12: Record<string, Visual> = {
  'b1-k12/t1-gram': {
    kind: 'positions', title: 'je … desto: Verb am Ende, dann Verb nach desto', titleEn: 'je … desto: verb at the end, then verb right after desto + comparative',
    rows: [
      v2('je … desto', 'the more … the faster', ['Je mehr', 'wir', 'sparen,', 'desto', 'schneller', 'können', 'wir das Haus', 'kaufen.'], [2, 5, 7]),
      v2('je … desto', 'the longer … the more', ['Je länger', 'man', 'spart,', 'desto mehr Zinsen', 'bekommt', 'man.'], [2, 4]),
      v2('je … umso', 'the higher … the more expensive', ['Je höher', 'die Zinsen', 'sind,', 'umso teurer', 'wird', 'der Kredit.'], [2, 4]),
    ],
  },
  'b1-k12/g-2': {
    kind: 'articles', examples: ['der renovierte Flur', 'das reparierte Dach', 'die steigende Miete', 'die unterschriebenen Verträge'],
    title: 'Partizip als Adjektiv: mit der, das, die', titleEn: 'Participles as adjectives with der, das, die',
  },
};
