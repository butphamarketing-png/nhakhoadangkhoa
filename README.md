# Nha Khoa Đăng Khoa — Website

Monorepo: website công khai, admin, API (Express → Supabase PostgreSQL).

- **GitHub:** https://github.com/butphamarketing-png/nhakhoadangkhoa  
- **Website:** https://nhakhoadangkhoa.vercel.app  

## Triển khai (GitHub + Vercel + Supabase)

Hướng dẫn từng bước: **[docs/HUONG-DAN-DEPLOY.md](docs/HUONG-DAN-DEPLOY.md)**

1. Tạo Supabase → `pnpm run db:push` (bảng `appointments`)
2. Push code lên GitHub
3. Vercel: project **API** (`artifacts/api-server`) + biến `DATABASE_URL`
4. Vercel: project **Website** (`artifacts/nha-khoa-dang-khoa`) + biến `VITE_API_URL`

## Dev local

```bash
pnpm install
cp .env.example .env
# Sửa DATABASE_URL trong .env

pnpm run db:push
pnpm --filter @workspace/api-server run dev
pnpm --filter @workspace/nha-khoa-dang-khoa run dev
```
