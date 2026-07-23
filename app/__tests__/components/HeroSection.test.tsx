import React from 'react'
import { render, screen } from '@testing-library/react'
import HeroSection from '@/components/market/HeroSection'

jest.mock('framer-motion', () => ({
  motion: new Proxy(
    {},
    {
      get: (_target, prop) => {
        const tag = String(prop)
        return React.forwardRef(({ children, ...rest }: any, ref: any) =>
          React.createElement(tag, { ...rest, ref }, children)
        )
      },
    }
  ),
  useReducedMotion: () => false,
  AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
}))

jest.mock('next/link', () => {
  return ({ href, children, ...rest }: any) =>
    React.createElement('a', { href, ...rest }, children)
})

describe('HeroSection', () => {
  it('renders without crashing', () => {
    render(<HeroSection />)
  })

  it('contains the headline text "Launch Your Game"', () => {
    render(<HeroSection />)
    // The headline is animated word-by-word, so each word is its own element
    expect(screen.getByText('Launch')).toBeInTheDocument()
    expect(screen.getByText('Game')).toBeInTheDocument()
  })

  it('renders a contact link with /contact href', () => {
    render(<HeroSection />)
    // Find the consultation CTA anchor by its text content
    const contactLinks = document
      .querySelectorAll('a[href="/contact"]')
    expect(contactLinks.length).toBeGreaterThan(0)
  })

  it('renders the Steam logo image', () => {
    render(<HeroSection />)
    const img = screen.getByAltText('Steam Platform Logo')
    expect(img).toBeInTheDocument()
  })
})
