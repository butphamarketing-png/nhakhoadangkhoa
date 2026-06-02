/**
 * Cấu trúc bảng giá theo nhóm dịch vụ — giá cập nhật qua admin (localStorage)
 */

import { SERVICE_MENU_GROUPS } from "./services-menu";

export type PriceLine = {
  id: string;
  name: string;
};

export type PriceGroup = {
  id: string;
  service: string;
  items: PriceLine[];
};

const STORAGE_KEY = "dk-pricing-v1";

export const PRICE_GROUPS: PriceGroup[] = SERVICE_MENU_GROUPS.map((g) => ({
  id: g.id,
  service: g.title,
  items: g.items.map((item, i) => ({
    id: `${g.id}-${i}`,
    name: item.label,
  })),
}));

export function getStoredPrices(): Record<string, string> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Record<string, string>) : {};
  } catch {
    return {};
  }
}

export function getPriceDisplay(itemId: string): string {
  const stored = getStoredPrices();
  if (stored[itemId]?.trim()) return stored[itemId];
  return "Liên hệ";
}

/** Ghi giá từ admin (API hoặc panel) */
export function setStoredPrices(prices: Record<string, string>) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(prices));
}

/** Tải giá từ API admin (Supabase) */
export async function syncPricingFromApi(): Promise<void> {
  const base = import.meta.env.VITE_API_URL?.replace(/\/+$/, "");
  if (!base || typeof window === "undefined") return;
  try {
    const res = await fetch(`${base}/api/content/pricing`);
    if (!res.ok) return;
    const data = (await res.json()) as Record<string, string>;
    if (data && typeof data === "object") setStoredPrices(data);
  } catch {
    /* giữ giá local */
  }
}
