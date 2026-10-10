type Mood = 'happy' | 'wow' | 'sleepy' | 'proud';

const LINE = '#3A2016';

/** Left half of the face details. The right half is this mirrored. */
function Side({ mood }: { mood: Mood }) {
  return (
    <>
      {/* white cheek ruff */}
      <path d="M7 70C20 67 34 70 44 80C49 86 52 93 54 101C44 98 33 91 26 82C20 77 14 73 7 70Z" fill="url(#fx-white)" />
      {/* fur strokes on the cheek */}
      <path d="M14 71l7 4M20 76l7 5M28 84l6 5" stroke="#E9D9C8" strokeWidth="1.4" strokeLinecap="round" fill="none" />
      {/* shadow under the brow */}
      <path d="M28 56C34 48 46 47 54 56C46 53 36 53 28 56Z" fill="#9C4317" opacity="0.55" />
      {mood === 'sleepy' ? (
        <path d="M33 61Q42 67 51 61" fill="none" stroke={LINE} strokeWidth="2.6" strokeLinecap="round" />
      ) : mood === 'proud' ? (
        <path d="M33 63Q42 54 51 63" fill="none" stroke={LINE} strokeWidth="2.6" strokeLinecap="round" />
      ) : (
        <>
          <g className="fox-eye">
          <path d="M32 61C36 54 46 53 52 60C47 65 38 66 32 61Z" fill="url(#fx-eye)" stroke={LINE} strokeWidth="1.8" strokeLinejoin="round" />
          <ellipse cx="42.5" cy="60" rx={mood === 'wow' ? 3.4 : 2.2} ry={mood === 'wow' ? 4.2 : 4} fill="#1B100C" />
          <circle cx="44.2" cy="58.2" r="1.3" fill="#fff" />
          </g>
          {/* dark tear line toward the nose, like a real fox */}
          <path d="M52 60C54 63 55 66 55.5 70" fill="none" stroke={LINE} strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
          <path d="M32 61L28.5 59.5" stroke={LINE} strokeWidth="1.8" strokeLinecap="round" />
        </>
      )}
      {/* whisker dots */}
      <circle cx="50" cy="90" r="0.9" fill="#B9A796" /><circle cx="53" cy="93.5" r="0.9" fill="#B9A796" />
    </>
  );
}

/**
 * Fuchsi, the course mascot: an original illustrated red fox with real fox markings
 * (dark ear backs, white ruff and muzzle, amber eyes). Shaded with gradients, animated with CSS.
 */
