"use client";

import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaTiktok,
  FaPlus,
} from "react-icons/fa";
import Image from "next/image";
import { openSans, rubik } from "@/utils/fonts/fonts";
import Link from "next/link";

const socialLinks = [
  { icon: <FaFacebookF size={15} />, href: "#", label: "Facebook" },
  { icon: <FaInstagram size={15} />, href: "#", label: "Instagram" },
  { icon: <FaTwitter size={15} />, href: "#", label: "Twitter" },
  { icon: <FaTiktok size={15} />, href: "#", label: "TikTok" },
];

const categories = [
  "Runners",
  "Sneakers",
  "Basketball",
  "Outdoor",
  "Golf",
  "Hiking",
];

const companyLinks = ["About", "Contact", "Blogs"];

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="w-[95%] mx-auto xl:w-full font-sans">
      {/* Blue Banner */}
      <div className="rounded-3xl lg:rounded-t-[48px] bg-[#4A69E2] pb-16 md:pb-20 px-3 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 max-w-7xl mx-auto py-10">
          {/* Left */}
          <div className="flex flex-col gap-6 w-full lg:w-auto">
            <div>
              <p
                className={`${rubik.className} font-semibold text-white leading-tight tracking-tight text-[32px] sm:text-4xl md:text-5xl`}
              >
                Join our KicksPlus
                <br />
                Club & get 15% off
              </p>

              <p
                className={`${openSans.className} text-base sm:text-lg text-[#E7E7E3] mt-2`}
              >
                Sign up for free! Join the community.
              </p>
            </div>

            {/* Email form */}
            <Box className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full sm:w-auto">
              <TextField
                placeholder="Email address"
                variant="outlined"
                size="small"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  maxWidth: { sm: "260px" },
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "6px",
                    border: "1px solid white",
                    "& fieldset": { border: "none" },
                  },
                  "& input": {
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.9rem",
                    color: "#fff",
                    padding: "10px 8px",
                    "&::placeholder": { color: "#fff" },
                  },
                }}
              />

              <Button
                variant="contained"
                size="small"
                disableElevation
                sx={{
                  bgcolor: "#111",
                  color: "white",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  borderRadius: "6px",
                  px: 3,
                  py: "10px",
                  fontSize: "0.8rem",
                  "&:hover": { bgcolor: "#000" },
                  width: { xs: "100%", sm: "auto" },
                }}
              >
                SUBMIT
              </Button>
            </Box>
          </div>

          {/* Right Logo */}
          <div className="relative w-55 sm:w-70 lg:w-87.5 shrink-0">
            <Image
              src="/images/logo-white.png"
              alt="KICKS+ Logo"
              width={350}
              height={60}
              className="w-full h-auto"
            />
            <p className="absolute -top-4 sm:-top-3 -right-3 lg:right-0 bg-[#FFA52F] rounded-full p-1">
              <FaPlus className="text-[#4A69E2]" />
            </p>
          </div>
        </div>
      </div>

      {/* Dark Footer */}
      <div className="-mt-12 md:-mt-16">
        <div className="rounded-[48px] bg-[#1e1e1c] pt-12 px-6 md:px-10 lg:px-12">
          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
            {/* About */}
            <div className="lg:col-span-2">
              <p
                className={`${rubik.className} font-semibold text-[#ffa52f] text-3xl md:text-4xl mb-4`}
              >
                About us
              </p>
              <p
                className={`${openSans.className} text-base sm:text-lg md:text-xl font-semibold text-[#E7E7E3] max-w-md`}
              >
                We are the biggest hyperstore in the universe. We got you all
                cover with our exclusive collections and latest drops.
              </p>
            </div>

            {/* Categories */}
            <div>
              <p
                className={`${rubik.className} font-semibold text-[#ffa52f] text-xl md:text-2xl mb-4`}
              >
                Categories
              </p>
              <ul className="flex flex-col gap-2">
                {categories.map((cat) => (
                  <li key={cat}>
                    <Link
                      href="#"
                      className={`${openSans.className} text-base md:text-lg font-semibold text-[#E7E7E3] hover:text-white transition`}
                    >
                      {cat}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <p
                className={`${rubik.className} font-semibold text-[#ffa52f] text-xl md:text-2xl mb-4`}
              >
                Company
              </p>
              <ul className="flex flex-col gap-2">
                {companyLinks.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className={`${openSans.className} text-base md:text-lg font-semibold text-[#E7E7E3] hover:text-white transition`}
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div>
              <p
                className={`${rubik.className} font-semibold text-[#ffa52f] text-xl md:text-2xl mb-4`}
              >
                Follow us
              </p>
              <div className="flex gap-3 flex-wrap">
                {socialLinks.map(({ icon, href, label }) => (
                  <Link
                    key={label}
                    href={href}
                    aria-label={label}
                    className="flex items-center justify-center rounded-full bg-white p-1 lg:p-3 text-black hover:bg-black hover:text-white transition"
                  >
                    {icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Large Logo */}
          <div className="relative w-full overflow-hidden h-15 sm:h-30 lg:h-60">
            <Image
              src="/Images/logo-white.png"
              alt="Kicks Logo"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>

        {/* Copyright */}
        <div className="bg-white text-center py-4 mt-6">
          <p className="text-[#232321] text-sm sm:text-base">
            © All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
