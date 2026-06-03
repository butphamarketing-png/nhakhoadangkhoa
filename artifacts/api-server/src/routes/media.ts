import { Router, type IRouter } from "express";
import { desc, eq, ilike, or } from "drizzle-orm";
import multer from "multer";
import { db, mediaAssetsTable } from "@workspace/db";
import { requireAdmin } from "../middleware/require-admin";
import { formatDbError } from "../lib/db-errors";
import { ensureDbSchema } from "../lib/ensure-schema";

const router: IRouter = Router();
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 4 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    if (!file.mimetype.startsWith("image/")) {
      cb(new Error("Chỉ chấp nhận file hình ảnh"));
      return;
    }
    cb(null, true);
  },
});

function publicMediaUrl(req: { protocol: string; get: (h: string) => string | undefined }, id: string) {
  const host = process.env.API_PUBLIC_URL ?? `${req.protocol}://${req.get("host")}`;
  return `${host.replace(/\/$/, "")}/api/media/${id}`;
}

/** Phục vụ ảnh công khai */
router.get("/media/:id", async (req, res): Promise<void> => {
  const [row] = await db
    .select()
    .from(mediaAssetsTable)
    .where(eq(mediaAssetsTable.id, req.params.id))
    .limit(1);
  if (!row) {
    res.status(404).send("Not found");
    return;
  }

  if (row.url.startsWith("data:")) {
    const match = row.url.match(/^data:([^;]+);base64,(.+)$/);
    if (!match) {
      res.status(500).send("Invalid data");
      return;
    }
    res.setHeader("Content-Type", match[1]);
    res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
    res.send(Buffer.from(match[2], "base64"));
    return;
  }

  res.redirect(row.url);
});

router.get("/admin/media", requireAdmin, async (req, res) => {
  try {
    await ensureDbSchema();
    const q = (req.query.q as string | undefined)?.trim();
    const rows = q
      ? await db
          .select()
          .from(mediaAssetsTable)
          .where(or(ilike(mediaAssetsTable.filename, `%${q}%`), ilike(mediaAssetsTable.searchText, `%${q}%`)))
          .orderBy(desc(mediaAssetsTable.createdAt))
          .limit(80)
      : await db.select().from(mediaAssetsTable).orderBy(desc(mediaAssetsTable.createdAt)).limit(80);

    res.json(
      rows.map((r) => ({
        ...r,
        publicUrl: `/api/media/${r.id}`,
      })),
    );
  } catch (e) {
    res.status(500).json({ error: formatDbError(e, "media_assets") });
  }
});

router.post("/admin/media/upload", requireAdmin, upload.single("file"), async (req, res): Promise<void> => {
  try {
    await ensureDbSchema();
    const file = req.file;
    if (!file) {
      res.status(400).json({ error: "Thiếu file" });
      return;
    }

    const alt = (req.body?.alt as string) || file.originalname;
    const base64 = file.buffer.toString("base64");
    const dataUrl = `data:${file.mimetype};base64,${base64}`;

    const [row] = await db
      .insert(mediaAssetsTable)
      .values({
        filename: file.originalname,
        alt,
        mimeType: file.mimetype,
        size: file.size,
        url: dataUrl,
        searchText: `${file.originalname} ${alt}`.toLowerCase(),
      })
      .returning();

    res.status(201).json({
      ...row,
      publicUrl: publicMediaUrl(req, row.id),
    });
  } catch (e) {
    res.status(400).json({ error: formatDbError(e, "media_assets") });
  }
});

router.patch("/admin/media/:id", requireAdmin, async (req, res): Promise<void> => {
  const { alt, filename } = req.body as { alt?: string; filename?: string };
  const [row] = await db
    .update(mediaAssetsTable)
    .set({
      ...(alt != null ? { alt } : {}),
      ...(filename != null ? { filename, searchText: `${filename} ${alt ?? ""}`.toLowerCase() } : {}),
    })
    .where(eq(mediaAssetsTable.id, req.params.id))
    .returning();
  if (!row) {
    res.status(404).json({ error: "Not found" });
    return;
  }
  res.json({ ...row, publicUrl: `/api/media/${row.id}` });
});

router.delete("/admin/media/:id", requireAdmin, async (req, res): Promise<void> => {
  const [row] = await db.delete(mediaAssetsTable).where(eq(mediaAssetsTable.id, req.params.id)).returning();
  if (!row) {
    res.status(404).json({ error: "Not found" });
    return;
  }
  res.status(204).send();
});

export default router;
