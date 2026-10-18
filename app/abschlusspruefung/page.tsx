import { redirect } from 'next/navigation';

// The final exam lives at /abschlusspruefung/<course>. Old links go to the B2.1 exam.
export default function Page() { redirect('/abschlusspruefung/b2-1'); }
