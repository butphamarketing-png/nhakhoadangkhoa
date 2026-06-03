type ServiceFaqRow = { q: string; a: string };
type ServiceProcessRow = { step: string; title: string; desc: string };

const SITE = "Nha Khoa Đăng Khoa";

export function defaultProcess(title: string): ServiceProcessRow[] {
  return [
    {
      step: "01",
      title: "Thăm khám & tư vấn",
      desc: `Bác sĩ đánh giá tình trạng răng miệng và tư vấn phác đồ ${title.toLowerCase()}.`,
    },
    {
      step: "02",
      title: "Lập kế hoạch",
      desc: "Chụp phim (nếu cần), thống nhất phương án và chi phí minh bạch.",
    },
    {
      step: "03",
      title: "Điều trị",
      desc: "Thực hiện theo quy trình vô trùng, giảm đau tối đa.",
    },
    {
      step: "04",
      title: "Tái khám",
      desc: "Theo dõi kết quả và hướng dẫn chăm sóc tại nhà.",
    },
  ];
}

export function defaultFaq(title: string): ServiceFaqRow[] {
  return [
    {
      q: `${title} có đau không?`,
      a: "Quy trình được gây tê tại chỗ; sau điều trị có thể ê nhẹ và kiểm soát bằng thuốc theo chỉ định bác sĩ.",
    },
    {
      q: "Mất bao lâu?",
      a: "Tùy tình trạng răng miệng; bác sĩ sẽ ước lượng thời gian cụ thể khi thăm khám.",
    },
    {
      q: "Chi phí thế nào?",
      a: "Giá phụ thuộc mức độ điều trị. Xem bảng giá tham khảo hoặc đặt lịch để nhận báo giá chính xác.",
    },
  ];
}

export function defaultBenefits(): string[] {
  return [
    "Tư vấn rõ ràng, minh bạch chi phí",
    "Quy trình vô trùng, an toàn",
    "Theo dõi sau điều trị tận tâm",
  ];
}

export function defaultAudience(title: string, categoryName: string): string[] {
  return [
    `Khách hàng cần ${title.toLowerCase()}`,
    `Người quan tâm sức khỏe răng miệng trong nhóm ${categoryName.toLowerCase()}`,
  ];
}

/** Khung nội dung SEO mẫu — admin chỉ cần chỉnh sửa và xuất bản */
export function buildServiceContentTemplate(serviceName: string, categoryName: string): string {
  const intro = `${serviceName} tại ${SITE} được thực hiện theo quy trình chuẩn y khoa, trang thiết bị hiện đại và đội ngũ bác sĩ giàu kinh nghiệm tại Tây Ninh.`;

  return `<h1>${serviceName}</h1>
<p>${intro}</p>

<h2>${serviceName} là gì?</h2>
<p>${serviceName} là dịch vụ thuộc nhóm <strong>${categoryName}</strong>, giúp cải thiện sức khỏe và thẩm mỹ răng miệng. Tại ${SITE}, chúng tôi đánh giá toàn diện trước khi đề xuất phác đồ phù hợp từng khách hàng.</p>
<img src="/images/cover-clinic.jpg" alt="${serviceName} tại ${SITE}" class="rounded-xl w-full my-6" />

<h2>Đối tượng phù hợp</h2>
<ul>
<li>Khách hàng cần ${serviceName.toLowerCase()}</li>
<li>Người có nhu cầu chăm sóc răng miệng trong nhóm ${categoryName.toLowerCase()}</li>
<li>Khách hàng muốn tư vấn miễn phí trước khi quyết định điều trị</li>
</ul>

<h2>Lợi ích khi thực hiện tại ${SITE}</h2>
<ul>
<li>Tư vấn rõ ràng, minh bạch chi phí</li>
<li>Quy trình vô trùng, an toàn</li>
<li>Theo dõi sau điều trị tận tâm</li>
</ul>

<h2>Quy trình thực hiện</h2>
<ol>
<li><strong>Thăm khám &amp; tư vấn</strong> — Bác sĩ đánh giá và tư vấn phác đồ ${serviceName.toLowerCase()}.</li>
<li><strong>Lập kế hoạch</strong> — Chụp phim (nếu cần), thống nhất phương án và chi phí.</li>
<li><strong>Điều trị</strong> — Thực hiện theo quy trình vô trùng, giảm đau tối đa.</li>
<li><strong>Tái khám</strong> — Theo dõi kết quả và hướng dẫn chăm sóc tại nhà.</li>
</ol>

<h2>Bảng giá tham khảo</h2>
<p>Giá ${serviceName.toLowerCase()} phụ thuộc mức độ điều trị. Vui lòng xem <a href="/bang-gia">bảng giá</a> hoặc <a href="/dat-lich">đặt lịch tư vấn miễn phí</a> để nhận báo giá chính xác.</p>

<h2>Câu hỏi thường gặp</h2>
<p><strong>${serviceName} có đau không?</strong><br/>Quy trình được gây tê tại chỗ; sau điều trị có thể ê nhẹ và kiểm soát bằng thuốc theo chỉ định bác sĩ.</p>
<p><strong>Mất bao lâu?</strong><br/>Tùy tình trạng răng miệng; bác sĩ sẽ ước lượng thời gian cụ thể khi thăm khám.</p>
<p><strong>Chi phí thế nào?</strong><br/>Giá phụ thuộc mức độ điều trị. Đặt lịch để nhận báo giá chính xác sau thăm khám.</p>

<p><a href="/dat-lich" class="inline-flex items-center px-6 py-3 rounded-full bg-[#C89B3C] text-white font-bold">Đặt lịch ${serviceName.toLowerCase()}</a></p>`;
}

export function buildSeedServiceFields(serviceName: string, categoryName: string, categoryImage: string) {
  const excerpt = `Dịch vụ ${serviceName} — tư vấn và điều trị tại ${SITE}, Tây Ninh.`;
  return {
    excerpt,
    thumbnail: categoryImage,
    banner: categoryImage,
    content: buildServiceContentTemplate(serviceName, categoryName),
    faq: defaultFaq(serviceName),
    benefits: defaultBenefits(),
    audience: defaultAudience(serviceName, categoryName),
    process: defaultProcess(serviceName),
    priceNote:
      "Giá tham khảo trên website; báo giá chính xác sau khi thăm khám và chụp phim (nếu cần).",
    focusKeyword: serviceName.toLowerCase(),
  };
}
