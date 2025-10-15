import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Avatar } from './avatar'

describe('Avatar', () => {
  it('renders avatar with default size', () => {
    render(<Avatar data-testid="avatar">JD</Avatar>)
    const avatar = screen.getByTestId('avatar')
    expect(avatar).toBeInTheDocument()
    expect(avatar).toHaveClass('h-10')
    expect(avatar).toHaveClass('w-10')
  })

  it('renders avatar with small size', () => {
    render(<Avatar size="sm" data-testid="avatar">JD</Avatar>)
    const avatar = screen.getByTestId('avatar')
    expect(avatar).toHaveClass('h-8')
    expect(avatar).toHaveClass('w-8')
  })

  it('renders avatar with large size', () => {
    render(<Avatar size="lg" data-testid="avatar">JD</Avatar>)
    const avatar = screen.getByTestId('avatar')
    expect(avatar).toHaveClass('h-12')
    expect(avatar).toHaveClass('w-12')
  })

  it('renders avatar with extra large size', () => {
    render(<Avatar size="xl" data-testid="avatar">JD</Avatar>)
    const avatar = screen.getByTestId('avatar')
    expect(avatar).toHaveClass('h-16')
    expect(avatar).toHaveClass('w-16')
  })

  it('renders avatar with image src', () => {
    render(<Avatar src="https://example.com/avatar.jpg" alt="John Doe" data-testid="avatar" />)
    const avatar = screen.getByTestId('avatar')
    expect(avatar).toBeInTheDocument()
    const img = avatar.querySelector('img')
    expect(img).toHaveAttribute('src', 'https://example.com/avatar.jpg')
    expect(img).toHaveAttribute('alt', 'John Doe')
  })

  it('renders fallback text when src is not provided', () => {
    render(<Avatar fallback="JD" data-testid="avatar" />)
    const avatar = screen.getByTestId('avatar')
    expect(avatar).toHaveTextContent('JD')
  })

  it('renders children as fallback when no src or fallback provided', () => {
    render(<Avatar data-testid="avatar">AB</Avatar>)
    const avatar = screen.getByTestId('avatar')
    expect(avatar).toHaveTextContent('AB')
  })

  it('renders first character of alt as fallback when no src, fallback, or children provided', () => {
    render(<Avatar alt="John" data-testid="avatar" />)
    const avatar = screen.getByTestId('avatar')
    expect(avatar).toHaveTextContent('J')
  })

  it('renders ? when no src, fallback, children, or alt provided', () => {
    render(<Avatar data-testid="avatar" />)
    const avatar = screen.getByTestId('avatar')
    expect(avatar).toHaveTextContent('?')
  })

  it('applies custom className', () => {
    render(<Avatar className="custom-class" data-testid="avatar">JD</Avatar>)
    const avatar = screen.getByTestId('avatar')
    expect(avatar).toHaveClass('custom-class')
  })

  it('has rounded-full class for circular shape', () => {
    render(<Avatar data-testid="avatar">JD</Avatar>)
    const avatar = screen.getByTestId('avatar')
    expect(avatar).toHaveClass('rounded-full')
  })
})
