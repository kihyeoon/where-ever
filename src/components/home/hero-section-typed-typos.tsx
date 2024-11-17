"use client";

import { ReactTyped as Typed } from "react-typed";

const textRows = ["WHEREVER", "어디서나,", "어디서든,", "가능합니다."];

export const HeroSectionTypedTypos = () => {
  return (
    <div className="absolute top-1/2 w-full -translate-y-1/2 transform px-8 md:px-32">
      <Typed
        strings={textRows}
        typeSpeed={50}
        backSpeed={30}
        loop
        className="block text-6xl font-semibold md:text-8xl"
        style={{ 
          whiteSpace: 'pre-line',
          lineHeight: '1.5',
        }}
      />
    </div>
  );
};