/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef, useState } from "react";
import { useGetAllProductsQuery } from "@/redux/slices/productsApi";
import Loader from "@/utils/Loader";
import { rubik } from "@/utils/fonts/fonts";
import Link from "next/link";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Suggestions() {
  const sliderRef = useRef(null);
  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      .slick-dots li.slick-active div {
        background-color: #4a69e2 !important;
        transform: scale(1.2);
      }
      .slick-slide > div { height: 100%; }
      .slick-track { display: flex; align-items: stretch; }
      .slick-slide { height: inherit !important; }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 480) setSlidesToShow(1);
      else if (width < 640) setSlidesToShow(2);
      else if (width < 768) setSlidesToShow(2);
      else if (width < 1024) setSlidesToShow(3);
      else setSlidesToShow(4);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const {
    data: productsData,
    isLoading: productsIsLoading,
    error: productsError,
  } = useGetAllProductsQuery({});

  if (productsIsLoading) return <Loader />;
  if (productsError) return <div>Error loading products</div>;

  // Slider settings
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    appendDots: (dots) => {
      // Only show dots equal to slidesToShow
      const limitedDots = dots.slice(0, slidesToShow);
      return (
        <ul className="slick-dots flex! justify-center! gap-2! -bottom-10!">
          {limitedDots}
        </ul>
      );
    },
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    customPaging: function () {
      return (
        <div className="w-3 h-3 rounded-full bg-gray-300 hover:bg-[#4A69E2] transition-all duration-300 mt-4"></div>
      );
    },
  };

  return (
    <div className="py-10 sm:py-14 lg:py-20 w-[95%] mx-auto">
      {/* Header with Custom Arrows */}
      <div className="flex flex-row items-center justify-between mb-4 sm:mb-12 lg:mb-16">
        <p
          className={`${rubik.className} text-[#232321] 
          text-2xl sm:text-4xl lg:text-5xl 
          font-semibold sm:uppercase w-[75%] sm:w-[65%] leading-tight`}
        >
          You may also like
        </p>

        {/* Custom Navigation Arrows */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="bg-[#232321] hover:bg-[#050404] text-white 
            w-8 h-8  
            rounded-xl flex items-center justify-center 
            shadow-lg transition-all duration-300 
            hover:scale-110 active:scale-95 cursor-pointer"
            aria-label="Previous"
          >
            <IoIosArrowBack className="text-lg sm:text-xl" />
          </button>
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="bg-[#232321] hover:bg-[#050404] text-white 
            w-8 h-8  
            rounded-xl flex items-center justify-center 
            shadow-lg transition-all duration-300 
            hover:scale-110 active:scale-95 cursor-pointer"
            aria-label="Next"
          >
            <IoIosArrowForward className="text-lg sm:text-xl" />
          </button>
        </div>
      </div>

      {/* Products Slider */}
      <div className="relative pb-12">
        <Slider ref={sliderRef} {...settings}>
          {productsData?.map((product) => (
            <div key={product.id} className="px-2 sm:px-3">
              <div
                className="relative flex flex-col rounded-2xl p-3 sm:p-4 border border-gray-200 
                hover:shadow-xl 
                transition-all duration-300 
                min-h-70 sm:min-h-90 lg:min-h-125 
                group"
              >
                {/* Image */}
                <div className="relative bg-[#FAFAFA] p-3 sm:p-4 rounded-xl flex items-center justify-center overflow-hidden">
                  <img
                    src={product.images?.[0]}
                    alt={product.title}
                    className="h-35 sm:h-45 lg:h-62.5 xl:h-75 
                    w-full object-contain 
                    transition-transform duration-300 
                    group-hover:scale-110"
                  />

                  <span className="absolute top-3 left-3 bg-blue-600 text-white text-[10px] sm:text-xs px-2 py-1 rounded-full font-medium">
                    New
                  </span>
                </div>

                {/* Title */}
                <p
                  className={`${rubik.className} 
                  mt-3 sm:mt-4 text-[#232321] 
                  text-xs sm:text-sm lg:text-base xl:text-lg 
                  font-semibold uppercase 
                  line-clamp-2 
                  min-h-8 sm:min-h-10 lg:min-h-12`}
                >
                  {product?.title || "No Title"}
                </p>

                {/* Button */}
                <Link
                  href={`/product-details/${product.slug}`}
                  className={`${rubik.className} 
                  absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 
                  mt-3 bg-[#232321] text-white text-center 
                  py-2 sm:py-2.5 lg:py-3 
                  rounded-lg 
                  hover:bg-[#3b3838] 
                  transition-all duration-300 
                  text-xs sm:text-sm lg:text-base 
                  font-medium
                  transform hover:scale-105 active:scale-95`}
                >
                  View Product -
                  <span className="text-[#FFA52F] ml-1 sm:ml-2 font-bold">
                    ${product.price}
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
