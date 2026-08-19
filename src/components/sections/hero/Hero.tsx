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
    <section className="relative h-[calc(100vh-80px)] min-h-[640px] overflow-hidden bg-slate-950 md:min-h-[720px]">
      {/* Embla viewport */}
      <div
        ref={emblaRef}
        className="h-full w-full overflow-hidden"
      >
        {/* Embla container */}
        <div className="flex h-full">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className="relative h-full min-w-0 flex-[0_0_100%]"
            >
              <HeroSlide
                slide={slide}
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Previous */}
      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => emblaApi?.scrollPrev()}
        className="absolute left-4 top-1/2 z-40 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/30 text-lg text-white backdrop-blur-xl transition hover:border-[var(--primary)] hover:bg-[var(--primary)] md:left-8 md:h-14 md:w-14 md:text-xl"
      >
        ←
      </button>

      {/* Next */}
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => emblaApi?.scrollNext()}
        className="absolute right-4 top-1/2 z-40 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/30 text-lg text-white backdrop-blur-xl transition hover:border-[var(--primary)] hover:bg-[var(--primary)] md:right-8 md:h-14 md:w-14 md:text-xl"
      >
        →
      </button>

      {/* Bottom Indicators */}
      <div className="absolute bottom-5 left-1/2 z-40 -translate-x-1/2 md:bottom-8">
        <div className="flex items-center gap-3 rounded-full border border-white/10 bg-black/30 px-4 py-3 backdrop-blur-xl md:gap-8 md:px-8 md:py-6">
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
                    ? "w-12 bg-[var(--primary)] md:w-28"
                    : "w-8 bg-white/30 hover:bg-white/60 md:w-20"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}