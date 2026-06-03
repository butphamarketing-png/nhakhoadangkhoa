import { Router, type IRouter } from "express";
import { sql } from "drizzle-orm";
import { HealthCheckResponse } from "@workspace/api-zod";
import { db } from "@workspace/db";

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
  const rawUrl = process.env.DATABASE_URL ?? "";
  const dbHost = (() => {
    try {
      const u = new URL(rawUrl.replace(/^postgresql:/, "https:"));
      return u.hostname || undefined;
    } catch {
      return undefined;
    }
  })();

  const dbProjectRef = rawUrl.match(/postgres\.([a-z0-9]+):/i)?.[1];
  const projectMatch =
    dbProjectRef === EXPECTED_REF || (dbHost?.includes(EXPECTED_REF) ?? false);

  let connectionError: string | undefined;
  try {
    await db.execute(sql.raw("SELECT 1 AS ok"));
  } catch (e) {
    connectionError = e instanceof Error ? e.message : String(e);
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
    dbProjectRef: dbProjectRef ?? (projectMatch ? EXPECTED_REF : undefined),
    expectedProjectRef: EXPECTED_REF,
    projectMatch,
    connectionError: connectionError?.slice(0, 200),
    hint: connectionError
      ? isDirectHost
        ? "Direct (db.xxx.supabase.co) không tương thích IPv4 trên Vercel. Dùng Session pooler port 5432 hoặc Transaction pooler port 6543."
        : "Không kết nối DB — kiểm tra mật khẩu DATABASE_URL trên Vercel."
      : missing.length > 0
        ? "Chạy docs/supabase-init.sql trong Supabase SQL Editor."
        : undefined,
  });
});

export default router;
