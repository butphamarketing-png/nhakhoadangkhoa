import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Clock, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import { useBrand } from "@/lib/brand-context";
import { usePromotions } from "@/lib/cms-provider";
import { useMediaCms } from "@/lib/cms-provider";
import { GALLERY_PROMOTIONS } from "@/lib/home-content";
import { fadeUp } from "@/lib/motion";

function Countdown({ endDate }: { endDate: string }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const [d, m, y] = endDate.split("/").map(Number);
    const target = new Date(y, m - 1, d).getTime();
    const calc = () => {
      const diff = target - Date.now();
      if (diff <= 0) return;
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        mins: Math.floor((diff % 3600000) / 60000),
        secs: Math.floor((diff % 60000) / 1000),
      });
    };
    calc();
    const t = setInterval(calc, 1000);
    return () => clearInterval(t);
  }, [endDate]);

  return (
    <div className="flex gap-2 mt-3">
      {[
        { label: "Ngày", val: timeLeft.days },
        { label: "Giờ", val: timeLeft.hours },
        { label: "Phút", val: timeLeft.mins },
        { label: "Giây", val: timeLeft.secs },
      ].map(({ label, val }) => (
        <div key={label} className="bg-[#0D1B2A]/30 rounded-lg px-2.5 py-1.5 text-center min-w-[44px] border border-white/10">
          <div className="text-lg font-bold text-[#E8C46A] leading-none tabular-nums">{String(val).padStart(2, "0")}</div>
          <div className="text-white/50 text-[9px] uppercase mt-0.5">{label}</div>
        </div>
      ))}
    </div>
  );
}

export default function UuDaiPage() {
  const BRAND = useBrand();
  const PROMOTIONS = usePromotions();
  const { galleryPromotions: GALLERY_PROMOTIONS_CMS } = useMediaCms();
  const galleryPromos = GALLERY_PROMOTIONS_CMS?.length ? GALLERY_PROMOTIONS_CMS : GALLERY_PROMOTIONS;

  return (
    <div>
      <PageHero
        label="Ưu đãi"
        breadcrumb="Ưu đãi"
        title={
          <>
            Ưu Đãi <span className="text-[#C89B3C]">Đặc Biệt</span>
          </>
        }
        subtitle="Các chương trình khuyến mãi hấp dẫn đang chờ bạn"
      />

      <section className="section-padding section-cream section-texture">
        <div className="container-custom">
          <p className="text-center text-[#C89B3C] text-xs font-bold uppercase tracking-[0.3em] mb-2">Gallery</p>
          <h2 className="font-display text-2xl font-bold text-[#0D1B2A] text-center mb-8">Chương trình từ Nha Khoa Đăng Khoa</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-4">
            {galleryPromos.map((p, i) => (
              <motion.div
                key={p.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="card-luxury overflow-hidden !p-0 !translate-y-0 group"
              >
                <img src={p.image} alt={p.title} className="w-full h-auto group-hover:scale-105 transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {PROMOTIONS.map((promo, i) => (
              <motion.div
                key={promo.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="gradient-border rounded-[28px] p-[2px]"
                data-testid={`promo-card-${promo.id}`}
              >
                <div className={`rounded-[26px] p-7 md:p-8 text-white relative overflow-hidden min-h-[280px] flex flex-col justify-end bg-gradient-to-br ${promo.color}`}>
                  <div className="absolute top-4 right-4 gold-gradient text-[#0D1B2A] text-[10px] font-extrabold px-3 py-1.5 rounded-full uppercase tracking-wide">
                    {promo.badge}
                  </div>
                  <div className="absolute -bottom-12 -right-12 w-40 h-40 rounded-full bg-white/5" />
                  <div className="relative">
                    <div className="font-display text-5xl font-bold mb-1">{promo.discount}</div>
                    <div className="font-display font-bold text-xl md:text-2xl mb-3">{promo.title}</div>
                    <p className="text-white/85 text-sm mb-4 leading-relaxed">{promo.desc}</p>
                    <div className="flex items-center gap-2 text-white/70 text-sm mb-1">
                      <Clock className="w-4 h-4 text-[#E8C46A]" />
                      Hết hạn: {promo.expiry}
                    </div>
                    <Countdown endDate={promo.expiry} />
                    <Link href="/dat-lich">
                      <span
                        className="mt-5 inline-flex items-center gap-2 bg-white text-[#0D1B2A] rounded-full px-6 h-11 font-bold text-sm hover:shadow-lg transition-all cursor-pointer"
                        data-testid={`button-promo-${promo.id}`}
                      >
                        Đặt lịch ngay
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 card-luxury p-6 md:p-8 !translate-y-0">
            <h3 className="font-display font-bold text-[#0D1B2A] mb-4">Điều kiện áp dụng</h3>
            <ul className="space-y-2 text-sm text-[#0D1B2A]/65">
              <li className="flex gap-2"><span className="text-[#C89B3C]">◆</span> Ưu đãi áp dụng cho khách hàng mới và khách hàng cũ</li>
              <li className="flex gap-2"><span className="text-[#C89B3C]">◆</span> Không áp dụng đồng thời nhiều chương trình khuyến mãi</li>
              <li className="flex gap-2"><span className="text-[#C89B3C]">◆</span> Cần xuất trình thông tin đặt lịch khi đến khám</li>
              <li className="flex gap-2"><span className="text-[#C89B3C]">◆</span> Chương trình có thể kết thúc sớm khi hết hạn quota</li>
              <li className="flex gap-2"><span className="text-[#C89B3C]">◆</span> Liên hệ hotline <strong className="text-[#0D1B2A]">{BRAND.hotline}</strong> để biết thêm chi tiết</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
