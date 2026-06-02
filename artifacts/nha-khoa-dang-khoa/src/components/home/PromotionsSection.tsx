import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { useMediaCms } from "@/lib/cms-provider";
import { HOME_PROMOTIONS } from "@/lib/home-content";
import { fadeUp } from "@/lib/motion";
import MediaFrame from "@/components/ui/MediaFrame";

export default function PromotionsSection() {
  const { homePromotions } = useMediaCms();
  const promos = homePromotions?.length ? homePromotions : HOME_PROMOTIONS;

  return (
    <section className="section-padding section-cream section-texture">
      <div className="container-custom container-narrow">
        <SectionTitle label="Ưu đãi" subtitle="Chương trình ưu đãi dành riêng cho khách hàng Đăng Khoa">
          ƯU ĐÃI NỔI BẬT
        </SectionTitle>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {promos.map((promo, i) => (
            <motion.div
              key={promo.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
              className={i === 0 ? "md:col-span-1" : ""}
            >
              <Link href={promo.href}>
                <div className="card-luxury overflow-hidden !p-0 group cursor-pointer !translate-y-0 hover:!translate-y-[-10px] relative">
                  {promo.badge && (
                    <span className="absolute top-4 left-4 z-10 gold-gradient text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg">
                      {promo.badge}
                    </span>
                  )}
                  <div className="relative">
                    <MediaFrame src={promo.image} alt={promo.title} aspect="video" />
                  </div>
                  <div className="p-4 flex items-center justify-between border-t border-black/[0.04] bg-[#FAFAF8]">
                    <span className="font-bold text-[#0D1B2A] text-sm">{promo.title}</span>
                    <ArrowRight className="w-4 h-4 text-[#C89B3C] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/uu-dai">
            <span className="btn-outline-gold inline-flex items-center !h-11 !text-sm cursor-pointer">
              Xem tất cả ưu đãi
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
