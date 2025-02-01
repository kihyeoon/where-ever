import ContactButton from "@/components/common/contact-button";
// import { HeroSectionTypos } from "@/components/home/hero-section-typos";
import { HeroSectionTypedTypos } from "@/components/home/hero-section-typed-typos";

const HeroSection = () => {
  return (
    <section className="relative mb-10 h-screen w-full bg-black md:mb-20">
      <video
        playsInline
        autoPlay
        loop
        muted
        className="-z-1 h-screen w-full object-cover opacity-65"
      >
        <source src="/videos/city-night.mp4" type="video/mp4" />
        비디오를 지원하지 않는 브라우저입니다.
      </video>
      {/* <HeroSectionTypos /> */}
      <HeroSectionTypedTypos />
      <ContactButton />
    </section>
  );
};

export default HeroSection;
