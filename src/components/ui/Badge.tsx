interface BadgeProps {
  children: React.ReactNode;
  color?: 'excel' | 'sql' | 'default';
}

const colorMap: Record<string, string> = {
  excel: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
  sql: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
  default: 'bg-white/10 text-white/70 border-white/20',
};

export function Badge({ children, color = 'default' }: BadgeProps) {
  return (
    <span className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-semibold border ${colorMap[color]}`}>
      {children}
    </span>
  );
}
