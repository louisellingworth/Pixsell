import React from 'react';
import Link from 'next/link';
import { CalendarIcon } from '@heroicons/react/24/outline';

export default function FloatingConsultButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link
        href="/contact"
        className="group flex items-center gap-2 px-6 py-3 bg-black border-2 border-blue-500/20 
                 rounded-xl text-white font-medium shadow-lg 
                 hover:border-blue-500/40 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]
                 transition-all duration-300 ease-out backdrop-blur-sm"
      >
        <CalendarIcon className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
        <span className="group-hover:text-blue-400 transition-colors duration-300">
          Book a Consultation
        </span>

        {/* Glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 
                      group-hover:opacity-20 blur-lg rounded-xl transition-opacity duration-300" />
      </Link>
    </div>
  );
} 