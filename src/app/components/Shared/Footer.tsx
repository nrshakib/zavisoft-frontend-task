"use client";

import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  InputAdornment,
} from "@mui/material";
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Image from "next/image";

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
    <footer className="w-[95%] mx-auto font-sans">
      {/* ── Blue Newsletter Banner ── */}
      <div className="rounded-t-[48px] overflow-auto bg-[#4A69E2] pb-20">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between h-full p-9">
          {/* Left */}
          <div className="flex flex-col gap-4">
            <div>
              <p className=" font-semibold text-white uppercase leading-tight tracking-tight text-5xl">
                JOIN OUR KICKSPLUS
                <br />
                CLUB &amp; GET 15% OFF
              </p>

              <p
                className="text-lg text-[#E7E7E3] mt-1.5"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Sign up for free! Join the community.
              </p>
            </div>

            {/* Email form */}
            <Box className="flex items-center gap-2">
              <TextField
                placeholder="Email address"
                variant="outlined"
                size="small"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  borderRadius: "6px",
                  width: { xs: "180px", sm: "240px" },
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "6px",
                    border: "1px solid white",

                    "& fieldset": { border: "none" },
                  },
                  "& input": {
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.82rem",
                    color: "#fff",
                    padding: "8px 6px",
                    "&::placeholder": { color: "#fff" },
                  },
                  "& .MuiInputAdornment-root": { marginRight: "4px" },
                }}
              />
              <Button
                variant="contained"
                size="small"
                disableElevation
                sx={{
                  bgcolor: "#111",
                  color: "white",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  borderRadius: "6px",
                  px: 2,
                  py: "7px",
                  fontSize: "0.75rem",
                  minWidth: "auto",
                  "&:hover": { bgcolor: "#000" },
                }}
              >
                SUBMIT
              </Button>
            </Box>
          </div>

          {/* Right: KICKS+ Logo */}
          <div
            className="shrink-0 mt-6 sm:mt-0"
            style={{ paddingRight: "8px" }}
          >
            <Image
              src="/images/logo-white.png"
              alt="KICKS+ Logo"
              width={120}
              height={40}
            />
          </div>
        </div>
      </div>

      {/* ── Dark Footer Section ── */}
      <div className="" style={{ marginTop: "-60px" }}>
        <div
          className="rounded-[48px] bg-[#1e1e1c]"
          style={{ padding: "36px 36px 0 36px" }}
        >
          {/* 4-column grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            {/* About */}
            <div>
              <FooterHeading>About us</FooterHeading>
              <Typography
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: "#9ca3af",
                  fontSize: "0.82rem",
                  lineHeight: 1.75,
                }}
              >
                We are the biggest hyperstore in the universe. We got you all
                cover with our exclusive collections and latest drops.
              </Typography>
            </div>

            {/* Categories */}
            <div>
              <FooterHeading>Categories</FooterHeading>
              <ul className="flex flex-col gap-[6px] list-none p-0 m-0">
                {categories.map((cat) => (
                  <li key={cat}>
                    <a
                      href="#"
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.82rem",
                        color: "#9ca3af",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) =>
                        ((e.currentTarget as HTMLAnchorElement).style.color =
                          "#fff")
                      }
                      onMouseLeave={(e) =>
                        ((e.currentTarget as HTMLAnchorElement).style.color =
                          "#9ca3af")
                      }
                    >
                      {cat}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <FooterHeading>Company</FooterHeading>
              <ul className="flex flex-col gap-[6px] list-none p-0 m-0">
                {companyLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.82rem",
                        color: "#9ca3af",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) =>
                        ((e.currentTarget as HTMLAnchorElement).style.color =
                          "#fff")
                      }
                      onMouseLeave={(e) =>
                        ((e.currentTarget as HTMLAnchorElement).style.color =
                          "#9ca3af")
                      }
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Follow us */}
            <div>
              <FooterHeading>Follow us</FooterHeading>
              <div className="flex gap-2 flex-wrap">
                {socialLinks.map(({ icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="flex items-center justify-center rounded-full"
                    style={{
                      width: 34,
                      height: 34,
                      background: "#2a2a28",
                      color: "#9ca3af",
                      transition: "background 0.2s, color 0.2s",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.background =
                        "#4A69E2";
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        "#fff";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.background =
                        "#2a2a28";
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        "#9ca3af";
                    }}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Giant logo image — partially clipped at bottom */}
          <div
            className="overflow-hidden mx-9 relative"
            style={{
              height: "clamp(100px, 20vw, 240px)",
            }}
          >
            <Image
              src="/Images/logo-white.png"
              alt="Kicks Logo"
              fill
              style={{ objectFit: "cover", objectPosition: "top" }}
              priority
            />
          </div>
        </div>

        {/* Copyright */}
        <div className="bg-white text-center py-4">
          <p
            className="text-[#232321]"
            style={{ fontFamily: "'Open Sans', sans-serif" }}
          >
            © All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <Typography
      style={{
        fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
        fontWeight: 800,
        fontSize: "1rem",
        textTransform: "uppercase",
        letterSpacing: "0.05em",
        color: "white",
        marginBottom: "12px",
      }}
    >
      {children}
    </Typography>
  );
}
