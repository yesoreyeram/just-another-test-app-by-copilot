import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { AspectRatio } from './aspect-ratio'

describe('AspectRatio', () => {
  it('renders with 16/9 ratio', () => {
    const { container } = render(
      <AspectRatio ratio={16 / 9}>
        <img src="https://via.placeholder.com/800x450" alt="placeholder" />
      </AspectRatio>
    )
    expect(container.firstChild).toBeInTheDocument()
  })

  it('renders with 4/3 ratio', () => {
    const { container } = render(
      <AspectRatio ratio={4 / 3}>
        <div>Content</div>
      </AspectRatio>
    )
    expect(container.firstChild).toBeInTheDocument()
  })

  it('renders with square ratio', () => {
    const { container } = render(
      <AspectRatio ratio={1}>
        <div>Square content</div>
      </AspectRatio>
    )
    expect(container.firstChild).toBeInTheDocument()
  })
})