export function Fox({ size = 120, mood = 'happy', className = '' }: { size?: number; mood?: Mood; className?: string }) {
  return (
    <svg className={`fox fox-${mood} ${className}`} width={size} height={size} viewBox="0 0 120 120" role="img" aria-label="Fuchsi, der Lernfuchs">
      <defs>
        <radialGradient id="fx-fur" cx="50%" cy="38%" r="70%">
          <stop offset="0" stopColor="#F9A24E" /><stop offset="0.55" stopColor="#E87A2C" /><stop offset="1" stopColor="#B4501B" />
        </radialGradient>
        <linearGradient id="fx-white" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFFFFF" /><stop offset="1" stopColor="#EADBCB" />
        </linearGradient>
        <linearGradient id="fx-ear" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3A2016" /><stop offset="0.45" stopColor="#8A3F18" /><stop offset="1" stopColor="#E87A2C" />
        </linearGradient>
        <radialGradient id="fx-eye" cx="50%" cy="40%" r="60%">
          <stop offset="0" stopColor="#FFD46B" /><stop offset="0.6" stopColor="#E9A024" /><stop offset="1" stopColor="#A9620F" />
        </radialGradient>
        <linearGradient id="fx-bridge" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFC07A" stopOpacity="0.9" /><stop offset="1" stopColor="#FFC07A" stopOpacity="0" />
        </linearGradient>
      </defs>
      <ellipse className="fox-shadow" cx="60" cy="113" rx="26" ry="3.5" fill="#262A40" opacity="0.12" />
      <g className="fox-head">
        <g className="fox-ear-l">
          <path d="M25 52C17 36 17 19 23 5C36 13 47 25 52 40Z" fill="url(#fx-ear)" stroke={LINE} strokeWidth="2" strokeLinejoin="round" />
          <path d="M27 44C23 33 23 22 26 13C34 20 41 29 45 39Z" fill="#F6E3D2" />
          <path d="M29 42C28 34 28 27 30 21M34 41C33 35 34 30 35 26" stroke="#D9BFA8" strokeWidth="1.3" strokeLinecap="round" fill="none" />
        </g>
        <g className="fox-ear-r" transform="translate(120,0) scale(-1,1)">
          <g className="fox-ear-r-inner">
            <path d="M25 52C17 36 17 19 23 5C36 13 47 25 52 40Z" fill="url(#fx-ear)" stroke={LINE} strokeWidth="2" strokeLinejoin="round" />
            <path d="M27 44C23 33 23 22 26 13C34 20 41 29 45 39Z" fill="#F6E3D2" />
            <path d="M29 42C28 34 28 27 30 21M34 41C33 35 34 30 35 26" stroke="#D9BFA8" strokeWidth="1.3" strokeLinecap="round" fill="none" />
          </g>
        </g>
        {/* head: broad brow, cheek tufts, narrow muzzle */}
        <path d="M60 30C74 30 88 36 96 48C104 56 111 62 114 70C107 72 101 76 96 81C88 93 74 104 60 109C46 104 32 93 24 81C19 76 13 72 6 70C9 62 16 56 24 48C32 36 46 30 60 30Z" fill="url(#fx-fur)" stroke={LINE} strokeWidth="2" strokeLinejoin="round" />
        {/* darker crown and light bridge of the nose */}
        <path d="M60 30C72 30 84 35 92 44C82 40 72 40 66 46C63 41 57 41 54 46C48 40 38 40 28 44C36 35 48 30 60 30Z" fill="#B4501B" opacity="0.45" />
        <path d="M54 46C56 43 64 43 66 46C66 60 65 72 64 80H56C55 72 54 60 54 46Z" fill="url(#fx-bridge)" />
        <Side mood={mood} />
        <g transform="translate(120,0) scale(-1,1)"><Side mood={mood} /></g>
        {/* white muzzle and chin */}
        <path d="M47 85C51 79 56 77 60 77C64 77 69 79 73 85C71 97 65 106 60 109C55 106 49 97 47 85Z" fill="url(#fx-white)" />
        <g className="fox-nose">
          <path d="M53 80C56 77.5 64 77.5 67 80C66.5 85 63 88.5 60 89.500C57 88.5 53.5 85 53 80Z" fill="#241511" />
          <ellipse cx="58" cy="81" rx="2.6" ry="1.1" fill="#fff" opacity="0.45" />
        </g>
        {mood === 'wow' ? (
          <ellipse cx="60" cy="97" rx="3.2" ry="3.8" fill="#241511" />
        ) : (
          <path d={mood === 'sleepy' ? 'M60 89.500V94M56 96Q60 98 64 96' : 'M60 89.500V94C58 98 54 98 52 95M60 94C62 98 66 98 68 95'} fill="none" stroke="#241511" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
        )}
      </g>
      {mood === 'proud' && (
        <g className="fox-sparkles" fill="#FFD46B" stroke={LINE} strokeWidth="1.4" strokeLinejoin="round">
          <path d="M108 22l2.5 5.5 5.5 2.5-5.5 2.5-2.5 5.5-2.5-5.5-5.5-2.5 5.5-2.500z" />
          <path d="M10 26l1.8 4 4 1.8-4 1.8-1.8 4-1.8-4-4-1.8 4-1.800z" />
          <path d="M102 94l1.5 3.3 3.3 1.5-3.3 1.5-1.5 3.3-1.5-3.3-3.3-1.5 3.3-1.500z" />
        </g>
      )}
      {mood === 'sleepy' && (
        <g className="fox-zzz" fill="#262A40" fontWeight="800">
          <text x="98" y="30" fontSize="13">z</text>
          <text x="107" y="19" fontSize="10">z</text>
        </g>
      )}
    </svg>
  );
}
