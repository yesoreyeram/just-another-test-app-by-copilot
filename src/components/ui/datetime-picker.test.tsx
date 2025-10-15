import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { DateTimePicker } from './datetime-picker'

describe('DateTimePicker', () => {
  it('renders with default empty value', () => {
    render(<DateTimePicker data-testid="datetime-picker" />)
    const datetimeInput = screen.getByTestId('datetime-picker') as HTMLInputElement
    expect(datetimeInput).toBeInTheDocument()
    expect(datetimeInput.value).toBe('')
  })

  it('renders with custom initial datetime', () => {
    render(<DateTimePicker value="2024-01-15T14:30" data-testid="datetime-picker" />)
    const datetimeInput = screen.getByTestId('datetime-picker') as HTMLInputElement
    expect(datetimeInput.value).toBe('2024-01-15T14:30')
  })

  it('calls onChange when datetime is selected', async () => {
    const user = userEvent.setup()
    const handleChange = vi.fn()
    render(<DateTimePicker onChange={handleChange} data-testid="datetime-picker" />)
    
    const datetimeInput = screen.getByTestId('datetime-picker') as HTMLInputElement
    await user.type(datetimeInput, '2024-12-25T18:30')
    
    expect(handleChange).toHaveBeenCalled()
  })

  it('updates datetime when value prop changes', () => {
    const { rerender } = render(<DateTimePicker value="2024-01-01T10:00" data-testid="datetime-picker" />)
    let datetimeInput = screen.getByTestId('datetime-picker') as HTMLInputElement
    expect(datetimeInput.value).toBe('2024-01-01T10:00')

    rerender(<DateTimePicker value="2024-12-31T23:59" data-testid="datetime-picker" />)
    datetimeInput = screen.getByTestId('datetime-picker') as HTMLInputElement
    expect(datetimeInput.value).toBe('2024-12-31T23:59')
  })

  it('renders disabled state', () => {
    render(<DateTimePicker disabled data-testid="datetime-picker" />)
    const datetimeInput = screen.getByTestId('datetime-picker') as HTMLInputElement
    expect(datetimeInput).toBeDisabled()
  })

  it('applies custom className', () => {
    render(<DateTimePicker className="custom-class" data-testid="datetime-picker" />)
    const datetimeInput = screen.getByTestId('datetime-picker')
    expect(datetimeInput).toHaveClass('custom-class')
  })

  it('has correct type attribute', () => {
    render(<DateTimePicker data-testid="datetime-picker" />)
    const datetimeInput = screen.getByTestId('datetime-picker') as HTMLInputElement
    expect(datetimeInput.type).toBe('datetime-local')
  })
})
