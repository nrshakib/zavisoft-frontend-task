import React from "react";
import { Button } from "@mui/material";
import { BiErrorCircle } from "react-icons/bi";
import { rubik, openSans } from "@/utils/fonts/fonts";

const ErrorFallback = ({ error, reset, message = "Something went wrong while fetching data." }) => {
  return (
    <div className="flex flex-col items-center justify-center py-10 px-4 text-center">
      <BiErrorCircle size={60} className="text-red-500 mb-4 opacity-80" />
      <h3 className={`${rubik.className} text-xl sm:text-2xl font-bold text-[#232321] mb-2`}>
        Oops! We hit a snag.
      </h3>
      <p className={`${openSans.className} text-sm sm:text-base text-gray-600 mb-6 max-w-md`}>
        {error?.data?.message || error?.message || message}
      </p>
      {reset && (
        <Button
          variant="contained"
          onClick={reset}
          sx={{
            bgcolor: "#4A69E2",
            color: "white",
            fontWeight: "600",
            px: 4,
            py: 1,
            borderRadius: "8px",
            textTransform: "uppercase",
            "&:hover": {
              bgcolor: "#232321",
            },
          }}
        >
          Try Again
        </Button>
      )}
    </div>
  );
};

export default ErrorFallback;
