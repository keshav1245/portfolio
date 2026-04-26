import { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { SectionLabel, headingStyle } from './About';
import { projects } from '../data/resume';
import { ExternalLink, ChevronRight } from 'lucide-react';

export default function Projects() {
  const { ref, visible } = useIntersectionObserver();
  const [showAll, setShowAll] = useState(false);

  const featured = projects.filter(p => p.featured);
  const rest = projects.filter(p => !p.featured);

  return (
    <section
      id="projects"
      ref={ref}
      aria-labelledby="proj-heading"
      style={{
        padding: '100px 24px',
        maxWidth: 1200, margin: '0 auto',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(32px)',
        transition: 'opacity 0.7s ease, transform 0.7s ease',
      }}
    >
      <SectionLabel>Projects</SectionLabel>
      <h2 id="proj-heading" style={headingStyle}>
        Production-Grade <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Systems</em>
      </h2>
      <p style={{ color: 'var(--text-secondary)', marginTop: 12, fontSize: '1rem', maxWidth: 580 }}>
        Real projects, real users, real impact — built in research labs, enterprise environments, and academic settings.
      </p>

      {/* Featured grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 20, marginTop: 40,
      }}>
        {featured.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} featured />
        ))}
      </div>

      {/* More projects */}
      {showAll && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 16, marginTop: 20,
        }}>
          {rest.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      )}

      <div style={{ textAlign: 'center', marginTop: 40 }}>
        <button
          onClick={() => setShowAll(!showAll)}
          style={{
            padding: '11px 28px',
            border: '1px solid var(--border-hover)',
            borderRadius: 10,
            background: 'transparent',
            color: 'var(--text-secondary)',
            fontSize: '0.9rem', cursor: 'pointer',
            display: 'inline-flex', alignItems: 'center', gap: 6,
            transition: 'border-color 0.2s, color 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-hover)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
          aria-expanded={showAll}
        >
          {showAll ? 'Show Fewer Projects' : `Show ${rest.length} More Projects`}
          <ChevronRight size={16} style={{ transform: showAll ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />
        </button>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, featured }) {
  const catColors = {
    'Research Infrastructure': '#60a5fa',
    'Identity & Access Management': '#a78bfa',
    'EdTech / Enterprise': '#f97316',
    'Mobile / Android': '#4ade80',
    'IoT / Data Science': '#34d399',
    'SaaS / Marketing': '#fb7185',
  };
  const color = catColors[project.category] || 'var(--accent)';

  return (
    <article
      style={{
        background: 'var(--surface)',
        border: `1px solid var(--border)`,
        borderRadius: 14,
        padding: featured ? '28px' : '22px',
        display: 'flex', flexDirection: 'column',
        transition: 'border-color 0.2s, transform 0.2s, box-shadow 0.2s',
        animation: `fadeUp 0.6s ease ${index * 0.1}s both`,
        position: 'relative',
        overflow: 'hidden',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = `${color}44`;
        e.currentTarget.style.transform = 'translateY(-3px)';
        e.currentTarget.style.boxShadow = `0 12px 36px rgba(0,0,0,0.3)`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--border)';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Accent bar */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 2,
        background: `linear-gradient(90deg, ${color}, transparent)`,
      }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
        <span style={{
          padding: '3px 10px', borderRadius: 20,
          background: `${color}18`,
          border: `1px solid ${color}44`,
          color, fontSize: '0.72rem', fontWeight: 600,
        }}>
          {project.category}
        </span>
        {featured && <ExternalLink size={14} style={{ color: 'var(--text-muted)' }} />}
      </div>

      <h3 style={{
        fontFamily: 'var(--font-display)',
        fontSize: featured ? '1.25rem' : '1.05rem',
        fontWeight: 700,
        color: 'var(--text-primary)',
        marginBottom: 4,
      }}>
        {project.name}
      </h3>

      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: 12 }}>
        {project.org}
      </div>

      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.65, marginBottom: 16, flex: 1 }}>
        {project.description}
      </p>

      
      <ul role="list" style={{ listStyle: 'none', marginBottom: 18 }}>
        {project.bullets.map((b, i) => (
          <li key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', marginBottom: 6 }}>
            <span style={{ color, marginTop: 4, flexShrink: 0, fontSize: '0.65rem' }}>▸</span>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.55 }}>{b}</span>
          </li>
        ))}
      </ul>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 'auto' }}>
        {project.stack.map(tech => (
          <span key={tech} style={{
            padding: '3px 9px', borderRadius: 5,
            background: 'var(--bg)',
            border: '1px solid var(--border)',
            color: 'var(--text-muted)',
            fontSize: '0.75rem', fontFamily: 'var(--font-mono)',
          }}>
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}
