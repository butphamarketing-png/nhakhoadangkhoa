import { jsonb, pgTable, text, timestamp } from "drizzle-orm/pg-core";

/** Nội dung website — mỗi key một JSON trong Supabase */
export const SITE_CONTENT_KEYS = [
  "site",
  "pricing",
  "blog",
  "doctors",
  "testimonials",
  "services",
  "service_menu",
  "about",
  "promotions",
  "home",
  "media",
  "faq",
  "careers",
  "policies",
] as const;

export type SiteContentKey = (typeof SITE_CONTENT_KEYS)[number];

export const siteContentTable = pgTable("site_content", {
  key: text("key").primaryKey(),
  data: jsonb("data").notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});
