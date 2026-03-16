"use client";
import { useEffect } from "react";
import { trackEvent } from "../lib/analytics";

export default function ScrollTracker() {
  useEffect(() => {
    let lastDepth = 0;
    const thresholds = [25, 50, 75, 100];
    const fired = new Set();
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const winHeight = window.innerHeight;
      const docHeight = document.body.scrollHeight;
      const scrolled = Math.floor(((scrollTop + winHeight) / docHeight) * 100);
      thresholds.forEach((threshold) => {
        if (scrolled >= threshold && !fired.has(threshold)) {
          fired.add(threshold);
          trackEvent(`scroll_${threshold}`);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return null;
} 