/** Giờ làm việc — dùng chung website & admin */

export const BRAND_HOURS_SUMMARY =
  "Thứ 2 – Thứ 7: 7:30 – 11:30 | 13:30 – 19:30 | Chủ nhật: 7:30 – 11:30 | 13:30 – 16:45";

export const CONTACT_HOURS = [
  { day: "Thứ 2 – Thứ 7", time: "7:30 – 11:30 | 13:30 – 19:30" },
  { day: "Chủ nhật", time: "7:30 – 11:30 | 13:30 – 16:45" },
] as const;

/** Khung giờ đặt lịch — sáng 7:30–11:30, chiều 13:30–19:30 (CN đến 16:45) */
export const BOOKING_TIME_SLOTS_WEEKDAY = [
  "7:30 – 8:30",
  "8:30 – 9:30",
  "9:30 – 10:30",
  "10:30 – 11:30",
  "13:30 – 14:30",
  "14:30 – 15:30",
  "15:30 – 16:30",
  "16:30 – 17:30",
  "17:30 – 18:30",
  "18:30 – 19:30",
] as const;

export const BOOKING_TIME_SLOTS_SUNDAY = [
  "7:30 – 8:30",
  "8:30 – 9:30",
  "9:30 – 10:30",
  "10:30 – 11:30",
  "13:30 – 14:30",
  "14:30 – 15:30",
  "15:30 – 16:45",
] as const;

export const BOOKING_TIME_SLOTS = [...BOOKING_TIME_SLOTS_WEEKDAY];
