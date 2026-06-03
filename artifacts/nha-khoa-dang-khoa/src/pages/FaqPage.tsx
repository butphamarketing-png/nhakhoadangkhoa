import { motion } from "framer-motion";
import { Link } from "wouter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import PageHero from "@/components/PageHero";
import { BRAND } from "@/lib/constants";
import { useFaqCms } from "@/lib/cms-provider";
import { fadeUp } from "@/lib/motion";

export default function FaqPage() {
  const FAQS_BY_CAT = useFaqCms();

  return (
    <div>
      <PageHero
        label="Hỗ trợ"
        breadcrumb="Câu hỏi thường gặp"
        title={
          <>
            CÂU HỎI <span className="text-[#C89B3C]">THƯỜNG GẶP</span>
          </>
        }
        subtitle="Giải đáp thắc mắc phổ biến về dịch vụ nha khoa tại Nha Khoa Đăng Khoa"
      />

      <section className="section-padding bg-white">
        <div className="container-custom container-narrow max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="space-y-10">
            {FAQS_BY_CAT.map((cat, ci) => (
              <div key={cat.cat + ci}>
                <h2 className="font-display font-bold text-xl mb-4" style={{ color: cat.color }}>
                  {cat.cat}
                </h2>
                <Accordion type="single" collapsible className="space-y-2">
                  {cat.items.map((faq, i) => (
                    <AccordionItem
                      key={`${ci}-${i}`}
                      value={`faq-${ci}-${i}`}
                      className="card-luxury !p-0 px-5 border-0 !translate-y-0"
                      data-testid={`faq-${ci}-${i}`}
                    >
                      <AccordionTrigger className="text-left font-semibold text-[#0D1B2A] hover:no-underline py-4">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-[#0D1B2A]/65 text-sm pb-4 leading-relaxed">{faq.a}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mt-14 text-center bg-[#0D1B2A] rounded-3xl p-8 text-white"
          >
            <h3 className="text-xl font-bold mb-2">Vẫn còn thắc mắc?</h3>
            <p className="text-white/70 text-sm mb-5">Liên hệ hotline hoặc đặt lịch tư vấn miễn phí.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href={`tel:${BRAND.hotlineRaw}`} className="btn-gold inline-flex items-center !h-11 !px-6" data-testid="button-faq-phone">
                Gọi {BRAND.hotline}
              </a>
              <Link href="/lien-he">
                <span className="btn-outline-on-dark inline-flex items-center !h-11 !px-6 cursor-pointer" data-testid="button-faq-contact">
                  Liên hệ
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
