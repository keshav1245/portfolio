import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { achievements } from '../data/resume';
import { profile } from '../data/resume';
import { MapPin, GraduationCap, Briefcase, Award } from 'lucide-react';

const stats = [
  { icon: <Briefcase size={18} />, value: '3+', label: 'Years Production Experience' },
  { icon: <GraduationCap size={18} />, value: '6.64/7', label: 'ANU GPA with Commendation' },
  { icon: <Award size={18} />, value: '90K+', label: 'Users on Shipped Products' },
  { icon: <MapPin size={18} />, value: 'Australian Capital Territory', label: 'Canberra, Australia' },
];

export default function About() {
  const { ref, visible } = useIntersectionObserver();

  return (
    <section
      id="about"
      ref={ref}
      aria-labelledby="about-heading"
      style={{
        padding: '100px 24px',
        maxWidth: 1200,
        margin: '0 auto',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(32px)',
        transition: 'opacity 0.7s ease, transform 0.7s ease',
      }}
    >
      <SectionLabel>About</SectionLabel>
      <h2 id="about-heading" style={headingStyle}>
        Engineer. Scholar. <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Builder.</em>
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 48,
        marginTop: 48,
        alignItems: 'start',
      }}>
        {/* Text column */}
        <div>
          <p style={{ ...bodyStyle, marginBottom: 20 }}>
            I'm <strong style={{ color: 'var(--text-primary)' }}>Keshav Tangri</strong>, a.k.a 
            <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Kesh</em> - 
            a software engineer who thrives at the intersection of research and industry. 
            I currently build production microservices at Australian National University, turning 
            complex scientific workflows into reliable, scalable backend systems.
          </p>
          <p style={{ ...bodyStyle, marginBottom: 20 }}>
            Before ANU, I spent nearly three years as a Senior Software Engineer at a Young Product based company, 
            where I led delivery for a <strong style={{ color: 'var(--text-primary)' }}>top-3 US pharmaceutical client</strong>,
            managing a <span style={{ color: 'var(--text-primary)' }}>15-person cross-functional team</span> and 
            shipping a platform used by over 90,000 users. I've integrated payment gateways, built video 
            streaming infrastructure, and wired up CRM platforms across multiple timezones.
          </p>
          <p style={bodyStyle}>
            I graduated with Commendation from ANU's Master of Computing (Data Science), holding a Vice 
            Chancellor's International Scholarship for 50%. I care deeply about code quality, system design, and 
            building things that actually get used.
          </p>

          {/* Quick facts */}
          <div style={{ marginTop: 32, display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {[
              'FastAPI · MongoDB · ReactJS',
              'Docker & Microservices',
              'OIDC & IAM',
              'Python & ML Pipelines',
              'Canberra, AU · Open to Relocation',
            ].map(tag => (
              <span key={tag} style={{
                padding: '5px 12px',
                borderRadius: 20,
                border: '1px solid var(--border)',
                color: 'var(--text-secondary)',
                fontSize: '0.8rem',
                background: 'var(--surface)',
              }}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Stats column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {stats.map(({ icon, value, label }) => (
            <div
              key={label}
              style={{
                display: 'flex', alignItems: 'center', gap: 16,
                padding: '20px 24px',
                background: 'var(--surface)',
                borderRadius: 12,
                border: '1px solid var(--border)',
                transition: 'border-color 0.2s, background 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(200,169,110,0.3)'; e.currentTarget.style.background = 'var(--bg-3)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--surface)'; }}
            >
              <div style={{ color: 'var(--accent)', flexShrink: 0 }}>{icon}</div>
              <div>
                <div style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>{value}</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{label}</div>
              </div>
            </div>
          ))}

          {/* Scores */}
          <div style={{
            padding: '20px 24px',
            background: 'var(--surface)',
            borderRadius: 12,
            border: '1px solid var(--border)',
          }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--accent)', letterSpacing: '0.1em', marginBottom: 12, fontWeight: 600 }}>
              GLOBALLY RECOGNISED SCORES
            </div>
            {achievements.filter(a => ['IELTS', 'GRE'].includes(a.label)).map(a => (
              <div key={a.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8 }}>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{a.label}</span>
                <span style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.95rem' }}>{a.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionLabel({ children }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 16,
    }}>
      <div style={{ width: 28, height: 1.5, background: 'var(--accent)' }} />
      <span style={{
        fontSize: '0.72rem', fontWeight: 600,
        color: 'var(--accent)', letterSpacing: '0.14em',
        textTransform: 'uppercase', fontFamily: 'var(--font-mono)',
      }}>
        {children}
      </span>
    </div>
  );
}

export const headingStyle = {
  fontFamily: 'var(--font-display)',
  fontSize: 'clamp(2rem, 4vw, 2.8rem)',
  fontWeight: 700,
  lineHeight: 1.15,
  letterSpacing: '-0.02em',
  color: 'var(--text-primary)',
};

export const bodyStyle = {
  fontSize: '1rem',
  color: 'var(--text-secondary)',
  lineHeight: 1.8,
  fontWeight: 300,
};
