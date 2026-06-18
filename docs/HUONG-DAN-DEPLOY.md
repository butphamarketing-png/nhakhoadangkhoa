image.png# Hướng dẫn: GitHub → Vercel → Supabase

Repo: **https://github.com/butphamarketing-png/nhakhoadangkhoa**

Website: **https://hethongnhakhoadangkhoa.com** (Vercel: https://nhakhoadangkhoa.vercel.app)

Luồng dữ liệu:

```
Form đặt lịch (Website)  →  API (Vercel)  →  Supabase (PostgreSQL)
```

---

Hướng dẫn chi tiết từng biến: **[BIEN-MOI-TRUONG.md](BIEN-MOI-TRUONG.md)**

Tạo file local nhanh:

```powershell
copy .env.example .env
# hoac: .\scripts\create-env.ps1
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

Kiểm tra: Supabase → **Table Editor** → có bảng **appointments**, **service_categories**, **services**, **site_content**.

Nếu `db:push` lỗi trên Windows, chạy SQL trong `docs/supabase-init.sql` (Supabase → SQL Editor).

### A4. Catalog dịch vụ (CMS)

1. Deploy **API** + **Admin** (xem Phần D)
2. Admin → **Catalog dịch vụ** → **Import mẫu** (9 danh mục + ~50 dịch vụ)
3. Website có `VITE_API_URL` trỏ API → menu / trang `/dich-vu` tự cập nhật
4. Sitemap: `https://<API_DOMAIN>/api/sitemap.xml` — cập nhật `robots.txt` trên website

Biến API (tùy chọn): `SITE_URL=https://hethongnhakhoadangkhoa.com` để URL sitemap đúng domain.

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
| `DATABASE_URL` | **Bắt buộc nếu bỏ trống `VITE_API_URL`** — website nhúng API, cần Supabase pooler port **6543** |

→ **Deploy** → https://nhakhoadangkhoa.vercel.app

Nếu dùng domain tùy chỉnh, cập nhật `CORS_ORIGIN` trên project API (nếu có API riêng) và **Redeploy**.

---

## Phần F — Admin panel (quản trị website)

| Cài đặt | Giá trị |
|---------|---------|
| Root Directory | `artifacts/admin-panel` |
| `VITE_API_URL` | URL API (giống website) |

**Trên project API**, thêm biến:

| Biến | Mô tả |
|------|--------|
| `ADMIN_PASSWORD` | Mật khẩu đăng nhập admin |
| `ADMIN_API_KEY` | Chuỗi bí mật dài (token sau khi login) |

Thêm URL admin vào `CORS_ORIGIN` trên API:

```text
https://hethongnhakhoadangkhoa.com,https://www.hethongnhakhoadangkhoa.com,https://ten-admin.vercel.app
```

Sau `pnpm run db:push`, chạy lại deploy API.

**Chức năng admin (quản lý đồng bộ toàn website):**

| Mục | Nội dung trên website |
|-----|------------------------|
| **Đồng bộ website** | Import một lần toàn bộ từ code → Supabase |
| **Lịch hẹn** | Form đặt lịch từ khách |
| **Trang chủ** | Banner, thống kê, đội ngũ |
| **Giới thiệu** | Các mục `/gioi-thieu/*` |
| **Dịch vụ** | Menu Header + form chọn dịch vụ |
| **Bảng giá** | Giá từng dòng dịch vụ |
| **Bài viết** | Kiến thức nha khoa |
| **Bác sĩ** | Trang giới thiệu đội ngũ |
| **Khách hàng** | Đánh giá / testimonial |
| **Ưu đãi** | Trang khuyến mãi |
| **Thư viện ảnh** | Banner trang chủ, gallery khách hàng & ưu đãi |
| **Cài đặt** | Hotline, địa chỉ, MXH |

Dashboard hiển thị **trạng thái đồng bộ** từng mục (xanh = đã có trên Supabase) và **badge lịch hẹn chờ duyệt**.

**Lần đầu:** Admin → **Đồng bộ website** → sau đó chỉnh từng mục và **Lưu**.

Chạy local: `pnpm --filter @workspace/admin-panel run dev` (port 5174)

---

## Bảng biến môi trường

| Biến | Đặt ở đâu | Mô tả |
|------|-----------|--------|
| `DATABASE_URL` | Vercel **API** hoặc **Website** (khi API nhúng) + file `.env` local | Supabase pooler 6543 |
| `CORS_ORIGIN` | Vercel **API** | Domain website (phân tách bằng dấu phẩy) |
| `VITE_API_URL` | Vercel **Website** + **Admin** | URL project API |
| `ADMIN_PASSWORD` | Vercel **API** | Mật khẩu login admin |
| `ADMIN_API_KEY` | Vercel **API** | Token Bearer sau login |
| `PORT` | Chỉ local | `5000` khi chạy API trên máy |

**Không** đặt `DATABASE_URL` trên project website **chỉ khi** đã có `VITE_API_URL` trỏ sang project API riêng.

---

## Sự cố

| Vấn đề | Cách xử lý |
|--------|------------|
| API 500 | Kiểm tra `DATABASE_URL`, dùng pooler **6543**, redeploy API |
| Form không gửi được | Mở `https://<domain>/api/healthz/db` — nếu `connectionError`: sửa `SUPABASE_DB_PASSWORD` (mật khẩu Database, **không** phải `ADMIN_PASSWORD`) hoặc `DATABASE_URL` trên Vercel website → Redeploy |
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
