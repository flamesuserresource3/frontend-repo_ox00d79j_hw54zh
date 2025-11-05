import React from 'react';

const sample = [
  { team: 'Mercedes', strategist: 'Alex R.', score: 95.4 },
  { team: 'McLaren', strategist: 'Priya S.', score: 93.1 },
  { team: 'Ferrari', strategist: 'Diego M.', score: 91.8 },
  { team: 'Red Bull', strategist: 'Hana K.', score: 90.6 },
];

export default function LeaderboardPreview() {
  return (
    <section id="leaderboard" className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Race Leaderboard</h2>
          <p className="mt-2 max-w-2xl text-sm text-white/70">
            Compare your race outcome against other principals managing the same teams.
          </p>
        </div>
        <a
          href="#"
          className="hidden rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur hover:bg-white/20 sm:inline"
        >
          View full standings
        </a>
      </div>
      <div className="overflow-hidden rounded-xl border border-white/10">
        <table className="min-w-full divide-y divide-white/10">
          <thead className="bg-white/5">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-white/60">Pos</th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-white/60">Team</th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-white/60">Strategist</th>
              <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider text-white/60">Score</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10 bg-black/20">
            {sample.map((row, i) => (
              <tr key={row.team} className="hover:bg-white/5">
                <td className="px-4 py-3 text-sm text-white/80">{i + 1}</td>
                <td className="px-4 py-3 text-sm font-medium text-white">{row.team}</td>
                <td className="px-4 py-3 text-sm text-white/80">{row.strategist}</td>
                <td className="px-4 py-3 text-right text-sm font-semibold text-emerald-400">{row.score.toFixed(1)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
