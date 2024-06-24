import { Outlet } from "react-router-dom";
import { ModeToggle } from "./../components/mode-toggle";

const AppLayout = () => {
  return (
    <div>
      <main className="min-h-screen container ">
        <Outlet />
      </main>
      <div className="p-10">
        <ModeToggle />
      </div>
    </div>
  );
};

export default AppLayout;
