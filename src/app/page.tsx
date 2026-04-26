import BackgroundInkDrops from "@/components/common/background-ink-drops";
import AboutSection from "@/components/home/about-section";
import ContactSection from "@/components/home/contact-section";
import PortfolioSection from "@/components/home/portfolio-section";

export default function Home() {
  return (
    <main className="relative min-h-dvh">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <BackgroundInkDrops />
      </div>
      <PortfolioSection />
      <ContactSection />
      <AboutSection />
    </main>
  );
}
