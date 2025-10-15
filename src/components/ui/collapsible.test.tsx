import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from './collapsible'
import { Button } from './button'

describe('Collapsible', () => {
  it('renders collapsible with trigger and content', () => {
    render(
      <Collapsible>
        <CollapsibleTrigger asChild>
          <Button>Toggle</Button>
        </CollapsibleTrigger>
        <CollapsibleContent>Hidden content</CollapsibleContent>
      </Collapsible>
    )
    
    expect(screen.getByText('Toggle')).toBeInTheDocument()
  })

  it('toggles content visibility when trigger is clicked', async () => {
    const user = userEvent.setup()
    
    render(
      <Collapsible defaultOpen>
        <CollapsibleTrigger asChild>
          <Button>Click me</Button>
        </CollapsibleTrigger>
        <CollapsibleContent>Collapsible content</CollapsibleContent>
      </Collapsible>
    )
    
    const trigger = screen.getByText('Click me')
    
    // Initially open
    expect(screen.getByText('Collapsible content')).toBeVisible()
    
    // Click to close
    await user.click(trigger)
    
    // Click to open again
    await user.click(trigger)
    expect(screen.getByText('Collapsible content')).toBeVisible()
  })

  it('supports defaultOpen prop', () => {
    render(
      <Collapsible defaultOpen>
        <CollapsibleTrigger asChild>
          <Button>Toggle</Button>
        </CollapsibleTrigger>
        <CollapsibleContent>Initially visible content</CollapsibleContent>
      </Collapsible>
    )
    
    expect(screen.getByText('Initially visible content')).toBeVisible()
  })
})
