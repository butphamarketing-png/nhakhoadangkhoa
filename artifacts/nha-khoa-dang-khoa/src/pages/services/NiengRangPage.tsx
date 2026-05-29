import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight, CheckCircle, ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/lib/constants";

const TYPES = [
  { name: "Niềng mắc cài kim loại", price: "18–22 triệu", pros: "Chi phí thấp, hiệu quả cao, phổ biến nhất", color: "bg-blue-50 border-blue-200" },
  { name: "Niềng mắc cài sứ", price: "22–28 triệu", pros: "Thẩm mỹ hơn kim loại, màu gần giống răng", color: "bg-purple-50 border-purple-200" },
  { name: "Niềng mặt trong (Lingual)", price: "45–65 triệu", pros: "Vô hình hoàn toàn, không ai biết bạn đang niềng", color: "bg-amber-50 border-amber-200" },
  { name: "Invisalign trong suốt", price: "50–100 triệu", pros: "Tháo lắp được, ăn uống thoải mái, hiện đại nhất", color: "bg-emerald-50 border-emerald-200" },
];

const STEPS = [
  { step: "01", title: "Khám & chụp X-quang toàn hàm", desc: "Đánh giá tình trạng khớp cắn, lệch lạc, lập kế hoạch điều trị." },
  { step: "02", title: "Scan 3D & lên phác đồ số", desc: "Máy Scan Itero 5D lấy dấu kỹ thuật số, mô phỏng kết quả trước điều trị." },
  { step: "03", title: "Gắn mắc cài / nhận khay Invisalign", desc: "Tiến hành gắn mắc cài hoặc nhận bộ khay niềng trong suốt." },
  { step: "04", title: "Tái khám định kỳ", desc: "Tái khám 4–6 tuần/lần để siết lực và theo dõi tiến trình." },
  { step: "05", title: "Tháo niềng & gắn hàm duy trì", desc: "Kết thúc điều trị, gắn hàm duy trì để giữ kết quả." },
];

const FAQS = [
  { q: "Niềng răng bao lâu thì xong?", a: "Tùy mức độ lệch, thường 12–24 tháng. Invisalign nhẹ có thể chỉ 6–12 tháng." },
  { q: "Niềng răng có đau không?", a: "Những ngày đầu và sau mỗi lần siết có thể ê buốt nhẹ, tự hết sau 2–3 ngày." },
  { q: "Trẻ em bao nhiêu tuổi thì niềng được?", a: "Từ 12–14 tuổi khi răng vĩnh viễn mọc đủ. Một số ca có thể can thiệp sớm hơn." },
  { q: "Ăn uống sau khi niềng có hạn chế không?", a: "Mắc cài cần tránh đồ cứng, dai, dính. Invisalign tháo ra khi ăn nên thoải mái hơn." },
];

export default function NiengRangPage() {
  return (
    <div>
      <div className="navy-gradient py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full border-2 border-[#C89B3C]" />
        </div>
        <div className="container-custom relative">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-6">
            <Link href="/"><span className="hover:text-white cursor-pointer">Trang chủ</span></Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/dich-vu"><span className="hover:text-white cursor-pointer">Dịch vụ</span></Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Niềng Răng</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Niềng Răng <span className="text-[#C89B3C]">Chỉnh Nha</span>
          </h1>
          <p className="text-white/70 text-lg">Chỉnh nha toàn diện với mắc cài và Invisalign — nụ cười hoàn hảo trong tầm tay.</p>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-[#0D1B2A] mb-3">Các loại niềng răng</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TYPES.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`rounded-2xl border p-5 hover:shadow-lg transition-all hover:-translate-y-1 ${t.color}`}>
                <h3 className="font-bold text-[#0D1B2A] text-base mb-2">{t.name}</h3>
                <div className="text-[#C89B3C] font-extrabold text-xl mb-3">{t.price} đ</div>
                <p className="text-gray-600 text-xs leading-relaxed">{t.pros}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding navy-gradient">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-white mb-3">Quy trình niềng răng</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {STEPS.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-all text-center">
                <div className="text-[#C89B3C] font-extrabold text-2xl mb-3">{s.step}</div>
                <h3 className="font-bold text-white text-sm mb-2">{s.title}</h3>
                <p className="text-white/60 text-xs leading-relaxed">{s.desc}</p>
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
          <h2 className="text-3xl font-extrabold text-white mb-4">Đặt lịch tư vấn niềng răng</h2>
          <p className="text-white/80 mb-8">Khám và nhận phác đồ chỉnh nha cùng báo giá chi tiết miễn phí.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dat-lich">
              <Button className="bg-white text-[#C89B3C] rounded-xl h-12 px-8 font-bold hover:shadow-xl" data-testid="button-nieng-cta">
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
