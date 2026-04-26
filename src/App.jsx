import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact, { Footer } from './components/Contact';

export default function App() {
  return (
    <>
      <a
        href="#about"
        style={{
          position: 'fixed', top: -100, left: 16, zIndex: 9999,
          background: 'var(--accent)', color: '#0a0a0b',
          padding: '10px 18px', borderRadius: 8, fontWeight: 700,
          textDecoration: 'none', fontSize: '0.9rem',
        }}
        onFocus={e => e.currentTarget.style.top = '16px'}
        onBlur={e => e.currentTarget.style.top = '-100px'}
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
