const SITE = "Nha Khoa Đăng Khoa";
const CITY = "Tây Ninh";

type CategoryContext = {
  focus: string;
  equipment: string;
  typical: string;
};

const CATEGORY_CTX: Record<string, CategoryContext> = {
  "nha-khoa-tong-quat": {
    focus: "phòng ngừa, khám định kỳ và điều trị răng miệng cơ bản",
    equipment: "máy soi, cạo vôi siêu âm và vật liệu trám thẩm mỹ",
    typical: "viêm nướu, cao răng, sâu răng nhẹ và ê buốt",
  },
  "dieu-tri-noi-nha": {
    focus: "bảo tồn răng thật bằng điều trị tủy và xử lý nhiễm trùng trong ống tủy",
    equipment: "máy đo chiều dài ống tủy, X-quang và vật liệu trám obturation hiện đại",
    typical: "viêm tủy, áp xe và răng sữa cần chữa tủy",
  },
  "nho-rang": {
    focus: "nhổ răng và tiểu phẫu nhẹ nhàng, an toàn",
    equipment: "Piezotome siêu âm và quy trình gây tê tại chỗ",
    typical: "răng khôn mọc lệch, răng sâu không phục hồi được",
  },
  "tham-my-nha-khoa": {
    focus: "cải thiện thẩm mỹ nụ cười — màu sắc, hình thể và độ hài hòa gương mặt",
    equipment: "hệ thống tẩy trắng, labo sứ CAD/CAM và thiết kế nụ cười số",
    typical: "răng ố vàng, form răng chưa đều, nhu cầu veneer hoặc bọc sứ",
  },
  "phuc-hinh-rang": {
    focus: "phục hồi chức năng ăn nhai khi mất răng",
    equipment: "công nghệ lấy dấu số và sứ phục hình cao cấp",
    typical: "mất một vài răng hoặc mất nhiều răng cần cầu răng, hàm tháo lắp",
  },
  implant: {
    focus: "trồng răng Implant ổn định, thẩm mỹ và chức năng lâu dài",
    equipment: "CT Cone Beam 3D, trụ implant chính hãng và labo phục hình chuyên sâu",
    typical: "mất răng đơn lẻ, mất nhiều răng hoặc mất răng toàn hàm",
  },
  "nieng-rang": {
    focus: "chỉnh nha — căn chỉnh khớp cắn và thẩm mỹ hàm răng",
    equipment: "máy scan iTero, mắc cài và khay trong suốt Invisalign",
    typical: "răng hô, móm, khấp khểnh và sai khớp cắn",
  },
  "nha-khoa-tre-em": {
    focus: "chăm sóc răng miệng cho trẻ — nhẹ nhàng, thân thiện",
    equipment: "ghế khám trẻ em, vật liệu trám và fluor phòng ngừa",
    typical: "sâu răng sữa, nhổ răng sữa đúng thời điểm và hướng dẫn vệ sinh",
  },
  "dich-vu-chuyen-sau": {
    focus: "điều trị chuyên sâu — nha chu, khớp thái dương hàm và phẫu thuật",
    equipment: "phim CT, laser và phác đồ đa chuyên khoa",
    typical: "cười hở lợi, đau khớp hàm, tiêu xương và bệnh nha chu nặng",
  },
};

