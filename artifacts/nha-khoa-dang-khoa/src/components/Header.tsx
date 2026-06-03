import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { useBrand } from "@/lib/brand-context";
import { MAIN_NAV } from "@/lib/navigation";
import { useAboutSections } from "@/lib/cms-provider";
import { useServiceCatalog } from "@/lib/services/use-service-catalog";
import BrandLogo from "@/components/BrandLogo";
import SiteSearchBar from "@/components/SiteSearchBar";
import ServiceMegaMenu from "@/components/services/ServiceMegaMenu";
import ServiceMobileAccordion from "@/components/services/ServiceMobileAccordion";

interface HeaderProps {
  onBookingClick: () => void;
}

export default function Header({ onBookingClick }: HeaderProps) {
  const BRAND = useBrand();
  const ABOUT_SECTIONS = useAboutSections();
  const serviceCatalog = useServiceCatalog();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [navHovered, setNavHovered] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setAboutOpen(false);
    setServiceOpen(false);
  }, [location]);

  const isActive = (href: string) =>
    href === "/" ? location === "/" : location.startsWith(href);

  const showSearch = navHovered || mobileOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-[0_8px_32px_rgba(13,27,42,0.1)] border-b border-[#C89B3C]/20"
            : "bg-white/90 backdrop-blur-md border-b border-[#C89B3C]/10"
        }`}
        onMouseEnter={() => setNavHovered(true)}
        onMouseLeave={() => setNavHovered(false)}
      >
        <div
          className="container-custom relative"
          onMouseLeave={() => {
            setServiceOpen(false);
            setAboutOpen(false);
          }}
        >
          <div className="flex items-center justify-between h-[68px] lg:h-[80px] gap-4">
            <Link href="/" data-testid="link-logo">
              <BrandLogo size="md" />
            </Link>

            <nav className="hidden xl:flex items-center gap-8 2xl:gap-10 flex-1 justify-center">
              {MAIN_NAV.map((link) => {
                if (link.label === "GIỚI THIỆU") {
                  return (
                    <div
                      key={link.href}
                      className="relative"
                      onMouseEnter={() => setAboutOpen(true)}
                      onMouseLeave={() => setAboutOpen(false)}
                    >
                      <Link href={link.href}>
                        <span
                          className={`nav-link-luxury flex items-center gap-1 cursor-pointer ${isActive(link.href) ? "is-active" : ""}`}
                        >
                          {link.label}
                          <ChevronDown className="w-3.5 h-3.5" />
                        </span>
                      </Link>
                      <div
                        className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 w-64 transition-all duration-300 ${
                          aboutOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                        }`}
                      >
                        <div className="bg-white rounded-[20px] shadow-xl border border-[#C89B3C]/10 py-2 overflow-hidden">
                          <Link href="/gioi-thieu">
                            <div className="px-5 py-2.5 text-xs font-bold text-[#C89B3C] border-b border-black/[0.04] cursor-pointer hover:bg-[#F8F6F1]">
                              Tổng quan
                            </div>
                          </Link>
                          {ABOUT_SECTIONS.map((s) => (
                            <Link href={s.href} key={s.slug}>
                              <div className="px-5 py-2.5 text-sm text-[#0D1B2A] hover:bg-[#F8F6F1] hover:text-[#C89B3C] hover:pl-6 border-l-2 border-transparent hover:border-[#C89B3C] cursor-pointer transition-all">
                                {s.label}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }

                if (link.label === "DỊCH VỤ") {
                  return (
                    <div
                      key={link.href}
                      className="relative"
                      onMouseEnter={() => {
                        setServiceOpen(true);
                        setNavHovered(true);
                      }}
                    >
                      <Link href="/dich-vu">
                        <span
                          className={`nav-link-luxury flex items-center gap-1 cursor-pointer ${isActive("/dich-vu") ? "is-active" : ""}`}
                          data-testid="nav-dich-vu"
                        >
                          {link.label}
                          <ChevronDown className="w-3.5 h-3.5" />
                        </span>
                      </Link>
                    </div>
                  );
                }

                return (
                  <Link href={link.href} key={link.href}>
                    <span
                      className={`nav-link-luxury block cursor-pointer ${isActive(link.href) ? "is-active" : ""}`}
                      data-testid={`nav-${link.href.replace("/", "") || "home"}`}
                    >
                      {link.label}
                    </span>
                  </Link>
                );
              })}
            </nav>

            <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
              <button
                type="button"
                onClick={onBookingClick}
                className="btn-outline-gold !h-11 !px-4 !text-sm hidden xl:inline-flex items-center"
                data-testid="button-header-booking"
              >
                Đặt lịch
              </button>
              <a
                href={`tel:${BRAND.hotlineRaw}`}
                className="btn-gold inline-flex items-center !h-11 !px-5 !text-sm animate-phone-ring"
                data-testid="button-header-phone"
              >
                <Phone className="w-4 h-4 mr-2" />
                {BRAND.hotline}
              </a>
            </div>

            <button
              onClick={() => setMobileOpen(true)}
              className="xl:hidden p-2 rounded-xl text-[#0D1B2A]"
              data-testid="button-mobile-menu"
              aria-label="Mở menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          <div
            className={`hidden md:block overflow-hidden transition-all duration-300 ${
              showSearch ? "max-h-14 opacity-100 pb-3" : "max-h-0 opacity-0 pb-0"
            }`}
          >
            <SiteSearchBar />
          </div>

          {/* Mega menu dưới cả header (tránh thanh search chặn hover) */}
          <div
            className={`hidden xl:block absolute left-0 right-0 top-full z-[60] transition-all duration-200 ${
              serviceOpen && serviceCatalog.categories.length
                ? "opacity-100 visible translate-y-0 pointer-events-auto"
                : "opacity-0 invisible -translate-y-1 pointer-events-none"
            }`}
            onMouseEnter={() => setServiceOpen(true)}
          >
            <div className="pt-1 flex justify-center px-4 pb-2">
              <ServiceMegaMenu catalog={serviceCatalog} />
            </div>
          </div>
        </div>
      </header>

      <div className={`fixed inset-0 z-[60] xl:hidden transition-all ${mobileOpen ? "visible opacity-100" : "invisible opacity-0"}`}>
        <div className="absolute inset-0 bg-[#0D1B2A]/70 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
        <div
          className={`absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white transition-transform duration-500 flex flex-col ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="p-5 border-b bg-[#0D1B2A] text-white">
            <div className="flex items-center justify-between">
              <BrandLogo size="sm" variant="light" />
              <button onClick={() => setMobileOpen(false)} className="p-2 rounded-lg hover:bg-white/10" type="button">
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="p-4 border-b md:hidden">
            <SiteSearchBar />
          </div>
          <nav className="p-4 flex flex-col gap-1 flex-1 overflow-y-auto text-sm">
            <Link href="/">
              <div className={`px-4 py-3 rounded-xl font-bold ${isActive("/") && location === "/" ? "bg-[#F8F6F1] text-[#C89B3C]" : "text-[#0D1B2A]"}`}>
                TRANG CHỦ
              </div>
            </Link>
            <p className="px-4 pt-3 pb-1 text-[10px] font-bold text-[#C89B3C] uppercase tracking-widest">Giới thiệu</p>
            {ABOUT_SECTIONS.map((s) => (
              <Link href={s.href} key={s.slug}>
                <div className="px-4 py-2.5 rounded-lg text-[#0D1B2A]/80">{s.label}</div>
              </Link>
            ))}
            <p className="px-4 pt-3 pb-1 text-[10px] font-bold text-[#C89B3C] uppercase tracking-widest">Dịch vụ</p>
            <ServiceMobileAccordion catalog={serviceCatalog} />
            {MAIN_NAV.filter((l) => !["TRANG CHỦ", "GIỚI THIỆU", "DỊCH VỤ"].includes(l.label)).map((link) => (
              <Link href={link.href} key={link.href}>
                <div className={`px-4 py-3 rounded-xl font-bold ${isActive(link.href) ? "bg-[#F8F6F1] text-[#C89B3C]" : "text-[#0D1B2A]"}`}>
                  {link.label}
                </div>
              </Link>
            ))}
          </nav>
          <div className="p-5 border-t flex flex-col gap-3">
            <a href={`tel:${BRAND.hotlineRaw}`} className="btn-gold flex items-center justify-center !h-12 text-sm animate-phone-ring">
              <Phone className="w-4 h-4 mr-2" />
              {BRAND.hotline}
            </a>
            <button type="button" onClick={() => { setMobileOpen(false); onBookingClick(); }} className="btn-outline-gold w-full !h-12 text-sm">
              Đặt lịch khám
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
