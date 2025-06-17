import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * A utility function that combines clsx and tailwind-merge
 * for handling conditional class names in components
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
} 