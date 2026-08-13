export function HeroStatsCard() {
  return (
    <div className="absolute right-12 top-[56%] hidden w-96 -translate-y-1/2 rounded-[32px] border border-white/25 bg-white/12 p-8 text-white shadow-2xl backdrop-blur-2xl xl:block">
      <p className="text-sm uppercase tracking-[0.3em] text-white/70">
        Featured Project
      </p>

      <h3 className="mt-4 text-3xl font-bold">
        Bonny Marine Terminal
      </h3>

      <p className="mt-4 leading-7 text-white/80">
        Marine construction, dredging and coastal infrastructure delivered to
        international standards.
      </p>

      <div className="mt-8 border-t border-white/20 pt-6">
        <div className="flex justify-between">
          <span className="text-white/60">Sector</span>
          <span>Marine</span>
        </div>

        <div className="mt-3 flex justify-between">
          <span className="text-white/60">Status</span>
          <span>Completed</span>
        </div>
      </div>
    </div>
  );
}