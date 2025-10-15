import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './card'

describe('Card', () => {
  it('renders card with default variant', () => {
    render(<Card data-testid="card">Card Content</Card>)
    const card = screen.getByTestId('card')
    expect(card).toBeInTheDocument()
    expect(card).toHaveClass('bg-card')
  })

  it('renders card with outline variant', () => {
    render(<Card variant="outline" data-testid="card">Card Content</Card>)
    const card = screen.getByTestId('card')
    expect(card).toHaveClass('bg-transparent')
  })

  it('renders card with elevated variant', () => {
    render(<Card variant="elevated" data-testid="card">Card Content</Card>)
    const card = screen.getByTestId('card')
    expect(card).toHaveClass('bg-card')
    expect(card).toHaveClass('shadow-lg')
  })

  it('renders CardHeader', () => {
    render(<CardHeader data-testid="card-header">Header Content</CardHeader>)
    const header = screen.getByTestId('card-header')
    expect(header).toBeInTheDocument()
    expect(header).toHaveClass('p-6')
  })

  it('renders CardTitle', () => {
    render(<CardTitle>Test Title</CardTitle>)
    expect(screen.getByText('Test Title')).toBeInTheDocument()
  })

  it('renders CardDescription', () => {
    render(<CardDescription>Test Description</CardDescription>)
    const description = screen.getByText('Test Description')
    expect(description).toBeInTheDocument()
    expect(description).toHaveClass('text-muted-foreground')
  })

  it('renders CardContent', () => {
    render(<CardContent data-testid="card-content">Content</CardContent>)
    const content = screen.getByTestId('card-content')
    expect(content).toBeInTheDocument()
    expect(content).toHaveClass('p-6')
  })

  it('renders CardFooter', () => {
    render(<CardFooter data-testid="card-footer">Footer</CardFooter>)
    const footer = screen.getByTestId('card-footer')
    expect(footer).toBeInTheDocument()
    expect(footer).toHaveClass('p-6')
  })

  it('renders complete card with all subcomponents', () => {
    render(
      <Card data-testid="card">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>Card Content</CardContent>
        <CardFooter>Card Footer</CardFooter>
      </Card>
    )
    
    expect(screen.getByTestId('card')).toBeInTheDocument()
    expect(screen.getByText('Card Title')).toBeInTheDocument()
    expect(screen.getByText('Card Description')).toBeInTheDocument()
    expect(screen.getByText('Card Content')).toBeInTheDocument()
    expect(screen.getByText('Card Footer')).toBeInTheDocument()
  })
})
