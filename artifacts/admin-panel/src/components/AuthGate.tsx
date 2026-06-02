import { useEffect, useState, type ReactNode } from "react";
import { useLocation, Redirect } from "wouter";
import { apiFetch, getToken } from "@/lib/api";

export default function AuthGate({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const [state, setState] = useState<"loading" | "ok" | "guest">("loading");

  useEffect(() => {
    const token = getToken();
    if (!token) {
      setState("guest");
      return;
    }
    apiFetch("/api/admin/me")
      .then(() => setState("ok"))
      .catch(() => setState("guest"));
  }, [location]);

  if (location === "/login") return <>{children}</>;
  if (state === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-sm text-gray-500">Đang kiểm tra đăng nhập...</div>
      </div>
    );
  }
  if (state === "guest") return <Redirect to="/login" />;
  return <>{children}</>;
}
