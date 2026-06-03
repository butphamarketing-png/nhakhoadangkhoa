export type JobListing = {
  title: string;
  dept: string;
  type: string;
  level: string;
  color: string;
};

export type JobBenefit = { title: string; desc: string };

export type CareersCms = {
  jobs: JobListing[];
  benefits: JobBenefit[];
  intro: string;
};

export const DEFAULT_CAREERS: CareersCms = {
  intro:
    "Gia nhập đội ngũ Nha Khoa Đăng Khoa — môi trường chuyên nghiệp, cơ hội phát triển nghề nghiệp bền vững.",
  jobs: [
    { title: "Bác sĩ Răng Hàm Mặt", dept: "Chuyên môn", type: "Toàn thời gian", level: "Senior", color: "#C89B3C" },
    { title: "Bác sĩ Chỉnh Nha", dept: "Chỉnh nha", type: "Toàn thời gian", level: "Mid-Senior", color: "#2563eb" },
    { title: "Kỹ thuật viên Nha khoa", dept: "Lab", type: "Toàn thời gian", level: "Junior-Mid", color: "#059669" },
    { title: "Điều dưỡng Nha khoa", dept: "Điều dưỡng", type: "Toàn thời gian", level: "Junior", color: "#7c3aed" },
    { title: "Nhân viên Tư vấn", dept: "Marketing", type: "Toàn thời gian", level: "Junior-Mid", color: "#dc2626" },
    { title: "Lễ tân – Hành chính", dept: "Admin", type: "Toàn thời gian / Bán thời gian", level: "Junior", color: "#d97706" },
  ],
  benefits: [
    { title: "Lương cạnh tranh", desc: "Mức lương hấp dẫn, thưởng theo hiệu quả công việc và doanh số." },
    { title: "Phúc lợi đầy đủ", desc: "BHXH, BHYT, BHTN đầy đủ theo quy định. Thưởng lễ, Tết, sinh nhật." },
    { title: "Môi trường chuyên nghiệp", desc: "Đồng nghiệp tận tâm, văn hóa làm việc tích cực, năng động." },
    { title: "Đào tạo & phát triển", desc: "Hỗ trợ đào tạo chuyên môn, tham dự hội nghị trong và ngoài nước." },
  ],
};
