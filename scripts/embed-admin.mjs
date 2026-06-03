import { cpSync, existsSync, rmSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(fileURLToPath(new URL(".", import.meta.url)), "..");
const src = path.join(root, "artifacts", "admin-panel", "dist", "public");
const dest = path.join(root, "artifacts", "nha-khoa-dang-khoa", "dist", "public", "adminbp");

if (!existsSync(src)) {
  console.error("Thiếu build admin:", src);
  process.exit(1);
}

if (existsSync(dest)) rmSync(dest, { recursive: true, force: true });
cpSync(src, dest, { recursive: true });
console.log("Admin panel → /adminbp (", dest, ")");
