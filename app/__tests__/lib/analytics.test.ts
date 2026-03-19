import { trackEvent, trackPageView, trackButtonClick, trackFormSubmission, trackError, trackEngagement } from '@/lib/analytics'

// Mock fetch globally
const mockFetch = jest.fn()
global.fetch = mockFetch

beforeEach(() => {
  mockFetch.mockClear()
  mockFetch.mockResolvedValue({ ok: true, json: async () => ({ success: true }) })
  jest.useFakeTimers()
})

afterEach(() => {
  jest.useRealTimers()
})

describe('trackEvent', () => {
  it('calls console.log with event name and properties', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {})
    trackEvent('test_event', { foo: 'bar' })
    expect(consoleSpy).toHaveBeenCalledWith('Event tracked:', 'test_event', { foo: 'bar' })
    consoleSpy.mockRestore()
  })

  it('does not throw when called without properties', () => {
    expect(() => trackEvent('test_event')).not.toThrow()
  })
})

describe('trackPageView', () => {
  it('calls trackEvent with page_view and the url', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {})
    trackPageView('/test-page')
    expect(consoleSpy).toHaveBeenCalledWith('Event tracked:', 'page_view', { page_url: '/test-page' })
    consoleSpy.mockRestore()
  })
})

describe('trackButtonClick', () => {
  it('passes button_name and location to trackEvent', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {})
    trackButtonClick('cta', 'hero')
    expect(consoleSpy).toHaveBeenCalledWith('Event tracked:', 'button_click', {
      button_name: 'cta',
      location: 'hero',
    })
    consoleSpy.mockRestore()
  })
})

describe('trackFormSubmission', () => {
  it('passes form_name to trackEvent', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {})
    trackFormSubmission('contact')
    expect(consoleSpy).toHaveBeenCalledWith('Event tracked:', 'form_submission', {
      form_name: 'contact',
    })
    consoleSpy.mockRestore()
  })
})

describe('trackError', () => {
  it('includes error message in the event payload', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {})
    const err = new Error('something went wrong')
    trackError(err)
    expect(consoleSpy).toHaveBeenCalledWith(
      'Event tracked:',
      'error',
      expect.objectContaining({ message: 'something went wrong' })
    )
    consoleSpy.mockRestore()
  })
})

describe('trackEngagement', () => {
  it('passes action and value to trackEvent', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {})
    trackEngagement('scroll', 50)
    expect(consoleSpy).toHaveBeenCalledWith('Event tracked:', 'engagement', {
      action: 'scroll',
      value: 50,
    })
    consoleSpy.mockRestore()
  })
})
