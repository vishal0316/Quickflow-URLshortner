import RetroGrid from "@/components/magicui/retro-grid";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Login from "@/components/login";
import Signup from "./../components/signup";
import { UrlState } from "@/context";
import { useEffect } from "react";

const RequireAuth = () => {
  let [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { isAuthenticated, loading } = UrlState();
  const longLink = searchParams.get("createNew");

  useEffect(() => {
    if (isAuthenticated && !loading)
      navigate(`/dashboard?${longLink ? `createNew=${longLink}` : ""}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, loading, navigate]);

  return (
    <div>
      <RetroGrid className="-z-10" />
      <div>
        <div className=" flex flex-col items-center gap-10">
          <h1 className="text-3xl md:text-5xl font-extrabold">
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
      </div>
    </div>
  );
};

export default RequireAuth;
