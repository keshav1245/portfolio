import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = navLinks.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: scrolled ? '12px 0' : '20px 0',
        background: scrolled ? 'rgba(10,10,11,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a
          href="#hero"
          aria-label="Keshav Tangri — Home"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.3rem',
            fontWeight: 700,
            color: 'var(--text-primary)',
            textDecoration: 'none',
            letterSpacing: '-0.02em',
          }}
        >
          <span style={{ color: 'var(--accent)' }}>K</span>esh
        </a>

        {/* Desktop nav */}
        <ul
          role="list"
          style={{ display: 'flex', gap: 4, listStyle: 'none', alignItems: 'center' }}
          className="desktop-nav"
        >
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                aria-current={active === href.slice(1) ? 'page' : undefined}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: active === href.slice(1) ? 'var(--accent)' : 'var(--text-secondary)',
                  textDecoration: 'none',
                  padding: '6px 12px',
                  borderRadius: 6,
                  transition: 'color 0.2s, background 0.2s',
                  letterSpacing: '0.02em',
                }}
                onMouseEnter={e => { e.target.style.color = 'var(--text-primary)'; e.target.style.background = 'rgba(255,255,255,0.05)'; }}
                onMouseLeave={e => { e.target.style.color = active === href.slice(1) ? 'var(--accent)' : 'var(--text-secondary)'; e.target.style.background = 'transparent'; }}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="mailto:tangri57@gmail.com"
              style={{
                marginLeft: 8,
                padding: '8px 18px',
                borderRadius: 8,
                background: 'var(--accent)',
                color: '#0a0a0b',
                fontWeight: 600,
                fontSize: '0.85rem',
                textDecoration: 'none',
                transition: 'opacity 0.2s, transform 0.2s',
                display: 'inline-block',
              }}
              onMouseEnter={e => { e.target.style.opacity = '0.85'; e.target.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={e => { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)'; }}
            >
              Hire Me
            </a>
          </li>
        </ul>

        {/* Mobile burger */}
        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            color: 'var(--text-primary)', padding: 4, display: 'none',
          }}
          className="burger"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            background: 'var(--bg-2)',
            borderTop: '1px solid var(--border)',
            padding: '16px 24px 24px',
          }}
        >
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              style={{
                display: 'block', padding: '12px 0',
                color: 'var(--text-secondary)', textDecoration: 'none',
                fontSize: '1rem', fontWeight: 500,
                borderBottom: '1px solid var(--border)',
              }}
            >
              {label}
            </a>
          ))}
          <a
            href="mailto:tangri57@gmail.com"
            style={{
              display: 'block', marginTop: 16,
              padding: '12px 0', textAlign: 'center',
              background: 'var(--accent)', color: '#0a0a0b',
              borderRadius: 8, fontWeight: 700, textDecoration: 'none',
            }}
          >
            Hire Me
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .burger { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
