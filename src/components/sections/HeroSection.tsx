import { useState, useEffect } from 'react';
import { GlassCard } from '../ui/GlassCard';
import { NavSection } from '../../types';

interface HeroSectionProps {
  setActive: (s: NavSection) => void;
}

const TECH_STACK = ['Microsoft Excel', 'Google Sheets', 'SQL Server', 'PostgreSQL', 'MySQL', 'Power BI'];

export function HeroSection({ setActive }: HeroSectionProps) {
  const [counter, setCounter] = useState({ students: 0, lessons: 0, companies: 0 });

  useEffect(() => {
    const targets = { students: 12400, lessons: 340, companies: 280 };
    const duration = 1800;
    const steps = 60;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const p = step / steps;
      const ease = 1 - Math.pow(1 - p, 3);
      setCounter({
        students: Math.floor(targets.students * ease),
        lessons: Math.floor(targets.lessons * ease),
        companies: Math.floor(targets.companies * ease),
      });
      if (step >= steps) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { label: 'Students enrolled', value: counter.students.toLocaleString() + '+' },
    { label: 'Lessons & exercises', value: counter.lessons + '+' },
    { label: 'Hiring companies', value: counter.companies + '+' },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-16 overflow-hidden">
      {/* Ambient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #22d3ee 0%, transparent 70%)',
            top: '-10%', left: '-10%',
            filter: 'blur(80px)',
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, #a78bfa 0%, transparent 70%)',
            bottom: '5%', right: '-5%',
            filter: 'blur(80px)',
          }}
        />
        <div
          className="absolute w-[300px] h-[300px] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, #f472b6 0%, transparent 70%)',
            top: '40%', left: '50%',
            filter: 'blur(60px)',
          }}
        />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          Learn Excel & SQL · Land Your Dream Data Job
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-[0.95] tracking-tight mb-6">
          Master{' '}
          <span
            style={{
              background: 'linear-gradient(90deg, #22d3ee, #a78bfa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Excel & SQL
          </span>
          <br />
          <span className="text-white/60 text-4xl sm:text-5xl md:text-6xl font-light">
            from zero to hired.
          </span>
        </h1>

        <p className="text-white/50 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Structured roadmaps, real interview prep, and adaptive quizzes — everything you need to go from spreadsheet novice to data analyst.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={() => setActive('Roadmap')}
            className="px-8 py-4 rounded-2xl font-bold text-white text-base transition-all duration-200 hover:scale-105 hover:shadow-xl"
            style={{
              background: 'linear-gradient(135deg, #22d3ee, #a78bfa)',
              boxShadow: '0 4px 32px rgba(34,211,238,0.35)',
            }}
          >
            Start Learning →
          </button>
          <button
            onClick={() => setActive('Quiz')}
            className="px-8 py-4 rounded-2xl font-bold text-white/80 text-base border border-white/15 hover:border-white/30 hover:text-white hover:bg-white/5 transition-all duration-200"
          >
            Take Free Quiz
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto">
          {stats.map((stat) => (
            <GlassCard key={stat.label} className="p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl font-black text-white mb-1">{stat.value}</div>
              <div className="text-white/40 text-xs sm:text-sm">{stat.label}</div>
            </GlassCard>
          ))}
        </div>

        {/* Tech pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {TECH_STACK.map((t) => (
            <span
              key={t}
              className="px-3 py-1.5 rounded-lg text-xs text-white/40 border border-white/8"
              style={{ background: 'rgba(255,255,255,0.03)' }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
