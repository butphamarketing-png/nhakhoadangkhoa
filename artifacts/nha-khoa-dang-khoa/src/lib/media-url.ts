/** URL hiển thị ảnh từ CMS (hỗ trợ /api/media/ và /images/) */
export function cmsImageSrc(url: string): string {
  if (!url) return "";
  if (url.startsWith("http") || url.startsWith("data:")) return url;
  if (url.startsWith("/api/media/")) {
    const base = import.meta.env.VITE_API_URL?.replace(/\/+$/, "");
    return base ? `${base}${url}` : url;
  }
  return url;
}
