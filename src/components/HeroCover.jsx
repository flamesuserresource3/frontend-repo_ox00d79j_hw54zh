import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroCover() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden rounded-2xl border border-white/10 bg-black">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient and vignette overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center text-white">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-widest text-white/80 backdrop-blur">
          <span>2026 Edition</span>
          <span className="h-1 w-1 rounded-full bg-emerald-400" />
          <span>Live Race Strategy</span>
        </div>
        <h1 className="font-geist text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          F1 Manager: Real-World Control
        </h1>
        <p className="mt-4 max-w-3xl text-balance text-base text-white/80 sm:text-lg">
          No AI. No Help. Just you and the race. Be the brain on the pit wall and make
          every decision in real time as the world watches.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#features"
            className="rounded-lg bg-white px-5 py-3 text-sm font-medium text-black shadow hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            Explore the dashboard
          </a>
          <a
            href="#leaderboard"
            className="rounded-lg border border-white/30 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            View leaderboards
          </a>
        </div>
      </div>
    </section>
  );
}
