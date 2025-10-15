import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HoverCard, HoverCardTrigger, HoverCardContent } from './hover-card'

describe('HoverCard', () => {
  it('renders hover card trigger', () => {
    render(
      <HoverCard>
        <HoverCardTrigger>Hover me</HoverCardTrigger>
        <HoverCardContent>Content</HoverCardContent>
      </HoverCard>
    )
    expect(screen.getByText('Hover me')).toBeInTheDocument()
  })

  it('renders hover card with custom content', () => {
    render(
      <HoverCard>
        <HoverCardTrigger>Hover</HoverCardTrigger>
        <HoverCardContent>
          <div>
            <h4>Title</h4>
            <p>Description</p>
          </div>
        </HoverCardContent>
      </HoverCard>
    )
    expect(screen.getByText('Hover')).toBeInTheDocument()
  })
})
