import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import type { ServiceCatalog, ServiceCategory } from "@/lib/services/types";
import { categoryPath, servicePath } from "@/lib/services/slug";

type Props = {
  catalog: ServiceCatalog;
};

/** Mega menu 2 cột: danh mục trái → dịch vụ phải (panel do Header định vị) */
export default function ServiceMegaMenu({ catalog }: Props) {
  const [activeId, setActiveId] = useState(catalog.categories[0]?.slug ?? "");
  const active: ServiceCategory | undefined =
    catalog.categories.find((c) => c.slug === activeId) ?? catalog.categories[0];

  if (!active || !catalog.categories.length) return null;

  return (
    <div className="bg-white rounded-2xl shadow-[0_32px_100px_rgba(13,27,42,0.14)] border border-[#C89B3C]/20 overflow-hidden flex w-full max-w-3xl">
      <div className="w-[220px] shrink-0 border-r border-black/[0.05] py-3 bg-gradient-to-b from-[#FAFAF8] to-white">
        <p className="px-4 pb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#C89B3C]/70">
          Danh mục
        </p>
        {catalog.categories.map((c) => (
          <button
            key={c.slug}
            type="button"
            className={`w-full text-left px-4 py-2.5 text-sm transition-all duration-200 flex items-center gap-2.5 ${
              activeId === c.slug
                ? "bg-white text-[#C89B3C] font-bold shadow-[inset_3px_0_0_#C89B3C]"
                : "text-[#0D1B2A]/75 hover:bg-white/80 hover:text-[#C89B3C]"
            }`}
            onMouseEnter={() => setActiveId(c.slug)}
          >
            <span className="text-base shrink-0 w-6 text-center" aria-hidden>
              {c.icon}
            </span>
            <span className="leading-snug flex-1 min-w-0">{c.title}</span>
            <span className="text-[10px] font-bold text-[#0D1B2A]/30 tabular-nums shrink-0">
              {c.services.length}
            </span>
          </button>
        ))}
      </div>

      <div className="flex-1 min-w-0 py-3 px-3 max-h-[min(70vh,400px)] overflow-y-auto bg-white">
        <div className="px-1 pb-2 mb-2 border-b border-black/[0.04]">
          <Link href={categoryPath(active.slug)}>
            <span className="inline-flex items-center gap-2 text-sm font-bold text-[#C89B3C] hover:underline cursor-pointer">
              {active.title}
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>
          <p className="text-xs text-[#0D1B2A]/50 mt-1 line-clamp-2">{active.description}</p>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-0.5 w-full">
          {active.services.map((s) => (
            <li key={s.slug} className="min-w-0">
              <Link href={servicePath(active.slug, s.slug)}>
                <span className="block px-3 py-2 text-sm text-[#0D1B2A]/85 hover:text-[#C89B3C] hover:bg-[#F8F6F1] rounded-lg cursor-pointer transition-colors truncate">
                  {s.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
