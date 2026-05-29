import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/lib/constants";

const FAQS_BY_CAT = [
  {
    cat: "Chung",
    color: "#C89B3C",
    items: [
      { q: "Phòng khám Nha Khoa Đăng Khoa ở đâu?", a: `Phòng khám tọa lạc tại ${BRAND.address}. Mở cửa từ thứ 2 đến chủ nhật.` },
      { q: "Tôi có thể đặt lịch khám như thế nào?", a: "Bạn có thể đặt lịch qua website, gọi hotline 0886868786, nhắn Zalo hoặc Messenger fanpage của chúng tôi." },
      { q: "Chi phí khám ban đầu là bao nhiêu?", a: "Phí khám và tư vấn ban đầu MIỄN PHÍ. Chúng tôi sẽ thăm khám và tư vấn phác đồ điều trị hoàn toàn không tốn phí." },
      { q: "Phòng khám có chụp X-quang không?", a: "Có, chúng tôi trang bị máy chụp X-quang kỹ thuật số 2D và máy CT Cone Beam 3D cho chẩn đoán chính xác." },
    ],
  },
  {
    cat: "Implant Nha Khoa",
    color: "#C89B3C",
    items: [
      { q: "Cấy implant có đau không?", a: "Quá trình cấy implant được thực hiện dưới gây tê cục bộ, bạn sẽ không cảm thấy đau. Sau khi hết tê có thể hơi ê nhức nhẹ, kiểm soát dễ dàng bằng thuốc." },
      { q: "Implant bao lâu thì xong?", a: "Quá trình đặt trụ implant kéo dài 30–60 phút. Toàn bộ quá trình hoàn thiện (đến khi gắn mão sứ) mất 3–6 tháng." },
      { q: "Implant có bền không? Bảo hành bao lâu?", a: "Implant có thể sử dụng cả đời nếu chăm sóc tốt. Chúng tôi bảo hành trụ implant 5–10 năm tùy hãng, mão sứ 3–5 năm." },
      { q: "Ai không thể cấy implant?", a: "Người mắc tiểu đường không kiểm soát được, loãng xương nặng, đang xạ trị vùng đầu mặt cần tư vấn thêm. Hầu hết trường hợp đều có thể cấy được." },
    ],
  },
  {
    cat: "Niềng Răng",
    color: "#2563eb",
    items: [
      { q: "Niềng răng bao lâu thì ra kết quả?", a: "Tùy mức độ lệch lạc, thông thường 12–24 tháng. Invisalign nhẹ có thể chỉ 6–12 tháng." },
      { q: "Niềng răng có ảnh hưởng đến ăn uống không?", a: "Niềng mắc cài cần tránh thức ăn cứng, dính. Invisalign tháo lắp khi ăn nên không bị ảnh hưởng." },
      { q: "Trẻ em bao nhiêu tuổi có thể niềng răng?", a: "Thường từ 12–14 tuổi khi răng vĩnh viễn đã mọc đủ. Một số trường hợp có thể chỉnh nha sớm từ 7–9 tuổi." },
    ],
  },
  {
    cat: "Tẩy Trắng Răng",
    color: "#d97706",
    items: [
      { q: "Tẩy trắng răng có hại không?", a: "Tẩy trắng đúng kỹ thuật hoàn toàn an toàn. Có thể ê buốt nhẹ sau điều trị, tự hết trong 24–48 giờ." },
      { q: "Kết quả tẩy trắng duy trì bao lâu?", a: "Tẩy trắng laser tại phòng khám duy trì 1–3 năm tùy chế độ ăn uống và sinh hoạt. Hạn chế cà phê, thuốc lá giúp giữ màu lâu hơn." },
      { q: "Răng sứ có tẩy trắng được không?", a: "Không. Các loại tẩy trắng chỉ tác dụng trên răng thật. Nếu muốn thay đổi màu răng sứ, cần làm lại mão sứ mới." },
    ],
  },
];

export default function FaqPage() {
  return (
    <div>
      <div className="navy-gradient py-20">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-6">
            <Link href="/"><span className="hover:text-white cursor-pointer">Trang chủ</span></Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Câu hỏi thường gặp</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Câu Hỏi <span className="text-[#C89B3C]">Thường Gặp</span>
          </h1>
          <p className="text-white/70 text-lg">Giải đáp những thắc mắc phổ biến của khách hàng</p>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="space-y-10">
            {FAQS_BY_CAT.map((cat, ci) => (
              <motion.div
                key={cat.cat}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: ci * 0.1 }}
              >
                <h2 className="text-xl font-extrabold text-[#0D1B2A] mb-4 flex items-center gap-3">
                  <span className="w-1.5 h-6 rounded-full" style={{ background: cat.color }} />
                  {cat.cat}
                </h2>
                <Accordion type="single" collapsible className="space-y-2">
                  {cat.items.map((faq, i) => (
                    <AccordionItem key={i} value={`${ci}-${i}`}
                      className="bg-white rounded-2xl border border-gray-100 shadow-sm px-5"
                      data-testid={`faq-${ci}-${i}`}>
                      <AccordionTrigger className="font-semibold text-[#0D1B2A] hover:text-[#C89B3C] text-left text-sm">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 text-sm pb-4">{faq.a}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 bg-amber-50 border border-amber-200 rounded-3xl p-8 text-center">
            <h3 className="text-xl font-bold text-[#0D1B2A] mb-3">Không tìm thấy câu trả lời?</h3>
            <p className="text-gray-600 mb-5">Liên hệ trực tiếp để được tư vấn miễn phí từ đội ngũ chuyên gia.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={`tel:${BRAND.hotlineRaw}`}>
                <Button className="gold-gradient text-white border-0 rounded-xl px-6 h-11 font-bold" data-testid="button-faq-phone">
                  Gọi {BRAND.hotline}
                </Button>
              </a>
              <Link href="/lien-he">
                <Button variant="outline" className="rounded-xl px-6 h-11 font-bold border-2 border-[#0D1B2A] text-[#0D1B2A]" data-testid="button-faq-contact">
                  Gửi câu hỏi
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
