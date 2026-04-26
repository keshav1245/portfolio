import { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { SectionLabel, headingStyle } from './About';
import { experience } from '../data/resume';
import { MapPin, Calendar, ChevronDown, ChevronUp } from 'lucide-react';

export default function Experience() {
  const { ref, visible } = useIntersectionObserver();

  return (
    <section
      id="experience"
      ref={ref}
      aria-labelledby="exp-heading"
      style={{
        padding: '100px 24px',
        background: 'var(--bg-2)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(32px)',
        transition: 'opacity 0.7s ease, transform 0.7s ease',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <SectionLabel>Experience</SectionLabel>
        <h2 id="exp-heading" style={headingStyle}>
          Where I've <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Built Things</em>
        </h2>

        <div style={{ marginTop: 48, position: 'relative' }}>
          {/* Timeline line */}
          <div style={{
            position: 'absolute', left: 16, top: 0, bottom: 0, width: 1,
            background: 'linear-gradient(to bottom, var(--accent), transparent)',
            opacity: 0.3,
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {experience.map((job, i) => (
              <ExperienceCard key={i} job={job} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ job, index }) {
  const [expanded, setExpanded] = useState(index < 2);

  return (
    <article
      style={{
        paddingLeft: 48,
        paddingBottom: 40,
        position: 'relative',
        animation: `fadeUp 0.6s ease ${index * 0.12}s both`,
      }}
    >
      {/* Timeline dot */}
      <div style={{
        position: 'absolute', left: 10, top: 6,
        width: 13, height: 13, borderRadius: '50%',
        background: index === 0 ? 'var(--accent)' : 'var(--bg-3)',
        border: `2px solid ${index === 0 ? 'var(--accent)' : 'var(--border-hover)'}`,
        boxShadow: index === 0 ? '0 0 0 4px rgba(200,169,110,0.15)' : 'none',
        zIndex: 1,
      }} />

      <div
        style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: 14,
          padding: '24px 28px',
          cursor: 'pointer',
          transition: 'border-color 0.2s, box-shadow 0.2s',
        }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(200,169,110,0.25)'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.3)'; }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'none'; }}
      >
        {/* Header */}
        <div
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, flexWrap: 'wrap' }}
          onClick={() => setExpanded(!expanded)}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4, flexWrap: 'wrap' }}>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.15rem', fontWeight: 700,
                color: 'var(--text-primary)',
              }}>
                {job.role}
              </h3>
              {index <= 1 && (
                <span style={{
                  padding: '2px 10px', borderRadius: 20,
                  background: 'rgba(74,222,128,0.12)',
                  border: '1px solid rgba(74,222,128,0.3)',
                  color: 'var(--green)', fontSize: '0.72rem', fontWeight: 600,
                }}>
                  CURRENT
                </span>
              )}
              <span style={{
                padding: '2px 10px', borderRadius: 20,
                background: 'var(--bg-3)',
                color: 'var(--text-muted)', fontSize: '0.72rem',
              }}>
                {job.type}
              </span>
            </div>
            <div style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.95rem', marginBottom: 8 }}>
              {job.company}
            </div>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.83rem', display: 'flex', alignItems: 'center', gap: 4 }}>
                <Calendar size={12} /> {job.period}
              </span>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.83rem', display: 'flex', alignItems: 'center', gap: 4 }}>
                <MapPin size={12} /> {job.location}
              </span>
            </div>
          </div>
          <button
            aria-label={expanded ? 'Collapse' : 'Expand'}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', padding: 4 }}
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
        </div>

        {/* Expanded content */}
        {expanded && (
          <div style={{ marginTop: 20 }}>
            <ul role="list" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20 }}>
              {job.highlights.map((h, i) => (
                <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--accent)', marginTop: 4, flexShrink: 0, fontSize: '0.7rem' }}>▸</span>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.93rem', lineHeight: 1.65 }}>{h}</span>
                </li>
              ))}
            </ul>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {job.stack.map(tech => (
                <span key={tech} style={{
                  padding: '3px 10px', borderRadius: 6,
                  background: 'var(--bg)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-muted)',
                  fontSize: '0.77rem', fontFamily: 'var(--font-mono)',
                }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
