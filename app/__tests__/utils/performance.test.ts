import { debounce, throttle, isLowPerformanceDevice, executeInChunks } from '@/utils/performance'

describe('debounce', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  it('does not call fn immediately', () => {
    const fn = jest.fn()
    const debounced = debounce(fn, 100)
    debounced()
    expect(fn).not.toHaveBeenCalled()
  })

  it('calls fn after the delay has elapsed', () => {
    const fn = jest.fn()
    const debounced = debounce(fn, 100)
    debounced()
    jest.advanceTimersByTime(100)
    expect(fn).toHaveBeenCalledTimes(1)
  })

  it('resets the timer on repeated calls', () => {
    const fn = jest.fn()
    const debounced = debounce(fn, 100)
    debounced()
    jest.advanceTimersByTime(50)
    debounced()
    jest.advanceTimersByTime(50)
    expect(fn).not.toHaveBeenCalled()
    jest.advanceTimersByTime(50)
    expect(fn).toHaveBeenCalledTimes(1)
  })
})

describe('throttle', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  it('calls fn on the first invocation', () => {
    const fn = jest.fn()
    const throttled = throttle(fn, 100)
    throttled()
    expect(fn).toHaveBeenCalledTimes(1)
  })

  it('ignores calls within the limit window', () => {
    const fn = jest.fn()
    const throttled = throttle(fn, 100)
    throttled()
    throttled()
    throttled()
    expect(fn).toHaveBeenCalledTimes(1)
  })

  it('allows a second call after the limit has passed', () => {
    const fn = jest.fn()
    const throttled = throttle(fn, 100)
    throttled()
    jest.advanceTimersByTime(100)
    throttled()
    expect(fn).toHaveBeenCalledTimes(2)
  })
})

describe('isLowPerformanceDevice', () => {
  it('returns a boolean', () => {
    expect(typeof isLowPerformanceDevice()).toBe('boolean')
  })

  it('does not throw when called', () => {
    expect(() => isLowPerformanceDevice()).not.toThrow()
  })
})

describe('executeInChunks', () => {
  it('processes all items and returns results', async () => {
    const items = [1, 2, 3, 4, 5]
    const results = await executeInChunks(items, x => x * 2)
    expect(results).toEqual([2, 4, 6, 8, 10])
  })

  it('handles an empty array', async () => {
    const results = await executeInChunks([], (x: number) => x)
    expect(results).toEqual([])
  })
})
