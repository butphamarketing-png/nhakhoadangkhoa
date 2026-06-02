import { jsonb, pgTable, text, timestamp } from "drizzle-orm/pg-core";

/** Nội dung website theo key: pricing | blog | doctors | testimonials | site */
export const siteContentTable = pgTable("site_content", {
  key: text("key").primaryKey(),
  data: jsonb("data").notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

export type SiteContentKey = "pricing" | "blog" | "doctors" | "testimonials" | "site";

export const SITE_CONTENT_KEYS: SiteContentKey[] = [
  "pricing",
  "blog",
  "doctors",
  "testimonials",
  "site",
];
