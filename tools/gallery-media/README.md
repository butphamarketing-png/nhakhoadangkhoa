# Gallery media prep (local only — not part of pnpm workspace)

Nén ảnh/video trước khi commit lên website. **Không chạy trên Vercel.**

```bash
cd tools/gallery-media
npm install
node prepare.mjs
cd ../..
node scripts/gen-gallery-media.mjs
```

Đặt ảnh gốc vào `artifacts/nha-khoa-dang-khoa/public/Hình`, `Hình 2`, …  
Đặt video gốc vào `artifacts/nha-khoa-dang-khoa/public/Video`.
