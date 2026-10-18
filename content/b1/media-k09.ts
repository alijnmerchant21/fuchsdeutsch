// Pictures and diagrams for B1 Kapitel 9: Kunststücke.
import { who } from '../a1/images';
import { v2, type Visual } from '../a1/visuals';

/** Scene picture per block. Key: a scoped audio id, or "<chapter id>/<block id>" for other blocks. */
export const SCENES_B1_K9: Record<string, { id: string; prompt: string }> = {
  'b1-k9/e-over': { id: 'b1-k9-intro', prompt: `a warm May evening in the courtyard of an old Leipzig brick building, ${who('felix')} playing acoustic guitar on a wooden crate, ${who('sofia')} filming him with a phone, ${who('nele', 'amara')} and ${who('herrLehmann')} on a chair listening, string lights and potted plants` },
  'b1-k9/t1-text': { id: 'b1-k9-newspaper', prompt: 'a local newspaper lying open on a café table next to a coffee cup, a large photo of a young man with a guitar in a courtyard on the page, a phone showing a video play symbol, no readable text' },
  'b1-k9-t2-audio': { id: 'b1-k9-museum', prompt: `${who('sofia')} and ${who('lina')} standing in a bright art museum hall in front of a large dark painting of people at a long table with a misty city behind them and one small red window, other visitors in the background` },
  'b1-k9/t2-kurs': { id: 'b1-k9-workshop', prompt: 'a cheerful art workshop studio with easels, watercolor paints and brushes, a small group of adults painting, a window open to a green park, no readable text' },
  'b1-k9/t3-text': { id: 'b1-k9-impro', prompt: 'a small improv theater stage with simple black curtains and two wooden chairs, a young woman actress laughing with arms wide open, an audience in silhouette in the front' },
  'b1-k9-t3-audio': { id: 'b1-k9-umbrella', prompt: 'an improv scene on a stage: a woman proudly presenting an old black umbrella with a hole inside an empty golden picture frame, a man in a museum guard cap looking up at fake raindrops, the audience laughing' },
  'b1-k9/t3-pt-text': { id: 'b1-k9-ads', prompt: 'a community notice board in a stairwell covered with colorful small paper ads with tear-off strips, little icons of a guitar, a paintbrush, theater masks, a piano and music notes, no readable text' },
  'b1-k9/wg-intro': { id: 'b1-k9-courtyard', prompt: `a sunny Sunday in the building courtyard, ${who('felix')} singing with a guitar, ${who('sofia')} filming with a phone, ${who('herrLehmann')} sitting on a chair he brought, ${who('kenji')} in a chef's apron in the restaurant back door, ${who('nele', 'amara')} smiling` },
  'b1-k9/wg-lied': { id: 'b1-k9-courtyard', prompt: '' },
  'b1-k9-wg-audio': { id: 'b1-k9-viral', prompt: `breakfast in the shared kitchen, ${who('sofia')} holding up a phone excitedly, ${who('felix')} staring in disbelief, ${who('nele', 'amara', 'kenji')} leaning in to look, coffee cups and bread rolls on the table` },
  'b1-k9-wg-theater': { id: 'b1-k9-school-play', prompt: `a primary school hall with a simple stage and paper house decorations, children in costumes bowing, ${who('lina')} in front applauding, ${who('herrLehmann', 'nele', 'sofia')} in the audience, a formal man in a suit standing at the back` },
  'b1-k9/u-lk': { id: 'b1-k9-innsbruck', prompt: 'the old town of Innsbruck with a late gothic balcony with a shining golden tiled roof, colorful old houses and snowy Alps in the background' },
  'b1-k9/u-volk': { id: 'b1-k9-singing', prompt: 'a cozy pub room with people of all ages singing together from song sheets, an accordion player, wooden tables and warm light, no readable text' },
  'b1-k9/w-match': { id: 'b1-k9-objects', prompt: 'art and music objects on a table: a paintbrush, a small canvas on an easel, an empty picture frame, a microphone, a guitar and a concert ticket, no text' },
};

/** Picture vocabulary: German word exactly as in the match exercise → what to draw. */
export const VOCAB_B1_K9: Record<string, string> = {
  'der Pinsel': 'a paintbrush with a little blue paint on the tip',
  'die Leinwand': 'a blank white canvas',
  'der Bilderrahmen': 'an empty ornate golden picture frame',
  'die Staffelei': 'a wooden painting easel',
  'das Mikrofon': 'a stage microphone on a stand',
  'der Vorhang': 'a red theater curtain',
  'die Eintrittskarte': 'a paper concert ticket, no readable text',
  'die Gitarre': 'an acoustic guitar',
  'die Skulptur': 'a stone sculpture on a museum pedestal',
};

export const VISUALS_B1_K9: Record<string, Visual> = {
  'b1-k9/t1-gram': {
    kind: 'positions', title: 'Wo steht nicht?', titleEn: 'Where does nicht go?',
    rows: [
      v2('ganzer Satz', 'whole sentence', ['Ich', 'komme', 'heute', 'nicht.']),
      v2('mit 2. Verbteil', 'with a second verb part', ['Ich', 'habe', 'das Video', 'nicht', 'gesehen.'], [1, 4]),
      v2('nur ein Teil', 'only one part', ['Ich', 'komme', 'nicht heute,', 'sondern morgen.']),
    ],
  },
  'b1-k9/t2-gram': { kind: 'articles', examples: ['frischer Kaffee', 'kaltes Wasser', 'gute Musik', 'alte Lieder'], caseLabel: 'Nominativ', title: 'Ohne Artikel: Das Adjektiv zeigt das Genus', titleEn: 'No article: the adjective shows the gender' },
};
