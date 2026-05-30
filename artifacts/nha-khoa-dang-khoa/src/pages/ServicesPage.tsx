import { motion } from "framer-motion";
import { Link } from "wouter";
import { Star, ArrowRight, Zap, Smile, Activity, Shield, Sun } from "lucide-react";
import PageHero from "@/components/PageHero";
import { SERVICES, BRAND } from "@/lib/constants";
import { fadeUp } from "@/lib/motion";

const iconMap: Record<string, React.ElementType> = {
  Zap,
  Smile,
  Star,
  Sun,
  Shield,
  Activity,
};

export default function ServicesPage() {
  return (
    <div>
      <PageHero
        label="Dịch vụ"
        breadcrumb="Dịch vụ nha khoa"
        title={
          <>
            Dịch Vụ <span className="text-[#C89B3C]">Nha Khoa</span>
          </>
        }
        subtitle="Cung cấp đầy đủ các dịch vụ nha khoa cao cấp, ứng dụng công nghệ tiên tiến nhất."
      />

      <section className="section-padding bg-white">
        <div className="container-custom container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {SERVICES.map((service, i) => {
              const Icon = iconMap[service.icon] ?? Star;
              return (
                <motion.article
                  key={service.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i}
                  className="card-luxury overflow-hidden group flex flex-col"
                  data-testid={`card-service-${service.id}`}
                >
                  <div
                    className="h-48 relative overflow-hidden flex items-center justify-center"
                    style={{ background: `linear-gradient(135deg, ${service.color}12, ${service.color}28)` }}
                  >
                    <div className="icon-ring-gold w-20 h-20 group-hover:gold-gradient group-hover:border-transparent transition-all duration-300">
                      <Icon className="w-9 h-9 text-[#C89B3C] group-hover:text-white transition-colors" strokeWidth={1.35} />
                    </div>
                    <span
                      className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/90"
                      style={{ color: service.color }}
                    >
                      Chuyên khoa
                    </span>
                  </div>
                  <div className="p-6 md:p-7 flex flex-col flex-1">
                    <h3 className="font-display font-bold text-[#0D1B2A] text-xl mb-2">{service.name}</h3>
                    <p className="text-[#C89B3C] font-semibold text-sm mb-3">{service.short}</p>
                    <p className="text-[#0D1B2A]/60 text-sm leading-relaxed mb-5 flex-1">{service.desc}</p>
                    <div className="flex items-center gap-1 mb-5">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} className="w-3.5 h-3.5 text-[#C89B3C] fill-[#C89B3C]" />
                      ))}
                      <span className="text-xs text-[#0D1B2A]/40 ml-1">5.0</span>
                    </div>
                    <Link href={service.href}>
                      <span
                        className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-full border-2 border-[#C89B3C] text-[#C89B3C] text-xs font-bold uppercase tracking-wider hover:gold-gradient hover:text-white hover:border-transparent transition-all duration-300 cursor-pointer"
                        data-testid={`button-service-detail-${service.id}`}
                      >
                        Xem chi tiết
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 cta-gold-gradient">
        <div className="container-custom text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0D1B2A] mb-4">
            Cần tư vấn dịch vụ phù hợp?
          </h2>
          <p className="text-[#0D1B2A]/70 mb-8">Đội ngũ chuyên gia sẵn sàng tư vấn miễn phí 24/7</p>
          <a href={`tel:${BRAND.hotlineRaw}`} className="btn-gold inline-flex items-center !h-12">
            Gọi {BRAND.hotline}
          </a>
        </div>
      </section>
    </div>
  );
}
