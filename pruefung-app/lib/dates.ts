export const today = (d = new Date()) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

export const addDays = (iso: string, n: number) => {
  const d = new Date(iso + 'T12:00'); d.setDate(d.getDate() + n); return today(d);
};

export const daysBetween = (a: string, b: string) =>
  Math.round((new Date(b + 'T12:00').getTime() - new Date(a + 'T12:00').getTime()) / 86400000);

const WD = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];
const MON = ['Jan.', 'Feb.', 'März', 'Apr.', 'Mai', 'Juni', 'Juli', 'Aug.', 'Sep.', 'Okt.', 'Nov.', 'Dez.'];
export const fmt = (iso: string) => { const d = new Date(iso + 'T12:00'); return `${WD[d.getDay()]} ${d.getDate()}. ${MON[d.getMonth()]}`; };
export const weekday = (iso: string) => new Date(iso + 'T12:00').getDay();
