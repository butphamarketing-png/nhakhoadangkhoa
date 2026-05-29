import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight, CheckCircle, ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/lib/constants";

const PRICING = [
  {
    service: "Implant Nha Khoa",
    items: [
      { name: "Implant Osstem (Hàn Quốc)", price: "15.000.000 – 20.000.000" },
      { name: "Implant Straumann (Thụy Sĩ)", price: "25.000.000 – 35.000.000" },
      { name: "Implant Nobel Biocare (Mỹ)", price: "30.000.000 – 45.000.000" },
      { name: "All-on-4 (toàn hàm)", price: "Liên hệ tư vấn" },
    ],
    color: "#C89B3C",
  },
  {
    service: "Niềng Răng Chỉnh Nha",
    items: [
      { name: "Niềng mắc cài kim loại", price: "18.000.000 – 22.000.000" },
      { name: "Niềng mắc cài sứ", price: "22.000.000 – 28.000.000" },
      { name: "Niềng mắc cài mặt trong", price: "45.000.000 – 65.000.000" },
      { name: "Invisalign trong suốt", price: "50.000.000 – 100.000.000" },
    ],
    color: "#2563eb",
  },
  {
    service: "Răng Sứ Thẩm Mỹ",
    items: [
      { name: "Sứ kim loại thường", price: "1.500.000 – 2.500.000/răng" },
      { name: "Sứ toàn phần Cercon", price: "3.000.000 – 4.000.000/răng" },
      { name: "Sứ Zirconia cao cấp", price: "4.000.000 – 6.000.000/răng" },
      { name: "Veneer sứ thẩm mỹ", price: "4.500.000 – 7.000.000/răng" },
    ],
    color: "#7c3aed",
  },
  {
    service: "Tẩy Trắng Răng",
    items: [
      { name: "Tẩy trắng tại nhà", price: "2.000.000 – 3.000.000" },
      { name: "Tẩy trắng tại phòng khám", price: "3.000.000 – 4.500.000" },
      { name: "Tẩy trắng Laser Whitening", price: "4.000.000 – 6.000.000" },
      { name: "Combo tẩy trắng + bảo trì", price: "5.500.000 – 8.000.000" },
    ],
    color: "#d97706",
  },
  {
    service: "Điều Trị Nội Nha (Tủy)",
    items: [
      { name: "Lấy tủy răng cửa", price: "800.000 – 1.500.000/răng" },
      { name: "Lấy tủy răng tiền hàm", price: "1.200.000 – 2.000.000/răng" },
      { name: "Lấy tủy răng hàm", price: "1.500.000 – 3.000.000/răng" },
      { name: "Điều trị lại tủy (phức tạp)", price: "3.000.000 – 5.000.000/răng" },
    ],
    color: "#059669",
  },
  {
    service: "Nhổ Răng Khôn",
    items: [
      { name: "Nhổ răng khôn mọc thẳng", price: "500.000 – 800.000/răng" },
      { name: "Nhổ răng khôn mọc lệch", price: "1.000.000 – 2.000.000/răng" },
      { name: "Nhổ răng khôn mọc ngầm", price: "2.000.000 – 3.500.000/răng" },
      { name: "Phẫu thuật phức tạp", price: "3.500.000 – 6.000.000/răng" },
    ],
    color: "#dc2626",
  },
];

const FAQS = [
  { q: "Giá niềng răng đã bao gồm thuốc không?", a: "Giá niềng răng đã bao gồm toàn bộ chi phí điều trị, phục vụ tái khám định kỳ và tháo niềng." },
  { q: "Có hỗ trợ trả góp không?", a: "Có, chúng tôi hỗ trợ trả góp 0% lãi suất từ 6–24 tháng qua thẻ tín dụng các ngân hàng và ví điện tử MoMo, ZaloPay." },
  { q: "Giá implant đã bao gồm mão sứ chưa?", a: "Giá implant trọn gói tại Nha Khoa Đăng Khoa bao gồm: trụ implant, abutment và mão sứ zirconia. Không phát sinh thêm." },
  { q: "Bảo hành răng sứ bao lâu?", a: "Răng sứ zirconia và Cercon được bảo hành từ 3–10 năm tùy loại vật liệu, có hợp đồng bảo hành rõ ràng." },
  { q: "Có cần đặt cọc trước không?", a: "Với các dịch vụ giá trị cao (implant, niềng răng), chúng tôi yêu cầu đặt cọc 20-30% để giữ lịch và vật liệu." },
];

export default function BangGiaPage() {
  return (
    <div>
      <div className="navy-gradient py-20">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-6">
            <Link href="/"><span className="hover:text-white cursor-pointer">Trang chủ</span></Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Bảng giá</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Bảng Giá <span className="text-[#C89B3C]">Dịch Vụ</span>
          </h1>
          <p className="text-white/70 text-lg">Giá minh bạch, không phát sinh. Hỗ trợ trả góp 0% lãi suất.</p>
        </div>
      </div>

      {/* Pricing Tables */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Installment Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="gold-gradient rounded-2xl p-6 mb-10 flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <div>
              <h3 className="text-white font-extrabold text-xl mb-1">Hỗ trợ trả góp 0% lãi suất</h3>
              <p className="text-white/80 text-sm">Trả góp linh hoạt 6–24 tháng qua thẻ tín dụng và ví điện tử</p>
            </div>
            <div className="flex gap-3">
              {["Visa", "MasterCard", "MoMo", "ZaloPay"].map((p) => (
                <div key={p} className="bg-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-lg">{p}</div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-8">
            {PRICING.map((group, i) => (
              <motion.div
                key={group.service}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-md"
              >
                <div className="px-6 py-4 flex items-center gap-3" style={{ borderLeft: `4px solid ${group.color}` }}>
                  <h3 className="font-extrabold text-[#0D1B2A] text-lg">{group.service}</h3>
                </div>
                <div className="divide-y divide-gray-50">
                  {group.items.map((item, j) => (
                    <div key={j} className="px-6 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: group.color }} />
                        <span className="text-gray-700 text-sm">{item.name}</span>
                      </div>
                      <span className="font-bold text-[#0D1B2A] text-sm whitespace-nowrap">{item.price} VNĐ</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 p-5 bg-amber-50 rounded-2xl border border-amber-200">
            <p className="text-sm text-gray-600">
              <strong className="text-[#C89B3C]">Lưu ý:</strong> Giá trên là giá tham khảo. Giá chính xác sẽ được tư vấn sau khi thăm khám.
              Liên hệ hotline <strong>{BRAND.hotline}</strong> để được tư vấn miễn phí.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-amber-50/20">
        <div className="container-custom max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-extrabold text-[#0D1B2A] mb-3">Câu hỏi về bảng giá</h2>
          </motion.div>
          <Accordion type="single" collapsible className="space-y-3">
            {FAQS.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-white rounded-2xl border border-gray-100 shadow-sm px-5"
                data-testid={`faq-item-${i}`}>
                <AccordionTrigger className="font-semibold text-[#0D1B2A] hover:text-[#C89B3C] text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gold-gradient">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Nhận báo giá chính xác</h2>
          <p className="text-white/80 mb-8">Đến khám và nhận phác đồ điều trị cùng báo giá chi tiết miễn phí.</p>
          <Link href="/dat-lich">
            <Button className="bg-white text-[#C89B3C] rounded-xl h-12 px-8 font-bold hover:shadow-xl"
              data-testid="button-banggia-cta">
              Đặt lịch tư vấn miễn phí <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
