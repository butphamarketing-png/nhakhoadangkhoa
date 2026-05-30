import { motion } from "framer-motion";
import { Link } from "wouter";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import PageHero from "@/components/PageHero";
import { BRAND } from "@/lib/constants";
import { fadeUp } from "@/lib/motion";

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
      <PageHero
        label="Bảng giá"
        breadcrumb="Bảng giá"
        title={
          <>
            Bảng Giá <span className="text-[#C89B3C]">Dịch Vụ</span>
          </>
        }
        subtitle="Giá minh bạch, không phát sinh. Hỗ trợ trả góp 0% lãi suất."
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Installment Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-[24px] p-6 md:p-8 mb-10 flex flex-col sm:flex-row items-center justify-between gap-4 navy-gradient border border-[#C89B3C]/25"
          >
            <div>
              <h3 className="text-[#E8C46A] text-xs font-bold uppercase tracking-[0.25em] mb-2">Thanh toán</h3>
              <p className="text-white font-display font-bold text-xl mb-1">Hỗ trợ trả góp 0% lãi suất</p>
              <p className="text-white/70 text-sm">Trả góp linh hoạt 6–24 tháng qua thẻ tín dụng và ví điện tử</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Visa", "MasterCard", "MoMo", "ZaloPay"].map((p) => (
                <div key={p} className="bg-white/10 text-white text-xs font-bold px-3 py-2 rounded-full border border-white/20">{p}</div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-6">
            {PRICING.map((group, i) => (
              <motion.div
                key={group.service}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="card-luxury overflow-hidden !p-0 !translate-y-0"
              >
                <div className="px-6 py-4 flex items-center gap-3 bg-[#F8F6F1] border-b border-black/[0.04] border-l-4 border-l-[#C89B3C]">
                  <h3 className="font-display font-bold text-[#0D1B2A] text-lg">{group.service}</h3>
                </div>
                <div className="divide-y divide-black/[0.04]">
                  {group.items.map((item, j) => (
                    <div key={j} className="px-6 py-3.5 flex items-center justify-between gap-4 hover:bg-[#F8F6F1]/80 transition-colors">
                      <div className="flex items-center gap-3 min-w-0">
                        <CheckCircle className="w-4 h-4 flex-shrink-0 text-[#C89B3C]" />
                        <span className="text-[#0D1B2A]/75 text-sm">{item.name}</span>
                      </div>
                      <span className="font-bold text-[#0D1B2A] text-sm whitespace-nowrap text-[#C89B3C]">{item.price} VNĐ</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 p-5 card-luxury !translate-y-0 border border-[#C89B3C]/15">
            <p className="text-sm text-[#0D1B2A]/65 leading-relaxed">
              <strong className="text-[#C89B3C]">Lưu ý:</strong> Giá trên là giá tham khảo. Giá chính xác sẽ được tư vấn sau khi thăm khám.
              Liên hệ hotline <strong className="text-[#0D1B2A]">{BRAND.hotline}</strong> để được tư vấn miễn phí.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding section-cream section-texture">
        <div className="container-custom max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-10">
            <p className="text-[#C89B3C] text-xs font-bold uppercase tracking-[0.3em] mb-2">FAQ</p>
            <h2 className="font-display text-3xl font-bold text-[#0D1B2A]">Câu hỏi về bảng giá</h2>
          </motion.div>
          <Accordion type="single" collapsible className="space-y-3">
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="card-luxury !p-0 px-5 !translate-y-0 border-0"
                data-testid={`faq-item-${i}`}
              >
                <AccordionTrigger className="font-semibold text-[#0D1B2A] hover:text-[#C89B3C] text-left font-display">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-[#0D1B2A]/65 pb-4 leading-relaxed">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-16 md:py-20 cta-gold-gradient">
        <div className="container-custom text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0D1B2A] mb-4">Nhận báo giá chính xác</h2>
          <p className="text-[#0D1B2A]/70 mb-8">Đến khám và nhận phác đồ điều trị cùng báo giá chi tiết miễn phí.</p>
          <Link href="/dat-lich">
            <span className="btn-gold inline-flex items-center !h-12 !px-8 cursor-pointer gap-2" data-testid="button-banggia-cta">
              Đặt lịch tư vấn miễn phí
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
