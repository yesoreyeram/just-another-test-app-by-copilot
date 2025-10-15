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
    
    const designLink = screen.getByRole('link', { name: /design/i })
    await user.click(designLink)
    
    expect(screen.getByRole('heading', { name: /design system/i, level: 1 })).toBeInTheDocument()
  })

  it('navigates back to home when logo is clicked', async () => {
    const user = userEvent.setup()
    render(
      <ThemeProvider>
        <App />
      </ThemeProvider>
    )
    
    // Navigate to design page first
    const designLink = screen.getByRole('link', { name: /design/i })
    await user.click(designLink)
    expect(screen.getByRole('heading', { name: /design system/i, level: 1 })).toBeInTheDocument()
    
    // Click logo to go back home
    const logo = screen.getByRole('link', { name: /hello/i })
    await user.click(logo)
    expect(screen.getByText('Hello World')).toBeInTheDocument()
  })

  it('navigates to component pages from sidebar', async () => {
    const user = userEvent.setup()
    render(
      <ThemeProvider>
        <App />
      </ThemeProvider>
    )
    
    // Navigate to design page first
    const designLink = screen.getByRole('link', { name: /design/i })
    await user.click(designLink)
    
    // Click on Spinner link in sidebar
    const spinnerLink = screen.getByRole('link', { name: /^spinner$/i })
    await user.click(spinnerLink)
    
    expect(screen.getByRole('heading', { name: /^spinner$/i, level: 1 })).toBeInTheDocument()
  })
})
