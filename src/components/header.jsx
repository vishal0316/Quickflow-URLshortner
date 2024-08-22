import { LinkIcon, QrCode, UserCircle } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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

        <div className="flex gap-4 ">
          <ModeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger>
              <UserCircle />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                {user && (
                  <Button onClick={handleLogout} className="logout">
                    Logout
                  </Button>
                )}
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/dashboard" className="flex">
                  <LinkIcon className="mr-2 h-4 w-4" />
                  My Links
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </div>
  );
};

export default Header;
