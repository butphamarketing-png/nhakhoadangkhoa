import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { BRAND, SERVICES } from "@/lib/constants";

const NAV_LINKS = [
  { label: "Trang chủ", href: "/" },
  { label: "Giới thiệu", href: "/gioi-thieu" },
  { label: "Dịch vụ", href: "/dich-vu", hasDropdown: true },
  { label: "Bảng giá", href: "/bang-gia" },
  { label: "Kiến thức", href: "/kien-thuc" },
  { label: "Khách hàng", href: "/khach-hang" },
  { label: "Liên hệ", href: "/lien-he" },
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
    const onScroll = () => setScrolled(window.scrollY > 40);
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md"
            : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" data-testid="link-logo">
              <div className="flex items-center gap-3 cursor-pointer">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl gold-gradient flex items-center justify-center gold-glow-sm flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                    <path d="M12 2C9.5 2 7.5 3.5 6.5 5.5C5.5 3.5 3.5 2 1 2C1 7 4 12 6.5 14.5C7.5 15.5 8.5 16 9.5 16C9.5 18 10 20 12 22C14 20 14.5 18 14.5 16C15.5 16 16.5 15.5 17.5 14.5C20 12 23 7 23 2C20.5 2 18.5 3.5 17.5 5.5C16.5 3.5 14.5 2 12 2Z"/>
                  </svg>
                </div>
                <div className="hidden sm:block">
                  <div className="font-extrabold text-[#0D1B2A] text-sm md:text-base leading-tight tracking-wide">
                    NHA KHOA ĐĂNG KHOA
                  </div>
                  <div className="text-[10px] text-[#C89B3C] font-medium tracking-wider uppercase">
                    {BRAND.slogan}
                  </div>
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <div key={link.href} className="relative group">
                  {link.hasDropdown ? (
                    <button
                      onMouseEnter={() => setServiceDropdown(true)}
                      onMouseLeave={() => setServiceDropdown(false)}
                      className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                        isActive(link.href)
                          ? "text-[#C89B3C]"
                          : "text-[#0D1B2A] hover:text-[#C89B3C]"
                      }`}
                      data-testid={`nav-${link.href.replace("/", "") || "home"}`}
                    >
                      {link.label}
                      <ChevronDown className="w-3 h-3" />
                    </button>
                  ) : (
                    <Link href={link.href} data-testid={`nav-${link.href.replace("/", "") || "home"}`}>
                      <span
                        className={`block px-3 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                          isActive(link.href)
                            ? "text-[#C89B3C]"
                            : "text-[#0D1B2A] hover:text-[#C89B3C]"
                        }`}
                      >
                        {link.label}
                      </span>
                    </Link>
                  )}

                  {/* Service Dropdown */}
                  {link.hasDropdown && (
                    <div
                      onMouseEnter={() => setServiceDropdown(true)}
                      onMouseLeave={() => setServiceDropdown(false)}
                      className={`absolute top-full left-0 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 transition-all duration-200 ${
                        serviceDropdown ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                      }`}
                    >
                      <Link href="/dich-vu">
                        <div className="px-4 py-2 text-xs font-bold text-[#C89B3C] uppercase tracking-wider border-b border-gray-100 mb-1 cursor-pointer hover:bg-gray-50">
                          Tất cả dịch vụ
                        </div>
                      </Link>
                      {SERVICES.map((s) => (
                        <Link href={s.href} key={s.id}>
                          <div className="px-4 py-2 text-sm text-[#0D1B2A] hover:bg-amber-50 hover:text-[#C89B3C] cursor-pointer transition-colors" data-testid={`dropdown-${s.id}`}>
                            {s.name}
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${BRAND.hotlineRaw}`}
                className="flex items-center gap-2 px-4 py-2 rounded-xl border-2 border-[#C89B3C] text-[#C89B3C] font-bold text-sm hover:bg-[#C89B3C] hover:text-white transition-all"
                data-testid="button-header-phone"
              >
                <Phone className="w-4 h-4" />
                {BRAND.hotline}
              </a>
              <button
                onClick={onBookingClick}
                className="px-5 py-2 rounded-xl bg-[#0D1B2A] text-white font-bold text-sm hover:bg-[#162840] transition-all"
                data-testid="button-header-booking"
              >
                Đặt lịch ngay
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 rounded-lg text-[#0D1B2A]"
              data-testid="button-mobile-menu"
              aria-label="Mở menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-all duration-300 ${
          mobileOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
        <div
          className={`absolute right-0 top-0 bottom-0 w-80 bg-white transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-5 border-b">
            <div className="font-extrabold text-[#0D1B2A]">NHA KHOA ĐĂNG KHOA</div>
            <button onClick={() => setMobileOpen(false)} className="p-2" data-testid="button-mobile-close">
              <X className="w-5 h-5" />
            </button>
          </div>
          <nav className="p-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link href={link.href} key={link.href}>
                <div
                  className={`px-4 py-3 rounded-xl font-semibold cursor-pointer transition-colors ${
                    isActive(link.href)
                      ? "bg-amber-50 text-[#C89B3C]"
                      : "text-[#0D1B2A] hover:bg-gray-50"
                  }`}
                  data-testid={`mobile-nav-${link.href.replace("/", "") || "home"}`}
                >
                  {link.label}
                </div>
              </Link>
            ))}
          </nav>
          <div className="p-4 mt-4 border-t flex flex-col gap-3">
            <a
              href={`tel:${BRAND.hotlineRaw}`}
              className="flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-[#C89B3C] text-[#C89B3C] font-bold"
              data-testid="button-mobile-phone"
            >
              <Phone className="w-4 h-4" />
              {BRAND.hotline}
            </a>
            <button
              onClick={() => { setMobileOpen(false); onBookingClick(); }}
              className="py-3 rounded-xl gold-gradient text-white font-bold"
              data-testid="button-mobile-booking"
            >
              Đặt lịch ngay
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
