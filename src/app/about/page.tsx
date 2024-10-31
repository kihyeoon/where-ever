import Image from "next/image";
import CardsSection from "@/components/about/cards-section";
import BackgroundInkDrops from "@/components/common/background-ink-drops";
import ContactSection from "@/components/home/contact-section";
import OverviewSection from "@/components/home/overview-section";

const Page = () => {
  return (
    <main>
      <section className="relative mb-20 h-screen w-full overflow-hidden bg-black">
        <div className="relative h-screen w-full opacity-35">
          <Image
            src="/images/웨어에버-컵홀더.jpeg"
            alt="overview"
            fill
            style={{
              objectFit: "cover",
              transform: "scale(1.5) translate(10%, 10%)",
            }}
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center gap-6 px-8 md:px-32">
          <div className="text-5xl font-semibold md:text-6xl">WHEREVER?</div>
          <p className="w-96 text-pretty break-keep text-lg font-semibold leading-7 text-neutral-400 md:text-2xl md:leading-9">
            웨어에버는 말 그대로 어디서나, 그리고 어디서든{" "}
            <span className="text-white">가치를 실현시키고</span> 저희와
            동행하는 모든 분들의 수익화를 위해 끊임없이 고민하고 성장합니다.
            또한 한 매체에 집중하는 것이 아닌{" "}
            <span className="text-white">마케팅을 다각화함으로서</span>
            타겟 영역을 점진적으로 확장하여 언제든, 어디서든{" "}
            <span className="text-white">신뢰받는 기업</span>이 될 수 있도록
            최선을 다하고 있습니다.
          </p>
        </div>
      </section>
      <section className="relative flex h-screen flex-col justify-center px-8 md:flex-row md:items-center md:justify-evenly md:gap-3 md:px-32">
        <BackgroundInkDrops />
        <div className="mb-12 h-60 md:mb-0 md:w-72">
          <h2 className="text-2xl font-semibold md:text-3xl">
            &apos;고객&apos;의
          </h2>
          <hr className="border-t-1 my-3 border-neutral-400" />
          <ul className="list-disc space-y-1 pl-5 font-semibold text-neutral-400 md:text-lg">
            <li>직접적인 매출로 이어지는 서비스 제공</li>
            <li>적합한 마케팅 트렌드 선도</li>
            <li>유연한 커뮤니케이션 사고</li>
          </ul>
        </div>
        <div className="h-60 md:w-72">
          <h2 className="text-2xl font-semibold md:text-3xl">
            &apos;소비자&apos;의
          </h2>
          <hr className="border-t-1 my-3 border-neutral-400" />
          <ul className="list-disc space-y-1 pl-5 font-semibold text-neutral-400 md:text-lg">
            <li>눈길을 끌 수 있는 마케팅 제안</li>
            <li>니즈에 충족하는 서비스</li>
          </ul>
        </div>
      </section>
      <section className="relative mb-20 h-screen">
        <div className="relative size-full opacity-25">
          <Image
            src="/images/웨어에버-명함.jpeg"
            alt="background"
            fill
            objectFit="cover"
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-8 md:px-32">
          <Image
            src="/images/조직도.svg"
            alt="조직도"
            objectFit="contain"
            width={1000}
            height={350}
          />
        </div>
      </section>
      <OverviewSection noArticle />
      <CardsSection />
      <ContactSection />
    </main>
  );
};

export default Page;
