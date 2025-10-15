import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SectionDivider } from './section-divider'

describe('SectionDivider', () => {
  it('renders divider without text', () => {
    const { container } = render(<SectionDivider />)
    expect(container.querySelector('[data-orientation="horizontal"]')).toBeInTheDocument()
  })

  it('renders divider with text', () => {
    render(<SectionDivider text="OR" />)
    expect(screen.getByText('OR')).toBeInTheDocument()
  })

  it('renders vertical divider with text', () => {
    render(<SectionDivider text="OR" orientation="vertical" />)
    expect(screen.getByText('OR')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(<SectionDivider className="custom-class" />)
    expect(container.querySelector('.custom-class')).toBeInTheDocument()
  })
})
