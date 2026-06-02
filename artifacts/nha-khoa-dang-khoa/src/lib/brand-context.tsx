import { createContext, useContext, useMemo, type ReactNode } from "react";
import { BRAND } from "./constants";
import { useCmsData } from "./cms-provider";

export type BrandInfo = typeof BRAND;

const BrandContext = createContext<BrandInfo>(BRAND);

export function BrandProvider({ children }: { children: ReactNode }) {
  const siteOverride = useCmsData("site", {} as Partial<BrandInfo>);
  const brand = useMemo(() => ({ ...BRAND, ...siteOverride }), [siteOverride]);

  return <BrandContext.Provider value={brand}>{children}</BrandContext.Provider>;
}

export function useBrand() {
  return useContext(BrandContext);
}
