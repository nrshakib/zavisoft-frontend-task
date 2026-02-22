"use client";

import { IconButton, Badge, TextField, Drawer, Collapse } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaSearch, FaUser, FaBars, FaChevronDown, FaShoppingBag } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { motion, AnimatePresence } from "motion/react";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { cartItems } = useCart();
  const [openSearch, setOpenSearch] = useState(false);
  // ... rest of the code
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openMen, setOpenMen] = useState(false);
  const [openWomen, setOpenWomen] = useState(false);

  return (
    <div className="w-full py-4 flex justify-center">
      <nav className="w-[95%] bg-[#EDEDED] rounded-2xl px-6 md:px-8 py-3 flex items-center justify-between relative">
        {/* Desktop Left Section */}
        <div className="hidden lg:flex items-center gap-6 font-semibold text-[#232321]">
          <Link href="/" className="flex items-center gap-1">
            New Drops 🔥
          </Link>
          <Link href="/" className="flex items-center gap-1">
            Men <MdKeyboardArrowDown size={18} />
          </Link>
          <Link href="/" className="flex items-center gap-1">
            Women <MdKeyboardArrowDown size={18} />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <IconButton onClick={() => setOpenDrawer(true)}>
            <FaBars size={20} />
          </IconButton>
        </div>

        {/* Responsive Logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          {/* Small & Medium */}
          <div className="block lg:hidden">
            <Image src="/Images/logo.png" width={80} height={20} alt="Logo" />
          </div>

          {/* Large */}
          <div className="hidden lg:block">
            <Image src="/Images/logo.png" width={128} height={32} alt="Logo" />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* Desktop Search */}
          <div className="hidden lg:flex items-center">
            <AnimatePresence>
              {openSearch && (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 220, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden mr-2"
                >
                  <TextField
                    size="small"
                    placeholder="Search..."
                    autoFocus
                    fullWidth
                    sx={{
                      backgroundColor: "#fff",
                      borderRadius: "10px",
                      "& fieldset": { border: "none" },
                    }}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <IconButton onClick={() => setOpenSearch(!openSearch)}>
              <FaSearch size={20} color="#232321" />
            </IconButton>
          </div>

          <IconButton>
            <FaUser size={20} color="#232321" />
          </IconButton>

          <Link href="/cart">
            <Badge
              badgeContent={cartItems.length}
              showZero
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              sx={{
                "& .MuiBadge-badge": {
                  backgroundColor: "#FFA52F",
                  color: "#232321",
                  fontSize: "12px",
                  fontWeight: 700,
                  minWidth: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  border: "2px solid #EDEDED",
                },
              }}
            >
              <FaShoppingBag size={20} color="#232321" />
            </Badge>
          </Link>
        </div>
      </nav>

      {/* Drawer */}
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <div className="w-72 p-6 flex flex-col gap-6">
          {/* Drawer Search */}
          <TextField
            size="small"
            placeholder="Search..."
            fullWidth
            sx={{
              backgroundColor: "#fff",
              borderRadius: "10px",
              "& fieldset": { border: "none" },
            }}
          />

          {/* New Drops */}
          <Link href="/" onClick={() => setOpenDrawer(false)}>
            New Drops 🔥
          </Link>

          {/* Men Dropdown */}
          <div>
            <button
              onClick={() => setOpenMen(!openMen)}
              className="flex items-center justify-between w-full font-semibold"
            >
              Men
              <FaChevronDown
                className={`transition-transform ${
                  openMen ? "rotate-180" : ""
                }`}
              />
            </button>

            <Collapse in={openMen}>
              <div className="flex flex-col pl-4 mt-2 gap-2 text-sm text-gray-600">
                <Link href="/">Sneakers</Link>
                <Link href="/">Clothing</Link>
                <Link href="/">Accessories</Link>
              </div>
            </Collapse>
          </div>

          {/* Women Dropdown */}
          <div>
            <button
              onClick={() => setOpenWomen(!openWomen)}
              className="flex items-center justify-between w-full font-semibold"
            >
              Women
              <FaChevronDown
                className={`transition-transform ${
                  openWomen ? "rotate-180" : ""
                }`}
              />
            </button>

            <Collapse in={openWomen}>
              <div className="flex flex-col pl-4 mt-2 gap-2 text-sm text-gray-600">
                <Link href="/">Sneakers</Link>
                <Link href="/">Clothing</Link>
                <Link href="/">Accessories</Link>
              </div>
            </Collapse>
          </div>
        </div>
      </Drawer>
    </div>
  );
}
