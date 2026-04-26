import BackgroundInkDrops from "@/components/common/background-ink-drops";
import ContactForm from "@/components/contact/contact-form";

const page = () => {
  return (
    <main className="relative mx-auto max-w-[1440px] px-5 pt-36">
      <BackgroundInkDrops />
      <section className="mx-auto w-full md:w-[700px]">
        <h1 className="article-title">Contact</h1>
        <div className="mb-6 rounded-2xl bg-foreground/10 p-14 text-center">
          <p className="whitespace-pre-line text-pretty break-keep">
            더욱 자세한 상담 위해 구체적으로 작성부탁드립니다. <br />
            구체적이지 않은 글 작성은 회신 되지 않을 수 있는 점 참고
            부탁드립니다.
          </p>
        </div>
        <ContactForm />
      </section>
    </main>
  );
};

export default page;
