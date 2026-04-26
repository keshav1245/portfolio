import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { SectionLabel, headingStyle } from './About';
import { education, certifications } from '../data/resume';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

export default function Education() {
  const { ref, visible } = useIntersectionObserver();

  return (
    <section
      id="education"
      ref={ref}
      aria-labelledby="edu-heading"
      style={{
        padding: '100px 24px',
        maxWidth: 1200, margin: '0 auto',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(32px)',
        transition: 'opacity 0.7s ease, transform 0.7s ease',
      }}
    >
      <SectionLabel>Education & Credentials</SectionLabel>
      <h2 id="edu-heading" style={headingStyle}>
        Academically <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Grounded</em>
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20, marginTop: 48 }}>
        {education.map((edu, i) => (
          <article
            key={edu.degree}
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 16,
              padding: '28px',
              position: 'relative',
              overflow: 'hidden',
              transition: 'border-color 0.2s, transform 0.2s',
              animation: `fadeUp 0.6s ease ${i * 0.15}s both`,
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(200,169,110,0.3)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            {/* Top gradient */}
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: 2,
              background: i === 0 ? 'linear-gradient(90deg, var(--accent), var(--accent-2))' : 'linear-gradient(90deg, #60a5fa, transparent)',
            }} />

            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <div style={{
                width: 42, height: 42, borderRadius: 10,
                background: i === 0 ? 'rgba(200,169,110,0.1)' : 'rgba(96,165,250,0.1)',
                border: `1px solid ${i === 0 ? 'rgba(200,169,110,0.2)' : 'rgba(96,165,250,0.2)'}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: i === 0 ? 'var(--accent)' : '#60a5fa',
              }}>
                <GraduationCap size={20} />
              </div>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.83rem' }}>{edu.period}</span>
            </div>

            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 4 }}>
              {edu.degree}
            </h3>
            <div style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.9rem', marginBottom: 4 }}>
              {edu.major}
            </div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: 16 }}>
              {edu.institution}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
              <Award size={14} style={{ color: 'var(--accent)', flexShrink: 0 }} />
              <span style={{ color: 'var(--text-primary)', fontSize: '0.88rem', fontWeight: 500 }}>{edu.grade}</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: edu.coursework.length ? 20 : 0 }}>
              <BookOpen size={14} style={{ color: 'var(--text-muted)', flexShrink: 0, marginTop: 3 }} />
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.6 }}>{edu.scholarship}</span>
            </div>

            {edu.coursework.length > 0 && (
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.08em', marginBottom: 8, textTransform: 'uppercase' }}>
                  Key Coursework
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {edu.coursework.map(c => (
                    <span key={c} style={{
                      padding: '3px 9px', borderRadius: 6,
                      background: 'var(--bg)', border: '1px solid var(--border)',
                      color: 'var(--text-muted)', fontSize: '0.77rem',
                    }}>
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </article>
        ))}
      </div>

      {/* Certifications */}
      <div style={{ marginTop: 48 }}>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 24 }}>
          Certifications
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 10 }}>
          {certifications.map((cert, i) => (
            <div
              key={cert}
              style={{
                display: 'flex', alignItems: 'flex-start', gap: 12,
                padding: '14px 18px',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 10,
                animation: `fadeUp 0.5s ease ${i * 0.06}s both`,
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(200,169,110,0.2)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
            >
              <span style={{ color: 'var(--accent)', fontSize: '0.75rem', marginTop: 4, flexShrink: 0 }}>✦</span>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.87rem', lineHeight: 1.5 }}>{cert}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
