import { useState, useEffect, useCallback } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ChevronRight as Arrow } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { useHomeCms } from "@/lib/cms-provider";
import MediaFrame from "@/components/ui/MediaFrame";

const AUTO_MS = 7000;

export default function DoctorTeamSection() {
  const { homeDoctors: HOME_DOCTORS } = useHomeCms();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const doctor = HOME_DOCTORS[index];
  const count = HOME_DOCTORS.length;

  const go = useCallback(
    (delta: number) => setIndex((i) => (i + delta + count) % count),
    [count]
  );

  useEffect(() => {
    if (paused || count <= 1) return;
    const id = window.setInterval(() => go(1), AUTO_MS);
    return () => window.clearInterval(id);
  }, [paused, go, count]);

  return (
    <section
      className="section-padding section-cream section-texture"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container-custom container-narrow">
        <SectionTitle label="Đội ngũ" subtitle="Bác sĩ Răng Hàm Mặt — kinh nghiệm lâu năm">
          ĐỘI NGŨ BÁC SĨ CHUYÊN MÔN CAO
        </SectionTitle>

        <AnimatePresence mode="wait">
          <motion.div
            key={doctor.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4 }}
            className="gradient-border rounded-[28px] p-[2px] mb-8"
          >
            <div className="card-luxury overflow-hidden !translate-y-0 !rounded-[26px] !p-0">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center bg-[#0D1B2A] text-white relative">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_0%_50%,rgba(200,155,60,0.1),transparent_55%)]" />
                  <div className="relative">
                    {index === 0 && (
                      <span className="inline-block gold-gradient text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                        Trưởng khoa
                      </span>
                    )}
                    <p className="text-[#C89B3C] text-sm font-semibold uppercase tracking-wider mb-2">Bác sĩ</p>
                    <h3 className="font-display text-2xl md:text-3xl font-bold mb-1">{doctor.name}</h3>
                    <p className="text-white/70 text-sm uppercase tracking-wide mb-6 pb-6 border-b border-white/10">{doctor.degree}</p>
                    <ul className="space-y-2.5 mb-8">
                      {doctor.credentials.map((c) => (
                        <li key={c} className="flex items-start gap-2 text-sm text-white/85">
                          <span className="text-[#C89B3C] mt-1 shrink-0">◆</span>
                          {c}
                        </li>
                      ))}
                    </ul>
                    <Link href={`/bac-si/${doctor.id}`}>
                      <span className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-[#C89B3C]/50 text-sm font-bold hover:gold-gradient hover:text-white hover:border-transparent transition-all cursor-pointer w-fit">
                        Xem thêm <Arrow className="w-4 h-4" />
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="relative bg-[#F8F6F1] p-6 md:p-8 flex items-center justify-center min-h-[280px]">
                  <div className="gradient-border rounded-[20px] p-[2px] w-full max-w-[280px]">
                    <MediaFrame
                      src={doctor.image}
                      alt={doctor.name}
                      aspect="portrait"
                      className="rounded-[18px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-center gap-4 md:gap-6">
          <button
            type="button"
            onClick={() => go(-1)}
            className="w-10 h-10 rounded-full border-2 border-[#C89B3C] text-[#C89B3C] flex items-center justify-center hover:gold-gradient hover:text-white hover:border-transparent transition-all"
            aria-label="Bác sĩ trước"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-3 md:gap-4 overflow-x-auto py-2 px-1 max-w-full">
            {HOME_DOCTORS.map((d, i) => (
              <button
                key={d.id}
                type="button"
                onClick={() => setIndex(i)}
                className={`flex-shrink-0 rounded-full p-0.5 transition-all ${
                  i === index ? "ring-2 ring-[#C89B3C] ring-offset-2 bg-[#C89B3C]/10" : "opacity-50 hover:opacity-100"
                }`}
                aria-label={d.name}
                aria-current={i === index ? "true" : undefined}
              >
                <img src={d.image} alt="" className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover" />
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => go(1)}
            className="w-10 h-10 rounded-full border-2 border-[#C89B3C] text-[#C89B3C] flex items-center justify-center hover:gold-gradient hover:text-white hover:border-transparent transition-all"
            aria-label="Bác sĩ sau"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-6 max-w-xs mx-auto h-1 rounded-full bg-[#0D1B2A]/8 overflow-hidden">
          <div
            className="h-full gold-gradient rounded-full transition-all duration-500"
            style={{ width: `${((index + 1) / count) * 100}%` }}
          />
        </div>
      </div>
    </section>
  );
}
