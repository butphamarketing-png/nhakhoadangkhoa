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

const NOTIFY_EMAIL = "nhakhoadangkhoatn2026@gmail.com";

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

/**
 * Gửi thông báo lịch hẹn / form liên hệ tới Gmail phòng khám qua SMTP.
 * Không làm fail đặt lịch nếu gửi mail lỗi.
 */
export async function notifyNewAppointment(booking: BookingNotifyPayload): Promise<void> {
  const user = process.env.GMAIL_USER?.trim() || NOTIFY_EMAIL;
  const pass = process.env.GMAIL_APP_PASSWORD?.trim();
  const to = process.env.NOTIFY_EMAIL?.trim() || NOTIFY_EMAIL;
  const mail = buildMail(booking);

  if (!pass) {
    console.warn("[notify-booking] Thiếu GMAIL_APP_PASSWORD trên môi trường.");
    return;
  }

  try {
    await sendGmailSmtp({
      user,
      pass,
      to,
      subject: mail.subject,
      text: mail.text,
      html: mail.html,
    });
    console.info(`[notify-booking] Đã gửi Gmail SMTP lịch #${booking.id} tới ${to}`);
  } catch (err) {
    console.error("[notify-booking] Gmail SMTP lỗi:", err);
  }
}
