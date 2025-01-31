import { CardCarousel } from "@/components/common/card-carousel";
import HeroSection from "@/components/home/hero-section";
import OverviewSection from "@/components/home/overview-section";

export default function Home() {
  return (
    <main className="relative min-h-dvh overflow-hidden">
      <HeroSection />
      <OverviewSection />
      <CardCarousel />
    </main>
  );
}
