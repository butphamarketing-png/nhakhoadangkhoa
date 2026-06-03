import { apiFetch } from "./api";

export type ServiceCategoryRow = {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  icon: string;
  sortOrder: number;
  status: string;
  createdAt: string;
  updatedAt: string;
};

export type ServiceFaq = { q: string; a: string };
export type ServiceProcess = { step: string; title: string; desc: string };

export type ServiceRow = {
  id: string;
  categoryId: string;
  name: string;
  slug: string;
  excerpt: string;
  thumbnail: string;
  banner: string;
  content: string;
  faq: ServiceFaq[];
  seoTitle: string;
  seoDescription: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  canonicalUrl: string;
  focusKeyword: string;
  secondaryKeywords?: string;
  robots?: string;
  benefits: string[];
  audience: string[];
  process: ServiceProcess[];
  priceNote: string;
  ctaText: string;
  ctaLink: string;
  sortOrder: number;
  status: string;
  createdAt: string;
  updatedAt: string;
};

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export const serviceCatalogApi = {
  listCategories: () => apiFetch<ServiceCategoryRow[]>("/api/admin/service-categories"),
  createCategory: (body: Partial<ServiceCategoryRow>) =>
    apiFetch<ServiceCategoryRow>("/api/admin/service-categories", {
      method: "POST",
      body: JSON.stringify(body),
    }),
  updateCategory: (id: string, body: Partial<ServiceCategoryRow>) =>
    apiFetch<ServiceCategoryRow>(`/api/admin/service-categories/${id}`, {
      method: "PATCH",
      body: JSON.stringify(body),
    }),
  deleteCategory: (id: string) =>
    apiFetch<void>(`/api/admin/service-categories/${id}`, { method: "DELETE" }),
  reorderCategories: (ids: string[]) =>
    apiFetch<{ ok: boolean }>("/api/admin/service-categories/reorder", {
      method: "PUT",
      body: JSON.stringify({ ids }),
    }),

  listServices: (categoryId?: string) =>
    apiFetch<ServiceRow[]>(
      `/api/admin/services${categoryId ? `?categoryId=${categoryId}` : ""}`,
    ),
  createService: (body: Record<string, unknown>) =>
    apiFetch<ServiceRow>("/api/admin/services", { method: "POST", body: JSON.stringify(body) }),
  updateService: (id: string, body: Record<string, unknown>) =>
    apiFetch<ServiceRow>(`/api/admin/services/${id}`, {
      method: "PATCH",
      body: JSON.stringify(body),
    }),
  deleteService: (id: string) =>
    apiFetch<void>(`/api/admin/services/${id}`, { method: "DELETE" }),
  reorderServices: (ids: string[]) =>
    apiFetch<{ ok: boolean }>("/api/admin/services/reorder", {
      method: "PUT",
      body: JSON.stringify({ ids }),
    }),
  seed: (force = false) =>
    apiFetch<{ ok: boolean; categories: number; forced?: boolean }>(
      `/api/admin/services/seed${force ? "?force=true" : ""}`,
      { method: "POST", body: force ? JSON.stringify({ force: true }) : undefined },
    ),
};
