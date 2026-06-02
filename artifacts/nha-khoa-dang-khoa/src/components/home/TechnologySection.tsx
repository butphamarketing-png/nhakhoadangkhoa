import { Link } from "wouter";
import { motion } from "framer-motion";
import { TECHNOLOGY_ITEMS } from "@/lib/home-content";
import { fadeUp } from "@/lib/motion";
import MediaFrame from "@/components/ui/MediaFrame";

function TechCard({
  title,
  desc,
  image,
  wide,
  index,
}: {
  title: string;
  desc: string;
  image: string;
  wide?: boolean;
  index: number;
}) {
  return (
    <article className="h-full">
      <div className="gradient-border rounded-[20px] p-[2px] h-full">
        <div className="card-luxury overflow-hidden h-full !rounded-[18px] !p-0 !translate-y-0 hover:!translate-y-[-6px] group bg-white">
          <div className="relative">
            <span className="absolute top-2.5 left-2.5 z-10 text-[10px] font-bold text-white bg-[#0D1B2A]/70 px-2 py-0.5 rounded-md">
              {String(index + 1).padStart(2, "0")}
            </span>
            <MediaFrame src={image} alt={title} aspect={wide ? "wide" : "square"} />
          </div>
          <div className="px-3.5 py-3.5 border-t border-black/[0.04]">
            <h3 className="font-display font-bold text-[#0D1B2A] text-sm leading-snug mb-1">{title}</h3>
            <p className="text-[11px] text-[#0D1B2A]/60 leading-relaxed line-clamp-2">{desc}</p>
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
        <div className="grid lg:grid-cols-[minmax(0,340px)_1fr] gap-8 lg:gap-10 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="lg:sticky lg:top-28"
          >
            <div className="rounded-[24px] navy-gradient p-7 md:p-8 relative overflow-hidden border border-[#C89B3C]/20">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_100%_0%,rgba(200,155,60,0.2),transparent_50%)]" />
              <div className="relative">
                <p className="text-[#E8C46A] text-[11px] font-bold uppercase tracking-[0.3em] mb-3">
                  Trang thiết bị
                </p>
                <h2 className="font-display font-bold text-white text-2xl md:text-3xl leading-tight mb-4">
                  CÔNG NGHỆ
                  <br />
                  <span className="gold-shimmer">HIỆN ĐẠI</span>
                </h2>
                <p className="text-white/75 text-sm leading-relaxed mb-5">
                  Đầu tư hệ thống máy móc tiên tiến để chẩn đoán chính xác và điều trị an toàn.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["CT Cone Beam 3D", "iTero 5D", "Piezotome"].map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-[#C89B3C]/40 text-[#E8C46A]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href="/gioi-thieu">
                  <button type="button" className="btn-gold !h-11 !text-sm" data-testid="button-tech-more">
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
            <div className="grid grid-cols-2 gap-3 md:gap-4">
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
