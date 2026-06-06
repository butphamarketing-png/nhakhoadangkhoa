import { Link } from "wouter";
import { motion } from "framer-motion";
import { useHomeCms } from "@/lib/cms-provider";
import { fadeUp } from "@/lib/motion";
import { Scan, Monitor, Scissors, Tooth } from "lucide-react";

function TechCard({
  title,
  desc,
  index,
}: {
  title: string;
  desc: string;
  index: number;
}) {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Scan className="w-8 h-8 text-[#C89B3C]" />;
      case 1: return <Monitor className="w-8 h-8 text-[#C89B3C]" />;
      case 2: return <Scissors className="w-8 h-8 text-[#C89B3C]" />;
      case 3: return <Tooth className="w-8 h-8 text-[#C89B3C]" />;
      default: return <Tooth className="w-8 h-8 text-[#C89B3C]" />;
    }
  };

  return (
    <article className="h-full">
      <div className="card-luxury overflow-hidden h-full !rounded-2xl !p-4 !translate-y-0 hover:!translate-y-[-4px] group bg-white flex flex-col items-center text-center gap-3">
        <div className="w-16 h-16 rounded-full bg-[#F8F6F1] flex items-center justify-center border border-[#C89B3C]/20">
          {getIcon(index)}
        </div>
        <div className="flex-1 flex flex-col gap-1">
          <h3 className="font-display font-bold text-[#0D1B2A] text-sm leading-snug mb-1">{title}</h3>
          <p className="text-[11px] text-[#0D1B2A]/60 leading-relaxed flex-1">{desc}</p>
        </div>
      </div>
    </article>
  );
}

export default function TechnologySection() {
  const { technologyItems: TECHNOLOGY_ITEMS } = useHomeCms();
  return (
    <section id="cong-nghe" className="section-padding section-cream section-texture overflow-hidden scroll-mt-32">
      <div className="container-custom container-narrow">
        <div className="grid lg:grid-cols-[minmax(0,300px)_1fr] gap-8 lg:gap-10 items-start">
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
                <Link href="/gioi-thieu/co-so-vat-chat">
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
                <TechCard key={tech.title} title={tech.title} desc={tech.desc} index={i} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
