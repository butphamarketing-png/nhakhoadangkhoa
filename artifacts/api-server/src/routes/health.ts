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
    hint:
      missing.length > 0
        ? "Chạy docs/supabase-init.sql trong Supabase → SQL Editor (một lần, không qua Vercel)."
        : undefined,
  });
});

export default router;
