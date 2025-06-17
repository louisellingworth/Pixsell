'use client'

import React from 'react'

export const SVGs = () => {
  return (
    <div className="relative w-[600px] h-[600px]">
      {/* Pulse Beam 1 (Innermost) */}
      <svg
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        width="600"
        height="600"
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.2">
          <circle
            cx="300"
            cy="300"
            r="200"
            stroke="url(#paint0_linear)"
            strokeWidth="4"
            className="animate-pulse"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="300"
            y1="100"
            x2="300"
            y2="500"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6366F1" />
            <stop offset="1" stopColor="#818CF8" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>

      {/* Pulse Beam 2 */}
      <svg
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        width="600"
        height="600"
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.5">
          <circle
            cx="300"
            cy="300"
            r="250"
            stroke="url(#paint1_linear)"
            strokeWidth="6"
            className="animate-pulse [animation-delay:1000ms]"
          />
        </g>
        <defs>
          <linearGradient
            id="paint1_linear"
            x1="300"
            y1="50"
            x2="300"
            y2="550"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#818CF8" />
            <stop offset="1" stopColor="#A5B4FC" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>

      {/* Pulse Beam 3 */}
      <svg
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        width="600"
        height="600"
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.4">
          <circle
            cx="300"
            cy="300"
            r="300"
            stroke="url(#paint2_linear)"
            strokeWidth="6"
            className="animate-pulse [animation-delay:2000ms]"
          />
        </g>
        <defs>
          <linearGradient
            id="paint2_linear"
            x1="300"
            y1="0"
            x2="300"
            y2="600"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#A5B4FC" />
            <stop offset="1" stopColor="#C7D2FE" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>

      {/* Pulse Beam 4 (Outermost) */}
      <svg
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        width="600"
        height="600"
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.3">
          <circle
            cx="300"
            cy="300"
            r="350"
            stroke="url(#paint3_linear)"
            strokeWidth="4"
            className="animate-pulse [animation-delay:3000ms]"
          />
        </g>
        <defs>
          <linearGradient
            id="paint3_linear"
            x1="300"
            y1="0"
            x2="300"
            y2="600"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C7D2FE" />
            <stop offset="1" stopColor="#E0E7FF" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
} 