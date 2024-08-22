import LetterPullup from "@/components/magicui/letter-pullup";
import { Button } from "@/components/ui/button";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ShineBorder from "@/components/magicui/shine-border";
import { CanvasRevealEffectDemo } from "@/components/CanvasRevealEffectDemo";
import { Input } from "@/components/ui/input";
import PulsatingButton from "@/components/ui/pulsating-button";
import { Feature } from "@/components/feature";
import { Reviews } from "@/components/Reviews";
import { Security } from "@/components/Security";
import Footer from "@/components/footer";

const LandingPage = () => {
  const [longUrl, setLongUrl] = useState();
  const navigate = useNavigate();

  const handleShorten = (e) => {
    e.preventDefault();
    if (longUrl) navigate(`/auth?createNew=${longUrl}`);
  };
  return (
    <>
      <div className="flex flex-col ">
        <LetterPullup
          className="text-shadow-custom uppercase text-center tracking-wider text-4xl font-extrabold sm:text-6xl lg:text-8xl"
          words={" QuickFlow"}
          delay={0.05}
        />
        <div className="flex text-center justify-center  mt-4 ">
          <PulsatingButton className="h-full" onClick={() => navigate("/auth")}>
            Get Started
          </PulsatingButton>
        </div>
        <div className="pt-10  text-2xl text-center lg:text-xl">
          The ultimate URL shortener for all your needs!
        </div>
        <form
          onSubmit={handleShorten}
          className="lg:ml-[25%] items-center justify-center sm:h-14 mt-10 flex flex-col sm:flex-row w-full md:w-2/4 gap-2"
        >
          {" "}
          <ShineBorder
            className="w-full"
            color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
          >
            <Input
              type="url"
              value={longUrl}
              placeholder="Enter your loooong URL"
              onChange={(e) => setLongUrl(e.target.value)}
              className="h-full flex-1 py-4 px-4 sm:px-6 md:px-8 borden lg:px-10 xl:px-12"
            />
          </ShineBorder>
          <Button type="submit" className="h-full">
            Shorten!
          </Button>
        </form>
        {/*Feature Section */}
        <div className="mt-10 mb-10">
          <Feature />
        </div>

        {/* Security */}
        <div className="mt-10 mb-10">
          <Security />
        </div>
        {/* Reviews */}
        <div>
          <Reviews />
        </div>
        {/* FAQ */}
        <div className="">
          <div className="text-5xl text-center  font-bold">FAQ</div>
          <CanvasRevealEffectDemo />
        </div>
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
