import { Outlet } from "react-router-dom";

import Header from "@/components/header";

const AppLayout = () => {
  return (
    <div>
      <main className="min-h-screen container ">
        <Header />
        <Outlet />
      </main>
      <div className="">footer</div>
    </div>
  );
};

export default AppLayout;
