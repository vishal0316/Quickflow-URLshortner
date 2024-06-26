import { QrCode } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <nav className="flex py-4 justify-between">
        <Link to="/">
          <QrCode size={35} className="" />
        </Link>
        <div className="flex gap-4 ">
          <Button onClick={() => navigate("/auth")}>Get Started</Button>
          <ModeToggle />
        </div>
      </nav>
    </div>
  );
};

export default Header;
