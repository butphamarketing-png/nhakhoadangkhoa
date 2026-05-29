import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TESTIMONIALS, BRAND } from "@/lib/constants";

const BEFORE_AFTER = [
  { service: "Implant", before: "from-gray-300 to-gray-400", after: "from-amber-200 to-amber-300" },
  { service: "Niềng Răng", before: "from-gray-300 to-gray-400", after: "from-blue-200 to-blue-300" },
  { service: "Răng Sứ", before: "from-gray-300 to-gray-400", after: "from-purple-200 to-purple-300" },
  { service: "Tẩy Trắng", before: "from-gray-400 to-gray-500", after: "from-yellow-100 to-yellow-200" },
];

export default function KhachHangPage() {
  return (
    <div>
      <div className="navy-gradient py-20">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-6">
            <Link href="/"><span className="hover:text-white cursor-pointer">Trang chủ</span></Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Khách hàng</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Khách Hàng <span className="text-[#C89B3C]">Nói Gì</span>
          </h1>
          <p className="text-white/70 text-lg">15.000+ khách hàng đã tin tưởng và hài lòng</p>
        </div>
      </div>

      {/* Rating Summary */}
      <section className="py-10 bg-amber-50">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <div className="text-center">
              <div className="text-6xl font-extrabold text-[#0D1B2A]">5.0</div>
              <div className="flex justify-center gap-1 my-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-[#C89B3C] fill-[#C89B3C]" />
                ))}
              </div>
              <div className="text-gray-500 text-sm">Đánh giá trên Google</div>
            </div>
            <div className="hidden sm:block w-px h-20 bg-amber-200" />
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Đánh giá 5 sao", value: "98%" },
                { label: "Tỷ lệ hài lòng", value: "99.2%" },
                { label: "Tái khám", value: "85%" },
                { label: "Giới thiệu bạn bè", value: "92%" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-extrabold text-[#C89B3C]">{stat.value}</div>
                  <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#0D1B2A] mb-3">Đánh giá từ khách hàng</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[...TESTIMONIALS, ...TESTIMONIALS.slice(0, 1)].map((t, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-white border border-amber-100 rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all"
                data-testid={`testimonial-${i}`}
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-[#C89B3C] fill-[#C89B3C]" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full gold-gradient flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xs">{t.name.split(" ").pop()?.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="font-bold text-[#0D1B2A] text-sm">{t.name}</div>
                    <div className="text-[#C89B3C] text-xs">{t.service}</div>
                  </div>
                  <div className="ml-auto text-xs text-gray-400">{t.date}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-amber-50/30">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#0D1B2A] mb-3">Trước & Sau Điều Trị</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Những kết quả thực tế từ bệnh nhân của chúng tôi</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {BEFORE_AFTER.map((item, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100"
                data-testid={`before-after-${i}`}
              >
                <div className="grid grid-cols-2 h-36">
                  <div className={`bg-gradient-to-br ${item.before} flex items-center justify-center`}>
                    <span className="text-white/70 font-bold text-xs">TRƯỚC</span>
                  </div>
                  <div className={`bg-gradient-to-br ${item.after} flex items-center justify-center`}>
                    <span className="text-amber-800/70 font-bold text-xs">SAU</span>
                  </div>
                </div>
                <div className="p-3 text-center">
                  <span className="font-semibold text-[#0D1B2A] text-sm">{item.service}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gold-gradient">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Bạn muốn có kết quả tương tự?</h2>
          <p className="text-white/80 mb-8">Đặt lịch khám và nhận tư vấn miễn phí từ đội ngũ chuyên gia.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dat-lich">
              <Button className="bg-white text-[#C89B3C] rounded-xl h-12 px-8 font-bold" data-testid="button-khachhang-cta">
                Đặt lịch ngay
              </Button>
            </Link>
            <a href={`tel:${BRAND.hotlineRaw}`}>
              <Button variant="outline" className="rounded-xl h-12 px-8 font-bold border-2 border-white text-white hover:bg-white/10">
                Gọi {BRAND.hotline}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
