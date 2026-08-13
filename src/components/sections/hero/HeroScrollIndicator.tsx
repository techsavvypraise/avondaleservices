export function HeroScrollIndicator() {
  return (
    <div className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2 text-center text-white">

      <div className="mb-2 text-xs tracking-[0.4em]">
        SCROLL
      </div>

      <div className="animate-bounce text-2xl">
        ↓
      </div>

    </div>
  );
}