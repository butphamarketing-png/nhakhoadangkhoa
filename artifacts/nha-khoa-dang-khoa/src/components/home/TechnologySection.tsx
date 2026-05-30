import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TECHNOLOGY_ITEMS } from "@/lib/home-content";
import { fadeUp } from "@/lib/motion";

function TechCard({ title, image, index }: { title: string; image: string; index: number }) {
  return (
    <div className="gradient-border rounded-[24px] p-[2px] h-full flex-shrink-0 w-[200px] md:w-[240px]">
      <div className="card-luxury overflow-hidden h-full !rounded-[22px] !p-0 !translate-y-0 hover:!translate-y-[-8px] group">
        <div className="aspect-square p-6 flex items-center justify-center bg-[#F8F6F1] relative overflow-hidden">
          <span className="absolute top-3 left-3 text-[10px] font-bold text-[#C89B3C]/60 font-display">
            {String(index + 1).padStart(2, "0")}
          </span>
          <img
            src={image}
            alt={title}
            className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <p className="text-center text-sm font-semibold text-[#0D1B2A] px-4 py-4 leading-snug border-t border-black/[0.04] bg-white">
          {title}
        </p>
      </div>
    </div>
  );
}

export default function TechnologySection() {
  const [index, setIndex] = useState(0);
  const maxIndex = Math.max(0, TECHNOLOGY_ITEMS.length - 3);
  const progress = maxIndex > 0 ? (index / maxIndex) * 100 : 100;

  return (
    <section className="section-padding section-cream section-texture">
      <div className="container-custom container-narrow">
        <div className="grid lg:grid-cols-[38%_62%] gap-12 lg:gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="heading-gold text-xs uppercase tracking-[0.35em] mb-4">Trang thiết bị</p>
            <h2 className="h2-section mb-6">
              CÔNG NGHỆ
              <br />
              <span className="gold-shimmer">HIỆN ĐẠI</span>
            </h2>
            <p className="text-body mb-6">
              Đầu tư hệ thống máy móc tiên tiến nhất để chẩn đoán chính xác và điều trị an toàn.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {["CT Cone Beam 3D", "iTero 5D", "Piezotome"].map((tag) => (
                <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border border-[#C89B3C]/30 text-[#C89B3C] bg-white/70">
                  {tag}
                </span>
              ))}
            </div>
            <Link href="/gioi-thieu">
              <button type="button" className="btn-gold !h-12 text-sm" data-testid="button-tech-more">
                XEM THÊM
              </button>
            </Link>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
            <div className="grid grid-cols-2 gap-4 md:hidden">
              {TECHNOLOGY_ITEMS.map((tech, i) => (
                <TechCard key={tech.title} {...tech} index={i} />
              ))}
            </div>
            <div className="hidden md:block">
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => setIndex((i) => Math.max(0, i - 1))}
                  disabled={index === 0}
                  className="flex-shrink-0 w-12 h-12 rounded-full gold-gradient text-white flex items-center justify-center disabled:opacity-30 shadow-lg hover:scale-105 transition-transform"
                  aria-label="Trước"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="flex-1 overflow-hidden">
                  <div
                    className="flex gap-5 transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${index * 260}px)` }}
                  >
                    {TECHNOLOGY_ITEMS.map((tech, i) => (
                      <TechCard key={tech.title} {...tech} index={i} />
                    ))}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIndex((i) => Math.min(maxIndex, i + 1))}
                  disabled={index >= maxIndex}
                  className="flex-shrink-0 w-12 h-12 rounded-full gold-gradient text-white flex items-center justify-center disabled:opacity-30 shadow-lg hover:scale-105 transition-transform"
                  aria-label="Sau"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              <div className="mt-6 flex items-center gap-4">
                <div className="flex-1 h-1 rounded-full bg-[#0D1B2A]/8 overflow-hidden">
                  <div className="h-full gold-gradient rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
                </div>
                <span className="text-xs font-bold text-[#C89B3C] tabular-nums shrink-0">
                  {String(index + 1).padStart(2, "0")} / {String(TECHNOLOGY_ITEMS.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
