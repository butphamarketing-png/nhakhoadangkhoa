import { Link } from "wouter";
import type { ServiceCategory, ServiceItem } from "@/lib/services/types";
import ServiceItemCard from "@/components/services/ServiceItemCard";

type Props = {
  category: ServiceCategory;
  currentSlug: string;
  limit?: number;
};

export default function ServiceRelatedServices({ category, currentSlug, limit = 3 }: Props) {
  const related: ServiceItem[] = category.services.filter((s) => s.slug !== currentSlug).slice(0, limit);
  if (related.length === 0) return null;

  return (
    <section className="section-padding bg-[#FAFAF8]">
      <div className="container-custom">
        <h2 className="font-display text-2xl font-bold text-[#0D1B2A] mb-2">Dịch vụ liên quan</h2>
        <p className="text-[#0D1B2A]/60 mb-8 text-sm">
          Các dịch vụ khác trong nhóm{" "}
          <Link href={`/dich-vu/${category.slug}`}>
            <span className="text-[#C89B3C] font-semibold cursor-pointer hover:underline">{category.title}</span>
          </Link>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {related.map((s) => (
            <ServiceItemCard
              key={s.slug}
              categorySlug={category.slug}
              service={s}
              image={s.thumbnail || s.image || category.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
