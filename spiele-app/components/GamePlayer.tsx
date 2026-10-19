'use client';
/* Shows a self-contained game from public/games in a frame and listens for its XP messages:
   window.parent.postMessage({ source: 'fds-game', type: 'xp', amount: 10 }, '*') */
import { useEffect, useRef, useState } from 'react';
import { party } from '@/lib/fx';
import { asset } from '@/lib/config';
import { dayOf, stats } from '@/lib/progress';
import { useLang } from '@/lib/lang';
import { useStore } from '@/lib/store';
import { Guard } from './Guard';

interface Toast { id: number; text: string; big?: boolean }

function Player({ id, title }: { id: string; title: string }) {
  const { user, plays, earn } = useStore();
  const { help } = useLang();
  const frame = useRef<HTMLIFrameElement>(null);
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [session, setSession] = useState(0);
  const playedToday = useRef(stats(plays).today);
  const streakRef = useRef(stats(plays).streak);
  useEffect(() => { const s = stats(plays); playedToday.current = s.today; streakRef.current = s.streak; }, [plays]);

  const toast = (text: string, big = false) => {
    const t = { id: Date.now() + Math.random(), text, big };
    setToasts((x) => [...x, t]);
    setTimeout(() => setToasts((x) => x.filter((y) => y.id !== t.id)), big ? 3600 : 1800);
  };

  useEffect(() => {
    const on = (e: MessageEvent) => {
      if (e.source !== frame.current?.contentWindow) return;
      const m = e.data as { source?: string; type?: string; amount?: number };
      if (m?.source !== 'fds-game' || m.type !== 'xp' || typeof m.amount !== 'number' || m.amount <= 0) return;
      const amount = Math.min(100, Math.round(m.amount));
      const first = !playedToday.current;
      playedToday.current = true;
      setSession((x) => x + amount);
      void earn(id, amount).then(() => {
        if (first) { toast(`🔥 Serie: ${streakRef.current + 1} ${streakRef.current + 1 === 1 ? 'Tag' : 'Tage'}!`, true); party(); }
      });
      toast(`+${amount} XP`);
    };
    window.addEventListener('message', on);
    return () => window.removeEventListener('message', on);
  }, [earn, id]);

  const first = (user?.name || '').split(' ')[0];
  const [src] = useState(() => `${asset(`games/${id}.html`)}?name=${encodeURIComponent(first)}&d=${dayOf()}`);
  // English help follows the app switch without reloading the game.
  const sendHelp = () => frame.current?.contentWindow?.postMessage({ source: 'fds-app', type: 'en', on: help }, '*');
  useEffect(sendHelp, [help]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="playwrap">
      <iframe ref={frame} className="playframe" src={src} onLoad={sendHelp} title={title} allow="autoplay" />
      <div className="xpchip" aria-live="polite"><b>{session}</b> XP in dieser Runde</div>
      <div className="toasts">{toasts.map((t) => <div key={t.id} className={`xptoast ${t.big ? 'big' : ''}`}>{t.text}</div>)}</div>
    </div>
  );
}

export function GamePlayer({ id, title }: { id: string; title: string }) {
  return <Guard><Player id={id} title={title} /></Guard>;
}
