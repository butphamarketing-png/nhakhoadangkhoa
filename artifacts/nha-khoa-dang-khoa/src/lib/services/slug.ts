export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "d")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function servicePath(categorySlug: string, serviceSlug: string): string {
  return `/dich-vu/${categorySlug}/${serviceSlug}`;
}

export function categoryPath(categorySlug: string): string {
  return `/dich-vu/${categorySlug}`;
}
