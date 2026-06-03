import { drizzle, type NodePgDatabase } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "./schema";
import { isSupabaseUrl, resolveDatabaseUrl } from "./connection";

const { Pool } = pg;

type DbSchema = typeof schema;
let pool: pg.Pool | null = null;
let dbInstance: NodePgDatabase<DbSchema> | null = null;

function getPool(): pg.Pool {
  if (pool) return pool;

  const connectionString = resolveDatabaseUrl();
  const isSupabase = isSupabaseUrl(connectionString);

  pool = new Pool({
    connectionString,
    max: process.env.VERCEL ? 1 : 10,
    idleTimeoutMillis: process.env.VERCEL ? 5000 : 30000,
    connectionTimeoutMillis: 15000,
    ...(isSupabase ? { ssl: { rejectUnauthorized: false } } : {}),
  });

  return pool;
}

/** Kết nối lazy — healthz vẫn chạy khi chưa có DATABASE_URL lúc import */
export const db = new Proxy({} as NodePgDatabase<DbSchema>, {
  get(_target, prop) {
    if (!dbInstance) {
      dbInstance = drizzle(getPool(), { schema });
    }
    const value = Reflect.get(dbInstance, prop, dbInstance);
    return typeof value === "function" ? value.bind(dbInstance) : value;
  },
});

export { resolveDatabaseUrl, buildSupabasePoolerUrl } from "./connection";

export * from "./schema";
export { slugify } from "./slugify";
export { buildCatalog, autoSeoFields, mapRowToServiceItem } from "./service-catalog-mapper";
export type { ApiServiceCatalog, ApiServiceCategory, ApiServiceItem } from "./service-catalog-mapper";
