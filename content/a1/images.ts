// Pictures for A1: the cast, one scene per reading or listening text, and picture vocabulary.
// `npm run images` turns every prompt into public/images/<id>.webp (free with Cloudflare Workers AI).
// The site only shows a picture once its file exists, so this list can grow before the files are made.

/** Same look for every picture. */
export const STYLE =
  'flat vector illustration, soft pastel palette of mint green, lavender, peach, butter yellow and sky blue, ' +
  'clean simple shapes, gentle shading, friendly modern picture-book style, light warm background, ' +
  'no text, no letters, no words, no logos, no watermark';

/** Vocabulary pictures: one object, centered. */
export const ICON_STYLE =
  'single object, centered, flat vector icon illustration, soft pastel colors, simple shapes, ' +
  'plain off-white background, no text, no letters, no shadow clutter';

/** Fixed looks, so people stay recognizable from scene to scene. */
export const CAST: Record<string, { name: string; look: string; role: string }> = {
  nele: { name: 'Nele', role: 'Studentin aus Leipzig', look: 'Nele, a young German woman of 22 with shoulder-length wavy auburn hair, round glasses, freckles, mustard-yellow cardigan' },
  kenji: { name: 'Kenji', role: 'Koch aus Osaka', look: 'Kenji, a Japanese man of 28 with short neat black hair, calm smile, navy blue t-shirt' },
  amara: { name: 'Amara', role: 'Pflegerin aus Accra', look: 'Amara, a Ghanaian woman of 30 with dark skin and long braids tied in a bun, big smile, mint green top' },
  felix: { name: 'Felix', role: 'Musiker aus Wien', look: 'Felix, an Austrian man of 26 with messy blond hair, light stubble, denim jacket' },
  frauKlein: { name: 'Frau Klein', role: 'Deutschlehrerin', look: 'Frau Klein, a German teacher in her fifties with a short gray bob, lavender cardigan, kind face' },
  herrLehmann: { name: 'Herr Lehmann', role: 'Nachbar', look: 'Herr Lehmann, an old man of 75 with a white mustache, flat cap and brown vest' },
};

const who = (...ids: string[]) => ids.map((i) => CAST[i].look).join('; ');
const wg = who('nele', 'kenji', 'amara', 'felix');

export interface ImageSpec { id: string; prompt: string; kind: 'cast' | 'scene' | 'vocab' }

