import { ParallaxText } from "@/components/common/parallax-text";
import { HeroSectionTypos } from "@/components/service/hero-section-typos";

const page = () => {
  return (
    <main>
      <section className="mt-44 md:mt-64">
        <ParallaxText baseVelocity={-3}>Place Marketing</ParallaxText>
      </section>
      <section className="mx-auto min-h-dvh max-w-[1440px] px-5 pt-20 md:pt-28">
        <HeroSectionTypos />
      </section>
    </main>
  );
};

export default page;
