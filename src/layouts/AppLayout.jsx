import { Outlet } from "react-router-dom";
import AppNav from "../ui/AppNav";
import Footer from "../ui/Footer";

const AppLayout = () => {
  return (
    <div className="mx-auto flex min-h-screen max-w-4xl flex-col justify-between">
      <AppNav />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
