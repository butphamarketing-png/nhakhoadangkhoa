import { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { useHomeCms } from "@/lib/cms-provider";
import { cmsImageSrc } from "@/lib/media-url";
import { fadeUp } from "@/lib/motion";

export default function TestimonialsSection() {
  const { testimonialTabs: TESTIMONIAL_TABS } = useHomeCms();
  const [tab, setTab] = useState(TESTIMONIAL_TABS[0]?.id ?? "rang-su");
  const [page, setPage] = useState(0);
  const active = TESTIMONIAL_TABS.find((t) => t.id === tab)!;
  const items = active.items;
  const pageSize = 3;
  const maxPage = Math.max(0, Math.ceil(items.length / pageSize) - 1);
  const visible = items.slice(page * pageSize, page * pageSize + pageSize);

  const switchTab = (id: string) => {
    setTab(id);
    setPage(0);
  };

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23C89B3C'%3E%3Cpath d='M36 34v-2h2v2h-2zm0-4v-2h2v2h-2z'/%3E%3C/g%3E%3C/svg%3E\")" }} />
      <div className="container-custom container-narrow relative">
        <SectionTitle label="Khách hàng" subtitle="Hàng nghìn khách hàng tin tưởng Nha Khoa Đăng Khoa">
          CẢM NHẬN KHÁCH HÀNG
        </SectionTitle>

        {/* {TESTIMONIAL_TABS.length > 1 && (
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 p-1.5 rounded-full bg-[#F8F6F1] w-fit mx-auto border border-[#C89B3C]/15">
            {TESTIMONIAL_TABS.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => switchTab(t.id)}
                className={`px-5 md:px-7 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 ${
                  tab === t.id
                    ? "gold-gradient text-white shadow-[0_6px_20px_rgba(200,155,60,0.35)]"
                    : "text-[#0D1B2A]/70 hover:text-[#C89B3C] bg-transparent"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        )} */}

        <div className="relative">
          <button
            type="button"
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-5 z-10 w-11 h-11 rounded-full bg-white shadow-[0_8px_24px_rgba(13,27,42,0.12)] border border-[#C89B3C]/20 flex items-center justify-center disabled:opacity-30 hover:gold-gradient hover:text-white hover:border-transparent transition-all group"
            aria-label="Trước"
          >
            <ChevronLeft className="w-5 h-5 text-[#0D1B2A] group-hover:text-white" />
          </button>
          <button
            type="button"
            onClick={() => setPage((p) => Math.min(maxPage, p + 1))}
            disabled={page >= maxPage}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-5 z-10 w-11 h-11 rounded-full bg-white shadow-[0_8px_24px_rgba(13,27,42,0.12)] border border-[#C89B3C]/20 flex items-center justify-center disabled:opacity-30 hover:gold-gradient hover:text-white hover:border-transparent transition-all group"
            aria-label="Sau"
          >
            <ChevronRight className="w-5 h-5 text-[#0D1B2A] group-hover:text-white" />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${tab}-${page}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="grid md:grid-cols-3 gap-5 md:gap-6 px-8 md:px-10"
            >
              {visible.map((item, i) => (
                <motion.article
                  key={item.id}
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                  custom={i}
                  className="group"
                >
                  <div className="gradient-border rounded-[28px] p-[2px] h-full">
                    <div className="card-luxury overflow-hidden !p-0 !translate-y-0 hover:!translate-y-[-6px] !rounded-[26px] h-full flex flex-col">
                      <div className="aspect-[4/3] overflow-hidden bg-[#F8F6F1] relative">
                        <img
                          src={cmsImageSrc(item.image)}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <span className="absolute top-3 left-3 gold-gradient text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
                          Trước & sau
                        </span>
                      </div>
                      <div className="p-5 bg-[#0D1B2A] text-white flex-1 flex flex-col relative">
                        <Quote className="absolute top-4 right-4 w-8 h-8 text-[#C89B3C]/15" />
                        <div className="flex items-center gap-0.5 mb-2">
                          {Array.from({ length: 5 }).map((_, j) => (
                            <Star key={j} className="w-3.5 h-3.5 fill-[#C89B3C] text-[#C89B3C]" />
                          ))}
                          <span className="text-[10px] text-[#E8C46A] ml-2 font-bold uppercase tracking-wide">{item.ratingLabel}</span>
                        </div>
                        <h3 className="font-display font-bold text-base mb-0.5">{item.name}</h3>
                        <p className="text-white/50 text-xs mb-2">{item.role}</p>
                        <p className="text-white/45 text-xs mb-3 pb-3 border-b border-white/10">
                          <span className="text-[#C89B3C] font-semibold">Tình trạng:</span> {item.condition}
                        </p>
                        <p className="text-white/85 text-sm leading-relaxed line-clamp-3 flex-1 italic">&ldquo;{item.quote}&rdquo;</p>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {maxPage > 0 && (
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxPage + 1 }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setPage(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === page ? "w-8 bg-[#C89B3C]" : "w-1.5 bg-[#0D1B2A]/15 hover:bg-[#C89B3C]/50"
                }`}
                aria-label={`Trang ${i + 1}`}
              />
            ))}
          </div>
        )}

        <div className="text-center mt-10">
          <Link href="/khach-hang">
            <span className="btn-outline-gold inline-flex items-center !h-11 !text-sm cursor-pointer gap-2">
              Xem thêm câu chuyện khách hàng
              <ChevronRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
