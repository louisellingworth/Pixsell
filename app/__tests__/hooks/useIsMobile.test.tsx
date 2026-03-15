import { renderHook, act } from '@testing-library/react'
import useIsMobile from '@/hooks/useIsMobile'

function setWindowWidth(width: number) {
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: width,
  })
}

describe('useIsMobile', () => {
  afterEach(() => {
    setWindowWidth(1024)
  })

  it('returns false at desktop width (1024px)', () => {
    setWindowWidth(1024)
    const { result } = renderHook(() => useIsMobile())
    expect(result.current).toBe(false)
  })

  it('returns true at mobile width (375px)', () => {
    setWindowWidth(375)
    const { result } = renderHook(() => useIsMobile())
    expect(result.current).toBe(true)
  })

  it('updates when the window is resized to mobile width', () => {
    setWindowWidth(1024)
    const { result } = renderHook(() => useIsMobile())
    expect(result.current).toBe(false)

    act(() => {
      setWindowWidth(375)
      window.dispatchEvent(new Event('resize'))
    })

    expect(result.current).toBe(true)
  })
})
