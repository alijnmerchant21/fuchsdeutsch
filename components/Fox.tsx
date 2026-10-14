import Image from 'next/image';

type Mood = 'happy' | 'wow' | 'sleepy' | 'proud';

/** Fuchsi — low-poly 3D fox mark (public/fox-logo.png). */
export function Fox({ size = 120, mood = 'happy', className = '' }: { size?: number; mood?: Mood; className?: string }) {
  return (
    <span
      className={`fox fox-brand fox-${mood} ${className}`}
      style={{ width: size, height: size }}
      role="img"
      aria-label="Fuchsi, der Lernfuchs"
    >
      <Image
        src="/fox-logo.png"
        alt=""
        width={512}
        height={512}
        className="fox-logo-img"
        sizes={`${size}px`}
        style={{ width: size, height: size }}
        priority={size >= 96}
      />
      {mood === 'proud' && (
        <span className="fox-mood-extra fox-mood-proud" aria-hidden>
          ✨
        </span>
      )}
      {mood === 'sleepy' && (
        <span className="fox-mood-extra fox-mood-sleepy" aria-hidden>
          z z
        </span>
      )}
    </span>
  );
}
