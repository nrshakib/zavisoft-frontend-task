"use client";

import React, { useRef } from "react";
import { IconButton } from "@mui/material";
import Slider from "react-slick";
import { FiArrowLeft, FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { useGetAllCategoriesQuery } from "@/redux/slices/categoriesApi";
import { rubik } from "@/utils/fonts/fonts";
import ErrorFallback from "../Shared/ErrorFallback";
import { CategorySliderSkeleton } from "../Shared/Skeleton";

export default function Categories() {
  const sliderRef = useRef(null);

  const { data: categories, isLoading, error, refetch } = useGetAllCategoriesQuery({});

  if (isLoading)
    return (
      <div className="bg-linear-to-r from-[#1c1c1c] to-[#2b2b2b] py-16 pl-6 lg:pl-16">
        <CategorySliderSkeleton count={2} />
      </div>
    );
  if (error) return <ErrorFallback error={error} reset={refetch} />;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="bg-linear-to-r from-[#1c1c1c] to-[#2b2b2b] pt-16 pl-6 lg:pl-16">
      {/* Header */}
      <div className="flex items-center justify-between mb-10 pr-6 lg:pr-16">
        <h2 className="text-white text-2xl md:text-3xl font-bold tracking-widest">
          CATEGORIES
        </h2>

        <div className="flex gap-2">
          <IconButton
            onClick={() => sliderRef.current?.slickPrev()}
            sx={{
              backgroundColor: "#E7E7E3",
              color: "#fff",
              "&:hover": { backgroundColor: "#E7E7E3" },
              width: 34,
              height: 34,
            }}
          >
            <FiArrowLeft size={16} />
          </IconButton>

          <IconButton
            onClick={() => sliderRef.current?.slickNext()}
            sx={{
              backgroundColor: "#E7E7E3",
              color: "#232321",
              "&:hover": { backgroundColor: "#E7E7E3" },
              width: 34,
              height: 34,
            }}
          >
            <FiArrowRight size={16} />
          </IconButton>
        </div>
      </div>

      {/* Slider */}
      <Slider ref={sliderRef} {...settings}>
        {categories?.map((item) => (
          <div key={item.id} className="">
            <div className="overflow-hidden rounded-tl-3xl">
              {/* Top Split Background */}
              <div className="relative h-[260px] flex bg-[#F6F6F6]">
                {/* Image */}
                <div className="absolute inset-0 flex items-center justify-center p-10">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-[160px] md:h-[200px] object-contain"
                  />
                </div>
              </div>

              {/* Bottom Section */}
              <div className="bg-[#E4E6E8] px-6 py-6 flex items-center justify-between">
                <div>
                  <p
                    className={`${rubik.className} text-sm sm:text-4xl font-semibold text-[#1c1c1c] tracking-wide`}
                  >
                    {item.name?.toUpperCase()}
                  </p>
                </div>

                <div className="bg-black text-white w-8 h-8 flex items-center justify-center rounded-md">
                  <FiArrowUpRight size={16} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
