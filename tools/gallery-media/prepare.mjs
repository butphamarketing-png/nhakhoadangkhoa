/**
 * Import ảnh từ public/Hình* và video từ public/Video → gallery + videos (nén web).
 * Chạy từ tools/gallery-media sau npm install. Sau đó: node scripts/gen-gallery-media.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { spawnSync } from "child_process";
import sharp from "sharp";
import ffmpegPath from "ffmpeg-static";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "../..");
const publicRoot = path.join(repoRoot, "artifacts/nha-khoa-dang-khoa/public");
const galleryDir = path.join(publicRoot, "images/gallery");
const videosDir = path.join(publicRoot, "videos");
const videoSrcDir = path.join(publicRoot, "Video");
const titlesFile = path.join(repoRoot, "scripts/gallery-video-titles.json");

const hinhDirs = fs
  .readdirSync(publicRoot)
  .filter((d) => {
    const full = path.join(publicRoot, d);
    return fs.statSync(full).isDirectory() && /^h/i.test(d) && d !== "images" && d !== "Video";
  })
  .sort();

const VIDEO_MAP = [
  { src: "1.mp4", out: "video-hoat-dong-1.mp4", title: "Hoạt động Nha Khoa Đăng Khoa" },
  { src: "WTMM.mp4", out: "video-dang-khoa-wtmm.mp4", title: "Đăng Khoa WTMM" },
  { src: "Video.mp4", out: "video-phong-kham.mp4", title: "Không gian phòng khám" },
];

async function compressImage(src, dest) {
  await sharp(src)
    .rotate()
    .resize({ width: 1920, height: 1920, fit: "inside", withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(dest);
}

function compressVideo(src, dest) {
  const r = spawnSync(
    ffmpegPath,
    [
      "-y",
      "-i",
      src,
      "-vf",
      "scale='min(1280,iw)':-2",
      "-c:v",
      "libx264",
      "-crf",
      "28",
      "-preset",
      "fast",
      "-c:a",
      "aac",
      "-b:a",
      "128k",
      "-movflags",
      "+faststart",
      dest,
    ],
    { stdio: "inherit" },
  );
  if (r.status !== 0) throw new Error(`ffmpeg failed: ${src}`);
}

async function main() {
  fs.mkdirSync(galleryDir, { recursive: true });
  fs.mkdirSync(videosDir, { recursive: true });

  for (const hinhPath of hinhDirs) {
    const dir = path.join(publicRoot, hinhPath);
    const files = fs.readdirSync(dir).filter((f) => /\.(jpe?g|png|webp)$/i.test(f));
    console.log(`Processing ${files.length} images from ${hinhPath}...`);
    for (const f of files) {
      const base = f.replace(/\.(png|webp|jpe?g)$/i, "");
      const dest = path.join(galleryDir, `${base}.jpg`);
      if (fs.existsSync(dest)) {
        console.log(`  skip: ${path.basename(dest)}`);
        continue;
      }
      await compressImage(path.join(dir, f), dest);
      console.log(`  + ${path.basename(dest)} (${(fs.statSync(dest).size / 1024 / 1024).toFixed(2)} MB)`);
    }
  }

  if (fs.existsSync(videoSrcDir)) {
    console.log("Processing videos...");
    const srcFiles = fs.readdirSync(videoSrcDir);
    for (const { src, out, title } of VIDEO_MAP) {
      const match =
        srcFiles.find((f) => f.toLowerCase() === src.toLowerCase()) ??
        srcFiles.find((f) =>
          f.replace(/\s+/g, " ").toLowerCase().includes(src.replace(".mp4", "").toLowerCase()),
        );
      if (!match) {
        console.log(`  skip missing: ${src}`);
        continue;
      }
      const input = path.join(videoSrcDir, match);
      const dest = path.join(videosDir, out);
      if (fs.existsSync(dest)) {
        console.log(`  skip exists: ${out}`);
        continue;
      }
      console.log(`  ${match} (${(fs.statSync(input).size / 1024 / 1024).toFixed(1)} MB) → ${out}`);
      compressVideo(input, dest);
      console.log(`  done: ${title} (${(fs.statSync(dest).size / 1024 / 1024).toFixed(2)} MB)`);
    }
  }

  const titles = {};
  for (const f of fs.readdirSync(videosDir).filter((x) => /\.(mp4|webm|mov)$/i.test(x))) {
    const mapped = VIDEO_MAP.find((v) => v.out === f);
    titles[f] = mapped?.title ?? (f.startsWith("1781808751116") ? "Video phòng khám" : f);
  }
  fs.writeFileSync(titlesFile, JSON.stringify(titles, null, 2));
  console.log("Done. Run: node scripts/gen-gallery-media.mjs");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
