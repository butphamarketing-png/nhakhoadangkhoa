import { defineConfig } from "drizzle-kit";
import path from "path";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL, ensure the database is provisioned");
}

export default defineConfig({
  schema: [
    path.join(__dirname, "src/schema/appointments.ts"),
    path.join(__dirname, "src/schema/site-content.ts"),
    path.join(__dirname, "src/schema/service-catalog.ts"),
    path.join(__dirname, "src/schema/media.ts"),
  ],
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});
