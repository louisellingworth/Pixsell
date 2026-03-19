import { render, act } from '@testing-library/react'
import React, { useRef } from 'react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

type ObserverCallback = (entries: Partial<IntersectionObserverEntry>[]) => void

let observerCallback: ObserverCallback | null = null
const observeMock = jest.fn()
const unobserveMock = jest.fn()

beforeEach(() => {
  observerCallback = null
  observeMock.mockClear()
  unobserveMock.mockClear()

  global.IntersectionObserver = jest.fn((cb: ObserverCallback) => {
    observerCallback = cb
    return {
      observe: observeMock,
      unobserve: unobserveMock,
      disconnect: jest.fn(),
    }
  }) as any
})

// Helper component that wires up the hook to a real DOM node
function TestComponent({
  onView,
  triggerOnce = false,
}: {
  onView: (v: boolean) => void
  triggerOnce?: boolean
}) {
  const [ref, isInView] = useIntersectionObserver<HTMLDivElement>({ triggerOnce })
  React.useEffect(() => { onView(isInView) })
  return <div ref={ref as React.RefObject<HTMLDivElement>} data-testid="target" />
}

describe('useIntersectionObserver', () => {
  it('starts with isInView as false', () => {
    const onView = jest.fn()
    render(<TestComponent onView={onView} />)
    expect(onView).toHaveBeenCalledWith(false)
  })

  it('sets isInView to true when intersection fires', () => {
    const onView = jest.fn()
    render(<TestComponent onView={onView} />)

    act(() => {
      observerCallback?.([{ isIntersecting: true } as IntersectionObserverEntry])
    })

    expect(onView).toHaveBeenLastCalledWith(true)
  })

  it('calls unobserve after first intersection when triggerOnce is true', () => {
    const onView = jest.fn()
    render(<TestComponent onView={onView} triggerOnce />)

    act(() => {
      observerCallback?.([{ isIntersecting: true } as IntersectionObserverEntry])
    })

    expect(unobserveMock).toHaveBeenCalled()
  })
})
