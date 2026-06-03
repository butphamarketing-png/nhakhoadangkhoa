import { Router, type IRouter } from "express";
import { asc, eq } from "drizzle-orm";
import { z } from "zod";
import {
  autoSeoFields,
  buildCatalog,
  db,
  serviceCategoriesTable,
  servicesTable,
  siteContentTable,
  slugify,
} from "@workspace/db";
import { requireAdmin } from "../middleware/require-admin";
import { formatDbError } from "../lib/db-errors";
import { SERVICE_CATALOG_SEED } from "../lib/service-catalog-seed";
import { buildSeedServiceFields } from "../lib/service-content-template";

const router: IRouter = Router();

const faqSchema = z.object({ q: z.string(), a: z.string() });
const processSchema = z.object({ step: z.string(), title: z.string(), desc: z.string() });

const categoryBody = z.object({
  name: z.string().min(1),
  slug: z.string().optional(),
  description: z.string().optional(),
  image: z.string().optional(),
  icon: z.string().optional(),
  status: z.enum(["active", "hidden"]).optional(),
});

const serviceBody = z.object({
  categoryId: z.string().uuid(),
  name: z.string().min(1),
  slug: z.string().optional(),
  excerpt: z.string().optional(),
  thumbnail: z.string().optional(),
  banner: z.string().optional(),
  content: z.string().optional(),
  faq: z.array(faqSchema).optional(),
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional(),
  ogTitle: z.string().optional(),
  ogDescription: z.string().optional(),
  ogImage: z.string().optional(),
  canonicalUrl: z.string().optional(),
  focusKeyword: z.string().optional(),
  secondaryKeywords: z.string().optional(),
  robots: z.string().optional(),
  contentJson: z.unknown().optional(),
  benefits: z.array(z.string()).optional(),
  audience: z.array(z.string()).optional(),
  process: z.array(processSchema).optional(),
  priceNote: z.string().optional(),
  ctaText: z.string().optional(),
  ctaLink: z.string().optional(),
  status: z.enum(["active", "hidden"]).optional(),
});

const reorderSchema = z.object({ ids: z.array(z.string().uuid()) });

async function loadCatalog(includeHidden: boolean) {
  const categories = await db.select().from(serviceCategoriesTable);
  const services = await db.select().from(servicesTable);
  return buildCatalog(categories, services, { includeHidden });
}

async function nextCategorySort() {
  const rows = await db.select({ sortOrder: serviceCategoriesTable.sortOrder }).from(serviceCategoriesTable);
  return rows.length ? Math.max(...rows.map((r) => r.sortOrder)) + 1 : 0;
}

async function nextServiceSort(categoryId: string) {
  const rows = await db
    .select({ sortOrder: servicesTable.sortOrder })
    .from(servicesTable)
    .where(eq(servicesTable.categoryId, categoryId));
  return rows.length ? Math.max(...rows.map((r) => r.sortOrder)) + 1 : 0;
}

// ——— Public ———

router.get("/services/catalog", async (_req, res) => {
  try {
    const catalog = await loadCatalog(false);
    res.json(catalog);
  } catch (e) {
    res.status(500).json({ error: (e as Error).message });
  }
});

