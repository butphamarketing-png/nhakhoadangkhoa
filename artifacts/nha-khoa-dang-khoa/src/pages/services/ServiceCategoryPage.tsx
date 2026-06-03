import { Redirect, useRoute } from "wouter";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import ServiceBreadcrumb from "@/components/services/ServiceBreadcrumb";
import ServiceItemCard from "@/components/services/ServiceItemCard";
import ServiceSeoHead from "@/components/services/ServiceSeoHead";
import { useServiceCatalog } from "@/lib/services/use-service-catalog";
import { buildServiceBreadcrumbs, getCategoryBySlug } from "@/lib/services/catalog";
import { LEGACY_SERVICE_REDIRECTS } from "@/lib/services/legacy-redirects";
import { categoryPath } from "@/lib/services/slug";
import NotFoundPage from "@/pages/NotFoundPage";
import { fadeUp } from "@/lib/motion";

export default function ServiceCategoryPage() {
  const [, params] = useRoute("/dich-vu/:category");
  const slug = params?.category ?? "";
  const catalog = useServiceCatalog();

  const legacy = LEGACY_SERVICE_REDIRECTS[slug];
  if (legacy) return <Redirect to={legacy} />;

  const category = getCategoryBySlug(catalog, slug);
  if (!category) return <NotFoundPage />;

  const breadcrumbs = buildServiceBreadcrumbs(category);

  return (
    <div>
      <ServiceSeoHead
        title={category.title}
        description={category.description}
        canonicalPath={categoryPath(category.slug)}
        breadcrumbs={breadcrumbs}
        category={category}
      />

      <PageHero
        label="Dịch vụ"
        breadcrumb={category.title}
        title={
          <>
            {category.title}
          </>
        }
        subtitle={category.description}
        image={category.image}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <ServiceBreadcrumb items={breadcrumbs} />
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="font-display text-2xl font-bold text-[#0D1B2A] mb-2">Dịch vụ trong danh mục</h2>
            <p className="text-[#0D1B2A]/60 mb-10">{category.services.length} dịch vụ — chọn để xem chi tiết và đặt lịch.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {category.services.map((s) => (
                <ServiceItemCard
                  key={s.slug}
                  categorySlug={category.slug}
                  service={s}
                  image={category.image}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
