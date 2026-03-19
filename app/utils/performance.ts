/**
 * Utility functions for performance optimization
 */

/**
 * Returns a debounced version of fn that delays invoking it until after
 * `delay` ms have elapsed since the last call.
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout>
  return (...args: Parameters<T>) => {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), delay)
  }
}

/**
 * Returns a throttled version of fn that invokes it at most once per
 * `limit` ms window.
 */
export function throttle<T extends (...args: unknown[]) => unknown>(
  fn: T,
  limit: number
): (...args: Parameters<T>) => void {
  let lastCall = 0
  return (...args: Parameters<T>) => {
    const now = Date.now()
    if (now - lastCall >= limit) {
      lastCall = now
      fn(...args)
    }
  }
}

/**
 * Check if a device is likely to be low-performance
 */
export const isLowPerformanceDevice = (): boolean => {
  if (typeof window === 'undefined') return false;

  return (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
    window.devicePixelRatio < 1.5 ||
    (navigator.hardwareConcurrency !== undefined && navigator.hardwareConcurrency < 4)
  );
};

/**
 * Request animation frame with timeout fallback
 */
export const rafWithTimeout = (callback: FrameRequestCallback, timeout = 100): number => {
  const rafId = requestAnimationFrame(callback);
  const timeoutId = setTimeout(() => callback(performance.now()), timeout);

  return rafId;
};

/**
 * Cancel animation frame with timeout
 */
export const cancelRafWithTimeout = (rafId: number, timeoutId: number): void => {
  cancelAnimationFrame(rafId);
  clearTimeout(timeoutId);
};

/**
 * Safe requestIdleCallback with fallback
 */
export const safeRequestIdleCallback = (
  callback: (deadline: { didTimeout: boolean; timeRemaining: () => number }) => void,
  options?: { timeout?: number }
): number | NodeJS.Timeout => {
  if (typeof window === 'undefined') return 0;

  if ('requestIdleCallback' in window) {
    return (window as any).requestIdleCallback(callback, options);
  }

  // Fallback for browsers that don't support requestIdleCallback
  return setTimeout(() => callback({
    didTimeout: false,
    timeRemaining: () => 50
  }), options?.timeout || 1);
};

/**
 * Safe cancelIdleCallback with fallback
 */
export const safeCancelIdleCallback = (id: number): void => {
  if (typeof window === 'undefined') return;

  if ('cancelIdleCallback' in window) {
    (window as any).cancelIdleCallback(id);
  } else {
    clearTimeout(id);
  }
};

/**
 * Execute a task in chunks to avoid blocking the main thread
 */
export const executeInChunks = <T, R>(
  items: T[],
  processor: (item: T) => R,
  chunkSize = 5,
  delayBetweenChunks = 10
): Promise<R[]> => {
  return new Promise((resolve) => {
    const results: R[] = [];
    let index = 0;

    const processNextChunk = () => {
      const limit = Math.min(index + chunkSize, items.length);

      for (let i = index; i < limit; i++) {
        results.push(processor(items[i]));
      }

      index = limit;

      if (index < items.length) {
        setTimeout(processNextChunk, delayBetweenChunks);
      } else {
        resolve(results);
      }
    };

    processNextChunk();
  });
};
