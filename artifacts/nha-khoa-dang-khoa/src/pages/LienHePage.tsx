import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import PageHero from "@/components/PageHero";
import { BRAND } from "@/lib/constants";
import { CONTACT_HOURS } from "@/lib/brand-hours";
import { fadeUp } from "@/lib/motion";

const schema = z.object({
  name: z.string().min(2, "Vui lòng nhập tên"),
  phone: z.string().min(9, "Số điện thoại không hợp lệ"),
  email: z.string().email("Email không hợp lệ").optional().or(z.literal("")),
  subject: z.string().min(2, "Vui lòng nhập tiêu đề"),
  message: z.string().min(10, "Vui lòng nhập nội dung"),
});

type FormValues = z.infer<typeof schema>;

export default function LienHePage() {
  const [submitted, setSubmitted] = useState(false);
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", phone: "", email: "", subject: "", message: "" },
  });

  return (
    <div>
      <PageHero
        label="Liên hệ"
        breadcrumb="Liên hệ"
        title={
          <>
            Liên Hệ <span className="text-[#C89B3C]">Với Chúng Tôi</span>
          </>
        }
        subtitle="Chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7"
      />

      <section className="section-padding section-cream section-texture">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="lg:col-span-2 space-y-5"
            >
              <div className="card-luxury !p-0 overflow-hidden !translate-y-0">
                <div className="p-6 bg-[#0D1B2A] text-white">
                  <h3 className="font-display font-bold text-xl mb-5 text-[#C89B3C]">Thông tin liên hệ</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#C89B3C] shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-sm mb-1">Địa chỉ</div>
                        <div className="text-white/70 text-sm leading-relaxed">{BRAND.address}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-[#C89B3C] shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-sm mb-1">Hotline</div>
                        <a href={`tel:${BRAND.hotlineRaw}`} className="text-[#E8C46A] font-bold hover:underline" data-testid="link-contact-phone">
                          {BRAND.hotline}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-[#C89B3C] shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-sm mb-1">Email</div>
                        <a href={`mailto:${BRAND.email}`} className="text-white/70 text-sm hover:text-[#C89B3C] break-all">
                          {BRAND.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-luxury p-6 !translate-y-0">
                <h3 className="font-bold text-[#0D1B2A] text-lg mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#C89B3C]" />
                  Giờ làm việc
                </h3>
                <div className="space-y-3">
                  {CONTACT_HOURS.map((h) => (
                    <div key={h.day} className="flex justify-between items-center py-2 border-b border-black/[0.05] last:border-0">
                      <span className="text-sm text-[#0D1B2A]/60 font-medium">{h.day}</span>
                      <span className="text-sm font-bold text-[#0D1B2A]">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="lg:col-span-3"
            >
              <div className="gradient-border rounded-[28px] p-[2px]">
                <div className="card-luxury p-8 md:p-10 !rounded-[26px] !translate-y-0">
                  <h3 className="font-display font-bold text-[#0D1B2A] text-2xl mb-2">Gửi tin nhắn</h3>
                  <p className="text-[#0D1B2A]/55 text-sm mb-6">Chúng tôi sẽ phản hồi trong vòng 1 giờ làm việc.</p>

                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full gold-gradient flex items-center justify-center">
                        <CheckCircle2 className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-display text-xl font-bold text-[#0D1B2A] mb-2">Gửi thành công!</h3>
                      <p className="text-[#0D1B2A]/60">Chúng tôi sẽ liên hệ bạn sớm nhất.</p>
                    </div>
                  ) : (
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(() => setSubmitted(true))} className="space-y-4">
                        <div className="grid sm:grid-cols-2 gap-4">
                          <FormField control={form.control} name="name" render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-semibold text-[#0D1B2A] text-sm">Họ và tên *</FormLabel>
                              <FormControl><Input placeholder="Nguyễn Văn A" {...field} className="rounded-xl bg-[#FAFAF8] h-11" data-testid="input-contact-name" /></FormControl>
                              <FormMessage />
                            </FormItem>
                          )} />
                          <FormField control={form.control} name="phone" render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-semibold text-[#0D1B2A] text-sm">Số điện thoại *</FormLabel>
                              <FormControl><Input placeholder="0886868786" {...field} className="rounded-xl bg-[#FAFAF8] h-11" data-testid="input-contact-phone" /></FormControl>
                              <FormMessage />
                            </FormItem>
                          )} />
                        </div>
                        <FormField control={form.control} name="email" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-semibold text-[#0D1B2A] text-sm">Email (tùy chọn)</FormLabel>
                            <FormControl><Input placeholder="email@gmail.com" {...field} className="rounded-xl bg-[#FAFAF8] h-11" data-testid="input-contact-email" /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />
                        <FormField control={form.control} name="subject" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-semibold text-[#0D1B2A] text-sm">Tiêu đề *</FormLabel>
                            <FormControl><Input placeholder="Tư vấn implant nha khoa" {...field} className="rounded-xl bg-[#FAFAF8] h-11" data-testid="input-contact-subject" /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />
                        <FormField control={form.control} name="message" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-semibold text-[#0D1B2A] text-sm">Nội dung *</FormLabel>
                            <FormControl><Textarea placeholder="Mô tả tình trạng hoặc câu hỏi của bạn..." {...field} className="rounded-xl resize-none bg-[#FAFAF8]" rows={4} data-testid="textarea-contact-message" /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />
                        <button type="submit" className="btn-gold w-full !h-12" data-testid="button-contact-submit">
                          Gửi tin nhắn
                        </button>
                      </form>
                    </Form>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="h-80 md:h-96 relative">
        <div className="absolute inset-0 ring-4 ring-[#C89B3C]/20 ring-inset pointer-events-none z-10" />
        <iframe
          src={BRAND.mapEmbed}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Bản đồ Nha Khoa Đăng Khoa"
        />
      </section>
    </div>
  );
}
