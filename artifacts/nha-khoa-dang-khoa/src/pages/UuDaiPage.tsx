import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PROMOTIONS, BRAND } from "@/lib/constants";

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
        <div key={label} className="bg-white/20 rounded-lg px-2 py-1 text-center min-w-[40px]">
          <div className="text-lg font-extrabold text-white leading-none">{String(val).padStart(2, "0")}</div>
          <div className="text-white/60 text-[9px] uppercase">{label}</div>
        </div>
      ))}
    </div>
  );
}

export default function UuDaiPage() {
  return (
    <div>
      <div className="navy-gradient py-20">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-6">
            <Link href="/"><span className="hover:text-white cursor-pointer">Trang chủ</span></Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Ưu đãi</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Ưu Đãi <span className="text-[#C89B3C]">Đặc Biệt</span>
          </h1>
          <p className="text-white/70 text-lg">Các chương trình khuyến mãi hấp dẫn đang chờ bạn</p>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROMOTIONS.map((promo, i) => (
              <motion.div
                key={promo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`bg-gradient-to-br ${promo.color} rounded-3xl p-7 text-white relative overflow-hidden`}
                data-testid={`promo-card-${promo.id}`}
              >
                <div className="absolute top-4 right-4 bg-white/20 text-white text-xs font-extrabold px-3 py-1.5 rounded-xl">{promo.badge}</div>
                <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-white/5" />
                <div className="relative">
                  <div className="text-5xl font-extrabold mb-2">{promo.discount}</div>
                  <div className="font-bold text-2xl mb-3">{promo.title}</div>
                  <div className="text-white/80 text-sm mb-4 leading-relaxed">{promo.desc}</div>
                  <div className="flex items-center gap-2 text-white/70 text-sm mb-2">
                    <Clock className="w-4 h-4" />
                    Hết hạn: {promo.expiry}
                  </div>
                  <Countdown endDate={promo.expiry} />
                  <Link href="/dat-lich">
                    <Button className="mt-5 bg-white/20 hover:bg-white/30 text-white border-0 rounded-xl px-5 h-10 font-bold text-sm transition-colors"
                      data-testid={`button-promo-${promo.id}`}>
                      Đặt lịch ngay <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <h3 className="font-bold text-[#0D1B2A] mb-2">Điều kiện áp dụng</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>• Ưu đãi áp dụng cho khách hàng mới và khách hàng cũ</li>
              <li>• Không áp dụng đồng thời nhiều chương trình khuyến mãi</li>
              <li>• Cần xuất trình thông tin đặt lịch khi đến khám</li>
              <li>• Chương trình có thể kết thúc sớm khi hết hạn quota</li>
              <li>• Liên hệ hotline <strong>{BRAND.hotline}</strong> để biết thêm chi tiết</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
