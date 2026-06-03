/** Chuyển lỗi Postgres/Drizzle sang hướng dẫn tiếng Việt */
export function formatDbError(e: unknown, table?: string): string {
  const msg = e instanceof Error ? e.message : String(e);
  const tableName = table ?? "database";

  if (/relation "media_assets" does not exist/i.test(msg)) {
    return "Bảng media_assets chưa có. Vào Supabase → SQL Editor → chạy file docs/fix-media-upload.sql rồi thử lại.";
  }
  if (/relation "service_categories" does not exist/i.test(msg)) {
    return "Bảng service_categories chưa có. Chạy docs/supabase-init.sql trên Supabase.";
  }
  if (/relation "services" does not exist/i.test(msg)) {
    return "Bảng services chưa có. Chạy docs/supabase-init.sql trên Supabase.";
  }
  if (/Failed query: insert into "media_assets"/i.test(msg)) {
    return "Không lưu được ảnh (media_assets). Chạy docs/fix-media-upload.sql trên Supabase → SQL Editor.";
  }
  if (/connect|ECONNREFUSED|timeout|password authentication/i.test(msg)) {
    return "Không kết nối được database. Kiểm tra DATABASE_URL trên Vercel.";
  }
  if (msg.length > 200) {
    return `Lỗi ${tableName}: ${msg.slice(0, 120)}…`;
  }
  return msg;
}
