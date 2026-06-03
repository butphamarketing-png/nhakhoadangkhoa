import type { ServiceCatalog } from "./types";

export async function fetchServiceCatalog(): Promise<ServiceCatalog | null> {
  const base = import.meta.env.VITE_API_URL?.replace(/\/+$/, "");
  if (!base) return null;
  try {
    const res = await fetch(`${base}/api/services/catalog`);
    if (!res.ok) return null;
    return (await res.json()) as ServiceCatalog;
  } catch {
    return null;
  }
}
