const metrics = [
  { label: 'Availability', value: '99.99%' },
  { label: 'P95 Latency', value: '85ms' },
  { label: 'Deploy Frequency', value: 'Daily' },
  { label: 'Test Coverage', value: '92%' }
];

export function App() {
  return (
    <main style={{ fontFamily: 'Inter, system-ui, sans-serif', minHeight: '100vh', background: 'linear-gradient(135deg, #0f172a, #1e293b 60%, #0b1220)', color: '#e2e8f0', padding: '64px 24px' }}>
      <section style={{ maxWidth: 1120, margin: '0 auto' }}>
        <p style={{ letterSpacing: '0.2em', textTransform: 'uppercase', color: '#38bdf8', fontSize: 12 }}>Enterprise Platform</p>
        <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 0.95, margin: '16px 0 24px' }}>Production-ready full stack platform for career launch.</h1>
        <p style={{ maxWidth: 760, fontSize: 20, lineHeight: 1.7, color: '#cbd5e1' }}>
          This scaffold demonstrates enterprise architecture, secure delivery, observability, and a polished product story suitable for senior-level interviews and portfolio review.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16, marginTop: 40 }}>
          {metrics.map((metric) => (
            <article key={metric.label} style={{ background: 'rgba(15, 23, 42, 0.72)', border: '1px solid rgba(148, 163, 184, 0.2)', borderRadius: 20, padding: 24 }}>
              <div style={{ color: '#94a3b8', fontSize: 14 }}>{metric.label}</div>
              <div style={{ fontSize: 32, fontWeight: 700, marginTop: 8 }}>{metric.value}</div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
