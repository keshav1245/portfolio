import { useEffect, useRef } from 'react';
import { ArrowDown, GitFork, Link2, Mail, FileText } from 'lucide-react';
import { profile } from '../data/resume';

const ROLES = [
  'Backend Engineer',
  'Microservices Architect',
  'Full-Stack Developer',
  'Data Science Graduate',
  'Production Systems Builder',
];

export default function Hero() {
  const roleRef = useRef(null);
  const idx = useRef(0);
  const charIdx = useRef(0);
  const deleting = useRef(false);
  const timeout = useRef(null);

  useEffect(() => {
    function type() {
      const word = ROLES[idx.current];
      if (!deleting.current) {
        charIdx.current++;
        if (roleRef.current) roleRef.current.textContent = word.slice(0, charIdx.current);
        if (charIdx.current === word.length) {
          deleting.current = true;
          timeout.current = setTimeout(type, 1800);
          return;
        }
      } else {
        charIdx.current--;
        if (roleRef.current) roleRef.current.textContent = word.slice(0, charIdx.current);
        if (charIdx.current === 0) {
          deleting.current = false;
          idx.current = (idx.current + 1) % ROLES.length;
        }
      }
      timeout.current = setTimeout(type, deleting.current ? 40 : 70);
    }
    timeout.current = setTimeout(type, 600);
    return () => clearTimeout(timeout.current);
  }, []);

  return (
    <section
      id="hero"
      aria-label="Hero — Introduction"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '120px 24px 80px',
        textAlign: 'center',
      }}
    >
      {/* Background grid */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: `
          linear-gradient(rgba(200,169,110,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(200,169,110,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }} />

      {/* Radial glow */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: '30%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600, height: 600,
        background: 'radial-gradient(circle, rgba(200,169,110,0.08) 0%, transparent 70%)',
        zIndex: 0,
        animation: 'float 6s ease-in-out infinite',
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 860 }}>
        {/* Badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '6px 16px', borderRadius: 40,
          border: '1px solid rgba(200,169,110,0.3)',
          background: 'rgba(200,169,110,0.06)',
          marginBottom: 32,
          animation: 'fadeUp 0.6s ease forwards',
        }}>
          <span style={{
            width: 7, height: 7, borderRadius: '50%',
            background: 'var(--green)',
            boxShadow: '0 0 0 2px rgba(74,222,128,0.3)',
            animation: 'pulse-ring 1.8s ease-out infinite',
            display: 'inline-block',
          }} />
          <span style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 500, letterSpacing: '0.08em' }}>
            OPEN TO OPPORTUNITIES · CANBERRA, AUSTRALIA
          </span>
        </div>

        {/* Name */}
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(3.2rem, 8vw, 6rem)',
          fontWeight: 900,
          lineHeight: 1.0,
          letterSpacing: '-0.03em',
          color: 'var(--text-primary)',
          marginBottom: 8,
          animation: 'fadeUp 0.7s ease 0.1s both',
        }}>
          Keshav
          <br />
          <span style={{
            background: 'linear-gradient(90deg, var(--accent), var(--accent-2), var(--accent)) no-repeat',
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'shimmer 3s linear infinite, fadeUp 0.7s ease 0.15s both',
          }}>
            Tangri
          </span>
        </h1>

        {/* Typewriter role */}
        <div style={{
          height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: 24,
          animation: 'fadeUp 0.7s ease 0.25s both',
        }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
            {'// '}
            <span ref={roleRef} style={{ color: 'var(--accent-2)' }} />
            <span style={{ animation: 'fadeIn 0.5s ease infinite alternate', color: 'var(--accent)' }}>|</span>
          </span>
        </div>

        {/* Summary */}
        <p style={{
          fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
          color: 'var(--text-secondary)',
          lineHeight: 1.75,
          maxWidth: 680,
          margin: '0 auto 40px',
          animation: 'fadeUp 0.7s ease 0.35s both',
          fontWeight: 300,
        }}>
          ANU Master of Computing graduate with Commendation · Vice Chancellor Scholarship Recipient ·
          Production grade services, enterprise integrations, and IoT & Data migration pipelines.
        </p>

        {/* CTAs */}
        <div style={{
          display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap',
          marginBottom: 48,
          animation: 'fadeUp 0.7s ease 0.45s both',
        }}>
          <a
            href="#experience"
            style={{
              padding: '13px 28px',
              background: 'var(--accent)',
              color: '#0a0a0b',
              borderRadius: 10,
              fontWeight: 700,
              fontSize: '0.95rem',
              textDecoration: 'none',
              transition: 'transform 0.2s, box-shadow 0.2s',
              boxShadow: '0 4px 20px rgba(200,169,110,0.3)',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(200,169,110,0.4)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(200,169,110,0.3)'; }}
          >
            View My Work
          </a>
          <a
            href="mailto:tangri57@gmail.com"
            style={{
              padding: '13px 28px',
              background: 'transparent',
              color: 'var(--text-primary)',
              borderRadius: 10,
              fontWeight: 600,
              fontSize: '0.95rem',
              textDecoration: 'none',
              border: '1px solid var(--border-hover)',
              transition: 'border-color 0.2s, background 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.background = 'var(--accent-glow)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-hover)'; e.currentTarget.style.background = 'transparent'; }}
          >
            <Mail size={15} style={{ marginRight: 8, verticalAlign: 'middle' }} />
            Get In Touch
          </a>
        </div>

        {/* Social links */}
        <div style={{
          display: 'flex', gap: 16, justifyContent: 'center',
          animation: 'fadeUp 0.7s ease 0.55s both',
        }}>
          {[
            { href: profile.github, icon: <GitFork size={18} />, label: 'GitHub' },
            { href: profile.linkedin, icon: <Link2 size={18} />, label: 'LinkedIn' },
            { href: profile.medium, icon: <FileText size={18} />, label: 'Medium' },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              style={{
                display: 'flex', alignItems: 'center', gap: 6,
                color: 'var(--text-muted)',
                textDecoration: 'none',
                fontSize: '0.85rem',
                transition: 'color 0.2s',
                padding: '6px 12px',
                borderRadius: 6,
                border: '1px solid transparent',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'transparent'; }}
            >
              {icon} {label}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        aria-label="Scroll to about section"
        style={{
          position: 'absolute', bottom: 36, left: '50%', transform: 'translateX(-50%)',
          color: 'var(--text-muted)',
          animation: 'float 2.5s ease-in-out infinite, fadeIn 1s ease 1s both',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
          textDecoration: 'none',
        }}
      >
        <span style={{ fontSize: '0.7rem', letterSpacing: '0.1em', color: 'var(--text-muted)' }}>SCROLL</span>
        <ArrowDown size={16} />
      </a>
    </section>
  );
}
