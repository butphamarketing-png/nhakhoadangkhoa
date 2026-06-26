import { Link } from "wouter";
import { Phone, MapPin, Globe, Mail, Clock, Facebook, Youtube, MessageCircle, Calendar } from "lucide-react";
import { useBrand } from "@/lib/brand-context";
import { useServiceGroups } from "@/lib/cms-provider";
import BrandLogo from "@/components/BrandLogo";

const SUPPORT_LINKS = [
  { label: "Hướng dẫn đặt lịch", href: "/dat-lich" },
  { label: "Chính sách bảo hành", href: "/chinh-sach-bao-hanh" },
  { label: "Chính sách thanh toán", href: "/chinh-sach-thanh-toan" },
  { label: "Câu hỏi thường gặp", href: "/faq" },
  { label: "Điều khoản dịch vụ", href: "/dieu-khoan" },
];

export default function Footer() {
  const BRAND = useBrand();
  const serviceGroups = useServiceGroups();
  const SOCIAL = [
    { href: BRAND.facebook, label: "Facebook", icon: Facebook, testId: "link-footer-facebook" },
    { href: BRAND.zalo, label: "Zalo", zalo: true, testId: "link-footer-zalo" },
    { href: BRAND.messenger, label: "Messenger", icon: MessageCircle, testId: "link-footer-messenger" },
    { href: BRAND.youtube, label: "YouTube", icon: Youtube, testId: "link-footer-youtube" },
    { href: BRAND.tiktok, label: "TikTok", tiktok: true, testId: "link-footer-tiktok" },
  ];

  return (
    <footer className="bg-[#0D1B2A] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_0%,rgba(200,155,60,0.08),transparent_50%)]" />

      {/* Hotline CTA strip */}
      <div className="relative border-b border-[#C89B3C]/20">
        <div className="container-custom py-6 md:py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div>
              <p className="text-[#E8C46A] text-xs font-bold uppercase tracking-[0.3em] mb-1">Hỗ trợ 24/7</p>
              <p className="font-display text-xl md:text-2xl font-bold">Đặt lịch khám — Tư vấn miễn phí</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={`tel:${BRAND.hotlineRaw}`} className="btn-gold inline-flex items-center !h-12 !px-6 !text-sm" data-testid="link-footer-cta-phone">
                <Phone className="w-4 h-4 mr-2" />
                {BRAND.hotline}
              </a>
              <Link href="/dat-lich">
                <span className="btn-outline-gold !bg-transparent !text-white !border-white/40 inline-flex items-center !h-12 !px-6 !text-sm cursor-pointer hover:!bg-white hover:!text-[#0D1B2A]">
                  <Calendar className="w-4 h-4 mr-2" />
                  Đặt lịch online
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom py-16 md:py-20 lg:py-24 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-5">
              <BrandLogo size="md" variant="light" />
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Hệ thống nha khoa cao cấp tại Tây Ninh — uy tín, chất lượng, tận tâm phục vụ nụ cười Việt.
            </p>
            <div className="flex flex-wrap gap-2">
              {SOCIAL.map((s) => (
                <a
                  key={s.testId}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#C89B3C] hover:shadow-[0_0_20px_rgba(200,155,60,0.35)] flex items-center justify-center transition-all duration-300"
                  data-testid={s.testId}
                  aria-label={s.label}
                >
                  {s.zalo ? (
                    <span className="text-[10px] font-extrabold">Zalo</span>
                  ) : s.tiktok ? (
                    <span className="text-[10px] font-extrabold">TikTok</span>
                  ) : (
                    s.icon && <s.icon className="w-4 h-4" />
                  )}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-[#C89B3C] mb-5 text-sm uppercase tracking-widest pb-2 border-b border-[#C89B3C]/20 inline-block">
              Liên hệ
            </h4>
            <ul className="space-y-4 text-sm mt-4">
              <li className="flex items-start gap-3 text-white/75">
                <Phone className="w-4 h-4 text-[#C89B3C] flex-shrink-0 mt-0.5" />
                <a href={`tel:${BRAND.hotlineRaw}`} className="hover:text-[#C89B3C] transition-colors font-semibold" data-testid="link-footer-phone">
                  {BRAND.hotline}
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/75">
                <Mail className="w-4 h-4 text-[#C89B3C] flex-shrink-0 mt-0.5" />
                <a href={`mailto:${BRAND.email}`} className="hover:text-[#C89B3C] transition-colors break-all">
                  {BRAND.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/75">
                <Globe className="w-4 h-4 text-[#C89B3C] flex-shrink-0 mt-0.5" />
                <span>{BRAND.website}</span>
              </li>
              <li className="flex items-start gap-3 text-white/75">
                <MapPin className="w-4 h-4 text-[#C89B3C] flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{BRAND.address}</span>
              </li>
              <li className="flex items-start gap-3 text-white/75">
                <Clock className="w-4 h-4 text-[#C89B3C] flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{BRAND.hours}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#C89B3C] mb-5 text-sm uppercase tracking-widest pb-2 border-b border-[#C89B3C]/20 inline-block">
              Dịch vụ
            </h4>
            <ul className="space-y-2.5 mt-4">
              {serviceGroups.map((g) => (
                <li key={g.id}>
                  <Link href={g.href}>
                    <span className="text-white/70 text-sm hover:text-[#C89B3C] transition-colors cursor-pointer" data-testid={`link-footer-service-${g.id}`}>
                      {g.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#C89B3C] mb-5 text-sm uppercase tracking-widest pb-2 border-b border-[#C89B3C]/20 inline-block">
              Hỗ trợ
            </h4>
            <ul className="space-y-2.5 mt-4">
              {SUPPORT_LINKS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>
                    <span className="text-white/70 text-sm hover:text-[#C89B3C] transition-colors cursor-pointer">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#C89B3C] mb-5 text-sm uppercase tracking-widest pb-2 border-b border-[#C89B3C]/20 inline-block">
              Bản đồ
            </h4>
            <div className="rounded-[20px] overflow-hidden h-44 lg:h-48 bg-white/10 border border-white/10 ring-1 ring-[#C89B3C]/20 mt-4">
              <iframe
                src={BRAND.mapEmbed}
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

      <div className="border-t border-white/10 bg-[#0a1520]">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/45 text-sm text-center sm:text-left">
            © 2026 Nha Khoa Đăng Khoa. All Rights Reserved. Website được thiết
            kế và vận hành bởi{" "}
            <a
              href="https://butphamarketing.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C89B3C] transition-colors"
            >
              Bứt Phá Marketing
            </a>
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-10 h-10 rounded-full gold-gradient text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
            data-testid="button-back-to-top"
            aria-label="Về đầu trang"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
              <path d="M18 15l-6-6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
