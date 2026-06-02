import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ChevronRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import { BRAND } from "@/lib/constants";
import { useServiceMenu } from "@/lib/cms-provider";
import { fadeUp } from "@/lib/motion";

export default function ServicesPage() {
  const SERVICE_MENU_GROUPS = useServiceMenu();

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
        subtitle="Trồng răng Implant · Răng sứ · Niềng răng · Nha khoa tổng quát — chuyên sâu, an toàn, hiện đại."
      />

      <section className="section-padding bg-white">
        <div className="container-custom container-narrow space-y-10">
          {SERVICE_MENU_GROUPS.map((group, gi) => (
            <motion.div
              key={group.id}
              id={group.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={gi}
              className="scroll-mt-32"
            >
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-5">
                <div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0D1B2A]">{group.title}</h2>
                  <p className="text-[#0D1B2A]/60 mt-2 max-w-2xl">{group.intro}</p>
                </div>
                <Link href={group.href}>
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-[#C89B3C] cursor-pointer hover:gap-3 transition-all shrink-0">
                    Xem tất cả <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {group.items.map((item) => (
                  <Link key={item.label} href={item.href}>
                    <div className="flex items-start gap-3 p-4 rounded-2xl border border-[#C89B3C]/10 bg-[#F8F6F1]/50 hover:bg-white hover:shadow-md hover:border-[#C89B3C]/25 transition-all cursor-pointer group">
                      <ChevronRight className="w-4 h-4 text-[#C89B3C] mt-0.5 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                      <div>
                        <h3 className="font-semibold text-[#0D1B2A] text-sm group-hover:text-[#C89B3C] transition-colors">{item.label}</h3>
                        {item.excerpt && <p className="text-xs text-[#0D1B2A]/50 mt-1 line-clamp-2">{item.excerpt}</p>}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-20 cta-gold-gradient">
        <div className="container-custom text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0D1B2A] mb-4">Cần tư vấn dịch vụ phù hợp?</h2>
          <p className="text-[#0D1B2A]/70 mb-8">Đội ngũ chuyên gia sẵn sàng tư vấn miễn phí</p>
          <a href={`tel:${BRAND.hotlineRaw}`} className="btn-gold inline-flex items-center !h-12 animate-phone-ring">
            Gọi {BRAND.hotline}
          </a>
        </div>
      </section>
    </div>
  );
}
