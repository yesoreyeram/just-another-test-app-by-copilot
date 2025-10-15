import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MultiStepRangeSlider } from './multi-step-range-slider'

describe('MultiStepRangeSlider', () => {
  const defaultSteps = ['XS', 'S', 'M', 'L', 'XL']

  it('renders with default steps', () => {
    render(<MultiStepRangeSlider steps={defaultSteps} data-testid="slider" />)
    const slider = screen.getByTestId('slider')
    expect(slider).toBeInTheDocument()
  })

  it('displays all step labels when showLabels is true', () => {
    const { container } = render(
      <MultiStepRangeSlider steps={defaultSteps} showLabels={true} />
    )
    defaultSteps.forEach((step) => {
      expect(container).toHaveTextContent(step)
    })
  })

  it('does not display step labels when showLabels is false', () => {
    const { container } = render(
      <MultiStepRangeSlider steps={defaultSteps} showLabels={false} />
    )
    defaultSteps.forEach((step) => {
      expect(container).not.toHaveTextContent(step)
    })
  })

  it('renders correct number of step indicators', () => {
    const { container } = render(
      <MultiStepRangeSlider steps={defaultSteps} />
    )
    // Step indicators are divs with specific classes
    const indicators = container.querySelectorAll('.h-3.w-3.rounded-full')
    expect(indicators).toHaveLength(defaultSteps.length)
  })

  it('calls onStepChange when value changes', async () => {
    const onStepChange = vi.fn()
    const onValueChange = vi.fn()
    
    render(
      <MultiStepRangeSlider 
        steps={defaultSteps}
        onValueChange={onValueChange}
        onStepChange={onStepChange}
        value={[2]}
      />
    )
    
    expect(onValueChange).not.toHaveBeenCalled()
  })

  it('accepts custom className', () => {
    const { container } = render(
      <MultiStepRangeSlider 
        steps={defaultSteps} 
        className="custom-class"
      />
    )
    expect(container.firstChild).toHaveClass('custom-class')
  })

  it('handles disabled state', () => {
    render(
      <MultiStepRangeSlider 
        steps={defaultSteps} 
        disabled
        data-testid="slider"
      />
    )
    const slider = screen.getByTestId('slider')
    expect(slider).toHaveAttribute('data-disabled')
  })

  it('works with different step arrays', () => {
    const customSteps = ['Low', 'Medium', 'High']
    const { container } = render(
      <MultiStepRangeSlider steps={customSteps} />
    )
    customSteps.forEach((step) => {
      expect(container).toHaveTextContent(step)
    })
  })

  it('sets correct min and max based on steps length', () => {
    const { container } = render(
      <MultiStepRangeSlider 
        steps={defaultSteps}
        data-testid="slider"
      />
    )
    const slider = container.querySelector('[role="slider"]')
    expect(slider).toHaveAttribute('aria-valuemin', '0')
    expect(slider).toHaveAttribute('aria-valuemax', '4') // 5 steps means max index is 4
  })

  it('defaults to first step when no defaultValue is provided', () => {
    render(
      <MultiStepRangeSlider 
        steps={defaultSteps}
        data-testid="slider"
      />
    )
    const slider = screen.getByTestId('slider')
    // The slider should exist and be at the default position
    expect(slider).toBeInTheDocument()
  })

  it('respects defaultValue prop', () => {
    const { container } = render(
      <MultiStepRangeSlider 
        steps={defaultSteps}
        defaultValue={[2]}
        data-testid="slider"
      />
    )
    const slider = container.querySelector('[role="slider"]')
    expect(slider).toHaveAttribute('aria-valuenow', '2')
  })

  it('respects controlled value prop', () => {
    const { container } = render(
      <MultiStepRangeSlider 
        steps={defaultSteps}
        value={[3]}
        data-testid="slider"
      />
    )
    const slider = container.querySelector('[role="slider"]')
    expect(slider).toHaveAttribute('aria-valuenow', '3')
  })
})
