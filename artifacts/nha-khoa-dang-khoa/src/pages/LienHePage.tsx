import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight, Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { BRAND, SERVICES } from "@/lib/constants";

const schema = z.object({
  name: z.string().min(2, "Vui lòng nhập tên"),
  phone: z.string().min(9, "Số điện thoại không hợp lệ"),
  email: z.string().email("Email không hợp lệ").optional().or(z.literal("")),
  subject: z.string().min(2, "Vui lòng nhập tiêu đề"),
  message: z.string().min(10, "Vui lòng nhập nội dung"),
});

type FormValues = z.infer<typeof schema>;

const HOURS = [
  { day: "Thứ 2 – Thứ 6", time: "8:00 – 20:00" },
  { day: "Thứ 7", time: "8:00 – 20:00" },
  { day: "Chủ nhật", time: "8:00 – 17:00" },
];

export default function LienHePage() {
  const [submitted, setSubmitted] = useState(false);
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", phone: "", email: "", subject: "", message: "" },
  });

  return (
    <div>
      <div className="navy-gradient py-20">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-6">
            <Link href="/"><span className="hover:text-white cursor-pointer">Trang chủ</span></Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Liên hệ</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Liên Hệ <span className="text-[#C89B3C]">Với Chúng Tôi</span>
          </h1>
          <p className="text-white/70 text-lg">Chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7</p>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-5"
            >
              <div className="bg-[#0D1B2A] rounded-2xl p-6 text-white">
                <h3 className="font-bold text-xl mb-5 text-[#C89B3C]">Thông tin liên hệ</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#C89B3C] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-sm mb-1">Địa chỉ</div>
                      <div className="text-white/70 text-sm">{BRAND.address}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#C89B3C] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-sm mb-1">Hotline</div>
                      <a href={`tel:${BRAND.hotlineRaw}`} className="text-white/70 text-sm hover:text-[#C89B3C] transition-colors" data-testid="link-contact-phone">
                        {BRAND.hotline}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#C89B3C] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-sm mb-1">Email</div>
                      <a href={`mailto:${BRAND.email}`} className="text-white/70 text-sm hover:text-[#C89B3C] transition-colors">
                        {BRAND.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                <h3 className="font-bold text-[#0D1B2A] text-lg mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#C89B3C]" />
                  Giờ làm việc
                </h3>
                <div className="space-y-3">
                  {HOURS.map((h, i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-amber-200 last:border-0">
                      <span className="text-sm text-gray-600 font-medium">{h.day}</span>
                      <span className="text-sm font-bold text-[#0D1B2A]">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-[#0D1B2A] mb-4">Dịch vụ tư vấn</h3>
                <div className="space-y-2">
                  {SERVICES.slice(0, 4).map((s) => (
                    <div key={s.id} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-[#C89B3C] flex-shrink-0" />
                      {s.name}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-lg">
                <h3 className="font-extrabold text-[#0D1B2A] text-2xl mb-2">Gửi tin nhắn</h3>
                <p className="text-gray-500 text-sm mb-6">Chúng tôi sẽ phản hồi trong vòng 1 giờ làm việc.</p>

                {submitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-[#C89B3C] mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-[#0D1B2A] mb-2">Gửi thành công!</h3>
                    <p className="text-gray-500">Chúng tôi sẽ liên hệ bạn sớm nhất.</p>
                  </div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(() => setSubmitted(true))} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <FormField control={form.control} name="name" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-semibold text-[#0D1B2A]">Họ và tên *</FormLabel>
                            <FormControl><Input placeholder="Nguyễn Văn A" {...field} className="rounded-xl" data-testid="input-contact-name" /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />
                        <FormField control={form.control} name="phone" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-semibold text-[#0D1B2A]">Số điện thoại *</FormLabel>
                            <FormControl><Input placeholder="0886868786" {...field} className="rounded-xl" data-testid="input-contact-phone" /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />
                      </div>
                      <FormField control={form.control} name="email" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-semibold text-[#0D1B2A]">Email (tùy chọn)</FormLabel>
                          <FormControl><Input placeholder="email@gmail.com" {...field} className="rounded-xl" data-testid="input-contact-email" /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="subject" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-semibold text-[#0D1B2A]">Tiêu đề *</FormLabel>
                          <FormControl><Input placeholder="Tư vấn implant nha khoa" {...field} className="rounded-xl" data-testid="input-contact-subject" /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="message" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-semibold text-[#0D1B2A]">Nội dung *</FormLabel>
                          <FormControl><Textarea placeholder="Mô tả tình trạng hoặc câu hỏi của bạn..." {...field} className="rounded-xl resize-none" rows={4} data-testid="textarea-contact-message" /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <Button type="submit" className="w-full gold-gradient text-white border-0 rounded-xl h-12 font-bold" data-testid="button-contact-submit">
                        Gửi tin nhắn
                      </Button>
                    </form>
                  </Form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-80 bg-gray-100">
        <iframe
          src="https://maps.google.com/maps?q=345+Dien+Bien+Phu,+Tay+Ninh,+Vietnam&output=embed&z=15"
          width="100%" height="100%" style={{ border: 0 }}
          allowFullScreen loading="lazy" title="Bản đồ Nha Khoa Đăng Khoa"
        />
      </section>
    </div>
  );
}
