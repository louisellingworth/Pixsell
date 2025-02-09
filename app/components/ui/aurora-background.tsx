"use client";

import { cn } from "@/app/lib/utils";
import React from "react";

export const AuroraBackground = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("relative min-h-screen w-full bg-zinc-950", className)}>
      {/* Background container */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Aurora container */}
        <div className="absolute h-[200%] w-[200%] -top-[50%] -left-[50%]">
          {/* Top-left aurora */}
          <div 
            className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-br from-violet-600/50 via-purple-600/50 to-blue-600/50 blur-[120px] animate-aurora"
            style={{ willChange: 'transform' }}
          />
          
          {/* Bottom-right aurora */}
          <div 
            className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-br from-blue-600/50 via-cyan-600/50 to-teal-600/50 blur-[120px] animate-aurora-reverse"
            style={{ willChange: 'transform' }}
          />
        </div>

        {/* Additional aurora layers for more depth */}
        <div className="absolute inset-0">
          <div 
            className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-gradient-to-tr from-pink-500/30 via-purple-500/30 to-indigo-500/30 blur-[100px] animate-aurora"
            style={{ willChange: 'transform', animationDelay: '-3s' }}
          />
          <div 
            className="absolute bottom-1/4 right-1/4 w-1/2 h-1/2 bg-gradient-to-bl from-blue-500/30 via-teal-500/30 to-emerald-500/30 blur-[100px] animate-aurora-reverse"
            style={{ willChange: 'transform', animationDelay: '-2s' }}
          />
        </div>

        {/* Noise texture overlay */}
        <div 
          className="absolute inset-0 bg-repeat opacity-[0.02] mix-blend-soft-light pointer-events-none select-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px'
          }}
        />
      </div>

      {children}
    </div>
  );
}; 