import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryImage } from "@/lib/gallery-media";
import LogoWatermark from "./LogoWatermark";

type GalleryImageGridProps = {
  images: GalleryImage[];
  columns?: "2" | "3" | "4";
  className?: string;
};

export default function GalleryImageGrid({ images, columns = "3", className = "" }: GalleryImageGridProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex != null ? images[activeIndex] : null;

  const colClass =
    columns === "4"
      ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
      : columns === "2"
        ? "grid-cols-2"
        : "grid-cols-2 md:grid-cols-3";

  const go = (delta: number) => {
    if (activeIndex == null) return;
    setActiveIndex((activeIndex + delta + images.length) % images.length);
  };

  return (
    <>
      <div className={`grid ${colClass} gap-3 md:gap-4 ${className}`}>
        {images.map((item, i) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveIndex(i)}
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#F8F6F1] ring-1 ring-[#C89B3C]/10 hover:ring-[#C89B3C]/40 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C89B3C]"
          >
            <LogoWatermark className="w-full h-full">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </LogoWatermark>
            <div className="absolute inset-0 bg-[#0D1B2A]/0 group-hover:bg-[#0D1B2A]/15 transition-colors" />
          </button>
        ))}
      </div>

      <Dialog open={active != null} onOpenChange={(open) => !open && setActiveIndex(null)}>
        <DialogContent className="max-w-5xl w-[95vw] p-0 border-0 bg-transparent shadow-none overflow-visible">
          {active && (
            <div className="relative rounded-2xl overflow-hidden bg-[#0D1B2A]">
              <button
                type="button"
                onClick={() => setActiveIndex(null)}
                className="absolute top-3 right-3 z-10 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
                aria-label="Đóng"
              >
                <X className="w-5 h-5" />
              </button>
              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => go(-1)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
                    aria-label="Ảnh trước"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => go(1)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
                    aria-label="Ảnh sau"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
              <LogoWatermark className="rounded-2xl bg-[#0D1B2A]">
                <img src={active.src} alt={active.alt} className="w-full max-h-[85vh] object-contain bg-black" />
              </LogoWatermark>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
