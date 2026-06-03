import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import type { ServiceCatalog, ServiceCategory } from "@/lib/services/types";
import { categoryPath, servicePath } from "@/lib/services/slug";

type Props = {
  catalog: ServiceCatalog;
  open: boolean;
};

/** Mega menu 2 cột premium: danh mục trái → dịch vụ con phải */
export default function ServiceMegaMenu({ catalog, open }: Props) {
  const [activeId, setActiveId] = useState(catalog.categories[0]?.slug ?? "");
  const active: ServiceCategory | undefined =
    catalog.categories.find((c) => c.slug === activeId) ?? catalog.categories[0];

  if (!open || !active) return null;

  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 pointer-events-auto w-[min(calc(100vw-6rem),900px)]">
      <div className="h-2" aria-hidden />
      <div className="bg-white rounded-2xl shadow-[0_32px_100px_rgba(13,27,42,0.14)] border border-[#C89B3C]/20 overflow-hidden flex w-full">
        <div className="w-[240px] shrink-0 border-r border-black/[0.05] py-3 bg-gradient-to-b from-[#FAFAF8] to-white">
          <p className="px-5 pb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#C89B3C]/70">
            Danh mục
          </p>
          {catalog.categories.map((c) => (
            <button
              key={c.slug}
              type="button"
              className={`w-full text-left px-5 py-3 text-sm transition-all duration-200 flex items-center gap-3 ${
                activeId === c.slug
                  ? "bg-white text-[#C89B3C] font-bold shadow-[inset_3px_0_0_#C89B3C]"
                  : "text-[#0D1B2A]/75 hover:bg-white/80 hover:text-[#C89B3C]"
              }`}
              onMouseEnter={() => setActiveId(c.slug)}
            >
              <span className="text-lg shrink-0 w-7 text-center" aria-hidden>
                {c.icon}
              </span>
              <span className="leading-snug flex-1">{c.title}</span>
              <span className="text-[10px] font-bold text-[#0D1B2A]/30 tabular-nums">{c.services.length}</span>
            </button>
          ))}
        </div>

        <div className="flex-1 py-4 px-3 min-w-0 max-h-[400px] overflow-y-auto bg-white">
          <div className="px-2 pb-3 mb-2 border-b border-black/[0.04]">
            <Link href={categoryPath(active.slug)}>
              <span className="inline-flex items-center gap-2 text-sm font-bold text-[#C89B3C] hover:underline cursor-pointer">
                {active.title}
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <p className="text-xs text-[#0D1B2A]/50 mt-1 line-clamp-2">{active.description}</p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-0.5">
            {active.services.map((s) => (
              <li key={s.slug}>
                <Link href={servicePath(active.slug, s.slug)}>
                  <span className="block px-3 py-2.5 text-sm text-[#0D1B2A]/85 hover:text-[#C89B3C] hover:bg-[#F8F6F1] rounded-xl cursor-pointer transition-colors">
                    {s.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
