import Image from "next/image";
import BackgroundInkDrops from "@/components/common/background-ink-drops";
import { ParallaxText } from "@/components/common/parallax-text";
import ContactSection from "@/components/home/contact-section";
import { HeroSectionTypos } from "@/components/service/hero-section-typos";
import { Separator } from "@/components/ui/separator";

const snsHeadlines = [
  "3명 중 1명은",
  "인스타그램을 통해 상품을 구매한다",
  "MZ세대의 활발한 SNS활동으로 카톡 대신 인스타 DM을 통해 소통을 하는",
  "비중이 지속적으로 늘고 있기에 소통을 넘어 더욱 중요한 매체로 자리잡고 있습니다.",
  "또한 인스타그램 마케팅은 특정 타겟층을 목표로 설정할 수 있어 매우 효과적입니다.",
];

const page = () => {
  return (
    <main>
      <BackgroundInkDrops />
      <section className="mt-44 md:mt-64">
        <ParallaxText baseVelocity={-3}>Instagram Marketing</ParallaxText>
      </section>
      <section className="mx-auto max-w-[1440px] px-5 pb-10 pt-20 md:pb-20 md:pt-28">
        <HeroSectionTypos
          headlines={snsHeadlines}
          breakIndex={1}
          breakMarginIndex={1}
        />
        <Separator className="mt-10 md:mt-20" />
      </section>
      <div className="md:mx-auto md:flex md:max-w-[1440px] md:items-center md:gap-10 md:px-5 md:pb-10">
        <section className="mx-auto max-w-[1440px] px-5 pb-10 md:m-0 md:flex-1 md:p-0">
          <Image
            priority
            src="/images/service-insta.png"
            alt="instagram"
            width={840}
            height={560}
            className="mx-auto w-full rounded-lg md:m-0"
          />
        </section>
        <ContactSection />
      </div>
    </main>
  );
};

export default page;
