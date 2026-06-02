import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import SectionTitle from "./SectionTitle";
import PaginationBar from "@/components/ui/PaginationBar";
import { FEATURED_SERVICES } from "@/lib/home-content";
import { fadeUp } from "@/lib/motion";
import MediaFrame from "@/components/ui/MediaFrame";

const PER_PAGE = 4;

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
        <div className="relative shrink-0">
          <MediaFrame src={service.image} alt={service.name} aspect="video" />
          {featured && (
            <span className="absolute top-3 left-3 z-10 text-[#E8C46A] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#0D1B2A]/70">
              Dịch vụ chủ lực
            </span>
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
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(FEATURED_SERVICES.length / PER_PAGE));
  const safePage = Math.min(page, totalPages);
  const slice = FEATURED_SERVICES.slice((safePage - 1) * PER_PAGE, safePage * PER_PAGE);

  return (
    <section id="services" className="section-padding section-white relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C89B3C]/25 to-transparent" />
      <div className="container-custom container-narrow">
        <SectionTitle label="Dịch vụ" subtitle="Giải pháp nha khoa toàn diện — chuẩn y khoa quốc tế">
          DỊCH VỤ NỔI BẬT
        </SectionTitle>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 items-stretch">
          {slice.map((service, i) => (
            <motion.div
              key={service.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp}
              custom={i}
              className="h-full"
            >
              <ServiceCard service={service} featured={(safePage - 1) * PER_PAGE + i === 0} />
            </motion.div>
          ))}
        </div>

        <PaginationBar page={safePage} totalPages={totalPages} onPage={setPage} />
      </div>
    </section>
  );
}
