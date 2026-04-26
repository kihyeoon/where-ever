import { Separator } from "@/components/ui/separator";

export const FAQSection = () => {
  return (
    <section className="mx-auto mb-20 max-w-[1440px] px-5 pt-20 md:pt-28">
      <Separator className="mb-5 bg-foreground" />
      <h1 className="article-title">FAQ</h1>
      <p className="text-5xl">자주 묻는 질문에 답변드려요.</p>
    </section>
  );
};
