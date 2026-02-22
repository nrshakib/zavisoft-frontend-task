/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { rubik, openSans } from "@/utils/fonts/fonts";
import { Button, MenuItem, Select, FormControl } from "@mui/material";
import { FiHeart, FiTrash2 } from "react-icons/fi";
import { AiOutlineTag } from "react-icons/ai";
import Suggestions from "@/components/Shared/Suggestions";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, updateSize } = useCart();
  console.log(cartItems);
  const [promoCode, setPromoCode] = useState("");

  // Calculate totals
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const delivery = cartItems.length > 0 ? 6.99 : 0;
  const salesTax = 0;
  const total = subtotal + delivery + salesTax;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Your Bag</h1>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-12">
            <p className="text-xl text-gray-600 mb-8">Your bag is empty</p>
            <Link href="/">
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#232321",
                  "&:hover": { bgcolor: "gray.800" },
                  px: 4,
                  py: 1.5,
                  borderRadius: "12px",
                  textTransform: "none",
                  fontSize: "16px",
                  fontWeight: 600,
                }}
              >
                Start Shopping
              </Button>
            </Link>
          </div>
          <Suggestions />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-6 sm:py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-6 sm:mb-8">
          <h1
            className={`${rubik.className} text-2xl sm:text-3xl lg:text-[32px] font-semibold text-[#232321] mb-2`}
          >
            Saving to celebrate
          </h1>
          <p
            className={`${openSans.className} text-xs sm:text-sm font-semibold text-[#232321]`}
          >
            Enjoy up to 60% off thousands of styles during the End of Year sale
            - while suppiles last. No code needed.
            <br />
            <span className="text-base"> Join Us</span> or{" "}
            <span className="text-base">Sign In</span>.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left Column - Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
              <h2
                className={`${rubik.className} text-2xl sm:text-3xl lg:text-[32px] font-semibold text-[#232321] mb-2`}
              >
                Your Bag
              </h2>
              <p
                className={`${openSans.className} text-xs sm:text-sm text-[#5a5a5a] mb-4`}
              >
                Items in your bag are not reserved — check out now to make them
                yours.
              </p>

              {/* Cart Items */}
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div
                    key={item.uniqueId}
                    className="flex flex-col sm:flex-row gap-4 pb-6 border-b border-gray-200 last:border-b-0"
                  >
                    {/* Product Image */}
                    <div className="shrink-0">
                      <div className="w-full sm:w-32 h-32 rounded-lg overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Product Details */}
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex-1">
                          <h3
                            className={`${rubik.className} text-base sm:text-lg lg:text-xl font-semibold text-[#232321] mb-1`}
                          >
                            {item.title}
                          </h3>
                          <p
                            className={`${openSans.className} text-sm text-[#5a5a5a] mb-1 font-semibold`}
                          >
                            {item.category}
                          </p>
                          <p
                            className={`${openSans.className} text-sm text-[#5a5a5a] mb-1 font-semibold`}
                          >
                            Color: {item.color}
                          </p>
                        </div>
                        <div className="text-right ml-4">
                          <p
                            className={`${rubik.className} text-base sm:text-lg lg:text-xl font-semibold text-[#4A69E2]`}
                          >
                            ${(item.price * item.quantity).toFixed(2)}
                            <span className="font-base text-sm">
                              {" "}
                              ({item.quantity} items)
                            </span>
                          </p>
                        </div>
                      </div>

                      {/* Selectors */}
                      <div className="flex flex-wrap gap-3 sm:gap-4 mt-4 mb-4">
                        {/* Size Selector */}
                        <FormControl size="small" className="min-w-25!">
                          <Select
                            value={item.size}
                            onChange={(e) =>
                              updateSize(
                                item.uniqueId,
                                parseInt(e.target.value),
                              )
                            }
                            className="rounded-lg! text-sm!"
                          >
                            {[8, 9, 10, 11, 12].map((size) => (
                              <MenuItem key={size} value={size}>
                                Size {size}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>

                        {/* Quantity Selector */}
                        <FormControl size="small" className="min-w-25!">
                          <Select
                            value={item.quantity}
                            onChange={(e) =>
                              updateQuantity(
                                item.uniqueId,
                                parseInt(e.target.value),
                              )
                            }
                            className="rounded-lg! text-sm!"
                          >
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                              <MenuItem key={num} value={num}>
                                Quantity {num}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-4">
                        <button className="flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900 transition cursor-pointer">
                          <FiHeart className="text-lg" />
                        </button>
                        <button
                          onClick={() => removeFromCart(item.uniqueId)}
                          className="flex items-center gap-2 text-sm text-gray-700 hover:text-red-600 transition cursor-pointer"
                        >
                          <FiTrash2 className="text-lg" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1">
            <div className="">
              <h2
                className={`${rubik.className} text-xl sm:text-2xl lg:text-[32px] font-semibold text-[#232321] mb-6`}
              >
                Order Summary
              </h2>

              {/* Summary Details */}
              <div
                className={`${openSans.className} space-y-3 mb-6  text-sm sm:text-xl font-semibold text-[#232321]`}
              >
                <div className="flex justify-between">
                  <span className="">
                    {cartItems.reduce((sum, item) => sum + item.quantity, 0)}{" "}
                    ITEMs
                  </span>
                  <span className="">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="">Delivery</span>
                  <span className="">${delivery.toFixed(2)}</span>
                </div>
                <div className="flex justify-between ">
                  <span className="">Sales Tax</span>
                  <span className="">-</span>
                </div>
              </div>

              {/* Total */}
              <div
                className={`${rubik.className} text-[#232321] font-semibold text-sm sm:text-xl pt-4 mb-6`}
              >
                <div className="flex justify-between items-center">
                  <span className="">Total</span>
                  <span className="">${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <Button
                variant="contained"
                fullWidth
                sx={{
                  bgcolor: "#232321",
                  fontFamily: "rubik, sans-serif",
                  fontWeight: "500",
                  py: { xs: 1, sm: 1.5, lg: 2.5 },

                  fontSize: "14px",
                  "&:hover": {
                    bgcolor: "#3b3838",
                  },
                }}
                className=" py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-xl mb-4 normal-case"
              >
                Checkout
              </Button>

              {/* Promo Code Section */}
              <button className="w-full flex items-center justify-start gap-2 text-sm sm:text-base text-gray-700 hover:text-gray-900 py-2 transition">
                <AiOutlineTag className="text-lg" />
                <span className="font-medium">Use a promo code</span>
              </button>
            </div>
          </div>
        </div>
        <Suggestions />
      </div>
    </div>
  );
}
