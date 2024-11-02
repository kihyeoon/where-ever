import BackgroundInkDrops from "@/components/common/background-ink-drops";
import { ParallaxText } from "@/components/common/parallax-text";
// import { FAQSection } from "@/components/service/faq-section";
import { HeroSectionTypos } from "@/components/service/hero-section-typos";
import { WithImageCard } from "@/components/service/with-image-card";
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
      <section className="mx-auto mb-20 max-w-[1440px] px-5 pt-20 md:pt-28">
        <HeroSectionTypos
          headlines={snsHeadlines}
          breakIndex={1}
          breakMarginIndex={1}
        />
      </section>
      <section className="mx-auto mb-20 max-w-[1440px] px-5 pt-20 md:pt-28">
        <Separator className="mb-5 bg-foreground" />
        <h1 className="article-title">HOW TO</h1>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <WithImageCard
            src="/images/keyboard-typing.jpg"
            title="프로필&게시물 참여유입"
            description="프로필 팔로워와 게시물의 인기를 좌우하는 좋아요, 저장, 댓글 등의 소통참여를 제공합니다."
          />
          <WithImageCard
            src="/images/instagram.jpg"
            title="인기게시물"
            description="타겟 고객의 해시태그 검색 시 바로 노출되는 인기게시물 서비스를 제공합니다."
          />
        </div>
      </section>
      {/* <FAQSection /> */}
    </main>
  );
};

export default page;
