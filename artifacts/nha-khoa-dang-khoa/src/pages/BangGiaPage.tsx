import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import PageHero from "@/components/PageHero";
import { BRAND } from "@/lib/constants";
import { fadeUp } from "@/lib/motion";
import { PRICE_GROUPS, getPriceDisplay, syncPricingFromApi } from "@/lib/pricing-data";

const FAQS = [
  { q: "Giá trên website có phải giá cuối cùng?", a: "Giá hiển thị mang tính tham khảo. Bác sĩ sẽ báo giá chính xác sau khi thăm khám và chụp phim." },
  { q: "Có hỗ trợ trả góp không?", a: "Có, hỗ trợ trả góp 0% lãi suất từ 6–24 tháng qua thẻ tín dụng và ví điện tử." },
  { q: "Giá implant đã bao gồm mão sứ chưa?", a: "Gói trọn gói thường bao gồm trụ, abutment và mão sứ — chi tiết được tư vấn khi khám." },
  { q: "Bảo hành răng sứ bao lâu?", a: "Tùy loại vật liệu từ 3–10 năm, có hợp đồng bảo hành rõ ràng." },
];

export default function BangGiaPage() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    syncPricingFromApi().finally(() => setReady(true));
  }, []);

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
        subtitle="Cấu trúc theo từng nhóm dịch vụ — giá cập nhật tại phòng khám / qua hệ thống quản trị."
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-[24px] p-6 md:p-8 mb-10 navy-gradient border border-[#C89B3C]/25"
          >
            <h3 className="text-[#E8C46A] text-xs font-bold uppercase tracking-[0.25em] mb-2">Thanh toán</h3>
            <p className="text-white font-display font-bold text-xl mb-1">Hỗ trợ trả góp 0% lãi suất</p>
            <p className="text-white/70 text-sm">Hotline {BRAND.hotline} — nhận báo giá chi tiết sau thăm khám</p>
          </motion.div>

          <div className="space-y-8">
            {PRICE_GROUPS.map((group, i) => (
              <motion.div
                key={group.id}
                id={group.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="card-luxury overflow-hidden !p-0 !translate-y-0 scroll-mt-32"
              >
                <div className="px-6 py-4 bg-[#F8F6F1] border-b border-black/[0.04] border-l-4 border-l-[#C89B3C]">
                  <h3 className="font-display font-bold text-[#0D1B2A] text-lg md:text-xl">{group.service}</h3>
                </div>
                <div className="divide-y divide-black/[0.04]">
                  {group.items.map((item) => (
                    <div
                      key={item.id}
                      className="px-6 py-3.5 flex items-center justify-between gap-4 hover:bg-[#F8F6F1]/80 transition-colors"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <CheckCircle className="w-4 h-4 flex-shrink-0 text-[#C89B3C]" />
                        <span className="text-[#0D1B2A]/75 text-sm">{item.name}</span>
                      </div>
                      <span className="font-bold text-sm whitespace-nowrap text-[#C89B3C]">
                        {ready ? getPriceDisplay(item.id) : "Liên hệ"}
                        {ready && getPriceDisplay(item.id) !== "Liên hệ" ? " VNĐ" : ""}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 p-5 card-luxury !translate-y-0 border border-[#C89B3C]/15">
            <p className="text-sm text-[#0D1B2A]/65 leading-relaxed">
              <strong className="text-[#C89B3C]">Lưu ý:</strong> Giá được quản trị viên cập nhật qua hệ thống admin
              {Object.keys(getStoredPrices()).length > 0 ? " (đã có giá lưu trên thiết bị này)" : ""}.
              Liên hệ <strong>{BRAND.hotline}</strong> để được tư vấn miễn phí.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding section-cream section-texture">
        <div className="container-custom max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold text-[#0D1B2A]">Câu hỏi về bảng giá</h2>
          </motion.div>
          <Accordion type="single" collapsible className="space-y-3">
            {FAQS.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="card-luxury !p-0 px-5 !translate-y-0 border-0">
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
          <Link href="/dat-lich">
            <span className="btn-gold inline-flex items-center !h-12 !px-8 cursor-pointer gap-2">
              Đặt lịch tư vấn miễn phí
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
