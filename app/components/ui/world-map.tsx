"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Coordinates {
  lat: number;
  lng: number;
}

interface Dot {
  start: Coordinates;
  end: Coordinates;
}

interface WorldMapProps {
  dots: Dot[];
}

const WorldMap: React.FC<WorldMapProps> = ({ dots }) => {
  const mapRef = useRef<HTMLDivElement>(null);

  const convertToPixelCoordinates = (lat: number, lng: number) => {
    const x = ((lng + 180) * 100) / 360;
    const y = ((90 - lat) * 100) / 180;
    return { x, y };
  };

  const drawDot = (coordinates: Coordinates) => {
    const { x, y } = convertToPixelCoordinates(coordinates.lat, coordinates.lng);
    return (
      <motion.div
        className="absolute w-1.5 h-1.5 bg-blue-500/50 rounded-full"
        style={{ left: `${x}%`, top: `${y}%` }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    );
  };

  const drawLine = (start: Coordinates, end: Coordinates) => {
    const startPos = convertToPixelCoordinates(start.lat, start.lng);
    const endPos = convertToPixelCoordinates(end.lat, end.lng);

    const dx = endPos.x - startPos.x;
    const dy = endPos.y - startPos.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const angle = Math.atan2(dy, dx) * (180 / Math.PI);

    return (
      <motion.div
        className="absolute h-px bg-gradient-to-r from-blue-500/20 to-transparent"
        style={{
          left: `${startPos.x}%`,
          top: `${startPos.y}%`,
          width: `${distance}%`,
          transformOrigin: "left center",
          transform: `rotate(${angle}deg)`,
        }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 2 }}
      />
    );
  };

  return (
    <div className="relative w-full h-full bg-transparent">
      {/* World map background */}
      <div className="absolute inset-0 opacity-10">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 800 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            d="M0 0H800V400H0V0Z"
            fill="url(#paint0_radial_0_1)"
          />
          <defs>
            <radialGradient
              id="paint0_radial_0_1"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(400 200) rotate(90) scale(200 400)"
            >
              <stop stopColor="#4F46E5" />
              <stop offset="1" stopColor="#000000" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Dots and lines */}
      <div ref={mapRef} className="absolute inset-0">
        {dots.map((dot, index) => (
          <React.Fragment key={index}>
            {drawLine(dot.start, dot.end)}
            {drawDot(dot.start)}
            {drawDot(dot.end)}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default WorldMap; 