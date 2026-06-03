import { integer, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const mediaAssetsTable = pgTable("media_assets", {
  id: uuid("id").primaryKey().defaultRandom(),
  filename: text("filename").notNull(),
  alt: text("alt").notNull().default(""),
  mimeType: text("mime_type").notNull(),
  size: integer("size").notNull().default(0),
  /** Base64 data URL hoặc URL công khai */
  url: text("url").notNull(),
  searchText: text("search_text").notNull().default(""),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});
