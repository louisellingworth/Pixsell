import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Navigation from '@/components/Navigation'

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

jest.mock('next/image', () => {
  return ({ src, alt, ...rest }: any) =>
    React.createElement('img', { src, alt, ...rest })
})

jest.mock('@/hooks/useProgressiveEnhancement', () => ({
  useReducedMotion: () => false,
}))

jest.mock('@/components/ui/GradientButton', () => {
  return ({ children, href, ...rest }: any) =>
    React.createElement('a', { href, ...rest }, children)
})

describe('Navigation', () => {
  it('renders without crashing', () => {
    render(<Navigation />)
  })

  it('renders the EightSix Games logo link pointing to /', () => {
    render(<Navigation />)
    const logoLink = screen.getByRole('link', { name: /eightsix games/i })
    expect(logoLink).toHaveAttribute('href', '/')
  })

  it('renders key nav items', () => {
    render(<Navigation />)
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /blog/i })).toBeInTheDocument()
  })

  it('opens the mobile menu when the hamburger button is clicked', () => {
    render(<Navigation />)
    const menuButton = screen.getByRole('button', { name: /open menu|toggle menu|menu/i })
    fireEvent.click(menuButton)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })
})
