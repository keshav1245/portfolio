import { useState, useEffect, useRef, useCallback } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { SectionLabel, headingStyle } from './About';
import { ChevronLeft, ChevronRight, Quote, Link2, Pause, Play } from 'lucide-react';

export const testimonials = [
  {
    id: 1,
    name: 'Binny Mathews',
    title: 'CEO, ProjectPro',
    subtitle: 'Sequoia Capital & Y Combinator backed · Managed Keshav directly',
    date: 'January 27, 2024',
    relationship: 'Direct Manager · 2.5 years',
    avatarInitials: 'BM',
    avatarColor: '#1e40af',
    linkedinUrl: 'https://linkedin.com',
    quote: [
      'I have had an amazing experience working with Keshav over the last 2.5 years at ProjectPro. When he joined us from university, it was already clear that he deeply cared about his work, team, and learning. He would constantly go out of his way to learn from others, push the boundaries of his work, and unselfishly help his team members.',
      'Once he started working on complex projects, his superior problem-solving and project-management skills became evident. Recently he was given ownership over a large enterprise customer and the role involved completely different skills than he was used to. He enthusiastically took it up and executed on it with perfection. I would love to have him on my team anytime.',
    ],
    highlight: 'I would love to have him on my team anytime.',
  },
  {
    id: 2,
    name: 'Omair Aasim',
    title: 'Co-Founder, ProjectPro',
    subtitle: 'Backed by Sequoia Capital & Y Combinator · Managed Keshav directly',
    date: 'January 14, 2024',
    relationship: 'Direct Manager · 3 years',
    avatarInitials: 'OA',
    avatarColor: '#065f46',
    linkedinUrl: 'https://linkedin.com',
    quote: [
      "I had the privilege of working closely with Keshav for three years at our startup, where he joined as a software engineer and quickly became an indispensable part of our team. Keshav is not only one of the smartest engineers I've had the pleasure of working with, but he also possesses a unique ability to adapt and excel in a fast-paced startup environment where wearing multiple hats is the norm.",
      "Keshav's contributions went far beyond coding. He played a pivotal role in evaluating and selecting the right software tools for our needs, and he had a natural talent for engaging with customers and understanding their requirements. One of Keshav's most valuable traits is his willingness to express his opinions and question the status quo. In a small startup, this quality is a game-changer, as it leads to innovative solutions and better decision-making.",
      "As our team expanded, Keshav's leadership qualities became increasingly evident. He took on the role of a team lead, conducting code reviews and actively participating in brainstorming sessions. When we faced a challenge with the departure of a key project manager, Keshav stepped up admirably. He assumed the role of an enterprise account manager, liaising with Fortune 500 companies' business teams and successfully leading a team of developers to meet quality standards and deadlines.",
      "I have no doubt that he will continue to shine in his future endeavors. Keshav's combination of technical expertise, problem-solving skills, and leadership abilities make him a standout professional. I highly recommend him to anyone looking for a top-tier engineer and a true asset to their team.",
    ],
    highlight: "Keshav is not only one of the smartest engineers I've had the pleasure of working with, but...",
  },
  {
    id: 3,
    name: 'Srikant Srinivasan',
    title: 'Professor & Dean of Academic Affairs, IIT Mandi',
    subtitle: 'Indian Institute of Technology · Managed Keshav directly',
    date: 'February 21, 2024',
    relationship: 'Direct Supervisor · IIT Internship',
    avatarInitials: 'SS',
    avatarColor: '#92400e',
    linkedinUrl: 'https://linkedin.com',
    quote: [
      'Keshav Tangri completed multiple internships under my supervision at the Indian Institute of Technology Mandi. He played a crucial role in developing data pipelines and automating data acquisition for field-based IoT implementations, demonstrating strong technical rigor and unwavering dedication throughout the process.',
      'He is a good team player, has a strong sense of ethics, is proactive in communication, and is self-driven to put in a lot of extra hours. I have full confidence in his potential and enthusiastically endorse his candidature to any research or development group.',
    ],
    highlight: 'I have full confidence in his potential and enthusiastically endorse his candidature to any research or development group.',
  },
  {
    id: 4,
    name: 'Steven Gong',
    title: 'PhD Researcher, University of Sydney',
    subtitle: 'PhD in Computer Systems & Architecture @ USYD · M.S. CS @ ANU · Same team',
    date: 'May 22, 2024',
    relationship: 'Teammate · ANU',
    avatarInitials: 'SG',
    avatarColor: '#1d4ed8',
    linkedinUrl: 'https://linkedin.com',
    quote: [
      'I am pleased to recommend Keshav, with whom I collaborated on the team project of COMP6710 (Structured Programming) this semester. Keshav demonstrated exceptional leadership, communication, and learning abilities. He is a proactive, punctual team member who fosters open discussion and collaboration.',
      "His CS background and problem-solving skills were invaluable in overcoming project challenges. His effective planning of the team's progress and excellent presentation skills made our project stand out. I highly recommend Keshav for any future endeavors.",
    ],
    highlight: 'His CS background and problem-solving skills were invaluable in overcoming project challenges.',
  },
  {
    id: 5,
    name: 'Abhijeet Baruah',
    title: 'SDE at Gemini Solutions',
    subtitle: 'Studied together · Peer collaborator',
    date: 'November 25, 2025',
    relationship: 'Peer · University',
    avatarInitials: 'AB',
    avatarColor: '#065f46',
    linkedinUrl: 'https://linkedin.com',
    quote: [
      'I had the opportunity of working with Keshav in multiple projects during our graduation. He is a team person and takes the ownership of each module that he builds. He is quick in understanding the problem statement and works very hard towards solving it.',
      'He is one of the most smartest and hardworking people that I have ever worked with. He is good in developing back-end solutions and keeps an open mind to feedbacks. I wish him all the best.',
    ],
    highlight: 'He is one of the most smartest and hardworking people that I have ever worked with.',
  },
];

