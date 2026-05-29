import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/lib/constants";

const CASES = [
  { service: "Implant", from: "from-gray-300 to-gray-400", to: "from-amber-200 to-amber-300", desc: "Phục hồi răng mất bằng implant Straumann" },
  { service: "Niềng Răng", from: "from-gray-200 to-gray-300", to: "from-blue-200 to-blue-300", desc: "Chỉnh nha Invisalign 18 tháng" },
  { service: "Răng Sứ", from: "from-gray-300 to-gray-400", to: "from-purple-200 to-purple-300", desc: "Bọc sứ Zirconia 6 răng cửa" },
  { service: "Tẩy Trắng", from: "from-yellow-700 to-yellow-800", to: "from-yellow-50 to-white", desc: "Tẩy trắng laser 1 buổi" },
  { service: "Implant All-on-4", from: "from-gray-400 to-gray-500", to: "from-amber-100 to-amber-200", desc: "Phục hình toàn hàm All-on-4" },
  { service: "Veneer", from: "from-gray-200 to-gray-300", to: "from-pink-100 to-pink-200", desc: "Veneer sứ 8 răng cửa" },
];

export default function TruocSauPage() {
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CASES.map((c, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all"
                data-testid={`case-${i}`}
              >
                <div className="grid grid-cols-2 h-48">
                  <div className={`bg-gradient-to-br ${c.from} relative flex items-end p-3`}>
                    <span className="bg-black/40 text-white text-xs font-bold px-2 py-0.5 rounded">TRƯỚC</span>
                  </div>
                  <div className={`bg-gradient-to-br ${c.to} relative flex items-end p-3`}>
                    <span className="bg-black/20 text-white text-xs font-bold px-2 py-0.5 rounded">SAU</span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="font-bold text-[#C89B3C] text-sm mb-1">{c.service}</div>
                  <p className="text-gray-600 text-sm">{c.desc}</p>
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
