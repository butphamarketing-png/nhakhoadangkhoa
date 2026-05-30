import { Link } from "wouter";
import { motion } from "framer-motion";
import { TECHNOLOGY_ITEMS } from "@/lib/home-content";
import { fadeUp } from "@/lib/motion";

function TechCard({
  title,
  desc,
  image,
  index,
}: {
  title: string;
  desc: string;
  image: string;
  index: number;
}) {
  return (
    <article className="h-full">
      <div className="gradient-border rounded-[22px] p-[2px] h-full">
        <div className="card-luxury overflow-hidden h-full !rounded-[20px] !p-0 !translate-y-0 hover:!translate-y-[-8px] group">
          <div className="relative aspect-[4/3] p-4 md:p-5 flex items-center justify-center bg-gradient-to-br from-[#F8F6F1] to-white overflow-hidden">
            <span className="absolute top-3 left-3 text-[10px] font-bold text-[#C89B3C] font-display tracking-wider">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(200,155,60,0.12),transparent_50%)]" />
            <img
              src={image}
              alt={title}
              className="relative z-10 max-h-[80%] max-w-[80%] object-contain group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="px-4 py-4 border-t border-black/[0.04] bg-white">
            <h3 className="font-display font-bold text-[#0D1B2A] text-sm md:text-base leading-snug mb-1.5">
              {title}
            </h3>
            <p className="text-[12px] text-[#0D1B2A]/60 leading-relaxed line-clamp-2">{desc}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function TechnologySection() {
  return (
    <section className="section-padding section-cream section-texture overflow-hidden">
      <div className="container-custom container-narrow">
        <div className="grid lg:grid-cols-[minmax(0,360px)_1fr] gap-8 lg:gap-12 items-stretch">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <div className="rounded-[28px] navy-gradient p-8 md:p-10 relative overflow-hidden border border-[#C89B3C]/20 shadow-[0_24px_60px_rgba(13,27,42,0.2)]">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_100%_0%,rgba(200,155,60,0.2),transparent_50%)]" />
              <div className="relative">
                <p className="text-[#E8C46A] text-xs font-bold uppercase tracking-[0.35em] mb-4">
                  Trang thiết bị
                </p>
                <h2 className="font-display font-bold text-white text-[clamp(1.75rem,3vw,2.75rem)] leading-tight mb-5">
                  CÔNG NGHỆ
                  <br />
                  <span className="gold-shimmer">HIỆN ĐẠI</span>
                </h2>
                <p className="text-white/75 text-sm md:text-[15px] leading-relaxed mb-6">
                  Đầu tư hệ thống máy móc tiên tiến nhất để chẩn đoán chính xác và điều trị an toàn.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {["CT Cone Beam 3D", "iTero 5D", "Piezotome"].map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border border-[#C89B3C]/40 text-[#E8C46A] bg-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href="/gioi-thieu">
                  <button type="button" className="btn-gold !h-12 text-sm" data-testid="button-tech-more">
                    XEM THÊM
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="min-w-0"
          >
            <div className="grid grid-cols-2 gap-4 md:gap-5 h-full">
              {TECHNOLOGY_ITEMS.map((tech, i) => (
                <TechCard key={tech.title} {...tech} index={i} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
