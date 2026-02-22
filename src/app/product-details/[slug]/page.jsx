/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { Button } from "@mui/material";
import { useGetSingleProductQuery } from "@/redux/slices/productsApi";
import { useParams, useRouter } from "next/navigation";
import Suggestions from "@/components/Shared/Suggestions";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

export default function ProductPage() {
  const { slug } = useParams();
  console.log(slug);
  const {
    data: singleProductData,
    isLoading: singleProductIsLoading,
    error: singleProductError,
  } = useGetSingleProductQuery(slug);
  console.log(singleProductData);

  const [selectedSize, setSelectedSize] = useState(10);
  const [selectedColor, setSelectedColor] = useState("navy");
  const [activeImage, setActiveImage] = useState(0);
  const [isAdded, setIsAdded] = useState(false);

  const { addToCart } = useCart();
  const router = useRouter();

  const handleAddToCart = () => {
    if (!singleProductData) return;

    addToCart(
      {
        id: singleProductData.id,
        title: singleProductData.title,
        price: singleProductData.price,
        image: singleProductData.images[0],
        category: singleProductData.category.name,
      },
      selectedSize,
      selectedColor,
      1,
    );

    toast.success("Product added to cart!");
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1000);
  };

  const sizes = [39, 40, 41, 42, 43, 44, 45];
  const colors = [
    { name: "navy", class: "bg-[#253043]" },
    { name: "green", class: "bg-[#707E6E]" },
  ];

  // Loading state
  if (singleProductIsLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl font-semibold text-gray-600">Loading...</div>
      </div>
    );
  }

  // Error state
  if (singleProductError) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl font-semibold text-red-600">
          Error loading product
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="rounded-xl sm:rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 p-3 sm:p-4 md:p-6 lg:p-10">
            {/* Left Column - Images */}
            <div className="space-y-3 sm:space-y-4">
              {/* Main Image - Mobile & Desktop */}
              <div className="relative aspect-square rounded-lg sm:rounded-xl overflow-hidden group">
                <img
                  src={
                    singleProductData?.images[activeImage] ||
                    singleProductData?.images[0]
                  }
                  alt={singleProductData?.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Thumbnail Images */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {singleProductData?.images.slice(0, 3).map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`aspect-square rounded-md sm:rounded-lg overflow-hidden border-2 transition-all ${
                      activeImage === idx
                        ? "border-blue-600 ring-2 ring-blue-200"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${singleProductData?.title} view ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column - Product Details */}
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              {/* Title and Price */}
              <div>
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight">
                  {singleProductData?.title}
                </h1>
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-2xl sm:text-3xl font-bold text-[#4A69E2]">
                    ${singleProductData?.price}
                  </span>
                </div>
              </div>

              {/* Color Selection */}
              <div>
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <label className="text-xs sm:text-sm font-semibold text-gray-900 uppercase tracking-wide">
                    Color
                  </label>
                </div>
                <div className="flex gap-2 sm:gap-3">
                  {colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 p-1 transition-all ${
                        selectedColor === color.name
                          ? "border-gray-900 ring-2 ring-gray-300"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      <div
                        className={`w-full h-full rounded-full ${color.class}`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div>
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <label className="text-xs sm:text-sm font-semibold text-gray-900 uppercase tracking-wide">
                    Size
                  </label>
                  <button className="text-xs sm:text-sm text-[#232321] hover:text-blue-700 font-medium underline uppercase">
                    Size Chart
                  </button>
                </div>
                <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-1.5 sm:gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-2 sm:py-2.5 md:py-3 px-2 sm:px-3 md:px-4 rounded-md sm:rounded-lg border-2 font-semibold text-sm sm:text-base transition-all cursor-pointer ${
                        selectedSize === size
                          ? "border-gray-900 bg-gray-900 text-white"
                          : "border-gray-300 bg-white text-gray-900 hover:border-gray-400 active:bg-gray-50"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 sm:space-y-3 pt-2 sm:pt-4">
                <div className="grid grid-cols-5 gap-2">
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={handleAddToCart}
                    sx={{
                      bgcolor: "#232321",
                      py: { xs: 1, sm: 1.5, lg: 2.5 },
                      fontSize: { xs: "14px", sm: "16px", md: "18px" },
                      fontWeight: "600",
                      borderRadius: { xs: "8px", sm: "12px" },
                      textTransform: "none",
                      gridColumn: "span 4",
                      ":hover": {
                        bgcolor: "#1a1a18",
                      },
                    }}
                  >
                    <span className="">
                      {isAdded ? "Added ✓" : "Add to Cart"}
                    </span>
                  </Button>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      bgcolor: "#232321",
                      py: { xs: 1, sm: 1.5, lg: 2.5 },
                      fontSize: { xs: "14px", sm: "16px", md: "18px" },
                      fontWeight: "600",
                      borderRadius: { xs: "8px", sm: "12px" },
                      textTransform: "none",
                      gridColumn: "span 1",
                      ":hover": {
                        bgcolor: "#1a1a18",
                      },
                    }}
                  >
                    <FaRegHeart className="text-base sm:text-lg" />
                  </Button>
                </div>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => router.push("/cart")}
                  sx={{
                    bgcolor: "#4A69E2",
                    py: { xs: 1, sm: 1.5, lg: 2.5 },
                    fontSize: { xs: "14px", sm: "16px", md: "18px" },
                    fontWeight: "600",
                    borderRadius: { xs: "8px", sm: "12px" },
                    textTransform: "none",
                  }}
                >
                  Buy It Now
                </Button>
              </div>

              {/* Product Info */}
              <div className="border-t border-gray-200 pt-4 sm:pt-5 md:pt-6">
                <h3 className="text-xs sm:text-sm font-semibold text-gray-900 uppercase tracking-wide mb-2 sm:mb-3">
                  About the Product
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  {singleProductData?.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Suggestions />
    </div>
  );
}
