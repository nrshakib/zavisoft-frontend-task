/* eslint-disable @next/next/no-img-element */
"use client";

import { useGetAllProductsQuery } from "@/redux/slices/productsApi";
import Loader from "@/utils/Loader";
import { rubik } from "@/utils/fonts/fonts";
import Link from "next/link";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Arrow Components
function NextArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute -right-4 sm:-right-6 lg:-right-12 top-1/2 -translate-y-1/2 z-10 
      bg-[#4A69E2] hover:bg-[#3a59d2] text-white 
      w-10 h-10 sm:w-12 sm:h-12 
      rounded-full flex items-center justify-center 
      shadow-lg transition-all duration-300 
      hover:scale-110 active:scale-95"
      aria-label="Next"
    >
      <IoIosArrowForward className="text-xl sm:text-2xl" />
    </button>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute -left-4 sm:-left-6 lg:-left-12 top-1/2 -translate-y-1/2 z-10 
      bg-[#4A69E2] hover:bg-[#3a59d2] text-white 
      w-10 h-10 sm:w-12 sm:h-12 
      rounded-full flex items-center justify-center 
      shadow-lg transition-all duration-300 
      hover:scale-110 active:scale-95"
      aria-label="Previous"
    >
      <IoIosArrowBack className="text-xl sm:text-2xl" />
    </button>
  );
}

export default function Suggestions() {
  const {
    data: productsData,
    isLoading: productsIsLoading,
    error: productsError,
  } = useGetAllProductsQuery({});

  console.log(productsData);

  if (productsIsLoading) return <Loader />;
  if (productsError) return <div>Error loading products</div>;

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280, // xl
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // lg
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // md
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 640, // sm
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 480, // xs
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
    customPaging: function (i) {
      return (
        <div className="w-3 h-3 rounded-full bg-gray-300 hover:bg-[#4A69E2] transition-all duration-300 mt-4"></div>
      );
    },
    dotsClass: "slick-dots !flex !justify-center !gap-2 !bottom-[-40px]",
  };

  return (
    <div className="py-10 sm:py-14 lg:py-20 w-[95%] mx-auto">
      {/* Header */}
      <div className="flex flex-row items-end justify-between mb-8 sm:mb-12 lg:mb-16">
        <p
          className={`${rubik.className} text-[#232321] 
          text-2xl sm:text-4xl lg:text-6xl xl:text-7xl 
          font-semibold sm:uppercase w-[50%] sm:w-[60%] leading-tight`}
        >
          You may also like these products
        </p>

        <Link
          href="/all-products"
          className={`${rubik.className} 
          text-white bg-[#4A69E2] 
          uppercase text-xs sm:text-sm lg:text-base 
          px-3 sm:px-5 lg:px-6 
          py-2 sm:py-2.5 lg:py-3 
          rounded-lg 
          hover:bg-[#3a59d2] 
          transition-all duration-300 
          hover:scale-105 active:scale-95 
          h-fit font-medium`}
        >
          Show New Drops
        </Link>
      </div>

      {/* Products Slider */}
      <div className="relative px-4 sm:px-8 lg:px-12 pb-12">
        <Slider {...settings}>
          {productsData?.products?.map((product) => (
            <div key={product._id} className="px-2 sm:px-3">
              <div
                className="relative flex flex-col rounded-2xl p-3 sm:p-4 border border-gray-200 
                hover:shadow-xl hover:border-[#4A69E2] 
                transition-all duration-300 
                min-h-[380px] sm:min-h-[420px] lg:min-h-[500px] 
                group"
              >
                {/* Image */}
                <div className="relative bg-[#FAFAFA] p-3 sm:p-4 rounded-xl flex items-center justify-center overflow-hidden">
                  <img
                    src={product.images?.[0]}
                    alt={product.title}
                    className="h-[140px] sm:h-[180px] lg:h-[250px] xl:h-[300px] 
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
                  min-h-[32px] sm:min-h-[40px] lg:min-h-[48px]`}
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
                  hover:bg-[#4A69E2] 
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

      {/* Custom Slider Styles */}
      <style jsx global>{`
        .slick-dots li.slick-active div {
          background-color: #4a69e2 !important;
          transform: scale(1.2);
        }

        .slick-slide > div {
          height: 100%;
        }

        .slick-track {
          display: flex;
          align-items: stretch;
        }

        .slick-slide {
          height: inherit !important;
        }

        .slick-slide > div {
          height: 100%;
        }
      `}</style>
    </div>
  );
}
