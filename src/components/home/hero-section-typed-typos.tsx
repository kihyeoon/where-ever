"use client";

import { useState } from "react";
import { ReactTyped as Typed } from "react-typed";

const textRows = ["WHEREVER", "어디서나,", "어디서든,", "가능합니다."];

export const HeroSectionTypedTypos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [completedTexts, setCompletedTexts] = useState<string[]>([]);

  const handleComplete = () => {
    setCompletedTexts((prev) => [...prev, textRows[currentIndex]]);
    setCurrentIndex((prev) => prev + 1);
  };

  return (
    <div className="absolute top-1/2 w-full -translate-y-1/2 transform space-y-6 px-8 md:space-y-4 md:px-32">
      {/* 이미 완성된 텍스트 표시 */}
      {completedTexts.map((text, index) => (
        <div key={`completed-${index}`} className="h-12 md:h-24">
          <div className="text-6xl font-semibold md:text-8xl">{text}</div>
        </div>
      ))}

      {/* 현재 타이핑 중인 텍스트 */}
      {currentIndex < textRows.length && (
        <div className="h-12 md:h-24">
          <Typed
            strings={[textRows[currentIndex]]}
            typeSpeed={50}
            onComplete={handleComplete}
            className="text-6xl font-semibold md:text-8xl"
          />
        </div>
      )}
    </div>
  );
};
