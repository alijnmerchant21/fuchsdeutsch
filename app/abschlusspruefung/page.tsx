import { redirect } from 'next/navigation';

// The final exam moved to /pruefung/<course>. Old links go to the B2.1 exam.
export default function Page() { redirect('/pruefung/b2-1'); }
