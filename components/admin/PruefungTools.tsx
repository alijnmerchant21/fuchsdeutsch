'use client';
/* The Prüfung admin tools for one candidate (export for Claude, paste the answer, Schreiben marking, blocks),
   shown inside the control center. They live in the Prüfung app (/pruefung/admin/<id>); same domain, same login. */
import { useEffect, useRef, useState } from 'react';
import type { ATT } from './text';

const BASE = process.env.NEXT_PUBLIC_PRUEFUNG_URL ?? '/pruefung';

export function PruefungTools({ uid, t, onChange }: { uid: string; t: ATT; onChange?: () => void }) {
  const frame = useRef<HTMLIFrameElement>(null);
  const [h, setH] = useState(900);
  const src = `${BASE}/admin/${encodeURIComponent(uid)}?embed=1`;
  useEffect(() => {
    const on = (e: MessageEvent) => {
      if (e.source !== frame.current?.contentWindow) return;
      const d = e.data as { type?: string; h?: number };
      if (d?.type === 'fd-embed-height' && d.h) setH(Math.min(Math.max(d.h + 20, 300), 20000));
      if (d?.type === 'fd-embed-changed') onChange?.();
    };
    window.addEventListener('message', on);
    return () => window.removeEventListener('message', on);
  }, [onChange]);
  return (
    <section className="ad-card ad-span2 ad-tools">
      <h3>{t.prTools}<a className="ad-link ad-tools-open" href={src.replace('?embed=1', '')} target="_blank" rel="noreferrer">{t.openTab} ↗</a></h3>
      <p className="ad-hint">{t.prToolsHint}</p>
      <iframe ref={frame} src={src} title={t.prTools} style={{ height: h }} />
    </section>
  );
}
