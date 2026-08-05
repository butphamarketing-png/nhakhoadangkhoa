import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight, CheckCircle, ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/lib/constants";

const TYPES = [
  { name: "Răng khôn mọc thẳng", difficulty: "Đơn giản", time: "15–20 phút", price: "500k–800k" },
  { name: "Răng khôn mọc lệch nhẹ", difficulty: "Trung bình", time: "30–45 phút", price: "1–2 triệu" },
  { name: "Răng khôn mọc lệch ngang", difficulty: "Phức tạp", time: "45–60 phút", price: "2–3.5 triệu" },
  { name: "Răng khôn mọc ngầm", difficulty: "Phức tạp cao", time: "60–90 phút", price: "3.5–6 triệu" },
];

const FAQS = [
  { q: "Nhổ răng khôn có đau không?", a: "Không đau trong quá trình nhổ vì được gây tê. Sau khi hết tê có thể ê nhức, dùng thuốc giảm đau theo đơn bác sĩ." },
  { q: "Sau nhổ bao lâu thì lành?", a: "Vết thương cơ bản lành sau 3–5 ngày. Hồi phục hoàn toàn sau 2–4 tuần tùy ca." },
  { q: "Nhổ xong ăn gì được?", a: "24 giờ đầu ăn đồ mềm, lỏng, nguội. Tránh đồ cứng, nóng, thức uống có cồn trong 1 tuần." },
  { q: "Có cần nhổ tất cả răng khôn không?", a: "Không nhất thiết. Chỉ nhổ khi gây đau, viêm nhiễm, ảnh hưởng răng bên cạnh hoặc không đủ chỗ mọc." },
];

const difficultyColors: Record<string, string> = {
  "Đơn giản": "bg-green-100 text-green-700",
  "Trung bình": "bg-amber-100 text-amber-700",
  "Phức tạp": "bg-orange-100 text-orange-700",
  "Phức tạp cao": "bg-red-100 text-red-700",
};

export default function NhoRangKhonPage() {
  return (
    <div>
      <div className="navy-gradient py-20 relative overflow-hidden">
        <div className="container-custom relative">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-6">
            <Link href="/"><span className="hover:text-white cursor-pointer">Trang chủ</span></Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/dich-vu"><span className="hover:text-white cursor-pointer">Dịch vụ</span></Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Nhổ Răng Khôn</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Nhổ Răng Khôn <span className="text-[#C89B3C]">Không Đau</span>
          </h1>
          <p className="text-white/70 text-lg">Kỹ thuật nhổ răng khôn hiện đại, không đau, phục hồi nhanh chóng.</p>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-[#0D1B2A] mb-3">Phân loại và chi phí</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TYPES.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
                <h3 className="font-bold text-[#0D1B2A] text-sm mb-3">{t.name}</h3>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${difficultyColors[t.difficulty]}`}>
                  {t.difficulty}
                </span>
                <div className="mt-3 space-y-1 text-xs text-gray-500">
                  <div>Thời gian: <strong>{t.time}</strong></div>
                  <div>Chi phí: <strong className="text-[#C89B3C]">{t.price}</strong></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding navy-gradient">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-white mb-3">Quy trình nhổ răng</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { step: "01", title: "Chụp X-quang & đánh giá", desc: "Xác định vị trí, hướng mọc và độ phức tạp của răng khôn." },
              { step: "02", title: "Gây tê cục bộ", desc: "Gây tê đảm bảo bệnh nhân không cảm thấy đau trong suốt quy trình." },
              { step: "03", title: "Tiến hành nhổ", desc: "Sử dụng dụng cụ chuyên dụng, kỹ thuật tối thiểu xâm lấn." },
              { step: "04", title: "Hướng dẫn chăm sóc sau nhổ", desc: "Chỉ định thuốc, hướng dẫn ăn uống và tái khám nếu cần." },
            ].map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center hover:bg-white/10 transition-all">
                <div className="text-[#C89B3C] font-extrabold text-3xl mb-3">{s.step}</div>
                <h3 className="font-bold text-white text-sm mb-2">{s.title}</h3>
                <p className="text-white/60 text-xs leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-amber-50 to-white">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="mb-10">
            <h2 className="text-2xl font-extrabold text-[#0D1B2A] mb-4">Lưu ý sau khi nhổ răng khôn</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Nên", items: ["Cắn gạc 30–60 phút sau nhổ", "Chườm lạnh bên ngoài má 15–20 phút", "Uống thuốc theo đơn bác sĩ", "Ăn đồ mềm, nguội trong 24–48 giờ"] },
              { title: "Không nên", items: ["Nhổ gạc quá sớm", "Súc miệng mạnh trong 24 giờ đầu", "Hút thuốc trong 1 tuần", "Ăn đồ cứng, nóng, cay"] },
            ].map((col, i) => (
              <div key={i} className={`rounded-2xl p-5 border ${i === 0 ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"}`}>
                <h3 className={`font-bold mb-3 ${i === 0 ? "text-green-700" : "text-red-700"}`}>{col.title}</h3>
                <ul className="space-y-2">
                  {col.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className={`w-4 h-4 flex-shrink-0 ${i === 0 ? "text-green-500" : "text-red-400"}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
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
          <h2 className="text-3xl font-extrabold text-white mb-4">Nhổ răng khôn không còn đáng sợ</h2>
          <p className="text-white/80 mb-8">Đội ngũ bác sĩ chuyên môn cao, quy trình nhanh, không đau.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dat-lich">
              <Button className="bg-white text-[#C89B3C] rounded-xl h-12 px-8 font-bold hover:shadow-xl" data-testid="button-nho-cta">
                Đặt lịch nhổ răng <ArrowRight className="w-4 h-4 ml-2" />
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
