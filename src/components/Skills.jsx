import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { SectionLabel, headingStyle } from './About';
import { skills } from '../data/resume';

const categoryIcons = {
  'Languages': '⌨️',
  'Backend': '⚙️',
  'Databases': '🗄️',
  'Frontend': '🎨',
  'DevOps': '🐳',
  'Cloud & Storage': '☁️',
  'AI / ML': '🤖',
  'Tooling': '🔧',
};

const categoryColors = {
  'Languages': '#60a5fa',
  'Backend': '#c8a96e',
  'Databases': '#34d399',
  'Frontend': '#f472b6',
  'DevOps': '#60a5fa',
  'Cloud & Storage': '#fb923c',
  'AI / ML': '#a78bfa',
  'Tooling': '#94a3b8',
};

export default function Skills() {
  const { ref, visible } = useIntersectionObserver();

  return (
    <section
      id="skills"
      ref={ref}
      aria-labelledby="skills-heading"
      style={{
        padding: '100px 24px',
        background: 'var(--bg-2)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(32px)',
        transition: 'opacity 0.7s ease, transform 0.7s ease',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <SectionLabel>Skills</SectionLabel>
        <h2 id="skills-heading" style={headingStyle}>
          My <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Technical Arsenal</em>
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: 20, marginTop: 48,
        }}>
          {Object.entries(skills).map(([category, items], i) => {
            const color = categoryColors[category] || 'var(--accent)';
            return (
              <div
                key={category}
                role="group"
                aria-label={`${category} skills`}
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 14,
                  padding: '22px',
                  transition: 'border-color 0.2s, transform 0.2s',
                  animation: `fadeUp 0.5s ease ${i * 0.08}s both`,
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = `${color}44`; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                  <span style={{ fontSize: '1.2rem' }} aria-hidden="true">{categoryIcons[category] || '💡'}</span>
                  <h3 style={{ fontSize: '0.85rem', fontWeight: 700, color, letterSpacing: '0.06em', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                    {category}
                  </h3>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                  {items.map(skill => (
                    <span
                      key={skill}
                      style={{
                        padding: '5px 11px',
                        borderRadius: 7,
                        background: `${color}10`,
                        border: `1px solid ${color}28`,
                        color: 'var(--text-secondary)',
                        fontSize: '0.82rem',
                        fontWeight: 400,
                        transition: 'background 0.15s, color 0.15s',
                        cursor: 'default',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.background = `${color}22`; e.currentTarget.style.color = 'var(--text-primary)'; }}
                      onMouseLeave={e => { e.currentTarget.style.background = `${color}10`; e.currentTarget.style.color = 'var(--text-secondary)'; }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
