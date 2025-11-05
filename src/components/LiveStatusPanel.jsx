import React from 'react';

export default function LiveStatusPanel() {
  // Mock snapshot panel to convey the real-time pit wall feel
  const items = [
    {
      label: 'Next GP',
      value: 'Monza, ITA',
      detail: 'Race — Sun 14:00 local',
      accent: 'from-emerald-500 to-teal-400',
    },
    {
      label: 'Weather',
      value: 'Light rain risk',
      detail: '42% probability, 18°C',
      accent: 'from-sky-500 to-blue-400',
    },
    {
      label: 'Track Status',
      value: 'Green',
      detail: 'Grip improving, low wind',
      accent: 'from-lime-500 to-emerald-400',
    },
    {
      label: 'Tyre Allocation',
      value: 'C2 / C3 / C4',
      detail: 'Soft 6 · Medium 4 · Hard 3',
      accent: 'from-rose-500 to-orange-400',
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 pb-10">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((card) => (
          <div
            key={card.label}
            className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 text-white backdrop-blur"
          >
            <div className={`pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br ${card.accent} opacity-30`} />
            <div className="text-xs uppercase tracking-wider text-white/60">{card.label}</div>
            <div className="mt-1 text-lg font-semibold">{card.value}</div>
            <div className="mt-1 text-sm text-white/70">{card.detail}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
