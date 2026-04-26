export default function AboutSection() {
  return (
    <section id="about" className="px-4 py-24 md:px-14 md:py-32 lg:px-20 xl:px-32">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-[family-name:var(--font-alata)] text-5xl font-light tracking-tight md:text-7xl">
          WHEREVER?
        </h2>

        <div className="mt-12 space-y-6 text-base leading-relaxed text-foreground/80 md:mt-16 md:text-lg md:leading-loose">
          <p className="break-keep">
            웨어에버는 공간을 통해 브랜드의 가치를 전달합니다.
          </p>

          <p className="break-keep">
            지금까지, 그리고 앞으로 쌓아갈 경험을 바탕으로 고객의 시선과 흐름까지
            고려한 공간을 만듭니다.
          </p>

          <p className="break-keep">
            단순히 보기 좋은 공간이 아닌,
            <br />
            머무르고 싶고, 선택하게 되는 공간.
          </p>

          <p className="break-keep">
            디테일 하나까지 고민하며
            <br />
            당신의 브랜드가 가장 잘 드러나는 순간을 완성합니다.
          </p>
        </div>
      </div>
    </section>
  );
}
