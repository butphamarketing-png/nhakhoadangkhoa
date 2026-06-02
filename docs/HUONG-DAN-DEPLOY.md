# Hướng dẫn: GitHub → Vercel → Supabase

Repo: **https://github.com/butphamarketing-png/nhakhoadangkhoa**

Website live: **https://nhakhoadangkhoa.vercel.app**

Luồng dữ liệu:

```
Form đặt lịch (Website)  →  API (Vercel)  →  Supabase (PostgreSQL)
```

---

## Phần A — Supabase (database)

### A1. Tạo project

1. Vào [supabase.com](https://supabase.com) → đăng nhập → **New project**
2. Chọn region gần VN (ví dụ **Southeast Asia**)
3. Đặt **Database password** và lưu lại

### A2. Lấy connection string

1. **Project Settings** → **Database** → **Connection string**
2. Tab **URI**, chọn **Transaction pooler**
3. Port phải là **6543** (không dùng Direct 5432 trên Vercel)
4. Copy chuỗi, thay `[YOUR-PASSWORD]` bằng mật khẩu vừa tạo

Ví dụ:

```text
postgresql://postgres.abcdefgh:MatKhauCuaBan@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres
```

### A3. Tạo bảng `appointments` (một lần, trên máy)

```powershell
cd Dental-Website-Design
copy .env.example .env
# Sửa DATABASE_URL trong file .env

pnpm install
pnpm run db:push
```

Kiểm tra: Supabase → **Table Editor** → có bảng **appointments**.

---

## Phần B — GitHub (đã có sẵn)

Code đã nằm tại: `https://github.com/butphamarketing-png/nhakhoadangkhoa`

Push thêm thay đổi:

```powershell
cd Dental-Website-Design
git add -A
git commit -m "Mo ta thay doi"
git push origin main
```

Hoặc chạy `scripts/push-github.ps1` (cần token GitHub tài khoản **butphamarketing-png**).

---

## Phần C — Vercel kết nối GitHub

Làm **một lần** cho mỗi tài khoản Vercel:

1. Vào [vercel.com](https://vercel.com) → đăng nhập
2. **Settings** → **Git** → kết nối tài khoản **GitHub**
3. Cho phép Vercel truy cập organization/user chứa repo `nhakhoadangkhoa`

Sau đó mỗi lần `git push` lên `main`, Vercel tự build lại (nếu bật Auto Deploy).

---

## Phần D — Deploy API lên Vercel (kết nối Supabase)

**Deploy API trước** để có URL cho website.

| Cài đặt | Giá trị |
|---------|---------|
| Import repo | `butphamarketing-png/nhakhoadangkhoa` |
| **Root Directory** | `artifacts/api-server` |
| Framework | Other (tự nhận) |

**Environment Variables** (Production):

| Biến | Giá trị |
|------|---------|
| `DATABASE_URL` | Chuỗi Supabase pooler port **6543** |
| `CORS_ORIGIN` | `https://nhakhoadangkhoa.vercel.app` |

→ **Deploy** → copy URL, ví dụ: `https://nha-khoa-api.vercel.app`

**Kiểm tra:**

- Mở `https://nha-khoa-api.vercel.app/api/healthz` → `{"status":"ok"}`
- Gửi form đặt lịch trên website → Supabase **appointments** có dòng mới

---

## Phần E — Deploy Website lên Vercel

| Cài đặt | Giá trị |
|---------|---------|
| Import repo | Cùng repo GitHub |
| **Root Directory** | `artifacts/nha-khoa-dang-khoa` |
| Framework | Vite |

**Environment Variables:**

| Biến | Giá trị |
|------|---------|
| `VITE_API_URL` | URL API bước D (không `/` cuối), ví dụ `https://nha-khoa-api.vercel.app` |
| `BASE_PATH` | `/` |

→ **Deploy** → https://nhakhoadangkhoa.vercel.app

Nếu đổi domain website, cập nhật lại `CORS_ORIGIN` trên project API và **Redeploy API**.

---

## Phần F — Admin (tùy chọn)

| Root Directory | `artifacts/admin-panel` |
| `VITE_API_URL` | Giống website |

Thêm URL admin vào `CORS_ORIGIN` trên API, ví dụ:

```text
https://nhakhoadangkhoa.vercel.app,https://ten-admin.vercel.app
```

---

## Bảng biến môi trường

| Biến | Đặt ở đâu | Mô tả |
|------|-----------|--------|
| `DATABASE_URL` | Vercel **API** + file `.env` local | Supabase pooler 6543 |
| `CORS_ORIGIN` | Vercel **API** | Domain website (phân tách bằng dấu phẩy) |
| `VITE_API_URL` | Vercel **Website** | URL project API |
| `PORT` | Chỉ local | `5000` khi chạy API trên máy |

**Không** đặt `DATABASE_URL` trên project website — chỉ trên API.

---

## Sự cố

| Vấn đề | Cách xử lý |
|--------|------------|
| API 500 | Kiểm tra `DATABASE_URL`, dùng pooler **6543**, redeploy API |
| Form không gửi được | Kiểm tra `VITE_API_URL` + `CORS_ORIGIN`, redeploy cả 2 project |
| `db:push` lỗi | Sai password hoặc chưa có file `.env` |
| Trang 404 khi F5 | Đã có `rewrites` trong `vercel.json` website |

---

## Lệnh local

```powershell
pnpm --filter @workspace/api-server run dev
pnpm --filter @workspace/nha-khoa-dang-khoa run dev
pnpm run db:push
```

File mẫu biến môi trường: `.env.example` ở thư mục gốc monorepo.
