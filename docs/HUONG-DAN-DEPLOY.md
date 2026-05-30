# Hướng dẫn: GitHub + Vercel + Supabase

Dự án gồm 3 phần deploy riêng trên Vercel:

| Thành phần | Thư mục gốc (Root Directory) | Mô tả |
|------------|------------------------------|--------|
| Website công khai | `artifacts/nha-khoa-dang-khoa` | Trang nha khoa |
| Admin | `artifacts/admin-panel` | Quản trị |
| API | `artifacts/api-server` | Express + Drizzle → Supabase Postgres |

---

## 1. Supabase (database)

1. Tạo project tại [supabase.com](https://supabase.com).
2. Vào **Project Settings → Database → Connection string**.
3. Chọn **URI** và **Transaction pooler** (port **6543**) — bắt buộc cho Vercel serverless.
4. Copy chuỗi kết nối, thay `[YOUR-PASSWORD]` bằng mật khẩu database.

Tạo bảng trên máy local (một lần):

```bash
cd Dental-Website-Design
cp .env.example .env
# Sửa DATABASE_URL trong .env

pnpm install
pnpm run db:push
```

Kiểm tra bảng `appointments` trong Supabase **Table Editor**.

---

## 2. GitHub

1. Tạo repository mới trên GitHub (ví dụ `nha-khoa-dang-khoa`).
2. Trong thư mục project (có file `pnpm-workspace.yaml`):

```bash
git remote remove gitsafe-backup   # nếu chỉ dùng GitHub
git remote add origin https://github.com/TEN-BAN/nha-khoa-dang-khoa.git
git push -u origin main
```

> **Lưu ý:** Repo thật nằm trong `Dental-Website-Design/Dental-Website-Design` (thư mục có `.git`).

---

## 3. Vercel — API (deploy trước)

1. [vercel.com](https://vercel.com) → **Add New Project** → Import repo GitHub.
2. **Root Directory:** `artifacts/api-server`
3. **Framework Preset:** Other (Vercel tự nhận Express trong `src/app.ts`)
4. **Environment Variables:**

| Biến | Giá trị |
|------|---------|
| `DATABASE_URL` | Connection string Supabase (pooler 6543) |
| `CORS_ORIGIN` | `https://ten-site.vercel.app,https://ten-admin.vercel.app` (cập nhật sau khi có URL) |

5. Deploy → copy URL, ví dụ `https://nha-khoa-api.vercel.app`
6. Thử: `https://nha-khoa-api.vercel.app/api/healthz` → `{"status":"ok"}`

---

## 4. Vercel — Website công khai

1. **Add New Project** (cùng repo, project mới).
2. **Root Directory:** `artifacts/nha-khoa-dang-khoa`
3. **Environment Variables:**

| Biến | Giá trị |
|------|---------|
| `VITE_API_URL` | URL API ở bước 3 (không có `/` cuối) |
| `BASE_PATH` | `/` |
| `PORT` | `3000` |

4. Deploy → SPA routing đã cấu hình trong `vercel.json`.

Form **Đặt lịch** (`/dat-lich`) gửi dữ liệu vào Supabase qua `POST /api/appointments`.

---

## 5. Vercel — Admin (tùy chọn)

1. Project mới, **Root Directory:** `artifacts/admin-panel`
2. Biến `VITE_API_URL` giống website (khi admin gọi API).
3. Thêm URL admin vào `CORS_ORIGIN` trên project API → **Redeploy** API.

---

## 6. Cập nhật CORS sau khi có domain

Trên project **api-server** trong Vercel, sửa `CORS_ORIGIN`:

```
https://your-site.vercel.app,https://your-admin.vercel.app
```

Redeploy API.

---

## Biến môi trường tóm tắt

```env
# Supabase (API)
DATABASE_URL=postgresql://postgres.xxx:password@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres

# API
CORS_ORIGIN=https://site.vercel.app,https://admin.vercel.app

# Website + Admin (build time)
VITE_API_URL=https://api.vercel.app
BASE_PATH=/
PORT=3000
```

---

## Xem lịch hẹn trong Supabase

**Table Editor → appointments** hoặc gọi:

`GET https://your-api.vercel.app/api/appointments`

---

## Sự cố thường gặp

| Vấn đề | Cách xử lý |
|--------|------------|
| API 500 / DB lỗi | Dùng **pooler** port 6543, không dùng direct 5432 trên Vercel |
| Form không gửi được | Kiểm tra `VITE_API_URL` và `CORS_ORIGIN`, redeploy cả site + API |
| Trang 404 khi refresh | Đã có `rewrites` trong `vercel.json` |
| `pnpm install` lỗi trên Windows | Deploy trên Vercel (Linux); local nên dùng WSL hoặc Replit |

---

## Lệnh hữu ích

```bash
pnpm --filter @workspace/nha-khoa-dang-khoa run dev   # website local
pnpm --filter @workspace/api-server run dev           # API local (cần .env)
pnpm run db:push                                      # đồng bộ schema → Supabase
pnpm run typecheck
```
