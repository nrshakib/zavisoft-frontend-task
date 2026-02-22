import Categories from "@/components/LandingPage/Categories";
import HeroSection from "@/components/LandingPage/HeroSection";
import NewDrops from "@/components/LandingPage/NewDrops";
import Reviews from "@/components/LandingPage/Reviews";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <NewDrops />
      <Categories />
      <Reviews />
    </div>
  );
}
