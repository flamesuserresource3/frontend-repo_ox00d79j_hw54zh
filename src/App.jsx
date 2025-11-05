import React from 'react';
import HeroCover from './components/HeroCover.jsx';
import FeatureGrid from './components/FeatureGrid.jsx';
import LiveStatusPanel from './components/LiveStatusPanel.jsx';
import LeaderboardPreview from './components/LeaderboardPreview.jsx';

function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black via-zinc-950 to-black text-white">
      <header className="mx-auto max-w-7xl px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-emerald-400 to-teal-500" />
            <span className="text-sm font-semibold tracking-wide text-white/90">F1 Manager — 2026</span>
          </div>
          <nav className="hidden gap-6 text-sm text-white/70 sm:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#leaderboard" className="hover:text-white">Leaderboard</a>
            <a href="#" className="hover:text-white">Season</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-[96rem] space-y-14 px-4 pb-20 sm:px-6">
        <HeroCover />
        <LiveStatusPanel />
        <FeatureGrid />
        <LeaderboardPreview />
      </main>

      <footer className="border-t border-white/10 bg-black/40">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-white/60">No AI. No Help. Just You and the Race.</p>
          <div className="flex items-center gap-2 text-xs text-white/50">
            <span>© {new Date().getFullYear()} Pit Wall Labs</span>
            <span className="text-white/20">•</span>
            <a href="#" className="hover:text-white/80">Terms</a>
            <span className="text-white/20">•</span>
            <a href="#" className="hover:text-white/80">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
