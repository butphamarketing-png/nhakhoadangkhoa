-- Chạy trong Supabase → SQL Editor nếu upload ảnh báo lỗi media_assets
CREATE TABLE IF NOT EXISTS media_assets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  filename TEXT NOT NULL,
  alt TEXT NOT NULL DEFAULT '',
  mime_type TEXT NOT NULL,
  size INTEGER NOT NULL DEFAULT 0,
  url TEXT NOT NULL,
  search_text TEXT NOT NULL DEFAULT '',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Kiểm tra: SELECT COUNT(*) FROM media_assets;
