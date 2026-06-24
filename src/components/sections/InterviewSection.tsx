import { useState } from 'react';
import { GlassCard } from '../ui/GlassCard';
import { Badge } from '../ui/Badge';
import { INTERVIEW_QS } from '../../data/interview';

export function InterviewSection() {
  const [open, setOpen] = useState<number | null>(null);
  const [filter, setFilter] = useState<'All' | 'Excel' | 'SQL'>('All');

  const filtered =
    filter === 'All' ? INTERVIEW_QS : INTERVIEW_QS.filter((q) => q.cat === filter);

  return (
    <section className="px-4 py-20 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <p className="text-white/40 text-sm uppercase tracking-widest font-semibold mb-3">Ace the Interview</p>
        <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">Interview Questions</h2>
        <p className="text-white/50 text-lg max-w-xl mx-auto">
          Real questions asked by top companies. Click to reveal model answers.
        </p>
      </div>

      {/* Filter */}
      <div className="flex gap-2 mb-8 justify-center">
        {(['All', 'Excel', 'SQL'] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-5 py-2 rounded-xl text-sm font-medium border transition-all ${
              filter === f
                ? 'text-white border-white/20 bg-white/10'
                : 'text-white/40 border-white/8 hover:text-white/60'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Accordion */}
      <div className="space-y-3">
        {filtered.map((item, i) => (
          <GlassCard key={item.q} className="overflow-hidden">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center gap-4 p-5 text-left hover:bg-white/3 transition-all"
            >
              <span className="text-2xl">{item.icon}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <Badge color={item.cat.toLowerCase() as 'excel' | 'sql'}>{item.cat}</Badge>
                </div>
                <p className="font-semibold text-white text-sm sm:text-base">{item.q}</p>
              </div>
              <span
                className="text-white/40 flex-shrink-0 w-6 h-6 rounded-full border border-white/15 flex items-center justify-center text-xs transition-transform duration-200"
                style={{ transform: open === i ? 'rotate(180deg)' : 'none' }}
              >
                ↓
              </span>
            </button>
            {open === i && (
              <div className="px-5 pb-5 pt-1">
                <div className="rounded-xl p-4 border border-white/8 bg-white/3">
                  <p className="text-white/70 text-sm leading-relaxed">{item.a}</p>
                </div>
              </div>
            )}
          </GlassCard>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-12">
        <GlassCard className="p-8 sm:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">Ready to get hired?</h3>
          <p className="text-white/50 mb-6">
            Complete your roadmap, ace the quiz, and walk into interviews with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              className="px-7 py-3.5 rounded-2xl font-bold text-white text-sm transition-all hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #22d3ee, #a78bfa)',
                boxShadow: '0 4px 20px rgba(34,211,238,0.25)',
              }}
            >
              View Full Roadmap
            </button>
            <button className="px-7 py-3.5 rounded-2xl font-bold text-white/70 text-sm border border-white/15 hover:text-white hover:bg-white/5 transition-all">
              Practice More Quizzes
            </button>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
