import { QrCode } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <nav className="">
        <Link to="/">
          <QrCode className="" />
        </Link>
        <div className="flex gap-4">
          <Button onClick={() => navigate("/auth")}>Get Started</Button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
