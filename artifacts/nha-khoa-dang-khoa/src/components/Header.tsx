import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { BRAND, SERVICES } from "@/lib/constants";
import BrandLogo from "@/components/BrandLogo";

const NAV_LINKS = [
  { label: "TRANG CHỦ", href: "/" },
  { label: "GIỚI THIỆU", href: "/gioi-thieu" },
  { label: "DỊCH VỤ", href: "/dich-vu", hasDropdown: true },
  { label: "BẢNG GIÁ", href: "/bang-gia" },
  { label: "KIẾN THỨC", href: "/kien-thuc" },
  { label: "KHÁCH HÀNG", href: "/khach-hang" },
  { label: "LIÊN HỆ", href: "/lien-he" },
];

interface HeaderProps {
  onBookingClick: () => void;
}

export default function Header({ onBookingClick }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [serviceDropdown, setServiceDropdown] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServiceDropdown(false);
  }, [location]);

  const isActive = (href: string) =>
    href === "/" ? location === "/" : location.startsWith(href);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-[0_8px_32px_rgba(13,27,42,0.1)] border-b border-[#C89B3C]/20"
            : "bg-white/85 backdrop-blur-md border-b border-[#C89B3C]/10"
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-[72px] lg:h-[100px] gap-6">
            <Link href="/" data-testid="link-logo">
              <BrandLogo size="md" />
            </Link>

            <nav className="hidden xl:flex items-center gap-12 flex-1 justify-center">
              {NAV_LINKS.map((link) => (
                <div key={link.href} className="relative">
                  {link.hasDropdown ? (
                    <div onMouseEnter={() => setServiceDropdown(true)} onMouseLeave={() => setServiceDropdown(false)}>
                      <button
                        className={`nav-link-luxury flex items-center gap-1 ${isActive(link.href) ? "is-active" : ""}`}
                        data-testid="nav-dich-vu"
                      >
                        {link.label}
                        <ChevronDown className="w-3.5 h-3.5" />
                      </button>
                      <div
                        className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 w-72 transition-all duration-300 ${
                          serviceDropdown ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                        }`}
                      >
                        <div className="bg-white rounded-[20px] shadow-[0_20px_60px_rgba(13,27,42,0.12)] border border-[#C89B3C]/10 py-2 overflow-hidden">
                          <Link href="/dich-vu">
                            <div className="px-5 py-3 text-xs font-bold text-[#C89B3C] border-b border-black/[0.04] cursor-pointer hover:bg-[#F8F6F1] transition-colors">
                              Tất cả dịch vụ
                            </div>
                          </Link>
                          {SERVICES.map((s) => (
                            <Link href={s.href} key={s.id}>
                              <div className="px-5 py-2.5 text-sm text-[#0D1B2A] hover:bg-[#F8F6F1] hover:text-[#C89B3C] hover:pl-6 border-l-2 border-transparent hover:border-[#C89B3C] cursor-pointer transition-all" data-testid={`dropdown-${s.id}`}>
                                {s.name}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link href={link.href}>
                      <span
                        className={`nav-link-luxury block cursor-pointer ${isActive(link.href) ? "is-active" : ""}`}
                        data-testid={`nav-${link.href.replace("/", "") || "home"}`}
                      >
                        {link.label}
                      </span>
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
              <button
                type="button"
                onClick={onBookingClick}
                className="btn-outline-gold !h-12 !px-5 !text-sm hidden xl:inline-flex items-center"
                data-testid="button-header-booking"
              >
                Đặt lịch
              </button>
              <a href={`tel:${BRAND.hotlineRaw}`} className="btn-gold inline-flex items-center !h-12 !px-6 !text-sm" data-testid="button-header-phone">
                <Phone className="w-4 h-4 mr-2" />
                {BRAND.hotline}
              </a>
            </div>

            <button onClick={() => setMobileOpen(true)} className="xl:hidden p-2 rounded-xl text-[#0D1B2A]" data-testid="button-mobile-menu" aria-label="Mở menu">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      <div className={`fixed inset-0 z-[60] xl:hidden transition-all ${mobileOpen ? "visible opacity-100" : "invisible opacity-0"}`}>
        <div className="absolute inset-0 bg-[#0D1B2A]/70 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
        <div className={`absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white transition-transform duration-500 flex flex-col ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="p-5 border-b bg-[#0D1B2A] text-white">
            <div className="flex items-center justify-between">
              <BrandLogo size="sm" variant="light" />
              <button onClick={() => setMobileOpen(false)} className="p-2 rounded-lg hover:bg-white/10" data-testid="button-mobile-close">
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-[#E8C46A] text-[10px] font-bold uppercase tracking-[0.25em] mt-3">Menu</p>
          </div>
          <nav className="p-4 flex flex-col gap-1 flex-1 overflow-y-auto">
            {NAV_LINKS.map((link) => (
              <Link href={link.href} key={link.href}>
                <div className={`px-4 py-4 rounded-2xl font-bold text-sm cursor-pointer ${isActive(link.href) ? "bg-[#F8F6F1] text-[#C89B3C]" : "text-[#0D1B2A]"}`}>
                  {link.label}
                </div>
              </Link>
            ))}
          </nav>
          <div className="p-5 border-t flex flex-col gap-3 mt-auto">
            <a href={`tel:${BRAND.hotlineRaw}`} className="btn-gold flex items-center justify-center !h-12 text-sm">
              <Phone className="w-4 h-4 mr-2" />{BRAND.hotline}
            </a>
            <button type="button" onClick={() => { setMobileOpen(false); onBookingClick(); }} className="btn-outline-gold w-full !h-12 text-sm uppercase">
              Đặt lịch khám
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
