import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/lib/constants";
import { useMediaCms } from "@/lib/cms-provider";
import { GALLERY_TESTIMONIALS } from "@/lib/home-content";
import { IMAGES } from "@/lib/images";

export default function TruocSauPage() {
  const { galleryTestimonials } = useMediaCms();
  const gallery = galleryTestimonials?.length ? galleryTestimonials : GALLERY_TESTIMONIALS;

  return (
    <div>
      <div className="navy-gradient py-20">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-6">
            <Link href="/"><span className="hover:text-white cursor-pointer">Trang chủ</span></Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Trước & Sau</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Kết Quả <span className="text-[#C89B3C]">Trước & Sau</span>
          </h1>
          <p className="text-white/70 text-lg">Những kết quả điều trị thực tế từ khách hàng của chúng tôi</p>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-12 rounded-2xl overflow-hidden shadow-xl border border-amber-100"
          >
            <img
              src={IMAGES.testimonials.truocSau}
              alt="Kết quả trước và sau điều trị"
              className="w-full h-auto"
            />
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.filter((g) => g.id !== "truoc-sau").map((c, i) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all"
                data-testid={`case-${c.id}`}
              >
                <img src={c.image} alt={c.name} className="w-full h-auto object-cover" />
                <div className="p-4">
                  <div className="font-bold text-[#C89B3C] text-sm">{c.name}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-500 mb-6">Muốn có kết quả tương tự? Đặt lịch khám ngay hôm nay.</p>
            <Link href="/dat-lich">
              <Button className="gold-gradient text-white border-0 rounded-xl px-8 h-12 font-bold"
                data-testid="button-truocssau-cta">
                Đặt lịch khám miễn phí
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-amber-50 border-t border-amber-100">
        <div className="container-custom max-w-3xl text-center">
          <h3 className="text-xl font-bold text-[#0D1B2A] mb-3">Đặt lịch tư vấn trực tiếp</h3>
          <p className="text-gray-600 mb-6">
            Hãy để chúng tôi thăm khám và tư vấn phác đồ điều trị phù hợp nhất với tình trạng của bạn.
            Hoàn toàn miễn phí – không ràng buộc.
          </p>
          <a href={`tel:${BRAND.hotlineRaw}`}>
            <Button variant="outline" className="rounded-xl px-8 h-12 font-bold border-2 border-[#C89B3C] text-[#C89B3C] hover:bg-[#C89B3C] hover:text-white"
              data-testid="button-truocssau-phone">
              Gọi ngay: {BRAND.hotline}
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
