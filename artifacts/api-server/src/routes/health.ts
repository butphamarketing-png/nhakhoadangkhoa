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

router.get("/healthz", (_req, res) => {
  const data = HealthCheckResponse.parse({ status: "ok" });
  res.json(data);
});

/** Kiểm tra bảng DB — mở /api/healthz/db để debug lỗi 500 / upload */
router.get("/healthz/db", async (_req, res) => {
  const dbHost = (() => {
    try {
      const u = new URL(process.env.DATABASE_URL?.replace(/^postgresql:/, "https:") ?? "");
      return u.hostname || undefined;
    } catch {
      return undefined;
    }
  })();

  const dbProjectRef = (() => {
    const url = process.env.DATABASE_URL ?? "";
    const m = url.match(/postgres\.([a-z0-9]+):/i);
    return m?.[1];
  })();

  const missing: string[] = [];
  for (const table of REQUIRED_TABLES) {
    try {
      await db.execute(sql.raw(`SELECT 1 FROM ${table} LIMIT 1`));
    } catch {
      missing.push(table);
    }
  }
  res.json({
    ok: missing.length === 0,
    missing,
    dbHost,
    dbProjectRef,
    expectedProjectRef: "epsvwnsuirfnwtxloctd",
    projectMatch: dbProjectRef === "epsvwnsuirfnwtxloctd",
    hint:
      missing.length > 0
        ? dbProjectRef !== "epsvwnsuirfnwtxloctd"
          ? "DATABASE_URL trên Vercel sai project. Dùng postgres.epsvwnsuirfnwtxloctd trong connection string."
          : "Bảng chưa thấy qua pooler — thử Direct connection (port 5432) hoặc chạy lại docs/supabase-init.sql."
        : undefined,
  });
});

export default router;
