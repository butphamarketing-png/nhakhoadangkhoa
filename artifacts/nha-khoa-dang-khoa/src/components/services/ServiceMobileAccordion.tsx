import { useState } from "react";
import { Link } from "wouter";
import { ChevronDown } from "lucide-react";
import type { ServiceGroup } from "@/lib/service-groups";

type Props = { groups: ServiceGroup[] };

export default function ServiceMobileAccordion({ groups }: Props) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="space-y-1">
      <Link href="/dich-vu">
        <div className="px-4 py-3 rounded-xl font-bold text-[#C89B3C] bg-[#F8F6F1]">Tất cả dịch vụ</div>
      </Link>
      {groups.map((g) => {
        const open = openId === g.id;
        return (
          <div key={g.id} className="border border-black/[0.06] rounded-xl overflow-hidden">
            <button
              type="button"
              className="w-full flex items-center justify-between gap-2 px-4 py-3 text-left font-semibold text-[#0D1B2A] bg-white"
              onClick={() => setOpenId(open ? null : g.id)}
            >
              <span className="leading-snug">{g.title}</span>
              <ChevronDown className={`w-4 h-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
            </button>
            {open && (
              <ul className="bg-[#FAFAF8] border-t border-black/[0.04] py-1">
                <li>
                  <Link href={g.href}>
                    <div className="px-4 py-2 text-xs font-bold text-[#C89B3C]">Xem bảng giá nhóm</div>
                  </Link>
                </li>
                {g.items.map((item) => (
                  <li key={item.id}>
                    <Link href={item.href}>
                      <div className="px-4 py-2.5 text-sm text-[#0D1B2A]/75">{item.name}</div>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
}
