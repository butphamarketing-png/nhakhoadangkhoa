import type { ServiceFaq, ServiceItem, ServiceProcessStep } from "./types";

export function defaultProcess(title: string): ServiceProcessStep[] {
  return [
    { step: "01", title: "Thăm khám & tư vấn", desc: `Bác sĩ đánh giá tình trạng răng miệng và tư vấn phác đồ ${title.toLowerCase()}.` },
    { step: "02", title: "Lập kế hoạch", desc: "Chụp phim (nếu cần), thống nhất phương án và chi phí minh bạch." },
    { step: "03", title: "Điều trị", desc: "Thực hiện theo quy trình vô trùng, giảm đau tối đa." },
    { step: "04", title: "Tái khám", desc: "Theo dõi kết quả và hướng dẫn chăm sóc tại nhà." },
  ];
}

export function defaultFaq(title: string): ServiceFaq[] {
  return [
    { q: `${title} có đau không?`, a: "Quy trình được gây tê tại chỗ; sau điều trị có thể ê nhẹ và kiểm soát bằng thuốc theo chỉ định bác sĩ." },
    { q: "Mất bao lâu?", a: "Tùy tình trạng răng miệng; bác sĩ sẽ ước lượng thời gian cụ thể khi thăm khám." },
    { q: "Chi phí thế nào?", a: "Giá phụ thuộc mức độ điều trị. Xem bảng giá tham khảo hoặc đặt lịch để nhận báo giá chính xác." },
  ];
}

export function enrichServiceItem(
  item: ServiceItem,
  categoryTitle: string,
  categoryImage?: string,
): ServiceItem {
  if (item.content && item.content.replace(/<[^>]+>/g, "").trim().length > 20) {
    return {
      ...item,
      image: item.image ?? item.banner ?? item.thumbnail ?? categoryImage,
      intro: item.intro ?? item.shortDesc,
    };
  }

  const intro =
    item.intro ??
    `${item.title} tại Nha Khoa Đăng Khoa được thực hiện theo quy trình chuẩn y khoa, trang thiết bị hiện đại và đội ngũ bác sĩ chuyên môn cao. ${item.shortDesc}`;

  return {
    ...item,
    image: item.image ?? categoryImage,
    intro,
    benefits:
      item.benefits ??
      [
        "Tư vấn rõ ràng, minh bạch chi phí",
        "Quy trình vô trùng, an toàn",
        "Theo dõi sau điều trị tận tâm",
      ],
    audience:
      item.audience ??
      [
        `Khách hàng cần ${item.title.toLowerCase()}`,
        `Người quan tâm sức khỏe răng miệng trong nhóm ${categoryTitle.toLowerCase()}`,
      ],
    process: item.process ?? defaultProcess(item.title),
    priceNote:
      item.priceNote ??
      "Giá tham khảo trên website; báo giá chính xác sau khi thăm khám và chụp phim (nếu cần).",
    faq: item.faq ?? defaultFaq(item.title),
  };
}
