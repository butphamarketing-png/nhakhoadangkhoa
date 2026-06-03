export type MediaItem = {
  id: string;
  url: string;
  alt: string;
  name: string;
  createdAt: string;
};

export type MediaLibrary = {
  items: MediaItem[];
};

export const EMPTY_MEDIA_LIBRARY: MediaLibrary = { items: [] };

export function createMediaItem(url: string, alt = "", name = ""): MediaItem {
  return {
    id: crypto.randomUUID(),
    url,
    alt: alt || name || "Ảnh Nha Khoa Đăng Khoa",
    name: name || url.split("/").pop() || "image",
    createdAt: new Date().toISOString(),
  };
}
