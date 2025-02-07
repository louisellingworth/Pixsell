'use client'

import { LayoutGroup, motion } from 'framer-motion'
import TextRotate from './ui/TextRotate'

export default function RotatingText() {
  return (
    <div className="w-full h-full text-lg sm:text-xl md:text-2xl lg:text-3xl flex flex-row items-center justify-center font-light overflow-hidden p-2 sm:p-4 md:p-6">
      <LayoutGroup>
        <motion.div className="flex whitespace-pre" layout>
          <motion.span
            className="pt-0.5 sm:pt-1"
            layout
            transition={{ type: "spring", damping: 20, stiffness: 200 }}
          >
            To{" "}
          </motion.span>
          <TextRotate
            texts={[
              "create something meaningful",
              "have true freedom",
              "grow without limits",
            ]}
            mainClassName="text-white px-1.5 sm:px-2 md:px-3 bg-gradient-to-r from-[#8A7FFB] to-[#B4B0FF] overflow-hidden py-0.5 sm:py-1 justify-center rounded-lg"
            staggerFrom="last"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.05}
            splitLevelClassName="overflow-hidden pb-0.5"
            transition={{ type: "spring", damping: 20, stiffness: 200 }}
            rotationInterval={3000}
          />
        </motion.div>
      </LayoutGroup>
    </div>
  )
}