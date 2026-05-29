import { useState } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  const [, setLocation] = useLocation();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setLocation("/");
    }, 1200);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #050e1a 0%, #0D1B2A 60%, #0a1520 100%)" }}>

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #C89B3C 0%, transparent 70%)" }} />
        <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full opacity-5"
          style={{ background: "#C89B3C", filter: "blur(40px)" }} />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 rounded-full opacity-5"
          style={{ background: "#C89B3C", filter: "blur(60px)" }} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-sm mx-4"
      >
        {/* Card */}
        <div className="rounded-3xl p-8 shadow-2xl"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(200,155,60,0.2)", backdropFilter: "blur(20px)" }}>

          {/* Logo */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl gold-gradient flex items-center justify-center mx-auto mb-4 shadow-lg"
              style={{ boxShadow: "0 0 30px rgba(200,155,60,0.3)" }}>
              <svg viewBox="0 0 24 24" fill="white" className="w-9 h-9">
                <path d="M12 2C9.5 2 7.5 3.5 6.5 5.5C5.5 3.5 3.5 2 1 2C1 7 4 12 6.5 14.5C7.5 15.5 8.5 16 9.5 16C9.5 18 10 20 12 22C14 20 14.5 18 14.5 16C15.5 16 16.5 15.5 17.5 14.5C20 12 23 7 23 2C20.5 2 18.5 3.5 17.5 5.5C16.5 3.5 14.5 2 12 2Z" />
              </svg>
            </div>
            <h1 className="text-xl font-extrabold text-white mb-1">Nha Khoa Đăng Khoa</h1>
            <p className="text-white/40 text-sm">Admin Panel — Đăng nhập</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
              <Input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="pl-10 h-11 rounded-xl text-white placeholder:text-white/30 border-white/10 bg-white/5 focus:border-[#C89B3C] focus:ring-[#C89B3C]/20"
                data-testid="input-login-email"
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
              <Input
                type={show ? "text" : "password"}
                placeholder="Mật khẩu"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="pl-10 pr-10 h-11 rounded-xl text-white placeholder:text-white/30 border-white/10 bg-white/5 focus:border-[#C89B3C] focus:ring-[#C89B3C]/20"
                data-testid="input-login-password"
              />
              <button type="button" onClick={() => setShow(!show)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors">
                {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 text-white/40 cursor-pointer">
                <input type="checkbox" className="rounded" />
                Ghi nhớ đăng nhập
              </label>
              <button type="button" className="text-[#C89B3C] hover:underline">Quên mật khẩu?</button>
            </div>
            <Button type="submit" className="w-full gold-gradient text-white border-0 rounded-xl h-11 font-bold text-sm"
              disabled={loading} data-testid="button-login-submit">
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4" />
                    <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  Đang đăng nhập...
                </span>
              ) : "Đăng nhập"}
            </Button>
          </form>

          <p className="text-center text-white/25 text-xs mt-6">
            Demo: admin@nhakhoadangkhoa.vn / bất kỳ mật khẩu
          </p>
        </div>
      </motion.div>
    </div>
  );
}
