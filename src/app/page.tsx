import HeroSection from "@/components/LandingPage/HeroSection";
import NewDrops from "@/components/LandingPage/NewDrops";
import { rubik } from "@/utils/fonts/fonts";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <NewDrops />
    </div>
  );
}