/** Scene picture per block. Key: an audio id, or "<chapter id>/<block id>" for other blocks. */
export const SCENES: Record<string, { id: string; prompt: string }> = {
  // K1
  'a1-k1/e-over': { id: 'a1-k1-intro', prompt: `four young flatmates waving hello in front of an old Leipzig apartment building with a fox sign on the door: ${wg}` },
  'a1-k1-t1-audio': { id: 'a1-k1-greetings', prompt: `three small moments of people greeting each other in a hallway and a classroom: ${who('nele', 'amara', 'frauKlein', 'kenji')}` },
  'a1-k1/t2-text': { id: 'a1-k1-wg-portraits', prompt: `three friends introducing themselves, each with a small flag-free speech bubble and a world map behind them: ${who('amara', 'felix', 'kenji')}` },
  'a1-k1-t3-audio': { id: 'a1-k1-numbers', prompt: `${who('frauKlein')} pointing at colorful number blocks from 0 to 20 on a classroom wall` },
  'a1-k1-t3-audio2': { id: 'a1-k1-phone-number', prompt: `${who('nele')} writing a phone number on a notepad while ${who('kenji')} reads it from his phone` },
  'a1-k1/wg-intro': { id: 'a1-k1-folge', prompt: `${who('kenji')} arriving with a suitcase at a cozy shared apartment door, greeted by ${who('nele', 'amara', 'felix')}` },
  'a1-k1-wg-audio': { id: 'a1-k1-folge', prompt: '' },
  // K2
  'a1-k2/e-over': { id: 'a1-k2-intro', prompt: `four flatmates doing hobbies in a living room: guitar, cooking, reading, football: ${wg}` },
  'a1-k2-t1-audio': { id: 'a1-k2-hobbies', prompt: `${who('felix')} playing guitar and ${who('amara')} holding a football, chatting in a park` },
  'a1-k2-t2-audio': { id: 'a1-k2-age', prompt: `${who('nele', 'kenji')} chatting at a kitchen table with a birthday calendar on the wall` },
  'a1-k2/t3-text': { id: 'a1-k2-jobs', prompt: `four small panels of jobs: a chef in a restaurant kitchen, a nurse in a hospital, a musician on a small stage, a student in a library: ${wg}` },
  'a1-k2/t3-form': { id: 'a1-k2-form', prompt: 'a clipboard with a blank registration form and a pen on a desk, simple shapes' },
  'a1-k2/wg-intro': { id: 'a1-k2-folge', prompt: `a messy shared kitchen with dishes piled up, ${who('nele')} holding up a cleaning plan chart, ${who('felix', 'kenji', 'amara')} looking guilty` },
  'a1-k2-wg-audio': { id: 'a1-k2-folge', prompt: '' },
  // K3
  'a1-k3/e-over': { id: 'a1-k3-intro', prompt: 'a friendly city map illustration of Leipzig with a big train station, a tram, a park, a church and an opera house' },
  'a1-k3-t1-audio': { id: 'a1-k3-tour', prompt: `${who('nele')} showing ${who('kenji')} a huge historic main train station hall` },
  'a1-k3-t2-audio': { id: 'a1-k3-directions', prompt: `${who('kenji')} asking ${who('herrLehmann')} for directions on a city square, the old man pointing straight ahead toward an opera house` },
  'a1-k3/t3-text': { id: 'a1-k3-seasons', prompt: 'one city park shown in four seasons side by side: spring blossoms, summer sun, autumn leaves, winter snow' },
  'a1-k3-t3-audio': { id: 'a1-k3-favorite-season', prompt: `${wg}, each holding a small sign-free symbol of a season: sun, snowflake, leaf, flower` },
  'a1-k3/wg-intro': { id: 'a1-k3-folge', prompt: `${who('kenji')} alone at a busy tram stop looking at his phone with an empty battery icon, a friendly young woman with a bike helping him` },
  'a1-k3-wg-audio': { id: 'a1-k3-folge', prompt: '' },
  // K4
  'a1-k4/e-over': { id: 'a1-k4-intro', prompt: 'a colorful breakfast table with bread rolls, cheese, fruit, eggs, coffee and tea' },
  'a1-k4/t1-text': { id: 'a1-k4-breakfast', prompt: `${wg} at a breakfast table, each with a different breakfast: rice and miso soup, bread and jam, muesli, just coffee` },
  'a1-k4-t2-audio': { id: 'a1-k4-market', prompt: `${who('amara')} buying tomatoes at an outdoor market stall from a friendly bald vendor with an apron` },
  'a1-k4/t3-zettel': { id: 'a1-k4-shopping-list', prompt: 'a shopping list note pinned to a fridge next to milk, eggs, pasta, lettuce and a bottle of olive oil' },
  'a1-k4/wg-intro': { id: 'a1-k4-folge', prompt: `${who('kenji')} opening an almost empty fridge with only a yogurt and ketchup inside, ${who('nele', 'amara', 'felix')} peeking in behind him` },
  'a1-k4-wg-audio': { id: 'a1-k4-folge', prompt: '' },
  // K5
  'a1-k5/e-over': { id: 'a1-k5-intro', prompt: 'a big friendly wall clock surrounded by small daily routine icons: alarm clock, toothbrush, coffee cup, bus, bed' },
  'a1-k5/t1-text': { id: 'a1-k5-amara-day', prompt: `${who('amara')} in a nurse uniform at sunrise, leaving home early with a coffee cup, a hospital in the background` },
  'a1-k5-t2-audio': { id: 'a1-k5-family-photos', prompt: `${who('kenji')} showing ${who('nele')} family photos of his parents and sister in Osaka on a tablet` },
  'a1-k5-t3-audio': { id: 'a1-k5-hairdresser', prompt: `${who('felix')} on the phone, a small hair salon with a scissors sign in the background` },
  'a1-k5/wg-intro': { id: 'a1-k5-folge', prompt: `${who('nele', 'amara', 'kenji')} waiting at a dinner table with plates of food, one empty chair, a clock showing half past seven` },
  'a1-k5-wg-audio': { id: 'a1-k5-folge', prompt: '' },
  // K6
  'a1-k6/e-over': { id: 'a1-k6-intro', prompt: 'friends in a cozy café with cake, cappuccinos, balloons and a calendar page' },
  'a1-k6-t1-audio': { id: 'a1-k6-birthdays', prompt: `${who('nele', 'kenji')} looking at a wall calendar with birthdays marked by small cake icons` },
  'a1-k6/t2-text': { id: 'a1-k6-invitation', prompt: 'a handmade party invitation card with balloons, confetti and a secret finger-on-lips fox sticker' },
  'a1-k6-t3-audio': { id: 'a1-k6-cafe', prompt: `${who('nele', 'kenji')} ordering cappuccino and apple cake from a smiling young waiter with an apron in a café` },
  'a1-k6/wg-intro': { id: 'a1-k6-folge', prompt: `surprise birthday party in a dark living room, lights switching on, ${who('nele', 'kenji', 'felix')} and friends jumping up with balloons as ${who('amara')} enters the door` },
  'a1-k6-wg-audio': { id: 'a1-k6-folge', prompt: '' },
  // K7
  'a1-k7/e-over': { id: 'a1-k7-intro', prompt: 'a bright modern office with laptops, a coffee machine and plants' },
  'a1-k7/t1-text': { id: 'a1-k7-internship', prompt: `${who('nele')} at a desk in a small app startup office, laptop with colorful app screens, typing an email` },
  'a1-k7-t2-audio': { id: 'a1-k7-commute', prompt: `four small panels of commuting: ${who('amara')} on a bicycle, ${who('kenji')} on a tram, ${who('felix')} walking, ${who('nele')} on a bus` },
  'a1-k7/t3-mail': { id: 'a1-k7-email', prompt: 'an open laptop showing an email window with blank lines, a calendar and a coffee cup beside it' },
  'a1-k7-t3-audio': { id: 'a1-k7-small-talk', prompt: `${who('nele')} and a friendly young male coworker with curly hair chatting by a coffee machine in an office kitchen` },
  'a1-k7/wg-intro': { id: 'a1-k7-folge', prompt: `${who('kenji')} in a white chef jacket, tired but happy, telling ${who('nele', 'amara', 'felix')} about his first day on the sofa in the evening` },
  'a1-k7-wg-audio': { id: 'a1-k7-folge', prompt: '' },
  // K8
  'a1-k8/e-over': { id: 'a1-k8-intro', prompt: 'healthy life icons: water glass, tea, apples, a scarf, running shoes and a thermometer' },
  'a1-k8-t1-audio': { id: 'a1-k8-felix-sick', prompt: `${who('felix')} pale, wrapped in a blanket with a red nose, ${who('nele')} looking worried` },
  'a1-k8-t2-audio': { id: 'a1-k8-doctor', prompt: `${who('felix')} at a doctor's office, a friendly doctor with short dark hair and a stethoscope listening to him` },
  'a1-k8/t3-text': { id: 'a1-k8-tips', prompt: 'winter health tips illustrated: cup of tea, glass of water, fruit bowl, walking in the snow, sleeping cat' },
  'a1-k8/wg-intro': { id: 'a1-k8-folge', prompt: `${who('felix')} in bed with a cold, ${who('amara')} bringing him hot tea, ${who('kenji')} holding soup at the door` },
  'a1-k8-wg-audio': { id: 'a1-k8-folge', prompt: '' },
  // K9
  'a1-k9/e-over': { id: 'a1-k9-intro', prompt: 'a cutaway dollhouse view of a five-room shared apartment with kitchen, bathroom, living room and bedrooms' },
  'a1-k9/t1-text': { id: 'a1-k9-fuchsbau', prompt: 'a cozy apartment floor plan seen from above in 3D, four bedrooms, a living room with a big window, a kitchen and a bathroom, plants everywhere' },
  'a1-k9/t2-text': { id: 'a1-k9-ads', prompt: 'three small apartment pictures side by side: a small flat with a balcony, a flat with a garden, a bright attic flat' },
  'a1-k9-t2-audio': { id: 'a1-k9-call', prompt: `a young woman with a dark ponytail calling about an apartment, ${who('herrLehmann')} answering the phone in a stairwell` },
  'a1-k9/wg-intro': { id: 'a1-k9-folge', prompt: `a huge old green sofa standing on the sidewalk in front of an apartment building, ${who('felix')} proudly sitting on it, ${who('nele', 'kenji', 'amara')} staring at it` },
  'a1-k9-wg-audio': { id: 'a1-k9-folge', prompt: '' },
  // K10
  'a1-k10/e-over': { id: 'a1-k10-intro', prompt: 'a desk with a notebook, a CV page with blank lines, a phone and a small diploma' },
  'a1-k10-t1-audio': { id: 'a1-k10-day-off', prompt: `${who('kenji')} telling ${who('nele')} about his day off, small thought bubbles showing sleeping in, coffee and a walk` },
  'a1-k10/t2-text': { id: 'a1-k10-amara-path', prompt: `a timeline illustration of ${who('amara')}: school in Accra, nursing school, a plane to Germany, a hospital in Leipzig` },
  'a1-k10-t3-audio': { id: 'a1-k10-mailbox', prompt: 'a smartphone on a table showing a voicemail icon, a happy young woman with a dirndl-style blouse on a call in a speech bubble' },
  'a1-k10/wg-intro': { id: 'a1-k10-folge', prompt: `Monday breakfast in the shared kitchen, ${wg} telling each other about the weekend, small pictures of Dresden and a concert above them` },
  'a1-k10-wg-audio': { id: 'a1-k10-folge', prompt: '' },
  // K11
  'a1-k11/e-over': { id: 'a1-k11-intro', prompt: 'a clothes rack with jackets, dresses, scarves and shoes in a bright store' },
  'a1-k11/t1-text': { id: 'a1-k11-store-guide', prompt: 'a department store cross-section with floors: food, bags and cosmetics, clothes, shoes, a café on top' },
  'a1-k11-t1-audio': { id: 'a1-k11-which-jacket', prompt: `${who('felix')} looking at jackets in a store, a helpful saleswoman with a long dark braid showing him two jackets` },
  'a1-k11-t2-audio': { id: 'a1-k11-fitting-room', prompt: `${who('felix')} trying on a jacket in front of a fitting room mirror, ${who('nele')} giving a thumbs up` },
  'a1-k11/t3-text': { id: 'a1-k11-berlin', prompt: 'a postcard-like view of Berlin with the Brandenburg Gate, the TV tower and a red bus' },
  'a1-k11/wg-intro': { id: 'a1-k11-folge', prompt: `a Berlin flea market in a park, ${who('felix')} holding up a brown leather jacket, a cheeky vendor with a beard and sunglasses, ${who('amara')} laughing` },
  'a1-k11-wg-audio': { id: 'a1-k11-folge', prompt: '' },
  // K12
  'a1-k12/e-over': { id: 'a1-k12-intro', prompt: 'travel icons: a suitcase, a map, mountains, a beach, a ferry and a sun' },
  'a1-k12-t1-audio': { id: 'a1-k12-plans', prompt: `${wg} around a table with a map, thought bubbles showing mountains and the sea` },
  'a1-k12-t2-audio': { id: 'a1-k12-hostel', prompt: `${who('nele')} on the phone, a cheerful old man with a white beard and a captain hat at a youth hostel by the sea` },
  'a1-k12/t3-text': { id: 'a1-k12-postcard', prompt: 'a holiday postcard from a small North Sea island with dunes, a lighthouse and a youth hostel by the beach' },
  'a1-k12/wg-intro': { id: 'a1-k12-folge', prompt: `${wg} cycling fast along a dike toward a small ferry at sunset, a lighthouse in the distance` },
  'a1-k12-wg-audio': { id: 'a1-k12-folge', prompt: '' },
};

