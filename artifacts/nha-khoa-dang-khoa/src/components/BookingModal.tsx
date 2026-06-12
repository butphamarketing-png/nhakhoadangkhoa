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
import { useBrand } from "@/lib/brand-context";
import { useServices } from "@/lib/cms-provider";

const bookingSchema = z.object({
  name: z.string().min(2, "Vui lòng nhập họ tên"),
  phone: z.string().min(9, "Vui lòng nhập số điện thoại hợp lệ"),
  service: z.string().min(1, "Vui lòng chọn dịch vụ"),
  date: z.string().optional(),
  note: z.string().optional(),
});

type BookingValues = z.infer<typeof bookingSchema>;

interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function BookingModal({ open, onOpenChange }: BookingModalProps) {
  const BRAND = useBrand();
  const SERVICES = useServices();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const form = useForm<BookingValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: { name: "", phone: "", service: "", date: "", note: "" },
  });

  async function onSubmit(values: BookingValues) {
    setSubmitError(null);
    setSubmitting(true);
    try {
      const apiBase = import.meta.env.VITE_API_URL?.replace(/\/+$/, "") || window.location.origin;
      const res = await fetch(`${apiBase}/api/appointments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("fail");
      setSubmitted(true);
    } catch {
      setSubmitError(`Không gửi được. Vui lòng gọi ${BRAND.hotline}`);
    } finally {
      setSubmitting(false);
    }
  }

  function handleClose(val: boolean) {
    if (!val) {
      setTimeout(() => {
        setSubmitted(false);
        setSubmitError(null);
        form.reset();
      }, 300);
    }
    onOpenChange(val);
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-[min(100vw-1.5rem,22rem)] sm:max-w-sm w-full rounded-2xl p-0 gap-0 overflow-hidden border border-[#C89B3C]/20 shadow-xl max-h-[min(90vh,32rem)] flex flex-col">
        <div className="bg-[#0D1B2A] px-4 py-3.5 relative overflow-hidden flex-shrink-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_100%_0%,rgba(200,155,60,0.12),transparent_50%)]" />
          <DialogHeader className="relative space-y-0.5">
            <p className="text-[#E8C46A] text-[9px] font-bold uppercase tracking-[0.25em]">Đặt lịch nhanh</p>
            <DialogTitle className="text-white text-base font-display font-bold leading-tight">
              Đặt lịch khám
            </DialogTitle>
          </DialogHeader>
        </div>

        <div className="px-4 py-4 bg-[#FAFAF8] overflow-y-auto flex-1">
          {submitted ? (
            <div className="text-center py-4">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full gold-gradient flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-display text-base font-bold text-[#0D1B2A] mb-1">Đặt lịch thành công!</h3>
              <p className="text-sm text-[#0D1B2A]/60">Chúng tôi sẽ gọi xác nhận trong 30 phút.</p>
              <button
                type="button"
                className="mt-4 btn-gold !h-10 !px-6 text-sm w-full"
                onClick={() => handleClose(false)}
                data-testid="button-close-success"
              >
                Đóng
              </button>
            </div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                {submitError && (
                  <p className="text-xs text-red-600 bg-red-50 rounded-lg px-3 py-2">{submitError}</p>
                )}

                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="space-y-1">
                      <FormLabel className="text-[#0D1B2A] font-semibold flex items-center gap-1.5 text-xs">
                        <User className="w-3.5 h-3.5 text-[#C89B3C]" /> Họ và tên
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Nguyễn Văn A" {...field} className="rounded-lg bg-white border-black/10 h-9 text-sm" data-testid="input-name" />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="space-y-1">
                      <FormLabel className="text-[#0D1B2A] font-semibold flex items-center gap-1.5 text-xs">
                        <Phone className="w-3.5 h-3.5 text-[#C89B3C]" /> Số điện thoại
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="0886868786" {...field} className="rounded-lg bg-white border-black/10 h-9 text-sm" data-testid="input-phone" />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem className="space-y-1">
                      <FormLabel className="text-[#0D1B2A] font-semibold text-xs">Dịch vụ</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger className="rounded-lg bg-white h-9 text-sm" data-testid="select-service">
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
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem className="space-y-1">
                      <FormLabel className="text-[#0D1B2A] font-semibold flex items-center gap-1.5 text-xs">
                        <Calendar className="w-3.5 h-3.5 text-[#C89B3C]" /> Ngày hẹn (tùy chọn)
                      </FormLabel>
                      <FormControl>
                        <Input type="date" {...field} className="rounded-lg bg-white border-black/10 h-9 text-sm" data-testid="input-date" />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="note"
                  render={({ field }) => (
                    <FormItem className="space-y-1">
                      <FormLabel className="text-[#0D1B2A] font-semibold text-xs">Ghi chú</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Mô tả thêm..."
                          {...field}
                          className="rounded-lg resize-none bg-white border-black/10 text-sm min-h-[56px]"
                          rows={2}
                          data-testid="textarea-note"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-gold w-full !h-10 text-sm disabled:opacity-60"
                  data-testid="button-submit-booking"
                >
                  {submitting ? "Đang gửi..." : "Xác nhận đặt lịch"}
                </button>
              </form>
            </Form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
