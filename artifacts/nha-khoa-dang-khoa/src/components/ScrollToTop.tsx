import { useEffect } from "react";
import { useLocation } from "wouter";

/** Cuộn về đầu trang mỗi khi đổi route (menu, bài viết, dịch vụ…) */
export default function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}
