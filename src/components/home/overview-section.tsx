import Image from "next/image";
import Article from "@/components/common/article/article";
import BackgroundInkDrops from "@/components/common/background-ink-drops";
import IncreasingNumber from "@/components/home/increasing-number";
import { Separator } from "@/components/ui/separator";

const OverviewSection = () => {
  return (
    <section className="relative mx-auto mb-20 flex w-full max-w-[1440px] flex-col gap-6 px-5 pt-36 md:flex-row">
      <BackgroundInkDrops />

      <div className="flex-1">
        <Separator className="mb-5 bg-foreground" />
        <Article
          title="OVERVIEW"
          description={
            <>
              웨어에버는 말 그대로 어디서나, <br />
              그리고 어디서든 가치를 실현시키고 <br />
              저희와 동행하는 모든 분들의 수익화를 위해 <br />
              끊임없이 고민하고 성장합니다. <br />
            </>
          }
        ></Article>
        <Separator className="my-10 bg-foreground" />
        <div className="flex items-center justify-between">
          <IncreasingNumber className="text-6xl" value={91.7} toFixed={1} />
          <p className="text-2xl">재계약률</p>
        </div>
        <Separator className="my-10 bg-foreground" />
        <div className="flex items-center justify-between">
          <span className="flex items-end">
            <IncreasingNumber
              className="text-6xl"
              value={14200}
            ></IncreasingNumber>
            <span className="text-xl">건 이상</span>
          </span>
          <p className="text-2xl">캠페인 진행</p>
        </div>
        <Separator className="my-10 bg-foreground" />
      </div>

      <div className="relative mt-14 aspect-square flex-1 overflow-hidden rounded-2xl bg-black md:mt-0">
        <Image
          className="h-full w-full object-cover opacity-70"
          src="/images/buildings.jpg"
          width={800}
          height={800}
          alt="overview"
        />
      </div>
    </section>
  );
};

export default OverviewSection;
