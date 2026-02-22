/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import {
  Button,
  IconButton,
  MenuItem,
  Select,
  FormControl,
} from "@mui/material";
import { FiHeart, FiTrash2 } from "react-icons/fi";
import { AiOutlineTag } from "react-icons/ai";
import Suggestions from "@/components/Shared/Suggestions";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "DROPSET TRAINER SHOES",
      description: "Men's Road Running Shoes",
      brand: "Reebok",
      ownership: "Unisex Reebok Training",
      size: 10,
      quantity: 1,
      price: 130.0,
      image: "/api/placeholder/120/120",
    },
  ]);

  const [promoCode, setPromoCode] = useState("");

  // Calculate totals
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const delivery = 6.99;
  const salesTax = 0;
  const total = subtotal + delivery + salesTax;

  const handleQuantityChange = (id, newQuantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: parseInt(newQuantity) } : item,
      ),
    );
  };

  const handleSizeChange = (id, newSize) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, size: parseInt(newSize) } : item,
      ),
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen py-6 sm:py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            Saving to celebrate
          </h1>
          <p className="text-sm sm:text-base text-gray-600 ">
            Enjoy up to 60% off thousands of styles during the End of Year sale
            - while suppiles last. No code needed.
            <br />
            <span className="font-semibold"> Join Us</span> or{" "}
            <span className="font-semibold">Sign In</span>.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left Column - Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                Your Bag
              </h2>
              <p className="text-sm text-gray-600 mb-6">
                Items in your bag are not reserved — check out now to make them
                yours.
              </p>

              {/* Cart Items */}
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col sm:flex-row gap-4 pb-6 border-b border-gray-200 last:border-b-0"
                  >
                    {/* Product Image */}
                    <div className="shrink-0">
                      <div className="w-full sm:w-32 h-32 bg-gray-100 rounded-lg overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Product Details */}
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex-1">
                          <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">
                            {item.name}
                          </h3>
                          <p className="text-sm text-gray-600 mb-1">
                            {item.description}
                          </p>
                          <p className="text-sm text-gray-600">
                            {item.ownership}
                          </p>
                        </div>
                        <div className="text-right ml-4">
                          <p className="text-base sm:text-lg font-bold text-gray-900">
                            ${item.price.toFixed(2)}
                          </p>
                        </div>
                      </div>

                      {/* Size and Quantity Selectors */}
                      <div className="flex flex-wrap gap-3 sm:gap-4 mt-4 mb-4">
                        {/* Size Selector */}
                        <FormControl size="small" className="min-w-25!">
                          <Select
                            value={item.size}
                            onChange={(e) =>
                              handleSizeChange(item.id, e.target.value)
                            }
                            className="rounded-lg! text-sm!"
                            displayEmpty
                          >
                            <MenuItem value={8}>Size 8</MenuItem>
                            <MenuItem value={9}>Size 9</MenuItem>
                            <MenuItem value={10}>Size 10</MenuItem>
                            <MenuItem value={11}>Size 11</MenuItem>
                            <MenuItem value={12}>Size 12</MenuItem>
                          </Select>
                        </FormControl>

                        {/* Quantity Selector */}
                        <FormControl size="small" className="min-w-25!">
                          <Select
                            value={item.quantity}
                            onChange={(e) =>
                              handleQuantityChange(item.id, e.target.value)
                            }
                            className="rounded-lg! text-sm!"
                            displayEmpty
                          >
                            <MenuItem value={1}>Quantity 1</MenuItem>
                            <MenuItem value={2}>Quantity 2</MenuItem>
                            <MenuItem value={3}>Quantity 3</MenuItem>
                            <MenuItem value={4}>Quantity 4</MenuItem>
                            <MenuItem value={5}>Quantity 5</MenuItem>
                          </Select>
                        </FormControl>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-4">
                        <button className="flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900 transition">
                          <FiHeart className="text-lg" />
                        </button>
                        <button
                          onClick={() => handleRemoveItem(item.id)}
                          className="flex items-center gap-2 text-sm text-gray-700 hover:text-red-600 transition"
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
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                Order Summary
              </h2>

              {/* Summary Details */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm sm:text-base">
                  <span className="text-gray-600">{cartItems.length} ITEM</span>
                  <span className="font-semibold text-gray-900">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-sm sm:text-base">
                  <span className="text-gray-600">Delivery</span>
                  <span className="font-semibold text-gray-900">
                    ${delivery.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-sm sm:text-base">
                  <span className="text-gray-600">Sales Tax</span>
                  <span className="font-semibold text-gray-900">-</span>
                </div>
              </div>

              {/* Total */}
              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-base sm:text-lg font-bold text-gray-900">
                    Total
                  </span>
                  <span className="text-xl sm:text-2xl font-bold text-gray-900">
                    ${total.toFixed(2)}
                  </span>
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
                  fontSize: "14px",
                  "&:hover": {
                    bgcolor: "gray.800",
                  },
                }}
                className="bg-[#232321] hover:bg-gray-800 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-xl mb-4 normal-case"
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
