export type BookingNotifyPayload = {
  id: number;
  name: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  note: string | null;
};

function escapeHtml(text: string): string {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

const PRIMARY_NOTIFY_EMAIL = "nhakhoadangkhoatn2026@gmail.com";
const RESEND_ACCOUNT_EMAIL = "nhakhoadangkhoa2026@gmail.com";

/**
 * Gửi thông báo lịch hẹn mới tới Gmail (qua Resend).
 * Không làm fail đặt lịch nếu gửi mail lỗi / chưa cấu hình.
 */
export async function notifyNewAppointment(booking: BookingNotifyPayload): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    console.warn("[notify-booking] Bỏ qua gửi email: thiếu RESEND_API_KEY trên môi trường.");
    return;
  }

  const from =
    process.env.MAIL_FROM?.trim() || "Nha khoa Đăng Khoa <onboarding@resend.dev>";

  const subject = `Lịch hẹn mới #${booking.id}: ${booking.name} — ${booking.phone}`;

  const noteLine = booking.note?.trim() ? booking.note.trim() : "(Không có)";
  const text = [
    "Có khách đặt lịch mới trên website.",
    "",
    `Mã: #${booking.id}`,
    `Họ tên: ${booking.name}`,
    `Điện thoại: ${booking.phone}`,
    `Dịch vụ: ${booking.service}`,
    `Ngày: ${booking.date}`,
    `Giờ: ${booking.time}`,
    `Ghi chú: ${noteLine}`,
    "",
    "Vào Admin → Lịch hẹn để xác nhận hoặc liên hệ khách.",
  ].join("\n");

  const html = `
    <div style="font-family:sans-serif;line-height:1.5;color:#222">
      <h2 style="margin:0 0 12px">Có khách đặt lịch mới</h2>
      <table style="border-collapse:collapse;width:100%;max-width:480px">
        <tr><td style="padding:6px 0;color:#666">Mã</td><td style="padding:6px 0"><strong>#${booking.id}</strong></td></tr>
        <tr><td style="padding:6px 0;color:#666">Họ tên</td><td style="padding:6px 0"><strong>${escapeHtml(booking.name)}</strong></td></tr>
        <tr><td style="padding:6px 0;color:#666">Điện thoại</td><td style="padding:6px 0"><a href="tel:${escapeHtml(booking.phone)}">${escapeHtml(booking.phone)}</a></td></tr>
        <tr><td style="padding:6px 0;color:#666">Dịch vụ</td><td style="padding:6px 0">${escapeHtml(booking.service)}</td></tr>
        <tr><td style="padding:6px 0;color:#666">Ngày</td><td style="padding:6px 0">${escapeHtml(booking.date)}</td></tr>
        <tr><td style="padding:6px 0;color:#666">Giờ</td><td style="padding:6px 0">${escapeHtml(booking.time)}</td></tr>
        <tr><td style="padding:6px 0;color:#666">Ghi chú</td><td style="padding:6px 0">${escapeHtml(noteLine)}</td></tr>
      </table>
      <p style="margin:16px 0 0;color:#666;font-size:14px">Vào Admin → Lịch hẹn để xác nhận hoặc gọi khách.</p>
    </div>
  `;

  const recipients = uniqueEmails(
    process.env.NOTIFY_EMAIL,
    PRIMARY_NOTIFY_EMAIL,
    RESEND_ACCOUNT_EMAIL,
  );

  for (const to of recipients) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject,
        text,
        html,
      }),
    });

    if (!res.ok) {
      const body = await res.text().catch(() => "");
      console.error(`[notify-booking] Resend lỗi ${res.status} tới ${to}: ${body}`);
      continue;
    }

    console.info(`[notify-booking] Đã gửi email lịch #${booking.id} tới ${to}`);
  }
}

function uniqueEmails(...values: Array<string | undefined>): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const value of values) {
    const email = value?.trim().toLowerCase();
    if (!email || seen.has(email)) continue;
    seen.add(email);
    out.push(email);
  }
  return out;
}
