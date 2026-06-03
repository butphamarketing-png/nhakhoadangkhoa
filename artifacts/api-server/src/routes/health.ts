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

router.get("/healthz", (_req, res) => {
  const data = HealthCheckResponse.parse({ status: "ok" });
  res.json(data);
});

/** Kiểm tra bảng DB — mở /api/healthz/db để debug lỗi 500 / upload */
router.get("/healthz/db", async (_req, res) => {
  const envRef = process.env.SUPABASE_PROJECT_REF?.trim();
  const hasSplitEnv = Boolean(envRef && process.env.SUPABASE_DB_PASSWORD?.trim());

  let dbHost: string | undefined;
  let resolveError: string | undefined;
  try {
    const resolved = resolveDatabaseUrl();
    dbHost = new URL(resolved.replace(/^postgresql:/, "https:")).hostname;
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
      connectionError = e instanceof Error ? e.message : String(e);
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

  res.json({
    ok: missing.length === 0 && !connectionError,
    missing,
    dbHost,
    usingSplitEnv: hasSplitEnv,
    dbProjectRef,
    expectedProjectRef: EXPECTED_REF,
    projectMatch,
    connectionError: connectionError?.slice(0, 240),
    hint: connectionError
      ? isDirectHost
        ? "Direct không chạy trên Vercel IPv4. Dùng pooler hoặc SUPABASE_PROJECT_REF + SUPABASE_DB_PASSWORD."
        : hasSplitEnv
          ? "Kiểm tra SUPABASE_DB_PASSWORD (mật khẩu Database trong Supabase Settings)."
          : "Thêm trên Vercel: SUPABASE_PROJECT_REF=epsvwnsuirfnwtxloctd và SUPABASE_DB_PASSWORD=hethongnhakhoadangkhoa.com"
      : missing.length > 0
        ? "Chạy docs/supabase-init.sql trong Supabase SQL Editor."
        : undefined,
  });
});

export default router;
