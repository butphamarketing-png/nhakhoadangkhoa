import { Link } from "wouter";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { FEATURED_SERVICES } from "@/lib/home-content";
import { fadeUp } from "@/lib/motion";

function ServiceCard({
  service,
  featured = false,
}: {
  service: (typeof FEATURED_SERVICES)[number];
  featured?: boolean;
}) {
  return (
    <Link href={service.href} className="block h-full" data-testid={`link-service-${service.id}`}>
      <article className="card-luxury overflow-hidden group h-full flex flex-col !p-0 !translate-y-0 hover:!translate-y-[-6px]">
        <div className="relative aspect-[4/3] overflow-hidden bg-[#F8F6F1] shrink-0">
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          {featured && (
            <>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/75 via-[#0D1B2A]/25 to-transparent" />
              <span className="absolute top-4 left-4 text-[#E8C46A] text-[10px] font-bold uppercase tracking-[0.25em] px-3 py-1 rounded-full bg-[#0D1B2A]/50 border border-[#C89B3C]/40">
                Dịch vụ chủ lực
              </span>
            </>
          )}
        </div>
        <div className="p-5 md:p-6 flex flex-col flex-1 min-h-[120px]">
          <h3 className="font-display font-bold text-[#0D1B2A] text-base md:text-lg mb-4 leading-snug flex-1">
            {service.displayName}
          </h3>
          <span className="inline-flex items-center justify-center gap-1 w-full py-3 rounded-full border-2 border-[#C89B3C] text-[#C89B3C] text-xs font-bold uppercase tracking-wider group-hover:gold-gradient group-hover:text-white group-hover:border-transparent transition-all duration-300">
            XEM CHI TIẾT
            <ChevronRight className="w-4 h-4" />
          </span>
        </div>
      </article>
    </Link>
  );
}

export default function FeaturedServicesSection() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom container-narrow">
        <SectionTitle label="Dịch vụ" subtitle="Giải pháp nha khoa toàn diện — chuẩn y khoa quốc tế">
          DỊCH VỤ NỔI BẬT
        </SectionTitle>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {FEATURED_SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp}
              custom={i}
              className="h-full"
            >
              <ServiceCard service={service} featured={i === 0} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
