import React from 'react'
import { render, screen } from '@testing-library/react'
import OptimizedImage from '@/components/OptimizedImage'

jest.mock('next/image', () => {
  return ({ src, alt, className, onError, ...rest }: any) =>
    React.createElement('img', { src, alt, className, onError, ...rest })
})

describe('OptimizedImage', () => {
  it('renders an img element with the correct alt text', () => {
    render(<OptimizedImage src="/test.png" alt="test image" width={100} height={100} />)
    expect(screen.getByAltText('test image')).toBeInTheDocument()
  })

  it('applies the className prop', () => {
    render(
      <OptimizedImage
        src="/test.png"
        alt="test image"
        width={100}
        height={100}
        className="custom-class"
      />
    )
    // The className ends up on the img via cn merging
    const img = screen.getByAltText('test image')
    expect(img.className).toContain('custom-class')
  })

  it('renders without crashing when src is an external URL', () => {
    render(
      <OptimizedImage
        src="https://images.unsplash.com/test.jpg"
        alt="external image"
        width={200}
        height={200}
      />
    )
    expect(screen.getByAltText('external image')).toBeInTheDocument()
  })
})
