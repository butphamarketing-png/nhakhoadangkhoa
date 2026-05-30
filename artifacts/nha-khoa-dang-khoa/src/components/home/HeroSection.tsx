import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { HERO_SLIDES } from "@/lib/home-content";

const AUTO_MS = 6000;
const FADE_MS = 350;

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(true);
  const count = HERO_SLIDES.length;
  const slide = HERO_SLIDES[index];

  const go = useCallback(
    (next: number) => {
      if (next === index || count <= 1) return;
      setVisible(false);
      window.setTimeout(() => {
        setIndex(next);
        setVisible(true);
      }, FADE_MS);
    },
    [index, count]
  );

  const goDelta = useCallback(
    (delta: number) => go((index + delta + count) % count),
    [go, index, count]
  );

  useEffect(() => {
    if (paused || count <= 1) return;
    const id = window.setInterval(() => goDelta(1), AUTO_MS);
    return () => window.clearInterval(id);
  }, [paused, goDelta, count]);

  return (
    <section
      className="group relative w-full bg-[#F8F6F1]"
      aria-roledescription="carousel"
      aria-label="Banner quảng cáo"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative w-full">
        <div className="relative flex justify-center items-start min-h-[180px] sm:min-h-[220px]">
          <img
            key={slide.id}
            src={slide.src}
            alt={slide.alt}
            width={1920}
            height={720}
            className={`w-full h-auto max-h-[min(78vh,820px)] object-contain object-center block transition-opacity duration-300 ease-out ${
              visible ? "opacity-100" : "opacity-0"
            }`}
            loading="eager"
            decoding="async"
            draggable={false}
          />

          {count > 1 && (
            <>
              <button
                type="button"
                onClick={() => goDelta(-1)}
                className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/95 text-[#0D1B2A] shadow-lg flex items-center justify-center md:opacity-0 md:group-hover:opacity-100 focus:opacity-100 transition-all hover:scale-105 border border-[#C89B3C]/20"
                aria-label="Banner trước"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => goDelta(1)}
                className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/95 text-[#0D1B2A] shadow-lg flex items-center justify-center md:opacity-0 md:group-hover:opacity-100 focus:opacity-100 transition-all hover:scale-105 border border-[#C89B3C]/20"
                aria-label="Banner sau"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
        </div>

        {count > 1 && (
          <div className="flex items-center justify-center gap-3 py-3 border-t border-[#C89B3C]/10 bg-[#F8F6F1]">
            <div className="flex gap-1.5">
              {HERO_SLIDES.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => go(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index ? "w-8 bg-[#C89B3C]" : "w-1.5 bg-[#0D1B2A]/25 hover:bg-[#C89B3C]/60"
                  }`}
                  aria-label={`Slide ${i + 1}`}
                  aria-current={i === index ? "true" : undefined}
                />
              ))}
            </div>
            <span className="text-[10px] font-bold text-[#0D1B2A]/50 tabular-nums border-l border-[#0D1B2A]/10 pl-3">
              {String(index + 1).padStart(2, "0")}/{String(count).padStart(2, "0")}
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
