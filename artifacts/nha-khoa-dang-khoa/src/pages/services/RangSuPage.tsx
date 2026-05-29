import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight, CheckCircle, ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/lib/constants";

const TYPES = [
  { name: "Sứ kim loại", price: "1.5–2.5 triệu/răng", desc: "Chi phí thấp, bền chắc, phù hợp răng hàm", color: "#6b7280" },
  { name: "Sứ Cercon", price: "3–4 triệu/răng", desc: "Toàn sứ, thẩm mỹ tốt, không kim loại", color: "#7c3aed" },
  { name: "Sứ Zirconia", price: "4–6 triệu/răng", desc: "Cao cấp nhất, trong suốt tự nhiên, bền vĩnh viễn", color: "#C89B3C" },
  { name: "Veneer sứ", price: "4.5–7 triệu/răng", desc: "Dán mỏng, ít mài răng, thẩm mỹ xuất sắc", color: "#2563eb" },
];

const FAQS = [
  { q: "Bọc sứ có đau không?", a: "Không đau. Quy trình mài răng và gắn mão sứ đều dưới gây tê, hoàn toàn thoải mái." },
  { q: "Răng sứ bền bao lâu?", a: "Zirconia và Cercon có tuổi thọ 15–20+ năm nếu chăm sóc đúng. Bảo hành 3–10 năm tùy loại." },
  { q: "Veneer và bọc sứ khác nhau thế nào?", a: "Veneer chỉ dán mặt trước, mài ít hơn, thẩm mỹ cao. Bọc sứ bọc toàn bộ thân răng, phù hợp răng bị tổn thương nhiều." },
  { q: "Cần bọc bao nhiêu răng?", a: "Tùy tình trạng và mong muốn thẩm mỹ. Bác sĩ sẽ tư vấn phác đồ phù hợp sau khi thăm khám." },
];

export default function RangSuPage() {
  return (
    <div>
      <div className="navy-gradient py-20 relative overflow-hidden">
        <div className="container-custom relative">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-6">
            <Link href="/"><span className="hover:text-white cursor-pointer">Trang chủ</span></Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/dich-vu"><span className="hover:text-white cursor-pointer">Dịch vụ</span></Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Răng Sứ Thẩm Mỹ</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Răng Sứ <span className="text-[#C89B3C]">Thẩm Mỹ</span>
          </h1>
          <p className="text-white/70 text-lg">Nụ cười hoàn hảo với răng sứ Zirconia, Veneer cao cấp — tự nhiên như răng thật.</p>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-[#0D1B2A] mb-3">Các loại răng sứ</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TYPES.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white border-2 rounded-2xl p-5 hover:shadow-xl hover:-translate-y-1 transition-all"
                style={{ borderColor: `${t.color}30` }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: `${t.color}20` }}>
                  <CheckCircle className="w-5 h-5" style={{ color: t.color }} />
                </div>
                <h3 className="font-bold text-[#0D1B2A] text-base mb-1">{t.name}</h3>
                <div className="font-extrabold text-lg mb-2" style={{ color: t.color }}>{t.price}</div>
                <p className="text-gray-500 text-sm">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding navy-gradient">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-white mb-3">Quy trình làm răng sứ</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { step: "01", title: "Thăm khám & tư vấn", desc: "Đánh giá tình trạng răng, lựa chọn loại sứ phù hợp." },
              { step: "02", title: "Mài răng & lấy dấu", desc: "Mài chỉnh kích thước, scan 3D hoặc lấy dấu truyền thống." },
              { step: "03", title: "Làm răng tạm & kiểm tra màu", desc: "Đeo răng tạm, kiểm tra màu sắc và khớp cắn." },
              { step: "04", title: "Gắn răng sứ vĩnh viễn", desc: "Gắn kết bằng keo nha khoa chuyên dụng, kiểm tra lần cuối." },
            ].map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center hover:bg-white/10 transition-all">
                <div className="text-[#C89B3C] font-extrabold text-3xl mb-3">{s.step}</div>
                <h3 className="font-bold text-white text-sm mb-2">{s.title}</h3>
                <p className="text-white/60 text-xs">{s.desc}</p>
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
          <h2 className="text-3xl font-extrabold text-white mb-4">Thiết kế nụ cười hoàn hảo</h2>
          <p className="text-white/80 mb-8">Bác sĩ sẽ tư vấn loại sứ phù hợp và mô phỏng kết quả trước khi điều trị.</p>
          <Link href="/dat-lich">
            <Button className="bg-white text-[#C89B3C] rounded-xl h-12 px-8 font-bold hover:shadow-xl" data-testid="button-rangsu-cta">
              Đặt lịch tư vấn miễn phí <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
