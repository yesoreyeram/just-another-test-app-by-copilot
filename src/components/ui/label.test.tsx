import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Label } from './label'

describe('Label', () => {
  it('renders label with text', () => {
    render(<Label>Test Label</Label>)
    
    expect(screen.getByText('Test Label')).toBeInTheDocument()
  })

  it('renders label with htmlFor attribute', () => {
    render(<Label htmlFor="test-input">Email</Label>)
    
    const label = screen.getByText('Email')
    expect(label).toBeInTheDocument()
    expect(label).toHaveAttribute('for', 'test-input')
  })

  it('applies custom className', () => {
    render(<Label className="custom-class">Custom Label</Label>)
    
    const label = screen.getByText('Custom Label')
    expect(label).toHaveClass('custom-class')
  })

  it('renders label without tooltip when tooltip prop is not provided', () => {
    render(<Label>Simple Label</Label>)
    
    expect(screen.getByText('Simple Label')).toBeInTheDocument()
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
  })

  it('renders label with tooltip when tooltip prop is provided', async () => {
    const user = userEvent.setup()
    render(
      <Label tooltip="This is helpful information">
        Label with Tooltip
      </Label>
    )
    
    const label = screen.getByText('Label with Tooltip')
    expect(label).toBeInTheDocument()
    
    // Hover over the label to show tooltip
    await user.hover(label)
    
    // Wait for tooltip to appear - Radix duplicates content for accessibility
    const tooltips = await screen.findAllByText('This is helpful information')
    expect(tooltips.length).toBeGreaterThan(0)
  })

  it('renders label with rich tooltip content', async () => {
    const user = userEvent.setup()
    const tooltipContent = (
      <div>
        <strong>Bold text</strong>
        <p>Additional info</p>
      </div>
    )
    
    render(
      <Label tooltip={tooltipContent}>
        Rich Tooltip Label
      </Label>
    )
    
    const label = screen.getByText('Rich Tooltip Label')
    await user.hover(label)
    
    const boldTexts = await screen.findAllByText('Bold text')
    expect(boldTexts.length).toBeGreaterThan(0)
    const additionalInfos = screen.getAllByText('Additional info')
    expect(additionalInfos.length).toBeGreaterThan(0)
  })

  it('maintains label functionality with tooltip', async () => {
    const user = userEvent.setup()
    render(
      <div>
        <Label htmlFor="username" tooltip="Enter your username">
          Username
        </Label>
        <input id="username" />
      </div>
    )
    
    const label = screen.getByText('Username')
    expect(label).toHaveAttribute('for', 'username')
    
    // Verify tooltip works
    await user.hover(label)
    const tooltips = await screen.findAllByText('Enter your username')
    expect(tooltips.length).toBeGreaterThan(0)
  })

  it('applies default styles', () => {
    render(<Label>Styled Label</Label>)
    
    const label = screen.getByText('Styled Label')
    expect(label).toHaveClass('text-sm')
    expect(label).toHaveClass('font-medium')
    expect(label).toHaveClass('leading-none')
  })
})
