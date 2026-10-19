'use client';
/* Fades children up when they scroll into view. */
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';

export function Reveal({ children, delay = 0, className = '', as: Tag = 'div', id }: { children: ReactNode; delay?: number; className?: string; as?: 'div' | 'section' | 'article'; id?: string }) {
  const ref = useRef<HTMLElement | null>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    if (typeof IntersectionObserver === 'undefined') { setOn(true); return; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect(); } }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref as never} id={id} className={`rv ${on ? 'in' : ''} ${className}`} style={{ '--d': `${delay}ms` } as CSSProperties}>
      {children}
    </Tag>
  );
}
