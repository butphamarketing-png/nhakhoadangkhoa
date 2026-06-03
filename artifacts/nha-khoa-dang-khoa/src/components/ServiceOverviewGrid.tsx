import { Link } from "wouter";
import { ChevronRight } from "lucide-react";
import MediaFrame from "@/components/ui/MediaFrame";
import type { MainServiceCard } from "@/lib/main-services";

type Props = {
  services: MainServiceCard[];
};

/** 4 ô ngang: hình + tiêu đề + mô tả */
export default function ServiceOverviewGrid({ services }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
      {services.map((s) => (
        <Link key={s.id} href={s.href} className="block h-full group" data-testid={`service-card-${s.id}`}>
          <article className="card-luxury overflow-hidden h-full flex flex-col !p-0 !translate-y-0 hover:!translate-y-[-8px]">
            <MediaFrame src={s.image} alt={s.title} aspect="video" />
            <div className="p-5 flex flex-col flex-1">
              <h3 className="font-display font-bold text-[#0D1B2A] text-base md:text-lg mb-2 group-hover:text-[#C89B3C] transition-colors leading-snug">
                {s.title}
              </h3>
              <p className="text-sm text-[#0D1B2A]/60 leading-relaxed flex-1 line-clamp-4">{s.desc}</p>
              <span className="inline-flex items-center gap-1 mt-4 text-xs font-bold uppercase tracking-wider text-[#C89B3C]">
                Xem chi tiết
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
}
