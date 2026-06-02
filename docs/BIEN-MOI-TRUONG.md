# Biến môi trường — Hướng dẫn tạo & nhập

Dự án cần **3 project Vercel** + file `.env` local. Mỗi project chỉ nhận **đúng bộ biến** của nó.

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

1. Vào [supabase.com](https://supabase.com) → project **hethongnhakhoadangkhoa**
2. **Project Settings** (bánh răng) → **Database**
3. **Connection string** → tab **URI**
4. Chọn **Transaction pooler** (không dùng Direct 5432 trên Vercel)
5. Copy chuỗi, thay `[YOUR-PASSWORD]` bằng mật khẩu database

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
| `CORS_ORIGIN` | `https://nhakhoadangkhoa.vercel.app,https://URL-ADMIN.vercel.app` |
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
| `VITE_API_URL` | URL API bước 4, **không** có `/` cuối |
| `BASE_PATH` | `/` |

Ví dụ:

```text
VITE_API_URL=https://nha-khoa-api.vercel.app
```

**Không** đặt `DATABASE_URL` trên project website.

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
| `DATABASE_URL` | ✓ | | | ✓ |
| `CORS_ORIGIN` | ✓ | | | ✓ |
| `ADMIN_PASSWORD` | ✓ | | | ✓ |
| `ADMIN_API_KEY` | ✓ | | | ✓ |
| `VITE_API_URL` | | ✓ | ✓ | ✓ |
| `VITE_WEBSITE_URL` | | | ✓ | ✓ |
| `BASE_PATH` | | ✓ | | ✓ |
| `PORT` | | | | ✓ (chỉ local API) |

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
| Form website không gửi | `VITE_API_URL` đúng chưa? Redeploy **website** |
| CORS error | Thêm URL website + admin vào `CORS_ORIGIN` trên **API**, redeploy API |
| API 500 | Sai `DATABASE_URL` hoặc chưa `pnpm run db:push` |
| Đổi biến không có hiệu lực | **Redeploy** project đó (đặc biệt `VITE_*` chỉ áp dụng lúc build) |

---

## Bảo mật

- Không commit `.env` lên GitHub (đã có trong `.gitignore`)
- Đổi `ADMIN_PASSWORD` và `ADMIN_API_KEY` mạnh trên production
- Nếu lộ token GitHub/Supabase → tạo lại trên dashboard
