import { useState } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrandProvider } from "@/lib/brand-context";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import LoadingScreen from "@/components/LoadingScreen";
import CustomCursor from "@/components/CustomCursor";

import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import AboutSectionPage from "@/pages/AboutSectionPage";
import ServicesPage from "@/pages/ServicesPage";
import ServiceGroupPage from "@/pages/ServiceGroupPage";
import BangGiaPage from "@/pages/BangGiaPage";
import KienThucPage from "@/pages/KienThucPage";
import BlogPostPage from "@/pages/BlogPostPage";
import KhachHangPage from "@/pages/KhachHangPage";
import LienHePage from "@/pages/LienHePage";
import FaqPage from "@/pages/FaqPage";
import UuDaiPage from "@/pages/UuDaiPage";
import TruocSauPage from "@/pages/TruocSauPage";
import TuyenDungPage from "@/pages/TuyenDungPage";
import BacSiPage from "@/pages/BacSiPage";
import DatLichPage from "@/pages/DatLichPage";
import ImplantPage from "@/pages/services/ImplantPage";
import TayTrangPage from "@/pages/services/TayTrangPage";
import NoiNhaPage from "@/pages/services/NoiNhaPage";
import NhoRangKhonPage from "@/pages/services/NhoRangKhonPage";
import ChinhSachPage from "@/pages/ChinhSachPage";
import NotFoundPage from "@/pages/NotFoundPage";

const queryClient = new QueryClient();

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/gioi-thieu/:slug" component={AboutSectionPage} />
        <Route path="/gioi-thieu" component={AboutPage} />
        <Route path="/dich-vu" component={ServicesPage} />
        <Route path="/dich-vu/implant" component={ImplantPage} />
        <Route path="/dich-vu/tay-trang" component={TayTrangPage} />
        <Route path="/dich-vu/noi-nha" component={NoiNhaPage} />
        <Route path="/dich-vu/nho-rang-khon" component={NhoRangKhonPage} />
        <Route path="/dich-vu/:groupId" component={ServiceGroupPage} />
        <Route path="/bang-gia" component={BangGiaPage} />
        <Route path="/kien-thuc/:slug" component={BlogPostPage} />
        <Route path="/kien-thuc" component={KienThucPage} />
        <Route path="/khach-hang" component={KhachHangPage} />
        <Route path="/lien-he" component={LienHePage} />
        <Route path="/faq" component={FaqPage} />
        <Route path="/uu-dai" component={UuDaiPage} />
        <Route path="/truoc-sau" component={TruocSauPage} />
        <Route path="/tuyen-dung" component={TuyenDungPage} />
        <Route path="/dat-lich" component={DatLichPage} />
        <Route path="/bac-si/:id" component={BacSiPage} />
        <Route path="/chinh-sach-bao-hanh">
          {() => <ChinhSachPage title="Chính sách bảo hành" />}
        </Route>
        <Route path="/chinh-sach-thanh-toan">
          {() => <ChinhSachPage title="Chính sách thanh toán" />}
        </Route>
        <Route path="/dieu-khoan">
          {() => <ChinhSachPage title="Điều khoản dịch vụ" />}
        </Route>
        <Route path="/bao-mat">
          {() => <ChinhSachPage title="Chính sách bảo mật" />}
        </Route>
        <Route component={NotFoundPage} />
      </Switch>
    </Layout>
  );
}

function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}
        {loaded && (
          <>
            <CustomCursor />
            <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
              <BrandProvider>
                <Router />
              </BrandProvider>
            </WouterRouter>
          </>
        )}
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
