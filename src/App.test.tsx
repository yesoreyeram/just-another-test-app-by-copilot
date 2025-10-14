import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from '@/contexts/ThemeContext'
import App from './App'

describe('App', () => {
  it('renders Hello World text', () => {
    render(
      <ThemeProvider>
        <App />
      </ThemeProvider>
    )
    expect(screen.getByText('Hello World')).toBeInTheDocument()
  })

  it('renders Explore more button', () => {
    render(
      <ThemeProvider>
        <App />
      </ThemeProvider>
    )
    expect(screen.getByRole('button', { name: /explore more/i })).toBeInTheDocument()
  })

  it('renders Hello logo/title in header', () => {
    render(
      <ThemeProvider>
        <App />
      </ThemeProvider>
    )
    expect(screen.getByText('Hello')).toBeInTheDocument()
  })
})
