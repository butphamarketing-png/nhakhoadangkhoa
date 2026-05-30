import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const appointmentsTable = pgTable("appointments", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  phone: text("phone").notNull(),
  service: text("service").notNull(),
  appointmentDate: text("appointment_date").notNull(),
  appointmentTime: text("appointment_time").notNull(),
  note: text("note"),
  status: text("status").notNull().default("pending"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export const insertAppointmentSchema = createInsertSchema(appointmentsTable).omit(
  {
    id: true,
    status: true,
    createdAt: true,
  },
);

export const createAppointmentBodySchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(9),
  service: z.string().min(1),
  date: z.string().min(1),
  time: z.string().min(1),
  note: z.string().optional(),
});

export type InsertAppointment = z.infer<typeof insertAppointmentSchema>;
export type Appointment = typeof appointmentsTable.$inferSelect;
