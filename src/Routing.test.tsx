import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { ThemeProvider } from '@/contexts/ThemeContext'
import App from './App'

describe('Routing', () => {
  it('navigates to design page when Design link is clicked', async () => {
    const user = userEvent.setup()
    render(
      <ThemeProvider>
        <App />
      </ThemeProvider>
    )
    
    const designLink = screen.getByRole('button', { name: /design/i })
    await user.click(designLink)
    
    expect(screen.getByText('Design System')).toBeInTheDocument()
  })

  it('navigates back to home when logo is clicked', async () => {
    const user = userEvent.setup()
    render(
      <ThemeProvider>
        <App />
      </ThemeProvider>
    )
    
    // Navigate to design page first
    const designLink = screen.getByRole('button', { name: /design/i })
    await user.click(designLink)
    expect(screen.getByText('Design System')).toBeInTheDocument()
    
    // Click logo to go back home
    const logo = screen.getByRole('link', { name: /hello/i })
    await user.click(logo)
    expect(screen.getByText('Hello World')).toBeInTheDocument()
  })
})
