import RetroGrid from "@/components/magicui/retro-grid";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Login from "@/components/login";
import Signup from "./../components/signup";
import { UrlState } from "@/context";
import { useEffect } from "react";

const RequireAuth = () => {
  let [searchParams] = useSearchParams();
  const { loading, user } = UrlState();
  const navigate = useNavigate();
  //if user does exists stop navigation to auth page
  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, []);
  return loading ? (
    <div>Loading</div>
  ) : (
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
