import { drizzle, type NodePgDatabase } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "./schema";

const { Pool } = pg;

type DbSchema = typeof schema;
let pool: pg.Pool | null = null;
let dbInstance: NodePgDatabase<DbSchema> | null = null;

function getPool(): pg.Pool {
  if (pool) return pool;

  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error(
      "DATABASE_URL must be set. Thêm biến môi trường Supabase (pooler port 6543) trên Vercel project API.",
    );
  }

  const isSupabase = connectionString.includes("supabase");
  pool = new Pool({
    connectionString,
    max: process.env.VERCEL ? 1 : 10,
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

export * from "./schema";
