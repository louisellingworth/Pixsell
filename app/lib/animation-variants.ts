import type { Variants } from 'framer-motion'

export const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
  hover: {
    scale: 1.02,
  },
}

export const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
}

export const tableRowVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -8,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 20,
    },
  },
}

export const timelineVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.2,
      duration: 0.8,
    },
  }),
}

export const timelineContentVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
}

export const timelineLineVariants: Variants = {
  hidden: {
    scaleY: 0,
    opacity: 0,
  },
  visible: {
    scaleY: 1,
    opacity: 1,
    transition: {
      duration: 1.2,
    },
  },
}

export const timelineDotVariants: Variants = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
  },
}

export const finalCTAVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
}

/** Shared section wrapper class — full-height section with vertical padding */
export const sectionClasses =
  'relative min-h-[80vh] flex items-center justify-center py-12 lg:py-20 overflow-hidden'

/** Shared container class — centred, max-width, responsive horizontal padding */
export const containerClasses =
  'container mx-auto px-6 sm:px-8 lg:px-12 max-w-[1400px] w-full'

/** Shared spacing tokens for desktop and mobile layouts */
export const spacing = {
  desktop: {
    section: 'py-16 lg:py-24',
    content: 'space-y-10 lg:space-y-16',
    grid: 'gap-6 lg:gap-8',
  },
  mobile: {
    section: 'py-12',
    content: 'space-y-8',
    grid: 'gap-5',
  },
}
