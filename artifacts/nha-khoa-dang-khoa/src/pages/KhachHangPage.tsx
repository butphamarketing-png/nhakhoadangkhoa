import { motion } from "framer-motion";
import { Link } from "wouter";
import { Star } from "lucide-react";
import PageHero from "@/components/PageHero";
import { TESTIMONIALS, BRAND } from "@/lib/constants";
import { GALLERY_TESTIMONIALS } from "@/lib/home-content";

export default function KhachHangPage() {
  return (
    <div>
      <PageHero
        label="Khách hàng"
        breadcrumb="Khách hàng"
        title={
          <>
            Khách Hàng <span className="text-[#C89B3C]">Nói Gì</span>
          </>
        }
        subtitle="15.000+ khách hàng đã tin tưởng và hài lòng"
      />

      {/* Rating Summary */}
      <section className="py-10 section-cream border-b border-[#C89B3C]/10">
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
                className="card-luxury p-5 !translate-y-0 hover:!translate-y-[-6px]"
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {GALLERY_TESTIMONIALS.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-shadow"
                data-testid={`gallery-${item.id}`}
              >
                <img src={item.image} alt={item.name} className="w-full h-auto object-cover" />
                <p className="text-center text-xs font-bold text-[#0D1B2A] py-2 bg-amber-50">{item.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 cta-gold-gradient">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl font-bold text-[#0D1B2A] mb-4">Bạn muốn có kết quả tương tự?</h2>
          <p className="text-[#0D1B2A]/70 mb-8">Đặt lịch khám và nhận tư vấn miễn phí từ đội ngũ chuyên gia.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dat-lich">
              <span className="btn-gold inline-flex items-center !h-12 !px-8 cursor-pointer" data-testid="button-khachhang-cta">
                Đặt lịch ngay
              </span>
            </Link>
            <a href={`tel:${BRAND.hotlineRaw}`}>
              <span className="btn-outline-gold inline-flex items-center !h-12 !px-8 cursor-pointer">
                Gọi {BRAND.hotline}
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
