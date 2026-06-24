import { useState } from 'react';
import { GlassCard } from '../ui/GlassCard';
import { Badge } from '../ui/Badge';
import { QUIZ_QUESTIONS } from '../../data/quiz';

interface AnswerRecord {
  correct: boolean;
  chosen: number;
  answer: number;
}

export function QuizSection() {
  const [qi, setQi] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);

  const q = QUIZ_QUESTIONS[qi];
  const total = QUIZ_QUESTIONS.length;

  const choose = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    const correct = idx === q.answer;
    if (correct) setScore((s) => s + 1);
    setAnswers((a) => [...a, { correct, chosen: idx, answer: q.answer }]);
  };

  const next = () => {
    if (qi + 1 >= total) {
      setDone(true);
    } else {
      setQi((i) => i + 1);
      setSelected(null);
    }
  };

  const restart = () => {
    setQi(0);
    setSelected(null);
    setScore(0);
    setDone(false);
    setAnswers([]);
  };

  const pct = Math.round((score / total) * 100);

  // Results screen
  if (done) {
    return (
      <section className="px-4 py-20 max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-white/40 text-sm uppercase tracking-widest font-semibold mb-3">Results</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">Quiz Complete!</h2>
        </div>
        <GlassCard className="p-8 sm:p-12 text-center">
          {/* Score ring */}
          <div
            className="w-36 h-36 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl font-black text-white relative"
            style={{
              background: `conic-gradient(${pct > 70 ? '#22d3ee' : pct > 40 ? '#fb923c' : '#f43f5e'} ${pct * 3.6}deg, rgba(255,255,255,0.08) 0)`,
            }}
          >
            <div
              className="w-24 h-24 rounded-full flex items-center justify-center"
              style={{ background: '#080b14' }}
            >
              <span>{pct}%</span>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-white mb-2">
            {score} / {total} correct
          </h3>
          <p className="text-white/50 mb-8">
            {pct >= 80
              ? '🎉 Outstanding! You\'re ready to interview.'
              : pct >= 50
              ? '👍 Good effort! Review the topics and try again.'
              : '💪 Keep practicing — you\'ve got this.'}
          </p>

          {/* Answer strip */}
          <div className="flex gap-2 justify-center mb-8">
            {answers.map((a, i) => (
              <div
                key={i}
                className="h-2 w-8 rounded-full"
                style={{ background: a.correct ? '#22d3ee' : '#f43f5e' }}
              />
            ))}
          </div>

          <button
            onClick={restart}
            className="px-8 py-3.5 rounded-2xl font-bold text-white transition-all hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #22d3ee, #a78bfa)' }}
          >
            Retake Quiz
          </button>
        </GlassCard>
      </section>
    );
  }

  return (
    <section className="px-4 py-20 max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <p className="text-white/40 text-sm uppercase tracking-widest font-semibold mb-3">Test Your Knowledge</p>
        <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">Interactive Quiz</h2>
        <p className="text-white/50 text-lg">{total} questions across Excel & SQL. No time limit.</p>
      </div>

      <GlassCard className="p-6 sm:p-10">
        {/* Progress bar */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex gap-1.5">
            {QUIZ_QUESTIONS.map((_, i) => (
              <div
                key={i}
                className="h-1.5 w-8 rounded-full transition-all duration-300"
                style={{
                  background:
                    i < qi
                      ? '#22d3ee'
                      : i === qi
                      ? '#a78bfa'
                      : 'rgba(255,255,255,0.1)',
                }}
              />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Badge color={q.category.toLowerCase() === 'excel' ? 'excel' : 'sql'}>
              {q.category}
            </Badge>
            <span className="text-white/30 text-sm">
              {qi + 1}/{total}
            </span>
          </div>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-white mb-8 leading-relaxed">
          {q.question}
        </h3>

        {/* Options */}
        <div className="space-y-3 mb-6">
          {q.options.map((opt, i) => {
            let classes = 'border-white/10 bg-white/3 text-white/70 hover:border-white/25 hover:text-white';
            if (selected !== null) {
              if (i === q.answer)
                classes = 'border-cyan-400/60 bg-cyan-400/10 text-cyan-300';
              else if (i === selected && selected !== q.answer)
                classes = 'border-red-400/60 bg-red-400/10 text-red-300';
              else
                classes = 'border-white/6 bg-white/2 text-white/30';
            }
            return (
              <button
                key={i}
                onClick={() => choose(i)}
                className={`w-full text-left px-5 py-4 rounded-xl border font-medium text-sm transition-all duration-200 ${classes}`}
              >
                <span className="mr-3 text-white/30">{String.fromCharCode(65 + i)}.</span>
                {opt}
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {selected !== null && (
          <div className="rounded-xl p-4 mb-6 border border-white/10 bg-white/3">
            <p className="text-white/60 text-sm leading-relaxed">
              <span className="text-white font-semibold">Explanation: </span>
              {q.explanation}
            </p>
          </div>
        )}

        <div className="flex justify-between items-center">
          <span className="text-white/30 text-sm">Score: {score}/{qi}</span>
          <button
            onClick={next}
            disabled={selected === null}
            className="px-6 py-2.5 rounded-xl font-bold text-sm text-white transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #22d3ee, #a78bfa)' }}
          >
            {qi + 1 === total ? 'See Results' : 'Next →'}
          </button>
        </div>
      </GlassCard>
    </section>
  );
}
