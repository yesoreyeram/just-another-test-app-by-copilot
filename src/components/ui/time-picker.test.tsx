import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TimePicker } from './time-picker'

describe('TimePicker', () => {
  it('renders with default empty value', () => {
    render(<TimePicker data-testid="time-picker" />)
    const timeInput = screen.getByTestId('time-picker') as HTMLInputElement
    expect(timeInput).toBeInTheDocument()
    expect(timeInput.value).toBe('')
  })

  it('renders with custom initial time', () => {
    render(<TimePicker value="14:30" data-testid="time-picker" />)
    const timeInput = screen.getByTestId('time-picker') as HTMLInputElement
    expect(timeInput.value).toBe('14:30')
  })

  it('calls onChange when time is selected', async () => {
    const user = userEvent.setup()
    const handleChange = vi.fn()
    render(<TimePicker onChange={handleChange} data-testid="time-picker" />)
    
    const timeInput = screen.getByTestId('time-picker') as HTMLInputElement
    await user.type(timeInput, '09:45')
    
    expect(handleChange).toHaveBeenCalled()
  })

  it('updates time when value prop changes', () => {
    const { rerender } = render(<TimePicker value="10:00" data-testid="time-picker" />)
    let timeInput = screen.getByTestId('time-picker') as HTMLInputElement
    expect(timeInput.value).toBe('10:00')

    rerender(<TimePicker value="15:30" data-testid="time-picker" />)
    timeInput = screen.getByTestId('time-picker') as HTMLInputElement
    expect(timeInput.value).toBe('15:30')
  })

  it('renders disabled state', () => {
    render(<TimePicker disabled data-testid="time-picker" />)
    const timeInput = screen.getByTestId('time-picker') as HTMLInputElement
    expect(timeInput).toBeDisabled()
  })

  it('applies custom className', () => {
    render(<TimePicker className="custom-class" data-testid="time-picker" />)
    const timeInput = screen.getByTestId('time-picker')
    expect(timeInput).toHaveClass('custom-class')
  })

  it('has correct type attribute', () => {
    render(<TimePicker data-testid="time-picker" />)
    const timeInput = screen.getByTestId('time-picker') as HTMLInputElement
    expect(timeInput.type).toBe('time')
  })
})
