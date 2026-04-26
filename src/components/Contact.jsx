import { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { SectionLabel, headingStyle } from './About';
import { profile } from '../data/resume';
import { Mail, Phone, MapPin, GitFork, Link2, FileText, Send, Copy, CheckCheck } from 'lucide-react';

export default function Contact() {
  const { ref, visible } = useIntersectionObserver();
  const [copied, setCopied] = useState('');

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email).then(() => {
      setCopied('email');
      setTimeout(() => setCopied(''), 2000);
    });
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(profile.phone).then(() => {
      setCopied('phone');
      setTimeout(() => setCopied(''), 2000);
    });
  };

  return (
    <section
      id="contact"
      ref={ref}
      aria-labelledby="contact-heading"
      style={{
        padding: '100px 24px 120px',
        background: 'var(--bg-2)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(32px)',
        transition: 'opacity 0.7s ease, transform 0.7s ease',
      }}
    >
      <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
        <SectionLabel>Contact</SectionLabel>
        <h2 id="contact-heading" style={{ ...headingStyle, fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', marginBottom: 16 }}>
          Let's Build Something <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Great</em>
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: 560, margin: '0 auto 48px', fontWeight: 300 }}>
          I'm actively looking for backend and full-stack engineering roles in Australia - 
          remote-friendly or based in ACT or Regional Australia. If you're building something ambitious, I'd love to hear about it.
        </p>

        {/* Primary CTA */}
        <a
          href="mailto:tangri57@gmail.com"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '16px 36px',
            background: 'var(--accent)',
            color: '#0a0a0b',
            borderRadius: 12,
            fontWeight: 700,
            fontSize: '1rem',
            textDecoration: 'none',
            marginBottom: 48,
            boxShadow: '0 4px 24px rgba(200,169,110,0.35)',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(200,169,110,0.45)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(200,169,110,0.35)'; }}
        >
          <Send size={18} />
          Send Me an Email
        </a>

        {/* Contact cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, marginBottom: 48 }}>
          {[
            {
              icon: <Mail size={18} />, label: 'Email', value: profile.email,
              action: copyEmail, copyKey: 'email', href: `mailto:${profile.email}`,
            },
            {
              icon: <Phone size={18} />, label: 'Phone', value: profile.phone,
              action: copyPhone, copyKey: 'phone', href: `tel:${profile.phone}`,
            },
            {
              icon: <MapPin size={18} />, label: 'Location', value: profile.location,
            },
          ].map(({ icon, label, value, action, copyKey, href }) => (
            <div
              key={label}
              style={{
                padding: '20px',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 12,
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(200,169,110,0.25)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                <div style={{ color: 'var(--accent)' }}>{icon}</div>
                {action && (
                  <button
                    onClick={action}
                    aria-label={`Copy ${label}`}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: copied === copyKey ? 'var(--green)' : 'var(--text-muted)', padding: 4 }}
                  >
                    {copied === copyKey ? <CheckCheck size={14} /> : <Copy size={14} />}
                  </button>
                )}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{label}</div>
              {href ? (
                <a href={href} style={{ color: 'var(--text-primary)', fontSize: '0.9rem', textDecoration: 'none', fontWeight: 500 }}>{value}</a>
              ) : (
                <div style={{ color: 'var(--text-primary)', fontSize: '0.9rem', fontWeight: 500 }}>{value}</div>
              )}
            </div>
          ))}
        </div>

        {/* Social links */}
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          {[
            { href: profile.github, icon: <GitFork size={20} />, label: 'GitHub', color: '#e2e8f0' },
            { href: profile.linkedin, icon: <Link2 size={20} />, label: 'LinkedIn', color: '#60a5fa' },
            { href: profile.medium, icon: <FileText size={20} />, label: 'Medium', color: '#94a3b8' },
          ].map(({ href, icon, label, color }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', gap: 8,
                padding: '10px 20px',
                border: '1px solid var(--border)',
                borderRadius: 10,
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                fontSize: '0.9rem',
                transition: 'border-color 0.2s, color 0.2s, background 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = color; e.currentTarget.style.color = color; e.currentTarget.style.background = `${color}0d`; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.background = 'transparent'; }}
            >
              {icon} {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer
      role="contentinfo"
      style={{
        background: 'var(--bg)',
        borderTop: '1px solid var(--border)',
        padding: '28px 24px',
        textAlign: 'center',
      }}
    >
      <p style={{ color: 'var(--text-muted)', fontSize: '0.83rem' }}>
        © {new Date().getFullYear()} Keshav Tangri. Designed & developed with intention.
        <span style={{ color: 'var(--border)', margin: '0 12px' }}>·</span>
        <a href="#hero" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Back to top ↑</a>
      </p>
    </footer>
  );
}
