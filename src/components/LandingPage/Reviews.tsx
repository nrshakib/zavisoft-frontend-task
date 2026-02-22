"use client";

import React from "react";
import Slider from "react-slick";
import { Button } from "@mui/material";
import { FiStar } from "react-icons/fi";

const reviews = [
  {
    id: 1,
    name: "Good Quality",
    text: "I highly recommend shopping from kicks",
    rating: 5.0,
    avatar: "/Images/ReviewImages/review (1).png",
    image: "/Images/ReviewImages/reviewProduct (1).png",
  },
  {
    id: 2,
    name: "Good Quality",
    text: "I highly recommend shopping from kicks",
    rating: 5.0,
    avatar: "/Images/ReviewImages/review (2).png",
    image: "/Images/ReviewImages/reviewProduct (2).png",
  },
  {
    id: 3,
    name: "Good Quality",
    text: "I highly recommend shopping from kicks",
    rating: 5.0,
    avatar: "/Images/ReviewImages/review (3).png",
    image: "/Images/ReviewImages/reviewProduct (3).png",
  },
];

export default function Reviews() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="bg-[#e7e7e3] py-16 px-3">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-2xl lg:text-3xl font-bold text-[#232321] tracking-wide">
          REVIEWS
        </h2>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#4A69E2",
            fontSize: "14px",
            paddingX: "16px",
            paddingY: "6px",
            "&:hover": { backgroundColor: "#3c55c4" },
          }}
        >
          SEE ALL
        </Button>
      </div>

      {/* Slider */}
      <Slider {...settings}>
        {reviews.map((review) => (
          <div key={review.id} className="px-1 ">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
              {/* Top Content */}
              <div className="p-5 flex items-start justify-between">
                <div>
                  <p className="font-semibold text-[#232321] text-sm">
                    {review.name}
                  </p>
                  <p className="text-xs text-gray-500 mt-1 max-w-[180px]">
                    {review.text}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mt-3 text-[#FFA52F]">
                    {[...Array(5)].map((_, i) => (
                      <FiStar key={i} size={14} fill="#FFA52F" />
                    ))}
                    <span className="text-xs text-[#232321] ml-1">
                      {review.rating}
                    </span>
                  </div>
                </div>

                {/* Avatar */}
                <img
                  src={review.avatar}
                  alt="avatar"
                  className="w-10 h-10 rounded-full object-cover"
                />
              </div>

              {/* Bottom Image */}
              <div className="h-[200px] w-full">
                <img
                  src={review.image}
                  alt="review"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
