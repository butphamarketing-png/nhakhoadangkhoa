const DEFAULT_POOLER = "aws-0-ap-southeast-1.pooler.supabase.com";

/** Session pooler (5432) — tương thích Drizzle/node-pg trên Vercel */
export function buildSupabasePoolerUrl(
  projectRef: string,
  password: string,
  port: "5432" | "6543" = "5432",
  host = DEFAULT_POOLER,
): string {
  const user = projectRef.includes(".") ? projectRef : `postgres.${projectRef}`;
  const enc = encodeURIComponent(password);
  return `postgresql://${user}:${enc}@${host}:${port}/postgres?sslmode=require&uselibpqcompat=true`;
}

function parsePgUrl(raw: string): URL {
  return new URL(raw.replace(/^postgresql:/, "https:"));
}

function projectRefFromUser(user: string): string {
  return user.startsWith("postgres.") ? user.slice("postgres.".length) : user;
}

/** Chuẩn hóa DATABASE_URL — encode password, 6543→5432, hỗ trợ SUPABASE_DB_PASSWORD override */
export function resolveDatabaseUrl(): string {
  const raw = process.env.DATABASE_URL?.trim();
  const pwdOverride = process.env.SUPABASE_DB_PASSWORD?.trim();
  const refOverride = process.env.SUPABASE_PROJECT_REF?.trim();

  if (raw && (pwdOverride || refOverride)) {
    const u = parsePgUrl(raw);
    const ref = refOverride || projectRefFromUser(u.username || "postgres");
    const pwd = pwdOverride || decodeURIComponent(u.password || "");
    const port = u.port === "6543" ? "5432" : (u.port || "5432");
    const host = process.env.SUPABASE_POOLER_HOST?.trim() || u.hostname || DEFAULT_POOLER;
    return buildSupabasePoolerUrl(ref, pwd, port as "5432" | "6543", host);
  }

  if (refOverride && pwdOverride) {
    const port = (process.env.SUPABASE_DB_PORT?.trim() as "5432" | "6543") || "5432";
    const host = process.env.SUPABASE_POOLER_HOST?.trim() || DEFAULT_POOLER;
    return buildSupabasePoolerUrl(refOverride, pwdOverride, port, host);
  }

  if (!raw) {
    throw new Error(
      "Thiếu DATABASE_URL hoặc SUPABASE_PROJECT_REF + SUPABASE_DB_PASSWORD trên Vercel.",
    );
  }

  return normalizeSupabaseUrl(raw);
}

function normalizeSupabaseUrl(raw: string): string {
  if (!raw.includes("supabase")) return raw;

  try {
    const u = parsePgUrl(raw);
    const password = decodeURIComponent(u.password || "");
    const encoded = encodeURIComponent(password);
    const user = u.username || "postgres";
    let port = u.port || "5432";
    const host = u.hostname;

    if (port === "6543" && host.includes("pooler.supabase.com")) {
      port = "5432";
    }

    const path = u.pathname || "/postgres";
    const params = new URLSearchParams(u.search);
    params.set("sslmode", "require");
    if (!params.has("uselibpqcompat")) params.set("uselibpqcompat", "true");

    return `postgresql://${user}:${encoded}@${host}:${port}${path}?${params.toString()}`;
  } catch {
    if (raw.includes("sslmode=")) return raw;
    return `${raw}${raw.includes("?") ? "&" : "?"}sslmode=require&uselibpqcompat=true`;
  }
}

export function isSupabaseUrl(url: string): boolean {
  return url.includes("supabase.com") || url.includes("supabase.co");
}
