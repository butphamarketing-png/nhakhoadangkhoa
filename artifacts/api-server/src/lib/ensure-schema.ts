import { sql } from "drizzle-orm";
import { db } from "@workspace/db";

let ready: Promise<void> | null = null;

const STATEMENTS = [
  `CREATE TABLE IF NOT EXISTS appointments (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    service TEXT NOT NULL,
    appointment_date TEXT NOT NULL,
    appointment_time TEXT NOT NULL,
    note TEXT,
    status TEXT NOT NULL DEFAULT 'pending',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
  )`,
  `CREATE TABLE IF NOT EXISTS site_content (
    key TEXT PRIMARY KEY,
    data JSONB NOT NULL,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
  )`,
  `CREATE TABLE IF NOT EXISTS service_categories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    description TEXT NOT NULL DEFAULT '',
    image TEXT NOT NULL DEFAULT '',
    icon TEXT NOT NULL DEFAULT '🦷',
    sort_order INTEGER NOT NULL DEFAULT 0,
    status TEXT NOT NULL DEFAULT 'active',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
  )`,
  `CREATE TABLE IF NOT EXISTS services (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    category_id UUID NOT NULL REFERENCES service_categories(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    slug TEXT NOT NULL,
    excerpt TEXT NOT NULL DEFAULT '',
    thumbnail TEXT NOT NULL DEFAULT '',
    banner TEXT NOT NULL DEFAULT '',
    content TEXT NOT NULL DEFAULT '',
    faq JSONB NOT NULL DEFAULT '[]'::jsonb,
    seo_title TEXT NOT NULL DEFAULT '',
    seo_description TEXT NOT NULL DEFAULT '',
    og_title TEXT NOT NULL DEFAULT '',
    og_description TEXT NOT NULL DEFAULT '',
    og_image TEXT NOT NULL DEFAULT '',
    canonical_url TEXT NOT NULL DEFAULT '',
    focus_keyword TEXT NOT NULL DEFAULT '',
    secondary_keywords TEXT NOT NULL DEFAULT '',
    robots TEXT NOT NULL DEFAULT 'index, follow',
    content_json JSONB,
    benefits JSONB NOT NULL DEFAULT '[]'::jsonb,
    audience JSONB NOT NULL DEFAULT '[]'::jsonb,
    process JSONB NOT NULL DEFAULT '[]'::jsonb,
    price_note TEXT NOT NULL DEFAULT '',
    cta_text TEXT NOT NULL DEFAULT 'Đặt lịch khám',
    cta_link TEXT NOT NULL DEFAULT '/dat-lich',
    sort_order INTEGER NOT NULL DEFAULT 0,
    status TEXT NOT NULL DEFAULT 'active',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
  )`,
  `CREATE UNIQUE INDEX IF NOT EXISTS services_category_slug_idx ON services (category_id, slug)`,
  `CREATE TABLE IF NOT EXISTS media_assets (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    filename TEXT NOT NULL,
    alt TEXT NOT NULL DEFAULT '',
    mime_type TEXT NOT NULL,
    size INTEGER NOT NULL DEFAULT 0,
    url TEXT NOT NULL,
    search_text TEXT NOT NULL DEFAULT '',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
  )`,
];

/** Tự tạo bảng thiếu (Supabase) — gọi trước upload / catalog */
export function ensureDbSchema(): Promise<void> {
  if (!ready) {
    ready = (async () => {
      for (const stmt of STATEMENTS) {
        await db.execute(sql.raw(stmt));
      }
    })().catch((e) => {
      ready = null;
      throw e;
    });
  }
  return ready;
}
