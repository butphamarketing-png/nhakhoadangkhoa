import { Switch, Route, Router as WouterRouter, Redirect } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import LoginPage from "@/pages/LoginPage";
import DashboardPage from "@/pages/DashboardPage";
import LichHenPage from "@/pages/LichHenPage";
import KhachHangPage from "@/pages/KhachHangPage";
import DichVuPage from "@/pages/DichVuPage";
import BacSiPage from "@/pages/BacSiPage";
import BaiVietPage from "@/pages/BaiVietPage";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/login" component={LoginPage} />
      <Route path="/" component={DashboardPage} />
      <Route path="/lich-hen" component={LichHenPage} />
      <Route path="/khach-hang" component={KhachHangPage} />
      <Route path="/dich-vu" component={DichVuPage} />
      <Route path="/bac-si" component={BacSiPage} />
      <Route path="/bai-viet" component={BaiVietPage} />
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
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
