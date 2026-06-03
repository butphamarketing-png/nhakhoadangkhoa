import { Link } from "wouter";
import { ChevronRight } from "lucide-react";
import type { BreadcrumbItem } from "@/lib/services/types";

type Props = { items: BreadcrumbItem[]; variant?: "light" | "dark" };

export default function ServiceBreadcrumb({ items, variant = "dark" }: Props) {
  const muted = variant === "light" ? "text-white/50" : "text-[#0D1B2A]/55";
  const active = variant === "light" ? "text-white" : "text-[#0D1B2A]";
  const hover = variant === "light" ? "hover:text-[#E8C46A]" : "hover:text-[#C89B3C]";

  return (
    <nav aria-label="Breadcrumb" className={`flex flex-wrap items-center gap-1.5 text-sm ${muted} mb-6`}>
      {items.map((item, i) => (
        <span key={`${item.label}-${i}`} className="inline-flex items-center gap-1.5">
          {i > 0 && <ChevronRight className="w-3.5 h-3.5 shrink-0 opacity-40" />}
          {item.href ? (
            <Link href={item.href}>
              <span className="hover:text-[#C89B3C] cursor-pointer transition-colors">{item.label}</span>
            </Link>
          ) : (
            <span className={`${active} font-semibold`}>{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
