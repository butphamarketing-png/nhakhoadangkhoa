import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Calendar, Phone, User } from "lucide-react";
import { BRAND, SERVICES } from "@/lib/constants";

const bookingSchema = z.object({
  name: z.string().min(2, "Vui lòng nhập họ tên"),
  phone: z.string().min(9, "Vui lòng nhập số điện thoại hợp lệ"),
  service: z.string().min(1, "Vui lòng chọn dịch vụ"),
  date: z.string().min(1, "Vui lòng chọn ngày hẹn"),
  note: z.string().optional(),
});

type BookingValues = z.infer<typeof bookingSchema>;

interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function BookingModal({ open, onOpenChange }: BookingModalProps) {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<BookingValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: { name: "", phone: "", service: "", date: "", note: "" },
  });

  function onSubmit(_values: BookingValues) {
    setSubmitted(true);
  }

  function handleClose(val: boolean) {
    if (!val) {
      setTimeout(() => {
        setSubmitted(false);
        form.reset();
      }, 300);
    }
    onOpenChange(val);
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-md w-[calc(100%-2rem)] rounded-[24px] p-0 overflow-hidden border border-[#C89B3C]/20 shadow-[0_24px_80px_rgba(13,27,42,0.25)]">
        <div className="bg-[#0D1B2A] px-6 py-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_100%_0%,rgba(200,155,60,0.15),transparent_50%)]" />
          <DialogHeader className="relative">
            <p className="text-[#E8C46A] text-[10px] font-bold uppercase tracking-[0.3em] mb-2">Đặt lịch nhanh</p>
            <DialogTitle className="text-white text-xl font-display font-bold">Đặt Lịch Khám</DialogTitle>
            <p className="text-white/60 text-sm mt-2">
              {BRAND.shortName} — Uy tín • Chất lượng • Tận tâm
            </p>
          </DialogHeader>
        </div>

        <div className="px-6 py-6 bg-[#FAFAF8]">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full gold-gradient flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display text-xl font-bold text-[#0D1B2A] mb-2">Đặt lịch thành công!</h3>
              <p className="text-[#0D1B2A]/70 mb-1">Cảm ơn bạn đã đặt lịch tại Nha Khoa Đăng Khoa</p>
              <p className="text-sm text-[#0D1B2A]/50">Chúng tôi sẽ gọi xác nhận trong vòng 30 phút.</p>
              <button
                type="button"
                className="mt-6 btn-gold !h-11 !px-8"
                onClick={() => handleClose(false)}
                data-testid="button-close-success"
              >
                Đóng
              </button>
            </div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#0D1B2A] font-semibold flex items-center gap-2 text-sm">
                        <User className="w-4 h-4 text-[#C89B3C]" /> Họ và tên
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Nguyễn Văn A" {...field} className="rounded-xl bg-white border-black/10 h-11" data-testid="input-name" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#0D1B2A] font-semibold flex items-center gap-2 text-sm">
                        <Phone className="w-4 h-4 text-[#C89B3C]" /> Số điện thoại
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="0886868786" {...field} className="rounded-xl bg-white border-black/10 h-11" data-testid="input-phone" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#0D1B2A] font-semibold text-sm">Dịch vụ</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger className="rounded-xl bg-white h-11" data-testid="select-service">
                            <SelectValue placeholder="Chọn dịch vụ" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {SERVICES.map((s) => (
                            <SelectItem key={s.id} value={s.id} data-testid={`option-service-${s.id}`}>
                              {s.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#0D1B2A] font-semibold flex items-center gap-2 text-sm">
                        <Calendar className="w-4 h-4 text-[#C89B3C]" /> Ngày hẹn
                      </FormLabel>
                      <FormControl>
                        <Input type="date" {...field} className="rounded-xl bg-white border-black/10 h-11" data-testid="input-date" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="note"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#0D1B2A] font-semibold text-sm">Ghi chú (tùy chọn)</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Mô tả tình trạng hoặc yêu cầu thêm..."
                          {...field}
                          className="rounded-xl resize-none bg-white border-black/10"
                          rows={2}
                          data-testid="textarea-note"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <button type="submit" className="btn-gold w-full !h-12" data-testid="button-submit-booking">
                  Xác nhận đặt lịch
                </button>
                <p className="text-center text-xs text-[#0D1B2A]/45">
                  Hoặc gọi{" "}
                  <a href={`tel:${BRAND.hotlineRaw}`} className="text-[#C89B3C] font-semibold">
                    {BRAND.hotline}
                  </a>
                </p>
              </form>
            </Form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
