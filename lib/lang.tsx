'use client';
import { useCallback, useEffect, useState } from 'react';

/** Language of the public pages (homepage, sign-up). After sign-up it decides whether English help starts on. */
export type UiLang = 'de' | 'en';
const KEY = 'fd:lang';
const EVT = 'fd:lang';

export function readUiLang(): UiLang {
  try { return localStorage.getItem(KEY) === 'de' ? 'de' : 'en'; } catch { return 'en'; }
}

export function useUiLang(): [UiLang, (l: UiLang) => void] {
  const [lang, setLang] = useState<UiLang>('en');
  useEffect(() => {
    setLang(readUiLang());
    const on = () => setLang(readUiLang());
    window.addEventListener(EVT, on);
    return () => window.removeEventListener(EVT, on);
  }, []);
  const set = useCallback((l: UiLang) => {
    try { localStorage.setItem(KEY, l); } catch { /* storage unavailable */ }
    setLang(l);
    window.dispatchEvent(new Event(EVT));
  }, []);
  return [lang, set];
}

/** Small DE | EN switch. */
export function LangToggle({ lang, onChange }: { lang: UiLang; onChange: (l: UiLang) => void }) {
  return (
    <div className="v3-lang" role="group" aria-label="Sprache / Language">
      {(['de', 'en'] as const).map((l) => (
        <button key={l} type="button" aria-pressed={lang === l} onClick={() => onChange(l)}>{l.toUpperCase()}</button>
      ))}
    </div>
  );
}
