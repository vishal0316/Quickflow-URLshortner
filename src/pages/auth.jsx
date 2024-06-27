import RetroGrid from "@/components/magicui/retro-grid";
import { QrCode } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Login from "@/components/login";
import Signup from "./../components/signup";

const RequireAuth = () => {
  const [searchParams] = useSearchParams();
  return (
    <div>
      <div className="p-4">
        <Link to="/">
          <QrCode size={35} className="" />
        </Link>
      </div>
      <div>
        <div className="mt-30 flex flex-col items-center gap-10">
          <h1 className="text-5xl font-extrabold">
            {searchParams.get("createNew")
              ? "Let's Login First"
              : "  Login / Signup"}
          </h1>
          <Tabs defaultValue="login" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="signup">Signup</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <Login />
            </TabsContent>
            <TabsContent value="signup">
              <Signup />
            </TabsContent>
          </Tabs>
        </div>
        <RetroGrid />
      </div>
    </div>
  );
};

export default RequireAuth;
