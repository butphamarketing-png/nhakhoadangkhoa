/** Chuyển lỗi Postgres/Drizzle sang hướng dẫn tiếng Việt */
const SQL_HINT =
  "Vào Supabase → SQL Editor → dán nội dung file docs/fix-media-upload.sql (hoặc docs/supabase-init.sql) → Run.";

export function formatDbError(e: unknown, table?: string): string {
  const msg = e instanceof Error ? e.message : String(e);

  if (/CREATE TABLE IF NOT EXISTS/i.test(msg)) {
    return `Không thể tạo bảng tự động (Supabase pooler). ${SQL_HINT}`;
  }
  if (/relation "media_assets" does not exist/i.test(msg)) {
    return `Bảng media_assets chưa có. ${SQL_HINT}`;
  }
  if (/relation "service_categories" does not exist/i.test(msg)) {
    return `Bảng service_categories chưa có. Chạy docs/supabase-init.sql trên Supabase.`;
  }
  if (/relation "services" does not exist/i.test(msg)) {
    return `Bảng services chưa có. Chạy docs/supabase-init.sql trên Supabase.`;
  }
  if (/Failed query: insert into "media_assets"/i.test(msg)) {
    return `Không lưu được ảnh. ${SQL_HINT}`;
  }
  if (/permission denied|must be owner|42501/i.test(msg)) {
    return `Database không có quyền tạo bảng. ${SQL_HINT}`;
  }
  if (/connect|ECONNREFUSED|timeout|password authentication/i.test(msg)) {
    return "Không kết nối được database. Kiểm tra DATABASE_URL trên Vercel.";
  }
  if (msg.length > 160) {
    return msg.slice(0, 160) + "…";
  }
  return msg;
}
