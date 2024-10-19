import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="relative min-h-dvh overflow-hidden">
      <section className="relative h-screen w-full bg-black">
        <video
          autoPlay
          loop
          muted
          className="-z-1 h-screen w-full object-cover opacity-65"
        >
          <source src="/videos/city-night.mp4" type="video/mp4" />
          당신의 브라우저는 비디오 태그를 지원하지 않습니다.
        </video>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center text-white">
          <h1 className="mb-6 text-nowrap text-3xl font-bold">
            신뢰와 성장을 이끄는 파트너
          </h1>
          <Button variant={"outline"} className="bg-transparent py-5 text-base">
            도입 문의하기
          </Button>
        </div>
      </section>
      <section className="h-screen w-full"></section>
    </main>
  );
}
