import { Link } from "wouter";
import { ChevronRight } from "lucide-react";
import type { ServiceItem } from "@/lib/services/types";
import MediaFrame from "@/components/ui/MediaFrame";

type Props = {
  categorySlug: string;
  service: ServiceItem;
  image: string;
};

export default function ServiceItemCard({ categorySlug, service, image }: Props) {
  const href = `/dich-vu/${categorySlug}/${service.slug}`;
  const img = service.image ?? image;

  return (
    <Link href={href} className="block h-full group">
      <article className="card-luxury overflow-hidden h-full flex flex-col !p-0 !translate-y-0 hover:!-translate-y-1 transition-all duration-300">
        <MediaFrame src={img} alt={service.title} aspect="video" />
        <div className="p-5 md:p-6 flex flex-col flex-1">
          <h3 className="font-display font-bold text-[#0D1B2A] text-lg mb-2 group-hover:text-[#C89B3C] transition-colors">
            {service.title}
          </h3>
          <p className="text-sm text-[#0D1B2A]/60 leading-relaxed flex-1 mb-4">{service.shortDesc}</p>
          <span className="inline-flex items-center gap-1 text-sm font-bold text-[#C89B3C]">
            Xem chi tiết
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </div>
      </article>
    </Link>
  );
}
