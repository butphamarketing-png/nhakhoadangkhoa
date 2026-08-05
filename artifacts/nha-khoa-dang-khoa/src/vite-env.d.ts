/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL?: string;
  /** "1" = bật chế độ bảo trì, ẩn website với khách */
  readonly VITE_MAINTENANCE_MODE?: string;
  /** Mã xem trước website khi đang bảo trì: /?xem=<mã> */
  readonly VITE_MAINTENANCE_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
