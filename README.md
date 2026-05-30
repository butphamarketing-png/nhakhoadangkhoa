# Nha Khoa Đăng Khoa — Website

Monorepo: website công khai, admin, API (Express + Drizzle + PostgreSQL/Supabase).

## Deploy (GitHub + Vercel + Supabase)

Xem hướng dẫn chi tiết: **[docs/HUONG-DAN-DEPLOY.md](docs/HUONG-DAN-DEPLOY.md)**

Tóm tắt:

1. Tạo database Supabase → `pnpm run db:push`
2. Push code lên GitHub
3. Vercel: 3 project (`artifacts/api-server`, `nha-khoa-dang-khoa`, `admin-panel`)
4. Gắn `DATABASE_URL`, `VITE_API_URL`, `CORS_ORIGIN`

## Dev local

```bash
pnpm install
cp .env.example .env
pnpm run db:push
pnpm --filter @workspace/api-server run dev
pnpm --filter @workspace/nha-khoa-dang-khoa run dev
```
