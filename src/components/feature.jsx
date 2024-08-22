"use client";
import dashboard from "../assets/dashboard.png";
import createnew from "../assets/createnew.png";
import { WobbleCard } from "./ui/wobble-card";

export function Feature() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Create New Link Easily
          </h2>
          <p className="mt-4 text-left text-base/6 text-neutral-200">
            Shorten your URLs effortlessly. Enter your long link, generate a
            short link, and even customize it with an optional alias. Plus,
            enjoy the convenience of an automatically generated QR code for easy
            sharing.
          </p>
        </div>

        <img
          src={createnew}
          width={270}
          height={270}
          alt="linear demo image"
          className="absolute -right-3 lg:-right-[5%] grayscale filter -bottom-4 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Manage Your Links
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          Easily manage your shortened links. Share your links directly, delete
          them when no longer needed, or download the automatically generated QR
          code for offline sharing and embedding.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Link Stats Overview
          </h2>
          <p className="mt-4 text-left text-base/6 text-neutral-200">
            Get detailed insights on your shortened links. Track total clicks,
            unique visitors, and more. Explore device usage and geographic
            location data with interactive charts to better understand your
            audience.
          </p>
        </div>

        <img
          src={dashboard}
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[0%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}
