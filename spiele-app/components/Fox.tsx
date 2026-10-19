import { asset } from '@/lib/config';

/* Fuchsi, the Fuchsdeutsch mark (public/fox-logo.png), same moods and animations as Fuchsdeutsch. */
type Mood = 'happy' | 'wow' | 'sleepy' | 'proud';

export function Fox({ size = 120, mood = 'happy', className = '' }: { size?: number; mood?: Mood; className?: string }) {
  return (
    <span className={`fox-brand fox-${mood} ${className}`} style={{ width: size, height: size }} role="img" aria-label="Fuchsi">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={asset("fox-logo.png")} alt="" width={size} height={size} className="fox-logo-img" />
      {mood === 'proud' && <span className="fox-mood-extra fox-mood-proud" aria-hidden>✨</span>}
      {mood === 'sleepy' && <span className="fox-mood-extra fox-mood-sleepy" aria-hidden>z z</span>}
    </span>
  );
}
