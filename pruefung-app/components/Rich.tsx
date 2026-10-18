/** Content text may contain <b>, <i> and <br>. Everything else is escaped. */
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
export const safeHtml = (s: string) =>
  esc(s).replace(/&lt;(\/?)(b|i|br)\s*\/?&gt;/g, '<$1$2>').replace(/\n/g, '<br>');

export function Rich({ text, as: Tag = 'span', className }: { text?: string; as?: 'span' | 'p' | 'div' | 'li'; className?: string }) {
  if (!text) return null;
  return <Tag className={className} dangerouslySetInnerHTML={{ __html: safeHtml(text) }} />;
}

/** Reading text: paragraphs from blank lines, with the evidence sentences marked after checking. */
export function Reading({ body, marks }: { body: string; marks?: { ev: string; ok: boolean; n: number }[] }) {
  let html = safeHtml(body);
  for (const m of marks ?? []) {
    const e = safeHtml(m.ev);
    if (e && html.includes(e)) html = html.replace(e, `<mark class="ev ${m.ok ? 'ok' : 'no'}"><sup>${m.n}</sup>${e}</mark>`);
  }
  const paras = html.split(/(?:<br>){2,}/);
  return <div className="reading">{paras.map((p, i) => <p key={i} dangerouslySetInnerHTML={{ __html: p }} />)}</div>;
}
