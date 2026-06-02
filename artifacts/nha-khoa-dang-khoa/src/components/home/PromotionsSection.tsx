import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { usePromotions } from "@/lib/cms-provider";
import { fadeUp } from "@/lib/motion";

export default function PromotionsSection() {
  const promotions = usePromotions().slice(0, 6);

  return (
    <section className="section-padding section-cream section-texture">
      <div className="container-custom container-narrow">
        <SectionTitle label="Ưu đãi" subtitle="Chương trình ưu đãi — cập nhật từ hệ thống quản trị">
          ƯU ĐÃI NỔI BẬT
        </SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {promotions.map((promo, i) => (
            <motion.div
              key={promo.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
            >
              <Link href={promo.href ?? "/uu-dai"}>
                <article className="card-luxury p-6 h-full flex flex-col !translate-y-0 hover:!translate-y-[-8px] cursor-pointer group">
                  {promo.badge && (
                    <span className="inline-block self-start text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full gold-gradient text-white mb-3">
                      {promo.badge}
                    </span>
                  )}
                  <h3 className="font-display font-bold text-[#0D1B2A] text-lg mb-2 group-hover:text-[#C89B3C] transition-colors">
                    {promo.title}
                  </h3>
                  {promo.discount && (
                    <p className="text-[#C89B3C] font-bold text-sm mb-2">{promo.discount}</p>
                  )}
                  <p className="text-[#0D1B2A]/65 text-sm leading-relaxed flex-1 mb-4">{promo.desc}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-bold text-[#C89B3C]">
                    Xem chi tiết
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </article>
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
