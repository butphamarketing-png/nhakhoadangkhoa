import { sql } from "drizzle-orm";
import {
  integer,
  jsonb,
  pgTable,
  text,
  timestamp,
  uniqueIndex,
  uuid,
} from "drizzle-orm/pg-core";

export type ServiceFaqRow = { q: string; a: string };
export type ServiceProcessRow = { step: string; title: string; desc: string };

export const serviceCategoriesTable = pgTable("service_categories", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description").notNull().default(""),
  image: text("image").notNull().default(""),
  icon: text("icon").notNull().default("🦷"),
  sortOrder: integer("sort_order").notNull().default(0),
  status: text("status").notNull().default("active"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

export const servicesTable = pgTable(
  "services",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    categoryId: uuid("category_id")
      .notNull()
      .references(() => serviceCategoriesTable.id, { onDelete: "cascade" }),
    name: text("name").notNull(),
    slug: text("slug").notNull(),
    excerpt: text("excerpt").notNull().default(""),
    thumbnail: text("thumbnail").notNull().default(""),
    banner: text("banner").notNull().default(""),
    content: text("content").notNull().default(""),
    faq: jsonb("faq").$type<ServiceFaqRow[]>().notNull().default(sql`'[]'::jsonb`),
    seoTitle: text("seo_title").notNull().default(""),
    seoDescription: text("seo_description").notNull().default(""),
    ogTitle: text("og_title").notNull().default(""),
    ogDescription: text("og_description").notNull().default(""),
    ogImage: text("og_image").notNull().default(""),
    canonicalUrl: text("canonical_url").notNull().default(""),
    focusKeyword: text("focus_keyword").notNull().default(""),
    secondaryKeywords: text("secondary_keywords").notNull().default(""),
    robots: text("robots").notNull().default("index, follow"),
    contentJson: jsonb("content_json"),
    benefits: jsonb("benefits").$type<string[]>().notNull().default(sql`'[]'::jsonb`),
    audience: jsonb("audience").$type<string[]>().notNull().default(sql`'[]'::jsonb`),
    process: jsonb("process").$type<ServiceProcessRow[]>().notNull().default(sql`'[]'::jsonb`),
    priceNote: text("price_note").notNull().default(""),
    ctaText: text("cta_text").notNull().default("Đặt lịch khám"),
    ctaLink: text("cta_link").notNull().default("/dat-lich"),
    sortOrder: integer("sort_order").notNull().default(0),
    status: text("status").notNull().default("active"),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (t) => [uniqueIndex("services_category_slug_idx").on(t.categoryId, t.slug)],
);
