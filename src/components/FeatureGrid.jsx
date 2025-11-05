import React from 'react';
import { Gauge, Settings, Trophy, CloudRain } from 'lucide-react';

const features = [
  {
    icon: Gauge,
    title: 'Real-Time Control',
    desc: 'Make pit calls, set fuel and ERS targets, and manage pace lap-by-lap with zero automation.',
  },
  {
    icon: CloudRain,
    title: 'Live Weather & Incidents',
    desc: 'React to real rain, safety cars, and red flags synced with the actual Grand Prix.',
  },
  {
    icon: Settings,
    title: 'Full Systems, Manual Only',
    desc: 'No suggestions. No auto-manage. You are the strategist and team principal.',
  },
  {
    icon: Trophy,
    title: 'Global Leaderboards',
    desc: 'Compete with others managing the same team and climb the season rankings.',
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Designed for the Pit Wall</h2>
          <p className="mt-2 max-w-2xl text-sm text-white/70">
            A clean, operations-first interface. Read the race at a glance and execute with precision.
          </p>
        </div>
        <div className="hidden text-right text-xs text-white/60 sm:block">
          Season unfolds with the real calendar — no fast forward.
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="group rounded-xl border border-white/10 bg-white/5 p-5 text-white shadow-sm backdrop-blur transition hover:bg-white/10"
          >
            <div className="mb-4 inline-flex rounded-lg border border-white/10 bg-black/60 p-2">
              <Icon className="h-5 w-5 text-emerald-400" />
            </div>
            <h3 className="text-base font-medium">{title}</h3>
            <p className="mt-2 text-sm text-white/70">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
