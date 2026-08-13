"use client";

import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

import { heroSlides } from "@/data/heroSlides";
import { HeroSlide } from "./HeroSlide";

export function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    onSelect();

    emblaApi.on("select", onSelect);

    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 7000);

    return () => {
      clearInterval(autoplay);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="relative h-[calc(100vh-80px)] min-h-[720px] overflow-hidden bg-slate-950">
      {/* Embla viewport */}
      <div
        ref={emblaRef}
        className="h-full w-full overflow-hidden"
      >
        {/* Embla container */}
        <div className="flex h-full">
          {heroSlides.map((slide) => (
            <div
              key={slide.id}
              className="relative h-full min-w-0 flex-[0_0_100%]"
            >
              <HeroSlide slide={slide} />
            </div>
          ))}
        </div>
      </div>

      {/* Previous */}
      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => emblaApi?.scrollPrev()}
        className="absolute left-8 top-1/2 z-40 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/30 text-xl text-white backdrop-blur-xl transition hover:border-[var(--primary)] hover:bg-[var(--primary)]"
      >
        ←
      </button>

      {/* Next */}
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => emblaApi?.scrollNext()}
        className="absolute right-8 top-1/2 z-40 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/30 text-xl text-white backdrop-blur-xl transition hover:border-[var(--primary)] hover:bg-[var(--primary)]"
      >
        →
      </button>

      {/* Bottom Indicators */}
      <div className="absolute bottom-8 left-1/2 z-40 -translate-x-1/2">
        <div className="flex items-center gap-8 rounded-full border border-white/10 bg-black/30 px-8 py-6 backdrop-blur-xl">
          {heroSlides.map((slide, index) => (
            <button
              type="button"
              key={slide.id}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => emblaApi?.scrollTo(index)}
              className="group"
            >
              <div
                className={`h-[3px] rounded-full transition-all duration-300 ${
                  selectedIndex === index
                    ? "w-28 bg-[var(--primary)]"
                    : "w-20 bg-white/30 hover:bg-white/60"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}