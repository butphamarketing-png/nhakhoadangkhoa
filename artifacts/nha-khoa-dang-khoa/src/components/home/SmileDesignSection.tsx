import { Link } from "wouter";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { IMAGES } from "@/lib/images";
import { SMILE_MODELS } from "@/lib/home-content";
import { fadeUp } from "@/lib/motion";
import MediaFrame from "@/components/ui/MediaFrame";

function ModelCard({ model, index }: { model: (typeof SMILE_MODELS)[number]; index: number }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      custom={index}
      className="rounded-[20px] overflow-hidden bg-white/95 border border-white/20 shadow-lg"
    >
      <div className="p-3 pb-2">
        <div className="flex items-center justify-between mb-1">
          <p className="text-[10px] font-bold text-[#C89B3C] uppercase tracking-wider">{model.tag}</p>
          <span className="text-[10px] font-display font-bold text-[#0D1B2A]/30">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <h3 className="font-bold text-[#0D1B2A] text-sm leading-snug">{model.title}</h3>
      </div>
      <MediaFrame src={model.image} alt={model.title} aspect="square" className="rounded-none" />
    </motion.div>
  );
}

export default function SmileDesignSection() {
  return (
    <section className="section-padding navy-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(200,155,60,0.12),transparent_55%)]" />
      <div className="container-custom container-narrow relative">
        <SectionTitle light label="Thẩm mỹ" subtitle="Thiết kế nụ cười theo tỷ lệ vàng">
          CÔNG NGHỆ DIGITAL SMILE DESIGN
        </SectionTitle>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto items-end">
          {SMILE_MODELS.map((m, i) => (
            <ModelCard key={m.id} model={m} index={i} />
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-10 text-center"
        >
          <div className="gradient-border rounded-[24px] p-[2px] inline-block mx-auto mb-6">
            <div className="w-40 md:w-48 aspect-[3/4] rounded-[22px] overflow-hidden relative">
              <img
                src={IMAGES.testimonials.nguyenThiKimHanh}
                alt="Thiết kế nụ cười"
                className="w-full h-full object-cover object-top"
              />
              <span className="absolute bottom-3 left-1/2 -translate-x-1/2 gold-gradient text-white text-[9px] font-bold uppercase tracking-wider px-3 py-1 rounded-full whitespace-nowrap">
                DSD Preview
              </span>
            </div>
          </div>
          <p className="font-display text-lg md:text-xl font-bold text-white mb-1">
            Gương mặt của bạn phù hợp dáng răng nào?
          </p>
          <Link href="/dat-lich">
            <span className="inline-block mt-5 btn-gold !h-11 !text-sm cursor-pointer">Tư vấn ngay</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
