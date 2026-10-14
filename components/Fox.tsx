import Image from 'next/image';

type Mood = 'happy' | 'wow' | 'sleepy' | 'proud';

/** Fuchsi — photorealistic 3D fox mascot (see public/fox-mascot.jpg). Mood tweaks use CSS only. */
export function Fox({ size = 120, mood = 'happy', className = '' }: { size?: number; mood?: Mood; className?: string }) {
  return (
    <span
      className={`fox fox-img fox-${mood} ${className}`}
      style={{ width: size, height: size }}
      role="img"
      aria-label="Fuchsi, der Lernfuchs"
    >
      <Image
        src="/fox-mascot.jpg"
        alt=""
        width={512}
        height={512}
        className="fox-photo"
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
