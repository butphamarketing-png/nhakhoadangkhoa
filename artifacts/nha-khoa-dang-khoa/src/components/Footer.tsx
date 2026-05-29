import { Link } from "wouter";
import { Phone, Mail, MapPin, Clock, Facebook, Youtube } from "lucide-react";
import { BRAND, SERVICES } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0D1B2A] text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl gold-gradient flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                  <path d="M12 2C9.5 2 7.5 3.5 6.5 5.5C5.5 3.5 3.5 2 1 2C1 7 4 12 6.5 14.5C7.5 15.5 8.5 16 9.5 16C9.5 18 10 20 12 22C14 20 14.5 18 14.5 16C15.5 16 16.5 15.5 17.5 14.5C20 12 23 7 23 2C20.5 2 18.5 3.5 17.5 5.5C16.5 3.5 14.5 2 12 2Z"/>
                </svg>
              </div>
              <div>
                <div className="font-extrabold text-sm leading-tight">NHA KHOA ĐĂNG KHOA</div>
                <div className="text-[#C89B3C] text-xs font-medium">{BRAND.slogan}</div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Hệ thống nha khoa cao cấp tại Tây Ninh với đội ngũ bác sĩ chuyên môn,
              công nghệ hiện đại và dịch vụ tận tâm.
            </p>
            <div className="flex gap-3">
              <a href={BRAND.facebook} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#C89B3C] flex items-center justify-center transition-colors"
                data-testid="link-footer-facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href={BRAND.youtube} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#C89B3C] flex items-center justify-center transition-colors"
                data-testid="link-footer-youtube">
                <Youtube className="w-4 h-4" />
              </a>
              <a href={BRAND.zalo} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#C89B3C] flex items-center justify-center text-sm font-bold transition-colors"
                data-testid="link-footer-zalo">
                Za
              </a>
            </div>
          </div>

          {/* Column 2: Contact */}
          <div>
            <h4 className="font-bold text-white mb-5 text-base">Liên hệ</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C89B3C] flex-shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">{BRAND.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C89B3C] flex-shrink-0" />
                <a href={`tel:${BRAND.hotlineRaw}`} className="text-white/70 text-sm hover:text-[#C89B3C] transition-colors"
                  data-testid="link-footer-phone">
                  {BRAND.hotline}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C89B3C] flex-shrink-0" />
                <a href={`mailto:${BRAND.email}`} className="text-white/70 text-sm hover:text-[#C89B3C] transition-colors"
                  data-testid="link-footer-email">
                  {BRAND.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#C89B3C] flex-shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">{BRAND.hours}</span>
              </div>
            </div>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="font-bold text-white mb-5 text-base">Dịch vụ</h4>
            <ul className="space-y-2">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link href={s.href}>
                    <span className="text-white/70 text-sm hover:text-[#C89B3C] transition-colors cursor-pointer flex items-center gap-2"
                      data-testid={`link-footer-service-${s.id}`}>
                      <span className="w-1 h-1 rounded-full bg-[#C89B3C] flex-shrink-0" />
                      {s.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Support */}
          <div>
            <h4 className="font-bold text-white mb-5 text-base">Hỗ trợ khách hàng</h4>
            <ul className="space-y-2 mb-6">
              {[
                { label: "Câu hỏi thường gặp", href: "/faq" },
                { label: "Trước & Sau điều trị", href: "/truoc-sau" },
                { label: "Ưu đãi hiện tại", href: "/uu-dai" },
                { label: "Tuyển dụng", href: "/tuyen-dung" },
                { label: "Chính sách bảo hành", href: "/chinh-sach-bao-hanh" },
                { label: "Chính sách thanh toán", href: "/chinh-sach-thanh-toan" },
                { label: "Điều khoản dịch vụ", href: "/dieu-khoan" },
                { label: "Chính sách bảo mật", href: "/bao-mat" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>
                    <span className="text-white/70 text-sm hover:text-[#C89B3C] transition-colors cursor-pointer flex items-center gap-2"
                      data-testid={`link-footer-${item.href.replace("/", "")}`}>
                      <span className="w-1 h-1 rounded-full bg-[#C89B3C] flex-shrink-0" />
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            {/* Map iframe */}
            <div className="rounded-xl overflow-hidden h-32 bg-white/10">
              <iframe
                src="https://maps.google.com/maps?q=345+Dien+Bien+Phu,+Tay+Ninh,+Vietnam&output=embed&z=15"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Google Maps - Nha Khoa Đăng Khoa"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/50 text-sm">
            © {currentYear} {BRAND.name}. All rights reserved.
          </p>
          <p className="text-white/40 text-xs">
            Website: {BRAND.website}
          </p>
        </div>
      </div>

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 left-4 md:left-8 z-40 w-10 h-10 rounded-full gold-gradient text-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
        data-testid="button-back-to-top"
        aria-label="Về đầu trang"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
          <path d="M18 15l-6-6-6 6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </footer>
  );
}
