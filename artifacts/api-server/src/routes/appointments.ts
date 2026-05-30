import { Router, type IRouter } from "express";
import { db, appointmentsTable, createAppointmentBodySchema } from "@workspace/db";
import { desc } from "drizzle-orm";

const router: IRouter = Router();

router.post("/appointments", async (req, res) => {
  const parsed = createAppointmentBodySchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid request", details: parsed.error.flatten() });
    return;
  }

  const { name, phone, service, date, time, note } = parsed.data;

  const [row] = await db
    .insert(appointmentsTable)
    .values({
      name,
      phone,
      service,
      appointmentDate: date,
      appointmentTime: time,
      note: note ?? null,
    })
    .returning();

  res.status(201).json({ id: row.id, status: row.status });
});

router.get("/appointments", async (_req, res) => {
  const rows = await db
    .select()
    .from(appointmentsTable)
    .orderBy(desc(appointmentsTable.createdAt))
    .limit(100);

  res.json(
    rows.map((row) => ({
      id: row.id,
      name: row.name,
      phone: row.phone,
      service: row.service,
      date: row.appointmentDate,
      time: row.appointmentTime,
      note: row.note,
      status: row.status,
      createdAt: row.createdAt,
    })),
  );
});

export default router;
