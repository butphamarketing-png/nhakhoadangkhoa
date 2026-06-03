import { apiFetch, getApiBase, getToken } from "./api";

export type MediaAsset = {
  id: string;
  filename: string;
  alt: string;
  mimeType: string;
  size: number;
  url: string;
  publicUrl: string;
  createdAt: string;
};

export function resolveMediaUrl(publicUrl: string): string {
  if (publicUrl.startsWith("http") || publicUrl.startsWith("data:")) return publicUrl;
  return `${getApiBase()}${publicUrl.startsWith("/") ? publicUrl : `/${publicUrl}`}`;
}

/** URL hiển thị preview (hỗ trợ /images/ local và /api/media/) */
export function cmsImageSrc(url: string): string {
  if (!url) return "";
  if (url.startsWith("http") || url.startsWith("data:")) return url;
  if (url.startsWith("/api/media/")) return resolveMediaUrl(url);
  return url;
}

export const mediaApi = {
  list: (q?: string) =>
    apiFetch<MediaAsset[]>(`/api/admin/media${q ? `?q=${encodeURIComponent(q)}` : ""}`),

  upload: async (file: File, alt?: string): Promise<MediaAsset> => {
    const form = new FormData();
    form.append("file", file);
    if (alt) form.append("alt", alt);
    const token = getToken();
    const res = await fetch(`${getApiBase()}/api/admin/media/upload`, {
      method: "POST",
      headers: token ? { Authorization: `Bearer ${token}` } : {},
      body: form,
    });
    if (!res.ok) {
      const err = (await res.json().catch(() => ({}))) as { error?: string };
      throw new Error(err.error ?? `Upload failed ${res.status}`);
    }
    return res.json() as Promise<MediaAsset>;
  },

  update: (id: string, body: { alt?: string; filename?: string }) =>
    apiFetch<MediaAsset>(`/api/admin/media/${id}`, { method: "PATCH", body: JSON.stringify(body) }),

  remove: (id: string) => apiFetch<void>(`/api/admin/media/${id}`, { method: "DELETE" }),
};
