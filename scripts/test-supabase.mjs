import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { createRequire } from "node:module";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const require = createRequire(pathToFileURL(path.join(root, "lib", "db", "package.json")));
const pg = require("pg");
const envPath = path.join(root, ".env");

if (!fs.existsSync(envPath)) {
  console.error("LOI: Khong tim thay file .env");
  process.exit(1);
}

for (const line of fs.readFileSync(envPath, "utf8").split("\n")) {
  const m = line.match(/^([^#=]+)=(.*)$/);
  if (m) process.env[m[1].trim()] = m[2].trim();
}

const base = process.env.DATABASE_URL;
if (!base) {
  console.error("LOI: DATABASE_URL trong trong .env");
  process.exit(1);
}

let parsed;
try {
  parsed = new URL(base);
} catch {
  console.error("LOI: DATABASE_URL khong hop le");
  process.exit(1);
}

const ref = "epsvwnsuirfnwtxloctd";
const password = decodeURIComponent(parsed.password);
const encPass = encodeURIComponent(password);

const poolerHost = parsed.hostname || "aws-0-ap-southeast-1.pooler.supabase.com";
const withSsl = (url) =>
  url.includes("uselibpqcompat=")
    ? url
    : `${url}${url.includes("?") ? "&" : "?"}uselibpqcompat=true&sslmode=require`;

const candidates = [
  { label: "Transaction pooler + SSL", url: withSsl(base) },
  { label: "Transaction pooler (ssl object only)", url: base },
  {
    label: "Session pooler :5432",
    url: withSsl(
      `postgresql://postgres.${ref}:${encPass}@${poolerHost.replace(":6543", "")}:5432/postgres`,
    ),
  },
  {
    label: "Direct :5432",
    url: withSsl(`postgresql://postgres:${encPass}@db.${ref}.supabase.co:5432/postgres`),
  },
];

async function tryConnect(label, url) {
  const pool = new pg.Pool({
    connectionString: url,
    ssl: url.includes("supabase") ? { rejectUnauthorized: false } : undefined,
    connectionTimeoutMillis: 15000,
  });
  try {
    await pool.query("SELECT 1 AS ok");
    return { ok: true, pool };
  } catch (e) {
    await pool.end().catch(() => {});
    return { ok: false, error: e.message };
  }
}

let working = null;
for (const c of candidates) {
  const r = await tryConnect(c.label, c.url);
  if (r.ok) {
    console.log("Ket noi OK:", c.label);
    working = { label: c.label, url: c.url, pool: r.pool };
    break;
  }
  console.log("That bai:", c.label, "—", r.error);
}

if (!working) {
  console.error("\nKhong ket noi duoc. Kiem tra mat khau Database trong Supabase (Settings → Database).");
  process.exit(1);
}

if (working.label !== "Transaction pooler :6543") {
  console.log("\nGoi y: cap nhat DATABASE_URL trong .env bang chuoi sau (da test thanh cong):");
  console.log(working.url.replace(password, "***"));
}

const pool = working.pool;
try {
  const tables = await pool.query(
    `SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' ORDER BY 1`,
  );
  const names = tables.rows.map((r) => r.table_name);
  console.log("Bang trong database:", names.length ? names.join(", ") : "(chua co bang)");

  for (const t of ["appointments", "site_content"]) {
    console.log(`  - ${t}:`, names.includes(t) ? "CO" : "CHUA CO (chay pnpm run db:push)");
  }
} finally {
  await pool.end();
}
