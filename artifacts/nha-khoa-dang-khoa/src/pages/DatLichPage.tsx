import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight, Phone, CheckCircle, Calendar, User } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import { useBrand } from "@/lib/brand-context";
import { useServices } from "@/lib/cms-provider";

const schema = z.object({
  name: z.string().min(2, "Vui lòng nhập họ tên"),
  phone: z.string().min(9, "Số điện thoại không hợp lệ"),
  service: z.string().min(1, "Vui lòng chọn dịch vụ"),
  date: z.string().min(1, "Vui lòng chọn ngày"),
  time: z.string().min(1, "Vui lòng chọn khung giờ"),
  note: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

const TIME_SLOTS = ["8:00 – 9:00", "9:00 – 10:00", "10:00 – 11:00", "13:00 – 14:00", "14:00 – 15:00", "15:00 – 16:00", "16:00 – 17:00", "17:00 – 18:00", "18:00 – 19:00"];

export default function DatLichPage() {
  const BRAND = useBrand();
  const SERVICES = useServices();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", phone: "", service: "", date: "", time: "", note: "" },
  });

  const onSubmit = async (values: FormValues) => {
    setSubmitError(null);
    setSubmitting(true);
    try {
      const apiBase = import.meta.env.VITE_API_URL?.replace(/\/+$/, "");
      if (!apiBase) {
        throw new Error("Chưa cấu hình VITE_API_URL trên Vercel. Vui lòng gọi hotline.");
      }
      const res = await fetch(`${apiBase}/api/appointments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        throw new Error("Không gửi được đặt lịch. Vui lòng gọi hotline.");
      }
      setSubmitted(true);
    } catch {
      setSubmitError(
        "Không kết nối được máy chủ. Vui lòng thử lại hoặc gọi " + BRAND.hotline,
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <PageHero
        label="Đặt lịch"
        breadcrumb="Đặt lịch khám"
        title={
          <>
            Đặt Lịch <span className="text-[#C89B3C]">Khám Ngay</span>
          </>
        }
        subtitle="Tư vấn miễn phí — Không chờ đợi — Xác nhận ngay qua điện thoại"
      />

      <section className="section-padding section-cream section-texture">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Info */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}
              className="space-y-5">
              <div className="bg-[#0D1B2A] rounded-2xl p-6 text-white">
                <h3 className="font-bold text-[#C89B3C] mb-4">Thông tin liên hệ</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#C89B3C]" />
                    <a href={`tel:${BRAND.hotlineRaw}`} className="text-white/80 hover:text-[#C89B3C]">{BRAND.hotline}</a>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-4 h-4 flex-shrink-0 mt-0.5">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-[#C89B3C]">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                      </svg>
                    </div>
                    <span className="text-white/70">{BRAND.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-4 h-4 text-[#C89B3C]" />
                    <span className="text-white/70">{BRAND.hours}</span>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
                <h3 className="font-bold text-[#0D1B2A] mb-3">Cam kết của chúng tôi</h3>
                <ul className="space-y-2">
                  {["Xác nhận lịch trong 30 phút", "Tư vấn hoàn toàn miễn phí", "Không phát sinh chi phí", "Bảo mật thông tin khách hàng", "Đội ngũ bác sĩ chuyên môn cao"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-[#C89B3C] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="lg:col-span-2">
              {submitted ? (
                <div className="bg-white rounded-3xl shadow-xl p-12 text-center border border-amber-100">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", duration: 0.5 }}>
                    <div className="w-20 h-20 rounded-full gold-gradient flex items-center justify-center mx-auto mb-6 gold-glow">
                      <CheckCircle className="w-10 h-10 text-white" />
                    </div>
                  </motion.div>
                  <h2 className="text-2xl font-extrabold text-[#0D1B2A] mb-3">Đặt lịch thành công!</h2>
                  <p className="text-gray-500 mb-2">Cảm ơn bạn đã tin tưởng Nha Khoa Đăng Khoa.</p>
                  <p className="text-sm text-gray-400 mb-8">Chúng tôi sẽ gọi xác nhận lịch hẹn trong vòng 30 phút.</p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a href={`tel:${BRAND.hotlineRaw}`}>
                      <Button className="gold-gradient text-white border-0 rounded-xl px-6 h-11 font-bold" data-testid="button-success-phone">
                        <Phone className="w-4 h-4 mr-2" /> {BRAND.hotline}
                      </Button>
                    </a>
                    <Link href="/">
                      <Button variant="outline" className="rounded-xl px-6 h-11 font-bold border-2 border-[#0D1B2A] text-[#0D1B2A]" data-testid="button-success-home">
                        Về trang chủ
                      </Button>
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-3xl shadow-xl p-8 border border-amber-100">
                  <h2 className="text-2xl font-extrabold text-[#0D1B2A] mb-2">Thông tin đặt lịch</h2>
                  <p className="text-gray-400 text-sm mb-7">Điền thông tin và chúng tôi sẽ liên hệ xác nhận trong 30 phút.</p>

                  {submitError && (
                    <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3 mb-4">
                      {submitError}
                    </p>
                  )}

                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <FormField control={form.control} name="name" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-semibold text-[#0D1B2A] flex items-center gap-2">
                              <User className="w-3.5 h-3.5 text-[#C89B3C]" /> Họ và tên *
                            </FormLabel>
                            <FormControl><Input placeholder="Nguyễn Văn A" {...field} className="rounded-xl h-11" data-testid="input-datlick-name" /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />
                        <FormField control={form.control} name="phone" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-semibold text-[#0D1B2A] flex items-center gap-2">
                              <Phone className="w-3.5 h-3.5 text-[#C89B3C]" /> Số điện thoại *
                            </FormLabel>
                            <FormControl><Input placeholder="0886868786" {...field} className="rounded-xl h-11" data-testid="input-datlich-phone" /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />
                      </div>

                      <FormField control={form.control} name="service" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-semibold text-[#0D1B2A]">Dịch vụ cần tư vấn *</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger className="rounded-xl h-11" data-testid="select-datlich-service">
                                <SelectValue placeholder="Chọn dịch vụ" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {SERVICES.map((s) => (
                                <SelectItem key={s.id} value={s.id}>{s.name}</SelectItem>
                              ))}
                              <SelectItem value="other">Khác / Chưa rõ</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )} />

                      <div className="grid sm:grid-cols-2 gap-4">
                        <FormField control={form.control} name="date" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-semibold text-[#0D1B2A] flex items-center gap-2">
                              <Calendar className="w-3.5 h-3.5 text-[#C89B3C]" /> Ngày hẹn *
                            </FormLabel>
                            <FormControl><Input type="date" {...field} className="rounded-xl h-11" data-testid="input-datlich-date" /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />
                        <FormField control={form.control} name="time" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-semibold text-[#0D1B2A]">Khung giờ *</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger className="rounded-xl h-11" data-testid="select-datlich-time">
                                  <SelectValue placeholder="Chọn giờ" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {TIME_SLOTS.map((t) => (
                                  <SelectItem key={t} value={t}>{t}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )} />
                      </div>

                      <FormField control={form.control} name="note" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-semibold text-[#0D1B2A]">Ghi chú thêm (tùy chọn)</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Mô tả tình trạng, câu hỏi hoặc yêu cầu đặc biệt..." {...field} className="rounded-xl resize-none" rows={3} data-testid="textarea-datlich-note" />
                          </FormControl>
                        </FormItem>
                      )} />

                      <Button
                        type="submit"
                        disabled={submitting}
                        className="w-full gold-gradient text-white border-0 rounded-xl h-12 font-bold text-base"
                        data-testid="button-datlich-submit"
                      >
                        {submitting ? "Đang gửi..." : "Xác nhận đặt lịch"}
                      </Button>
                    </form>
                  </Form>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
