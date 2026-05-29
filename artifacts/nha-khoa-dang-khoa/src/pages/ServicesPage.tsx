import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SERVICES, BRAND } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Zap: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>,
  Smile: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>,
  Star: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>,
  Sun: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>,
  Shield: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  Activity: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8"><polyline points="22,12 18,12 15,21 9,3 6,12 2,12"/></svg>,
};

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <div className="navy-gradient py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 rounded-full border-2 border-[#C89B3C]" />
        </div>
        <div className="container-custom relative">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-6">
            <Link href="/"><span className="hover:text-white cursor-pointer">Trang chủ</span></Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Dịch vụ</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Dịch Vụ <span className="text-[#C89B3C]">Nha Khoa</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Cung cấp đầy đủ các dịch vụ nha khoa cao cấp, ứng dụng công nghệ tiên tiến nhất.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => {
              const Icon = iconMap[service.icon] || iconMap["Star"];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                  data-testid={`card-service-${service.id}`}
                >
                  <div className="h-52 relative overflow-hidden flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${service.color}15, ${service.color}35)` }}>
                    <div className="w-24 h-24 rounded-full flex items-center justify-center" style={{ background: `${service.color}25` }}>
                      <div style={{ color: service.color }}>
                        <Icon />
                      </div>
                    </div>
                    <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold" style={{ color: service.color }}>
                      Chuyên khoa
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-extrabold text-[#0D1B2A] text-xl mb-2">{service.name}</h3>
                    <p className="text-[#C89B3C] font-semibold text-sm mb-3">{service.short}</p>
                    <p className="text-gray-500 text-sm leading-relaxed mb-5">{service.desc}</p>
                    <div className="flex items-center gap-1 mb-5">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="w-4 h-4 text-[#C89B3C] fill-[#C89B3C]" />
                      ))}
                      <span className="text-xs text-gray-400 ml-1">5.0 (100+ đánh giá)</span>
                    </div>
                    <Link href={service.href}>
                      <Button className="w-full gold-gradient text-white border-0 rounded-xl font-bold"
                        data-testid={`button-service-detail-${service.id}`}>
                        Xem chi tiết
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gold-gradient">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Tư vấn dịch vụ phù hợp</h2>
          <p className="text-white/80 mb-8">Bác sĩ sẽ thăm khám và tư vấn phác đồ điều trị miễn phí.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dat-lich">
              <Button className="bg-white text-[#C89B3C] rounded-xl h-12 px-8 font-bold"
                data-testid="button-services-cta">
                Đặt lịch tư vấn miễn phí
              </Button>
            </Link>
            <a href={`tel:${BRAND.hotlineRaw}`}>
              <Button variant="outline" className="rounded-xl h-12 px-8 font-bold border-2 border-white text-white hover:bg-white/10">
                Gọi ngay: {BRAND.hotline}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
