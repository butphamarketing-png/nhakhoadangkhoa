import { useState } from "react";
import { Link } from "wouter";
import { ChevronRight } from "lucide-react";
import {
  getServiceSubgroups,
  type ServiceMenuGroup,
  type ServiceMenuSubGroup,
} from "@/lib/services-menu";

type Props = {
  groups: ServiceMenuGroup[];
  open: boolean;
};

export default function ServiceMegaMenu({ groups, open }: Props) {
  const [activeL1, setActiveL1] = useState(groups[0]?.id ?? "");
  const [activeL2, setActiveL2] = useState("");

  const l1 = groups.find((g) => g.id === activeL1) ?? groups[0];
  const subgroups = l1 ? getServiceSubgroups(l1) : [];
  const l2: ServiceMenuSubGroup | undefined =
    subgroups.find((s) => s.id === activeL2) ?? subgroups[0];

  if (!open || !l1) return null;

  return (
    <div
      className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[min(96vw,880px)] z-50"
      onMouseLeave={() => {
        setActiveL2("");
      }}
    >
      <div className="bg-white rounded-xl shadow-[0_24px_80px_rgba(13,27,42,0.12)] border border-[#C89B3C]/15 overflow-hidden flex min-h-[280px]">
        {/* Cấp 1 */}
        <div className="w-[200px] shrink-0 border-r border-black/[0.06] py-2 bg-[#FAFAF8]">
          <Link href="/dich-vu">
            <div className="px-4 py-2.5 text-xs font-bold text-[#C89B3C] border-b border-black/[0.04] mb-1 hover:bg-white cursor-pointer">
              Tất cả dịch vụ →
            </div>
          </Link>
          {groups.map((g) => (
            <button
              key={g.id}
              type="button"
              className={`w-full text-left px-4 py-2.5 text-sm font-semibold transition-colors flex items-center justify-between gap-2 ${
                activeL1 === g.id
                  ? "bg-white text-[#C89B3C] border-l-2 border-l-[#C89B3C]"
                  : "text-[#0D1B2A]/80 hover:bg-white hover:text-[#C89B3C]"
              }`}
              onMouseEnter={() => {
                setActiveL1(g.id);
                setActiveL2("");
              }}
            >
              <span className="line-clamp-2">{g.title}</span>
              <ChevronRight className="w-3.5 h-3.5 shrink-0 opacity-50" />
            </button>
          ))}
        </div>

        {/* Cấp 2 */}
        <div className="w-[220px] shrink-0 border-r border-black/[0.06] py-2">
          {subgroups.map((sg) => (
            <button
              key={sg.id}
              type="button"
              className={`w-full text-left px-4 py-2.5 text-sm transition-colors flex items-center justify-between gap-2 ${
                (activeL2 || subgroups[0]?.id) === sg.id
                  ? "text-[#C89B3C] font-bold bg-[#F8F6F1]"
                  : "text-[#0D1B2A]/75 hover:text-[#C89B3C] hover:bg-[#F8F6F1]/60"
              }`}
              onMouseEnter={() => setActiveL2(sg.id)}
            >
              <span>{sg.title}</span>
              <ChevronRight className="w-3.5 h-3.5 shrink-0 opacity-40" />
            </button>
          ))}
        </div>

        {/* Bài viết */}
        <div className="flex-1 py-2 px-1 min-w-0 max-h-[360px] overflow-y-auto">
          <p className="px-4 py-1 text-[10px] font-bold uppercase tracking-wider text-[#C89B3C]/80 mb-1">
            {l2?.title}
          </p>
          <ul>
            {(l2?.items ?? []).map((item) => (
              <li key={item.label}>
                <Link href={item.href}>
                  <span className="block px-4 py-2 text-sm text-[#0D1B2A]/85 hover:text-[#C89B3C] hover:bg-[#F8F6F1] border border-transparent hover:border-[#C89B3C]/10 rounded-lg mx-1 cursor-pointer transition-colors">
                    {item.label}
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
