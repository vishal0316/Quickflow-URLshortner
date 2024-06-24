import { Outlet } from "react-router-dom";
import { ModeToggle } from "./../components/mode-toggle";
import Header from "@/components/header";

const AppLayout = () => {
  return (
    <div>
      <main className="min-h-screen container ">
        <Header />
        <Outlet />
      </main>
      <div className="p-10">
        <ModeToggle />
      </div>
    </div>
  );
};

export default AppLayout;
