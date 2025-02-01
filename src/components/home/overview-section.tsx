import { cn } from "@/lib/utils";
import Image from "next/image";
import Article from "@/components/common/article/article";
import BackgroundInkDrops from "@/components/common/background-ink-drops";
import IncreasingNumber from "@/components/home/increasing-number";
import { Separator } from "@/components/ui/separator";

interface Props {
  noArticle?: boolean;
}

const OverviewSection = ({ noArticle }: Props) => {
  return (
    <section className="relative mx-auto flex w-full max-w-[1440px] flex-col gap-6 px-5 py-10 md:flex-row md:py-20">
      <BackgroundInkDrops />

      <div className="flex-1">
        <Separator className={cn("mb-5 bg-foreground", noArticle && "mb-10")} />
        {!noArticle && (
          <>
            <Article
              title="OVERVIEW"
              description={
                <>
                  웨어에버는 말 그대로 어디서나, <br />
                  그리고 어디서든 가치를 실현시키고 <br />
                  동행하는 모든 분들과의 성공을 위해 <br />
                  끊임없이 고민하고 성장합니다. <br />
                </>
              }
            ></Article>
            <Separator className="my-10 bg-foreground" />
          </>
        )}
        <div className="flex items-center justify-between">
          <span className="flex items-end">
            <IncreasingNumber
              className="text-4xl md:text-6xl"
              value={91.7}
              toFixed={1}
            />
            <span className="text-4xl md:text-6xl">%</span>
          </span>
          <p className="text-lg md:text-2xl">재계약률</p>
        </div>
        <Separator className="my-10 bg-foreground" />
        <div className="flex items-center justify-between">
          <span className="flex items-end">
            <IncreasingNumber
              className="w-[112px] text-4xl md:w-[190px] md:text-6xl"
              value={14200}
            ></IncreasingNumber>
            <span className="text-base md:text-xl">건 이상</span>
          </span>
          <p className="text-lg md:text-2xl">캠페인 진행</p>
        </div>
        <Separator className="my-10 bg-foreground" />
      </div>

      <div className="md:full relative aspect-square w-2/3 flex-1 overflow-hidden rounded-2xl bg-black md:mt-0">
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
