import ContactForm from "@/components/contact/contact-form";

export default function ContactSection() {
  return (
    <section id="contact" className="px-4 py-24 md:px-14 md:py-32 lg:px-28 xl:px-44 2xl:px-56">
      <header className="mb-12 md:mb-16">
        <h2 className="font-[family-name:var(--font-alata)] text-4xl font-light tracking-tight md:text-6xl">
          Contact us
        </h2>
        <p className="mt-4 text-sm text-foreground/60 md:text-base">
          공간에 대한 어떤 이야기든 편하게 들려주세요
        </p>
      </header>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_320px] lg:gap-16">
        <ContactForm />

        <aside className="space-y-10 lg:border-l lg:border-foreground/15 lg:pl-12">
          <div>
            <h3 className="font-[family-name:var(--font-alata)] text-xl tracking-wide">
              Address
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-foreground/70">
              서울특별시 양천구 중앙로48길 10
            </p>
          </div>

          <div>
            <h3 className="font-[family-name:var(--font-alata)] text-xl tracking-wide">
              Email us
            </h3>
            <a
              href="mailto:wherever23@naver.com"
              className="mt-3 block text-sm text-foreground/70 transition-colors hover:text-foreground"
            >
              wherever23@naver.com
            </a>
          </div>

          <div>
            <h3 className="font-[family-name:var(--font-alata)] text-xl tracking-wide">
              Call us
            </h3>
            <a
              href="tel:070-7801-3030"
              className="mt-3 block text-sm text-foreground/70 transition-colors hover:text-foreground"
            >
              070-7801-3030
            </a>
            <p className="mt-2 text-sm text-foreground/70">
              월–금 9:00 AM – 6:00 PM
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
