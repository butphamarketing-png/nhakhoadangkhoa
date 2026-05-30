import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Phone, Shield, Clock, CheckCircle2 } from "lucide-react";
import { BRAND, SERVICES } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { fadeUp } from "@/lib/motion";

const schema = z.object({
  name: z.string().min(2, "Vui lòng nhập họ tên"),
  phone: z.string().min(9, "Số điện thoại không hợp lệ"),
  service: z.string().min(1, "Vui lòng chọn dịch vụ"),
  note: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

const TRUST_ITEMS = [
  { icon: CheckCircle2, text: "Phản hồi trong 15 phút" },
  { icon: Shield, text: "Bảo mật thông tin" },
  { icon: Clock, text: "Hẹn đúng giờ" },
];

export default function BookingFormSection() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", phone: "", service: "", note: "" },
  });

  const onSubmit = async (values: FormValues) => {
    setError(null);
    setSubmitting(true);
    try {
      const apiBase = import.meta.env.VITE_API_URL?.replace(/\/+$/, "");
      if (apiBase) {
        const res = await fetch(`${apiBase}/api/appointments`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...values, date: "", time: "" }),
        });
        if (!res.ok) throw new Error("fail");
      }
      setSubmitted(true);
    } catch {
      setError(`Không gửi được. Vui lòng gọi ${BRAND.hotline}`);
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    const n = sessionStorage.getItem("prefill_name");
    const p = sessionStorage.getItem("prefill_phone");
    if (n) form.setValue("name", n);
    if (p) form.setValue("phone", p);
    sessionStorage.removeItem("prefill_name");
    sessionStorage.removeItem("prefill_phone");
  }, [form]);

  return (
    <section id="booking-form" className="py-16 md:py-24 section-cream section-texture relative overflow-hidden scroll-mt-24">
      <div className="container-custom container-narrow">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="gradient-border rounded-[28px] p-[2px]"
        >
          <div className="card-luxury overflow-hidden !translate-y-0 !p-0 !rounded-[26px]">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 md:p-10 lg:p-12 bg-[#0D1B2A] text-white flex flex-col justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_0%_100%,rgba(200,155,60,0.12),transparent_60%)]" />
                <div className="relative">
                  <p className="text-[#E8C46A] text-xs font-bold uppercase tracking-[0.3em] mb-3">Đặt lịch</p>
                  <h2 className="font-display text-2xl md:text-3xl font-bold mb-3 leading-tight">
                    NHẬN TƯ VẤN MIỄN PHÍ
                    <br />
                    <span className="text-[#C89B3C]">TỪ CHUYÊN GIA</span>
                  </h2>
                  <p className="text-white/75 text-body mb-6">
                    Vui lòng để lại thông tin — Nha Khoa Đăng Khoa sẽ liên hệ trong thời gian sớm nhất.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {TRUST_ITEMS.map(({ icon: Icon, text }) => (
                      <li key={text} className="flex items-center gap-2.5 text-sm text-white/80">
                        <Icon className="w-4 h-4 text-[#C89B3C] shrink-0" />
                        {text}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`tel:${BRAND.hotlineRaw}`}
                    className="inline-flex items-center gap-2 text-[#E8C46A] font-bold hover:text-white transition-colors mb-8"
                  >
                    <Phone className="w-4 h-4" />
                    {BRAND.hotline}
                  </a>
                  <div className="hidden lg:block relative max-w-xs">
                    <div className="gradient-border rounded-[20px] p-[2px]">
                      <img
                        src={IMAGES.testimonials.nguyenThiKimHanh}
                        alt=""
                        className="w-full rounded-[18px] object-cover aspect-[3/4]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-10 lg:p-12 bg-white">
                <h3 className="font-display font-bold text-[#0D1B2A] text-lg md:text-xl mb-1 uppercase tracking-wide">
                  Đặt lịch hẹn thăm khám
                </h3>
                <p className="text-[#0D1B2A]/50 text-sm mb-6">Điền form — chúng tôi gọi lại xác nhận</p>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full gold-gradient flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-[#C89B3C] font-bold text-lg mb-2">Đã gửi yêu cầu!</p>
                    <p className="text-[#0D1B2A]/70 text-sm">Chúng tôi sẽ gọi lại sớm nhất có thể.</p>
                  </div>
                ) : (
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-[#0D1B2A]/80 mb-1.5">Họ và tên</label>
                      <input
                        {...form.register("name")}
                        className="w-full h-12 px-4 rounded-xl border border-black/10 bg-[#FAFAF8] focus:border-[#C89B3C] focus:ring-2 focus:ring-[#C89B3C]/20 outline-none transition-all"
                        placeholder="Nguyễn Văn A"
                      />
                      {form.formState.errors.name && (
                        <p className="text-red-500 text-xs mt-1">{form.formState.errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#0D1B2A]/80 mb-1.5">Số điện thoại</label>
                      <input
                        {...form.register("phone")}
                        type="tel"
                        className="w-full h-12 px-4 rounded-xl border border-black/10 bg-[#FAFAF8] focus:border-[#C89B3C] focus:ring-2 focus:ring-[#C89B3C]/20 outline-none transition-all"
                        placeholder="09xx xxx xxx"
                      />
                      {form.formState.errors.phone && (
                        <p className="text-red-500 text-xs mt-1">{form.formState.errors.phone.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#0D1B2A]/80 mb-1.5">Dịch vụ quan tâm</label>
                      <select
                        {...form.register("service")}
                        className="w-full h-12 px-4 rounded-xl border border-black/10 bg-[#FAFAF8] focus:border-[#C89B3C] focus:ring-2 focus:ring-[#C89B3C]/20 outline-none"
                      >
                        <option value="">Chọn dịch vụ</option>
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.name}>{s.name}</option>
                        ))}
                      </select>
                      {form.formState.errors.service && (
                        <p className="text-red-500 text-xs mt-1">{form.formState.errors.service.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#0D1B2A]/80 mb-1.5">Nội dung (tuỳ chọn)</label>
                      <textarea
                        {...form.register("note")}
                        rows={3}
                        className="w-full px-4 py-3 rounded-xl border border-black/10 bg-[#FAFAF8] focus:border-[#C89B3C] focus:ring-2 focus:ring-[#C89B3C]/20 outline-none resize-none"
                        placeholder="Mô tả nhu cầu của bạn..."
                      />
                    </div>
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <button type="submit" disabled={submitting} className="btn-gold w-full !h-12 disabled:opacity-60">
                      {submitting ? "Đang gửi..." : "Đặt lịch ngay"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
