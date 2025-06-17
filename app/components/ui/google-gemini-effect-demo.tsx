"use client";
import { useScroll, useTransform } from "framer-motion";
import React from "react";
import { GoogleGeminiEffect } from "./google-gemini-effect";

export function GoogleGeminiEffectDemo() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.2], [0.2, 1]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.2], [0.15, 1]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.2], [0.1, 1]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.2], [0.05, 1]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <div
      className="h-[400vh] bg-black w-full dark:border dark:border-white/[0.1] rounded-md relative pt-40 overflow-clip"
      ref={ref}
    >
      <div className="sticky top-0 h-screen w-full">
        <GoogleGeminiEffect
          pathLengths={[
            pathLengthFirst,
            pathLengthSecond,
            pathLengthThird,
            pathLengthFourth,
            pathLengthFifth,
          ]}
        />
      </div>
    </div>
  );
} 
