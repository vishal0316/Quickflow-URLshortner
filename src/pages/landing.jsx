import LetterPullup from "@/components/magicui/letter-pullup";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ShineBorder from "@/components/magicui/shine-border";
import { CanvasRevealEffectDemo } from "@/components/CanvasRevealEffectDemo";

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

        <div>
          <div className="text-5xl text-center mt-10 font-bold">FAQ</div>
          <CanvasRevealEffectDemo />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
