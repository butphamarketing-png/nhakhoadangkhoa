import AdminLayout from "@/components/AdminLayout";
import { motion } from "framer-motion";
import { Plus, Star, Phone, Mail, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const doctors = [
  {
    id: 1, name: "TS.BS. Nguyễn Đăng Khoa", title: "Giám đốc chuyên môn", specialty: "Implant & Phục hình",
    experience: "20 năm", cases: "5.000+", rating: 4.9, phone: "0901 234 567", email: "dangkhoa@nhakhoadangkhoa.vn",
    tags: ["Implant", "Phục hình"], avatar: "K", available: true,
  },
  {
    id: 2, name: "ThS.BS. Trần Minh Châu", title: "Bác sĩ Chỉnh nha", specialty: "Niềng răng & Chỉnh hình",
    experience: "12 năm", cases: "2.500+", rating: 4.9, phone: "0912 345 678", email: "minchau@nhakhoadangkhoa.vn",
    tags: ["Niềng răng", "Chỉnh nha"], avatar: "C", available: true,
  },
  {
    id: 3, name: "BS. Lê Anh Tuấn", title: "Bác sĩ Thẩm mỹ", specialty: "Răng sứ & Tẩy trắng",
    experience: "8 năm", cases: "1.800+", rating: 4.8, phone: "0923 456 789", email: "anhtuan@nhakhoadangkhoa.vn",
    tags: ["Thẩm mỹ", "Răng sứ"], avatar: "T", available: false,
  },
  {
    id: 4, name: "ThS.BS. Phạm Thu Hà", title: "Bác sĩ Nội nha", specialty: "Chữa tủy & Điều trị",
    experience: "10 năm", cases: "3.200+", rating: 4.9, phone: "0934 567 890", email: "thuha@nhakhoadangkhoa.vn",
    tags: ["Nội nha", "Điều trị"], avatar: "H", available: true,
  },
];

export default function BacSiPage() {
  return (
    <AdminLayout title="Quản lý bác sĩ">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">

        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex gap-4">
            <div className="bg-white rounded-2xl px-5 py-4 border border-gray-100 shadow-sm text-center min-w-[100px]">
              <div className="text-2xl font-extrabold text-[#C89B3C]">4</div>
              <div className="text-xs text-gray-500">Bác sĩ</div>
            </div>
            <div className="bg-white rounded-2xl px-5 py-4 border border-gray-100 shadow-sm text-center min-w-[100px]">
              <div className="text-2xl font-extrabold text-emerald-500">3</div>
              <div className="text-xs text-gray-500">Đang làm việc</div>
            </div>
            <div className="bg-white rounded-2xl px-5 py-4 border border-gray-100 shadow-sm text-center min-w-[100px]">
              <div className="text-2xl font-extrabold text-[#0D1B2A]">4.9★</div>
              <div className="text-xs text-gray-500">Đánh giá TB</div>
            </div>
          </div>
          <Button className="gold-gradient text-white border-0 rounded-xl h-10 gap-2 text-sm font-semibold"
            data-testid="btn-add-doctor">
            <Plus className="w-4 h-4" /> Thêm bác sĩ
          </Button>
        </div>

        {/* Doctors grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {doctors.map(doc => (
            <motion.div key={doc.id} layout
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:border-[#C89B3C]/30 hover:shadow-md transition-all group text-center">
              {/* Avatar */}
              <div className="relative inline-block mb-4">
                <div className="w-20 h-20 rounded-2xl gold-gradient flex items-center justify-center text-white text-3xl font-extrabold mx-auto">
                  {doc.avatar}
                </div>
                <div className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white ${doc.available ? "bg-emerald-400" : "bg-gray-300"}`} />
              </div>

              <h3 className="font-extrabold text-[#0D1B2A] text-sm leading-snug mb-1">{doc.name}</h3>
              <p className="text-xs text-[#C89B3C] font-semibold mb-0.5">{doc.title}</p>
              <p className="text-xs text-gray-400 mb-3">{doc.specialty}</p>

              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-xs font-bold text-[#0D1B2A] ml-1">{doc.rating}</span>
              </div>

              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="bg-gray-50 rounded-xl py-2.5 px-3">
                  <div className="text-[10px] text-gray-400 uppercase tracking-wide">Kinh nghiệm</div>
                  <div className="font-bold text-[#0D1B2A] text-sm">{doc.experience}</div>
                </div>
                <div className="bg-amber-50 rounded-xl py-2.5 px-3">
                  <div className="text-[10px] text-gray-400 uppercase tracking-wide">Ca điều trị</div>
                  <div className="font-bold text-[#C89B3C] text-sm">{doc.cases}</div>
                </div>
              </div>

              <div className="flex gap-1.5 flex-wrap justify-center mb-4">
                {doc.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-[#0D1B2A]/5 text-[#0D1B2A]">{tag}</span>
                ))}
              </div>

              <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="flex-1 py-2 text-xs font-semibold rounded-xl border border-[#C89B3C] text-[#C89B3C] hover:bg-amber-50 transition-colors"
                  data-testid={`btn-edit-doctor-${doc.id}`}>Chỉnh sửa</button>
                <button className="flex-1 py-2 text-xs font-semibold rounded-xl bg-[#0D1B2A] text-white hover:bg-[#0D1B2A]/90 transition-colors"
                  data-testid={`btn-view-doctor-${doc.id}`}>Xem lịch</button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </AdminLayout>
  );
}
