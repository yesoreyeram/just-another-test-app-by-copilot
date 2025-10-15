import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { DatePicker } from './date-picker'

describe('DatePicker', () => {
  it('renders with default empty value', () => {
    render(<DatePicker data-testid="date-picker" />)
    const dateInput = screen.getByTestId('date-picker') as HTMLInputElement
    expect(dateInput).toBeInTheDocument()
    expect(dateInput.value).toBe('')
  })

  it('renders with custom initial date', () => {
    render(<DatePicker value="2024-01-15" data-testid="date-picker" />)
    const dateInput = screen.getByTestId('date-picker') as HTMLInputElement
    expect(dateInput.value).toBe('2024-01-15')
  })

  it('calls onChange when date is selected', async () => {
    const user = userEvent.setup()
    const handleChange = vi.fn()
    render(<DatePicker onChange={handleChange} data-testid="date-picker" />)
    
    const dateInput = screen.getByTestId('date-picker') as HTMLInputElement
    await user.type(dateInput, '2024-12-25')
    
    expect(handleChange).toHaveBeenCalled()
  })

  it('updates date when value prop changes', () => {
    const { rerender } = render(<DatePicker value="2024-01-01" data-testid="date-picker" />)
    let dateInput = screen.getByTestId('date-picker') as HTMLInputElement
    expect(dateInput.value).toBe('2024-01-01')

    rerender(<DatePicker value="2024-12-31" data-testid="date-picker" />)
    dateInput = screen.getByTestId('date-picker') as HTMLInputElement
    expect(dateInput.value).toBe('2024-12-31')
  })

  it('renders disabled state', () => {
    render(<DatePicker disabled data-testid="date-picker" />)
    const dateInput = screen.getByTestId('date-picker') as HTMLInputElement
    expect(dateInput).toBeDisabled()
  })

  it('applies custom className', () => {
    render(<DatePicker className="custom-class" data-testid="date-picker" />)
    const dateInput = screen.getByTestId('date-picker')
    expect(dateInput).toHaveClass('custom-class')
  })

  it('has correct type attribute', () => {
    render(<DatePicker data-testid="date-picker" />)
    const dateInput = screen.getByTestId('date-picker') as HTMLInputElement
    expect(dateInput.type).toBe('date')
  })
})
