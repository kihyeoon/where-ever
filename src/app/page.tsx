import ContactSection from "@/components/home/contact-section";
import HeroSection from "@/components/home/hero-section";
import OverviewSection2 from "@/components/home/overview-section-2";
import ServiceSection from "@/components/home/service-section";

export default function Home() {
  return (
    <main className="relative min-h-dvh overflow-hidden">
      <HeroSection />
      <OverviewSection2 />
      <ServiceSection />
      <ContactSection />
    </main>
  );
}
