import { ParallaxText } from "@/components/common/parallax-text";

const page = () => {
  return (
    <div className="mx-auto min-h-dvh max-w-[1440px] px-5 pt-64">
      <ParallaxText baseVelocity={-3}>Branding</ParallaxText>
    </div>
  );
};

export default page;
