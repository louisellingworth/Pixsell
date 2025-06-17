import { useEffect, useState, useRef, RefObject } from 'react';

type IntersectionObserverOptions = {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  triggerOnce?: boolean;
  skip?: boolean;
};

/**
 * Custom hook to observe when an element enters the viewport
 * Useful for implementing lazy loading of components, images, and other resources
 * 
 * @param options Intersection observer options
 * @returns [ref, isInView, entry] - Ref to attach to element, boolean if in view, and the IntersectionObserverEntry
 */
export function useIntersectionObserver<T extends Element>({
  root = null,
  rootMargin = '0px',
  threshold = 0,
  triggerOnce = false,
  skip = false,
}: IntersectionObserverOptions = {}): [RefObject<T | null>, boolean, IntersectionObserverEntry | null] {
  const [isInView, setIsInView] = useState<boolean>(false);
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const elementRef = useRef<T>(null);
  const frozen = useRef<boolean>(false);

  useEffect(() => {
    // Return early if:
    // - SSR (no window)
    // - No element ref
    // - Skip is enabled
    // - Trigger once is true and element has already been seen
    if (
      typeof window === 'undefined' || 
      !elementRef.current || 
      skip || 
      (triggerOnce && frozen.current)
    ) {
      return;
    }

    const element = elementRef.current;

    // Setup the observer with callback
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementInView = entry.isIntersecting;
        
        // Update state
        setIsInView(isElementInView);
        setEntry(entry);
        
        // If element is in view and we're using triggerOnce, 
        // freeze the state and unobserve
        if (isElementInView && triggerOnce) {
          frozen.current = true;
          observer.unobserve(element);
        }
      },
      { root, rootMargin, threshold }
    );

    // Start observing
    observer.observe(element);

    // Cleanup observer on unmount
    return () => {
      observer.unobserve(element);
    };
  }, [root, rootMargin, threshold, triggerOnce, skip]);

  return [elementRef, isInView, entry];
}

export default useIntersectionObserver; 