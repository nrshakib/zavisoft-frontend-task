import { openSans, rubik } from "@/utils/fonts/fonts";
import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center py-4 sm:py-6 lg:py-10 w-[95%] xl:w-full mx-auto">
      {/* Big background title */}
      <p
        className={`${rubik.className} text-[#232321] text-6xl sm:text-[90px] lg:text-[150px] xl:text-[223px] uppercase text-center font-bold leading-none`}
      >
        Do It <span className="text-[#4A69E2]">Right</span>
      </p>

      {/* Hero image container */}
      <div className="relative w-full max-w-330 ">
        <Image
          src="/Images/heroImage.png"
          alt="Hero Image"
          width={1320}
          height={750}
          className="w-full h-96 sm:h-auto object-cover rounded-2xl"
        />

        {/* Rotated badge - hidden on very small screens */}
        <div className="absolute top-20 md:top-28 lg:top-32 -left-12 md:-left-17.5 lg:-left-19.5 text-white bg-[#232321] -rotate-90 rounded">
          <p
            className={`${rubik.className} text-[10px] sm:text-xs px-2 sm:px-6 lg:px-10 py-2 sm:py-3 lg:py-5 whitespace-nowrap`}
          >
            Nike product of the year
          </p>
        </div>

        {/* Bottom-left text content */}
        <div className="absolute bottom-4 md:bottom-6 lg:bottom-10 left-2 sm:left-4 lg:left-10 text-white">
          <p
            className={`${rubik.className} text-lg sm:text-2xl md:text-4xl lg:text-5xl xl:text-[74px] uppercase text-left font-semibold leading-tight`}
          >
            Nike Air Max
          </p>
          <p
            className={`${openSans.className} text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-xl w-[75%] mt-1 sm:mt-2`}
          >
            Nike introducing the new air max for everyone&apos;s comfort
          </p>
          <Button
            sx={{
              bgcolor: "#4A69E2",
              color: "#FFFFFF",
              fontSize: { xs: "10px", sm: "11px", md: "12px", lg: "14px" },
              fontWeight: "500",
              marginTop: { xs: "8px", sm: "10px", md: "14px", lg: "20px" },
              padding: {
                xs: "4px 12px",
                sm: "5px 16px",
                md: "6px 22px",
                lg: "8px 32px",
              },
              borderRadius: "8px",
              minWidth: "unset",
              "&:hover": {
                bgcolor: "#3b57a1",
              },
            }}
          >
            Shop Now
          </Button>
        </div>

        {/* Bottom-right sub images */}
        <div className="flex flex-col absolute bottom-4 md:bottom-6 lg:bottom-10 right-2 sm:right-4 lg:right-10 gap-2 sm:gap-3 lg:gap-6">
          <Image
            src="/Images/subHero01.png"
            alt="Hero Image 2"
            width={160}
            height={160}
            className="w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-28 lg:h-28 xl:w-40 xl:h-40 object-cover rounded"
          />
          <Image
            src="/Images/subHero02.png"
            alt="Hero Image 2"
            width={160}
            height={160}
            className="w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-28 lg:h-28 xl:w-40 xl:h-40 object-cover rounded"
          />
        </div>
      </div>
    </div>
  );
}
