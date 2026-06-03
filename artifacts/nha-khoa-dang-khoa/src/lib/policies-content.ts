export type PolicyPage = { slug: string; title: string; body: string };

export const DEFAULT_POLICIES: PolicyPage[] = [
  {
    slug: "chinh-sach-bao-hanh",
    title: "Chính sách bảo hành",
    body: `Tại Hệ Thống Nha Khoa Đăng Khoa, chúng tôi cam kết đảm bảo quyền lợi tốt nhất cho khách hàng.

## 1. Cam kết của chúng tôi
Nha Khoa Đăng Khoa đảm bảo tất cả dịch vụ được thực hiện theo quy trình chuẩn y khoa, sử dụng vật liệu chính hãng và thiết bị hiện đại nhất.

## 2. Thời hạn bảo hành
Thời hạn bảo hành tùy theo loại dịch vụ và vật liệu sử dụng. Chi tiết được ghi rõ trên phiếu bảo hành khi hoàn tất điều trị.

## 3. Liên hệ
Mọi thắc mắc về bảo hành, vui lòng liên hệ hotline hoặc đến trực tiếp phòng khám.`,
  },
  {
    slug: "chinh-sach-thanh-toan",
    title: "Chính sách thanh toán",
    body: `Chúng tôi chấp nhận thanh toán tiền mặt, chuyển khoản và thẻ. Chi phí được báo giá minh bạch trước khi điều trị.`,
  },
  {
    slug: "dieu-khoan",
    title: "Điều khoản sử dụng",
    body: `Khi sử dụng website và dịch vụ của Nha Khoa Đăng Khoa, bạn đồng ý với các điều khoản về đặt lịch, bảo mật thông tin và quyền riêng tư.`,
  },
  {
    slug: "bao-mat",
    title: "Chính sách bảo mật",
    body: `Thông tin cá nhân của khách hàng được bảo mật theo quy định pháp luật. Chúng tôi không chia sẻ dữ liệu cho bên thứ ba khi chưa có sự đồng ý.`,
  },
];

export function getPolicyBySlug(slug: string): PolicyPage | undefined {
  return DEFAULT_POLICIES.find((p) => p.slug === slug);
}
