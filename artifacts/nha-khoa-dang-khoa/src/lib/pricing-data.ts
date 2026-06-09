/**
 * Bảng giá website — đọc từ CMS (Supabase) hoặc giá mặc định pricing-catalog
 */

import { PRICING_CATALOG, defaultPricingMap, pricingGroupsForWebsite } from "./pricing-catalog";

export type PriceLine = { id: string; name: string };
export type PriceGroup = { id: string; service: string; items: PriceLine[] };

const STORAGE_KEY = "dk-pricing-v1";

export const PRICE_GROUPS: PriceGroup[] = pricingGroupsForWebsite();

const DEFAULT_PRICES = defaultPricingMap();

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
  return DEFAULT_PRICES[itemId] ?? "Liên hệ";
}

export function setStoredPrices(prices: Record<string, string>) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(prices));
}

export async function syncPricingFromApi(): Promise<void> {
  const base = import.meta.env.VITE_API_URL?.replace(/\/+$/, "");
  if (!base || typeof window === "undefined") return;
  try {
    const res = await fetch(`${base}/api/content/pricing`);
    if (!res.ok) return;
    const data = (await res.json()) as Record<string, string>;
    if (data && typeof data === "object" && Object.keys(data).length > 0) {
      setStoredPrices(data);
    }
  } catch {
    /* giữ giá local / mặc định */
  }
}

export { PRICING_CATALOG, defaultPricingMap };