/** Picture vocabulary: German word (exactly as in the exercise) → what to draw. */
export const VOCAB: Record<string, string> = {
  'das Hotel': 'a small hotel building', 'das Taxi': 'a yellow taxi car', 'die Musik': 'music notes', 'die Pizza': 'a pizza',
  'der Computer': 'a desktop computer', 'das Foto': 'a photo print',
  'schwimmen': 'a person swimming', 'lesen': 'a person reading a book', 'kochen': 'a person cooking at a stove',
  'Fußball spielen': 'a person kicking a football', 'Musik hören': 'a person with headphones', 'tanzen': 'a person dancing',
  'Rad fahren': 'a person riding a bicycle', 'fotografieren': 'a person taking a photo with a camera',
  'der Bahnhof': 'a train station building', 'das Museum': 'a museum building with columns', 'der Supermarkt': 'a supermarket shopping cart',
  'die Kirche': 'a church', 'der Park': 'a park with a tree and a bench', 'das Krankenhaus': 'a hospital building',
  'die Bank': 'a bank building', 'der Bus': 'a city bus', 'die Straßenbahn': 'a tram', 'das Fahrrad': 'a bicycle',
  'das Auto': 'a car', 'der Zug': 'a train', 'zu Fuß': 'a person walking', 'an der Ampel': 'a traffic light',
  'das Brot': 'a loaf of bread', 'der Käse': 'a piece of cheese', 'der Apfel': 'a red apple', 'die Tomate': 'a tomato',
  'das Ei': 'an egg', 'die Milch': 'a bottle of milk', 'der Fisch': 'a fish', 'die Kartoffel': 'a potato',
  'der Geburtstag': 'a birthday cake with candles', 'die Party': 'party confetti and a disco ball', 'das Geschenk': 'a wrapped gift box',
  'die Kerze': 'a candle', 'der Luftballon': 'a balloon', 'die Torte': 'a layered cream cake',
  'der Drucker': 'an office printer', 'das Telefon': 'a desk telephone', 'der Kalender': 'a wall calendar',
  'der Kugelschreiber': 'a ballpoint pen', 'die Brille': 'a pair of glasses',
  'der Kopf': 'a head, side view', 'das Auge': 'an eye', 'das Ohr': 'an ear', 'die Nase': 'a nose', 'der Mund': 'a smiling mouth',
  'die Hand': 'an open hand', 'der Fuß': 'a foot', 'das Bein': 'a leg',
  'Ich habe Fieber.': 'a person with a thermometer in the mouth', 'Ich habe Schnupfen.': 'a person sneezing into a tissue',
  'Ich habe Husten.': 'a person coughing', 'Ich habe Kopfschmerzen.': 'a person holding the head in pain',
  'Ich habe Zahnschmerzen.': 'a person holding the cheek with a toothache',
  'die Küche': 'a small kitchen', 'das Bad': 'a bathroom with a bathtub', 'das Schlafzimmer': 'a bedroom with a bed',
  'das Wohnzimmer': 'a living room with a sofa', 'der Balkon': 'a balcony with plants', 'der Flur': 'a hallway with a door and coat hooks',
  'die Hose': 'a pair of trousers', 'das T-Shirt': 'a t-shirt', 'das Kleid': 'a dress', 'die Jacke': 'a jacket', 'der Schuh': 'a sneaker',
  'die Mütze': 'a knitted hat', 'der Schal': 'a scarf', 'die Socken': 'a pair of socks',
  'Die Sonne scheint.': 'a bright sun over a meadow', 'Es regnet.': 'rain falling from a cloud', 'Es schneit.': 'snow falling',
  'Es ist windig.': 'wind blowing leaves and a tree', 'Es ist bewölkt.': 'a cloudy sky', 'Es gibt ein Gewitter.': 'a thunderstorm with lightning',
};

/** File id for a vocabulary word: "vocab-der-apfel". */
export const vocabId = (word: string) =>
  'vocab-' + word.toLowerCase().replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

/** Everything `npm run images` makes, with the full prompt. */
export function allImageSpecs(): ImageSpec[] {
  const out: ImageSpec[] = [];
  for (const [id, c] of Object.entries(CAST)) out.push({ id: `cast-${id}`, kind: 'cast', prompt: `portrait from the waist up, facing the viewer, friendly expression: ${c.look}. ${STYLE}` });
  const seen = new Set<string>();
  for (const s of Object.values(SCENES)) {
    if (!s.prompt || seen.has(s.id)) continue;
    seen.add(s.id);
    out.push({ id: s.id, kind: 'scene', prompt: `${s.prompt}. Wide scene, main subjects in the middle third, calm empty space at the top and bottom. ${STYLE}` });
  }
  for (const [word, what] of Object.entries(VOCAB)) out.push({ id: vocabId(word), kind: 'vocab', prompt: `${what}. ${ICON_STYLE}` });
  return out;
}
