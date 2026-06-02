import { Router, type IRouter } from "express";
import { db, siteContentTable, SITE_CONTENT_KEYS } from "@workspace/db";
import { eq } from "drizzle-orm";
import { z } from "zod";
import { requireAdmin } from "../middleware/require-admin";

const router: IRouter = Router();

const keySchema = z.string().refine((k): k is (typeof SITE_CONTENT_KEYS)[number] =>
  (SITE_CONTENT_KEYS as readonly string[]).includes(k),
);

router.get("/content/:key", async (req, res) => {
  const parsed = keySchema.safeParse(req.params.key);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid content key" });
    return;
  }

  const [row] = await db
    .select()
    .from(siteContentTable)
    .where(eq(siteContentTable.key, parsed.data))
    .limit(1);

  if (!row) {
    res.status(404).json({ error: "Not found" });
    return;
  }

  res.json(row.data);
});

router.put("/content/:key", requireAdmin, async (req, res) => {
  const parsed = keySchema.safeParse(req.params.key);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid content key" });
    return;
  }

  const data = req.body;
  if (data === undefined || data === null) {
    res.status(400).json({ error: "Body required" });
    return;
  }

  const [row] = await db
    .insert(siteContentTable)
    .values({ key: parsed.data, data, updatedAt: new Date() })
    .onConflictDoUpdate({
      target: siteContentTable.key,
      set: { data, updatedAt: new Date() },
    })
    .returning();

  res.json({ key: row.key, updatedAt: row.updatedAt });
});

export default router;
