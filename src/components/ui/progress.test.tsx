import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Progress } from './progress'

describe('Progress', () => {
  it('renders progress bar', () => {
    const { container } = render(<Progress value={50} />)
    const progressBar = container.querySelector('[style*="width: 50%"]')
    expect(progressBar).toBeInTheDocument()
  })

  it('shows percentage when showPercentage is true', () => {
    render(<Progress value={75} showPercentage={true} />)
    expect(screen.getByText('75%')).toBeInTheDocument()
  })

  it('shows label when provided', () => {
    render(<Progress value={50} label="Loading files..." />)
    expect(screen.getByText('Loading files...')).toBeInTheDocument()
  })

  it('shows both label and percentage', () => {
    render(<Progress value={60} label="Uploading" showPercentage={true} />)
    expect(screen.getByText('Uploading')).toBeInTheDocument()
    expect(screen.getByText('60%')).toBeInTheDocument()
  })

  it('clamps value to 0-100 range', () => {
    const { container: over } = render(<Progress value={150} />)
    const overBar = over.querySelector('[style*="width: 100%"]')
    expect(overBar).toBeInTheDocument()

    const { container: under } = render(<Progress value={-50} />)
    const underBar = under.querySelector('[style*="width: 0%"]')
    expect(underBar).toBeInTheDocument()
  })

  it('applies different variants', () => {
    const { container: success } = render(<Progress value={50} variant="success" />)
    expect(success.querySelector('.bg-green-500')).toBeInTheDocument()

    const { container: warning } = render(<Progress value={50} variant="warning" />)
    expect(warning.querySelector('.bg-yellow-500')).toBeInTheDocument()

    const { container: destructive } = render(<Progress value={50} variant="destructive" />)
    expect(destructive.querySelector('.bg-destructive')).toBeInTheDocument()
  })
})
