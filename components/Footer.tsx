'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BRAND } from '@/lib/config';
import { LEGAL } from '@/lib/legal';

export function Footer() {
  const path = usePathname();
  if (path.startsWith('/admin')) return null;
  return (
    <footer className="v3-footer">
      <div className="v3-footer-in">
        <span><b>{BRAND}</b> · Free German course, now in closed beta</span>
        <nav aria-label="Legal" className="v3-footer-links">
          <Link href="/privacy">Privacy</Link>
          <a href={`mailto:${LEGAL.email}`}>Contact</a>
        </nav>
      </div>
    </footer>
  );
}
