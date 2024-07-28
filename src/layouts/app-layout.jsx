import {
  Outlet,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

import Header from "@/components/header";
import { useEffect } from "react";
import { UrlState } from "@/context";

const AppLayout = () => {
  const navigate = useNavigate();
  let [searchParams] = useSearchParams();
  const { isAuthenticated, loading, user } = UrlState();
  const longLink = searchParams.get("createNew");

  //handle auth navigation
  useEffect(() => {
    if (isAuthenticated && !loading) {
      navigate(`/dashboard?${longLink ? `createNew=${longLink}` : ""}`);
    }
    if (!isAuthenticated && !loading && !user) {
      navigate("/auth");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, loading, navigate, user]);
  return (
    <div>
      <main className="min-h-screen container ">
        <Header />
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
