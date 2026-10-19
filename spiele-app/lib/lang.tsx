'use client';
/* Language settings, same model as Fuchsdeutsch Prüfung.
   Before sign-in: the whole page in German or English (DE | EN switch).
   After sign-in: the app stays German, "English-Hilfe" adds English lines under texts. */
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

type Lang = 'de' | 'en';
interface LangCtx { lang: Lang; setLang: (l: Lang) => void; help: boolean; setHelp: (h: boolean) => void }
const Ctx = createContext<LangCtx>({ lang: 'de', setLang: () => {}, help: true, setHelp: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setL] = useState<Lang>('de');
  const [help, setH] = useState(true);
  useEffect(() => {
    try {
      // fd:lang is the language of the whole site (course, Prüfung, Spiele).
      const l = localStorage.getItem('fd:lang') || localStorage.getItem('fds:lang'); if (l === 'en' || l === 'de') setL(l);
      const h = localStorage.getItem('fds:help'); if (h === '0') setH(false);
    } catch { /* ignore */ }
  }, []);
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  const setLang = (l: Lang) => { setL(l); try { localStorage.setItem('fds:lang', l); localStorage.setItem('fd:lang', l); } catch { /* ignore */ } };
  const setHelp = (h: boolean) => { setH(h); try { localStorage.setItem('fds:help', h ? '1' : '0'); } catch { /* ignore */ } };
  return <Ctx.Provider value={{ lang, setLang, help, setHelp }}>{children}</Ctx.Provider>;
}

export const useLang = () => useContext(Ctx);

/** Pick German or English for pages shown before sign-in. */
export function useT() {
  const { lang } = useLang();
  return (de: string, en: string) => (lang === 'en' ? en : de);
}

/** English help line, shown only when English help is on. */
export function En({ children, as: Tag = 'span', block }: { children: ReactNode; as?: 'span' | 'p' | 'div'; block?: boolean }) {
  const { help } = useLang();
  if (!help || !children) return null;
  return <Tag className={`en help ${block ? 'line' : ''}`}>{children}</Tag>;
}
