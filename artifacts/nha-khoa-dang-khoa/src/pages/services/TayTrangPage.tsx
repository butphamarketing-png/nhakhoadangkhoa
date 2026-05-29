import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight, CheckCircle, ArrowRight, Sun } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/lib/constants";

const METHODS = [
  { name: "Tẩy trắng tại nhà", price: "2–3 triệu", desc: "Máng cá nhân + gel tẩy, thực hiện tại nhà 2–4 tuần.", icon: "🏠" },
  { name: "Tẩy trắng tại PK", price: "3–4.5 triệu", desc: "Gel nồng độ cao, ánh sáng LED tăng hiệu quả, 1 buổi.", icon: "🦷" },
  { name: "Tẩy trắng Laser", price: "4–6 triệu", desc: "Công nghệ Laser Whitening hiện đại nhất, kết quả tức thì.", icon: "⚡" },
  { name: "Combo bảo trì", price: "5.5–8 triệu", desc: "Laser tại PK + máng duy trì tại nhà, kết quả bền lâu.", icon: "✨" },
];

const FAQS = [
  { q: "Tẩy trắng có hại men răng không?", a: "Tẩy trắng đúng kỹ thuật không hại men răng. Gel được kiểm soát nồng độ an toàn, thực hiện bởi bác sĩ chuyên khoa." },
  { q: "Kết quả duy trì bao lâu?", a: "Laser whitening duy trì 1–3 năm tùy chế độ ăn. Hạn chế cà phê, trà đậm, thuốc lá để giữ màu lâu hơn." },
  { q: "Tẩy trắng có ê buốt không?", a: "Có thể ê buốt nhẹ trong và sau điều trị, tự khỏi sau 24–48 giờ. Bác sĩ sẽ xử lý nếu cần." },
  { q: "Bao nhiêu tuổi thì tẩy trắng được?", a: "Từ 18 tuổi trở lên, khi răng vĩnh viễn đã mọc hoàn toàn và men răng ổn định." },
];

export default function TayTrangPage() {
  return (
    <div>
      <div className="navy-gradient py-20 relative overflow-hidden">
        <div className="container-custom relative">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-6">
            <Link href="/"><span className="hover:text-white cursor-pointer">Trang chủ</span></Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/dich-vu"><span className="hover:text-white cursor-pointer">Dịch vụ</span></Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Tẩy Trắng Răng</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Tẩy Trắng Răng <span className="text-[#C89B3C]">Laser</span>
          </h1>
          <p className="text-white/70 text-lg">Nụ cười trắng sáng tức thì với công nghệ Laser Whitening tiên tiến nhất.</p>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-[#0D1B2A] mb-3">Phương pháp tẩy trắng</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {METHODS.map((m, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white border border-amber-100 rounded-2xl p-5 hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="text-3xl mb-3">{m.icon}</div>
                <h3 className="font-bold text-[#0D1B2A] text-base mb-1">{m.name}</h3>
                <div className="text-[#C89B3C] font-extrabold text-lg mb-2">{m.price} triệu</div>
                <p className="text-gray-500 text-sm leading-relaxed">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-amber-50 to-white">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-[#0D1B2A] mb-3">Quy trình tẩy trắng</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { step: "01", title: "Thăm khám và làm sạch", desc: "Kiểm tra men răng, cao răng trước khi tiến hành." },
              { step: "02", title: "Bảo vệ nướu", desc: "Che chắn nướu và tổ chức mềm bằng màng bảo vệ." },
              { step: "03", title: "Thoa gel & chiếu Laser", desc: "Thoa gel tẩy trắng, kích hoạt bằng tia Laser 15–30 phút." },
              { step: "04", title: "Kiểm tra & tư vấn duy trì", desc: "Đánh giá kết quả, hướng dẫn chế độ ăn uống duy trì." },
            ].map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white border border-amber-100 rounded-2xl p-5 hover:shadow-lg transition-all">
                <div className="w-10 h-10 rounded-xl gold-gradient flex items-center justify-center mb-3">
                  <Sun className="w-5 h-5 text-white" />
                </div>
                <div className="text-[#C89B3C] font-extrabold text-xl mb-1">{s.step}</div>
                <h3 className="font-bold text-[#0D1B2A] text-sm mb-2">{s.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-[#0D1B2A] mb-3">Câu hỏi thường gặp</h2>
          </motion.div>
          <Accordion type="single" collapsible className="space-y-3">
            {FAQS.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-white rounded-2xl border border-gray-100 shadow-sm px-5">
                <AccordionTrigger className="font-semibold text-[#0D1B2A] hover:text-[#C89B3C] text-left text-sm">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-gray-600 text-sm pb-4">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-16 gold-gradient">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Trắng sáng ngay sau 1 buổi</h2>
          <p className="text-white/80 mb-8">Đặt lịch tẩy trắng laser và nhận ngay ưu đãi giảm 500k.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dat-lich">
              <Button className="bg-white text-[#C89B3C] rounded-xl h-12 px-8 font-bold hover:shadow-xl" data-testid="button-taytrang-cta">
                Đặt lịch ngay <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <a href={`tel:${BRAND.hotlineRaw}`}>
              <Button variant="outline" className="rounded-xl h-12 px-8 font-bold border-2 border-white text-white hover:bg-white/10">
                Gọi: {BRAND.hotline}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
