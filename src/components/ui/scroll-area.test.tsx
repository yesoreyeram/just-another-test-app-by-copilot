import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ScrollArea } from './scroll-area'

describe('ScrollArea', () => {
  it('renders children correctly', () => {
    render(
      <ScrollArea>
        <div>Scrollable content</div>
      </ScrollArea>
    )
    expect(screen.getByText('Scrollable content')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(
      <ScrollArea className="custom-class">
        <div>Content</div>
      </ScrollArea>
    )
    expect(container.querySelector('.custom-class')).toBeInTheDocument()
  })

  it('renders with scrollbar', () => {
    const { container } = render(
      <ScrollArea>
        <div style={{ height: '200px' }}>Tall content</div>
      </ScrollArea>
    )
    // ScrollArea should have the overflow-hidden class
    expect(container.querySelector('.overflow-hidden')).toBeInTheDocument()
  })
})
