import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { spawnSync } from "child_process";
import ffmpegPath from "ffmpeg-static";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const videosDir = path.resolve(__dirname, "../../artifacts/nha-khoa-dang-khoa/public/videos");
const files = fs.readdirSync(videosDir).filter((f) => f.endsWith(".mp4") && !f.includes(".tmp."));

function compress(src, dest) {
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

for (const f of files) {
  const src = path.join(videosDir, f);
  const tmp = path.join(videosDir, `${f}.tmp.mp4`);
  const before = (fs.statSync(src).size / 1024 / 1024).toFixed(1);
  console.log(`Compressing ${f} (${before} MB)...`);
  compress(src, tmp);
  fs.renameSync(tmp, src);
  const after = (fs.statSync(src).size / 1024 / 1024).toFixed(2);
  console.log(`Done ${f} (${after} MB)`);
}
