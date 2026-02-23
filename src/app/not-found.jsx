import { openSans, rubik } from "@/utils/fonts/fonts";
import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] py-10 sm:py-20 w-[95%] xl:w-full mx-auto relative overflow-hidden">
      {/* Large background "404" text */}
      <h1
        className={`${rubik.className} text-[#232321] opacity-10 text-[120px] sm:text-[200px] lg:text-[300px] xl:text-[400px] uppercase text-center font-bold leading-none absolute z-0 pointer-events-none`}
      >
        404
      </h1>

      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <h2
          className={`${rubik.className} text-[#232321] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 uppercase`}
        >
          Oops! You&apos;ve <span className="text-[#4A69E2]">Kicked</span> Too Far
        </h2>
        
        <p
          className={`${openSans.className} text-[#232321] text-base sm:text-lg md:text-xl max-w-lg mb-8 opacity-80`}
        >
          The page you are looking for doesn&apos;t exist or has been moved. 
          Don&apos;t worry, you can always find your way back home.
        </p>

        <Link href="/" passHref>
          <Button
            component="a"
            sx={{
              bgcolor: "#4A69E2",
              color: "#FFFFFF",
              fontSize: { xs: "14px", sm: "16px" },
              fontWeight: "600",
              padding: {
                xs: "10px 24px",
                sm: "12px 36px",
              },
              borderRadius: "8px",
              textTransform: "uppercase",
              transition: "all 0.3s ease",
              "&:hover": {
                bgcolor: "#232321",
                transform: "translateY(-2px)",
                boxShadow: "0 4px 12px rgba(74, 105, 226, 0.3)",
              },
            }}
          >
            Back to Home
          </Button>
        </Link>
      </div>

      {/* Decorative element - inspired by the badge in Hero */}
      <div className="mt-12 md:mt-16 bg-[#FFA52F] rounded-lg px-4 py-2 -rotate-2 shadow-md">
         <p className={`${rubik.className} text-[#232321] font-bold text-sm sm:text-base`}>
            LOST IN SPACE?
         </p>
      </div>
    </div>
  );
}
