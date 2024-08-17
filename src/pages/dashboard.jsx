import CreateLink from "@/components/create-link";
import Error from "@/components/error";
import LinkCard from "@/components/link-card";

import { OrbitingCirclesDemo } from "@/components/magicui/orbitCircle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { UrlState } from "@/context";
import { getClicksForUrls } from "@/db/apiClicks";
import { getUrls } from "@/db/apiUrls";
import useFetch from "@/hooks/use-fetch";
import { Filter } from "lucide-react";
import { useEffect, useState } from "react";
import { BarLoader } from "react-spinners";

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { user } = UrlState();

  const {
    loading,
    error,
    data: urls,
    fn: fnUrls,
  } = useFetch(getUrls, user?.id);

  const {
    loading: loadingClicks,
    data: clicks,
    fn: fnClicks,
  } = useFetch(
    getClicksForUrls,
    urls?.map((url) => url.id)
  );

  useEffect(() => {
    fnUrls();
  }, []);

  useEffect(() => {
    if (urls?.length) fnClicks();
  }, [urls?.length]);

  const filterdUrls = urls?.filter((url) =>
    url.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="mb-64">
      <div>
        {(loading || loadingClicks) && <BarLoader width="100%" color="white" />}
      </div>

      <div className=" flex gap-4">
        <div className="w-full">
          {/* Apply margin-bottom to the first card */}
          <Card className="mb-4">
            <CardHeader>
              <CardTitle>Links Created</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{urls?.length}</p>
            </CardContent>
          </Card>
          {/* No need for additional margin on the second card if using mb-* on the first */}
          <Card>
            <CardHeader>
              <CardTitle>Total Clicks</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{clicks?.length}</p>
            </CardContent>
          </Card>
        </div>
        {/* Hide on mobile, show on medium screens and above */}
        <div className="hidden md:block relative flex h-full w-full max-w-[25rem] items-center justify-center overflow-hidden rounded-lg border   md:shadow-xl">
          <OrbitingCirclesDemo />
        </div>
      </div>

      <div className="flex mt-10 mb-10 justify-between">
        <h1 className="text-4xl font-extrabold">My Links</h1>
        <CreateLink />
      </div>

      <div className="relative">
        <Input
          type="text"
          placeholder="Filter Links..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Filter className="absolute top-2 right-2 p-1" />
      </div>
      {error && <Error message={error?.message} />}
      {(filterdUrls || []).map((url, i) => (
        <LinkCard key={i} url={url} fetchUrls={fnUrls} />
      ))}
    </div>
  );
};

export default Dashboard;
