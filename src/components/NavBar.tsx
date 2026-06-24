import { useState, useEffect } from 'react';
import { NavSection } from '../types';

interface NavBarProps {
  active: NavSection;
  setActive: (s: NavSection) => void;
}

const SECTIONS: NavSection[] = ['Home', 'Roadmap', 'Quiz', 'Progress', 'Interview'];

export function NavBar({ active, setActive }: NavBarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(10,10,20,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <button
          className="flex items-center gap-2.5"
          onClick={() => setActive('Home')}
        >
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #22d3ee, #a78bfa)' }}
          >
            <span className="text-sm font-black text-white">XS</span>
          </div>
          <span className="font-bold text-white text-sm hidden sm:block leading-tight">
            Excel SQL<br />
            <span className="text-[10px] font-normal tracking-widest text-white/40 uppercase">Career Academy</span>
          </span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {SECTIONS.map((s) => (
            <button
              key={s}
              onClick={() => setActive(s)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                active === s
                  ? 'text-white bg-white/10'
                  : 'text-white/50 hover:text-white/80 hover:bg-white/5'
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center">
          <button
            className="px-4 py-2 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:opacity-80"
            style={{ background: 'linear-gradient(135deg, #22d3ee, #a78bfa)' }}
            onClick={() => setActive('Quiz')}
          >
            Take Quiz →
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white/70 hover:text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-current transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-4 pb-4 space-y-1"
          style={{ background: 'rgba(10,10,20,0.95)' }}
        >
          {SECTIONS.map((s) => (
            <button
              key={s}
              onClick={() => { setActive(s); setMenuOpen(false); }}
              className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 transition-all"
            >
              {s}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
