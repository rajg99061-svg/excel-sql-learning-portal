import { useState } from 'react';
import { GlassCard } from '../ui/GlassCard';
import { EXCEL_ROADMAP, SQL_ROADMAP } from '../../data/roadmaps';

export function RoadmapSection() {
  const [tab, setTab] = useState<'excel' | 'sql'>('excel');
  const data = tab === 'excel' ? EXCEL_ROADMAP : SQL_ROADMAP;

  return (
    <section className="px-4 py-20 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <p className="text-white/40 text-sm uppercase tracking-widest font-semibold mb-3">Structured Learning</p>
        <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">Your Learning Roadmap</h2>
        <p className="text-white/50 text-lg max-w-xl mx-auto">
          Follow a proven path from foundations to expert-level skills, one milestone at a time.
        </p>
      </div>

      {/* Tab toggle */}
      <div className="flex justify-center mb-10">
        <div
          className="flex rounded-2xl p-1 border border-white/10"
          style={{ background: 'rgba(255,255,255,0.04)' }}
        >
          {(['excel', 'sql'] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-8 py-2.5 rounded-xl font-bold text-sm transition-all duration-200 ${
                tab === t ? 'text-white' : 'text-white/40 hover:text-white/60'
              }`}
              style={
                tab === t
                  ? {
                      background: 'rgba(255,255,255,0.1)',
                      border: '1px solid rgba(255,255,255,0.15)',
                    }
                  : {}
              }
            >
              {t === 'excel' ? '📊 Excel' : '🗄️ SQL'}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        {data.map((phase, pi) => (
          <GlassCard key={phase.phase} className="p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-3 h-3 rounded-full"
                style={{ background: phase.color, boxShadow: `0 0 12px ${phase.color}` }}
              />
              <h3 className="text-lg font-bold text-white">{phase.phase}</h3>
              <div className="flex-1 h-px bg-white/8" />
              <span className="text-xs text-white/30 font-medium">Phase {pi + 1}</span>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {phase.topics.map((topic) => (
                <div
                  key={topic.title}
                  className="rounded-xl p-4 border transition-all duration-200 hover:border-white/20 cursor-pointer group"
                  style={{
                    background: topic.done ? `${phase.color}15` : 'rgba(255,255,255,0.03)',
                    borderColor: topic.done ? `${phase.color}40` : 'rgba(255,255,255,0.08)',
                  }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-white text-sm group-hover:text-white/90">{topic.title}</h4>
                    {topic.done ? (
                      <span
                        className="ml-2 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: phase.color }}
                      >
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                          <path d="M1 4l2.5 2.5L9 1" stroke="#000" strokeWidth="1.8" strokeLinecap="round" />
                        </svg>
                      </span>
                    ) : (
                      <span className="ml-2 mt-0.5 w-5 h-5 rounded-full border border-white/20 flex-shrink-0" />
                    )}
                  </div>
                  <p className="text-white/40 text-xs leading-relaxed">{topic.desc}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
