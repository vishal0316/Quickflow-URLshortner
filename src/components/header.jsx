import { QrCode } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import { logout } from "@/db/apiAuth";
import { UrlState } from "@/context";
import { useEffect } from "react";

const Header = () => {
  const { user, fetchUser } = UrlState();
  const navigate = useNavigate();
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
          <button onClick={handleLogout} className="logout">
            Logout
          </button>
        )}

        <div className="flex gap-4 ">
          <Button onClick={() => navigate("/auth")}>Get Started</Button>
          <ModeToggle />
        </div>
      </nav>
    </div>
  );
};

export default Header;
