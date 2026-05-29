import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight, CheckCircle, ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/lib/constants";

const SIGNS = [
  "Đau nhức răng kéo dài, đặc biệt khi nhai",
  "Ê buốt khi ăn nóng, lạnh",
  "Răng sẫm màu, đổi màu bất thường",
  "Đau nhức lan lên đầu hoặc tai",
  "Nướu sưng, có mủ xung quanh răng",
  "Đau khi chạm vào răng",
];

const FAQS = [
  { q: "Lấy tủy có đau không?", a: "Không. Điều trị tủy được thực hiện dưới gây tê cục bộ. Hiện đại với máy Rotary, quy trình nhanh hơn và êm hơn." },
  { q: "Sau lấy tủy có cần bọc sứ không?", a: "Nên bọc sứ bảo vệ sau lấy tủy vì răng sau khi điều trị tủy dễ gãy vỡ hơn." },
  { q: "Điều trị tủy mất bao nhiêu buổi?", a: "Thường 1–3 buổi tùy phức tạp. Với công nghệ Rotary hiện đại, nhiều ca chỉ cần 1 buổi." },
  { q: "Tủy đã lấy có đau lại không?", a: "Sau khi điều trị tủy đúng chuẩn, răng không còn cảm giác đau do đã loại bỏ dây thần kinh." },
];

export default function NoiNhaPage() {
  return (
    <div>
      <div className="navy-gradient py-20 relative overflow-hidden">
        <div className="container-custom relative">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-6">
            <Link href="/"><span className="hover:text-white cursor-pointer">Trang chủ</span></Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/dich-vu"><span className="hover:text-white cursor-pointer">Dịch vụ</span></Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Điều Trị Nội Nha</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Điều Trị <span className="text-[#C89B3C]">Nội Nha</span>
          </h1>
          <p className="text-white/70 text-lg">Chữa tủy răng chuyên sâu với máy Rotary hiện đại — không đau, phục hồi nhanh.</p>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-extrabold text-[#0D1B2A] mb-5">Khi nào cần điều trị tủy?</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Điều trị tủy cần thiết khi tủy răng bị viêm nhiễm hoặc hoại tử do sâu răng nặng, chấn thương hoặc nứt vỡ.
                Phát hiện sớm giúp cứu được răng, tránh phải nhổ.
              </p>
              <div className="space-y-3">
                {SIGNS.map((s, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-amber-50 rounded-xl">
                    <CheckCircle className="w-4 h-4 text-[#C89B3C] flex-shrink-0" />
                    <span className="text-sm text-gray-700">{s}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="bg-[#0D1B2A] rounded-3xl p-8 text-white">
              <h3 className="text-xl font-bold mb-5 text-[#C89B3C]">Quy trình điều trị tủy</h3>
              <div className="space-y-4">
                {[
                  { step: "01", title: "Chụp X-quang & chẩn đoán", desc: "Xác định mức độ tổn thương và số ống tủy." },
                  { step: "02", title: "Gây tê & mở tủy", desc: "Gây tê hoàn toàn, mở buồng tủy tiếp cận ống tủy." },
                  { step: "03", title: "Nạo sạch ống tủy", desc: "Dùng máy Rotary để làm sạch và tạo hình ống tủy." },
                  { step: "04", title: "Trám bít ống tủy", desc: "Bít kín ống tủy bằng vật liệu Gutta-percha." },
                  { step: "05", title: "Phục hồi thân răng", desc: "Trám tạm hoặc bọc sứ bảo vệ thân răng." },
                ].map((s, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-lg gold-gradient flex items-center justify-center text-white text-xs font-bold flex-shrink-0">{s.step}</span>
                    <div>
                      <div className="font-semibold text-white text-sm">{s.title}</div>
                      <div className="text-white/60 text-xs mt-0.5">{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
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
          <h2 className="text-3xl font-extrabold text-white mb-4">Đau răng? Đừng chờ đợi</h2>
          <p className="text-white/80 mb-8">Điều trị sớm giúp cứu răng, tiết kiệm chi phí về lâu dài.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dat-lich">
              <Button className="bg-white text-[#C89B3C] rounded-xl h-12 px-8 font-bold hover:shadow-xl" data-testid="button-noinha-cta">
                Đặt lịch ngay <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <a href={`tel:${BRAND.hotlineRaw}`}>
              <Button variant="outline" className="rounded-xl h-12 px-8 font-bold border-2 border-white text-white hover:bg-white/10">
                Gọi cấp cứu: {BRAND.hotline}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
