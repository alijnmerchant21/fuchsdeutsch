/* Small original line drawings for the game cards. Stroke follows the text color, fills use the card hue. */
import type { ReactElement } from 'react';
const s = { fill: 'none', stroke: 'currentColor', strokeWidth: 2.4, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
const f = (fill: string) => ({ ...s, fill });
const HF = 'var(--hf)';
const CARD = 'var(--card)';

const ART: Record<string, ReactElement> = {
  key: (<>
    <rect x="18" y="20" width="58" height="52" rx="6" {...f(CARD)} /><path d="M18 34h58" {...s} /><path d="M30 46h20M30 56h30" {...s} />
    <circle cx="80" cy="56" r="13" {...f(HF)} /><circle cx="80" cy="56" r="4" {...f(CARD)} /><path d="M93 56h16M103 56v8M108 56v6" {...s} />
  </>),
  wave: (<>
    <rect x="62" y="16" width="34" height="62" rx="3" {...f(HF)} /><circle cx="89" cy="50" r="2.5" fill="currentColor" />
    <circle cx="36" cy="34" r="10" {...f(CARD)} /><path d="M22 76c0-14 6-24 14-24s14 10 14 24" {...f(CARD)} /><path d="M48 58l8-16" {...s} />
    <path d="M56 26q4-3 2-8M62 30q5-2 5-8" {...s} />
  </>),
  numbers: (<>
    <rect x="16" y="18" width="40" height="40" rx="8" {...f(CARD)} /><text x="36" y="45" textAnchor="middle" fontSize="20" fontWeight="800" fill="currentColor">7</text>
    <rect x="62" y="30" width="40" height="40" rx="8" {...f(HF)} /><text x="82" y="57" textAnchor="middle" fontSize="18" fontWeight="800" fill="currentColor">42</text>
    <path d="M20 72h28M24 80h18" {...s} />
  </>),
  basket: (<>
    <path d="M24 44h72l-8 32H32z" {...f(HF)} /><path d="M38 44l12-20M82 44L70 24" {...s} />
    <circle cx="48" cy="40" r="7" {...f(CARD)} /><rect x="58" y="28" width="12" height="16" rx="3" {...f(CARD)} /><ellipse cx="78" cy="40" rx="6" ry="8" {...f(CARD)} />
    <path d="M44 56v12M60 56v12M76 56v12" {...s} />
  </>),
  rain: (<>
    <path d="M30 34a12 12 0 0 1 22-8 14 14 0 0 1 26 4 10 10 0 0 1 0 20H32a8 8 0 0 1-2-16z" {...f(CARD)} />
    <text x="30" y="66" fontSize="11" fontWeight="800" fill="currentColor">der</text><text x="56" y="74" fontSize="11" fontWeight="800" fill="currentColor">die</text><text x="80" y="64" fontSize="11" fontWeight="800" fill="currentColor">das</text>
    <path d="M40 80h40l-4 8H44z" {...f(HF)} />
  </>),
  blocks: (<>
    <rect x="14" y="54" width="30" height="20" rx="4" {...f(CARD)} /><rect x="46" y="54" width="30" height="20" rx="4" {...f(HF)} /><rect x="78" y="54" width="28" height="20" rx="4" {...f(CARD)} />
    <rect x="44" y="22" width="32" height="20" rx="4" {...f(HF)} transform="rotate(-8 60 32)" /><path d="M60 44v6M56 47l4 4 4-4" {...s} />
  </>),
  map: (<>
    <path d="M14 24l28-8 34 8 30-8v56l-30 8-34-8-28 8z" {...f(CARD)} /><path d="M42 16v56M76 24v56" {...s} />
    <path d="M24 60q14-24 30-10t30-18" {...s} strokeDasharray="4 5" /><circle cx="88" cy="30" r="6" {...f(HF)} />
  </>),
  sofa: (<>
    <rect x="22" y="40" width="76" height="26" rx="8" {...f(HF)} /><rect x="14" y="46" width="14" height="26" rx="5" {...f(CARD)} /><rect x="92" y="46" width="14" height="26" rx="5" {...f(CARD)} />
    <path d="M24 72v8M96 72v8" {...s} /><path d="M58 14v14M52 22l6 6 6-6" {...s} />
  </>),
  chain: (<>
    <rect x="12" y="38" width="34" height="20" rx="10" {...f(CARD)} /><rect x="40" y="38" width="34" height="20" rx="10" {...f(HF)} /><rect x="68" y="38" width="34" height="20" rx="10" {...f(CARD)} />
    <text x="57" y="30" textAnchor="middle" fontSize="12" fontWeight="800" fill="currentColor">weil</text>
  </>),
  debate: (<>
    <path d="M14 22h40v26H32l-10 8v-8h-8z" {...f(HF)} /><path d="M66 40h40v26h-8v8l-10-8H66z" {...f(CARD)} />
    <path d="M26 35h18M78 53h18" {...s} /><text x="34" y="80" textAnchor="middle" fontSize="11" fontWeight="800" fill="currentColor">pro</text>
  </>),
  tomato: (<>
    <circle cx="44" cy="52" r="20" {...f(HF)} /><circle cx="78" cy="52" r="20" {...f(HF)} /><path d="M38 32l6 4 6-4M72 32l6 4 6-4" {...s} />
    <path d="M64 52h0" {...s} /><path d="M36 80q24 8 48 0" {...s} />
  </>),
  factory: (<>
    <path d="M14 78V46l20 10V46l20 10V30h14v48z" {...f(CARD)} /><rect x="74" y="50" width="32" height="28" rx="3" {...f(HF)} />
    <text x="90" y="68" textAnchor="middle" fontSize="11" fontWeight="800" fill="currentColor">-ung</text><path d="M58 22q4-6 0-10" {...s} />
  </>),
};

export function GameArt({ art }: { art: string }) {
  return <svg className="g-art" viewBox="0 0 120 92" aria-hidden>{ART[art] ?? ART.key}</svg>;
}
