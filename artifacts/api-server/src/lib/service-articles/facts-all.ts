import type { ArticleFacts } from "./expand";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export type FactsEntry = {
  categorySlug: string;
  categoryName: string;
  image: string;
  facts: ArticleFacts;
};

export const ALL_SERVICE_FACTS: FactsEntry[] = [
  // —— Nha khoa tổng quát (8) ——
  {
    categorySlug: "nha-khoa-tong-quat",
    categoryName: "Nha khoa tổng quát",
    image: "/images/cover-clinic.png",
    facts: {
      name: "Khám răng định kỳ",
      categoryName: "Nha khoa tổng quát",
      focusKeyword: "khám răng định kỳ tây ninh",
      definition:
        "Khám răng định kỳ là buổi thăm khám toàn diện theo chu kỳ 6–12 tháng nhằm phát hiện sớm sâu răng, viêm nướu và bệnh quanh răng trước khi có triệu chứng nặng. Bác sĩ đánh giá mô mềm, men răng, khớp cắn và tình trạng phục hình hiện có. Đây là nền tảng của chăm sóc phòng ngừa, giúp giữ răng thật lâu dài.",
      indications:
        "Mọi người từ trẻ em đến người cao tuổi nên khám định kỳ, đặc biệt khi có tiền sử sâu răng, viêm nướu hoặc đang mang thai. Người hút thuốc, tiểu đường hoặc đang niềng răng cần tần suất khám dày hơn theo chỉ định bác sĩ. Khám sớm khi thấy chảy máu nướu, hôi miệng kéo dài hoặc ê răng nhẹ cũng rất cần thiết.",
      technique:
        "Quy trình gồm khai thác bệnh sử, khám lâm sàng, đo chỉ số nha chu, chụp X-quang khi cần và lập kế hoạch điều trị minh bạch. Phòng khám sử dụng gương, thăm dò và máy chụp kỹ thuật số để giảm bức xạ. Kết quả được giải thích trực tiếp và lưu hồ sơ điện tử cho lần tái khám sau.",
      timeline:
        "Một buổi khám thường kéo dài 30–45 phút tùy mức độ phức tạp. Nếu cần cạo vôi hoặc trám nhẹ có thể thực hiện cùng ngày sau khi bạn đồng ý. Lịch tái khám tiếp theo được đặt sẵn trước khi ra về.",
      comfort:
        "Khám định kỳ hầu như không gây đau; chỉ có thể hơi khó chịu khi thăm vùng nướu nhạy cảm. Bác sĩ điều chỉnh tư thế và nhịp làm việc phù hợp người lo lắng. Trẻ em được khám trong không gian thân thiện, giải thích từng bước.",
      aftercare:
        "Sau khám, duy trì đánh răng 2 lần/ngày với kem có fluor và dùng chỉ nha khoa hàng ngày. Hạn chế đường liên tục giữa các bữa ăn và tái khám đúng hẹn dù không đau. Ghi chú các câu hỏi phát sinh để trao đổi ở lần sau.",
      pricing:
        "Chi phí phụ thuộc mức độ khám, số phim X-quang và dịch vụ kèm theo trong cùng buổi. Nha Khoa Đăng Khoa báo giá trước khi thực hiện thêm hạng mục ngoài gói khám cơ bản. Bạn nhận phiếu tóm tắt điều trị và dự kiến chi phí các bước tiếp theo.",
      clinicEdge:
        "Đăng Khoa tại Tây Ninh áp dụng hồ sơ số, nhắc lịch tái khám và tư vấn miễn phí không ép buộc điều trị. Đội ngũ bác sĩ Răng Hàm Mặt phối hợp nội bộ khi phát hiện bệnh phức tạp. Không gian vô trùng và thiết bị chẩn đoán hiện đại hỗ trợ phát hiện sớm.",
      benefits: [
        "Phát hiện sâu răng và viêm nướu trước khi lan rộng",
        "Giảm chi phí so với điều trị khẩn cấp muộn",
        "Theo dõi tiến triển phục hình và chỉnh nha",
        "Tư vấn chế độ chăm sóc cá nhân hóa",
      ],
      audienceList: [
        "Người trưởng thành chưa khám răng trên 12 tháng",
        "Phụ huynh muốn theo dõi răng sữa cho con",
        "Khách hàng có bệnh nền cần giám sát răng miệng",
        "Người làm việc văn phòng cần lịch hẹn linh hoạt",
      ],
      steps: [
        { title: "Tiếp đón & bệnh sử", desc: "Ghi nhận triệu chứng, thuốc đang dùng và mong muốn điều trị của bạn." },
        { title: "Khám lâm sàng", desc: "Kiểm tra răng, nướu, khớp cắn và phục hình; đo chỉ số nha chu nếu cần." },
        { title: "Chẩn đoán hình ảnh", desc: "Chụp X-quang có chọn lọc để phát hiện tổn thương ẩn dưới lợi." },
        { title: "Kế hoạch & hẹn tái khám", desc: "Thống nhất phác đồ, báo giá và đặt lịch theo dõi định kỳ." },
      ],
      faq: [
        { q: "Bao lâu nên khám răng một lần?", a: "Đa số người khỏe mạnh nên khám 6 tháng/lần; nhóm nguy cơ cao có thể 3–4 tháng theo chỉ định bác sĩ." },
        { q: "Khám định kỳ có cần chụp phim không?", a: "Không phải lúc nào cũng chụp; bác sĩ chỉ định khi cần đánh giá chân răng, tủy hoặc tiêu xương." },
        { q: "Trẻ em bao nhiêu tuổi nên khám lần đầu?", a: "Nên khám khi răng sữa bắt đầu mọc hoặc trước sinh nhật 1 tuổi theo khuyến cáo nha khoa trẻ em." },
        { q: "Khám định kỳ có thay thế đánh răng tại nhà?", a: "Không; khám bổ sung cho vệ sinh hàng ngày, không thay thế chải răng và chỉ nha khoa." },
        { q: "Có khám được khi đang mang thai?", a: "Có, đặc biệt kỳ 2; nên thông báo tuổi thai để bác sĩ điều chỉnh thuốc và tư thế ghế." },
        { q: "Buổi khám kéo dài bao lâu?", a: "Thường 30–45 phút; lâu hơn nếu kèm cạo vôi hoặc điều trị nhỏ trong cùng ngày." },
      ],
    },
  },
  {
    categorySlug: "nha-khoa-tong-quat",
    categoryName: "Nha khoa tổng quát",
    image: "/images/cover-clinic.png",
    facts: {
      name: "Tư vấn sức khỏe răng miệng",
      categoryName: "Nha khoa tổng quát",
      focusKeyword: "tư vấn sức khỏe răng miệng tây ninh",
      definition:
        "Tư vấn sức khỏe răng miệng là buổi trao đổi chuyên môn giúp bạn hiểu nguyên nhân bệnh lý, thói quen gây hại và cách phòng ngừa phù hợp lứa tuổi. Bác sĩ phân tích chế độ ăn, vệ sinh và yếu tố nguy cơ như hút thuốc hay căng thẳng nhai. Mục tiêu là chủ động bảo vệ răng miệng trước khi cần điều trị tốn kém.",
      indications:
        "Phù hợp khi bạn mới phát hiện vấn đề (hôi miệng, chảy máu nướu), chuẩn bị niềng răng, mang thai hoặc vừa hoàn tất điều trị lớn. Người có bệnh toàn thân (tiểu đường, tim mạch) cần tư vấn phối hợp chăm sóc. Trẻ em và thanh thiếu niên được hướng dẫn thói quen đúng ngay từ đầu.",
      technique:
        "Bác sĩ sử dụng mô hình răng, hình ảnh minh họa và bảng đánh giá nguy cơ sâu răng/viêm nướu. Tư vấn có thể kèm đo pH miệng hoặc kiểm tra mức độ cao răng. Bạn nhận tài liệu tóm tắt và checklist thực hành tại nhà.",
      timeline:
        "Buổi tư vấn thường 20–40 phút, có thể độc lập hoặc kết hợp khám định kỳ. Tái tư vấn ngắn khi thay đổi thuốc hoặc sau phẫu thuật. Không cần nghỉ dưỡng sau buổi trao đổi.",
      comfort:
        "Hoàn toàn không xâm lấn và không đau. Bạn được đặt câu hỏi thoải mái trong không gian riêng tư. Trẻ em được giải thích bằng ngôn ngữ dễ hiểu, tránh gây sợ nha khoa.",
      aftercare:
        "Áp dụng kế hoạch chăm sóc đã thống nhất: chải đúng kỹ thuật, dùng nước súc miệng theo chỉ định (nếu có) và hạn chế thực phẩm dính, axit. Ghi nhật ký triệu chứng 1–2 tuần để đánh giá hiệu quả. Liên hệ phòng khám nếu triệu chứng không cải thiện.",
      pricing:
        "Nhiều buổi tư vấn được miễn phí khi đi kèm khám hoặc điều trị tại Đăng Khoa. Tư vấn chuyên sâu (ăn kiêng, phục hình) có thể tính phí riêng theo thời lượng. Bảng giá công khai trước khi bắt đầu.",
      clinicEdge:
        "Đội ngũ giải thích bằng tiếng Việt dễ hiểu, không dùng thuật ngữ gây hiểu nhầm. Tư vấn cá nhân hóa theo nghề nghiệp và thói quen sinh hoạt tại Tây Ninh. Liên kết nội bộ với chỉnh nha, implant khi cần chuyển tiếp.",
      benefits: [
        "Hiểu rõ nguyên nhân và cách phòng bệnh",
        "Giảm lo lắng trước các thủ thuật phức tạp",
        "Tối ưu thời gian và chi phí điều trị",
        "Xây dựng thói quen chăm sóc bền vững",
      ],
      audienceList: [
        "Người mới bắt đầu điều trị nha khoa",
        "Phụ huynh cần hướng dẫn con đánh răng",
        "Khách hàng sau phẫu thuật cần theo dõi",
        "Người hút thuốc muốn cải thiện nướu",
      ],
      steps: [
        { title: "Khai thác thói quen", desc: "Đánh giá chế độ ăn, vệ sinh, thuốc lá và stress liên quan răng miệng." },
        { title: "Khám sơ bộ", desc: "Xác định tình trạng hiện tại làm cơ sở cho khuyến cáo cụ thể." },
        { title: "Lập kế hoạch cá nhân", desc: "Đề xuất sản phẩm, kỹ thuật chải và lịch tái khám phù hợp." },
        { title: "Tài liệu & theo dõi", desc: "Gửi hướng dẫn viết tay hoặc số; hẹn kiểm tra tiến triển." },
      ],
      faq: [
        { q: "Tư vấn có mất phí không?", a: "Thường miễn phí khi kèm khám tại Đăng Khoa; buổi chuyên sâu dài có thể báo phí trước." },
        { q: "Tư vấn có thay khám bác sĩ?", a: "Không; đây là bổ trợ giáo dục sức khỏe, không thay thế chẩn đoán lâm sàng." },
        { q: "Trẻ em có cần tư vấn riêng?", a: "Có; nội dung và cách truyền đạt được điều chỉnh theo độ tuổi và mức hợp tác." },
        { q: "Có tư vấn dinh dưỡng cho răng?", a: "Bác sĩ hướng dẫn thực phẩm tốt/xấu cho men răng và nướu; không thay chuyên gia dinh dưỡng y tế phức tạp." },
        { q: "Tôi nên mang gì đến buổi tư vấn?", a: "Đơn thuốc đang dùng, phim cũ và danh sách thắc mắc để trao đổi đầy đủ." },
        { q: "Bao lâu thì tư vấn lại?", a: "Khi thay đổi sức khỏe, thuốc hoặc sau 6–12 tháng để cập nhật kế hoạch." },
      ],
    },
  },
  // —— Nha khoa tổng quát (tiếp) ——
  {
    categorySlug: "nha-khoa-tong-quat",
    categoryName: "Nha khoa tổng quát",
    image: "/images/cover-clinic.png",
    facts: {
      name: "Cạo vôi răng",
      categoryName: "Nha khoa tổng quát",
      focusKeyword: "cạo vôi răng tây ninh",
      definition:
        "Cạo vôi răng là thủ thuật lấy cao răng và mảng bám cứng quanh cổ răng mà chải răng không loại bỏ hết được. Làm sạch giúp giảm vi khuẩn gây viêm nướu, hôi miệng và tiến triển bệnh nha chu. Đây là nền tảng phòng ngừa, nên thực hiện định kỳ theo chỉ định bác sĩ.",
      indications:
        "Khi thấy vôi răng, nướu đỏ sưng, chảy máu khi đánh răng hoặc hôi miệng dai dẳng. Người hút thuốc, uống trà/cà phê thường xuyên cần tần suất dày hơn. Phụ nữ mang thai vẫn có thể cạo vôi sau đánh giá an toàn tại phòng khám.",
      technique:
        "Bác sĩ dùng máy siêu âm hoặc cây nạo kết hợp làm sạch chân răng, sau đó đánh bóng nhẹ. Tia nước và tốc độ thấp giúp giảm ê; vùng làm việc được cô lập. Có thể bôi fluor sau thủ thuật theo nguy cơ sâu răng.",
      timeline:
        "Toàn miệng thường 30–45 phút tùy lượng vôi. Không cần nghỉ dưỡng; ăn nhẹ sau 30 phút nếu không ê. Tái cạo 6 tháng hoặc 3 tháng với nhóm nguy cơ cao.",
      comfort:
        "Phần lớn chỉ hơi rít; nướu viêm có thể ê nhẹ và được tê cục bộ nếu cần. Bác sĩ chia vùng cho người nhạy cảm. Trẻ em được giải thích trước từng bước.",
      aftercare:
        "24 giờ đầu hạn chế cà phê, thuốc lá và đồ nhuộm mạnh. Chải răng mềm, dùng chỉ nha khoa hàng ngày. Liên hệ phòng khám nếu đau tăng, sưng lan hoặc chảy máu kéo dài quá 3 ngày.",
      pricing:
        "Phụ thuộc mức độ vôi, số răng và có kèm điều trị nha chu nhẹ. Đăng Khoa báo giá trước khi làm; có thể gói kèm khám định kỳ.",
      clinicEdge:
        "Nha Khoa Đăng Khoa Tây Ninh dùng máy cạy vôi hiện đại, quy trình vô trùng và nhắc lịch tái khám qua hồ sơ số — giảm ê, thời gian ngồi ghế ngắn hơn.",
      benefits: [
        "Giảm viêm nướu và chảy máu khi vệ sinh",
        "Hạn chế hôi miệng do vi khuẩn tích tụ",
        "Phòng ngừa bệnh nha chu tiến triển",
        "Bề mặt răng sạch, dễ chăm sóc tại nhà",
      ],
      audienceList: [
        "Người chưa cạo vôi trên 6–12 tháng",
        "Khách hay chảy máu nướu khi đánh răng",
        "Người hút thuốc hoặc uống trà/cà phê nhiều",
        "Khách chuẩn bị phục hình hoặc chỉnh nha",
      ],
      steps: [
        { title: "Khám & đánh giá", desc: "Kiểm tra vôi răng, nướu và chỉ định chụp phim nếu cần." },
        { title: "Làm sạch siêu âm", desc: "Loại bỏ vôi và mảng bám quanh chân răng có kiểm soát." },
        { title: "Đánh bóng", desc: "Làm mịn bề mặt men để hạn chế bám mảng trở lại." },
        { title: "Hướng dẫn tại nhà", desc: "Tư vấn chải răng, chỉ nha khoa và lịch tái khám." },
      ],
      faq: [
        { q: "Cạo vôi có làm răng yếu không?", a: "Không khi đúng kỹ thuật; chỉ lấy vôi bám ngoài, không mài men." },
        { q: "Bao lâu cạo vôi một lần?", a: "Thường 6 tháng; nguy cơ cao có thể 3–4 tháng." },
        { q: "Cạo vôi có đau không?", a: "Đa số chỉ hơi ê; có thể tê cục bộ khi nướu viêm." },
        { q: "Mang thai có cạo vôi được?", a: "Có, nhất là kỳ 2; nên báo tuổi thai cho bác sĩ." },
        { q: "Sau cạo vôi cần kiêng gì?", a: "Tránh đồ nhuộm mạnh 24h; chải nhẹ và dùng chỉ nha khoa." },
        { q: "Cạo vôi và lấy cao răng khác nhau?", a: "Cùng một thủ thuật, chỉ khác tên gọi phổ biến." },
      ],
    },
  },
  {
    categorySlug: "nha-khoa-tong-quat",
    categoryName: "Nha khoa tổng quát",
    image: "/images/cover-clinic.png",
    facts: {
      name: "Đánh bóng răng",
      categoryName: "Nha khoa tổng quát",
      focusKeyword: "đánh bóng răng tây ninh",
      definition:
        "Đánh bóng răng là bước hoàn thiện sau cạo vôi, dùng pasta và cốc cao su làm mịn men và cổ răng. Bề mặt nhẵn hạn chế mảng bám và vôi tái hình thành nhanh. Có thể thực hiện độc lập khi cần cải thiện cảm giác thô trên răng.",
      indications:
        "Sau cạo vôi, trước tẩy trắng hoặc khi bề mặt răng dễ bám thức ăn. Người uống trà, thuốc lá muốn giảm ố men nhẹ. Không thay thế trám sâu hay điều trị tủy.",
      technique:
        "Bác sĩ chọn đầu đánh bóng phù hợp, xoay nhẹ từng mặt răng có làm mát bằng nước. Có thể kèm fluor theo nguy cơ sâu. Miệng được súc sát khuẩn sau thủ thuật.",
      timeline:
        "Thường 10–20 phút, hay cùng buổi cạo vôi. Ăn uống bình thường ngay sau khi hết ê. Lặp lại theo lịch cạo vôi định kỳ.",
      comfort:
        "Hầu như không đau, chỉ rung nhẹ. Người ê răng có thể yêu cầu tốc độ chậm. Trẻ em thường chấp nhận tốt.",
      aftercare:
        "Chải răng đúng kỹ thuật hàng ngày; tránh axit liên tục 24 giờ đầu. Không kem quá mạnh nếu nướu nhạy. Tái khám định kỳ duy trì bề mặt sạch.",
      pricing:
        "Thường kèm gói cạo vôi hoặc phí riêng thấp khi làm độc lập. Báo giá rõ tại phòng khám trước khi bắt đầu.",
      clinicEdge:
        "Nha Khoa Đăng Khoa Tây Ninh kết hợp đánh bóng và fluor cá nhân hóa theo nguy cơ sâu răng từng khách hàng.",
      benefits: [
        "Bề mặt mịn, giảm bám mảng và vôi",
        "Cảm giác sạch, thơm miệng hơn",
        "Tăng hiệu quả vệ sinh hàng ngày",
        "Chuẩn bị tốt trước thẩm mỹ răng",
      ],
      audienceList: [
        "Khách vừa hoàn tất cạo vôi",
        "Người muốn giảm ố men nhẹ",
        "Khách chuẩn bị tẩy trắng",
        "Người thích cảm giác răng nhẵn",
      ],
      steps: [
        { title: "Kiểm tra men", desc: "Xác định vùng cần đánh bóng và loại trừ chống chỉ định." },
        { title: "Làm sạch sơ bộ", desc: "Rửa miệng, cô lập vùng điều trị." },
        { title: "Đánh bóng", desc: "Mài nhẹ bề mặt bằng pasta và cốc cao su có kiểm soát." },
        { title: "Fluor & tư vấn", desc: "Bôi fluor nếu cần; hướng dẫn chăm sóc." },
      ],
      faq: [
        { q: "Đánh bóng có mòn răng?", a: "Đúng kỹ thuật chỉ loại lớp mảng mỏng, không mòn men đáng kể." },
        { q: "Không cạo vôi vẫn đánh bóng được?", a: "Một số trường hợp được; nên cạo vôi trước nếu có cao răng." },
        { q: "Có trắng răng không?", a: "Chỉ nhẹ; tẩy trắng dùng hoạt chất và quy trình khác." },
        { q: "Bao lâu làm một lần?", a: "Thường cùng lịch cạo vôi 6 tháng." },
        { q: "Trẻ em có làm được?", a: "Có khi chỉ định, thao tác nhẹ dưới giám sát bác sĩ." },
        { q: "Sau đánh bóng có ê?", a: "Hiếm; ê sẵn có thể tăng nhẹ vài giờ rồi giảm." },
      ],
    },
  },
  {
    categorySlug: "nha-khoa-tong-quat",
    categoryName: "Nha khoa tổng quát",
    image: "/images/cover-clinic.png",
    facts: {
      name: "Điều trị viêm nướu",
      categoryName: "Nha khoa tổng quát",
      focusKeyword: "điều trị viêm nướu tây ninh",
      definition:
        "Điều trị viêm nướu (viêm lợi) nhằm giảm viêm, chảy máu và sưng nướu do mảng bám và vi khuẩn. Giai đoạn sớm có thể hồi phục hoàn toàn với vệ sinh chuyên nghiệp và chăm sóc tại nhà. Nếu bỏ qua, viêm có thể tiến thành bệnh nha chu và tiêu xương.",
      indications:
        "Nướu đỏ, sưng, chảy máu khi chải răng, hôi miệng hoặc ê nhẹ quanh cổ răng. Phụ nữ mang thai, người tiểu đường hoặc hút thuốc cần điều trị sớm hơn. Trẻ em có nướu sưng sau răng mọc cũng cần đánh giá.",
      technique:
        "Bác sĩ cạo vôi, hướng dẫn kỹ thuật chải và chỉ nha khoa; có thể bôi thuốc tại chỗ hoặc súc miệng theo chỉ định. Đo chỉ số nha chu theo dõi tiến triển. Trường hợp nặng được chuyển điều trị nha chu chuyên sâu.",
      timeline:
        "Buổi điều trị ban đầu 45–60 phút; cải thiện triệu chứng thường 1–2 tuần với vệ sinh đúng. Tái khám 2–4 tuần để kiểm tra. Duy trì cạo vôi định kỳ sau khi ổn định.",
      comfort:
        "Có thể ê khi nướu đang viêm; tê cục bộ hoặc chia vùng giúp giảm khó chịu. Không phẫu thuật ở giai đoạn viêm nướu đơn thuần. Trẻ em được khám nhẹ nhàng.",
      aftercare:
        "Chải 2 lần/ngày đúng kỹ thuật, dùng chỉ nha khoa hàng ngày. Hạn chế thuốc lá; kiểm soát đường huyết nếu tiểu đường. Tái khám ngay nếu chảy máu không giảm sau 2 tuần.",
      pricing:
        "Tùy mức độ viêm, có kèm cạo vôi sâu hay thuốc tại chỗ. Báo giá sau khám; không phát sinh ngoài phác đồ đã thống nhất.",
      clinicEdge:
        "Nha Khoa Đăng Khoa Tây Ninh theo dõi chỉ số nướu, giáo dục vệ sinh tận tình và phối hợp nội nha khi viêm liên quan tủy.",
      benefits: [
        "Giảm chảy máu và sưng nướu",
        "Ngăn tiến triển sang bệnh nha chu",
        "Cải thiện hơi thở và cảm giác sạch miệng",
        "Nền tảng tốt cho phục hình và chỉnh nha",
      ],
      audienceList: [
        "Người chảy máu nướu khi đánh răng",
        "Khách hút thuốc hoặc stress cao",
        "Phụ nữ mang thai có viêm nướu",
        "Trẻ em có nướu sưng sau mọc răng",
      ],
      steps: [
        { title: "Chẩn đoán", desc: "Khám, đo chỉ số nha chu và xác định mức độ viêm." },
        { title: "Làm sạch chuyên nghiệp", desc: "Cạo vôi, đánh bóng và loại mảng bám gây viêm." },
        { title: "Điều trị hỗ trợ", desc: "Thuốc tại chỗ hoặc súc miệng theo chỉ định bác sĩ." },
        { title: "Tái đánh giá", desc: "Hẹn kiểm tra tiến triển và điều chỉnh chăm sóc tại nhà." },
      ],
      faq: [
        { q: "Viêm nướu có tự khỏi?", a: "Cần vệ sinh đúng và làm sạch chuyên nghiệp; bỏ qua dễ thành nha chu." },
        { q: "Có cần kháng sinh?", a: "Không phải lúc nào; bác sĩ chỉ định khi có nhiễm trùng cụ thể." },
        { q: "Bao lâu hết chảy máu?", a: "Thường 7–14 ngày nếu chải đúng và tái khám đúng hẹn." },
        { q: "Trẻ em điều trị khác người lớn?", a: "Cùng nguyên tắc; kỹ thuật và sản phẩm phù hợp lứa tuổi." },
        { q: "Có liên quan hôi miệng?", a: "Có; vi khuẩn dưới nướu viêm góp phần mùi miệng." },
        { q: "Sau điều trị có tái phát?", a: "Có thể nếu vệ sinh kém; cạo vôi định kỳ giúp duy trì." },
      ],
    },
  },
  {
    categorySlug: "nha-khoa-tong-quat",
    categoryName: "Nha khoa tổng quát",
    image: "/images/cover-clinic.png",
    facts: {
      name: "Điều trị nha chu",
      categoryName: "Nha khoa tổng quát",
      focusKeyword: "điều trị nha chu tây ninh",
      definition:
        "Điều trị nha chu xử lý viêm và tiêu xương quanh chân răng do vi khuẩn và mảng bám lâu ngày. Mục tiêu là dừng tiến triển bệnh, giữ răng thật và phục hồi sức khỏe nướu. Giai đoạn nặng có thể cần phẫu thuật nha chu hoặc phối hợp chuyên sâu.",
      indications:
        "Răng lung lay nhẹ, hở chân răng, mủ quanh nướu hoặc chỉ số nha chu sâu. Người tiểu đường, hút thuốc cần điều trị sớm và theo dõi chặt. Khách chuẩn bị implant hoặc phục hình cần nền nha chu ổn định.",
      technique:
        "Cạo vôi và nạo túi nha chu dưới nướu, có thể chia nhiều buổi và gây tê. Bôi thuốc túi, laser hoặc phẫu thuật tùy mức độ. Chụp X-quang đánh giá xương và theo dõi định kỳ.",
      timeline:
        "Điều trị cơ bản 2–4 buổi, cách nhau vài tuần. Cải thiện triệu chứng 4–8 tuần; duy trì cả đời với cạo vôi định kỳ. Phẫu thuật nếu có được lên kế hoạch riêng.",
      comfort:
        "Có thể ê sau nạo túi; thuốc giảm đau và tê giúp thủ thuật chịu được. Sưng nhẹ vài ngày là bình thường. Bác sĩ điều chỉnh phác đồ cho người sợ đau.",
      aftercare:
        "Súc miệng theo đơn, chải răng mềm và tăm interdental đúng hướng dẫn. Không hút thuốc trong điều trị. Tái khám đúng hẹn để đo lại túi nha chu.",
      pricing:
        "Theo số răng/vùng hàm, độ sâu túi và có phẫu thuật hay không. Báo giá từng giai đoạn minh bạch tại Đăng Khoa.",
      clinicEdge:
        "Nha Khoa Đăng Khoa Tây Ninh có lộ trình nha chu từng bước, chụp phim theo dõi và liên kết phẫu thuật nha chu khi cần.",
      benefits: [
        "Ngăn tiêu xương và lung lay răng",
        "Giảm mủ, hôi miệng và viêm tái phát",
        "Giữ răng thật lâu nhất có thể",
        "Tạo nền ổn cho implant và phục hình",
      ],
      audienceList: [
        "Người có túi nha chu sâu trên 4mm",
        "Khách răng lung lay hoặc hở chân răng",
        "Người tiểu đường cần kiểm soát nướu",
        "Khách chuẩn bị phẫu thuật implant",
      ],
      steps: [
        { title: "Đánh giá toàn diện", desc: "Khám, đo túi, chụp X-quang và phân loại mức độ." },
        { title: "Làm sạch sâu", desc: "Cạo vôi và nạo túi dưới tê, chia vùng nếu cần." },
        { title: "Điều trị bổ trợ", desc: "Thuốc túi, laser hoặc hẹn phẫu thuật tùy chỉ định." },
        { title: "Duy trì định kỳ", desc: "Tái khám, cạo vôi duy trì và hướng dẫn vệ sinh." },
      ],
      faq: [
        { q: "Nha chu có chữa khỏi hoàn toàn?", a: "Có thể kiểm soát; xương mất nhiều khó tái tạo hoàn toàn." },
        { q: "Có phải nhổ răng?", a: "Chỉ khi không thể giữ; ưu tiên bảo tồn khi còn điều kiện." },
        { q: "Điều trị mất bao lâu?", a: "Vài tuần đến vài tháng tùy mức độ và tuân thủ." },
        { q: "Hút thuốc ảnh hưởng thế nào?", a: "Làm chậm lành và tăng tái phát; nên cai hoặc giảm." },
        { q: "Có đau nhiều không?", a: "Có tê trong thủ thuật; sau đó ê nhẹ vài ngày, uống thuốc theo đơn." },
        { q: "Bao lâu tái khám?", a: "Thường 3–6 tháng duy trì sau giai đoạn điều trị ban đầu." },
      ],
    },
  },
  {
    categorySlug: "nha-khoa-tong-quat",
    categoryName: "Nha khoa tổng quát",
    image: "/images/cover-clinic.png",
    facts: {
      name: "Trám răng thẩm mỹ",
      categoryName: "Nha khoa tổng quát",
      focusKeyword: "trám răng thẩm mỹ tây ninh",
      definition:
        "Trám răng thẩm mỹ dùng composite màu trùng răng để phục hồi sâu răng, mẻ nhỏ hoặc khe thưa mà vẫn giữ hài hòa nụ cười. Vật liệu gắn trực tiếp lên men, ít mài răng hơn bọc sứ. Kết quả phụ thuộc kỹ thuật tạo hình và chọn màu chính xác.",
      indications:
        "Sâu răng nhỏ đến vừa, mẻ cạnh cắn, răng cửa thưa nhẹ hoặc đổi màu men cục bộ. Không thay thế khi mất cấu trúc lớn cần bọc sứ hoặc chữa tủy. Trẻ em và người lớn đều có thể trám khi chỉ định.",
      technique:
        "Bác sĩ cô lập ẩm, mài tạo hình, acid etch, bôi bond và đặt composite từng lớp, chiếu đèn polymer hóa. Đánh bóng và kiểm tra khớp cắn. Màu composite chọn theo răng kế cận.",
      timeline:
        "Mỗi răng 30–60 phút tùy số mặt trám. Ăn nhai nhẹ sau 2 giờ; tránh cứng quá trong ngày đầu. Kiểm tra khớp cắn sau 1 tuần nếu cần.",
      comfort:
        "Thường chỉ cần tê cục bộ nhẹ; không tê nếu sâu nông và bệnh nhân đồng ý. Không đau sau trám nếu không chạm tủy. Trẻ em có thể dùng gel tê trước kim.",
      aftercare:
        "Tránh cắn vật cứng bằng răng đã trám; chải và chỉ nha khoa bình thường. Hạn chế thực phẩm nhuộm mạnh vài ngày đầu. Tái khám nếu ê, vỡ hoặc cao bít khớp cắn.",
      pricing:
        "Theo số răng, mặt trám và loại composite. Báo giá từng răng trước khi làm; bảo hành theo chính sách phòng khám.",
      clinicEdge:
        "Nha Khoa Đăng Khoa Tây Ninh dùng composite chính hãng, tạo hình tự nhiên và kiểm tra khớp cắn kỹ trước khi hoàn tất.",
      benefits: [
        "Phục hồi thẩm mỹ và chức năng nhai",
        "Ít mài răng so với bọc sứ",
        "Thời gian điều trị thường một buổi",
        "Màu sắc hài hòa với răng thật",
      ],
      audienceList: [
        "Người có sâu răng hoặc mẻ nhỏ",
        "Khách muốn đóng khe thưa nhẹ",
        "Người cần sửa thẩm mỹ cửa răng",
        "Trẻ em có sâu răng sữa/vĩnh viễn sớm",
      ],
      steps: [
        { title: "Khám & chọn màu", desc: "Đánh giá tổn thương, chụp phim nếu cần và chọn shade composite." },
        { title: "Cô lập & tạo hình", desc: "Tê, làm sạch sâu, tạo hình và acid etch." },
        { title: "Đặt composite", desc: "Bond, đặt lớp composite và polymer hóa từng lớp." },
        { title: "Hoàn thiện", desc: "Chỉnh khớp cắn, đánh bóng và hướng dẫn chăm sóc." },
      ],
      faq: [
        { q: "Trám composite bền bao lâu?", a: "Thường 5–7 năm hoặc hơn nếu vệ sinh tốt và không cắn cứng." },
        { q: "Có đau sau trám?", a: "Ê nhẹ vài ngày có thể; đau kéo dài cần khám lại tủy." },
        { q: "Trám có trắng hơn răng?", a: "Bác sĩ chọn màu khớp; có thể polish nếu hơi sáng ban đầu." },
        { q: "Sâu sâu trám được không?", a: "Tùy mức; sâu sâu có thể cần chữa tủy trước hoặc bọc sứ." },
        { q: "Có thay thế amalgam?", a: "Có thể thay bằng composite thẩm mỹ khi chỉ định." },
        { q: "Bảo hành thế nào?", a: "Theo chính sách phòng khám; vỡ do cắn cứng có thể không bảo hành." },
      ],
    },
  },
  {
    categorySlug: "nha-khoa-tong-quat",
    categoryName: "Nha khoa tổng quát",
    image: "/images/cover-clinic.png",
    facts: {
      name: "Điều trị ê buốt răng",
      categoryName: "Nha khoa tổng quát",
      focusKeyword: "điều trị ê buốt răng tây ninh",
      definition:
        "Điều trị ê buốt răng nhằm giảm cảm giác nhức khi ăn lạnh, nóng, chua hoặc chải răng — thường do men mòn, lộ chân răng hoặc nứt men. Bác sĩ xác định nguyên nhân thay vì chỉ che triệu chứng. Phác đồ có thể kết hợp bôi fluoride, sealant và điều chỉnh thói quen.",
      indications:
        "Ê khi uống đồ lạnh, ăn chua hoặc chải vùng cổ răng. Người hay tẩy trắng tại nhà quá mức, nghiến răng hoặc chải mạnh. Sau điều trị nha chu hoặc tẩy trắng cần giảm ê.",
      technique:
        "Khám tìm nguyên nhân, có thể chụp phim; bôi fluoride cao nồng độ, resin sealant cổ răng hoặc trám bít hở chân răng. Tư vấn kem đánh răng dành cho răng nhạy cảm. Điều trị nha chu hoặc nội nha nếu ê do bệnh lý sâu hơn.",
      timeline:
        "Buổi điều trị 30–45 phút; giảm ê thường vài ngày đến 2 tuần với kem tại nhà. Nhiều buổi nếu nhiều răng hoặc cần điều trị kèm. Tái đánh giá sau 2–4 tuần.",
      comfort:
        "Thủ thuật bôi/sealant hầu như không đau. Không nên tự chịu ê lâu ngày. Bác sĩ tránh kích thích quá mức vùng nhạy cảm.",
      aftercare:
        "Dùng kem sensitive theo hướng dẫn; chải mềm, không chải ngang mạnh. Hạn chế thức ăn quá lạnh/nóng vài ngày đầu. Báo lại nếu ê tăng — có thể cần chữa tủy.",
      pricing:
        "Theo số răng và phương pháp (bôi, sealant, trám). Báo giá sau khám nguyên nhân.",
      clinicEdge:
        "Nha Khoa Đăng Khoa Tây Ninh chẩn đoán phân biệt ê do men hay tủy, tránh bỏ sót viêm tủy.",
      benefits: [
        "Giảm ê khi ăn uống và vệ sinh",
        "Bảo vệ men và cổ răng lộ",
        "Cải thiện chất lượng cuộc sống hàng ngày",
        "Ngăn tổn thương men do chải sai",
      ],
      audienceList: [
        "Người ê khi uống đồ lạnh",
        "Khách có cổ răng lộ do nha chu",
        "Người sau tẩy trắng bị nhạy cảm",
        "Người chải răng quá mạnh",
      ],
      steps: [
        { title: "Tìm nguyên nhân", desc: "Khám, test lạnh và chụp phim nếu nghi tủy." },
        { title: "Xử lý tại chỗ", desc: "Fluoride, sealant hoặc trám vùng lộ ngà." },
        { title: "Tư vấn thói quen", desc: "Hướng dẫn chải, kem và hạn chế axit." },
        { title: "Theo dõi", desc: "Tái khám đánh giá mức độ giảm ê." },
      ],
      faq: [
        { q: "Ê buốt có phải sâu răng?", a: "Không luôn; có thể do men mòn — cần khám phân biệt." },
        { q: "Kem sensitive dùng bao lâu?", a: "Thường 2–4 tuần; bác sĩ hướng dẫn cụ thể." },
        { q: "Có cần chữa tủy?", a: "Chỉ khi ê do tủy viêm; khám chuyên sâu sẽ chỉ định." },
        { q: "Tẩy trắng có gây ê?", a: "Có thể tạm thời; điều trị hỗ trợ giảm ê sau tẩy." },
        { q: "Trẻ em bị ê buốt?", a: "Có; cần khám loại trừ sâu và hướng dẫn chải đúng." },
        { q: "Ê có khỏi hẳn?", a: "Nhiều ca kiểm soát tốt; men mòn nặng cần duy trì lâu dài." },
      ],
    },
  },

  // —— Điều trị nội nha (4) ——
  {
    categorySlug: "dieu-tri-noi-nha",
    categoryName: "Điều trị nội nha",
    image: "/images/service-nho-rang-khon.png",
    facts: {
      name: "Điều trị tủy răng",
      categoryName: "Điều trị nội nha",
      focusKeyword: "điều trị tủy răng tây ninh",
      definition:
        "Điều trị tủy răng (chữa tủy) loại bỏ tổ chức tủy viêm nhiễm trong ống tủy, làm sạch, tạo hình và trám kín để giữ răng thật. Giải pháp thay thế nhổ răng khi chân răng và xương còn đủ điều kiện. Sau điều trị thường cần bọc sứ hoặc mão để bảo vệ răng yếu.",
      indications:
        "Ê kéo dài, sưng nướu, đổi màu răng hoặc nhiễm trùng sau sâu sâu/chấn thương. Chụp X-quang thấy tổn thương quanh chóp. Bác sĩ chỉ định khi còn khả năng bảo tồn thay vì nhổ.",
      technique:
        "Gây tê, mở tủy, dùng file máy/quay tay và dung dịch bao tủy làm sạch ống. Chụp phim length và trám kín bằng gutta-percha. Có máy apex locator và X-quang số giảm sai sót.",
      timeline:
        "Thường 1–3 buổi, mỗi buổi 60–90 phút tùy số ống. Đau nhẹ vài ngày sau mỗi buổi là bình thường. Bọc sứ sau 1–2 tuần khi ổn định.",
      comfort:
        "Có tê trong điều trị; sau buổi có thể ê, uống thuốc theo đơn. Không nên trì hoãn khi đã chỉ định — nhiễm trùng gây đau nhiều hơn. Bác sĩ giải thích từng bước giảm lo lắng.",
      aftercare:
        "Ăn mềm phía đối diện vài ngày; tránh nhai răng đang điều trị. Uống thuốc đúng giờ; tái khám nếu sưng nặng hoặc sốt. Hoàn tất bọc sứ theo hẹn để tránh gãy.",
      pricing:
        "Theo số ống tủy (răng cửa, hàm nhỏ, hàm lớn) và có tái điều trị hay không. Báo giá sau chụp phim và khám.",
      clinicEdge:
        "Nha Khoa Đăng Khoa Tây Ninh có máy nội nha, chụp phim số và phối hợp bọc sứ nội bộ sau chữa tủy.",
      benefits: [
        "Giữ răng thật thay vì nhổ",
        "Giải quyết nhiễm trùng và đau",
        "Tránh lan nhiễm sang răng kế cận",
        "Nền cho phục hình dài hạn",
      ],
      audienceList: [
        "Người sâu răng chạm tủy",
        "Khách ê kéo dài sau trám sâu",
        "Người chấn thương răng có triệu chứng tủy",
        "Khách muốn tránh nhổ răng khi còn cứu được",
      ],
      steps: [
        { title: "Chẩn đoán", desc: "Khám, test tủy và chụp X-quang đánh giá ống tủy." },
        { title: "Làm sạch tủy", desc: "Tê, mở tủy, tạo hình và rửa ống tủy." },
        { title: "Trám kín", desc: "Trám gutta-percha và seal; chụp phim kiểm tra." },
        { title: "Phục hồi", desc: "Hẹn bọc sứ hoặc trám phục hồi che răng yếu." },
      ],
      faq: [
        { q: "Chữa tủy có đau?", a: "Có tê khi làm; sau đó ê nhẹ vài ngày, có thuốc giảm đau." },
        { q: "Mất bao nhiêu buổi?", a: "Thường 1–3 buổi tùy độ phức tạp ống tủy." },
        { q: "Có cần bọc sứ?", a: "Hầu hết răng sau tủy cần mão/sứ để chống gãy." },
        { q: "Chữa tủy thất bại?", a: "Có thể điều trị lại hoặc phẫu thuật chóp; bác sĩ đánh giá cụ thể." },
        { q: "Răng đổi màu sau tủy?", a: "Có thể; tẩy trắng nội bộ hoặc sứ cải thiện thẩm mỹ." },
        { q: "Trẻ em chữa tủy?", a: "Răng sữa/vĩnh viễn có phác đồ riêng — chữa tủy răng sữa khác người lớn." },
      ],
    },
  },
  {
    categorySlug: "dieu-tri-noi-nha",
    categoryName: "Điều trị nội nha",
    image: "/images/service-nho-rang-khon.png",
    facts: {
      name: "Chữa tủy răng sữa",
      categoryName: "Điều trị nội nha",
      focusKeyword: "chữa tủy răng sữa tây ninh",
      definition:
        "Chữa tủy răng sữa bảo tồn răng sữa bị sâu sâu hoặc viêm tủy, giữ chỗ cho răng vĩnh viễn mọc đúng. Phác đồ nhẹ hơn người lớn, ưu tiên vật liệu sinh học thân thiện trẻ em. Giúp trẻ ăn nhai bình thường và giảm đau nhiễm trùng.",
      indications:
        "Trẻ sâu răng sữa chạm tủy, sưng nướu hoặc đau khi ăn. Răng sữa còn thời gian giữ chỗ trước khi lung lay tự nhiên. Bác sĩ cân nhắc nhổ nếu răng sắp rụng và nhiễm trùng kiểm soát được.",
      technique:
        "Gây tê hoặc liệu pháp giảm lo âu phù hợp lứa tuổi; làm sạch tủy một phần hoặc toàn bộ tùy mức. Trám bằng vật liệu phù hợp răng sữa, có thể bọc crown thép không gỉ. Giải thích đơn giản cho phụ huynh và trẻ.",
      timeline:
        "Thường 1 buổi 45–60 phút; tái khám sau 1–2 tuần. Răng sữa rụng theo lịch sinh lý sau điều trị thành công. Theo dõi răng vĩnh viễn mọc khi đến tuổi.",
      comfort:
        "Phòng khám thân thiện trẻ em; tê cục bộ giảm đau. Phụ huynh đồng hành an ủi. Tránh để trẻ đau kéo dài vì sợ nha khoa.",
      aftercare:
        "Ăn mềm, hạn chế đồ ngọt dính. Chải răng giúp trẻ đúng cách. Tái khám ngay nếu sưng mặt, sốt hoặc trẻ từ chối ăn.",
      pricing:
        "Theo số răng và phương pháp (pulpotomy/pulpectomy). Báo giá rõ cho phụ huynh trước điều trị.",
      clinicEdge:
        "Nha Khoa Đăng Khoa Tây Ninh có khu nhi thân thiện, bác sĩ kiên nhẫn và phối hợp chỉnh nha khi mất răng sữa sớm.",
      benefits: [
        "Giữ răng sữa và chỗ mọc răng vĩnh viễn",
        "Giảm đau, nhiễm trùng cho trẻ",
        "Tránh nhổ sớm gây lệch răng",
        "Giúp trẻ ăn uống và phát âm tốt hơn",
      ],
      audienceList: [
        "Trẻ 3–10 tuổi sâu răng sữa sâu",
        "Trẻ đau răng, sưng nướu sữa",
        "Phụ huynh muốn tránh nhổ sớm",
        "Trẻ có nguy cơ sâu răng tái phát",
      ],
      steps: [
        { title: "Khám nhi", desc: "Đánh giá sâu, X-quang và thời gian giữ răng sữa." },
        { title: "Làm sạch tủy", desc: "Tê nhẹ, xử lý tủy theo mức độ viêm." },
        { title: "Trám phục hồi", desc: "Trám hoặc crown bảo vệ răng sữa." },
        { title: "Theo dõi", desc: "Hẹn kiểm tra và hướng dẫn phòng sâu." },
      ],
      faq: [
        { q: "Răng sữa sớm rụng sao?", a: "Có thể lệch răng vĩnh viễn — nên chữa tủy hoặc spacer khi cần." },
        { q: "Chữa tủy sữa có đau?", a: "Có tê; trẻ ê nhẹ vài ngày, dùng thuốc theo đơn." },
        { q: "Khác chữa tủy người lớn?", a: "Có; vật liệu và mức làm sạch phù hợp răng sữa." },
        { q: "Bao lâu răng sữa rụng?", a: "Theo từng răng; bác sĩ dự báo khi khám." },
        { q: "Có cần chụp phim?", a: "Thường có để đánh giá chân răng và chóp." },
        { q: "Trẻ không hợp tác?", a: "Có thể chia buổi hoặc giải thích, an ủi; trường hợp đặc biệt bác sĩ tư vấn thêm." },
      ],
    },
  },
  {
    categorySlug: "dieu-tri-noi-nha",
    categoryName: "Điều trị nội nha",
    image: "/images/service-nho-rang-khon.png",
    facts: {
      name: "Điều trị tủy lại",
      categoryName: "Điều trị nội nha",
      focusKeyword: "điều trị tủy lại tây ninh",
      definition:
        "Điều trị tủy lại (retreatment) thực hiện khi răng đã chữa tủy nhưng vẫn đau, sưng hoặc nhiễm trùng tái phát. Bác sĩ tháo trám cũ, làm sạch lại ống tủy và trám kín. Phức tạp hơn chữa tủy lần đầu, cần kinh nghiệm và thiết bị hỗ trợ.",
      indications:
        "Ê, sưng hoặc ổ áp xe sau chữa tủy cũ; X-quang thấy tổn thương chóp không lành. Răng có post, ống con hoặc nhiễm trùng kéo dài. Đánh giá còn khả năng cứu trước khi nhổ.",
      technique:
        "Tháo vật liệu trám cũ, dùng file, ultrasound và dung dịch làm sạch; có thể cần phẫu thuật chóp. Microscope hoặc kính lúp hỗ trợ tìm ống bỏ sót. Trám kín và phục hồi bọc sứ sau điều trị.",
      timeline:
        "Thường 2–4 buổi, mỗi buổi dài hơn chữa tủy mới. Theo dõi lành chóp 3–12 tháng. Thất bại sau retreat có thể cân nhắc nhổ hoặc phẫu thuật.",
      comfort:
        "Tê đầy đủ; có thể ê nhiều hơn lần đầu do viêm cũ. Thuốc và chường lạnh giảm sưng. Bác sĩ thảo luận kỳ vọng thực tế với khách.",
      aftercare:
        "Tuân thủ thuốc; tránh nhai răng điều trị. Tái khám đúng hẹn chụp phim theo dõi. Bọc sứ bảo vệ sau khi ổn định.",
      pricing:
        "Cao hơn chữa tủy mới do thời gian và độ khó; báo giá sau khám và phim.",
      clinicEdge:
        "Nha Khoa Đăng Khoa Tây Ninh có kinh nghiệm retreat, thiết bị length và phối hợp phẫu thuật chóp khi cần.",
      benefits: [
        "Cơ hội giữ răng đã điều trị thất bại",
        "Giải quyết nhiễm trùng tái phát",
        "Tránh nhổ và implant không cần thiết",
        "Phục hồi chức năng khi thành công",
      ],
      audienceList: [
        "Khách đã chữa tủy vẫn đau/sưng",
        "Răng có ổ áp xe tái phát trên phim",
        "Răng có post/core cần đánh giá retreat",
        "Người muốn cố giữ răng thật",
      ],
      steps: [
        { title: "Đánh giá", desc: "Phim, khám và thảo luận tỷ lệ thành công." },
        { title: "Tháo trám cũ", desc: "Lộ ống tủy, tìm kênh bỏ sót hoặc gãy file." },
        { title: "Tái làm sạch", desc: "Tạo hình, rửa và trám kín lại." },
        { title: "Theo dõi", desc: "Chụp phim định kỳ; phục hồi bọc sứ." },
      ],
      faq: [
        { q: "Tủy lại thành công không?", a: "Tỷ lệ phụ thuộc nguyên nhân thất bại; bác sĩ ước lượng trước." },
        { q: "Có đau hơn lần đầu?", a: "Có thể; viêm cũ và thao tác nhiều hơn." },
        { q: "Khi nào nên nhổ?", a: "Nứt chân răng dọc, mất quá nhiều xương hoặc retreat thất bại nhiều lần." },
        { q: "Mất bao lâu?", a: "Thường 2–4 buổi, theo dõi vài tháng." },
        { q: "Có cần phẫu thuật chóp?", a: "Một số ca cần; bác sĩ chỉ định khi trám kín không đủ." },
        { q: "Chi phí so với implant?", a: "Retreat thường rẻ hơn implant; bác sĩ so sánh theo từng ca." },
      ],
    },
  },
  {
    categorySlug: "dieu-tri-noi-nha",
    categoryName: "Điều trị nội nha",
    image: "/images/service-nho-rang-khon.png",
    facts: {
      name: "Điều trị áp xe răng",
      categoryName: "Điều trị nội nha",
      focusKeyword: "điều trị áp xe răng tây ninh",
      definition:
        "Điều trị áp xe răng xử lý ổ mủ do nhiễm trùng tủy hoặc quanh chóp răng, gây đau, sưng mặt và có thể lan nguy hiểm. Ưu tiên dẫn lưu mủ, kháng sinh theo chỉ định và xử lý nguyên nhân (chữa tủy hoặc nhổ). Không tự uống thuốc kéo dài mà không khám.",
      indications:
        "Sưng nướu/mặt, đau nhói, sốt nhẹ hoặc vùng nướu có ổ mủ. X-quang thấy bóng tối quanh chóp. Cần cấp cứu nha khoa khi sưng lan nhanh hoặc khó nuốt/thở.",
      technique:
        "Rạch dẫn lưu, bơm rửa; kê kháng sinh nếu chỉ định. Sau ổn định: chữa tủy hoặc nhổ răng gây nhiễm. Theo dõi sát triệu chứng toàn thân.",
      timeline:
        "Cấp cứu trong ngày; giảm đau 24–48 giờ sau dẫn lưu. Điều trị tận gốc (tủy/nhổ) trong vài ngày đến 2 tuần. Không bỏ giữa chừng.",
      comfort:
        "Dẫn lưu giảm áp lực, đỡ đau nhanh; vẫn có thể ê khi sờ. Gây tê khi nhổ hoặc chữa tủy sau. Cấp cứu được ưu tiên lịch khẩn.",
      aftercare:
        "Uống thuốc đủ liệu trình; chường lạnh 24h đầu. Vệ sinh nhẹ vùng điều trị. Đến bệnh viện ngay nếu sưng lan, sốt cao.",
      pricing:
        "Phí cấp cứu + điều trị gốc; báo giá sau khám. Kháng sinh theo đơn, không tự mua lạm dụng.",
      clinicEdge:
        "Nha Khoa Đăng Khoa Tây Ninh tiếp nhận ca đau cấp, dẫn lưu và phối hợp nội nha/nhổ răng trong ngày khi có thể.",
      benefits: [
        "Giảm đau và nguy cơ lan nhiễm",
        "Xử lý đúng nguyên nhân tủy/nhổ",
        "Tránh biến chứng toàn thân",
        "Lập kế hoạch phục hồi sau cấp cứu",
      ],
      audienceList: [
        "Người sưng mặt, đau răng cấp",
        "Khách có ổ mủ lộ hoặc trên phim",
        "Bệnh nhân chữa tủy thất bại có áp xe",
        "Người sốt nhẹ kèm đau răng",
      ],
      steps: [
        { title: "Cấp cứu", desc: "Khám, chụp phim và dẫn lưu mủ nếu cần." },
        { title: "Kiểm soát nhiễm", desc: "Thuốc theo đơn; theo dõi sưng, sốt." },
        { title: "Điều trị gốc", desc: "Chữa tủy hoặc nhổ răng gây bệnh." },
        { title: "Tái khám", desc: "Đảm bảo lành, không tái áp xe." },
      ],
      faq: [
        { q: "Áp xe có tự khỏi?", a: "Hiếm an toàn; cần dẫn lưu và xử lý răng gây bệnh." },
        { q: "Có cần kháng sinh?", a: "Bác sĩ chỉ định theo mức độ; không tự ý lạm dụng." },
        { q: "Khi nào vào viện?", a: "Sưng lan nhanh, khó nuốt, sốt cao — cấp cứu y tế." },
        { q: "Nhổ hay chữa tủy?", a: "Tùy khả năng giữ răng; bác sĩ tư vấn sau khám." },
        { q: "Đau bao lâu sau dẫn lưu?", a: "Thường giảm rõ trong 24–48 giờ." },
        { q: "Trẻ em bị áp xe?", a: "Cần khám gấp; phác đồ nhi khác người lớn." },
      ],
    },
  },
  // —— Nhổ răng (5) ——
  {
    categorySlug: "nho-rang",
    categoryName: "Nhổ răng",
    image: "/images/service-nho-rang-khon.png",
    facts: {
      name: "Nhổ răng sữa",
      categoryName: "Nhổ răng",
      focusKeyword: "nhổ răng sữa tây ninh",
      definition:
        "Nhổ răng sữa là tháo răng sữa bị sâu nặng, lung lay lâu hoặc giữ chỗ khi răng vĩnh viễn sắp mọc. Thủ thuật nhẹ hơn nhổ răng vĩnh viễn, ưu tiên an toàn và trải nghiệm trẻ em. Có thể kèm spacer giữ khoảng nếu mất sớm.",
      indications:
        "Răng sữa sâu không thể trám/chữa tủy, lung lay quá lâu hoặc nhiễm trùng. Chỉ định theo tuổi và răng kế thay thế. Không nhổ khi còn vai trò giữ chỗ quan trọng mà chưa có kế hoạch.",
      technique:
        "Tê cục bộ hoặc gel tê; dùng forcep nhẹ nhàng; kiểm tra chân răng không gãy sót. Hướng dẫn cắn gauze và theo dõi chảy máu. Spacer nếu mất răng sớm.",
      timeline:
        "15–30 phút mỗi răng. Chảy máu cầm trong 30–60 phút. Răng vĩnh viễn mọc theo lịch sinh lý — tái khám định kỳ.",
      comfort:
        "Tê giảm đau; trẻ có thể sợ — giải thích và phụ huynh đồng hành. Không đau nhiều sau nếu tuân thủ chăm sóc.",
      aftercare:
        "Cắn gauze; không súc mạnh 24h. Ăn mềm, tránh nhai vùng nhổ. Tái khám nếu sưng, sốt hoặc chảy máu kéo dài.",
      pricing:
        "Theo độ khó và có spacer hay không. Báo giá cho phụ huynh trước nhổ.",
      clinicEdge:
        "Nha Khoa Đăng Khoa Tây Ninh nhổ răng sữa nhẹ nhàng, tư vấn spacer và theo dõi răng vĩnh viễn.",
      benefits: [
        "Giải quyết nhiễm trùng, đau cho trẻ",
        "Chuẩn bị mọc răng vĩnh viễn đúng hướng",
        "Tránh biến chứng sâu lan",
        "Trải nghiệm nhi thân thiện",
      ],
      audienceList: [
        "Trẻ răng sữa sâu không cứu được",
        "Răng sữa lung lay lâu gây khó chịu",
        "Phụ huynh được bác sĩ chỉ định nhổ",
        "Trẻ cần spacer sau mất sớm",
      ],
      steps: [
        { title: "Khám & phim", desc: "Đánh giá chân răng và răng thay thế." },
        { title: "Tê & nhổ", desc: "Tháo răng nhẹ, kiểm tra không sót chân." },
        { title: "Cầm máu", desc: "Gauze, hướng dẫn phụ huynh theo dõi." },
        { title: "Kế hoạch sau", desc: "Spacer hoặc hẹn tái khám nhi." },
      ],
      faq: [
        { q: "Nhổ răng sữa có đau?", a: "Có tê; sau nhổ ê nhẹ vài ngày là bình thường." },
        { q: "Mất sớm có sao?", a: "Có thể lệch răng — spacer hoặc chỉnh nha sau." },
        { q: "Bao lâu răng vĩnh viễn mọc?", a: "Tùy từng răng; bác sĩ nói khi khám." },
        { q: "Có cần chụp phim?", a: "Thường có để tránh sót chân." },
        { q: "Trẻ sợ có nhổ được?", a: "Giải thích, tê; chia buổi nếu cần." },
        { q: "Chảy máu bao lâu?", a: "Đa số cầm trong 1 giờ; báo bác sĩ nếu kéo dài." },
      ],
    },
  },
  {
    categorySlug: "nho-rang",
    categoryName: "Nhổ răng",
    image: "/images/service-nho-rang-khon.png",
    facts: {
      name: "Nhổ răng sâu",
      categoryName: "Nhổ răng",
      focusKeyword: "nhổ răng sâu tây ninh",
      definition:
        "Nhổ răng sâu là loại bỏ răng vĩnh viễn bị sâu phá hủy quá nhiều, không thể trám, chữa tủy hoặc phục hình hiệu quả. Giúp loại bỏ ổ nhiễm trùng và chuẩn bị phục hồi (implant, cầu, hàm giả). Quyết định nhổ luôn sau khi cân nhắc phương án bảo tồn.",
      indications:
        "Răng vỡ lớn, sâu chân răng, nhiễm trùng tái phát sau điều trị thất bại. Đau không kiểm soát được bằng điều trị bảo tồn. Bác sĩ tư vấn phương án thay thế trước khi nhổ.",
      technique:
        "Gây tê; nhổ bằng forcep hoặc elevator; có thể cần khâu. Chụp phim trước đánh giá xương và vị trí chân. Hướng dẫn chăm sóc hố nhổ và lên kế hoạch phục hình.",
      timeline:
        "20–40 phút mỗi răng đơn giản. Lành hố 1–2 tuần; xương lành 2–3 tháng trước implant. Phục hình tạm nếu cần thẩm mỹ.",
      comfort:
        "Tê đầy đủ trong nhổ; sau có ê, sưng — thuốc và chường lạnh. Sedation/tê tĩnh mạch cho ca phức tạp khi chỉ định.",
      aftercare:
        "Không súc mạnh, hút thuốc, ống hút 24–48h. Ăn mềm, uống thuốc đúng đơn. Tái khám cấy chỉ và lên kế hoạch implant/cầu.",
      pricing:
        "Theo độ khó nhổ và có tiểu phẫu hay không. Báo giá trước; phục hình tính riêng.",
      clinicEdge:
        "Nha Khoa Đăng Khoa Tây Ninh nhổ an toàn, ít sang chấn và tư vấn implant/cầu ngay sau nhổ.",
      benefits: [
        "Loại bỏ nguồn nhiễm trùng",
        "Giảm đau dai dẳng",
        "Mở đường phục hồi hiện đại",
        "Tránh lan nhiễm răng khác",
      ],
      audienceList: [
        "Răng sâu không thể phục hồi",
        "Răng gãy, nứt chân dọc",
        "Nhiễm trùng sau điều trị thất bại",
        "Khách chuẩn bị implant thay thế",
      ],
      steps: [
        { title: "Khám & phim", desc: "Đánh giá khả năng cứu hay nhổ." },
        { title: "Tê & nhổ", desc: "Tháo răng, làm sạch hố nhổ." },
        { title: "Cầm máu", desc: "Gauze, khâu nếu cần." },
        { title: "Kế hoạch phục hồi", desc: "Tư vấn implant, cầu hoặc hàm giả." },
      ],
      faq: [
        { q: "Có thay bằng implant?", a: "Thường có sau khi xương lành; bác sĩ lên lịch." },
        { q: "Nhổ có đau?", a: "Có tê; sau nhổ ê vài ngày, có thuốc." },
        { q: "Mất bao lâu lành?", a: "Mô mềm 1–2 tuần; xương vài tháng cho implant." },
        { q: "Có nhổ khi đang viêm?", a: "Có thể sau dẫn lưu hoặc kháng sinh theo chỉ định." },
        { q: "Có bọc sứ thay nhổ?", a: "Nếu còn cứu được — bác sĩ ưu tiên bảo tồn." },
        { q: "Hút thuốc sau nhổ?", a: "Nên ngừng ít nhất 48–72h để tránh khô xương." },
      ],
    },
  },
  {
    categorySlug: "nho-rang",
    categoryName: "Nhổ răng",
    image: "/images/service-nho-rang-khon.png",
    facts: {
      name: "Nhổ răng khôn",
      categoryName: "Nhổ răng",
      focusKeyword: "nhổ răng khôn tây ninh",
      definition:
        "Nhổ răng khôn là loại bỏ răng hàm thứ ba mọc lệch, kẹt hoặc gây viêm quanh nướu. Giảm đau tái phát, sưng và nguy cơ tiêu xương răng kế cận. Độ phức tạp phụ thuộc vị trí, góc mọc và tiếp xúc xương hàm.",
      indications:
        "Đau, sưng tái phát, sâu răng khôn khó vệ sinh, tiêu răng số 7. Chỉ định phòng ngừa khi X-quang thấy mọc lệch. Bác sĩ đánh giá dây thần kinh trên phim.",
      technique:
        "Chụp CT/panorama; gây tê hoặc mê; rạch nướu, mài xương, bẻ thân và lấy chân. Khâu và hướng dẫn chường lạnh. Tiểu phẫu khi mọc sâu hoặc ngầm.",
      timeline:
        "45–90 phút mỗi răng; nhiều răng có thể một buổi. Sưng đỉnh 48–72h; lành 7–14 ngày. Tái khám cấy chỉ 7 ngày.",
      comfort:
        "Tê/mê trong phẫu thuật; sau có sưng, há miệng hạn chế — bình thường. Thuốc giảm đau, kháng sinh theo đơn. Nghỉ nhẹ 1–2 ngày nếu cần.",
      aftercare:
        "Chường lạnh, không hút thuốc, không súc mạnh. Ăn mềm lạnh vài ngày. Báo ngay tê vùng môi kéo dài bất thường hoặc chảy máu nhiều.",
      pricing:
        "Theo góc mọc, số răng và có mê hay không. Báo giá sau phim; phí tiểu phẫu cao hơn nhổ đơn giản.",
      clinicEdge:
        "Nha Khoa Đăng Khoa Tây Ninh chụp phim đánh giá thần kinh, nhổ/tiểu phẫu răng khôn và theo dõi sau mổ.",
      benefits: [
        "Giảm đau viêm tái phát",
        "Bảo vệ răng kế cận",
        "Dễ vệ sinh khu vực hàm",
        "Ngăn biến chứng nang, nhiễm trùng",
      ],
      audienceList: [
        "Người răng khôn đau, sưng tái phát",
        "Khách phim thấy mọc lệch, kẹt",
        "Sâu răng khôn không trám được",
        "Bác sĩ chỉ định nhổ phòng ngừa",
      ],
      steps: [
        { title: "Chụp phim", desc: "Panorama/CT đánh giá vị trí, thần kinh." },
        { title: "Gây tê/mê", desc: "An toàn, giải thích rủi ro." },
        { title: "Tiểu phẫu nhổ", desc: "Lấy răng, làm sạch, khâu." },
        { title: "Hậu phẫu", desc: "Thuốc, tái khám, cấy chỉ." },
      ],
      faq: [
        { q: "Nhổ răng khôn có nguy hiểm?", a: "Có rủi ro nhỏ; phim và kỹ thuật giảm tổn thương thần kinh." },
        { q: "Sưng bao lâu?", a: "Đỉnh 2–3 ngày; giảm dần trong 1–2 tuần." },
        { q: "Có cần mê?", a: "Tùy độ phức tạp và lo lắng; bác sĩ tư vấn." },
        { q: "Nhổ một lúc 4 răng?", a: "Có thể; tùy sức khỏe và chỉ định." },
        { q: "Khô xương?", a: "Hiếm; tránh hút thuốc và tuân thủ chăm sóc." },
        { q: "Bao lâu ăn bình thường?", a: "Mềm vài ngày; nhai đầy đủ sau 1–2 tuần tùy ca." },
      ],
    },
  },
  {
    categorySlug: "nho-rang",
    categoryName: "Nhổ răng",
    image: "/images/service-nho-rang-khon.png",
    facts: {
      name: "Tiểu phẫu răng khôn mọc lệch",
      categoryName: "Nhổ răng",
      focusKeyword: "tiểu phẫu răng khôn mọc lệch tây ninh",
      definition:
        "Tiểu phẫu răng khôn mọc lệch là phẫu thuật nhỏ để lấy răng khôn nằm ngầm, nằm ngang hoặc sát dây thần kinh. Khác nhổ đơn giản ở mức mài xương và thời gian. Cần chụp phim chi tiết và kế hoạch an toàn.",
      indications:
        "Răng khôn ngầm, mọc ngang đẩy răng số 7, nang quanh chân hoặc viêm tái phát. Panorama/CT bắt buộc. Chống chỉ định tương đối khi bệnh nền không kiểm soát.",
      technique:
        "Vô trùng; tê tĩnh mạch hoặc tê tại chỗ; flap, mài xương, chia thân, lấy chân, khâu. Có thể dùng máy siêu âm phẫu thuật. Theo dõi chảy máu và sưng sau mổ.",
      timeline:
        "60–120 phút tùy số răng và độ khó. Nghỉ ngơi 1–3 ngày; sưng 3–5 ngày. Tái khám tuần đầu và sau 2 tuần nếu cần.",
      comfort:
        "Mê/tê trong mổ; sau mổ cần thuốc và chường lạnh. Há miệng hạn chế tạm thời. Bác sĩ giải thích rủi ro tê môi, tê lưỡi.",
      aftercare:
        "Không hút thuốc; ăn mềm lạnh; vệ sinh nhẹ quanh vùng khâu. Uống kháng sinh nếu có đơn. Cấp cứu nếu sốt cao, chảy máu không cầm.",
      pricing:
        "Cao hơn nhổ khôn thường; phụ thuộc CT, mê và số răng. Báo giá sau phim và khám.",
      clinicEdge:
        "Nha Khoa Đăng Khoa Tây Ninh tiểu phẫu răng khôn lệch có phim CT, khâu kỹ và tái khám sát.",
      benefits: [
        "Xử lý răng khôn phức tạp an toàn",
        "Giảm nguy cơ tiêu răng số 7",
        "Giải quyết nang, viêm mạn",
        "Giảm đau tái phát dài hạn",
      ],
      audienceList: [
        "Răng khôn ngầm trên phim",
        "Mọc ngang, đau hàm tái phát",
        "Viêm nang quanh chân khôn",
        "Bác sĩ chỉ định tiểu phẫu",
      ],
      steps: [
        { title: "Lập kế hoạch", desc: "CT/panorama, đánh giá thần kinh." },
        { title: "Gây mê/tê", desc: "An toàn, monitor theo dõi." },
        { title: "Phẫu thuật", desc: "Lấy răng, khâu, cầm máu." },
        { title: "Hậu phẫu", desc: "Thuốc, tái khám, hướng dẫn chăm sóc." },
      ],
      faq: [
        { q: "Khác nhổ răng khôn thường?", a: "Phức tạp hơn — mài xương, thời gian và phí cao hơn." },
        { q: "Có bắt buộc mê?", a: "Nhiều ca dùng mê IV hoặc tê kết hợp an thần — tùy chỉ định." },
        { q: "Tê môi bao lâu?", a: "Thường vài tuần tạm; báo ngay nếu kéo dài hoặc tăng." },
        { q: "Nghỉ làm mấy ngày?", a: "Thường 1–3 ngày tùy công việc và mức sưng." },
        { q: "Có cắt chỉ?", a: "Có buổi tái khám 7–10 ngày nếu dùng chỉ không tiêu." },
        { q: "Phí bao gồm gì?", a: "Phẫu thuật, tê; CT/mê có thể tính riêng — hỏi trước khi làm." },
      ],
    },
  },
  {
    categorySlug: "nho-rang",
    categoryName: "Nhổ răng",
    image: "/images/service-nho-rang-khon.png",
    facts: {
      name: "Nhổ chân răng",
      categoryName: "Nhổ răng",
      focusKeyword: "nhổ chân răng tây ninh",
      definition:
        "Nhổ chân răng là tháo phần chân răng còn sót sau nhổ gãy, nhiễm trùng hoặc chân gãy trong ống tủy. Thủ thuật nhỏ nhưng cần kinh nghiệm tránh tổn thương xương và dây thần kinh. Thường kèm làm sạch hố nhổ và khâu.",
      indications:
        "Sót chân sau nhổ răng khôn, chân gãy khi nhổ, viêm quanh chân sót. X-quang xác nhận vị trí chân. Không để sót gây áp xe tái phát.",
      technique:
        "Tê; mở nướu nhẹ hoặc truy cập qua hố nhổ; lấy chân bằng elevator; rửa hố và khâu. Panorama hỗ trợ định vị. Có thể kết hợp với tiểu phẫu vùng hàm.",
      timeline:
        "30–60 phút. Lành tương tự nhổ răng thường 7–10 ngày. Tái khám kiểm tra không còn sót.",
      comfort:
        "Tê cục bộ; ê nhẹ sau như nhổ răng. Ít sưng hơn tiểu phẫu khôn lớn nếu thao tác nhỏ.",
      aftercare:
        "Giống chăm sóc sau nhổ: không súc mạnh, chường lạnh, thuốc theo đơn. Tái khám nếu đau tăng.",
      pricing:
        "Thấp hơn tiểu phẫu khôn; theo độ khó tiếp cận chân. Báo sau phim.",
      clinicEdge:
        "Nha Khoa Đăng Khoa Tây Ninh xử lý sót chân sau nhổ, giảm tái phát nhiễm trùng.",
      benefits: [
        "Loại bỏ ổ nhiễm từ chân sót",
        "Giảm đau, áp xe tái phát",
        "Hoàn tất điều trị nhổ an toàn",
        "Rút ngắn thời gian lành hố",
      ],
      audienceList: [
        "Khách sót chân sau nhổ",
        "Viêm hố nhổ kéo dài",
        "Chân gãy khi nhổ răng",
        "Bác sĩ chỉ định trên phim",
      ],
      steps: [
        { title: "Chẩn đoán phim", desc: "Xác định vị trí, kích thước chân sót." },
        { title: "Tê & truy cập", desc: "Mở đường tiếp cận an toàn." },
        { title: "Lấy chân", desc: "Tháo chân, rửa hố." },
        { title: "Khâu & tái khám", desc: "Đóng vết, kiểm tra lành." },
      ],
      faq: [
        { q: "Sót chân có tự ra?", a: "Không nên chờ; dễ áp xe — nên xử lý sớm." },
        { q: "Có đau nhiều?", a: "Tương tự nhổ nhẹ; có tê và thuốc." },
        { q: "Khác nhổ răng khôn?", a: "Quy mô nhỏ hơn nhưng cần định vị chính xác." },
        { q: "Cần chụp phim?", a: "Có, để tránh bỏ sót lần hai." },
        { q: "Bao lâu lành?", a: "Thường 7–10 ngày cho mô mềm." },
        { q: "Chi phí?", a: "Báo sau khám phim; thường thấp hơn tiểu phẫu khôn." },
      ],
    },
  },

  // —— Thẩm mỹ nha khoa (5) ——
  {
    categorySlug: "tham-my-nha-khoa",
    categoryName: "Thẩm mỹ nha khoa",
    image: "/images/about-rang-su-10000.png",
    facts: {
      name: "Tẩy trắng răng",
      categoryName: "Thẩm mỹ nha khoa",
      focusKeyword: "tẩy trắng răng tây ninh",
      definition:
        "Tẩy trắng răng dùng hoạt chất peroxide an toàn dưới giám sát bác sĩ để làm sáng màu men và ngà. Có tẩy tại phòng khám, tại nhà có khay custom hoặc kết hợp. Kết quả phụ thuộc màu răng gốc và thói quen nhuộm (thuốc lá, cà phê).",
      indications:
        "Răng ố vàng, xỉn màu do thực phẩm hoặc tuổi tác; muốn cải thiện nụ cười trước sự kiện. Không chỉ định khi sâu răng chưa điều trị, viêm nướu nặng hoặc mang thai (tùy phác đồ). Răng sứ, trám composite không tẩy sáng cùng mức.",
      technique:
        "Cạo vôi trước; bôi gel, đèn LED hoặc khay tại nhà theo phác đồ. Bảo vệ nướu bằng barrier. Chụp màu trước/sau để so sánh kỳ vọng.",
      timeline:
        "Tại phòng khám 60–90 phút; tại nhà 7–14 ngày. Duy trì bằng kem bảo dưỡng và hạn chế nhuộm. Tái tẩy sau 6–12 tháng nếu cần.",
      comfort:
        "Có thể ê nhạy cảm tạm 24–48h; dùng kem sensitive. Không đau nếu men khỏe. Bác sĩ điều chỉnh nồng độ cho răng nhạy cảm.",
      aftercare:
        "Trắng đường 48h đầu; chải nhẹ, kem sensitive. Không thuốc lá. Tái khám nếu ê kéo dài.",
      pricing:
        "Theo phương pháp (phòng khám/nhà/kết hợp). Báo giá và số tone sáng kỳ vọng trước khi làm.",
      clinicEdge:
        "Nha Khoa Đăng Khoa Tây Ninh tẩy trắng có kiểm soát, chụp màu và xử lý ê sau tẩy.",
      benefits: [
        "Nụ cười sáng, tươi hơn",
        "Thủ thuật nhanh, không mài răng",
        "Tăng tự tin giao tiếp",
        "Phác đồ tùy chỉnh từng khách",
      ],
      audienceList: [
        "Người răng ố vàng do thực phẩm",
        "Khách chuẩn bị cưới, sự kiện",
        "Người muốn cải thiện thẩm mỹ nhẹ",
        "Khách đã khỏe nền nướu, không sâu",
      ],
      steps: [
        { title: "Khám & chụp màu", desc: "Loại trừ sâu, viêm; ghi màu ban đầu." },
        { title: "Làm sạch", desc: "Cạo vôi, đánh bóng trước tẩy." },
        { title: "Tẩy trắng", desc: "Gel + đèn hoặc cấp khay nhà." },
        { title: "Chăm sóc sau", desc: "Kem sensitive, lịch duy trì." },
      ],
      faq: [
        { q: "Tẩy có hại men?", a: "Đúng chỉ định và liều bác sĩ an toàn; tự tẩy quá mức mới nguy hiểm." },
        { q: "Trắng bao nhiêu tone?", a: "Tùy màu gốc; bác sĩ ước lượng trước." },
        { q: "Răng sứ có tẩy?", a: "Không; chỉ men/ngà tự nhiên." },
        { q: "Ê sau tẩy?", a: "Có thể tạm; dùng kem sensitive." },
        { q: "Mang thai tẩy được?", a: "Thường hoãn; hỏi bác sĩ từng phác đồ." },
        { q: "Duy trì bao lâu?", a: "6–24 tháng tùy thói quen nhuộm." },
      ],
    },
  },
  {
    categorySlug: "tham-my-nha-khoa",
    categoryName: "Thẩm mỹ nha khoa",
    image: "/images/about-rang-su-10000.png",
    facts: {
      name: "Dán sứ Veneer",
      categoryName: "Thẩm mỹ nha khoa",
      focusKeyword: "dán sứ veneer tây ninh",
      definition:
        "Dán sứ Veneer là lớp sứ mỏng gắn mặt ngoài răng cửa để chỉnh màu, hình dáng và khe thưa nhẹ. Ít mài men hơn bọc sứ toàn phần. Cho nụ cười hài hòa khi chỉ định đúng và chăm sóc tốt.",
      indications:
        "Răng xỉn, mẻ nhỏ, thưa nhẹ, hình dáng không đều ở vùng cửa. Không thay thế khi mất cấu trúc lớn hoặc nghiến nặng không kiểm soát. Cần nền nướu khỏe.",
      technique:
        "Mài men tối thiểu, lấy dấu digital hoặc silicone, thử veneer tạm và cement sứ chính hãng. Kiểm tra khớp cắn và màu dưới đèn.",
      timeline:
        "2–3 buổi trong 7–14 ngày. Veneer tạm trong chờ lab. Hoàn tất cement buổi cuối.",
      comfort:
        "Ê nhẹ sau mài; veneer tạm bảo vệ. Không đau khi dán nếu chuẩn bị tốt.",
      aftercare:
        "Tránh cắn cứng bằng răng veneer; chỉ nha khoa cẩn thận. Không mở nắp chai bằng răng. Tái khám nếu bong, ê khớp cắn.",
      pricing:
        "Theo số răng và loại sứ (E.max, zirconia veneer). Báo giá từng răng và lab.",
      clinicEdge:
        "Nha Khoa Đăng Khoa Tây Ninh thiết kế veneer digital, sứ chính hãng và thử màu kỹ.",
      benefits: [
        "Thẩm mỹ tự nhiên, ít mài răng",
        "Chỉnh hình và màu cùng lúc",
        "Bền màu hơn composite thẩm mỹ",
        "Thời gian điều trị ngắn hơn bọc full",
      ],
      audienceList: [
        "Khách muốn nụ cười Hollywood nhẹ",
        "Răng cửa thưa, xỉn, mẻ viền",
        "Người không muốn bọc sứ full",
        "Khách có thói quen vệ sinh tốt",
      ],
      steps: [
        { title: "Tư vấn thiết kế", desc: "Ảnh, màu, mock-up nếu có." },
        { title: "Mài & lấy dấu", desc: "Mài tối thiểu, dấu gửi lab." },
        { title: "Veneer tạm", desc: "Bảo vệ và thử hình dáng." },
        { title: "Dán chính thức", desc: "Cement, chỉnh khớp cắn." },
      ],
      faq: [
        { q: "Veneer bền bao lâu?", a: "10–15 năm hoặc hơn nếu chăm sóc và không nghiến nặng." },
        { q: "Có phải mài răng?", a: "Mài mỏng; ít hơn bọc crown." },
        { q: "Bong veneer?", a: "Hiếm nếu cement đúng; tái dán hoặc làm mới." },
        { q: "Nghiến răng làm được?", a: "Cần máng đêm; bác sĩ đánh giá trước." },
        { q: "Mấy răng nên dán?", a: "Thường 6–10 răng cửa tùy nụ cười." },
        { q: "Giá so bọc sứ?", a: "Veneer/răng có thể tương đương hoặc cao tùy loại sứ." },
      ],
    },
  },
  {
    categorySlug: "tham-my-nha-khoa",
    categoryName: "Thẩm mỹ nha khoa",
    image: "/images/about-rang-su-10000.png",
    facts: {
      name: "Bọc răng sứ thẩm mỹ",
      categoryName: "Thẩm mỹ nha khoa",
      focusKeyword: "bọc răng sứ thẩm mỹ tây ninh",
      definition:
        "Bọc răng sứ thẩm mỹ (crown) phủ toàn bộ răng sau khi mài cùi để phục hồi hình dáng, màu và chức năng. Dùng khi răng yếu sau tủy, mẻ lớn hoặc xỉn nặng không veneer được. Sứ E.max, zirconia cho thẩm mỹ và độ bền cao.",
      indications:
        "Răng sau chữa tủy, mẻ lớn, sứ cũ xấu, nghiến làm vỡ phục hình. Thay thế bọc kim loại cũ gây viền xám nướu. Cần khớp cắn ổn định trước bọc.",
      technique:
        "Mài cùi, lấy dấu, crown tạm; lab làm sứ; thử và cement. Chụp CT/panorama nếu implant abutment.",
      timeline:
        "2–3 buổi, 7–10 ngày chờ lab. Tạm crown trong chờ. Ăn nhẹ phía đối diện khi có tạm.",
      comfort:
        "Ê sau mài vài ngày; crown tạm che nhạy cảm. Không đau khi cement đúng khớp cắn.",
      aftercare:
        "Tránh cắn cứng; chỉ nha khoa quanh crown. Tái khám nếu cao khớp, ê khi nhai.",
      pricing:
        "Theo loại sứ và số răng. Báo giá E.max/zirconia/full contour trước.",
      clinicEdge:
        "Nha Khoa Đăng Khoa Tây Ninh sứ chính hãng, lab uy tín và chỉnh khớp cắn tỉ mỉ.",
      benefits: [
        "Phục hồi thẩm mỹ và độ bền",
        "Che răng yếu sau tủy",
        "Màu ổn định, không viền kim loại",
        "Ăn nhai tự tin hơn",
      ],
      audienceList: [
        "Răng sau chữa tủy cần bọc",
        "Răng mẻ, sứ cũ cần thay",
        "Khách muốn thay bọc kim loại",
        "Người cần phục hình cửa/hàm thẩm mỹ",
      ],
      steps: [
        { title: "Khám & kế hoạch", desc: "Phim, màu, chọn loại sứ." },
        { title: "Mài & dấu", desc: "Mài cùi, crown tạm." },
        { title: "Lab sứ", desc: "Thiết kế màu, hình thể." },
        { title: "Gắn crown", desc: "Thử, cement, chỉnh cắn." },
      ],
      faq: [
        { q: "Bọc sứ có đau?", a: "Tê khi mài; ê nhẹ sau vài ngày." },
        { q: "Sứ nào tốt?", a: "E.max thẩm mỹ; zirconia bền — bác sĩ tư vấn theo vị trí." },
        { q: "Bền bao lâu?", a: "10–15+ năm với vệ sinh tốt." },
        { q: "Viền xám nướu?", a: "Sứ toàn sứ tránh viền kim loại." },
        { q: "Bao lâu có răng?", a: "Crown tạm ngay; sứ 7–10 ngày." },
        { q: "Chỉnh nha xong bọc?", a: "Thường sau khi khớp cắn ổn định." },
      ],
    },
  },
  {
    categorySlug: "tham-my-nha-khoa",
    categoryName: "Thẩm mỹ nha khoa",
    image: "/images/about-rang-su-10000.png",
    facts: {
      name: "Thiết kế nụ cười",
      categoryName: "Thẩm mỹ nha khoa",
      focusKeyword: "thiết kế nụ cười tây ninh",
      definition:
        "Thiết kế nụ cười (smile design) là quy trình phân tích tỷ lệ mặt, nướu, răng và mong muốn để lập phác đồ thẩm mỹ tổng thể — veneer, bọc sứ, chỉnh nướu, tẩy trắng kết hợp. Dùng ảnh, video và mock-up/digital preview trước khi làm thật.",
      indications:
        "Muốn thay đổi nụ cười toàn diện, nhiều răng xỉn/lệch nhẹ/thưa. Diễn viên, MC, kinh doanh cần hình ảnh chuyên nghiệp. Cần khám nền nha chu, khớp cắn trước thẩm mỹ.",
      technique:
        "Chụp ảnh studio, scan intraoral, wax-up hoặc mock-up trong miệng. Thống nhất màu, hình răng, đường nướu. Triển khai từng giai đoạn theo kế hoạch.",
      timeline:
        "Tư vấn 1 buổi; mock-up 1–2 buổi; điều trị 2–6 tuần tùy số hạng mục. Theo dõi sau hoàn tất 1–3 tháng.",
      comfort:
        "Mock-up không xâm lấn; các bước sau tùy veneer/bọc. Bạn thấy preview trước khi cam kết mài răng.",
      aftercare:
        "Theo hướng dẫn từng hạng mục (tẩy, veneer, crown). Duy trì máng nếu nghiến. Tái khám điều chỉnh nhỏ.",
      pricing:
        "Gói tổng theo số răng và dịch vụ kèm theo. Báo giá sau mock-up và thống nhất phác đồ.",
      clinicEdge:
        "Nha Khoa Đăng Khoa Tây Ninh smile design có mock-up, scan và phối hợp chỉnh nha–nha chu.",
      benefits: [
        "Kết quả dự đoán trước khi làm",
        "Hài hòa khuôn mặt và nụ cười",
        "Phối hợp nhiều kỹ thuật một kế hoạch",
        "Tăng sự hài lòng và tự tin",
      ],
      audienceList: [
        "Khách muốn makeover nụ cười",
        "Người nhiều răng xỉn, lệch thẩm mỹ",
        "Khách công việc cần hình ảnh đẹp",
        "Người sau chỉnh nha muốn hoàn thiện",
      ],
      steps: [
        { title: "Phân tích", desc: "Ảnh, scan, thảo luận mong muốn." },
        { title: "Mock-up", desc: "Thử nụ cười tạm trong miệng." },
        { title: "Thống nhất phác đồ", desc: "Chọn veneer, crown, tẩy…" },
        { title: "Triển khai", desc: "Làm theo từng giai đoạn đã ký." },
      ],
      faq: [
        { q: "Smile design có mock-up?", a: "Có; giúp bạn duyệt trước khi mài." },
        { q: "Mất bao lâu?", a: "Vài tuần đến vài tháng tùy phạm vi." },
        { q: "Chỉ tẩy trắng được?", a: "Có thể là một phần phác đồ nhẹ." },
        { q: "Có chỉnh nha không?", a: "Lệch nặng nên chỉnh nha trước hoặc kèm." },
        { q: "Giá cố định?", a: "Báo sau mock-up; phụ thuộc số răng, loại sứ." },
        { q: "Không hài lòng?", a: "Điều chỉnh trong giai đoạn thử; trao đổi với bác sĩ." },
      ],
    },
  },
  {
    categorySlug: "tham-my-nha-khoa",
    categoryName: "Thẩm mỹ nha khoa",
    image: "/images/about-rang-su-10000.png",
    facts: {
      name: "Chỉnh hình răng thẩm mỹ",
      categoryName: "Thẩm mỹ nha khoa",
      focusKeyword: "chỉnh hình răng thẩm mỹ tây ninh",
      definition:
        "Chỉnh hình răng thẩm mỹ là tổng hợp các can thiệp (mài chỉnh cổ, composite bonding, veneer, crown) để cân đối độ dài, đường cười và hình thể răng mà không chỉnh nha dài hạn. Phù hợp lệch nhẹ, gummy smile nhẹ sau khi đánh giá khớp cắn.",
      indications:
        "Răng ngắn dài không đều, méo nhẹ, cạnh cắn mòn. Sau chỉnh nha cần tinh chỉnh thẩm mỹ. Không thay thế chỉnh nha khi lệch khớp cắn nặng.",
      technique:
        "Mài men có kiểm soát, composite hoặc veneer/crown theo mức. Có thể kết hợp laser chỉnh nướu. Scan và thử trước khi hoàn tất.",
      timeline:
        "1–4 buổi trong 1–3 tuần tùy số răng và phương pháp. Không nghỉ dưỡng dài.",
      comfort:
        "Ê nhẹ khi mài; bonding ít ê. Tê khi cần chỉnh nướu.",
      aftercare:
        "Tránh cắn cứng vùng bonding/veneer. Chải mềm. Tái khám chỉnh khớp cắn.",
      pricing:
        "Theo số răng và kỹ thuật (bonding vs sứ). Báo sau khám và mock-up.",
      clinicEdge:
        "Nha Khoa Đăng Khoa Tây Ninh chỉnh hình thẩm mỹ có scan, thử màu và phối hợp chỉnh nha khi cần.",
      benefits: [
        "Cải thiện đường cười nhanh",
        "Giải pháp lệch nhẹ không niềng dài",
        "Tinh chỉnh sau chỉnh nha",
        "Kết hợp nhiều kỹ thuật linh hoạt",
      ],
      audienceList: [
        "Răng lệch nhẹ không muốn niềng",
        "Cạnh răng mòn, không đều",
        "Sau niềng cần hoàn thiện",
        "Khách muốn chỉnh cổ răng, độ dài",
      ],
      steps: [
        { title: "Phân tích khớp cắn", desc: "Loại trừ cần chỉnh nha trước." },
        { title: "Thiết kế", desc: "Ảnh, scan, thống nhất hình thể." },
        { title: "Thực hiện", desc: "Bonding, veneer hoặc mài chỉnh." },
        { title: "Hoàn thiện", desc: "Đánh bóng, chỉnh khớp cắn." },
      ],
      faq: [
        { q: "Khác chỉnh nha?", a: "Chỉnh hình thẩm mỹ cho lệch nhẹ; lệch nặng cần niềng." },
        { q: "Có mài răng?", a: "Tối thiểu tùy phương án; bonding ít mài nhất." },
        { q: "Bền bao lâu?", a: "Bonding vài năm; sứ lâu hơn." },
        { q: "Gummy smile?", a: "Có thể kèm chỉnh nướu laser khi chỉ định." },
        { q: "Một buổi xong?", a: "Bonding có thể; sứ cần nhiều buổi." },
        { q: "Giá?", a: "Báo sau khám — thấp hơn niềng full nhưng tùy số răng sứ." },
      ],
    },
  },
  // —— Phục hình răng (5) ——
  {
    categorySlug: "phuc-hinh-rang",
    categoryName: "Phục hình răng",
    image: "/images/about-rang-su-10000.png",
    facts: {
      name: "Làm cầu răng sứ",
      categoryName: "Phục hình răng",
      focusKeyword: "làm cầu răng sứ tây ninh",
      definition:
        "Cầu răng sứ là phục hình cố định gắn trên răng trụ hai bên khoảng mất, che khoảng mất 1–3 răng bằng nhịp giả giữa. Thay thế hàm tháo lắp khi muốn cố định và có răng trụ khỏe. Cần mài răng trụ và vệ sinh kỹ dưới nhịp.",
      indications:
        "Mất 1–2 răng liền kề, răng trụ khỏe, không muốn implant ngay. Răng trụ đã chữa tủy cần bọc. Bác sĩ đánh giá xương và khớp cắn trước làm cầu.",
      technique:
        "Mài trụ, lấy dấu, cầu tạm; lab làm sứ; cement cố định. Tư vấn chỉ superfloss dưới nhịp.",
      timeline:
        "2–3 buổi, 7–10 ngày lab. Cầu tạm trong chờ. Lành nướu quanh trụ 1–2 tuần.",
      comfort:
        "Ê sau mài trụ; không tháo được tự ý. Khớp cắn chỉnh kỹ buổi gắn.",
      aftercare:
        "Vệ sinh dưới nhịp bằng chỉ superfloss; khám định kỳ. Tránh cắn cứng bằng nhịp giả.",
      pricing:
        "Theo số nhịp và loại sứ trụ. Báo giá trụ + pontic riêng.",
      clinicEdge:
        "Nha Khoa Đăng Khoa Tây Ninh làm cầu sứ chính hãng, hướng dẫn vệ sinh dưới cầu.",
      benefits: [
        "Phục hình cố định không tháo",
        "Thẩm mỹ sứ tự nhiên",
        "Thời gian nhanh hơn implant một số ca",
        "Ăn nhai tốt hơn hàm tháo",
      ],
      audienceList: [
        "Mất 1–2 răng có trụ kề",
        "Không muốn phẫu thuật implant",
        "Răng trụ đã bọc hoặc cần bọc",
        "Muốn phục hình cố định",
      ],
      steps: [
        { title: "Khám trụ", desc: "Phim, đánh giá trụ và khớp cắn." },
        { title: "Mài trụ & dấu", desc: "Bọc tạm, gửi lab." },
        { title: "Thử cầu", desc: "Kiểm tra khít, màu, khớp cắn." },
        { title: "Gắn cố định", desc: "Cement và hướng dẫn vệ sinh." },
      ],
      faq: [
        { q: "Cầu vs implant?", a: "Cầu cần mài trụ; implant không mài răng kề — bác sĩ tư vấn." },
        { q: "Bền bao lâu?", a: "7–10+ năm với vệ sinh tốt." },
        { q: "Vệ sinh thế nào?", a: "Chỉ superfloss/bàn chải đặc dưới nhịp." },
        { q: "Trụ yếu?", a: "Cần điều trị tủy/bọc hoặc cân nhắc implant." },
        { q: "Mất 3 răng?", a: "Cầu dài hạn chế; implant hoặc nhiều phương án." },
        { q: "Tháo được?", a: "Cố định; chỉ bác sĩ tháo khi sửa." },
      ],
    },
  },
  {
    categorySlug: "phuc-hinh-rang",
    categoryName: "Phục hình răng",
    image: "/images/about-rang-su-10000.png",
    facts: {
      name: "Hàm tháo lắp",
      categoryName: "Phục hình răng",
      focusKeyword: "hàm tháo lắp tây ninh",
      definition:
        "Hàm tháo lắp (removable denture) thay thế nhiều răng mất hoặc toàn hàm, có thể tháo để vệ sinh. Gồm hàm nhựa, hàm khung hoặc hàm essex tùy số răng còn. Phục hồi ăn nhai và thẩm mỹ với chi phí thấp hơn implant toàn hàm.",
      indications:
        "Mất nhiều răng, không đủ điều kiện implant ngay, hoặc tạm thời chờ ghép. Người cao tuổi cần phục hình nhanh. Cần điều chỉnh sau nhổ hàng loạt.",
      technique:
        "Lấy dấu, thử khung/hàm, chỉnh khớp cắn và polish. Hàm ngay (immediate) hoặc chờ lành hố sau nhổ.",
      timeline:
        "3–5 buổi trong 2–4 tuần; hàm ngay trong 24–48h sau nhổ nếu chỉ định. Chỉnh đau điểm 1–2 tuần đầu.",
      comfort:
        "Lạ ban đầu, có thể tróc nhẹ; chỉnh điểm áp đau. Nói lắp tạm vài tuần.",
      aftercare:
        "Tháo vệ sinh đêm; ngâm nước sạch. Không ngủ đeo (trừ chỉ định). Tái chỉnh khi lỏng sau tiêu xương.",
      pricing:
        "Theo loại hàm (nhựa, khung, từng hàm). Báo giá sau khám và số răng mất.",
      clinicEdge:
        "Nha Khoa Đăng Khoa Tây Ninh hàm tháo lắp chỉnh khớp cắn kỹ, tái chỉnh miễn phí giai đoạn đầu.",
      benefits: [
        "Phục hình nhanh, chi phí hợp lý",
        "Tháo vệ sinh dễ",
        "Cải thiện ăn nhai và nói",
        "Giải pháp tạm chờ implant",
      ],
      audienceList: [
        "Mất nhiều răng hoặc toàn hàm",
        "Người cao tuổi cần hàm giả",
        "Chờ implant cần hàm tạm",
        "Không đủ kinh phí implant ngay",
      ],
      steps: [
        { title: "Khám & kế hoạch", desc: "Đánh giá xương, nướu, loại hàm." },
        { title: "Lấy dấu", desc: "Dấu thức ăn, thử khung." },
        { title: "Thử & chỉnh", desc: "Thử hàm, khớp cắn, thẩm mỹ." },
        { title: "Bàn giao", desc: "Hướng dẫn đeo, vệ sinh, tái chỉnh." },
      ],
      faq: [
        { q: "Đau khi mới đeo?", a: "Có điểm áp — tái chỉnh vài lần bình thường." },
        { q: "Ăn được không?", a: "Ăn mềm trước; nhai tốt hơn sau thích nghi." },
        { q: "Bao lâu thay hàm?", a: "5–7 năm hoặc khi lỏng do tiêu xương." },
        { q: "Ngủ có đeo?", a: "Thường tháo đêm để nướu nghỉ." },
        { q: "Hàm ngay?", a: "Có sau nhổ; cần chỉnh nhiều lần." },
        { q: "So với implant?", a: "Rẻ hơn, tháo được; implant ổn định hơn." },
      ],
    },
  },
  {
    categorySlug: "phuc-hinh-rang",
    categoryName: "Phục hình răng",
    image: "/images/about-rang-su-10000.png",
    facts: {
      name: "Hàm khung liên kết",
      categoryName: "Phục hình răng",
      focusKeyword: "hàm khung liên kết tây ninh",
      definition:
        "Hàm khung liên kết (metal partial) dùng khung kim loại và móc ôm răng thật còn lại, gắn răng giả nhựa/acrylic. Bền, mỏng hơn hàm nhựa toàn bộ, giữ lực nhai qua răng thật. Cần răng trụ khỏe và vệ sinh móc.",
      indications:
        "Mất một phần răng còn nhiều răng trụ tốt. Khách muốn hàm bền, ăn nhai tốt hơn hàm nhựa. Không phù hợp khi trụ yếu lung lay.",
      technique:
        "Khảo sát móc, surveyor; dấu, thử khung và thử răng; hoàn tất và chỉnh khớp cắn.",
      timeline:
        "4–6 buổi trong 3–4 tuần. Thích nghi 2–4 tuần. Tái chỉnh điểm áp.",
      comfort:
        "Móc có thể gây khó chịu ban đầu; chỉnh móc và polish. Mỏng hơn hàm nhựa dày.",
      aftercare:
        "Tháo vệ sinh; chải răng thật và móc. Khám định kỳ kiểm tra trụ. Tránh cắn cứng bằng răng giả.",
      pricing:
        "Cao hơn hàm nhựa; theo số răng giả và kim loại. Báo sau khảo sát.",
      clinicEdge:
        "Nha Khoa Đăng Khoa Tây Ninh hàm khung thiết kế móc kín, ít lộ và chỉnh khớp cắn chuẩn.",
      benefits: [
        "Bền, ổn định hơn hàm nhựa",
        "Ăn nhai tốt nhờ răng thật",
        "Mỏng, thoải mái hơn",
        "Dễ sửa chữa, bổ sung răng",
      ],
      audienceList: [
        "Mất răng một phần còn trụ tốt",
        "Khách từng dùng hàm nhựa muốn nâng cấp",
        "Cần phục hình bền vừa chi phí",
        "Không đủ điều kiện implant nhiều răng",
      ],
      steps: [
        { title: "Khảo sát", desc: "Đánh giá trụ, thiết kế móc." },
        { title: "Dấu & thử khung", desc: "Thử khung kim loại." },
        { title: "Thử răng", desc: "Thử màu, hình, khớp cắn." },
        { title: "Hoàn tất", desc: "Giao hàm, hướng dẫn chăm sóc." },
      ],
      faq: [
        { q: "Móc có lộ?", a: "Thiết kế kín giảm lộ; tư vấn trước." },
        { q: "Khác hàm nhựa?", a: "Khung kim loại bền, mỏng hơn." },
        { q: "Trụ lung lay?", a: "Cần điều trị trụ trước hoặc đổi phương án." },
        { q: "Bao lâu làm?", a: "Thường 3–4 tuần." },
        { q: "Sửa được?", a: "Có thể hàn thêm răng giả trên khung." },
        { q: "Giá?", a: "Cao hơn hàm nhựa; báo sau khám." },
      ],
    },
  },
  {
    categorySlug: "phuc-hinh-rang",
    categoryName: "Phục hình răng",
    image: "/images/about-rang-su-10000.png",
    facts: {
      name: "Răng giả bán phần",
      categoryName: "Phục hình răng",
      focusKeyword: "răng giả bán phần tây ninh",
      definition:
        "Răng giả bán phần thay thế một vài răng mất trên hàm còn nhiều răng, thường bằng hàm nhựa có móc hoặc khung. Phục hình tháo lắp linh hoạt, dễ bổ sung. Phù hợp khoảng mất nhỏ đến trung bình.",
      indications:
        "Mất 2–4 răng rải rác, trụ còn ổn. Tạm thời sau nhổ chờ implant. Người cao tuổi cần giải pháp nhanh.",
      technique:
        "Dấu, thử, chọn màu răng giả; hoàn tất hàm nhựa hoặc flexible partial tùy chỉ định.",
      timeline:
        "2–4 tuần, 3–4 buổi. Chỉnh đau điểm sau giao.",
      comfort:
        "Lạ ban đầu; móc áp nhẹ — chỉnh lại. Nói thích nghi vài ngày.",
      aftercare:
        "Tháo vệ sinh; ngâm sạch. Chăm sóc răng thật kỹ để giữ trụ.",
      pricing:
        "Theo số răng giả và vật liệu. Rẻ hơn khung kim loại.",
      clinicEdge:
        "Nha Khoa Đăng Khoa Tây Ninh răng giả bán phần chỉnh kỹ, tái khám chỉnh miễn phí giai đoạn đầu.",
      benefits: [
        "Che khoảng mất nhanh",
        "Chi phí phù hợp",
        "Tháo vệ sinh",
        "Bổ sung dễ khi mất thêm răng",
      ],
      audienceList: [
        "Mất vài răng rải rác",
        "Chờ implant cần hàm tạm",
        "Người cao tuổi",
        "Ngân sách hạn chế",
      ],
      steps: [
        { title: "Khám", desc: "Đánh giá khoảng mất và trụ." },
        { title: "Dấu", desc: "Lấy dấu, chọn màu." },
        { title: "Thử", desc: "Thử hàm, chỉnh khớp cắn." },
        { title: "Giao hàm", desc: "Hướng dẫn đeo và vệ sinh." },
      ],
      faq: [
        { q: "Khác hàm khung?", a: "Thường nhựa/móc; khung kim bền hơn." },
        { q: "Ăn được?", a: "Ăn mềm rồi tăng dần; không cắn cứng bằng giả." },
        { q: "Lỏng sau vài tháng?", a: "Có thể chỉnh lót (reline)." },
        { q: "Một hàm hay hai?", a: "Tùy mất răng từng hàm." },
        { q: "Bảo hành?", a: "Theo chính sách; chỉnh điểm áp miễn phí giai đoạn đầu." },
        { q: "Thời gian?", a: "Khoảng 2–4 tuần." },
      ],
    },
  },
  {
    categorySlug: "phuc-hinh-rang",
    categoryName: "Phục hình răng",
    image: "/images/about-rang-su-10000.png",
    facts: {
      name: "Răng giả toàn hàm",
      categoryName: "Phục hình răng",
      focusKeyword: "răng giả toàn hàm tây ninh",
      definition:
        "Răng giả toàn hàm (complete denture) thay thế toàn bộ răng trên một hàm khi mất hết. Dựa vào xương ổ và nướu để giữ; có thể kèm implant overdenture để ổn định hơn. Phục hồi nhai, nói và nụ cười toàn hàm.",
      indications:
        "Mất toàn bộ răng một/both hàm. Không đủ xương implant ngay hoặc chọn giải pháp kinh tế. Hàm cũ lỏng cần làm mới hoặc reline.",
      technique:
        "Dấu nhiều bước, thử khung thử răng, thử sáp, hoàn tất acrylic. Implant locator nếu có kế hoạch overdenture.",
      timeline:
        "4–6 buổi, 4–6 tuần. Hàm ngay sau nhổ nếu chỉ định. Tiêu xương làm lỏng — reline sau 6–12 tháng.",
      comfort:
        "Tróc, lạ ban đầu; cần kiên trì và tái chỉnh. Implant hỗ trợ giảm tróc đáng kể.",
      aftercare:
        "Tháo đêm; vệ sinh hàm và nướu. Khám định kỳ. Reline khi lỏng.",
      pricing:
        "Theo từng hàm, hàm ngay, implant overdenture (riêng). Báo sau khám.",
      clinicEdge:
        "Nha Khoa Đăng Khoa Tây Ninh toàn hàm chỉnh khớp cắn, tư vấn implant hỗ trợ khi cần.",
      benefits: [
        "Phục hình khi mất hết răng",
        "Cải thiện ăn nhai, thẩm mỹ",
        "Có thể nâng cấp implant sau",
        "Chi phí thấp hơn implant full",
      ],
      audienceList: [
        "Mất hết răng một/both hàm",
        "Hàm cũ lỏng, đau",
        "Chờ implant cần hàm tạm",
        "Người cao tuổi cần nhai lại",
      ],
      steps: [
        { title: "Đánh giá ổ", desc: "Xương, nướu, có implant không." },
        { title: "Dấu & thử", desc: "Thử khung, thử răng, thử sáp." },
        { title: "Hoàn tất", desc: "Đóng hàm acrylic." },
        { title: "Theo dõi", desc: "Chỉnh điểm, reline khi cần." },
      ],
      faq: [
        { q: "Tróc nhiều?", a: "Ban đầu thường tróc; reline hoặc implant giúp giữ." },
        { q: "Hàm ngay?", a: "Có; chỉnh nhiều sau khi xương co." },
        { q: "Bao lâu thay?", a: "5–7 năm hoặc reline trước." },
        { q: "Implant 2–4 ốc?", a: "Overdenture ổn định hơn hẳn." },
        { q: "Nói lắp?", a: "Tạm vài tuần; luyện đọc to." },
        { q: "Giá một hàm?", a: "Báo từng hàm; hai hàm có gói." },
      ],
    },
  },

  // —— Implant (5) ——
  {
    categorySlug: "implant",
    categoryName: "Implant",
    image: "/images/service-implant.png",
    facts: {
      name: "Trồng răng Implant đơn lẻ",
      categoryName: "Implant",
      focusKeyword: "trồng răng implant đơn lẻ tây ninh",
      definition:
        "Trồng răng Implant đơn lẻ thay thế một răng mất bằng trụ titanium cấy xương và crown sứ gắn trên abutment. Không mài răng kề như cầu răng. Cho cảm giác ăn nhai gần răng thật khi tích hợp xương thành công.",
      indications:
        "Mất một răng, xương đủ hoặc ghép xương được, nướu khỏe. Không muốn làm cầu mài trụ. Chờ lành xương 3–6 tháng trước bọc sứ (trừ tức thì khi chỉ định).",
      technique:
        "CT đánh giá; phẫu thuật cấy implant; chờ osseointegration; gắn abutment và crown sứ. Có thể immediate placement sau nhổ.",
      timeline:
        "Phẫu thuật 1 buổi; lành xương 3–6 tháng; crown 1–2 tuần lab. Tức thì có răng tạm tùy ca.",
      comfort:
        "Tê/mê khi cấy; sưng nhẹ vài ngày. Không đau khi nhai sau khi crown đúng khớp cắn.",
      aftercare:
        "Vệ sinh quanh implant như răng thật; chỉ đặc biệt. Không hút thuốc. Tái khám 3–6 tháng.",
      pricing:
        "Trụ + abutment + crown; ghép xương tính riêng. Báo sau CT.",
      clinicEdge:
        "Nha Khoa Đăng Khoa Tây Ninh implant chính hãng, CT lập kế hoạch và crown sứ nội bộ.",
      benefits: [
        "Không mài răng kề",
        "Ăn nhai ổn định, lâu dài",
        "Thẩm mỹ sứ tự nhiên",
        "Ngăn tiêu xương vùng mất răng",
      ],
      audienceList: [
        "Mất một răng có xương đủ",
        "Không muốn cầu răng",
        "Sức khỏe cho phép phẫu thuật nhỏ",
        "Khách dài hạn đầu tư răng miệng",
      ],
      steps: [
        { title: "CT & kế hoạch", desc: "Đánh giá xương, chọn implant." },
        { title: "Cấy implant", desc: "Phẫu thuật, khâu, thuốc." },
        { title: "Lành xương", desc: "Theo dõi 3–6 tháng." },
        { title: "Crown sứ", desc: "Abutment, dấu, gắn răng sứ." },
      ],
      faq: [
        { q: "Implant có đau?", a: "Tê khi cấy; sưng nhẹ vài ngày bình thường." },
        { q: "Bao lâu có răng?", a: "3–6 tháng; tức thì có tạm một số ca." },
        { q: "Thất bại implant?", a: "Hiếm; hút thuốc và vệ sinh kém tăng rủi ro." },
        { q: "Tuổi nào?", a: "Người trưởng thành xương ổn định; bác sĩ đánh giá." },
        { q: "Giá gồm gì?", a: "Trụ, abutment, crown; ghép xương riêng." },
        { q: "So với cầu?", a: "Đắt hơn ban đầu; không mài trụ, bền hơn lâu dài." },
      ],
    },
  },
  {
    categorySlug: "implant",
    categoryName: "Implant",
    image: "/images/service-implant.png",
    facts: {
      name: "Trồng răng Implant toàn hàm",
      categoryName: "Implant",
      focusKeyword: "trồng răng implant toàn hàm tây ninh",
      definition:
        "Implant toàn hàm (All-on-4/6 hoặc tương đương) cố định hàm răng trên 4–6 trụ mỗi hàm cho người mất hết răng. Thay hàm tháo lắp tróc, ăn nhai mạnh hơn. Cần CT và kế hoạch phẫu thuật – phục hình phối hợp.",
      indications:
        "Mất toàn hàm, xương đủ hoặc ghép được; muốn răng cố định. Hàm giả lỏng, không chịu được. Sức khỏe cho phép phẫu thuật nhiều trụ.",
      technique:
        "CT; nhổ răng còn (nếu có); cấy 4–6 implant; gắn bar hoặc screw-retained prosthesis tạm/chính. Lab làm hàm acrylic/zirconia.",
      timeline:
        "Phẫu thuật 1 ngày; răng tạm trong 24–72h; hàm chính sau 3–6 tháng. Nhiều buổi tái khám.",
      comfort:
        "Mê/tê trong phẫu thuật; sưng vài ngày. Thích nghi nhai vài tuần. Không tháo tự ý — bác sĩ bảo dưỡng.",
      aftercare:
        "Vệ sinh superfloss, tăm đặc; khám định kỳ siết ốc. Không hút thuốc. Chế độ ăn mềm giai đoạn đầu.",
      pricing:
        "Theo số implant/hàm và loại hàm (acrylic/zirconia). Báo sau CT toàn diện.",
      clinicEdge:
        "Nha Khoa Đăng Khoa Tây Ninh lập kế hoạch All-on, lab phối hợp và theo dõi screw-retained.",
      benefits: [
        "Răng cố định toàn hàm",
        "Ăn nhai tốt hơn hàm tháo",
        "Thẩm mỹ nụ cười toàn diện",
        "Giảm tiêu xương có kiểm soát",
      ],
      audienceList: [
        "Mất hết răng một/both hàm",
        "Hàm tháo lắp không ổn",
        "Muốn cố định không tróc",
        "Đủ xương hoặc chấp nhận ghép",
      ],
      steps: [
        { title: "CT toàn hàm", desc: "Thiết kế vị trí implant." },
        { title: "Phẫu thuật", desc: "Cấy 4–6 trụ, gắn tạm." },
        { title: "Lành & điều chỉnh", desc: "Theo dõi, ăn mềm." },
        { title: "Hàm chính", desc: "Zirconia/acrylic cố định." },
      ],
      faq: [
        { q: "All-on-4 là gì?", a: "4 implant/hàm nghiêng — giảm ghép xương một số ca." },
        { q: "Tháo được?", a: "Bác sĩ tháo bảo dưỡng; bệnh nhân không tự tháo." },
        { q: "Mất bao lâu?", a: "Răng tạm vài ngày; chính 3–6 tháng." },
        { q: "Đau nhiều?", a: "Mê trong mổ; sưng vài ngày có thuốc." },
        { q: "Giá?", a: "Theo hàm, số trụ, vật liệu hàm — báo sau CT." },
        { q: "Hút thuốc?", a: "Tăng rủi ro thất bại — nên bỏ." },
      ],
    },
  },
  {
    categorySlug: "implant",
    categoryName: "Implant",
    image: "/images/service-implant.png",
    facts: {
      name: "Cấy ghép Implant tức thì",
      categoryName: "Implant",
      focusKeyword: "cấy ghép implant tức thì tây ninh",
      definition:
        "Cấy ghép Implant tức thì đặt trụ ngay sau nhổ răng trong cùng buổi (hoặc vài ngày), có thể gắn răng tạm. Rút ngắn thời gian không có răng. Chỉ định chọn lọc — cần xương và nhiễm trùng kiểm soát.",
      indications:
        "Nhổ răng có xương ổ đủ, không nhiễm trùng nặng. Vùng cửa thẩm mỹ cần răng tạm. Bác sĩ đánh giá primary stability trên phim và lâm sàng.",
      technique:
        "Nhổ atraumatic; cấy implant đúng kích thước; có thể graft socket; gắn crown tạm không cắn. CT trước bắt buộc.",
      timeline:
        "Một buổi nhổ + cấy; tạm ngay hoặc 48h. Crown chính sau 3–6 tháng. Hạn chế nhai vùng tạm.",
      comfort:
        "Tương tự nhổ + cấy; sưng vài ngày. Không nhai cứng vùng implant tạm.",
      aftercare:
        "Ăn mềm; vệ sinh nhẹ; không hút thuốc. Tái khám sát tuần đầu.",
      pricing:
        "Cao hơn cấy trì hoãn; gồm nhổ, trụ, tạm. Báo sau CT.",
      clinicEdge:
        "Nha Khoa Đăng Khoa Tây Ninh immediate implant có CT, chọn ca và crown tạm thẩm mỹ.",
      benefits: [
        "Rút ngắn thời gian mất răng",
        "Giữ xương ổ nhờ implant",
        "Thẩm mỹ tạm ngay vùng cửa",
        "Một buổi nhổ và cấy",
      ],
      audienceList: [
        "Nhổ răng cần thay ngay",
        "Xương ổ đủ, ít nhiễm",
        "Khách cần răng tạm thẩm mỹ",
        "Bác sĩ chỉ định immediate",
      ],
      steps: [
        { title: "CT & chọn ca", desc: "Đánh giá xương, nhiễm." },
        { title: "Nhổ & cấy", desc: "Nhổ nhẹ, cấy trụ tức thì." },
        { title: "Tạm (nếu có)", desc: "Crown tạm không tải nhai." },
        { title: "Theo dõi", desc: "Tái khám, crown chính sau." },
      ],
      faq: [
        { q: "Ai đều tức thì được?", a: "Không; cần xương, ổn định ban đầu tốt." },
        { q: "Có răng ngay?", a: "Nhiều ca có tạm; không nhai cứng." },
        { q: "Rủi ro?", a: "Cao hơn trì hoãn nếu chọn ca sai — cần bác sĩ giàu kinh nghiệm." },
        { q: "Thất bại?", a: "Vệ sinh, không hút thuốc, tái khám giảm rủi ro." },
        { q: "Giá?", a: "Cao hơn cấy thường; báo gói sau CT." },
        { q: "Khác cấy thường?", a: "Cùng buổi nhổ; tạm sớm hơn." },
      ],
    },
  },
  {
    categorySlug: "implant",
    categoryName: "Implant",
    image: "/images/service-implant.png",
    facts: {
      name: "Ghép xương Implant",
      categoryName: "Implant",
      focusKeyword: "ghép xương implant tây ninh",
      definition:
        "Ghép xương Implant bổ sung thể tích xương hàm khi tiêu xương sau mất răng, không đủ che phủ trụ. Dùng xương tự thân, xương đồng loại hoặc vật liệu thay thế. Chờ lành 4–9 tháng trước cấy implant (hoặc kết hợp tùy kỹ thuật).",
      indications:
        "CT thấy chiều cao/ngang xương không đủ. Sau nhổ lâu ngày, nhiễm trùng cũ. Kèm nâng xoang hàm trên khi cần.",
      technique:
        "Phẫu thuật mở vùng ghép, đặt vật liệu, màng PRF/membrane, khâu. Có thể block graft hoặc particulate. CT theo dõi lành.",
      timeline:
        "Phẫu thuật 1–2 buổi; lành 4–9 tháng; sau đó cấy implant. Một số kỹ thuật ghép đồng thời cấy.",
      comfort:
        "Sưng, bầm vài ngày; thuốc giảm đau. Không nhai vùng phẫu thuật.",
      aftercare:
        "Không hút thuốc; ăn mềm; không súc mạnh. Tái khám theo lịch; CT trước cấy implant.",
      pricing:
        "Theo vật liệu, vùng ghép và có nâng xoang. Báo sau CT.",
      clinicEdge:
        "Nha Khoa Đăng Khoa Tây Ninh ghép xương có CT, vật liệu rõ nguồn và lộ trình implant sau ghép.",
      benefits: [
        "Tạo điều kiện cấy implant an toàn",
        "Khôi phục thể tích xương mất",
        "Giảm rủi ro thất bại implant",
        "Mở rộng chỉ định cho khách thiếu xương",
      ],
      audienceList: [
        "CT thiếu xương cấy implant",
        "Mất răng lâu, tiêu xương",
        "Sau nhiễm trùng, nhổ khôn",
        "Chuẩn bị implant vùng sau hàm",
      ],
      steps: [
        { title: "CT đánh giá", desc: "Đo xương, chọn kỹ thuật ghép." },
        { title: "Phẫu thuật ghép", desc: "Đặt xương/vật liệu, khâu." },
        { title: "Lành xương", desc: "Theo dõi 4–9 tháng." },
        { title: "Cấy implant", desc: "Khi xương đủ trên CT." },
      ],
      faq: [
        { q: "Ghép xương đau?", a: "Sưng vài ngày; có thuốc và tê." },
        { q: "Bao lâu cấy implant?", a: "Thường 4–9 tháng; tùy kỹ thuật." },
        { q: "Xương tự thân?", a: "Có nhiều lựa chọn; bác sĩ tư vấn." },
        { q: "100% thành công?", a: "Không; hút thuốc và bệnh nền ảnh hưởng." },
        { q: "Ghép + cấy một lúc?", a: "Một số ca được; phụ thuộc xương ban đầu." },
        { q: "Giá?", a: "Theo vùng và vật liệu; báo sau CT." },
      ],
    },
  },
  {
    categorySlug: "implant",
    categoryName: "Implant",
    image: "/images/service-implant.png",
    facts: {
      name: "Nâng xoang Implant",
      categoryName: "Implant",
      focusKeyword: "nâng xoang implant tây ninh",
      definition:
        "Nâng xoang (sinus lift) nâng màng xoang hàm trên, ghép xương dưới xoang để đủ chiều cao cấy implant răng sau hàm trên. Kỹ thuật trong xoang hoặc ngoài xoang tùy mức tiêu xương. Cần CT đánh giá khoang xoang.",
      indications:
        "Mất răng sau hàm trên lâu, xoang phình làm xương mỏng. CT chiều cao xương < 8–10mm cần nâng. Viêm xoang cần điều trị trước.",
      technique:
        "Mở vùng tiếp cận; bóc màng nhẹ; ghép xương; khâu. Crestal hoặc lateral approach. Chờ lành trước cấy hoặc đồng thời tùy ca.",
      timeline:
        "Phẫu thuật 1 buổi; lành 6–9 tháng trước implant (một số kết hợp). Sưng mặt vài ngày.",
      comfort:
        "Không xịt mũi mạnh vài tuần; tránh bay máy bay sớm nếu bác sĩ khuyên. Đau/sưng kiểm soát bằng thuốc.",
      aftercare:
        "Thuốc theo đơn; không hút; tránh thổi kèn, ống hút. Tái khám; CT trước cấy implant.",
      pricing:
        "Theo kỹ thuật (trong/ngoài xoang) và vật liệu. Báo sau CT.",
      clinicEdge:
        "Nha Khoa Đăng Khoa Tây Ninh nâng xoang có CT, phối hợp implant sau khi xương ổn.",
      benefits: [
        "Cho phép implant răng sau hàm trên",
        "Tăng chiều cao xương an toàn",
        "Giải pháp sau mất răng lâu năm",
        "Kế hoạch rõ trên CT",
      ],
      audienceList: [
        "Mất răng sau hàm trên, xương mỏng",
        "CT cần nâng xoang",
        "Chuẩn bị implant vùng sau",
        "Đã điều trị viêm xoang ổn",
      ],
      steps: [
        { title: "CT xoang", desc: "Đánh giá khoang, màng." },
        { title: "Phẫu thuật", desc: "Nâng màng, ghép xương." },
        { title: "Lành", desc: "6–9 tháng hoặc theo phác đồ." },
        { title: "Cấy implant", desc: "Khi đủ xương trên phim." },
      ],
      faq: [
        { q: "Nâng xoang đau?", a: "Sưng mặt vài ngày; có thuốc." },
        { q: "Viêm xoang?", a: "Cần điều trị ổn trước mổ." },
        { q: "Bay máy bay?", a: "Hỏi bác sĩ — thường chờ lành." },
        { q: "Xịt mũi?", a: "Tránh mạnh vài tuần theo hướng dẫn." },
        { q: "Cấy cùng lúc?", a: "Một số ca crestal lift + cấy ngay." },
        { q: "Giá?", a: "Báo sau CT; kèm ghép xương." },
      ],
    },
  },
  // —— Niềng răng – Chỉnh nha (5) ——
  {
    categorySlug: "nieng-rang",
    categoryName: "Niềng răng – Chỉnh nha",
    image: "/images/service-nieng-rang.png",
    facts: {
      name: "Niềng răng mắc cài kim loại",
      categoryName: "Niềng răng – Chỉnh nha",
      focusKeyword: "niềng răng mắc cài kim loại tây ninh",
      definition:
        "Niềng răng mắc cài kim loại dùng bracket và dây cung kim loại gắn mặt ngoài răng để di chuyển răng về vị trí chuẩn. Hiệu quả với lệch khớp cắn phức tạp, giá hợp lý hơn sứ. Thẩm mỹ kém hơn khay trong suốt nhưng bền và kiểm soát tốt.",
      indications:
        "Răng hô, móm, chen chúc, khớp cắn sâu/hở, cắn chéo. Thanh thiếu niên và người lớn. Chấp nhận bracket kim loại hiển thị.",
      technique:
        "Gắn bracket, luồn dây, lực điều chỉnh định kỳ 4–6 tuần. Có thể kèm minivis, rubber. Chụp phim và scan kế hoạch.",
      timeline:
        "18–30 tháng tùy độ phức tạp. Tháo niềng đeo retainer duy trì. Tái khám chỉnh dây hàng tháng.",
      comfort:
        "Ê vài ngày sau mỗi lần siết; dây có thể chọc — wax che. Không đau liên tục.",
      aftercare:
        "Chải kỹ quanh bracket; tránh cứng, dính. Đeo retainer theo chỉ định sau tháo. Tái khám đúng hẹn.",
      pricing:
        "Theo độ phức tạp, một hay hai hàm. Trả góp theo chính sách phòng khám.",
      clinicEdge:
        "Nha Khoa Đăng Khoa Tây Ninh chỉnh nha mắc cài kim loại, theo dõi lực và vệ sinh bracket.",
      benefits: [
        "Xử lý lệch khớp phức tạp",
        "Chi phí hợp lý hơn sứ",
        "Kiểm soát di chuyển răng tốt",
        "Kết quả ổn định với retainer",
      ],
      audienceList: [
        "Thanh thiếu niên cần chỉnh hàm",
        "Người lớn lệch khớp cắn",
        "Chen chúc, hô, móm",
        "Ưu tiên hiệu quả hơn thẩm mỹ tạm",
      ],
      steps: [
        { title: "Khám & phim", desc: "Phân tích khớp cắn, kế hoạch." },
        { title: "Gắn mắc cài", desc: "Bracket, dây ban đầu." },
        { title: "Tái khám định kỳ", desc: "Siết, đổi dây, điều lực." },
        { title: "Tháo & retainer", desc: "Giữ kết quả lâu dài." },
      ],
      faq: [
        { q: "Niềng bao lâu?", a: "Thường 18–30 tháng tùy ca." },
        { q: "Đau không?", a: "Ê vài ngày sau siết; bình thường." },
        { q: "Ăn cứng?", a: "Nên tránh; dễ bong bracket." },
        { q: "Người lớn niềng?", a: "Được; thời gian có thể dài hơn." },
        { q: "Retainer bao lâu?", a: "Dài hạn, đêm hoặc cả ngày giai đoạn đầu." },
        { q: "Giá?", a: "Báo sau khám phim; một/two hàm." },
      ],
    },
  },
  {
    categorySlug: "nieng-rang",
    categoryName: "Niềng răng – Chỉnh nha",
    image: "/images/service-nieng-rang.png",
    facts: {
      name: "Niềng răng mắc cài sứ",
      categoryName: "Niềng răng – Chỉnh nha",
      focusKeyword: "niềng răng mắc cài sứ tây ninh",
      definition:
        "Niềng răng mắc cài sứ dùng bracket sứ hoặc sứ pha kim loại, màu gần răng hơn kim loại thuần. Cùng nguyên lý dây cung như kim loại. Phù hợp người làm việc cần thẩm mỹ hơn nhưng vẫn cần hiệu quả mắc cài.",
      indications:
        "Tương tự mắc cài kim loại; muốn bracket kín màu hơn. Không phù hợp nếu cắn cứng làm vỡ sứ bracket.",
      technique:
        "Gắn bracket sứ, dây; tái khám 4–6 tuần. Vệ sinh kỹ tránh ố bracket.",
      timeline:
        "18–30 tháng. Retainer sau tháo. Thời gian tương đương kim loại.",
      comfort:
        "Ê sau siết; bracket sứ có thể dễ vỡ nếu cắn cứng — cẩn thận hơn.",
      aftercare:
        "Chải kỹ; hạn chế thực phẩm nhuộm (trà, cà phê). Retainer sau điều trị.",
      pricing:
        "Cao hơn kim loại một mức; báo sau khám.",
      clinicEdge:
        "Nha Khoa Đăng Khoa Tây Ninh mắc cài sứ chính hãng, tư vấn chăm sóc tránh ố bracket.",
      benefits: [
        "Thẩm mỹ tốt hơn kim loại",
        "Hiệu quả chỉnh nha mạnh",
        "Phù hợp người trưởng thành",
        "Kết quả ổn định với retainer",
      ],
      audienceList: [
        "Người lớn cần niềng kín màu",
        "Lệch khớp vừa đến phức tạp",
        "Không muốn khay trong suốt",
        "Chấp nhận chi phí cao hơn kim loại",
      ],
      steps: [
        { title: "Phân tích", desc: "Phim, mô hình, kế hoạch." },
        { title: "Gắn sứ", desc: "Bracket sứ, dây." },
        { title: "Tái khám", desc: "Điều chỉnh lực định kỳ." },
        { title: "Tháo & giữ", desc: "Retainer duy trì." },
      ],
      faq: [
        { q: "Sứ có dễ vỡ?", a: "Có thể nếu cắn cứng — tránh đồ cứng." },
        { q: "Khác kim loại?", a: "Thẩm mỹ hơn; giá cao hơn; cơ chế tương tự." },
        { q: "Vàng ố?", a: "Trà, thuốc lá có thể ố — chải kỹ." },
        { q: "Thời gian?", a: "Tương đương kim loại." },
        { q: "Đau?", a: "Ê sau siết như kim loại." },
        { q: "Giá?", a: "Cao hơn kim loại; báo sau khám." },
      ],
    },
  },
  {
    categorySlug: "nieng-rang",
    categoryName: "Niềng răng – Chỉnh nha",
    image: "/images/service-nieng-rang.png",
    facts: {
      name: "Niềng răng tự buộc",
      categoryName: "Niềng răng – Chỉnh nha",
      focusKeyword: "niềng răng tự buộc tây ninh",
      definition:
        "Niềng răng tự buộc (self-ligating) dùng bracket có cửa giữ dây, giảm ma sát, có thể rút ngắn thời gian và giảm ê so vài hệ thống truyền thống. Có kim loại hoặc sứ. Vẫn cần tái khám điều chỉnh.",
      indications:
        "Chen chúc, khớp cắn cần chỉnh; muốn giảm ê và số lần siết. Khách chấp nhận mắc cài ngoài hoặc trong.",
      technique:
        "Gắn bracket tự buộc, dây phù hợp; tái khám theo hệ. Scan/phim lập kế hoạch.",
      timeline:
        "Có thể 16–28 tháng tùy ca và hệ. Retainer sau tháo.",
      comfort:
        "Ê nhẹ hơn một số hệ truyền thống; vẫn có giai đoạn ê sau điều chỉnh.",
      aftercare:
        "Vệ sinh bracket; tránh cứng. Retainer bắt buộc.",
      pricing:
        "Cao hơn kim loại thường; báo theo hệ Damon/Q etc. phòng khám dùng.",
      clinicEdge:
        "Nha Khoa Đăng Khoa Tây Ninh niềng tự buộc hệ chính hãng, giảm ê và tối ưu lịch tái khám.",
      benefits: [
        "Giảm ma sát, có thể nhanh hơn",
        "Ê nhẹ hơn một số loại",
        "Ít tháo dâu cao su (tùy hệ)",
        "Vệ sinh thuận hơn một phần",
      ],
      audienceList: [
        "Khách sợ đau niềng truyền thống",
        "Chen chúc, khớp cắn cần chỉnh",
        "Muốn rút ngắn thời gian nếu phù hợp",
        "Người lớn và thanh thiếu niên",
      ],
      steps: [
        { title: "Tư vấn hệ", desc: "Chọn tự buộc kim loại/sứ." },
        { title: "Gắn bracket", desc: "Cửa tự buộc, dây." },
        { title: "Tái khám", desc: "Kiểm tra, đổi dây." },
        { title: "Hoàn tất", desc: "Tháo, retainer." },
      ],
      faq: [
        { q: "Tự buộc nhanh hơn?", a: "Một số ca; không đảm bảo mọi người." },
        { q: "Khác thường?", a: "Bracket có cửa; giảm ma sát." },
        { q: "Đắt hơn?", a: "Thường cao hơn kim loại thường." },
        { q: "Vẫn đau?", a: "Ê nhẹ hơn có thể; vẫn có giai đoạn ê." },
        { q: "Damon là gì?", a: "Một thương hiệu tự buộc phổ biến." },
        { q: "Retainer?", a: "Bắt buộc sau tháo như mọi niềng." },
      ],
    },
  },
  {
    categorySlug: "nieng-rang",
    categoryName: "Niềng răng – Chỉnh nha",
    image: "/images/service-nieng-rang.png",
    facts: {
      name: "Niềng răng trong suốt",
      categoryName: "Niềng răng – Chỉnh nha",
      focusKeyword: "niềng răng trong suốt tây ninh",
      definition:
        "Niềng răng trong suốt (clear aligner) dùng khay nhựa trong suốt thay đổi tuần tự để di chuyển răng. Thẩm mỹ cao, tháo khi ăn uống. Phù hợp lệch nhẹ đến trung bình; ca phức tạp cần đánh giá kỹ.",
      indications:
        "Chen chúc nhẹ, khe thưa, khớp cắn nhẹ. Người trưởng thành cần kín đáo. Chấp nhận đeo khay 20–22h/ngày.",
      technique:
        "Scan digital, lập kế hoạch 3D, in khay theo bộ. Đổi khay 1–2 tuần. Attach composite trên răng khi cần.",
      timeline:
        "12–24 tháng tùy số khay. Retainer sau điều trị. Ít buổi tái khám hơn mắc cài.",
      comfort:
        "Ê nhẹ mỗi khay mới; không chọc má như bracket. Dễ vệ sinh.",
      aftercare:
        "Đeo đủ giờ; giữ khay sạch. Retainer sau hoàn tất. Không ăn uống khi đeo.",
      pricing:
        "Theo số khay và độ phức tạp (Invisalign, local aligner). Báo sau scan.",
      clinicEdge:
        "Nha Khoa Đăng Khoa Tây Ninh aligner scan 3D, theo dõi tiến độ và attach chuyên nghiệp.",
      benefits: [
        "Gần như invisible",
        "Tháo khi ăn, vệ sinh dễ",
        "Ê nhẹ, ít cấn má",
        "Dự đoán trước trên phần mềm",
      ],
      audienceList: [
        "Người lớn cần chỉnh kín",
        "Lệch nhẹ đến trung bình",
        "Không muốn bracket kim loại",
        "Kỷ luật đeo khay tốt",
      ],
      steps: [
        { title: "Scan & kế hoạch", desc: "3D, duyệt clip di chuyển." },
        { title: "Nhận bộ khay", desc: "Hướng dẫn đổi khay." },
        { title: "Tái khám", desc: "Kiểm tra khít, attach." },
        { title: "Retainer", desc: "Giữ kết quả." },
      ],
      faq: [
        { q: "Aligner vs mắc cài?", a: "Aligner thẩm mỹ; mắc cài mạnh hơn ca nặng." },
        { q: "Đeo bao lâu/ngày?", a: "20–22 giờ." },
        { q: "Ăn uống?", a: "Tháo khi ăn; chỉ nước lạnh khi đeo." },
        { q: "Mất bao lâu?", a: "12–24 tháng tùy ca." },
        { q: "Đau?", a: "Ê nhẹ mỗi khay mới." },
        { q: "Giá?", a: "Theo số khay; báo sau scan." },
      ],
    },
  },
  {
    categorySlug: "nieng-rang",
    categoryName: "Niềng răng – Chỉnh nha",
    image: "/images/service-nieng-rang.png",
    facts: {
      name: "Chỉnh khớp cắn",
      categoryName: "Niềng răng – Chỉnh nha",
      focusKeyword: "chỉnh khớp cắn tây ninh",
      definition:
        "Chỉnh khớp cắn tập trung sửa quan hệ hàm trên–dưới (cắn chéo, cắn hở, cắn sâu, prognathism nhẹ) bằng niềng, khí cụ chức năng hoặc minivis. Mục tiêu ăn nhai đều, giảm mòn răng và đau khớp thái dương hàm liên quan. Có thể kết hợp phẫu thuật hàm ca nặng.",
      indications:
        "Cắn chéo, cắn hở, cắn sâu, lệch hàm nhẹ đến trung bình. Ê khớp, mòn răng do khớp cắn sai. Sau giai đoạn niềng cần tinh chỉnh khớp.",
      technique:
        "Phim ceph, pano; kế hoạch tổng thể; mắc cài + dây/class II/III, minivis, rubber. Phối hợp Bác sĩ RHM phẫu thuật nếu cần.",
      timeline:
        "12–24 tháng hoặc hơn với ca phẫu thuật. Retainer và có thể máng đêm.",
      comfort:
        "Ê khi điều chỉnh lực; khí cụ chức năng cần thời gian thích nghi. Phẫu thuật có recovery riêng.",
      aftercare:
        "Retainer; tránh nghiến nếu có. Tái khám định kỳ. Máng đêm nếu CMD liên quan.",
      pricing:
        "Theo phương pháp và có phẫu thuật không. Báo sau phim phân tích.",
      clinicEdge:
        "Nha Khoa Đăng Khoa Tây Ninh chỉnh khớp cắn có phim ceph, phối hợp phẫu thuật hàm khi chỉ định.",
      benefits: [
        "Ăn nhai cân bằng hơn",
        "Giảm mòn, ê khớp liên quan",
        "Cải thiện thẩm mỹ profile",
        "Nền sức khỏe răng miệng dài hạn",
      ],
      audienceList: [
        "Cắn chéo, hở, sâu",
        "Lệch hàm nhẹ cần chỉnh",
        "Mòn răng do khớp sai",
        "Sau niềng cần hoàn thiện khớp",
      ],
      steps: [
        { title: "Phân tích ceph", desc: "Đo, kế hoạch khớp cắn." },
        { title: "Can thiệp", desc: "Niềng, khí cụ, minivis." },
        { title: "Tinh chỉnh", desc: "Điều lực, rubber." },
        { title: "Duy trì", desc: "Retainer, máng nếu cần." },
      ],
      faq: [
        { q: "Khác niềng thường?", a: "Tập trung hàm–khớp; có thể phức tạp hơn." },
        { q: "Cần mổ hàm?", a: "Ca nặng có thể; nhẹ dùng niềng/minivis." },
        { q: "Bao lâu?", a: "12–24+ tháng." },
        { q: "Đau khớp CMD?", a: "Chỉnh khớp có thể giúp một phần; đánh giá riêng." },
        { q: "Người lớn?", a: "Được; có thể chậm hơn trẻ." },
        { q: "Giá?", a: "Báo sau phim; phẫu thuật tính riêng." },
      ],
    },
  },

  // —— Nha khoa trẻ em (6) ——
  {
    categorySlug: "nha-khoa-tre-em",
    categoryName: "Nha khoa trẻ em",
    image: "/images/cover-clinic.png",
    facts: {
      name: "Khám răng trẻ em",
      categoryName: "Nha khoa trẻ em",
      focusKeyword: "khám răng trẻ em tây ninh",
      definition:
        "Khám răng trẻ em là buổi thăm khám chuyên biệt cho trẻ từ khi mọc răng sữa đến thiếu niên, đánh giá sâu răng, cách mọc răng và thói quen suc ngón, bú núm. Mục tiêu phòng ngừa và xây dựng thói quen tích cực với nha khoa. Không gian thân thiện giúp trẻ hợp tác lâu dài.",
      indications:
        "Trẻ chưa khám lần đầu (trước 1 tuổi khuyến cáo), có đốm trắng/nâu răng, đau, sưng nướu. Phụ huynh lo ngại răng thưa, mọc lệch sớm. Sau chấn thương răng cần khám gấp.",
      technique:
        "Khám nhẹ, đếm răng, đánh giá nguy cơ sâu; chụp phim khi cần. Fluor, sealant hoặc tư vấn dinh dưỡng theo tuổi. Giải thích cho trẻ bằng ngôn ngữ phù hợp.",
      timeline:
        "30–45 phút; tái khám 3–6 tháng. Không nghỉ dưỡng.",
      comfort:
        "Không xâm lấn nếu chỉ khám; trẻ được khen, thưởng tinh thần. Tê nếu có thủ thuật nhỏ.",
      aftercare:
        "Phụ huynh giúp chải răng; hạn chế đồ ngọt dính. Đặt lịch tái khám và theo dõi răng mọc.",
      pricing:
        "Gói khám nhi; dịch vụ kèm báo riêng. Nhiều buổi tư vấn miễn phí kèm khám.",
      clinicEdge:
        "Nha Khoa Đăng Khoa Tây Ninh khu nhi thân thiện, bác sĩ kiên nhẫn và nhắc lịch cho phụ huynh.",
      benefits: [
        "Phát hiện sâu sớm",
        "Xây dựng thói quen lành mạnh",
        "Giảm sợ nha khoa",
        "Theo dõi mọc răng vĩnh viễn",
      ],
      audienceList: [
        "Trẻ từ mọc răng đến 12 tuổi",
        "Phụ huynh lần đầu đưa con khám",
        "Trẻ có đốm sâu, đau răng",
        "Trẻ cần tư vấn chỉnh nha sớm",
      ],
      steps: [
        { title: "Tiếp đón nhi", desc: "Làm quen, giảm lo lắng." },
        { title: "Khám", desc: "Răng, nướu, thói quen." },
        { title: "Tư vấn", desc: "Chải răng, ăn uống cho phụ huynh." },
        { title: "Hẹn tái khám", desc: "Sealant, fluor hoặc theo dõi." },
      ],
      faq: [
        { q: "Bao nhiêu tuổi khám lần đầu?", a: "Khi mọc răng hoặc trước 1 tuổi." },
        { q: "Bao lâu khám lại?", a: "Thường 3–6 tháng." },
        { q: "Trẻ sợ có khám được?", a: "Có; môi trường nhi và kỹ thuật nhẹ." },
        { q: "Có chụp phim?", a: "Khi cần; giảm bức xạ có chọn lọc." },
        { q: "Răng sữa sâu có sao?", a: "Có; có thể ảnh hưởng răng vĩnh viễn." },
        { q: "Giá?", a: "Báo gói khám nhi; thủ thuật riêng." },
      ],
    },
  },
  {
    categorySlug: "nha-khoa-tre-em",
    categoryName: "Nha khoa trẻ em",
    image: "/images/cover-clinic.png",
    facts: {
      name: "Trám răng sữa",
      categoryName: "Nha khoa trẻ em",
      focusKeyword: "trám răng sữa tây ninh",
      definition:
        "Trám răng sữa phục hồi sâu răng sữa bằng composite hoặc GIC, giữ chức năng nhai và tránh sâu lan sâu đến tủy. Răng sữa giữ chỗ cho răng vĩnh viễn — không nên nhổ sớm khi còn cứu được. Màu có thể chọn phù hợp trẻ em.",
      indications:
        "Sâu răng sữa nhỏ đến vừa chưa chạm tủy. Răng mẻ nhẹ do ngã. Phòng ngừa sau khi làm sạch sâu nông.",
      technique:
        "Tê nhẹ nếu cần; làm sạch sâu; trám GIC/composite; kiểm tra khớp cắn. Có thể kèm fluor.",
      timeline:
        "20–40 phút mỗi răng. Ăn nhẹ sau 1–2 giờ. Theo dõi đến khi răng sữa rụng.",
      comfort:
        "Tê gel + tiêm nhẹ; trẻ ê vài giờ có thể. Giải thích đơn giản trước khi làm.",
      aftercare:
        "Hạn chế kẹo dính; phụ huynh giúp chải. Tái khám nếu trám rơi hoặc đau.",
      pricing:
        "Theo số răng và vật liệu. Báo cho phụ huynh trước.",
      clinicEdge:
        "Nha Khoa Đăng Khoa Tây Ninh trám răng sữa nhẹ nhàng, ưu tiên giữ răng đến khi rụng tự nhiên.",
      benefits: [
        "Giữ răng sữa và chỗ mọc",
        "Ngăn sâu lan đến tủy",
        "Giảm đau, nhiễm trùng",
        "Thủ thuật nhanh, ít xâm lấn",
      ],
      audienceList: [
        "Trẻ 2–10 tuổi có sâu sữa",
        "Sâu nông chưa cần chữa tủy",
        "Răng sữa mẻ nhẹ",
        "Phụ huynh muốn tránh nhổ sớm",
      ],
      steps: [
        { title: "Khám", desc: "Đánh giá độ sâu, phim nếu cần." },
        { title: "Làm sạch", desc: "Tê, loại mô sâu." },
        { title: "Trám", desc: "GIC hoặc composite." },
        { title: "Hướng dẫn", desc: "Chăm sóc cho phụ huynh." },
      ],
      faq: [
        { q: "Trám sữa có rơi?", a: "Có thể; tái khám trám lại." },
        { q: "Có đau?", a: "Tê; ê nhẹ sau là bình thường." },
        { q: "Sâu sâu trám được?", a: "Có thể cần chữa tủy trước." },
        { q: "Màu có hài hòa?", a: "Chọn màu phù hợp răng sữa." },
        { q: "Bao lâu giữ?", a: "Đến khi răng sữa rụng — vệ sinh quyết định." },
        { q: "Giá?", a: "Theo răng; báo trước." },
      ],
    },
  },
  {
    categorySlug: "nha-khoa-tre-em",
    categoryName: "Nha khoa trẻ em",
    image: "/images/cover-clinic.png",
    facts: {
      name: "Nhổ răng sữa",
      categoryName: "Nha khoa trẻ em",
      focusKeyword: "nhổ răng sữa tây ninh",
      definition:
        "Nhổ răng sữa tại phòng khám nhi khi răng lung lay lâu, sâu không cứu hoặc chỉ định chỉnh nha/spacer. Khác nhổ răng vĩnh viễn — ưu tiên giữ răng đến khi rụng sinh lý khi có thể. Sau nhổ sớm có thể cần giữ chỗ.",
      indications:
        "Răng sữa lung lay không rụng, sâu nặng, nhiễm trùng. Chỉ định chỉnh nha. Không tự nhổ tại nhà gây sót chân.",
      technique:
        "Tê cục bộ; nhổ nhẹ; kiểm tra không sót. Spacer nếu mất sớm. An ủi trẻ sau thủ thuật.",
      timeline:
        "15–30 phút. Cầm máu 30–60 phút. Tái khám nếu sưng, đau.",
      comfort:
        "Tê; trẻ sợ được giải thích. Phụ huynh đồng hành.",
      aftercare:
        "Cắn gauze; ăn mềm; không súc mạnh. Báo sưng mặt, sốt.",
      pricing:
        "Theo độ khó; spacer tính riêng.",
      clinicEdge:
        "Nha Khoa Đăng Khoa Tây Ninh nhổ răng sữa nhi, spacer và tư vấn mọc răng vĩnh viễn.",
      benefits: [
        "Giải quyết đau, nhiễm",
        "Chuẩn bị chỉnh nha/spacer",
        "An toàn, không sót chân",
        "Trải nghiệm nhi tích cực",
      ],
      audienceList: [
        "Trẻ răng sữa lung lay, sâu nặng",
        "Chỉ định chỉnh nha nhổ sữa",
        "Sót chân sau nhổ tại nhà",
        "Phụ huynh cần nhổ tại phòng khám",
      ],
      steps: [
        { title: "Khám", desc: "Phim, đánh giá răng thay." },
        { title: "Tê & nhổ", desc: "Nhổ nhẹ, kiểm tra." },
        { title: "Cầm máu", desc: "Gauze, hướng dẫn." },
        { title: "Spacer", desc: "Nếu mất sớm — lên kế hoạch." },
      ],
      faq: [
        { q: "Khác nhổ ở nho-rang?", a: "Cùng thủ thuật; danh mục nhi tập trung trẻ em." },
        { q: "Mất sớm spacer?", a: "Có thể khi mất sớm — bác sĩ tư vấn." },
        { q: "Đau?", a: "Tê; ê nhẹ sau." },
        { q: "Tự nhổ được?", a: "Không khuyến khích — nguy cơ sót, nhiễm." },
        { q: "Bao lâu mọc răng vĩnh viễn?", a: "Theo từng răng; bác sĩ nói khi khám." },
        { q: "Giá?", a: "Báo trước; spacer riêng." },
      ],
    },
  },
  {
    categorySlug: "nha-khoa-tre-em",
    categoryName: "Nha khoa trẻ em",
    image: "/images/cover-clinic.png",
    facts: {
      name: "Điều trị sâu răng trẻ em",
      categoryName: "Nha khoa trẻ em",
      focusKeyword: "điều trị sâu răng trẻ em tây ninh",
      definition:
        "Điều trị sâu răng trẻ em là tổng hợp trám, chữa tủy răng sữa, crown thép và phòng ngừa (fluor, sealant) tùy mức sâu. Mục tiêu giữ răng sữa khỏe đến khi thay răng vĩnh viễn. Giáo dục phụ huynh về đường và thói quen suc ngón.",
      indications:
        "Đốm trắng/nâu, đau, sâu nhiều răng (sâu miệng). Trẻ khó hợp tác cần phác đồ chia buổi. Tiền sử sâu tái phát.",
      technique:
        "Đánh giá nguy cơ; trám, pulpotomy/pulpectomy, crown; fluor varnish; sealant răng vĩnh viễn mới mọc. Có thể điều trị dưới an thần nhẹ khi chỉ định.",
      timeline:
        "1–3 buổi tùy số răng. Tái khám 3 tháng. Dài hạn theo dõi đến hết thay răng sữa.",
      comfort:
        "Tê, giải thích; chia buổi cho trẻ lo lắng. Phụ huynh đồng hành.",
      aftercare:
        "Giảm ngọt; chải giúp trẻ; fluor theo đơn. Tái khám định kỳ.",
      pricing:
        "Theo số răng và độ sâu (trám/tủy/crown). Báo phác đồ tổng.",
      clinicEdge:
        "Nha Khoa Đăng Khoa Tây Ninh điều trị sâu trẻ em toàn diện, phòng ngừa và giáo dục phụ huynh.",
      benefits: [
        "Giải quyết sâu toàn miệng",
        "Giữ răng sữa lâu nhất có thể",
        "Giảm đau, nhiễm",
        "Phòng tái phát bằng fluor/sealant",
      ],
      audienceList: [
        "Trẻ nhiều răng sâu",
        "Sâu miệng, đau ăn",
        "Trẻ hay uống sữa đêm",
        "Phụ huynh cần phác đồ rõ",
      ],
      steps: [
        { title: "Đánh giá", desc: "Đếm sâu, nguy cơ, phim." },
        { title: "Kế hoạch", desc: "Trám, tủy, crown — ưu tiên." },
        { title: "Điều trị", desc: "Chia buổi nếu cần." },
        { title: "Phòng ngừa", desc: "Fluor, sealant, tư vấn." },
      ],
      faq: [
        { q: "Sâu miệng là gì?", a: "Nhiều răng sâu — cần phác đồ tổng." },
        { q: "Có cần chữa tủy?", a: "Khi sâu chạm tủy — pulpotomy/pulpectomy." },
        { q: "Crown thép?", a: "Răng sữa yếu sau tủy — bảo vệ." },
        { q: "Tránh ngọt?", a: "Có; đặc biệt trước ngủ." },
        { q: "Mấy buổi?", a: "Tùy số răng; có thể chia." },
        { q: "Giá?", a: "Báo sau khám tổng." },
      ],
    },
  },
  {
    categorySlug: "nha-khoa-tre-em",
    categoryName: "Nha khoa trẻ em",
    image: "/images/cover-clinic.png",
    facts: {
      name: "Bôi Fluor chống sâu răng",
      categoryName: "Nha khoa trẻ em",
      focusKeyword: "bôi fluor chống sâu răng tây ninh",
      definition:
        "Bôi fluor (fluoride varnish) tăng cường men răng, phòng sâu cho trẻ nguy cơ cao. Thủ thuật nhanh, không xâm lấn, áp dụng định kỳ 3–6 tháng. Bổ sung cho kem đánh răng có fluor tại nhà — không thay thế vệ sinh.",
      indications:
        "Trẻ hay sâu, nhiều răng sâu, vùng nước nghèo fluor. Răng mới mọc, men yếu. Sau điều trị sâu để phòng tái phát.",
      technique:
        "Làm khô răng; bôi varnish mỏng; tránh ăn cứng 30 phút. Không cần tê.",
      timeline:
        "10–15 phút. Lặp 3–6 tháng. Có thể cùng buổi khám định kỳ.",
      comfort:
        "Không đau; vị có thể lạ nhẹ. Trẻ dễ chấp nhận.",
      aftercare:
        "Không đánh răng ngay 4–6 giờ (theo hướng dẫn); hạn chế cứng ngay sau bôi.",
      pricing:
        "Phí thấp; gói kèm khám nhi. Báo trước.",
      clinicEdge:
        "Nha Khoa Đăng Khoa Tây Ninh bôi fluor định kỳ, theo dõi nguy cơ sâu từng trẻ.",
      benefits: [
        "Giảm nguy cơ sâu mới",
        "Tăng cứng men",
        "Nhanh, không đau",
        "Phù hợp trẻ nguy cơ cao",
      ],
      audienceList: [
        "Trẻ hay sâu tái phát",
        "Sau điều trị sâu nhiều răng",
        "Răng mới mọc",
        "Phụ huynh muốn phòng ngừa",
      ],
      steps: [
        { title: "Khám nguy cơ", desc: "Đánh giá sâu, thói quen." },
        { title: "Làm sạch nhẹ", desc: "Có thể cạo vôi nhẹ." },
        { title: "Bôi fluor", desc: "Varnish từng răng." },
        { title: "Hướng dẫn", desc: "Kem fluor tại nhà." },
      ],
      faq: [
        { q: "Fluor có độc?", a: "Liều bác sĩ an toàn; không nuốt nhiều." },
        { q: "Bao lâu bôi lại?", a: "Thường 3–6 tháng." },
        { q: "Thay chải răng?", a: "Không; bổ sung chải có fluor." },
        { q: "Trẻ nuốt?", a: "Varnish ít lượng; bác sĩ kiểm soát." },
        { q: "Răng đã sâu?", a: "Vẫn cần trám/tủy; fluor phòng thêm." },
        { q: "Giá?", a: "Thấp; có gói khám nhi." },
      ],
    },
  },
  {
    categorySlug: "nha-khoa-tre-em",
    categoryName: "Nha khoa trẻ em",
    image: "/images/cover-clinic.png",
    facts: {
      name: "Hướng dẫn chăm sóc răng miệng cho trẻ",
      categoryName: "Nha khoa trẻ em",
      focusKeyword: "hướng dẫn chăm sóc răng miệng cho trẻ tây ninh",
      definition:
        "Hướng dẫn chăm sóc răng miệng cho trẻ là buổi giáo dục phụ huynh và trẻ về chải răng, chỉ nha khoa, dinh dưỡng và thói quen (bú đêm, suc ngón). Không thay khám điều trị nhưng quyết định 80% phòng sâu. Phù hợp mọi lứa tuổi.",
      indications:
        "Phụ huynh mới có con, trẻ hay sâu, không biết chải đúng. Trước và sau điều trị sâu. Chuẩn bị niềng hoặc mọc răng vĩnh viễn.",
      technique:
        "Mô hình, video; hướng dẫn chải theo tuổi; chọn kem, bàn chải; lịch khám. Tài liệu mang về.",
      timeline:
        "20–40 phút; có thể kèm khám. Tái tư vấn khi thay đổi thói quen.",
      comfort:
        "Không xâm lấn; trẻ tham gia thực hành mô hình.",
      aftercare:
        "Áp dụng checklist; hẹn tái đánh giá sâu.",
      pricing:
        "Thường miễn phí kèm khám nhi.",
      clinicEdge:
        "Nha Khoa Đăng Khoa Tây Ninh tư vấn chăm sóc trẻ tận tình, tài liệu tiếng Việt dễ hiểu.",
      benefits: [
        "Giảm sâu tái phát",
        "Phụ huynh tự tin chăm con",
        "Thói quen bền vững",
        "Tiết kiệm điều trị sau",
      ],
      audienceList: [
        "Phụ huynh trẻ nhỏ",
        "Trẻ hay sâu cần thay đổi thói quen",
        "Gia đình mới đến Tây Ninh",
        "Sau điều trị cần duy trì",
      ],
      steps: [
        { title: "Khai thác", desc: "Thói quen ăn, ngủ, chải." },
        { title: "Thực hành", desc: "Chải trên mô hình/trẻ." },
        { title: "Tài liệu", desc: "Checklist, lịch khám." },
        { title: "Theo dõi", desc: "Tái khám đánh giá." },
      ],
      faq: [
        { q: "Bao nhiêu tuổi chải giúp?", a: "Đến 7–8 tuổi cần giúp; sau giám sát." },
        { q: "Kem fluor?", a: "Dùng kem có fluor lượng phù hợp tuổi." },
        { q: "Sữa đêm?", a: "Nguy cơ sâu cao — hạn chế sau chải." },
        { q: "Chỉ nha khoa trẻ?", a: "Có flosser, tăm phù hợp lứa tuổi." },
        { q: "Mất phí?", a: "Thường miễn phí kèm khám." },
        { q: "Suc ngón?", a: "Tư vấn thói quen và hậu quả răng." },
      ],
    },
  },
  // —— Dịch vụ chuyên sâu (5) ——
  {
    categorySlug: "dich-vu-chuyen-sau",
    categoryName: "Dịch vụ chuyên sâu",
    image: "/images/service-cong-nghe-itero.png",
    facts: {
      name: "Điều trị cười hở lợi",
      categoryName: "Dịch vụ chuyên sâu",
      focusKeyword: "điều trị cười hở lợi tây ninh",
      definition:
        "Điều trị cười hở lợi (gummy smile) giảm lộ nướu khi cười bằng chỉnh nướu laser, bọc sứ, veneer hoặc phẫu thuật hàm tùy nguyên nhân. Nguyên nhân có thể do nướu dày, răng ngắn hoặc hypermobile lip. Cần phân tích kỹ trước can thiệp.",
      indications:
        "Cười lộ nướu > 2–3 mm gây mất tự tin. Muốn cân đối đường cười. Sau chỉnh nha cần chỉnh nướu.",
      technique:
        "Đo smile line; laser gingivectomy hoặc crown lengthening; veneer/sứ nếu răng ngắn. Botox môi (nếu phối hợp bác sĩ) tạm thời một số ca.",
      timeline:
        "Laser 1 buổi, lành 1–2 tuần. Sứ vài tuần. Phẫu thuật hàm lâu hơn.",
      comfort:
        "Laser ê nhẹ vài ngày; tê khi cần. Sứ tương tự bọc thẩm mỹ.",
      aftercare:
        "Vệ sinh nhẹ; tránh cứng vùng mổ. Tái khám chỉnh đường nướu.",
      pricing:
        "Theo phương pháp (laser vs sứ vs phẫu thuật). Báo sau khám.",
      clinicEdge:
        "Nha Khoa Đăng Khoa Tây Ninh phân tích cười hở lợi, laser và phối hợp thẩm mỹ sứ.",
      benefits: [
        "Đường cười cân đối hơn",
        "Tăng tự tin giao tiếp",
        "Giải pháp tùy nguyên nhân",
        "Ít xâm lấn với laser nhẹ",
      ],
      audienceList: [
        "Người cười lộ nướu nhiều",
        "Sau niềng cần chỉnh nướu",
        "Răng ngắn, nướu dày",
        "Muốn thẩm mỹ nụ cười",
      ],
      steps: [
        { title: "Phân tích", desc: "Ảnh cười, đo nướu." },
        { title: "Chọn phác đồ", desc: "Laser, sứ hoặc phẫu thuật." },
        { title: "Thực hiện", desc: "Can thiệp theo kế hoạch." },
        { title: "Hoàn thiện", desc: "Theo dõi lành, thẩm mỹ." },
      ],
      faq: [
        { q: "Chỉ laser được?", a: "Tùy nguyên nhân; có thể cần sứ hoặc mổ hàm." },
        { q: "Đau?", a: "Laser ê nhẹ vài ngày." },
        { q: "Nướu có mọc lại?", a: "Hiếm nếu đúng kỹ thuật; theo dõi." },
        { q: "Botox?", a: "Một số ca tạm; bác sĩ phối hợp." },
        { q: "Bao lâu?", a: "Laser vài tuần; sứ vài tuần." },
        { q: "Giá?", a: "Báo sau khám phân loại." },
      ],
    },
  },
  {
    categorySlug: "dich-vu-chuyen-sau",
    categoryName: "Dịch vụ chuyên sâu",
    image: "/images/service-cong-nghe-itero.png",
    facts: {
      name: "Điều trị khớp thái dương hàm",
      categoryName: "Dịch vụ chuyên sâu",
      focusKeyword: "điều trị khớp thái dương hàm tây ninh",
      definition:
        "Điều trị khớp thái dương hàm (CMD/TMJ) giảm đau khớp, lách hàm, kẹt há, ù tai liên quan răng miệng. Phác đồ gồm máng nhai đêm, chỉnh khớp cắn, vật lý trị liệu hàm; ca nặng phối hợp RHM. Cần chẩn đoán loại trừ bệnh khác.",
      indications:
        "Đau khớp khi nhai, há miệng hạn chế, kêu khớp, nghiến. Đau đầu vùng thái dương. Sau chấn thương hàm mặt.",
      technique:
        "Khám khớp, chụp phim; máng splint điều chỉnh; chỉnh nha nhẹ; tiêm khớp (nếu chỉ định). Theo dõi triệu chứng.",
      timeline:
        "Máng 4–12 tuầm đầu; cải thiện dần. Dài hạn nếu nghiến — máng duy trì.",
      comfort:
        "Máng có thời gian làm quen; giảm nghiến đêm. Không phẫu thuật đa số ca.",
      aftercare:
        "Đeo máng đúng giờ; tránh cứng; giảm stress. Tái khám điều chỉnh máng.",
      pricing:
        "Theo máng, số buổi tái khám. Báo sau khám CMD.",
      clinicEdge:
        "Nha Khoa Đăng Khoa Tây Ninh điều trị CMD có máng custom và phối hợp chỉnh khớp cắn.",
      benefits: [
        "Giảm đau khớp, nghiến",
        "Cải thiện há miệng",
        "Bảo vệ răng khỏi mòn",
        "Giảm đau đầu liên quan",
      ],
      audienceList: [
        "Người đau khớp khi nhai",
        "Nghiến răng ban đêm",
        "Há miệng kẹt, lách",
        "Sau chấn thương hàm",
      ],
      steps: [
        { title: "Khám CMD", desc: "Khớp, cắn, phim." },
        { title: "Máng splint", desc: "Lấy dấu, đeo đêm." },
        { title: "Điều chỉnh", desc: "Chỉnh máng, cắn nếu cần." },
        { title: "Theo dõi", desc: "Triệu chứng, máng duy trì." },
      ],
      faq: [
        { q: "CMD có khỏi?", a: "Đa số kiểm soát tốt; một số cần máng lâu dài." },
        { q: "Chỉ máng?", a: "Có thể kèm chỉnh cắn, VLTL." },
        { q: "Máng đau?", a: "Lạ vài ngày; sau quen." },
        { q: "Phẫu thuật?", a: "Ca nặng hiếm — chuyển RHM." },
        { q: "Nghiến?", a: "Máng bảo vệ răng, giảm căng cơ." },
        { q: "Giá?", a: "Báo máng + tái khám." },
      ],
    },
  },
  {
    categorySlug: "dich-vu-chuyen-sau",
    categoryName: "Dịch vụ chuyên sâu",
    image: "/images/service-cong-nghe-itero.png",
    facts: {
      name: "Điều trị hôi miệng",
      categoryName: "Dịch vụ chuyên sâu",
      focusKeyword: "điều trị hôi miệng tây ninh",
      definition:
        "Điều trị hôi miệng (halitosis) tìm nguyên nhân răng miệng (viêm nướu, cao răng, sâu, khô miệng) hoặc chuyển y khoa khi cần. Không chỉ che mùi bằng nước súc miệng. Quy trình gồm khám toàn diện, cạo vôi và điều trị nguồn bệnh.",
      indications:
        "Hôi miệng kéo dài dù chải răng. Lưỡi bạt trắng, khô miệng, viêm nướu. Ảnh hưởng giao tiếp, tự tin.",
      technique:
        "Đo halitometer (nếu có); khám nướu, sâu, túi nha chu; cạo vôi; điều trị nha chu; hướng dẫn lưỡi, nước súc phù hợp. Loại trừ bệnh hệ thống.",
      timeline:
        "Cải thiện sau làm sạch 1–2 tuần; duy trì vệ sinh lâu dài. Tái khám 3 tháng.",
      comfort:
        "Không đau ngoài ê nhẹ khi cạo vôi.",
      aftercare:
        "Chải lưỡi; chỉ nha khoa; uống đủ nước. Khám bệnh nếu không cải thiện.",
      pricing:
        "Theo điều trị nền (cạo vôi, nha chu). Báo sau khám.",
      clinicEdge:
        "Nha Khoa Đăng Khoa Tây Ninh điều trị hôi miệng tận gốc, không chỉ che mùi.",
      benefits: [
        "Giảm mùi bền vững",
        "Cải thiện sức khỏe nướu",
        "Tăng tự tin giao tiếp",
        "Phát hiện bệnh ẩn",
      ],
      audienceList: [
        "Người hôi miệng mãn tính",
        "Viêm nướu, cao răng",
        "Khô miệng, lưỡi bạt",
        "Sau điều trị cần duy trì",
      ],
      steps: [
        { title: "Chẩn đoán", desc: "Khám, đánh giá nguồn mùi." },
        { title: "Làm sạch", desc: "Cạo vôi, điều trị nha chu." },
        { title: "Điều trị nguồn", desc: "Sâu, tủy nếu có." },
        { title: "Duy trì", desc: "Hướng dẫn vệ sinh lưỡi." },
      ],
      faq: [
        { q: "Súc miệng đủ?", a: "Không nếu có bệnh nền — cần điều trị gốc." },
        { q: "Bao lâu hết?", a: "Thường 1–2 tuần sau làm sạch." },
        { q: "Bệnh dạ dày?", a: "Có thể; khám răng trước, chuyển BS nếu cần." },
        { q: "Khô miệng?", a: "Uống nước, điều trị nguyên nhân." },
        { q: "Chải lưỡi?", a: "Quan trọng — hướng dẫn đúng." },
        { q: "Giá?", a: "Theo cạo vôi, nha chu kèm theo." },
      ],
    },
  },
  {
    categorySlug: "dich-vu-chuyen-sau",
    categoryName: "Dịch vụ chuyên sâu",
    image: "/images/service-cong-nghe-itero.png",
    facts: {
      name: "Điều trị tiêu xương hàm",
      categoryName: "Dịch vụ chuyên sâu",
      focusKeyword: "điều trị tiêu xương hàm tây ninh",
      definition:
        "Điều trị tiêu xương hàm nhằm ngăn mất xương sau nhổ răng, viêm nha chu hoặc chuẩn bị implant. Gồm ghép xương socket preservation, điều trị nha chu và implant sau khi xương ổn định. Tiêu xương làm implant và hàm giả khó khăn.",
      indications:
        "Phim thấy xương mỏng sau nhổ lâu. Tiêu xương do nha chu. Trước implant cần tăng thể tích xương.",
      technique:
        "CT đánh giá; graft sau nhổ; nha chu; ghép xương/block; implant sau lành. PRF có thể hỗ trợ.",
      timeline:
        "Ghép 4–9 tháng trước implant. Nha chu nhiều buổi. Dài hạn theo dõi.",
      comfort:
        "Phẫu thuật ghép sưng vài ngày; thuốc giảm đau.",
      aftercare:
        "Không hút thuốc; tái khám CT trước implant.",
      pricing:
        "Theo vùng ghép, vật liệu. Báo sau CT.",
      clinicEdge:
        "Nha Khoa Đăng Khoa Tây Ninh điều trị tiêu xương có CT, ghép và lộ trình implant rõ.",
      benefits: [
        "Ngăn tiêu xương sau nhổ",
        "Tạo điều kiện implant",
        "Ổn định nha chu",
        "Phục hình lâu dài tốt hơn",
      ],
      audienceList: [
        "Mất răng lâu, xương mỏng",
        "Nha chu tiêu xương",
        "Chuẩn bị implant",
        "Sau nhổ cần preservation",
      ],
      steps: [
        { title: "CT", desc: "Đánh giá mất xương." },
        { title: "Điều trị nền", desc: "Nha chu, nhổ nếu cần." },
        { title: "Ghép xương", desc: "Socket hoặc vùng lớn." },
        { title: "Implant/phục hình", desc: "Khi xương đủ." },
      ],
      faq: [
        { q: "Tiêu xương có phục hồi?", a: "Ghép có thể tăng thể tích; không hoàn toàn như ban đầu." },
        { q: "Sau nhổ bao lâu ghép?", a: "Ngay hoặc vài tuần — tùy ca." },
        { q: "Đau?", a: "Sưng vài ngày sau ghép." },
        { q: "Khác ghép implant?", a: "Cùng kỹ thuật; mục tiêu phục hồi xương." },
        { q: "Hút thuốc?", a: "Tăng tiêu xương — nên bỏ." },
        { q: "Giá?", a: "Báo sau CT." },
      ],
    },
  },
  {
    categorySlug: "dich-vu-chuyen-sau",
    categoryName: "Dịch vụ chuyên sâu",
    image: "/images/service-cong-nghe-itero.png",
    facts: {
      name: "Phẫu thuật nha chu",
      categoryName: "Dịch vụ chuyên sâu",
      focusKeyword: "phẫu thuật nha chu tây ninh",
      definition:
        "Phẫu thuật nha chu (flap surgery) mở vùng túi sâu để làm sạch chân răng, chỉnh xương hoặc ghép xương/nướu khi điều trị không phẫu thuật thất bại. Giai đoạn cuối của điều trị bệnh nha chu tiến triển. Cần vệ sinh duy trì suốt đời sau mổ.",
      indications:
        "Túi > 5–6 mm, xương mất, mủ sau nạo không phẫu thuật. Tiêu xương nặng. Chuẩn bị phục hình trên răng đã ổn định nha chu.",
      technique:
        "Tê; flap; làm sạch root; osseous recontouring; graft tùy; khâu. Thuốc, chường lạnh.",
      timeline:
        "1–2 buổi/vùng; lành 2–4 tuần. Duy trì cạo vôi 3 tháng suốt đời.",
      comfort:
        "Sưng, ê sau mổ; thuốc. Không nhai vùng mổ.",
      aftercare:
        "Súc theo đơn; chỉ superfloss; tái khám tuần 1. Không hút thuốc.",
      pricing:
        "Theo vùng, có ghép hay không. Báo sau khám và phim.",
      clinicEdge:
        "Nha Khoa Đăng Khoa Tây Ninh phẫu thuật nha chu sau điều trị nền, theo dõi duy trì chặt.",
      benefits: [
        "Kiểm soát bệnh nha chu nặng",
        "Giảm túi, mủ",
        "Tạo nền cho phục hình",
        "Giữ răng thật lâu nhất",
      ],
      audienceList: [
        "Nha chu không đáp ứng nạo",
        "Túi sâu, tiêu xương",
        "Mủ, lung lay nhẹ",
        "Cần ghép trước phục hình",
      ],
      steps: [
        { title: "Đánh giá", desc: "Phim, túi, điều trị nền." },
        { title: "Phẫu thuật", desc: "Flap, làm sạch, ghép." },
        { title: "Hậu phẫu", desc: "Thuốc, khâu, tái khám." },
        { title: "Duy trì", desc: "Cạo vôi định kỳ." },
      ],
      faq: [
        { q: "Khác điều trị nha chu thường?", a: "Mở flap sâu hơn nạo lòng túi." },
        { q: "Đau?", a: "Sưng vài ngày; có thuốc." },
        { q: "Nhổ răng?", a: "Chỉ khi không cứu được." },
        { q: "Bao lâu lành?", a: "2–4 tuần mô; duy trì lâu dài." },
        { q: "Hút thuốc?", a: "Làm chậm lành — nên bỏ." },
        { q: "Giá?", a: "Theo vùng hàm và ghép." },
      ],
    },
  },
];

export function getArticleFacts(
  categorySlug: string,
  serviceName: string,
): ArticleFacts | undefined {
  return ALL_SERVICE_FACTS.find(
    (e) =>
      e.categorySlug === categorySlug &&
      slugify(e.facts.name) === slugify(serviceName),
  )?.facts;
}
