/**
 * Chế độ bảo trì — ẩn website với khách trong lúc chỉnh sửa.
 *
 * Production: SITE_OPEN_TO_PUBLIC = false → khách thấy trang "đang nâng cấp"
 * Bật lại website công khai: đổi SITE_OPEN_TO_PUBLIC = true rồi push/redeploy
 * Local (dev): vẫn mở bình thường trừ khi VITE_MAINTENANCE_MODE=1
 * Xem trước production khi bảo trì: /?xem=<VITE_MAINTENANCE_KEY> — thoát: /?xem=off
 * Admin /adminbp không bị chặn.
 */

/** false = ẩn website công khai (đang chỉnh sửa). true = mở lại cho khách. */
export const SITE_OPEN_TO_PUBLIC = false;

const BYPASS_STORAGE_KEY = "dk-maintenance-bypass";
const BYPASS_PARAM = "xem";
const BYPASS_OFF = "off";

export function isMaintenanceEnabled(): boolean {
  // Local: ưu tiên chỉnh sửa — chỉ chặn nếu bật MODE=1 trong .env
  if (import.meta.env.DEV) {
    const flag = import.meta.env.VITE_MAINTENANCE_MODE?.trim().toLowerCase();
    return flag === "1" || flag === "true" || flag === "on";
  }

  if (!SITE_OPEN_TO_PUBLIC) return true;

  const flag = import.meta.env.VITE_MAINTENANCE_MODE?.trim().toLowerCase();
  if (flag === "0" || flag === "false" || flag === "off") return false;
  if (flag === "1" || flag === "true" || flag === "on") return true;
  return false;
}

function bypassKey(): string {
  return import.meta.env.VITE_MAINTENANCE_KEY?.trim() || "xemtruoc2026";
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
