import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CheckCircle, Calendar, Phone, User } from "lucide-react";
import { SERVICES } from "@/lib/constants";

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
      setTimeout(() => { setSubmitted(false); form.reset(); }, 300);
    }
    onOpenChange(val);
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-md w-full rounded-2xl p-0 overflow-hidden border-0">
        <div className="bg-[#0D1B2A] px-6 py-5">
          <DialogHeader>
            <DialogTitle className="text-white text-xl font-bold">
              Đặt Lịch Khám
            </DialogTitle>
            <p className="text-white/60 text-sm mt-1">
              Nha Khoa Đăng Khoa – Uy tín • Chất lượng • Tận tâm
            </p>
          </DialogHeader>
        </div>

        <div className="px-6 py-5">
          {submitted ? (
            <div className="text-center py-8">
              <div className="flex justify-center mb-4">
                <CheckCircle className="w-16 h-16 text-[#C89B3C]" />
              </div>
              <h3 className="text-xl font-bold text-[#0D1B2A] mb-2">Đặt lịch thành công!</h3>
              <p className="text-gray-600 mb-1">
                Cảm ơn bạn đã đặt lịch tại Nha Khoa Đăng Khoa
              </p>
              <p className="text-sm text-gray-500">
                Chúng tôi sẽ gọi xác nhận lịch hẹn trong vòng 30 phút.
              </p>
              <Button
                className="mt-6 gold-gradient text-white border-0 rounded-xl px-8"
                onClick={() => handleClose(false)}
                data-testid="button-close-success"
              >
                Đóng
              </Button>
            </div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#0D1B2A] font-semibold flex items-center gap-2">
                        <User className="w-4 h-4 text-[#C89B3C]" /> Họ và tên
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Nguyễn Văn A" {...field} className="rounded-xl" data-testid="input-name" />
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
                      <FormLabel className="text-[#0D1B2A] font-semibold flex items-center gap-2">
                        <Phone className="w-4 h-4 text-[#C89B3C]" /> Số điện thoại
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="0886868786" {...field} className="rounded-xl" data-testid="input-phone" />
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
                      <FormLabel className="text-[#0D1B2A] font-semibold">Dịch vụ</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger className="rounded-xl" data-testid="select-service">
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
                      <FormLabel className="text-[#0D1B2A] font-semibold flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#C89B3C]" /> Ngày hẹn
                      </FormLabel>
                      <FormControl>
                        <Input type="date" {...field} className="rounded-xl" data-testid="input-date" />
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
                      <FormLabel className="text-[#0D1B2A] font-semibold">Ghi chú (tùy chọn)</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Mô tả tình trạng hoặc yêu cầu thêm..." {...field} className="rounded-xl resize-none" rows={2} data-testid="textarea-note" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full gold-gradient text-white border-0 rounded-xl h-12 font-semibold text-base"
                  data-testid="button-submit-booking"
                >
                  Xác nhận đặt lịch
                </Button>
              </form>
            </Form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
