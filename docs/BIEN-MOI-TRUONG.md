# Biến môi trường — Hướng dẫn tạo & nhập

Dự án cần **3 project Vercel** + file `.env` local. Mỗi project chỉ nhận **đúng bộ biến** của nó.

**Website Vercel (đang chạy):** [https://nhakhoadangkhoa.vercel.app](https://nhakhoadangkhoa.vercel.app/)  
**Domain tùy chọn sau:** `https://hethongnhakhoadangkhoa.com` (thêm vào `CORS_ORIGIN` khi trỏ domain)  
**Supabase project:** `hethongnhakhoadangkhoa` (ref: `epsvwnsuirfnwtxloctd`)

> Không ghi mật khẩu vào GitHub. Chỉ nhập trên Vercel và file `.env` trên máy.

---

## Bước 1 — Tạo file `.env` trên máy (local)

```powershell
cd "c:\Users\Admin\Downloads\Dental-Website-Design\Dental-Website-Design"
copy .env.example .env
notepad .env
```

Hoặc:

```powershell
.\scripts\create-env.ps1
```

Sửa trong `.env`:

| Biến | Lấy từ đâu |
|------|------------|
| `DATABASE_URL` | Supabase → **Settings** → **Database** → **Connection string** → **URI** → **Transaction pooler** (port **6543**) |
| `ADMIN_PASSWORD` | Tự đặt (mật khẩu đăng nhập admin) |
| `ADMIN_API_KEY` | Tự tạo chuỗi dài ngẫu nhiên (~32 ký tự) |
| `VITE_API_URL` | Local: `http://localhost:5000` |

Sau đó tạo bảng database:

```powershell
pnpm install
pnpm run db:push
```

---

## Bước 2 — Supabase: `DATABASE_URL`

> **Lưu ý:** `sb_publishable_…`, `anon` JWT, `service_role` JWT **không** thay cho `DATABASE_URL`.  
> Website/API dùng **PostgreSQL** qua `DATABASE_URL`. Mật khẩu domain/admin **không** phải mật khẩu database.

1. Vào [supabase.com](https://supabase.com) → project **hethongnhakhoadangkhoa**
2. **Project Settings** (bánh răng) → **Database**
3. **Reset database password** → đặt mật khẩu mới (ghi nhớ)
4. **Connection string** → tab **URI**
5. Chọn **Transaction pooler** (port **6543**, không dùng Direct trên Vercel)
6. Copy chuỗi, thay `[YOUR-PASSWORD]` bằng mật khẩu vừa reset

Kiểm tra trên máy:

```powershell
node scripts/test-supabase-api.mjs   # API project (200 OK)
node scripts/test-supabase.mjs       # PostgreSQL (phải thấy "Ket noi OK")
```

Nếu `db:push` lỗi trên Windows: chạy SQL trong `docs/supabase-init.sql` tại **SQL Editor** Supabase.

Ví dụ (project ref `epsvwnsuirfnwtxloctd`):

```text
postgresql://postgres.epsvwnsuirfnwtxloctd:MatKhau123@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres
```

---

## Bước 3 — Vercel: mở màn hình nhập biến

Cho **mỗi** project:

1. [vercel.com](https://vercel.com) → chọn project
2. **Settings** → **Environment Variables**
3. **Key** + **Value** → tick **Production** (và **Preview** nếu cần)
4. **Save**
5. **Deployments** → ⋮ → **Redeploy** (bắt buộc sau khi đổi biến)

---

## Bước 4 — Project 1: API

| Cài đặt project | Giá trị |
|-----------------|--------|
| Root Directory | `artifacts/api-server` |

| Biến | Giá trị mẫu |
|------|-------------|
| `DATABASE_URL` | Chuỗi Supabase pooler 6543 (bước 2) |
| `CORS_ORIGIN` | `https://hethongnhakhoadangkhoa.com,https://www.hethongnhakhoadangkhoa.com,https://nhakhoadangkhoa.vercel.app,https://URL-ADMIN.vercel.app` |
| `ADMIN_PASSWORD` | Mật khẩu admin (bạn chọn) |
| `ADMIN_API_KEY` | Chuỗi bí mật dài (ví dụ `dk-admin-xxxxxxxx`) |

**Không** thêm `VITE_*` vào project API.

Sau deploy, kiểm tra: `https://TEN-API.vercel.app/api/healthz` → JSON ok.

Ghi lại URL API, ví dụ: `https://nha-khoa-api.vercel.app`

---

## Bước 5 — Project 2: Website

| Cài đặt project | Giá trị |
|-----------------|--------|
| Root Directory | `artifacts/nha-khoa-dang-khoa` |

| Biến | Giá trị mẫu |
|------|-------------|
| `VITE_API_URL` | (Tùy chọn) URL API bước 4, **không** có `/` cuối. Bỏ trống nếu dùng API nhúng cùng domain |
| `BASE_PATH` | `/` |
| `DATABASE_URL` | **Bắt buộc** nếu không đặt `VITE_API_URL` — website nhúng API serverless, cần kết nối Supabase |
| `SUPABASE_PROJECT_REF` | Thay `DATABASE_URL`: `epsvwnsuirfnwtxloctd` |
| `SUPABASE_DB_PASSWORD` | Thay `DATABASE_URL`: mật khẩu **Database** (Supabase → Settings → Database), **không** phải `ADMIN_PASSWORD` |

Ví dụ (API riêng):

```text
VITE_API_URL=https://nha-khoa-api.vercel.app
```

Ví dụ (API nhúng trên cùng domain — đang dùng trên nhakhoadangkhoa.vercel.app):

```text
DATABASE_URL=postgresql://postgres.epsvwnsuirfnwtxloctd:MAT_KHAU_DATABASE@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres
```

→ **Redeploy** website.

---

## Bước 6 — Project 3: Admin

| Cài đặt project | Giá trị |
|-----------------|--------|
| Root Directory | `artifacts/admin-panel` |

| Biến | Giá trị mẫu |
|------|-------------|
| `VITE_API_URL` | Cùng URL API như website |
| `VITE_WEBSITE_URL` | `https://nhakhoadangkhoa.vercel.app` |

Đăng nhập admin: mật khẩu = `ADMIN_PASSWORD` (trên project API).

→ **Redeploy** admin.

---

## Bảng tóm tắt

| Biến | API | Website | Admin | File `.env` local |
|------|:---:|:-------:|:-----:|:-----------------:|
| `DATABASE_URL` | ✓ | ✓* | | ✓ |
| `SUPABASE_PROJECT_REF` | ✓ | ✓* | | ✓ |
| `SUPABASE_DB_PASSWORD` | ✓ | ✓* | | ✓ |
| `CORS_ORIGIN` | ✓ | | | ✓ |
| `ADMIN_PASSWORD` | ✓ | | | ✓ |
| `ADMIN_API_KEY` | ✓ | | | ✓ |
| `VITE_API_URL` | | ✓ | ✓ | ✓ |
| `VITE_WEBSITE_URL` | | | ✓ | ✓ |
| `BASE_PATH` | | ✓ | | ✓ |
| `PORT` | | | | ✓ (chỉ local API) |

\* Website: chỉ cần `DATABASE_URL` (hoặc `SUPABASE_*`) khi **không** đặt `VITE_API_URL` — API chạy nhúng trong project website (`api/index.mjs`).

---

## Chạy local (tham khảo `.env`)

```powershell
# Terminal 1 — API (port 5000)
pnpm --filter @workspace/api-server run dev

# Terminal 2 — Website (port 5173)
pnpm --filter @workspace/nha-khoa-dang-khoa run dev

# Terminal 3 — Admin (port 5174)
pnpm --filter @workspace/admin-panel run dev
```

Trong `.env` local:

```text
VITE_API_URL=http://localhost:5000
CORS_ORIGIN=http://localhost:5173,http://localhost:5174
```

---

## Lỗi thường gặp

| Lỗi | Cách xử lý |
|-----|------------|
| Admin không đăng nhập được | Kiểm tra `ADMIN_PASSWORD` + `ADMIN_API_KEY` trên **API**, redeploy API |
| Form website không gửi | Mở `/api/healthz/db` trên domain website. Nếu `connectionError`: sửa `DATABASE_URL` hoặc `SUPABASE_DB_PASSWORD` (mật khẩu **Database**, không phải admin) trên **website** (API nhúng) hoặc project API riêng → **Redeploy** |
| CORS error | Thêm URL website + admin vào `CORS_ORIGIN` trên **API**, redeploy API |
| API 500 | Sai `DATABASE_URL` hoặc chưa `pnpm run db:push` |
| Đổi biến không có hiệu lực | **Redeploy** project đó (đặc biệt `VITE_*` chỉ áp dụng lúc build) |

---

## Bảo mật

- Không commit `.env` lên GitHub (đã có trong `.gitignore`)
- Đổi `ADMIN_PASSWORD` và `ADMIN_API_KEY` mạnh trên production
- Nếu lộ token GitHub/Supabase → tạo lại trên dashboard
