import { useState } from "react";
import { Link } from "wouter";
import { ChevronDown } from "lucide-react";
import type { ServiceCatalog } from "@/lib/services/types";
import { categoryPath, servicePath } from "@/lib/services/slug";

type Props = { catalog: ServiceCatalog };

export default function ServiceMobileAccordion({ catalog }: Props) {
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  return (
    <div className="space-y-1">
      <Link href="/dich-vu">
        <div className="px-4 py-3 rounded-xl font-bold text-[#C89B3C] bg-[#F8F6F1]">Tất cả dịch vụ</div>
      </Link>
      {catalog.categories.map((cat) => {
        const open = openSlug === cat.slug;
        return (
          <div key={cat.slug} className="border border-black/[0.06] rounded-xl overflow-hidden">
            <button
              type="button"
              className="w-full flex items-center justify-between gap-2 px-4 py-3 text-left font-semibold text-[#0D1B2A] bg-white"
              onClick={() => setOpenSlug(open ? null : cat.slug)}
            >
              <span>
                {cat.icon} {cat.title}
              </span>
              <ChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} />
            </button>
            {open && (
              <ul className="bg-[#FAFAF8] border-t border-black/[0.04] py-1">
                <li>
                  <Link href={categoryPath(cat.slug)}>
                    <div className="px-4 py-2 text-xs font-bold text-[#C89B3C]">Xem danh mục</div>
                  </Link>
                </li>
                {cat.services.map((s) => (
                  <li key={s.slug}>
                    <Link href={servicePath(cat.slug, s.slug)}>
                      <div className="px-4 py-2.5 text-sm text-[#0D1B2A]/75">{s.title}</div>
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
