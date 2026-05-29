import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight, CheckCircle, ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/lib/constants";

const BENEFITS = [
  { title: "Tự nhiên như răng thật", desc: "Tích hợp hoàn toàn với xương hàm, cảm giác và chức năng như răng thật." },
  { title: "Bền vĩnh viễn", desc: "Có thể dùng cả đời nếu chăm sóc đúng cách. Tỷ lệ thành công 98%." },
  { title: "Không mài răng kế bên", desc: "Khác với cầu răng, implant không cần mài chỉnh răng bên cạnh." },
  { title: "Bảo vệ xương hàm", desc: "Ngăn chặn tiêu xương hàm sau khi mất răng, giữ cấu trúc khuôn mặt." },
];

const STEPS = [
  { step: "01", title: "Thăm khám & chụp X-quang 3D", desc: "Đánh giá tình trạng xương hàm, lập kế hoạch cấy ghép chi tiết." },
  { step: "02", title: "Chuẩn bị phẫu thuật", desc: "Vệ sinh răng miệng, gây tê cục bộ, chuẩn bị vùng cấy ghép." },
  { step: "03", title: "Cấy trụ Implant", desc: "Đặt trụ titan vào xương hàm, quá trình 30–60 phút, không đau." },
  { step: "04", title: "Hồi phục (3–6 tháng)", desc: "Trụ tích hợp với xương hàm. Theo dõi định kỳ tại phòng khám." },
  { step: "05", title: "Gắn Abutment & Mão sứ", desc: "Gắn mão sứ zirconia cao cấp, hoàn thiện nụ cười tự nhiên." },
  { step: "06", title: "Bảo hành & Bảo trì", desc: "Kiểm tra định kỳ 6 tháng/lần, bảo hành trụ 5–10 năm." },
];

const FAQS = [
  { q: "Cấy implant có đau không?", a: "Không. Quy trình thực hiện dưới gây tê cục bộ. Sau khi hết tê có thể hơi ê nhẹ, kiểm soát dễ dàng bằng thuốc giảm đau." },
  { q: "Implant bao lâu thì xong?", a: "Đặt trụ: 30–60 phút. Toàn bộ quá trình hoàn thiện mão sứ: 3–6 tháng tùy khả năng liền xương." },
  { q: "Loại implant nào tốt nhất?", a: "Tại Nha Khoa Đăng Khoa sử dụng Straumann (Thụy Sĩ), Osstem (Hàn Quốc) — các hãng uy tín toàn cầu." },
  { q: "Chi phí implant bao nhiêu?", a: "Từ 15.000.000đ trọn gói (trụ + abutment + mão sứ zirconia). Hỗ trợ trả góp 0% lãi suất." },
  { q: "Có cần nghỉ làm sau phẫu thuật không?", a: "Thường nghỉ 1–2 ngày để hồi phục. Nhiều người làm việc bình thường ngay hôm sau." },
];

export default function ImplantPage() {
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
            <span className="text-white">Implant Nha Khoa</span>
          </div>
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#C89B3C]/20 text-[#C89B3C] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              Dịch vụ cao cấp
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Implant Nha Khoa<br /><span className="text-[#C89B3C]">Chuẩn Quốc Tế</span>
            </h1>
            <p className="text-white/70 text-lg">Phục hồi răng vĩnh viễn với công nghệ cấy ghép implant hiện đại, tích hợp hoàn toàn với xương hàm.</p>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-[#0D1B2A] mb-3">Ưu điểm vượt trội</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {BENEFITS.map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white border border-amber-100 rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-10 h-10 rounded-xl gold-gradient flex items-center justify-center mb-3">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-[#0D1B2A] mb-2">{b.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding navy-gradient">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-white mb-3">Quy trình cấy ghép</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {STEPS.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-all">
                <div className="text-[#C89B3C] font-extrabold text-3xl mb-3">{s.step}</div>
                <h3 className="font-bold text-white mb-2">{s.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-gradient-to-br from-amber-50 to-white">
        <div className="container-custom max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-[#0D1B2A] mb-3">Bảng giá tham khảo</h2>
          </motion.div>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-amber-100">
            {[
              { name: "Implant Osstem (Hàn Quốc)", price: "15.000.000 – 20.000.000 VNĐ" },
              { name: "Implant Straumann (Thụy Sĩ)", price: "25.000.000 – 35.000.000 VNĐ" },
              { name: "Implant Nobel Biocare (Mỹ)", price: "30.000.000 – 45.000.000 VNĐ" },
              { name: "All-on-4 (toàn hàm)", price: "Liên hệ tư vấn" },
            ].map((item, i) => (
              <div key={i} className="px-6 py-4 flex justify-between items-center border-b border-gray-50 last:border-0 hover:bg-amber-50/50 transition-colors">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-[#C89B3C]" />
                  <span className="text-gray-700 text-sm">{item.name}</span>
                </div>
                <span className="font-bold text-[#0D1B2A] text-sm">{item.price}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-400 mt-3">Giá đã bao gồm trụ + abutment + mão sứ zirconia. Hỗ trợ trả góp 0%.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-[#0D1B2A] mb-3">Câu hỏi thường gặp</h2>
          </motion.div>
          <Accordion type="single" collapsible className="space-y-3">
            {FAQS.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm px-5">
                <AccordionTrigger className="font-semibold text-[#0D1B2A] hover:text-[#C89B3C] text-left text-sm">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-sm pb-4">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gold-gradient">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Tư vấn Implant miễn phí</h2>
          <p className="text-white/80 mb-8">Chuyên gia sẽ thăm khám và tư vấn phác đồ phù hợp nhất cho bạn.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dat-lich">
              <Button className="bg-white text-[#C89B3C] rounded-xl h-12 px-8 font-bold hover:shadow-xl" data-testid="button-implant-cta">
                Đặt lịch tư vấn <ArrowRight className="w-4 h-4 ml-2" />
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
