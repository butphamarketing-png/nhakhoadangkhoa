import { Router, type IRouter } from "express";
import { sql } from "drizzle-orm";
import { HealthCheckResponse } from "@workspace/api-zod";
import { db, resolveDatabaseUrl } from "@workspace/db";

const router: IRouter = Router();

const REQUIRED_TABLES = [
  "appointments",
  "site_content",
  "service_categories",
  "services",
  "media_assets",
] as const;

const EXPECTED_REF = "epsvwnsuirfnwtxloctd";

function unwrapDbError(e: unknown): string {
  const parts: string[] = [];
  let cur: unknown = e;
  for (let depth = 0; depth < 5 && cur; depth++) {
    if (cur instanceof Error) {
      parts.push(cur.message);
      cur = cur.cause;
    } else {
      parts.push(String(cur));
      break;
    }
  }
  return parts.join(" — ");
}

router.get("/healthz", (_req, res) => {
  const data = HealthCheckResponse.parse({ status: "ok" });
  res.json(data);
});

/** Kiểm tra bảng DB — mở /api/healthz/db để debug lỗi 500 / upload */
router.get("/healthz/db", async (_req, res) => {
  const envRef = process.env.SUPABASE_PROJECT_REF?.trim();
  const hasSplitEnv = Boolean(envRef && process.env.SUPABASE_DB_PASSWORD?.trim());

  let dbHost: string | undefined;
  let dbPort: string | undefined;
  let resolveError: string | undefined;
  try {
    const resolved = resolveDatabaseUrl();
    const parsed = new URL(resolved.replace(/^postgresql:/, "https:"));
    dbHost = parsed.hostname;
    dbPort = parsed.port || "5432";
  } catch (e) {
    resolveError = e instanceof Error ? e.message : String(e);
  }

  const dbProjectRef =
    envRef ||
    process.env.DATABASE_URL?.match(/postgres\.([a-z0-9]+):/i)?.[1] ||
    (dbHost?.includes(EXPECTED_REF) ? EXPECTED_REF : undefined);

  const projectMatch = dbProjectRef === EXPECTED_REF || (dbHost?.includes(EXPECTED_REF) ?? false);

  let connectionError = resolveError;
  if (!connectionError) {
    try {
      await db.execute(sql.raw("SELECT 1 AS ok"));
    } catch (e) {
      connectionError = unwrapDbError(e);
    }
  }

  const missing: string[] = [];
  if (!connectionError) {
    for (const table of REQUIRED_TABLES) {
      try {
        await db.execute(sql.raw(`SELECT 1 FROM ${table} LIMIT 1`));
      } catch {
        missing.push(table);
      }
    }
  } else {
    missing.push(...REQUIRED_TABLES);
  }

  const isDirectHost = dbHost?.startsWith("db.") && dbHost.includes(".supabase.co");
  const isWrongPooler =
    /tenant\/user|not found|ENOTFOUND/i.test(connectionError ?? "") &&
    dbHost?.includes("pooler.supabase.com");

  res.json({
    ok: missing.length === 0 && !connectionError,
    missing,
    dbHost,
    dbPort,
    usingSplitEnv: hasSplitEnv,
    dbProjectRef,
    expectedProjectRef: EXPECTED_REF,
    projectMatch,
    connectionError: connectionError?.slice(0, 240),
    hint: connectionError
      ? isWrongPooler
        ? `Sai host pooler (${dbHost}). Vào Supabase → Settings → Database → Connection string → Transaction pooler → copy nguyên URI (có thể là aws-1-..., không phải aws-0-...).`
        : isDirectHost
        ? "Direct không chạy trên Vercel IPv4. Dùng pooler hoặc SUPABASE_PROJECT_REF + SUPABASE_DB_PASSWORD."
        : hasSplitEnv
          ? "SUPABASE_DB_PASSWORD phải là mật khẩu Database (Supabase → Settings → Database), không phải ADMIN_PASSWORD."
          : "Kiểm tra DATABASE_URL trên Vercel: mật khẩu Database (không có .com), pooler port 6543, user postgres.epsvwnsuirfnwtxloctd."
      : missing.length > 0
        ? "Chạy docs/supabase-init.sql trong Supabase SQL Editor."
        : undefined,
  });
});

/** Kiểm tra cấu hình email — mở /api/healthz/mail để xem Vercel đã nhận biến chưa */
router.get("/healthz/mail", (_req, res) => {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const notifyEmail = process.env.NOTIFY_EMAIL?.trim();

  const hasApiKey = Boolean(apiKey);
  const hasNotifyEmail = Boolean(notifyEmail);
  const apiKeyLooksValid = apiKey?.startsWith("re_") ?? false;

  const missing: string[] = [];
  if (!hasApiKey) missing.push("RESEND_API_KEY");
  if (!hasNotifyEmail) missing.push("NOTIFY_EMAIL");

  res.json({
    ok: missing.length === 0 && apiKeyLooksValid,
    missing,
    hasApiKey,
    apiKeyLooksValid,
    // Chỉ hiện 4 ký tự cuối để đối chiếu, không lộ key
    apiKeyTail: apiKey ? `...${apiKey.slice(-4)}` : undefined,
    notifyEmail,
    mailFrom: process.env.MAIL_FROM?.trim() || "(mặc định onboarding@resend.dev)",
    hint:
      missing.length > 0
        ? `Thiếu ${missing.join(", ")} trên Vercel. Thêm vào project đang chạy API này (Settings → Environment Variables) rồi Redeploy.`
        : !apiKeyLooksValid
          ? "RESEND_API_KEY không bắt đầu bằng 're_' — có thể bị copy thiếu hoặc lẫn dấu cách."
          : undefined,
  });
});

export default router;
