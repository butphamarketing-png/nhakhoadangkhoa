import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { BRAND } from "./constants";
import { fetchPublicContent } from "./cms";

export type BrandInfo = typeof BRAND;

const BrandContext = createContext<BrandInfo>(BRAND);

export function BrandProvider({ children }: { children: ReactNode }) {
  const [brand, setBrand] = useState<BrandInfo>(BRAND);

  useEffect(() => {
    fetchPublicContent<Partial<BrandInfo>>("site").then((data) => {
      if (data) setBrand((prev) => ({ ...prev, ...data }));
    });
  }, []);

  return <BrandContext.Provider value={brand}>{children}</BrandContext.Provider>;
}

export function useBrand() {
  return useContext(BrandContext);
}
