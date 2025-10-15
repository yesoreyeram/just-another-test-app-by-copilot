import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Section } from './section'

describe('Section', () => {
  it('renders section with children', () => {
    render(<Section>Content</Section>)
    expect(screen.getByText('Content')).toBeInTheDocument()
  })

  it('renders with title', () => {
    render(<Section title="Section Title">Content</Section>)
    expect(screen.getByText('Section Title')).toBeInTheDocument()
  })

  it('renders with description', () => {
    render(<Section description="Section description">Content</Section>)
    expect(screen.getByText('Section description')).toBeInTheDocument()
  })

  it('renders with both title and description', () => {
    render(
      <Section title="Title" description="Description">
        Content
      </Section>
    )
    expect(screen.getByText('Title')).toBeInTheDocument()
    expect(screen.getByText('Description')).toBeInTheDocument()
  })

  it('applies spacing variants', () => {
    const { container } = render(<Section spacing="lg">Content</Section>)
    expect(container.querySelector('.py-12')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(<Section className="custom-class">Content</Section>)
    expect(container.querySelector('.custom-class')).toBeInTheDocument()
  })
})
