const samples = [
  { title: 'Financial editorial', company: 'Allinstation', detail: 'Market news, sector explainers and visual content for Vietnamese readers.', href: '#work', cta: 'Explore the editorial case' },
  { title: 'Education and research', company: 'SEA DePIN', detail: 'Research-backed educational material that explains technical products and ecosystem concepts.', href: 'https://www.canva.com/design/DAGwiSXbQ9E/TjQ5BE23KIJgGFMsNTqoUQ/watch', cta: 'View education sample' },
  { title: 'AMA planning', company: 'InterLink', detail: 'Planning for community AMAs, alongside regional KOL coordination and partner campaigns.', href: 'https://x.com/inter_link/status/1946506688993116251', cta: 'View AMA announcement' },
];

export default function Education() {
  return (
    <section id="education" className="section-gradient" style={{ padding: '5rem 1.5rem' }}>
      <div style={{ maxWidth: '64rem', margin: '0 auto', position: 'relative' }}>
        <p style={{ color: 'var(--muted-foreground)', fontSize: '.75rem', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>Research → editorial → distribution</p>
        <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 400, marginBottom: '1rem' }}>Making financial ideas accessible.</h2>
        <p style={{ color: 'var(--muted-foreground)', lineHeight: 1.8, maxWidth: '46rem', marginBottom: '2rem' }}>My foundation is Applied Finance at Western Sydney University and equity research at Viet Dragon Securities. I bring that research discipline to educational content, channel planning and campaign work.</p>
        <div className="education-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
          {samples.map(sample => <article key={sample.company} className="liquid-glass" style={{ padding: '1.75rem', borderRadius: '1rem', display: 'flex', flexDirection: 'column', gap: '.8rem' }}>
            <span style={{ fontSize: '.75rem', color: '#9dc8ff' }}>{sample.company}</span>
            <h3 className="font-display" style={{ fontSize: '1.35rem', fontWeight: 400 }}>{sample.title}</h3>
            <p style={{ color: 'var(--muted-foreground)', fontSize: '.9rem', lineHeight: 1.7, flex: 1 }}>{sample.detail}</p>
            <a href={sample.href} {...(sample.href.startsWith('https') ? { target: '_blank', rel: 'noopener noreferrer' } : {})} style={{ color: 'var(--foreground)', fontSize: '.85rem', textUnderlineOffset: '5px' }}>{sample.cta} ↗</a>
          </article>)}
        </div>
        <div className="liquid-glass" style={{ marginTop: '1rem', padding: '1.75rem', borderRadius: '1rem' }}>
          <p style={{ fontSize: '.75rem', color: '#9dc8ff', marginBottom: '.6rem' }}>RECENT WORK · HOLDSTATION / WORLD APP</p>
          <h3 className="font-display" style={{ fontSize: '1.4rem', fontWeight: 400, marginBottom: '.75rem' }}>From product education to activation.</h3>
          <p style={{ color: 'var(--muted-foreground)', lineHeight: 1.75, maxWidth: '50rem' }}>I work on notification timing and messaging, onboarding and reward communication, and dashboards for mini-app activity. This includes defining what to measure, reviewing GA4 and on-chain views, and identifying gaps in the data before recommending a campaign change.</p>
          <p style={{ color: 'var(--muted-foreground)', fontSize: '.85rem', lineHeight: 1.7, marginTop: '.75rem' }}>My contribution covers growth requirements, content and analysis, with AI-assisted implementation where relevant. Product activity and campaign attribution are assessed separately.</p>
        </div>
      </div>
      <style>{`@media(max-width: 700px) { .education-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
