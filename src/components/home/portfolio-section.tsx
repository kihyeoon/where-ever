import Image from "next/image";
import { portfolioItems } from "./portfolio-data";

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="px-4 pb-24 pt-32 md:px-14 md:pb-32 md:pt-40 lg:px-28 xl:px-44 2xl:px-56">
      <header className="mb-12 md:mb-16">
        <h2 className="font-[family-name:var(--font-alata)] text-4xl font-light tracking-tight md:text-6xl">
          Portfolio
        </h2>
        <p className="mt-4 text-sm text-foreground/60 md:text-base">
          공간을 통해 브랜드의 가치를 전달한 사례
        </p>
      </header>

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {portfolioItems.map((item) => (
          <li
            key={item.id}
            className="group relative aspect-[4/3] overflow-hidden bg-foreground/5"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div
              className="pointer-events-none absolute inset-0 flex flex-col justify-end p-5
                         bg-gradient-to-t from-black/70 via-black/20 to-transparent
                         opacity-100 transition-opacity duration-300
                         md:bg-black/40 md:backdrop-blur-sm md:opacity-0 md:group-hover:opacity-100"
            >
              <p className="text-xs uppercase tracking-wider text-white/70">
                {item.category}
              </p>
              <p className="mt-1 text-lg font-medium text-white">
                {item.title}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
