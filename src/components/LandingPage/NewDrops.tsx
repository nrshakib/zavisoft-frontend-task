"use client";

import { useGetAllProductsQuery } from "@/redux/slices/productsApi";
import Loader from "@/utils/Loader";
import { Button } from "@mui/material";
import Slider from "react-slick";
import React from "react";
import Image from "next/image";

export default function NewDrops() {
  const {
    data: productsData,
    isLoading: productsIsLoading,
    error: productsError,
  } = useGetAllProductsQuery({});
  console.log("productsData:", productsData);

  if (productsIsLoading) return <Loader />;
  if (productsError) return <div>Error loading products</div>;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="">
      <Slider {...settings}>
        {productsData?.map((product) => (
          <div key={product._id} className="px-3">
            <div className="h-full min-h-100 rounded-2xl p-4 relative border border-gray-200 hover:shadow-lg transition ">
              {/* New Badge */}
              {/* {product.isNew && ()} */}
              <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                New
              </span>

              {/* Product Image */}
              <div className="bg-[#FAFAFA] p-4 rounded-xl flex items-center justify-center">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  width={200}
                  height={200}
                  className="h-50 object-contain"
                />
              </div>

              {/* Product Name */}
              <h3 className="mt-4 text-sm font-bold uppercase tracking-wide">
                {product.title}
              </h3>

              {/* Button */}
              <Button
                variant="contained"
                fullWidth
                sx={{
                  marginTop: "12px",
                  backgroundColor: "#111",
                  fontSize: "12px",
                  "&:hover": {
                    backgroundColor: "#333",
                  },
                }}
              >
                View Product - ${product.price}
              </Button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
