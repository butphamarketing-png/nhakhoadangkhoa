export type FaqItem = { q: string; a: string };
export type FaqCategory = { cat: string; color: string; items: FaqItem[] };

export const DEFAULT_FAQ: FaqCategory[] = [
  {
    cat: "Chung",
    color: "#C89B3C",
    items: [
      {
        q: "Phòng khám Nha Khoa Đăng Khoa ở đâu?",
        a: "Phòng khám tọa lạc tại 345-347 Điện Biên Phủ, Ninh Phước, Tây Ninh. Mở cửa từ thứ 2 đến chủ nhật.",
      },
      {
        q: "Tôi có thể đặt lịch khám như thế nào?",
        a: "Bạn có thể đặt lịch qua website, gọi hotline, nhắn Zalo hoặc Messenger fanpage của chúng tôi.",
      },
      {
        q: "Chi phí khám ban đầu là bao nhiêu?",
        a: "Phí khám và tư vấn ban đầu MIỄN PHÍ. Chúng tôi sẽ thăm khám và tư vấn phác đồ điều trị hoàn toàn không tốn phí.",
      },
      {
        q: "Phòng khám có chụp X-quang không?",
        a: "Có, chúng tôi trang bị máy chụp X-quang kỹ thuật số 2D và máy CT Cone Beam 3D cho chẩn đoán chính xác.",
      },
    ],
  },
  {
    cat: "Implant Nha Khoa",
    color: "#C89B3C",
    items: [
      {
        q: "Cấy implant có đau không?",
        a: "Quá trình cấy implant được thực hiện dưới gây tê cục bộ, bạn sẽ không cảm thấy đau.",
      },
      {
        q: "Implant bao lâu thì xong?",
        a: "Quá trình đặt trụ implant kéo dài 30–60 phút. Toàn bộ quá trình hoàn thiện mất 3–6 tháng.",
      },
    ],
  },
  {
    cat: "Niềng Răng",
    color: "#2563eb",
    items: [
      {
        q: "Niềng răng bao lâu thì ra kết quả?",
        a: "Tùy mức độ lệch lạc, thông thường 12–24 tháng.",
      },
    ],
  },
  {
    cat: "Tẩy Trắng Răng",
    color: "#d97706",
    items: [
      {
        q: "Tẩy trắng răng có hại không?",
        a: "Tẩy trắng đúng kỹ thuật hoàn toàn an toàn.",
      },
    ],
  },
];
