import { renderHook, act } from '@testing-library/react'
import { useReducedMotion } from '@/hooks/useProgressiveEnhancement'

function mockMatchMedia(matches: boolean) {
  const listeners: ((e: MediaQueryListEvent) => void)[] = []
  const mq: MediaQueryList = {
    matches,
    media: '(prefers-reduced-motion: reduce)',
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: (_: string, handler: EventListenerOrEventListenerObject) => {
      listeners.push(handler as (e: MediaQueryListEvent) => void)
    },
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  }
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockReturnValue(mq),
  })
  return { mq, listeners }
}

describe('useReducedMotion', () => {
  it('returns false when prefers-reduced-motion is not set', () => {
    mockMatchMedia(false)
    const { result } = renderHook(() => useReducedMotion())
    expect(result.current).toBe(false)
  })

  it('returns true when prefers-reduced-motion is set', () => {
    mockMatchMedia(true)
    const { result } = renderHook(() => useReducedMotion())
    expect(result.current).toBe(true)
  })

  it('updates when the media query changes', () => {
    const { listeners } = mockMatchMedia(false)
    const { result } = renderHook(() => useReducedMotion())
    expect(result.current).toBe(false)

    act(() => {
      listeners.forEach(l => l({ matches: true } as MediaQueryListEvent))
    })
    expect(result.current).toBe(true)
  })
})