router.get("/sitemap.xml", async (_req, res) => {
  try {
    const siteUrl = (process.env.SITE_URL ?? "https://nhakhoadangkhoa.vercel.app").replace(/\/$/, "");
    const catalog = await loadCatalog(false);

    const urls: { loc: string; changefreq: string; priority: string }[] = [
      { loc: `${siteUrl}/`, changefreq: "weekly", priority: "1.0" },
      { loc: `${siteUrl}/dich-vu`, changefreq: "weekly", priority: "0.9" },
      { loc: `${siteUrl}/bang-gia`, changefreq: "monthly", priority: "0.8" },
      { loc: `${siteUrl}/kien-thuc`, changefreq: "weekly", priority: "0.8" },
      { loc: `${siteUrl}/lien-he`, changefreq: "monthly", priority: "0.7" },
    ];

    for (const cat of catalog.categories) {
      urls.push({
        loc: `${siteUrl}/dich-vu/${cat.slug}`,
        changefreq: "weekly",
        priority: "0.85",
      });
      for (const svc of cat.services) {
        urls.push({
          loc: `${siteUrl}/dich-vu/${cat.slug}/${svc.slug}`,
          changefreq: "monthly",
          priority: "0.8",
        });
      }
    }

    const [blogRow] = await db
      .select()
      .from(siteContentTable)
      .where(eq(siteContentTable.key, "blog"))
      .limit(1);
    const posts = (blogRow?.data as { slug?: string; href?: string; status?: string }[]) ?? [];
    for (const p of posts) {
      if (p.status === "draft") continue;
      const href = p.href ?? (p.slug ? `/kien-thuc/${p.slug}` : null);
      if (href) {
        urls.push({ loc: `${siteUrl}${href}`, changefreq: "monthly", priority: "0.7" });
      }
    }

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`;

    res.setHeader("Content-Type", "application/xml");
    res.send(xml);
  } catch (e) {
    res.status(500).json({ error: (e as Error).message });
  }
});

// ——— Admin categories ———

router.get("/admin/service-categories", requireAdmin, async (_req, res) => {
  try {
    const rows = await db
      .select()
      .from(serviceCategoriesTable)
      .orderBy(asc(serviceCategoriesTable.sortOrder));
    res.json(rows);
  } catch (e) {
    res.status(500).json({ error: formatDbError(e, "service_categories") });
  }
});

router.post("/admin/service-categories", requireAdmin, async (req, res) => {
  const parsed = categoryBody.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: parsed.error.message });

  const slug = parsed.data.slug?.trim() || slugify(parsed.data.name);
  const sortOrder = await nextCategorySort();
  const [row] = await db
    .insert(serviceCategoriesTable)
    .values({
      name: parsed.data.name,
      slug,
      description: parsed.data.description ?? "",
      image: parsed.data.image ?? "",
      icon: parsed.data.icon ?? "🦷",
      status: parsed.data.status ?? "active",
      sortOrder,
    })
    .returning();
  res.status(201).json(row);
});

router.patch("/admin/service-categories/:id", requireAdmin, async (req, res): Promise<void> => {
  const parsed = categoryBody.partial().safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const updates: Record<string, unknown> = { updatedAt: new Date() };
  if (parsed.data.name != null) updates.name = parsed.data.name;
  if (parsed.data.slug != null) updates.slug = parsed.data.slug;
  if (parsed.data.description != null) updates.description = parsed.data.description;
  if (parsed.data.image != null) updates.image = parsed.data.image;
  if (parsed.data.icon != null) updates.icon = parsed.data.icon;
  if (parsed.data.status != null) updates.status = parsed.data.status;
  if (parsed.data.name && !parsed.data.slug) updates.slug = slugify(parsed.data.name);

  const [row] = await db
    .update(serviceCategoriesTable)
    .set(updates)
    .where(eq(serviceCategoriesTable.id, req.params.id))
    .returning();
  if (!row) {
    res.status(404).json({ error: "Not found" });
    return;
  }
  res.json(row);
});

router.delete("/admin/service-categories/:id", requireAdmin, async (req, res) => {
  const [row] = await db
    .delete(serviceCategoriesTable)
    .where(eq(serviceCategoriesTable.id, req.params.id))
    .returning();
  if (!row) return res.status(404).json({ error: "Not found" });
  res.status(204).send();
});

router.put("/admin/service-categories/reorder", requireAdmin, async (req, res) => {
  const parsed = reorderSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: parsed.error.message });

  await Promise.all(
    parsed.data.ids.map((id, index) =>
      db
        .update(serviceCategoriesTable)
        .set({ sortOrder: index, updatedAt: new Date() })
        .where(eq(serviceCategoriesTable.id, id)),
    ),
  );
  res.json({ ok: true });
});

// ——— Admin services ———

router.get("/admin/services", requireAdmin, async (req, res) => {
  const categoryId = req.query.categoryId as string | undefined;
  const q = categoryId
    ? db.select().from(servicesTable).where(eq(servicesTable.categoryId, categoryId))
    : db.select().from(servicesTable);
  const rows = await q.orderBy(asc(servicesTable.sortOrder));
  res.json(rows);
});

router.post("/admin/services", requireAdmin, async (req, res) => {
  const parsed = serviceBody.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: parsed.error.message });

  const [cat] = await db
    .select()
    .from(serviceCategoriesTable)
    .where(eq(serviceCategoriesTable.id, parsed.data.categoryId))
    .limit(1);
  if (!cat) return res.status(400).json({ error: "Danh mục không tồn tại" });

  const slug = parsed.data.slug?.trim() || slugify(parsed.data.name);
  const excerpt =
    parsed.data.excerpt ??
    `Dịch vụ ${parsed.data.name} — tư vấn và điều trị tại Nha Khoa Đăng Khoa, Tây Ninh.`;
  const seo = autoSeoFields(parsed.data.name, excerpt, cat.name);
  const sortOrder = await nextServiceSort(parsed.data.categoryId);

  const [row] = await db
    .insert(servicesTable)
    .values({
      categoryId: parsed.data.categoryId,
      name: parsed.data.name,
      slug,
      excerpt,
      thumbnail: parsed.data.thumbnail ?? cat.image,
      banner: parsed.data.banner ?? cat.image,
      content: parsed.data.content ?? `<p>${excerpt}</p>`,
      faq: parsed.data.faq ?? [],
      seoTitle: parsed.data.seoTitle ?? seo.seoTitle,
      seoDescription: parsed.data.seoDescription ?? seo.seoDescription,
      ogTitle: parsed.data.ogTitle ?? seo.ogTitle,
      ogDescription: parsed.data.ogDescription ?? seo.ogDescription,
      ogImage: parsed.data.ogImage ?? parsed.data.banner ?? parsed.data.thumbnail ?? cat.image,
      canonicalUrl: parsed.data.canonicalUrl ?? "",
      focusKeyword: parsed.data.focusKeyword ?? parsed.data.name.toLowerCase(),
      secondaryKeywords: parsed.data.secondaryKeywords ?? "",
      robots: parsed.data.robots ?? "index, follow",
      contentJson: parsed.data.contentJson ?? null,
      benefits: parsed.data.benefits ?? [],
      audience: parsed.data.audience ?? [],
      process: parsed.data.process ?? [],
      priceNote: parsed.data.priceNote ?? "",
      ctaText: parsed.data.ctaText ?? "Đặt lịch khám",
      ctaLink: parsed.data.ctaLink ?? "/dat-lich",
      status: parsed.data.status ?? "active",
      sortOrder,
    })
    .returning();
  res.status(201).json(row);
});

router.patch("/admin/services/:id", requireAdmin, async (req, res) => {
  const parsed = serviceBody.partial().safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: parsed.error.message });

  const updates: Record<string, unknown> = { updatedAt: new Date() };
  const fields = parsed.data;
  if (fields.categoryId != null) updates.categoryId = fields.categoryId;
  if (fields.name != null) {
    updates.name = fields.name;
    if (!fields.slug) updates.slug = slugify(fields.name);
  }
  if (fields.slug != null) updates.slug = fields.slug;
  if (fields.excerpt != null) updates.excerpt = fields.excerpt;
  if (fields.thumbnail != null) updates.thumbnail = fields.thumbnail;
  if (fields.banner != null) updates.banner = fields.banner;
  if (fields.content != null) updates.content = fields.content;
  if (fields.faq != null) updates.faq = fields.faq;
  if (fields.seoTitle != null) updates.seoTitle = fields.seoTitle;
  if (fields.seoDescription != null) updates.seoDescription = fields.seoDescription;
  if (fields.ogTitle != null) updates.ogTitle = fields.ogTitle;
  if (fields.ogDescription != null) updates.ogDescription = fields.ogDescription;
  if (fields.ogImage != null) updates.ogImage = fields.ogImage;
  if (fields.canonicalUrl != null) updates.canonicalUrl = fields.canonicalUrl;
  if (fields.focusKeyword != null) updates.focusKeyword = fields.focusKeyword;
  if (fields.secondaryKeywords != null) updates.secondaryKeywords = fields.secondaryKeywords;
  if (fields.robots != null) updates.robots = fields.robots;
  if (fields.contentJson !== undefined) updates.contentJson = fields.contentJson;
  if (fields.benefits != null) updates.benefits = fields.benefits;
  if (fields.audience != null) updates.audience = fields.audience;
  if (fields.process != null) updates.process = fields.process;
  if (fields.priceNote != null) updates.priceNote = fields.priceNote;
  if (fields.ctaText != null) updates.ctaText = fields.ctaText;
  if (fields.ctaLink != null) updates.ctaLink = fields.ctaLink;
  if (fields.status != null) updates.status = fields.status;

  const [row] = await db
    .update(servicesTable)
    .set(updates)
    .where(eq(servicesTable.id, req.params.id))
    .returning();
  if (!row) return res.status(404).json({ error: "Not found" });
  res.json(row);
});

router.delete("/admin/services/:id", requireAdmin, async (req, res) => {
  const [row] = await db.delete(servicesTable).where(eq(servicesTable.id, req.params.id)).returning();
  if (!row) return res.status(404).json({ error: "Not found" });
  res.status(204).send();
});

router.put("/admin/services/reorder", requireAdmin, async (req, res) => {
  const parsed = reorderSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: parsed.error.message });

  await Promise.all(
    parsed.data.ids.map((id, index) =>
      db
        .update(servicesTable)
        .set({ sortOrder: index, updatedAt: new Date() })
        .where(eq(servicesTable.id, id)),
    ),
  );
  res.json({ ok: true });
});

async function runCatalogSeed() {
  let catOrder = 0;
  for (const seed of SERVICE_CATALOG_SEED) {
    const [cat] = await db
      .insert(serviceCategoriesTable)
      .values({
        name: seed.name,
        slug: seed.slug,
        description: seed.description,
        image: seed.image,
        icon: seed.icon,
        sortOrder: catOrder++,
        status: "active",
      })
      .returning();

    let svcOrder = 0;
    for (const svc of seed.services) {
      const fields = buildSeedServiceFields(svc.name, seed.name, seed.slug, seed.image);
      await db.insert(servicesTable).values({
        categoryId: cat.id,
        name: svc.name,
        slug: slugify(svc.name),
        excerpt: fields.excerpt,
        thumbnail: fields.thumbnail,
        banner: fields.banner,
        content: fields.content,
        faq: fields.faq,
        seoTitle: fields.seoTitle,
        seoDescription: fields.seoDescription,
        ogTitle: fields.ogTitle,
        ogDescription: fields.ogDescription,
        ogImage: seed.image,
        canonicalUrl: "",
        focusKeyword: fields.focusKeyword,
        secondaryKeywords: fields.secondaryKeywords,
        robots: fields.robots,
        benefits: fields.benefits,
        audience: fields.audience,
        process: fields.process,
        priceNote: fields.priceNote,
        ctaText: fields.ctaText,
        ctaLink: fields.ctaLink,
        sortOrder: svcOrder++,
        status: "active",
      });
    }
  }

  return { categories: SERVICE_CATALOG_SEED.length };
}

router.post("/admin/services/seed", requireAdmin, async (req, res) => {
  const force = req.query.force === "true" || req.body?.force === true;
  const existing = await db.select({ id: serviceCategoriesTable.id }).from(serviceCategoriesTable).limit(1);
  if (existing.length && !force) {
    return res.status(409).json({
      error: "Database đã có danh mục. Gửi ?force=true để xóa toàn bộ catalog và import lại mẫu.",
    });
  }

  if (existing.length && force) {
    await db.delete(servicesTable);
    await db.delete(serviceCategoriesTable);
  }

  try {
    const result = await runCatalogSeed();
    res.json({ ok: true, ...result, forced: force });
  } catch (e) {
    res.status(500).json({ error: (e as Error).message });
  }
});

export default router;
