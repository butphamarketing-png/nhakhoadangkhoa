import { Link } from "wouter";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { IMAGES } from "@/lib/images";
import { SMILE_MODELS } from "@/lib/home-content";
import { fadeUp } from "@/lib/motion";

function ModelCard({ model, index }: { model: (typeof SMILE_MODELS)[number]; index: number }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      custom={index}
      className="gradient-border rounded-[24px] p-[2px]"
    >
      <div className="card-luxury p-4 !bg-white/95 !translate-y-0 hover:!translate-y-[-6px] !rounded-[22px] group">
        <div className="flex items-center justify-between mb-2">
          <p className="text-[10px] font-bold text-[#C89B3C] uppercase tracking-[0.15em]">{model.tag}</p>
          <span className="text-[10px] font-display font-bold text-[#0D1B2A]/25">{String(index + 1).padStart(2, "0")}</span>
        </div>
        <h3 className="font-bold text-[#0D1B2A] text-sm mb-3 group-hover:text-[#C89B3C] transition-colors">{model.title}</h3>
        <div className="aspect-[2/1] rounded-xl bg-[#F8F6F1] flex items-center justify-center overflow-hidden ring-1 ring-[#C89B3C]/10">
          <img src={model.image} alt={model.title} className="max-h-full max-w-full object-contain p-2 group-hover:scale-105 transition-transform duration-500" />
        </div>
      </div>
    </motion.div>
  );
}

export default function SmileDesignSection() {
  return (
    <section className="section-padding navy-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(200,155,60,0.15),transparent_55%)]" />
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23C89B3C'%3E%3Cpath d='M0 0h1v40H0zM39 0h1v40h-1z'/%3E%3C/g%3E%3C/svg%3E\")" }} />
      <div className="container-custom container-narrow relative">
        <SectionTitle light label="Thẩm mỹ" subtitle="Thiết kế nụ cười theo tỷ lệ vàng — chuẩn thẩm mỹ quốc tế">
          CÔNG NGHỆ DIGITAL SMILE DESIGN
        </SectionTitle>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-10 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {SMILE_MODELS.slice(0, 2).map((m, i) => (
              <ModelCard key={m.id} model={m} index={i} />
            ))}
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2} className="relative text-center">
            <div className="gradient-border rounded-[28px] p-[2px] mx-auto w-fit">
              <div className="relative w-48 md:w-56 lg:w-64 aspect-[3/4] rounded-[26px] overflow-hidden shadow-2xl">
                <img src={IMAGES.testimonials.nguyenThiKimHanh} alt="Thiết kế nụ cười" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-0 right-0">
                  <span className="inline-block gold-gradient text-white text-[10px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">
                    DSD Preview
                  </span>
                </div>
              </div>
            </div>
            <p className="mt-6 font-display text-xl md:text-2xl font-bold text-white">Gương mặt của bạn</p>
            <p className="text-white/75 text-sm md:text-base mt-1">phù hợp với dáng răng nào?</p>
            <Link href="/dat-lich">
              <span className="inline-block mt-6 btn-gold !h-12 !text-sm cursor-pointer">Tư vấn ngay</span>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {SMILE_MODELS.slice(2, 4).map((m, i) => (
              <ModelCard key={m.id} model={m} index={i + 2} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
