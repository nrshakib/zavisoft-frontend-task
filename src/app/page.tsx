import HeroSection from "@/components/LandingPage/HeroSection";
import NewDrops from "@/components/LandingPage/NewDrops";
import { rubik } from "@/utils/fonts/fonts";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <div className="py-10">
        <div className="flex items-end justify-between gap-4 py-10">
          <p
            className={`${rubik.className} text-[#232321] text-7xl font-semibold uppercase w-[50%]`}
          >
            Don’t miss out new drops
          </p>
          <Link
            href="/new-drops"
            className="text-white bg-[#4A69E2] hover:underline uppercase px-3 py-2 rounded-lg"
          >
            Show New Drops
          </Link>
        </div>
        <NewDrops />
      </div>
    </div>
  );
}
