import { Router, type IRouter } from "express";
import { db, appointmentsTable, createAppointmentBodySchema } from "@workspace/db";
import { desc, eq } from "drizzle-orm";
import { z } from "zod";
import { requireAdmin } from "../middleware/require-admin";

const router: IRouter = Router();

const statusSchema = z.enum(["pending", "confirmed", "cancelled"]);

router.post("/appointments", async (req, res) => {
  const parsed = createAppointmentBodySchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid request", details: parsed.error.flatten() });
    return;
  }

  const { name, phone, service, date, time, note } = parsed.data;

  try {
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
  } catch (e) {
    console.error("[appointments] POST failed:", e);
    res.status(503).json({ error: "Không lưu được lịch hẹn. Vui lòng gọi hotline." });
  }
});

router.get("/appointments", requireAdmin, async (_req, res) => {
  try {
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
  } catch (e) {
    console.error("[appointments] GET failed:", e);
    res.status(503).json({ error: "Không kết nối được database lịch hẹn." });
  }
});

router.patch("/appointments/:id", requireAdmin, async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isFinite(id)) {
    res.status(400).json({ error: "Invalid id" });
    return;
  }

  const body = z
    .object({
      status: statusSchema.optional(),
      note: z.string().optional(),
      appointmentDate: z.string().optional(),
      appointmentTime: z.string().optional(),
    })
    .safeParse(req.body);

  if (!body.success) {
    res.status(400).json({ error: "Invalid request", details: body.error.flatten() });
    return;
  }

  const updates: Record<string, string> = {};
  if (body.data.status) updates.status = body.data.status;
  if (body.data.note !== undefined) updates.note = body.data.note;
  if (body.data.appointmentDate) updates.appointmentDate = body.data.appointmentDate;
  if (body.data.appointmentTime) updates.appointmentTime = body.data.appointmentTime;

  if (Object.keys(updates).length === 0) {
    res.status(400).json({ error: "No fields to update" });
    return;
  }

  const [row] = await db
    .update(appointmentsTable)
    .set(updates)
    .where(eq(appointmentsTable.id, id))
    .returning();

  if (!row) {
    res.status(404).json({ error: "Not found" });
    return;
  }

  res.json({
    id: row.id,
    name: row.name,
    phone: row.phone,
    service: row.service,
    date: row.appointmentDate,
    time: row.appointmentTime,
    note: row.note,
    status: row.status,
    createdAt: row.createdAt,
  });
});

router.delete("/appointments/:id", requireAdmin, async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isFinite(id)) {
    res.status(400).json({ error: "Invalid id" });
    return;
  }

  const [row] = await db
    .delete(appointmentsTable)
    .where(eq(appointmentsTable.id, id))
    .returning({ id: appointmentsTable.id });

  if (!row) {
    res.status(404).json({ error: "Not found" });
    return;
  }

  res.status(204).end();
});

export default router;
