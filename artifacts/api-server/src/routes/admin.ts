import { Router, type IRouter } from "express";
import { z } from "zod";
import { db, appointmentsTable, siteContentTable, SITE_CONTENT_KEYS } from "@workspace/db";
import { sql, desc, gte } from "drizzle-orm";
import { requireAdmin } from "../middleware/require-admin";

const router: IRouter = Router();

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

router.post("/admin/login", (req, res) => {
  const parsed = loginSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Email hoặc mật khẩu không hợp lệ" });
    return;
  }

  const adminEmail = process.env.ADMIN_EMAIL ?? "admin@hethongnhakhoadangkhoa.com";
  const adminPassword = process.env.ADMIN_PASSWORD;
  const adminKey = process.env.ADMIN_API_KEY;

  if (!adminPassword || !adminKey) {
    res.status(503).json({ error: "Admin chưa được cấu hình trên server" });
    return;
  }

  const emailOk = parsed.data.email.trim().toLowerCase() === adminEmail.trim().toLowerCase();
  if (!emailOk || parsed.data.password !== adminPassword) {
    res.status(401).json({ error: "Sai email hoặc mật khẩu" });
    return;
  }

  res.json({ token: adminKey });
});

router.get("/admin/stats", requireAdmin, async (_req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const [totals] = await db
      .select({
        total: sql<number>`count(*)::int`,
        pending: sql<number>`count(*) filter (where ${appointmentsTable.status} = 'pending')::int`,
        confirmed: sql<number>`count(*) filter (where ${appointmentsTable.status} = 'confirmed')::int`,
        cancelled: sql<number>`count(*) filter (where ${appointmentsTable.status} = 'cancelled')::int`,
      })
      .from(appointmentsTable);

    const [todayCount] = await db
      .select({ count: sql<number>`count(*)::int` })
      .from(appointmentsTable)
      .where(gte(appointmentsTable.createdAt, today));

    const recent = await db
      .select()
      .from(appointmentsTable)
      .orderBy(desc(appointmentsTable.createdAt))
      .limit(8);

    res.json({
      totals,
      todayCount: todayCount?.count ?? 0,
      recent: recent.map((row) => ({
        id: row.id,
        name: row.name,
        phone: row.phone,
        service: row.service,
        date: row.appointmentDate,
        time: row.appointmentTime,
        status: row.status,
        createdAt: row.createdAt,
      })),
    });
  } catch (e) {
    console.error("[admin/stats] failed:", e);
    res.status(503).json({ error: "Không kết nối được database." });
  }
});

router.get("/admin/content-status", requireAdmin, async (_req, res) => {
  try {
    const rows = await db.select({ key: siteContentTable.key }).from(siteContentTable);
    const existing = new Set(rows.map((r) => r.key));
    const status: Record<string, boolean> = {};
    for (const key of SITE_CONTENT_KEYS) {
      status[key] = existing.has(key);
    }
    res.json(status);
  } catch (e) {
    console.error("[admin/content-status] failed:", e);
    res.status(503).json({ error: "Không kết nối được database." });
  }
});

router.get("/admin/me", requireAdmin, (_req, res) => {
  res.json({ ok: true });
});

export default router;
