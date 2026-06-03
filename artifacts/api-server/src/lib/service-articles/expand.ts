import type { ServiceArticleSpec, ServiceFaqRow, ServiceProcessRow } from "./types";

const SITE = "Nha Khoa Đăng Khoa";
const CITY = "Tây Ninh";

export type ArticleFacts = {
  name: string;
  categoryName: string;
  focusKeyword: string;
  /** 1–2 câu định nghĩa chuyên môn */
  definition: string;
  /** Ai nên làm, triệu chứng, tình huống */
  indications: string;
  /** Mô tả kỹ thuật / vật liệu / thiết bị */
  technique: string;
  /** Thời gian, số buổi */
  timeline: string;
  /** Đau / ê / gây tê */
  comfort: string;
  /** Lưu ý sau điều trị */
  aftercare: string;
  /** Yếu tố chi phí */
  pricing: string;
  /** Điểm khác tại Đăng Khoa */
  clinicEdge: string;
  benefits: string[];
  audienceList: string[];
  steps: { title: string; desc: string }[];
  faq: ServiceFaqRow[];
};

function paras(...chunks: string[]): string[] {
  return chunks.filter(Boolean);
}

export function expandArticle(f: ArticleFacts): ServiceArticleSpec {
  const n = f.name;
  const lower = n.toLowerCase();
  const cat = f.categoryName;

  const intro = paras(
    `${n} tại ${SITE} (${CITY}) được triển khai bởi đội ngũ bác sĩ Răng Hàm Mặt, thuộc nhóm dịch vụ ${cat}. ${f.definition} Khách hàng đến với mong muốn xử lý đúng nguyên nhân, hạn chế tái phát và duy trì sức khỏe răng miệng lâu dài thay vì chỉ xử lý triệu chứng tạm thời.`,
    `Trước khi bắt đầu, bạn được tư vấn miễn phí về chỉ định, lộ trình và chi phí dự kiến. ${f.clinicEdge} Chúng tôi ưu tiên giải thích bằng ngôn ngữ dễ hiểu, không ép buộc lựa chọn điều trị, và lưu hồ sơ điện tử để tái khám thuận tiện.`,
  );

  const whatIs = paras(
    `${n} là gì? ${f.definition} Trong phạm vi ${cat.toLowerCase()}, đây là hạng mục được chỉ định khi ${f.indications}`,
    `Kỹ thuật và thiết bị: ${f.technique} Thời gian thực hiện tham khảo: ${f.timeline}. Mức độ ê hoặc đau: ${f.comfort}`,
    `Sau điều trị, ${f.aftercare} Việc tuân thủ hướng dẫn tại nhà và tái khám đúng hạn quyết định độ bền kết quả — đặc biệt với các ca phức tạp hoặc khách hàng có bệnh nền cần theo dõi thêm.`,
    `Nhiều khách hàng tại ${CITY} so sánh ${lower} giữa các phòng khám dựa trên giá; tuy nhiên, yếu tố quan trọng còn là chỉ định đúng, vật liệu chính hãng, quy trình vô trùng và kinh nghiệm bác sĩ. ${SITE} cam kết minh bạch: ${f.pricing}`,
  );

  const audience = paras(
    `Đối tượng phù hợp: ${f.indications} Ngoài ra, người muốn chủ động phòng ngừa trong nhóm ${cat.toLowerCase()} cũng nên thăm khám định kỳ để phát hiện sớm.`,
    `Chống chỉ định hoặc cần thận trọng sẽ được bác sĩ thông báo sau khi khai thác tiền sử (dị ứng thuốc, bệnh tim mạch, tiểu đường, mang thai…). Hãy mang phim X-quang, đơn thuốc đang dùng và kết quả điều trị cũ (nếu có) để rút ngắn thời gian chẩn đoán.`,
  );

  const benefitsProse = paras(
    `Lợi ích cụ thể của ${lower}: ${f.benefits.join("; ")}. Khi được thực hiện đúng phác đồ, bạn giảm nguy cơ biến chứng và tiết kiệm chi phí so với để tình trạng kéo dài.`,
    `${f.clinicEdge} Đội ngũ theo dõi sau điều trị, nhắc lịch tái khám và hỗ trợ tư vấn qua hotline trong giờ hành chính — phù hợp khách hàng bận rộn tại ${CITY} và vùng lân cận.`,
  );

  const processProse = paras(
    `Quy trình ${lower} tại ${SITE} tuân thủ chuẩn y khoa, gồm các bước chính đã thống nhất với bạn trước khi bắt đầu. Mỗi bước đều có mục tiêu rõ ràng: an toàn, giảm đau và đạt kết quả ổn định.`,
    `Chi tiết từng bước được trình bày ở khối “Quy trình điều trị” trên trang này. ${f.timeline} Nếu cần chuyển chuyên khoa phụ trợ (ví dụ: chỉnh nha, implant, nội nha), bác sĩ sẽ phối hợp nội bộ thay vì yêu cầu bạn tự tìm nơi khác.`,
  );

  const whyChoose = paras(
    `${SITE} tại ${CITY} hướng tới mô hình nha khoa toàn diện: trang thiết bị hiện đại, quy trình vô trùng và bác sĩ có kinh nghiệm lâm sàng. Với ${n}, ${f.clinicEdge}`,
    `Chúng tôi đầu tư trải nghiệm khách hàng: thời gian tư vấn đủ dài, không gian sạch sẽ, lịch hẹn linh hoạt. Phản hồi sau điều trị được ghi nhận để cải thiện dịch vụ — minh bạch là giá trị cốt lõi khi bạn giao phó sức khỏe răng miệng.`,
    `Về chi phí: ${f.pricing} Bạn có thể tham khảo bảng giá trên website và đặt lịch để nhận báo giá chính xác sau thăm khám — không phát sinh bất ngờ khi đã thống nhất phác đồ.`,
    `Đội ngũ ${SITE} thường xuyên cập nhật guideline điều trị trong nước và quốc tế cho nhóm ${cat.toLowerCase()}. Bạn được giải thích rõ ràng lý do chọn vật liệu, số buổi và kết quả mong đợi — tránh tâm lý “điều trị mà không hiểu vì sao”.`,
    `Nếu bạn đang cân nhắc ${lower} tại ${CITY}, hãy bắt đầu bằng một buổi khám. Bác sĩ sẽ đánh giá tình huống: ${f.indications} và đề xuất hướng xử lý phù hợp nhất, kèm lưu ý chăm sóc: ${f.aftercare}`,
  );

  const process: ServiceProcessRow[] = f.steps.map((s, i) => ({
    step: String(i + 1).padStart(2, "0"),
    title: s.title,
    desc: s.desc,
  }));

  const excerpt = `${n} tại ${SITE}, ${CITY} — ${cat}. ${f.definition.slice(0, 80)}… Tư vấn miễn phí, báo giá minh bạch.`;

  return {
    excerpt: excerpt.slice(0, 200),
    focusKeyword: f.focusKeyword,
    secondaryKeywords: `${lower}, ${cat.toLowerCase()}, nha khoa ${CITY.toLowerCase()}, ${SITE.toLowerCase()}`,
    intro,
    whatIs,
    audience,
    benefitsProse,
    processProse,
    whyChoose,
    benefits: f.benefits,
    audienceList: f.audienceList,
    process,
    faq: f.faq,
    priceNote: f.pricing,
    ctaText: `Đặt lịch ${lower}`,
  };
}
