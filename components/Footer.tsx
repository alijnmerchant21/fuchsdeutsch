import Link from 'next/link';
import { BRAND } from '@/lib/config';
import { LEGAL } from '@/lib/legal';

export function Footer() {
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
