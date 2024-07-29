import { QrCode } from "lucide-react";
import { Link } from "react-router-dom";

import { ModeToggle } from "./mode-toggle";
import { logout } from "@/db/apiAuth";
import { UrlState } from "@/context";
import { Button } from "./ui/button";

const Header = () => {
  const { user, fetchUser } = UrlState();

  //handle logout and refresh user from state
  function handleLogout() {
    logout();
    fetchUser();
  }
  return (
    <div className="">
      <nav className="flex py-4 justify-between">
        <Link to="/">
          <QrCode size={35} className="" />
        </Link>
        {user && (
          <Button onClick={handleLogout} className="logout">
            Logout
          </Button>
        )}

        <div className="flex gap-4 ">
          <ModeToggle />
        </div>
      </nav>
    </div>
  );
};

export default Header;
