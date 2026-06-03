import { useQuery } from "@tanstack/react-query";
import { fetchServiceCatalog } from "./api";
import { DEFAULT_SERVICE_CATALOG } from "./catalog-data";
import type { ServiceCatalog } from "./types";

export const EMPTY_SERVICE_CATALOG: ServiceCatalog = { version: 2, categories: [] };

function resolveCatalog(data: ServiceCatalog | undefined, hasApi: boolean): ServiceCatalog {
  if (data?.categories?.length) return data;
  if (!hasApi) return DEFAULT_SERVICE_CATALOG;
  return EMPTY_SERVICE_CATALOG;
}

/** Catalog từ API — fallback dữ liệu mẫu khi chưa có API hoặc DB trống */
export function useServiceCatalog(): ServiceCatalog {
  const apiUrl = import.meta.env.VITE_API_URL?.replace(/\/+$/, "");
  const hasApi = Boolean(apiUrl);

  const { data } = useQuery({
    queryKey: ["service-catalog", apiUrl],
    queryFn: async () => (await fetchServiceCatalog()) ?? EMPTY_SERVICE_CATALOG,
    staleTime: 60_000,
    enabled: hasApi,
  });

  return resolveCatalog(hasApi ? data : undefined, hasApi);
}

export function useServiceCatalogStatus() {
  const apiUrl = import.meta.env.VITE_API_URL?.replace(/\/+$/, "");
  const hasApi = Boolean(apiUrl);
  const { isLoading, isError, data } = useQuery({
    queryKey: ["service-catalog", apiUrl],
    queryFn: async () => (await fetchServiceCatalog()) ?? EMPTY_SERVICE_CATALOG,
    staleTime: 60_000,
    enabled: hasApi,
  });

  const catalog = resolveCatalog(hasApi ? data : undefined, hasApi);
  const usingFallback = hasApi && !data?.categories?.length && DEFAULT_SERVICE_CATALOG.categories.length > 0;

  return {
    loading: hasApi && isLoading,
    isError,
    isEmpty: !catalog.categories.length,
    hasApi,
    usingFallback: usingFallback || !hasApi,
  };
}
