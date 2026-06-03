import { Link, useRoute } from "wouter";
import { motion } from "framer-motion";
import { CheckCircle, ChevronRight, Phone } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ServiceBreadcrumb from "@/components/services/ServiceBreadcrumb";
import ServiceSeoHead from "@/components/services/ServiceSeoHead";
import BookingFormSection from "@/components/home/BookingFormSection";
import MediaFrame from "@/components/ui/MediaFrame";
import { useServiceCatalog } from "@/lib/services/use-service-catalog";
import { buildServiceBreadcrumbs, getServiceBySlugs } from "@/lib/services/catalog";
import { servicePath } from "@/lib/services/slug";
import { useBrand } from "@/lib/brand-context";
import ServiceRelatedServices from "@/components/services/ServiceRelatedServices";
import NotFoundPage from "@/pages/NotFoundPage";

export default function ServiceDetailPage() {
  const [, params] = useRoute("/dich-vu/:category/:serviceSlug");
  const categorySlug = params?.category ?? "";
  const serviceSlug = params?.serviceSlug ?? "";
  const catalog = useServiceCatalog();
  const BRAND = useBrand();

  const found = getServiceBySlugs(catalog, categorySlug, serviceSlug);
  if (!found) return <NotFoundPage />;

  const { category, service } = found;
  const breadcrumbs = buildServiceBreadcrumbs(category, service);
  const canonical = servicePath(category.slug, service.slug);

  return (
    <div>
      <ServiceSeoHead
        title={service.seoTitle || service.title}
        description={service.seoDescription || service.shortDesc}
        canonicalPath={canonical}
        breadcrumbs={breadcrumbs}
        category={category}
        service={service}
      />

      <div className="navy-gradient py-16 md:py-20 relative overflow-hidden">
        <div className="container-custom relative">
          <ServiceBreadcrumb items={breadcrumbs} variant="light" />
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-[#C89B3C] text-xs font-bold uppercase tracking-widest mb-3">{category.title}</p>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">
                {service.title}
              </h1>
              <p className="text-white/70 text-lg leading-relaxed">{service.shortDesc}</p>
              <div className="flex flex-wrap gap-3 mt-8">
                <Link href="/dat-lich">
                  <span className="btn-gold inline-flex items-center !h-12 cursor-pointer">Đặt lịch khám</span>
                </Link>
                <a href={`tel:${BRAND.hotlineRaw}`} className="btn-outline-gold !text-white !border-white/40 inline-flex items-center !h-12">
                  <Phone className="w-4 h-4 mr-2" />
                  {BRAND.hotline}
                </a>
              </div>
            </div>
            {service.image && (
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <MediaFrame src={service.image} alt={service.title} aspect="video" />
              </div>
            )}
          </div>
        </div>
      </div>

      {service.content ? (
        <section className="section-padding bg-white">
          <div
            className="container-custom max-w-3xl prose prose-lg prose-headings:font-display prose-headings:text-[#0D1B2A] prose-a:text-[#C89B3C]"
            dangerouslySetInnerHTML={{ __html: service.content }}
          />
        </section>
      ) : (
        service.intro && (
          <section className="section-padding bg-white">
            <div className="container-custom max-w-3xl">
              <h2 className="font-display text-2xl font-bold text-[#0D1B2A] mb-4">Giới thiệu</h2>
              <p className="text-[#0D1B2A]/75 leading-relaxed">{service.intro}</p>
            </div>
          </section>
        )
      )}

      {service.benefits && service.benefits.length > 0 && (
        <section className="section-padding bg-[#FAFAF8]">
          <div className="container-custom">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0D1B2A] text-center mb-10">Lợi ích</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
              {service.benefits.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-5 border border-[#C89B3C]/10 flex gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-[#C89B3C] shrink-0 mt-0.5" />
                  <p className="text-sm text-[#0D1B2A]/80">{b}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {service.audience && service.audience.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-custom max-w-3xl">
            <h2 className="font-display text-2xl font-bold text-[#0D1B2A] mb-6">Đối tượng phù hợp</h2>
            <ul className="space-y-3">
              {service.audience.map((a, i) => (
                <li key={i} className="flex items-start gap-3 text-[#0D1B2A]/75">
                  <ChevronRight className="w-5 h-5 text-[#C89B3C] shrink-0" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {service.process && service.process.length > 0 && (
        <section className="section-padding navy-gradient">
          <div className="container-custom">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white text-center mb-10">Quy trình điều trị</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {service.process.map((s) => (
                <div key={s.step} className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <div className="text-[#C89B3C] font-extrabold text-2xl mb-2">{s.step}</div>
                  <h3 className="font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-white/60 text-sm">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {service.priceNote && (
        <section className="section-padding bg-[#FAFAF8]">
          <div className="container-custom max-w-3xl text-center">
            <h2 className="font-display text-2xl font-bold text-[#0D1B2A] mb-4">Bảng giá tham khảo</h2>
            <p className="text-[#0D1B2A]/70 mb-6">{service.priceNote}</p>
            <Link href="/bang-gia">
              <span className="btn-outline-gold inline-flex cursor-pointer">Xem bảng giá đầy đủ</span>
            </Link>
          </div>
        </section>
      )}

      {service.faq && service.faq.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-custom max-w-2xl">
            <h2 className="font-display text-2xl font-bold text-[#0D1B2A] text-center mb-8">Câu hỏi thường gặp</h2>
            <Accordion type="single" collapsible className="w-full">
              {service.faq.map((f, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left font-semibold text-[#0D1B2A]">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-[#0D1B2A]/70">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      )}

      <section className="py-16 cta-gold-gradient">
        <div className="container-custom text-center">
          <h2 className="font-display text-2xl font-bold text-[#0D1B2A] mb-4">Đặt lịch {service.title}</h2>
          <p className="text-[#0D1B2A]/70 mb-6">Tư vấn miễn phí — phản hồi nhanh trong giờ hành chính</p>
          <Link href={service.ctaLink || "/dat-lich"}>
            <span className="btn-gold inline-flex !h-12 cursor-pointer">{service.ctaText || "Đặt lịch ngay"}</span>
          </Link>
        </div>
      </section>

      <ServiceRelatedServices category={category} currentSlug={service.slug} />

      <BookingFormSection />
    </div>
  );
}
