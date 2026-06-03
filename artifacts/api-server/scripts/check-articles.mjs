import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dir = dirname(fileURLToPath(import.meta.url));
const root = join(__dir, "..");

// Dynamic import compiled — use inline minimal check via regex on facts file count
const factsPath = join(root, "src/lib/service-articles/facts-all.ts");
const seedPath = join(root, "src/lib/service-catalog-seed.ts");
const facts = readFileSync(factsPath, "utf8");
const seedSrc = readFileSync(seedPath, "utf8");

const factNames = [...facts.matchAll(/name: "([^"]+)"/g)].map((m) => m[1]);
const seedNames = [...seedSrc.matchAll(/\{ name: "([^"]+)" \}/g)].map((m) => m[1]);

console.log("Facts entries:", factNames.length);
console.log("Seed services:", seedNames.length);

const missing = seedNames.filter((n) => !factNames.includes(n));
if (missing.length) {
  console.error("Thiếu bài:", missing);
  process.exit(1);
}
console.log("OK: đủ 48 bài trong facts-all.ts");
