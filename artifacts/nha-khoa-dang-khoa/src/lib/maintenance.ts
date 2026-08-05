/**
 * Chế độ bảo trì — ẩn website với khách trong lúc chỉnh sửa.
 *
 * SITE_OPEN_TO_PUBLIC = false → khách thấy trang "đang nâng cấp"
 * Bật lại website: đổi thành true, hoặc VITE_MAINTENANCE_MODE=0 + Redeploy
 * Xem trước khi đang bảo trì: /?xem=<VITE_MAINTENANCE_KEY> — thoát: /?xem=off
 * Admin /adminbp không bị chặn.
 */

/** false = ẩn website công khai (đang chỉnh sửa). true = mở lại cho khách. */
export const SITE_OPEN_TO_PUBLIC = false;

const BYPASS_STORAGE_KEY = "dk-maintenance-bypass";
const BYPASS_PARAM = "xem";
const BYPASS_OFF = "off";

export function isMaintenanceEnabled(): boolean {
  if (!SITE_OPEN_TO_PUBLIC) return true;

  const flag = import.meta.env.VITE_MAINTENANCE_MODE?.trim().toLowerCase();
  if (flag === "0" || flag === "false" || flag === "off") return false;
  if (flag === "1" || flag === "true" || flag === "on") return true;
  return false;
}

function bypassKey(): string {
  return import.meta.env.VITE_MAINTENANCE_KEY?.trim() ?? "";
}

/**
 * true = hiển thị trang bảo trì. Chỉ chặn khi bật chế độ bảo trì
 * và người xem không có quyền xem trước.
 */
export function shouldBlockVisitors(): boolean {
  if (!isMaintenanceEnabled()) return false;

  const key = bypassKey();
  if (!key) return true;

  try {
    const provided = new URLSearchParams(window.location.search).get(BYPASS_PARAM);

    if (provided === BYPASS_OFF) {
      localStorage.removeItem(BYPASS_STORAGE_KEY);
      return true;
    }

    if (provided === key) {
      localStorage.setItem(BYPASS_STORAGE_KEY, key);
      return false;
    }

    return localStorage.getItem(BYPASS_STORAGE_KEY) !== key;
  } catch {
    // Trình duyệt chặn localStorage — coi như khách thường
    return true;
  }
}
