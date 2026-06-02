/** Tải nội dung từ API (Supabase qua Vercel) — fallback khi không có API */

export async function fetchPublicContent<T>(key: string): Promise<T | null> {
  const base = import.meta.env.VITE_API_URL?.replace(/\/+$/, "");
  if (!base) return null;
  try {
    const res = await fetch(`${base}/api/content/${key}`);
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}
