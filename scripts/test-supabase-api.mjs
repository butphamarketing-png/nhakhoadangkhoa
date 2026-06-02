import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const envPath = path.join(root, ".env");

for (const line of fs.readFileSync(envPath, "utf8").split("\n")) {
  const m = line.match(/^([^#=]+)=(.*)$/);
  if (m) process.env[m[1].trim()] = m[2].trim();
}

const url = process.env.SUPABASE_URL?.replace(/\/$/, "");
const keys = [
  ["SUPABASE_ANON_KEY (JWT)", process.env.SUPABASE_ANON_KEY],
  ["SUPABASE_PUBLISHABLE_KEY", process.env.SUPABASE_PUBLISHABLE_KEY],
].filter(([, v]) => v);

if (!url || keys.length === 0) {
  console.log("Them vao .env: SUPABASE_URL, SUPABASE_ANON_KEY hoac SUPABASE_PUBLISHABLE_KEY");
  process.exit(1);
}

for (const [label, key] of keys) {
  const res = await fetch(`${url}/auth/v1/health`, {
    headers: { apikey: key, Authorization: `Bearer ${key}` },
  });
  console.log(`${label}:`, res.status, res.statusText);
  if (!res.ok) {
    console.log(" ", (await res.text()).slice(0, 120));
  }
}
