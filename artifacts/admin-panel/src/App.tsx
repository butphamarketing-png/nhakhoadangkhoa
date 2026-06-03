import { Switch, Route, Router as WouterRouter, Redirect } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import AuthGate from "@/components/AuthGate";
import LoginPage from "@/pages/LoginPage";
import DashboardPage from "@/pages/DashboardPage";
import LichHenPage from "@/pages/LichHenPage";
import KhachHangPage from "@/pages/KhachHangPage";
import DichVuPage from "@/pages/DichVuPage";
import DichVuCatalogPage from "@/pages/DichVuCatalogPage";
import BacSiPage from "@/pages/BacSiPage";
import BaiVietPage from "@/pages/BaiVietPage";
import BangGiaPage from "@/pages/BangGiaPage";
import CaiDatPage from "@/pages/CaiDatPage";
import DongBoPage from "@/pages/DongBoPage";
import GioiThieuPage from "@/pages/GioiThieuPage";
import UuDaiPage from "@/pages/UuDaiPage";
import TrangChuPage from "@/pages/TrangChuPage";
import ThuVienPage from "@/pages/ThuVienPage";
import MediaLibraryPage from "@/pages/MediaLibraryPage";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/login" component={LoginPage} />
      <Route path="/" component={DashboardPage} />
      <Route path="/lich-hen" component={LichHenPage} />
      <Route path="/khach-hang" component={KhachHangPage} />
      <Route path="/dich-vu" component={DichVuPage} />
      <Route path="/catalog-dich-vu" component={DichVuCatalogPage} />
      <Route path="/bac-si" component={BacSiPage} />
      <Route path="/bai-viet" component={BaiVietPage} />
      <Route path="/bang-gia" component={BangGiaPage} />
      <Route path="/cai-dat" component={CaiDatPage} />
      <Route path="/dong-bo" component={DongBoPage} />
      <Route path="/gioi-thieu" component={GioiThieuPage} />
      <Route path="/uu-dai" component={UuDaiPage} />
      <Route path="/trang-chu" component={TrangChuPage} />
      <Route path="/thu-vien" component={ThuVienPage} />
      <Route path="/media-library" component={MediaLibraryPage} />
      <Route>
        <Redirect to="/" />
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <AuthGate>
            <Router />
          </AuthGate>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