const INTERVAL_MS = 14000;

export default function Testimonials() {
  const { ref, visible } = useIntersectionObserver();
  const [active, setActive]       = useState(0);
  const [animating, setAnimating] = useState(false);
  const [dir, setDir]             = useState(1);
  const [playing, setPlaying]     = useState(true);
  const [hovered, setHovered]     = useState(false);
  const [progress, setProgress]   = useState(0);

  const autoRef     = useRef(null);
  const progRef     = useRef(null);
  const startedAt   = useRef(Date.now());
  const accumulated = useRef(0);

  // ── navigation ─────────────────────────────────────────────────────────────
  const goTo = useCallback((idx, direction = 1) => {
    if (animating) return;
    setDir(direction);
    setAnimating(true);
    setTimeout(() => { setActive(idx); setAnimating(false); }, 300);
    // reset progress
    accumulated.current = 0;
    startedAt.current = Date.now();
    setProgress(0);
  }, [animating]);

  const next = useCallback(() => goTo((active + 1) % testimonials.length, 1),  [active, goTo]);
  const prev = useCallback(() => goTo((active - 1 + testimonials.length) % testimonials.length, -1), [active, goTo]);

  // ── progress bar tick ───────────────────────────────────────────────────────
  useEffect(() => {
    progRef.current = setInterval(() => {
      if (!playing || hovered) return;
      const elapsed = accumulated.current + (Date.now() - startedAt.current);
      setProgress(Math.min(elapsed / INTERVAL_MS, 1));
    }, 80);
    return () => clearInterval(progRef.current);
  }, [playing, hovered]);

  // ── auto-advance ────────────────────────────────────────────────────────────
  useEffect(() => {
    if (!playing || hovered) {
      clearInterval(autoRef.current);
      accumulated.current += Date.now() - startedAt.current;
      return;
    }
    startedAt.current = Date.now();
    const remaining = INTERVAL_MS - accumulated.current;
    autoRef.current = setTimeout(() => {
      next();
      // after first partial, use full intervals
      autoRef.current = setInterval(next, INTERVAL_MS);
    }, Math.max(remaining, 100));
    return () => clearInterval(autoRef.current);
  }, [playing, hovered, next]);

  const togglePlay = () => {
    if (playing) {
      accumulated.current += Date.now() - startedAt.current;
    } else {
      startedAt.current = Date.now();
    }
    setPlaying(p => !p);
  };

  const manualGoTo = (idx, direction) => {
    goTo(idx, direction);
    // restart timing
    accumulated.current = 0;
    startedAt.current = Date.now();
    setProgress(0);
  };

  const t = testimonials[active];
  const isPlaying = playing && !hovered;

  return (
    <section
      id="testimonials"
      ref={ref}
      aria-labelledby="testimonials-heading"
      style={{
        padding: '100px 24px',
        background: 'var(--bg)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(32px)',
        transition: 'opacity 0.7s ease, transform 0.7s ease',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* ── Section header ─────────────────────────────────────────────── */}
        <SectionLabel>Testimonials</SectionLabel>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16, marginBottom: 36 }}>
          <h2 id="testimonials-heading" style={headingStyle}>
            What Leaders <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Say</em>
          </h2>
          <a
            href="https://linkedin.com/in/keshavtangri"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View all recommendations on LinkedIn"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 7,
              padding: '8px 16px',
              border: '1px solid rgba(96,165,250,0.3)',
              borderRadius: 8, color: '#60a5fa',
              fontSize: '0.82rem', fontWeight: 500,
              textDecoration: 'none',
              background: 'rgba(96,165,250,0.05)',
              transition: 'border-color 0.2s, background 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(96,165,250,0.6)'; e.currentTarget.style.background = 'rgba(96,165,250,0.1)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(96,165,250,0.3)'; e.currentTarget.style.background = 'rgba(96,165,250,0.05)'; }}
          >
            <Link2 size={14} /> View on LinkedIn
          </a>
        </div>

        {/* ── NAME STRIP — above the card ────────────────────────────────── */}
        <div
          role="tablist"
          aria-label="Select recommender"
          style={{
            display: 'flex', gap: 10, marginBottom: 16,
            overflowX: 'auto', paddingBottom: 2,
          }}
        >
          {testimonials.map((tm, i) => (
            <button
              key={tm.id}
              role="tab"
              aria-selected={i === active}
              aria-label={`${tm.name}, ${tm.title}`}
              onClick={() => manualGoTo(i, i > active ? 1 : -1)}
              style={{
                flexShrink: 0,
                display: 'flex', alignItems: 'center', gap: 9,
                padding: '9px 15px',
                borderRadius: 10,
                border: `1px solid ${i === active ? 'rgba(200,169,110,0.45)' : 'var(--border)'}`,
                background: i === active ? 'var(--accent-glow)' : 'var(--surface)',
                cursor: 'pointer',
                transition: 'border-color 0.2s, background 0.2s',
                outline: 'none',
              }}
              onMouseEnter={e => { if (i !== active) { e.currentTarget.style.borderColor = 'var(--border-hover)'; e.currentTarget.style.background = 'var(--bg-3)'; }}}
              onMouseLeave={e => { if (i !== active) { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--surface)'; }}}
            >
              {/* avatar dot */}
              <div style={{
                width: 28, height: 28, borderRadius: '50%',
                background: tm.avatarColor,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.65rem', fontWeight: 700, color: '#fff', flexShrink: 0,
              }}>
                {tm.avatarInitials}
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 600, color: i === active ? 'var(--accent)' : 'var(--text-primary)', whiteSpace: 'nowrap' }}>
                  {tm.name}
                </div>
                <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>
                  {tm.title}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* ── MAIN CARD ──────────────────────────────────────────────────── */}
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: 20,
            position: 'relative',
            overflow: 'hidden',
            opacity: animating ? 0 : 1,
            transform: animating ? `translateX(${dir * 36}px)` : 'translateX(0)',
            transition: 'opacity 0.3s ease, transform 0.3s ease',
          }}
          role="article"
          aria-live="polite"
          aria-label={`Testimonial from ${t.name}`}
        >
          {/* Progress bar — runs along the top */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: 3,
            background: 'var(--border)',
            zIndex: 2,
          }}>
            <div style={{
              height: '100%',
              width: `${progress * 100}%`,
              background: `linear-gradient(90deg, ${t.avatarColor}, var(--accent))`,
              transition: isPlaying ? 'width 0.08s linear' : 'none',
            }} />
          </div>

          {/* Decorative quote glyph */}
          <div aria-hidden="true" style={{
            position: 'absolute', top: 16, right: 28,
            color: 'rgba(200,169,110,0.07)',
            fontSize: '8rem', fontFamily: 'var(--font-display)',
            fontWeight: 900, lineHeight: 1,
            userSelect: 'none', pointerEvents: 'none',
          }}>
            "
          </div>

          {/* Card body */}
          <div style={{ padding: 'clamp(24px, 4vw, 44px)' }}>

            {/* Play / pause + counter — top-right of card */}
            <div style={{
              position: 'absolute', top: 20, right: 20,
              display: 'flex', alignItems: 'center', gap: 8, zIndex: 3,
            }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                <span style={{ color: 'var(--accent)', fontWeight: 600 }}>{active + 1}</span>
                /{testimonials.length}
              </span>
              
              {/* "Paused on hover" pill — visible only when hovering */}
              {hovered && playing && (
                <span style={{
                  padding: '3px 9px', borderRadius: 20,
                  background: 'rgba(200,169,110,0.1)',
                  border: '1px solid rgba(200,169,110,0.25)',
                  color: 'var(--accent)', fontSize: '0.68rem', fontWeight: 500,
                  whiteSpace: 'nowrap',
                }}>
                  Paused
                </span>
              )}
            </div>

            {/* Opening quote icon */}
            <Quote size={26} aria-hidden="true" style={{ color: 'var(--accent)', marginBottom: 20, opacity: 0.85 }} />

            {/* Pull-quote */}
            <blockquote
              cite={t.linkedinUrl}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.05rem, 2.2vw, 1.35rem)',
                fontWeight: 700, fontStyle: 'italic',
                color: 'var(--text-primary)',
                lineHeight: 1.55, marginBottom: 24,
                borderLeft: '3px solid var(--accent)',
                paddingLeft: 18, maxWidth: 740,
              }}
            >
              "{t.highlight}"
            </blockquote>

            {/* Full text */}
            <div style={{ marginBottom: 32 }}>
              {t.quote.map((para, i) => (
                <p key={i} style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.96rem', lineHeight: 1.85, fontWeight: 300,
                  marginBottom: i < t.quote.length - 1 ? 14 : 0,
                }}>
                  {para}
                </p>
              ))}
            </div>

            {/* Author row */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: 16,
              paddingTop: 24, borderTop: '1px solid var(--border)',
              flexWrap: 'wrap',
            }}>
              <div style={{
                width: 48, height: 48, borderRadius: '50%',
                background: t.avatarColor,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 700, fontSize: '0.9rem', color: '#fff', flexShrink: 0,
                boxShadow: `0 0 0 3px var(--surface), 0 0 0 4px ${t.avatarColor}55`,
                fontFamily: 'var(--font-body)',
              }}>
                {t.avatarInitials}
              </div>

              <div style={{ flex: 1, minWidth: 160 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                  <strong style={{ color: 'var(--text-primary)', fontSize: '0.97rem', fontWeight: 700 }}>{t.name}</strong>
                  <a href={t.linkedinUrl} target="_blank" rel="noopener noreferrer"
                    aria-label={`${t.name}'s LinkedIn`}
                    style={{ color: '#60a5fa', display: 'flex' }}>
                    <Link2 size={13} />
                  </a>
                </div>
                <div style={{ color: 'var(--accent)', fontSize: '0.85rem', fontWeight: 600, marginBottom: 2 }}>{t.title}</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', lineHeight: 1.4 }}>{t.subtitle}</div>
              </div>

              <div style={{ textAlign: 'right', flexShrink: 0 }}>
                <div style={{
                  padding: '3px 10px', borderRadius: 20,
                  background: 'var(--bg-3)', border: '1px solid var(--border)',
                  color: 'var(--text-muted)', fontSize: '0.72rem',
                  marginBottom: 5, display: 'inline-block',
                }}>
                  {t.relationship}
                </div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.72rem' }}>{t.date}</div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Arrow nav — below card ─────────────────────────────────────── */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, marginTop: 16 }}>
          {[
            { fn: () => { prev(); manualGoTo((active - 1 + testimonials.length) % testimonials.length, -1); }, icon: <ChevronLeft size={18} />, label: 'Previous testimonial' },
            { fn: () => { manualGoTo((active + 1) % testimonials.length, 1); }, icon: <ChevronRight size={18} />, label: 'Next testimonial' },
          ].map(({ fn, icon, label }) => (
            <button
              key={label}
              onClick={fn}
              aria-label={label}
              style={{
                width: 38, height: 38, borderRadius: 9,
                border: '1px solid var(--border-hover)',
                background: 'var(--surface)',
                color: 'var(--text-secondary)',
                cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'border-color 0.2s, color 0.2s, background 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.background = 'var(--accent-glow)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-hover)'; e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.background = 'var(--surface)'; }}
            >
              {icon}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
