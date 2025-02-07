"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
  AnimatePresence,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

interface TimelineEntry {
  title: string;
  subtitle: string;
  shortDescription: string;
  content: {
    mainPoints: string[];
    details: string;
  };
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref, expandedIndex]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const formatBulletPoint = (point: string) => {
    const [title, ...rest] = point.split(': ');
    if (rest.length === 0) return <span className="text-white/70">{point}</span>;
    
    return (
      <>
        <span className="font-semibold bg-gradient-to-r from-[#8A7FFB] to-[#B4B0FF] bg-clip-text text-transparent">
          {title}:
        </span>
        <span className="text-white/70">{' ' + rest.join(': ')}</span>
      </>
    );
  };

  return (
    <div className="w-full bg-transparent font-sans md:px-10" ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-gradient-to-r from-[#8A7FFB] to-[#B4B0FF] border border-purple-500/20 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-3xl font-bold bg-gradient-to-r from-[#8A7FFB] to-[#B4B0FF] bg-clip-text text-transparent">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold bg-gradient-to-r from-[#8A7FFB] to-[#B4B0FF] bg-clip-text text-transparent">
                {item.title}
              </h3>
              
              <motion.div
                className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-purple-500/10 cursor-pointer overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                onClick={() => toggleExpand(index)}
              >
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white/90 mb-2">
                      {item.subtitle}
                    </h4>
                    <p className="text-white/70">
                      {item.shortDescription}
                    </p>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-1"
                  >
                    <ChevronDown className="w-5 h-5 text-purple-400" />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pt-4 border-t border-purple-500/10"
                    >
                      <div className="space-y-4">
                        <ul className="space-y-2">
                          {item.content.mainPoints.map((point, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-purple-400 mt-1">•</span>
                              <span>{formatBulletPoint(point)}</span>
                            </li>
                          ))}
                        </ul>
                        <p className="text-white/60 text-sm italic">
                          {item.content.details}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        ))}
        
        <div
          style={{ height: height + "px" }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-purple-500/20 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-[#8A7FFB] via-[#B4B0FF] to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
}; 