function ctx(categorySlug: string): CategoryContext {
  return (
    CATEGORY_CTX[categorySlug] ?? {
      focus: "chăm sóc răng miệng toàn diện",
      equipment: "trang thiết bị hiện đại",
      typical: "nhiều tình trạng răng miệng phổ biến",
  });
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

export function countWords(html: string): number {
  const text = stripHtml(html);
  if (!text) return 0;
  return text.split(" ").filter(Boolean).length;
}

/** Nội dung HTML chính — FAQ / quy trình / lợi ích hiển thị ở block riêng trên trang chi tiết */
export function buildServiceContentHtml(
  serviceName: string,
  categoryName: string,
  categorySlug: string,
  categoryImage: string,
): string {
  const c = ctx(categorySlug);
  const lower = serviceName.toLowerCase();

  return `<h1>${serviceName}</h1>
<p><strong>${serviceName}</strong> là một trong những dịch vụ trọng tâm tại ${SITE} (${CITY}), được triển khai trong nhóm <strong>${categoryName}</strong> với định hướng ${c.focus}. Khi bạn tìm hiểu về ${lower}, điều quan trọng không chỉ là chi phí mà còn là chỉ định điều trị, quy trình an toàn và khả năng theo dõi sau điều trị. Đội ngũ bác sĩ Răng Hàm Mặt tại phòng khám luôn ưu tiên thăm khám kỹ, giải thích rõ ràng từng bước và đưa ra phác đồ phù hợp từng trường hợp — không áp dụng máy móc một phương án cho tất cả khách hàng.</p>
<p>Khách hàng tại ${CITY} và các khu vực lân cận thường lựa chọn ${SITE} vì quy trình vô trùng chặt chẽ, vật liệu có nguồn gốc rõ ràng và chính sách báo giá minh bạch sau thăm khám. Với ${lower}, chúng tôi kết hợp ${c.equipment} để nâng cao độ chính xác, giảm thời gian thao tác và hạn chế khó chịu. Trước khi bắt đầu, bạn sẽ được tư vấn miễn phí về lợi ích, rủi ro, thời gian hồi phục và lịch tái khám — giúp bạn chủ động sắp xếp công việc và sinh hoạt.</p>

<img src="${categoryImage}" alt="${serviceName} tại ${SITE}" class="rounded-xl w-full my-8" />

<h2>${serviceName} là gì?</h2>
<p>Trong lĩnh vực ${categoryName.toLowerCase()}, <strong>${serviceName}</strong> được hiểu là giải pháp nha khoa nhằm xử lý các tình huống như ${c.typical}. Tùy mức độ tổn thương hoặc nhu cầu thẩm mỹ, bác sĩ có thể đề xuất một hoặc nhiều phương án đi kèm (ví dụ: chụp phim, điều trị nền, phục hình sau cùng). Mục tiêu cuối cùng là phục hồi chức năng ăn nhai, phát âm và sự tự tin khi giao tiếp — đồng thời bảo tồn mô răng và xương tối đa khi còn có thể.</p>
<p>Ở ${SITE}, mỗi ca ${lower} đều bắt đầu bằng hồ sơ bệnh án điện tử, kiểm tra sức khỏe toàn thân liên quan (tiểu đường, huyết áp, dị ứng thuốc…) và chụp X-quang hoặc CT khi cần. Việc chẩn đoán chính xác giúp tránh điều trị thừa, giảm biến chứng và tiết kiệm chi phí về lâu dài. Đây cũng là tiêu chuẩn mà các phòng khám uy tín tại ${CITY} ngày càng áp dụng để nâng cao chất lượng dịch vụ.</p>
<p>Nhiều khách hàng nhầm lẫn giữa các dịch vụ gần giống nhau trong cùng nhóm ${categoryName}. Vì vậy, trong buổi tư vấn, bác sĩ sẽ so sánh ưu – nhược điểm, thời gian và chi phí dự kiến để bạn chọn phương án phù hợp nhất. Nếu ${lower} không phải chỉ định tối ưu, chúng tôi sẽ đề xuất hướng điều trị thay thế an toàn hơn — đây là nguyên tắc đạo đức nghề nghiệp mà đội ngũ luôn tuân thủ.</p>
<p>Sau khi hoàn tất ${lower}, việc chăm sóc tại nhà và tái khám đúng hạn quyết định độ bền kết quả. Nhân viên y tế sẽ hướng dẫn cụ thể: chải răng, chỉ nha khoa, súc miệng và chế độ ăn uống trong giai đoạn hồi phục. Bạn cũng nhận được hotline hỗ trợ để được giải đáp khi có triệu chứng bất thường ngoài giờ hành chính (trong phạm vi tư vấn y khoa).</p>

<h2>Đối tượng phù hợp</h2>
<p>${serviceName} phù hợp khi bạn thuộc nhóm cần ${c.focus} — ví dụ: có biểu hiện liên quan ${c.typical}, hoặc bác sĩ đã chỉ định can thiệp sau khám chuyên sâu. Phụ nữ mang thai, người cao tuổi, trẻ em hoặc khách hàng có bệnh nền vẫn có thể điều trị sau khi được đánh giá và phối hợp thuốc an toàn. Quan trọng là thông báo đầy đủ tiền sử dị ứng, thuốc đang dùng và các ca điều trị răng miệng trước đó.</p>
<p>Nếu bạn đang do dự vì từng có trải nghiệm không tốt ở nơi khác, buổi thăm khám thứ hai tại ${SITE} thường giúp làm rõ nguyên nhân và hướng xử lý. Chúng tôi khuyến khích mang theo phim X-quang, ảnh chụp hoặc hồ sơ cũ (nếu có) để rút ngắn thời gian chẩn đoán. Đối với ${lower}, việc đến sớm khi triệu chứng mới xuất hiện thường giúp điều trị nhẹ nhàng và ít tốn kém hơn để lâu.</p>
<p>Khách hàng làm việc văn phòng, học sinh – sinh viên hoặc lao động chân tay đều có thể sắp xếp lịch linh hoạt: buổi sáng sớm, trưa hoặc cuối tuần (theo lịch phòng khám). Hãy đặt lịch trước qua website hoặc hotline để giảm thời gian chờ và được ưu tiên tư vấn riêng tư.</p>

<h2>Lợi ích khi thực hiện đúng chỉ định</h2>
<p>Hoàn thành ${lower} đúng phác đồ mang lại nhiều lợi ích: giảm đau, kiểm soát nhiễm trùng, cải thiện thẩm mỹ và phục hồi chức năng ăn nhai. Khi được thực hiện tại cơ sở có ${c.equipment}, độ chính xác cao hơn, thời gian điều trị thường ngắn hơn và hồi phục ổn định. Khách hàng cũng yên tâm hơn nhờ theo dõi sau điều trị và chế độ bảo hành (nếu áp dụng cho hạng mục phục hình).</p>
<p>Về mặt tâm lý, việc xử lý triệt để tình trạng ${c.typical} giúp tự tin giao tiếp, hình ảnh chuyên nghiệp và chất lượng cuộc sống tốt hơn. Đối với trẻ em, điều trị đúng thời điểm còn ảnh hưởng đến phát triển xương hàm và thói quen vệ sinh lâu dài. Đối với người lớn, phục hồi răng miệng ổn định còn hỗ trợ sức khỏe tiêu hóa và giảm viêm nhiễm toàn thân theo nhiều nghiên cứu hiện đại.</p>
<p>Cuối cùng, minh bạch chi phí ngay từ đầu giúp bạn chủ động tài chính — tránh phát sinh bất ngờ. ${SITE} cam kết tư vấn rõ ràng trước khi bạn đồng ý bắt đầu bất kỳ hạng mục nào của ${lower}.</p>

<h2>Quy trình thực hiện tại ${SITE}</h2>
<p>Quy trình ${lower} tại phòng khám thường gồm bốn giai đoạn chính. <strong>Giai đoạn 1 — Thăm khám và chẩn đoán:</strong> bác sĩ kiểm tra miệng, chụp phim nếu cần, đánh giá chỉ định và giải thích các phương án. <strong>Giai đoạn 2 — Lập kế hoạch:</strong> thống nhất phác đồ, thời gian, chi phí dự kiến và lịch hẹn. <strong>Giai đoạn 3 — Điều trị:</strong> thực hiện trong điều kiện vô trùng, gây tê/tê vùng phù hợp; đối với ca phức tạp có thể chia nhiều buổi. <strong>Giai đoạn 4 — Tái khám:</strong> theo dõi lành thương, chỉnh sửa nhỏ (nếu có) và hướng dẫn chăm sóc dài hạn.</p>
<p>Trong suốt quá trình, bạn được cập nhật tiến độ và có quyền đặt câu hỏi. Nếu cần chuyên gia phụ (ví dụ: chỉnh nha kết hợp phục hình), ${SITE} phối hợp nội bộ để hạn chế di chuyển nhiều nơi. Điều này đặc biệt có lợi cho khách hàng ở ${CITY} bận rộn hoặc ngại điều trị kéo dài.</p>
<p>Sau điều trị, phòng khám lưu hồ sơ điện tử để tái khám nhanh và nhắc lịch định kỳ. Bạn nên tuân thủ tái khám đúng hạn — đặc biệt với các ca ${c.typical} dễ tái phát nếu vệ sinh kém.</p>

<img src="/images/cover-clinic.png" alt="Quy trình ${serviceName}" class="rounded-xl w-full my-8" />

<h2>Vì sao chọn ${SITE}?</h2>
<p>${SITE} tại ${CITY} hướng tới mô hình nha khoa toàn diện: từ phòng ngừa, điều trị đến thẩm mỹ và phục hình. Với ${serviceName}, bạn được tiếp cận ${c.equipment}, quy trình vô trùng và đội ngũ bác sĩ có kinh nghiệm lâm sàng. Chúng tôi đầu tư đào tạo liên tục, cập nhật kỹ thuật mới và lắng nghe phản hồi khách hàng để cải thiện dịch vụ mỗi quý.</p>
<p>Điểm khác biệt còn nằm ở sự tận tâm: thời gian tư vấn không bị rút ngắn, thông tin được giải thích bằng ngôn ngữ dễ hiểu, không ép buộc lựa chọn điều trị. Môi trường phòng khám hiện đại, sạch sẽ, tạo cảm giác thoải mái cho cả trẻ em và người lớn. Nhiều gia đình tại ${CITY} đã gắn bó lâu dài vì trải nghiệm nhất quán qua các lần tái khám.</p>
<p>Về chi phí, chúng tôi công bố bảng giá tham khảo trên website và báo giá chi tiết sau thăm khám — phù hợp quy định minh bạch. Bạn có thể kết hợp ưu đãi theo thời điểm (nếu có) và thanh toán linh hoạt theo từng giai đoạn điều trị. Hotline hỗ trợ đặt lịch nhanh, giúp sắp xếp buổi khám phù hợp lịch làm việc.</p>
<p>Nếu bạn đang tìm hiểu ${lower} tại ${CITY}, hãy bắt đầu bằng một buổi tư vấn miễn phí tại ${SITE}. Bác sĩ sẽ kiểm tra, giải đáp thắc mắc và đề xuất lộ trình rõ ràng — từ đó bạn có căn cứ so sánh và quyết định điều trị khi đã sẵn sàng. Sức khỏe răng miệng là khoản đầu tư dài hạn; chọn đúng nơi và đúng thời điểm sẽ tiết kiệm thời gian, chi phí và công sức cho gia đình bạn.</p>
<p>Liên hệ đặt lịch qua trang <a href="/dat-lich">Đặt lịch khám</a> hoặc hotline trên website. Chúng tôi luôn sẵn sàng đồng hành cùng nụ cười khỏe đẹp của bạn tại ${CITY}.</p>`;
}
