import { execSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(fileURLToPath(new URL(".", import.meta.url)), "..");
const adminDir = path.join(root, "artifacts", "admin-panel");

function resolveViteApiUrl() {
  const fromEnv = process.env.VITE_API_URL?.trim();
  if (fromEnv) return fromEnv.replace(/\/+$/, "");
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return undefined;
}

const viteApiUrl = resolveViteApiUrl();

execSync("pnpm exec vite build --config vite.config.ts", {
  cwd: adminDir,
  env: {
    ...process.env,
    BASE_PATH: "/adminbp/",
    ...(viteApiUrl ? { VITE_API_URL: viteApiUrl } : {}),
  },
  stdio: "inherit",
});
