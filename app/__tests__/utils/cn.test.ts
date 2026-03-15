import { cn } from '@/utils/cn'

describe('cn utility', () => {
  it('combines class names', () => {
    expect(cn('a', 'b')).toBe('a b')
  })

  it('handles conditional classes', () => {
    expect(cn('a', { b: true, c: false })).toBe('a b')
  })

  it('deduplicates conflicting Tailwind classes', () => {
    const result = cn('p-4', 'p-8')
    expect(result).toBe('p-8')
  })

  it('handles falsy values gracefully', () => {
    expect(cn('a', undefined, null, false, 'b')).toBe('a b')
  })

  it('returns empty string for no arguments', () => {
    expect(cn()).toBe('')
  })
})
