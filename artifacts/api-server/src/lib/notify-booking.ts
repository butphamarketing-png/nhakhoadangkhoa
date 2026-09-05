import { sendGmailSmtp } from "./send-gmail-smtp";

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

function buildMail(booking: BookingNotifyPayload): { subject: string; text: string; html: string } {
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

  return { subject, text, html };
}

function notifyTo(): string {
  return process.env.NOTIFY_EMAIL?.trim() || PRIMARY_NOTIFY_EMAIL;
}

async function sendViaGmail(booking: BookingNotifyPayload, mail: ReturnType<typeof buildMail>): Promise<boolean> {
  const user = process.env.GMAIL_USER?.trim();
  const pass = process.env.GMAIL_APP_PASSWORD?.trim();
  if (!user || !pass) return false;

  await sendGmailSmtp({
    user,
    pass,
    to: notifyTo(),
    subject: mail.subject,
    text: mail.text,
    html: mail.html,
  });
  console.info(`[notify-booking] Đã gửi Gmail SMTP lịch #${booking.id} tới ${notifyTo()}`);
  return true;
}

async function sendViaResend(booking: BookingNotifyPayload, mail: ReturnType<typeof buildMail>): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) return false;

  const from =
    process.env.MAIL_FROM?.trim() || "Nha khoa Đăng Khoa <onboarding@resend.dev>";
  const to = notifyTo();

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject: mail.subject,
      text: mail.text,
      html: mail.html,
    }),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    console.error(`[notify-booking] Resend lỗi ${res.status} tới ${to}: ${body}`);
    return false;
  }

  console.info(`[notify-booking] Đã gửi Resend lịch #${booking.id} tới ${to}`);
  return true;
}

/**
 * Gửi thông báo lịch hẹn mới tới Gmail.
 * Ưu tiên Gmail SMTP (App Password); Resend chỉ là dự phòng.
 * Không làm fail đặt lịch nếu gửi mail lỗi / chưa cấu hình.
 */
export async function notifyNewAppointment(booking: BookingNotifyPayload): Promise<void> {
  const mail = buildMail(booking);

  try {
    if (await sendViaGmail(booking, mail)) return;
  } catch (err) {
    console.error("[notify-booking] Gmail SMTP lỗi:", err);
  }

  try {
    if (await sendViaResend(booking, mail)) return;
  } catch (err) {
    console.error("[notify-booking] Resend lỗi:", err);
  }

  console.warn("[notify-booking] Không gửi được email thông báo lịch hẹn.");
}
