const TOKEN_KEY = "dk-admin-token";

export function getApiBase(): string {
  const base = import.meta.env.VITE_API_URL?.replace(/\/+$/, "");
  if (base) return base;
  if (typeof window !== "undefined") return window.location.origin;
  throw new Error("Chưa cấu hình VITE_API_URL");
}

export function getToken(): string | null {
  return localStorage.getItem(TOKEN_KEY);
}

export function setToken(token: string) {
  localStorage.setItem(TOKEN_KEY, token);
}

export function clearToken() {
  localStorage.removeItem(TOKEN_KEY);
}

export async function apiFetch<T>(
  path: string,
  options: RequestInit & { auth?: boolean } = {},
): Promise<T> {
  const { auth = true, ...init } = options;
  const headers = new Headers(init.headers);
  headers.set("Content-Type", "application/json");

  if (auth) {
    const token = getToken();
    if (!token) throw new Error("Chưa đăng nhập");
    headers.set("Authorization", `Bearer ${token}`);
  }

  const res = await fetch(`${getApiBase()}${path}`, { ...init, headers });

  if (res.status === 401) {
    clearToken();
    throw new Error("Phiên đăng nhập hết hạn");
  }

  if (!res.ok) {
    const err = (await res.json().catch(() => ({}))) as { error?: string };
    throw new Error(err.error ?? `Lỗi ${res.status}`);
  }

  if (res.status === 204) return undefined as T;
  return res.json() as Promise<T>;
}

export async function login(email: string, password: string) {
  const data = await apiFetch<{ token: string }>("/api/admin/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    auth: false,
  });
  setToken(data.token);
}
