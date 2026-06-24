export function Footer() {
  return (
    <footer className="border-t border-white/6 mt-10 px-4 py-12">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #22d3ee, #a78bfa)' }}
          >
            <span className="text-sm font-black text-white">XS</span>
          </div>
          <div>
            <p className="font-bold text-white text-sm">Excel SQL Career Academy</p>
            <p className="text-white/30 text-xs">From zero to data analyst.</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 text-white/25 text-xs">
          <span>© 2025 Excel SQL Career Academy</span>
          <span className="hidden sm:inline">·</span>
          <span>All rights reserved</span>
        </div>
      </div>
    </footer>
  );
}
