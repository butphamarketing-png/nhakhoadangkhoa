import { enrichServiceItem } from "./content-templates";
import type { BreadcrumbItem, ServiceCatalog, ServiceCategory, ServiceItem } from "./types";
import { categoryPath, servicePath } from "./slug";

export function getAllCategories(catalog: ServiceCatalog): ServiceCategory[] {
  return catalog.categories;
}

export function getCategoryBySlug(catalog: ServiceCatalog, slug: string): ServiceCategory | undefined {
  return catalog.categories.find((c) => c.slug === slug);
}

export function getServiceBySlugs(
  catalog: ServiceCatalog,
  categorySlug: string,
  serviceSlug: string,
): { category: ServiceCategory; service: ServiceItem } | undefined {
  const category = getCategoryBySlug(catalog, categorySlug);
  if (!category) return undefined;
  const raw = category.services.find((s) => s.slug === serviceSlug);
  if (!raw) return undefined;
  return {
    category,
    service: enrichServiceItem(raw, category.title, category.image),
  };
}

export function buildServiceBreadcrumbs(
  category?: ServiceCategory,
  service?: ServiceItem,
): BreadcrumbItem[] {
  const items: BreadcrumbItem[] = [
    { label: "Trang chủ", href: "/" },
    { label: "Dịch vụ", href: "/dich-vu" },
  ];
  if (category) {
    items.push({
      label: category.title,
      href: service ? categoryPath(category.slug) : undefined,
    });
  }
  if (service) {
    items.push({ label: service.title });
  }
  return items;
}

export { categoryPath, servicePath };
