import fs from "fs";
import path from "path";

const root = path.resolve("artifacts/nha-khoa-dang-khoa");
const galleryDir = path.join(root, "public/images/gallery");
const videoDir = path.join(root, "public/videos");
const outFile = path.join(root, "src/lib/gallery-media.ts");

const imgs = fs.readdirSync(galleryDir).filter((f) => /\.(jpe?g|png|webp)$/i.test(f)).sort();
const vids = fs.existsSync(videoDir)
  ? fs.readdirSync(videoDir).filter((f) => /\.(mp4|webm|mov)$/i.test(f)).sort()
  : [];

const lines = [
  `export type GalleryImage = { id: string; src: string; alt: string };`,
  `export type GalleryVideo = { id: string; src: string; title: string; poster?: string };`,
  ``,
  `const img = (name: string) => \`/images/gallery/\${name}\`;`,
  `const vid = (name: string) => \`/videos/\${name}\`;`,
  ``,
  `export const GALLERY_IMAGES: GalleryImage[] = [`,
  ...imgs.map((f, i) => `  { id: "img-${i + 1}", src: img(${JSON.stringify(f)}), alt: "Hình ảnh Nha Khoa Đăng Khoa ${i + 1}" },`),
  `];`,
  ``,
  `export const GALLERY_VIDEOS: GalleryVideo[] = [`,
  ...vids.map((f, i) => `  { id: "vid-${i + 1}", src: vid(${JSON.stringify(f)}), title: "Video Nha Khoa Đăng Khoa ${i + 1}" },`),
  `];`,
  ``,
  `export const GALLERY_PAGE_PATH = "/hinh-anh-video";`,
  `export const HOME_GALLERY_IMAGE_PREVIEW_COUNT = 6;`,
  ``,
];

fs.writeFileSync(outFile, lines.join("\n"));
console.log(`Wrote ${imgs.length} images, ${vids.length} videos -> ${outFile}`);
