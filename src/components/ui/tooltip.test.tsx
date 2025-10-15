import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from './tooltip'

describe('Tooltip', () => {
  it('renders tooltip trigger', () => {
    render(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Hover me</TooltipTrigger>
          <TooltipContent>Tooltip content</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
    
    expect(screen.getByText('Hover me')).toBeInTheDocument()
  })

  it('shows tooltip content on hover', async () => {
    const user = userEvent.setup()
    render(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Hover me</TooltipTrigger>
          <TooltipContent data-testid="tooltip-content">Tooltip content</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
    
    const trigger = screen.getByText('Hover me')
    await user.hover(trigger)
    
    // Wait for tooltip to appear
    const tooltip = await screen.findByTestId('tooltip-content')
    expect(tooltip).toBeInTheDocument()
    expect(tooltip).toHaveTextContent('Tooltip content')
  })

  it('applies custom className to tooltip content', async () => {
    const user = userEvent.setup()
    render(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Hover me</TooltipTrigger>
          <TooltipContent className="custom-class" data-testid="tooltip-content">
            Tooltip content
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
    
    const trigger = screen.getByText('Hover me')
    await user.hover(trigger)
    
    const tooltip = await screen.findByTestId('tooltip-content')
    expect(tooltip).toHaveClass('custom-class')
  })

  it('renders tooltip with default styles', async () => {
    const user = userEvent.setup()
    render(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Hover me</TooltipTrigger>
          <TooltipContent data-testid="tooltip-content">
            Tooltip content
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
    
    const trigger = screen.getByText('Hover me')
    await user.hover(trigger)
    
    const tooltip = await screen.findByTestId('tooltip-content')
    expect(tooltip).toHaveClass('bg-popover')
    expect(tooltip).toHaveClass('text-popover-foreground')
    expect(tooltip).toHaveClass('rounded-md')
  })

  it('renders multiple tooltip triggers', () => {
    render(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger data-testid="first-trigger">First trigger</TooltipTrigger>
          <TooltipContent>First tooltip</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger data-testid="second-trigger">Second trigger</TooltipTrigger>
          <TooltipContent>Second tooltip</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
    
    expect(screen.getByTestId('first-trigger')).toBeInTheDocument()
    expect(screen.getByTestId('second-trigger')).toBeInTheDocument()
  })

  it('renders tooltip with custom side offset', async () => {
    const user = userEvent.setup()
    render(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Hover me</TooltipTrigger>
          <TooltipContent sideOffset={10} data-testid="tooltip-content">
            Tooltip content
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
    
    const trigger = screen.getByText('Hover me')
    await user.hover(trigger)
    
    const tooltip = await screen.findByTestId('tooltip-content')
    expect(tooltip).toBeInTheDocument()
  })
})
