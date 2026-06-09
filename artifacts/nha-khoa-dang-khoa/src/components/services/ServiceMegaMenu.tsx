import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import type { ServiceGroup } from "@/lib/service-groups";

type Props = {
  groups: ServiceGroup[];
};

/** Mega menu 2 cột: 10 danh mục trái → dịch vụ con phải */
export default function ServiceMegaMenu({ groups }: Props) {
  const [activeId, setActiveId] = useState(groups[0]?.id ?? "");
  const active = groups.find((g) => g.id === activeId) ?? groups[0];

  if (!active || !groups.length) return null;

  return (
    <div className="bg-white rounded-2xl shadow-[0_32px_100px_rgba(13,27,42,0.14)] border border-[#C89B3C]/20 overflow-hidden flex w-full max-w-4xl">
      <div className="w-[240px] shrink-0 border-r border-black/[0.05] py-3 bg-gradient-to-b from-[#FAFAF8] to-white max-h-[min(70vh,420px)] overflow-y-auto">
        <p className="px-4 pb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#C89B3C]/70 sticky top-0 bg-[#FAFAF8] pt-1">
          Danh mục
        </p>
        {groups.map((g) => (
          <button
            key={g.id}
            type="button"
            className={`w-full text-left px-4 py-2.5 text-sm transition-all duration-200 flex items-center gap-2 ${
              activeId === g.id
                ? "bg-white text-[#C89B3C] font-bold shadow-[inset_3px_0_0_#C89B3C]"
                : "text-[#0D1B2A]/75 hover:bg-white/80 hover:text-[#C89B3C]"
            }`}
            onMouseEnter={() => setActiveId(g.id)}
          >
            <span className="leading-snug flex-1 min-w-0">{g.title}</span>
            <span className="text-[10px] font-bold text-[#0D1B2A]/30 tabular-nums shrink-0">
              {g.items.length}
            </span>
          </button>
        ))}
      </div>

      <div className="flex-1 min-w-0 py-3 px-3 max-h-[min(70vh,420px)] overflow-y-auto bg-white">
        <div className="px-1 pb-2 mb-2 border-b border-black/[0.04]">
          <Link href={active.href}>
            <span className="inline-flex items-center gap-2 text-sm font-bold text-[#C89B3C] hover:underline cursor-pointer">
              {active.title}
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>
          <p className="text-xs text-[#0D1B2A]/50 mt-1 line-clamp-2">{active.intro}</p>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-0.5 w-full">
          {active.items.map((item) => (
            <li key={item.id} className="min-w-0">
              <Link href={item.href}>
                <span className="block px-3 py-2 text-sm text-[#0D1B2A]/85 hover:text-[#C89B3C] hover:bg-[#F8F6F1] rounded-lg cursor-pointer transition-colors">
                  {item.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
