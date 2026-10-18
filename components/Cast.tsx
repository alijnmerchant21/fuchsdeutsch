'use client';
import { CAST, castImageId, imageSrc, useImages } from '@/lib/images';
import { De } from './Hint';

const MAIN: Record<string, string[]> = {
  default: ['nele', 'kenji', 'amara', 'felix', 'frauKlein', 'herrLehmann'],
  b1: ['nele', 'amara', 'felix', 'sofia', 'kenji', 'herrLehmann'],
};
const TINTS = ['#fdf0b5', '#cfe6fb', '#cdeedb', '#e2dbfa', '#ffd9c2', '#fbd5e0'];

/** The Fuchsbau-WG: picture (once made), name and role. */
export function CastStrip({ title = true, course = 'default' }: { title?: boolean; course?: string }) {
  const pics = useImages();
  return (
    <div className="cast-strip">
      {title && <p className="v3-eyebrow"><De en="Meet the flat share" inline>Die Fuchsbau-WG</De></p>}
      <div className="cast-grid">
        {(MAIN[course] || MAIN.default).map((id, i) => {
          const c = CAST[id];
          const src = imageSrc(pics, castImageId(id));
          return (
            <figure key={id} className="cast-card" style={{ background: TINTS[i % TINTS.length] }}>
              {src ? <img src={src} alt={c.name} loading="lazy" /> : <span className="cast-initial" aria-hidden>{c.name.replace('Frau ', '').replace('Herr ', '')[0]}</span>}
              <figcaption><b>{c.name}</b><small>{c.role}</small></figcaption>
            </figure>
          );
        })}
      </div>
    </div>
  );
}
