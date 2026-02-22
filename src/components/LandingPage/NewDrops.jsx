/* eslint-disable @next/next/no-img-element */
"use client";

import { useGetAllProductsQuery } from "@/redux/slices/productsApi";
import Loader from "@/utils/Loader";
import { Button } from "@mui/material";
import { rubik } from "@/utils/fonts/fonts";
import Link from "next/link";

export default function NewDrops() {
  const {
    data: productsData,
    isLoading: productsIsLoading,
    error: productsError,
  } = useGetAllProductsQuery({});

  console.log(productsData);

  if (productsIsLoading) return <Loader />;
  if (productsError) return <div>Error loading products</div>;

  const latestProducts = productsData?.slice(-4) || [];

  return (
    <div className="py-10 w-[95%] mx-auto">
      {/* Header */}
      <div className="flex flex-row items-end justify-between ">
        <p
          className={`${rubik.className} text-[#232321] 
          text-2xl sm:text-4xl lg:text-7xl 
          font-semibold sm:uppercase w-[50%]`}
        >
          Don’t miss out new drops
        </p>

        <Link
          href="/all-products"
          className={`${rubik.className} 
          text-white bg-[#4A69E2] 
          uppercase text-xs sm:text-base 
          px-2 sm:px-4 py-2 rounded-lg 
          hover:opacity-90 transition h-fit`}
        >
          Show New Drops
        </Link>
      </div>

      {/* Products */}
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
        {latestProducts.map((product) => (
          <div key={product._id}>
            <div
              className="relative flex flex-col rounded-2xl p-0 sm:p-4 border border-gray-200 
        hover:shadow-xl transition lg:min-h-[500px] lg:pb-24"
            >
              {/* Image */}
              <div className="relative bg-[#FAFAFA] p-3 sm:p-4 rounded-xl flex items-center justify-center">
                <img
                  src={product.images?.[0]}
                  alt={product.title}
                  className="h-[140px] sm:h-[200px] lg:h-[300px] 
            w-full object-contain"
                />

                <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                  New
                </span>
              </div>

              {/* Title */}
              <p
                className={`${rubik.className} 
          mt-3 text-[#232321] 
          text-xs sm:text-base lg:text-xl 
          font-semibold uppercase 
          line-clamp-2`}
              >
                {product?.title || "No Title"}
              </p>

              {/* Button */}
              <Link
                href={`/product-details/${product.slug}`}
                className={`${rubik.className} absolute bottom-4 left-4 right-4 mt-3 bg-[#232321] text-white text-center py-2 rounded-lg hover:opacity-90 transition`}
              >
                View Product -
                <span style={{ color: "#FFA52F", marginLeft: "6px" }}>
                  ${product.price}
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
