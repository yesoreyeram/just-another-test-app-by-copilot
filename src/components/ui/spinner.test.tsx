import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Spinner } from './spinner'

describe('Spinner', () => {
  it('renders spinner', () => {
    const { container } = render(<Spinner />)
    expect(container.querySelector('.animate-spin')).toBeInTheDocument()
  })

  it('renders with different sizes', () => {
    const { container: small } = render(<Spinner size="sm" />)
    expect(small.querySelector('.h-4')).toBeInTheDocument()

    const { container: large } = render(<Spinner size="lg" />)
    expect(large.querySelector('.h-8')).toBeInTheDocument()
  })

  it('renders with label when showLabel is true', () => {
    render(<Spinner label="Loading..." showLabel={true} />)
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  it('does not render label when showLabel is false', () => {
    render(<Spinner label="Loading..." showLabel={false} />)
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(<Spinner className="custom-class" />)
    expect(container.firstChild).toHaveClass('custom-class')
  })
})
