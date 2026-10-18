// Pictures and diagrams for B1 Kapitel 2: Das ist ja praktisch!
import { who } from '../a1/images';
import { v2, type Visual } from '../a1/visuals';

const end = (label: string, labelEn: string, parts: string[]) => v2(label, labelEn, parts, [parts.length - 1]);

export const SCENES_B1_K2: Record<string, { id: string; prompt: string }> = {
  'b1-k2/e-over': { id: 'b1-k2-intro', prompt: `an autumn morning in a small restaurant kitchen in Leipzig, ${who('kenji')} frowning at a large stainless steel combi steamer oven with a blinking red light, ${who('sofia')} beside him holding a phone` },
  'b1-k2/t1-text': { id: 'b1-k2-shopping', prompt: 'split scene: on one side a cozy small bookshop with a friendly bookseller, on the other side a pile of delivery parcels at an apartment door, autumn colors, no readable text' },
  'b1-k2-t1-audio': { id: 'b1-k2-saturday', prompt: `Saturday morning in the flat share hallway, ${who('felix')} leaving with a guitar case, ${who('amara')} putting on her coat, ${who('nele')} with a bicycle pump and ${who('sofia')} holding a laptop` },
  'b1-k2/t2-intro': { id: 'b1-k2-oven', prompt: `${who('kenji')} on the phone in his restaurant kitchen, a notepad with bullet points in front of him, ${who('sofia')} pointing at the notes, a broken combi steamer oven in the background` },
  'b1-k2-t2-audio': { id: 'b1-k2-oven', prompt: '' },
  'b1-k2/t3-text': { id: 'b1-k2-smarthome', prompt: 'a bright modern living room with a smart speaker, a thermostat on the wall, lamps glowing and a phone showing simple icons, no readable text' },
  'b1-k2/t3-pt-text': { id: 'b1-k2-letters', prompt: 'four different people in small round portraits around a house icon: a man with a phone, an older woman with crossed arms, a man with his elderly mother, a young woman next to a cold radiator' },
  'b1-k2/wg-intro': { id: 'b1-k2-folge', prompt: `a cozy neighborhood repair café with workbenches, tools and coffee cups, ${who('herrLehmann')} soldering inside an open guitar amplifier, ${who('felix', 'sofia', 'nele')} watching, an open laptop on the table` },
  'b1-k2-wg-audio': { id: 'b1-k2-folge', prompt: '' },
  'b1-k2/u-text': { id: 'b1-k2-ads', prompt: 'a German apartment mailbox with a small sticker, a billboard on a street and a TV showing a commercial, colorful flat illustration, no readable text' },
  'b1-k2/u-ad': { id: 'b1-k2-instagram', prompt: `${who('sofia')} at a laptop designing a social media post with a steaming bowl of ramen in warm autumn light, ${who('kenji')} looking over her shoulder, no readable text` },
};

export const VOCAB_B1_K2: Record<string, string> = {
  'der Staubsauger': 'a vacuum cleaner',
  'die Waschmaschine': 'a front-loading washing machine',
  'der Drucker': 'a home printer with a sheet of paper',
  'der Verstärker': 'a small guitar amplifier',
  'der Wasserkocher': 'an electric kettle',
  'das Ladekabel': 'a phone charging cable',
  'der Laptop': 'an open laptop',
  'die Kaffeemaschine': 'a coffee machine with a cup',
  'der Kombidämpfer': 'a professional stainless steel combi steamer oven',
};

export const VISUALS_B1_K2: Record<string, Visual> = {
  'b1-k2/t2-gram': {
    kind: 'positions', title: 'deshalb: Verb auf 2. sodass: Verb am Ende', titleEn: 'deshalb: verb in position 2. sodass: verb at the end',
    rows: [
      v2('deshalb', 'that is why', ['Der Ofen ist kaputt.', 'Deshalb', 'kann', 'Kenji nicht backen.'], [2]),
      end('sodass', 'so that', ['Der Ofen ist kaputt,', 'sodass', 'Kenji', 'nicht backen', 'kann.']),
      end('so … dass', 'so … that', ['Der Laptop ist so langsam,', 'dass', 'Sofia', 'fast verrückt', 'wird.']),
    ],
  },
  'b1-k2/t2-gen': {
    kind: 'articles', examples: ['des Ofens', 'des Geräts', 'der Reparatur', 'der Geräte'], caseLabel: 'Genitiv',
    title: 'Genitiv: des … -s, der', titleEn: 'Genitive: des … -s for masculine and neuter, der for feminine and plural',
  },
};
