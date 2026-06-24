import { useState } from 'react';
import { GlassCard } from '../ui/GlassCard';
import { Badge } from '../ui/Badge';
import { EXCEL_ROADMAP, SQL_ROADMAP } from '../../data/roadmaps';
import { TrackedTopic } from '../../types';

function buildTopics(): TrackedTopic[] {
  return [
    ...EXCEL_ROADMAP.flatMap((p) =>
      p.topics.map((t) => ({ ...t, phase: p.phase, track: 'Excel', color: p.color }))
    ),
    ...SQL_ROADMAP.flatMap((p) =>
      p.topics.map((t) => ({ ...t, phase: p.phase, track: 'SQL', color: p.color }))
    ),
  ];
}

interface CircleProgressProps {
  val: number;
  max: number;
  color: string;
  label: string;
}

function CircleProgress({ val, max, color, label }: CircleProgressProps) {
  const pct = max ? (val / max) * 100 : 0;
  const r = 38;
  const circ = 2 * Math.PI * r;
  const dash = (pct / 100) * circ;

  return (
    <div className="flex flex-col items-center gap-2">
      <svg width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r={r} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="8" />
        <circle
          cx="50"
          cy="50"
          r={r}
          fill="none"
          stroke={color}
          strokeWidth="8"
          strokeDasharray={`${dash} ${circ}`}
          strokeLinecap="round"
          transform="rotate(-90 50 50)"
          style={{
            filter: `drop-shadow(0 0 6px ${color})`,
            transition: 'stroke-dasharray 0.8s ease',
          }}
        />
        <text x="50" y="50" textAnchor="middle" dy="0.35em" fill="white" fontSize="18" fontWeight="800">
          {val}
        </text>
      </svg>
      <span className="text-white/50 text-xs text-center">{label}</span>
    </div>
  );
}

export function ProgressSection() {
  const [topics, setTopics] = useState<TrackedTopic[]>(buildTopics);
  const [filter, setFilter] = useState<'All' | 'Excel' | 'SQL'>('All');

  const toggle = (title: string) => {
    setTopics((prev) =>
      prev.map((t) => (t.title === title ? { ...t, done: !t.done } : t))
    );
  };

  const excelTopics = topics.filter((t) => t.track === 'Excel');
  const sqlTopics = topics.filter((t) => t.track === 'SQL');
  const excelDone = excelTopics.filter((t) => t.done).length;
  const sqlDone = sqlTopics.filter((t) => t.done).length;
  const totalDone = topics.filter((t) => t.done).length;

  const filtered =
    filter === 'All' ? topics : topics.filter((t) => t.track === filter);

  return (
    <section className="px-4 py-20 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <p className="text-white/40 text-sm uppercase tracking-widest font-semibold mb-3">Track Your Journey</p>
        <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">Progress Tracker</h2>
        <p className="text-white/50 text-lg max-w-xl mx-auto">
          Mark topics as complete and watch your skills grow.
        </p>
      </div>

      {/* Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        <GlassCard className="p-6 flex items-center gap-6">
          <CircleProgress val={excelDone} max={excelTopics.length} color="#22d3ee" label="Excel complete" />
          <div>
            <p className="text-white/40 text-xs mb-1 uppercase tracking-wider">Excel</p>
            <p className="text-2xl font-black text-white">{excelDone}/{excelTopics.length}</p>
            <p className="text-white/40 text-sm">topics done</p>
          </div>
        </GlassCard>

        <GlassCard className="p-6 flex items-center gap-6">
          <CircleProgress val={sqlDone} max={sqlTopics.length} color="#34d399" label="SQL complete" />
          <div>
            <p className="text-white/40 text-xs mb-1 uppercase tracking-wider">SQL</p>
            <p className="text-2xl font-black text-white">{sqlDone}/{sqlTopics.length}</p>
            <p className="text-white/40 text-sm">topics done</p>
          </div>
        </GlassCard>

        <GlassCard className="p-6 flex flex-col justify-center gap-2">
          <p className="text-white/40 text-xs uppercase tracking-wider">Overall Progress</p>
          <p className="text-3xl font-black text-white">{totalDone}/{topics.length}</p>
          <div className="w-full h-2 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
            <div
              className="h-full rounded-full transition-all duration-700"
              style={{
                width: `${(totalDone / topics.length) * 100}%`,
                background: 'linear-gradient(90deg, #22d3ee, #a78bfa)',
              }}
            />
          </div>
          <p className="text-white/40 text-sm">
            {Math.round((totalDone / topics.length) * 100)}% complete
          </p>
        </GlassCard>
      </div>

      {/* Filter */}
      <div className="flex gap-2 mb-6">
        {(['All', 'Excel', 'SQL'] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-xl text-sm font-medium border transition-all ${
              filter === f
                ? 'text-white border-white/20 bg-white/10'
                : 'text-white/40 border-white/8 hover:text-white/60'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Checklist */}
      <div className="grid sm:grid-cols-2 gap-3">
        {filtered.map((topic) => (
          <button
            key={topic.title}
            onClick={() => toggle(topic.title)}
            className="flex items-start gap-4 p-4 rounded-xl border text-left transition-all duration-200 hover:border-white/20"
            style={{
              background: topic.done ? `${topic.color}10` : 'rgba(255,255,255,0.03)',
              borderColor: topic.done ? `${topic.color}35` : 'rgba(255,255,255,0.08)',
            }}
          >
            <div
              className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5 transition-all"
              style={{
                background: topic.done ? topic.color : 'rgba(255,255,255,0.08)',
                border: topic.done ? 'none' : '1px solid rgba(255,255,255,0.15)',
              }}
            >
              {topic.done && (
                <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                  <path d="M1 5l3 3L11 1" stroke="#000" strokeWidth="2" strokeLinecap="round" />
                </svg>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="font-semibold text-white text-sm truncate">{topic.title}</span>
                <Badge color={topic.track.toLowerCase() as 'excel' | 'sql'}>{topic.track}</Badge>
              </div>
              <p className="text-white/35 text-xs">
                {topic.phase} · {topic.desc}
              </p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
