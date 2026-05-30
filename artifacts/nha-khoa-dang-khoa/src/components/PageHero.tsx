import { Link } from "wouter";
import { ChevronRight } from "lucide-react";

interface PageHeroProps {
  breadcrumb: string;
  title: React.ReactNode;
  subtitle?: string;
  label?: string;
}

export default function PageHero({ breadcrumb, title, subtitle, label }: PageHeroProps) {
  return (
    <div className="navy-gradient py-14 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_25%,rgba(200,155,60,0.14),transparent_55%)]" />
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full border border-[#C89B3C]/20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-40 h-px bg-gradient-to-r from-[#C89B3C]/50 to-transparent" />
      <div className="container-custom relative">
        <nav className="flex items-center gap-2 text-white/50 text-sm mb-6" aria-label="Breadcrumb">
          <Link href="/">
            <span className="hover:text-[#C89B3C] cursor-pointer transition-colors">Trang chủ</span>
          </Link>
          <ChevronRight className="w-4 h-4 shrink-0" />
          <span className="text-white">{breadcrumb}</span>
        </nav>
        {label && (
          <p className="text-[#E8C46A] text-xs font-bold uppercase tracking-[0.35em] mb-3">{label}</p>
        )}
        <h1 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white mb-4 leading-tight max-w-3xl">
          {title}
        </h1>
        {subtitle && <p className="text-white/70 text-base md:text-lg max-w-2xl leading-relaxed">{subtitle}</p>}
      </div>
    </div>
  );
}
