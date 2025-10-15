import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TimeRangePicker } from './time-range-picker'

describe('TimeRangePicker', () => {
  it('renders with default empty values', () => {
    render(<TimeRangePicker data-testid="time-range-picker" />)
    const container = screen.getByTestId('time-range-picker')
    expect(container).toBeInTheDocument()
    
    const inputs = container.querySelectorAll('input[type="datetime-local"]')
    expect(inputs).toHaveLength(2)
    expect((inputs[0] as HTMLInputElement).value).toBe('')
    expect((inputs[1] as HTMLInputElement).value).toBe('')
  })

  it('renders with custom initial range', () => {
    const range = { from: '2024-01-15T10:00', to: '2024-01-15T12:00' }
    render(<TimeRangePicker value={range} data-testid="time-range-picker" />)
    
    const container = screen.getByTestId('time-range-picker')
    const inputs = container.querySelectorAll('input[type="datetime-local"]')
    expect((inputs[0] as HTMLInputElement).value).toBe('2024-01-15T10:00')
    expect((inputs[1] as HTMLInputElement).value).toBe('2024-01-15T12:00')
  })

  it('calls onChange when from datetime is changed', async () => {
    const user = userEvent.setup()
    const handleChange = vi.fn()
    render(<TimeRangePicker onChange={handleChange} data-testid="time-range-picker" />)
    
    const container = screen.getByTestId('time-range-picker')
    const fromInput = container.querySelectorAll('input[type="datetime-local"]')[0] as HTMLInputElement
    
    await user.clear(fromInput)
    await user.type(fromInput, '2024-12-25T09:00')
    
    expect(handleChange).toHaveBeenCalled()
  })

  it('calls onChange when to datetime is changed', async () => {
    const user = userEvent.setup()
    const handleChange = vi.fn()
    render(<TimeRangePicker onChange={handleChange} data-testid="time-range-picker" />)
    
    const container = screen.getByTestId('time-range-picker')
    const toInput = container.querySelectorAll('input[type="datetime-local"]')[1] as HTMLInputElement
    
    await user.clear(toInput)
    await user.type(toInput, '2024-12-25T10:00')
    
    expect(handleChange).toHaveBeenCalled()
  })

  it('updates range when value prop changes', () => {
    const initialRange = { from: '2024-01-01T00:00', to: '2024-01-01T12:00' }
    const { rerender } = render(<TimeRangePicker value={initialRange} data-testid="time-range-picker" />)
    
    let container = screen.getByTestId('time-range-picker')
    let inputs = container.querySelectorAll('input[type="datetime-local"]')
    expect((inputs[0] as HTMLInputElement).value).toBe('2024-01-01T00:00')
    expect((inputs[1] as HTMLInputElement).value).toBe('2024-01-01T12:00')

    const newRange = { from: '2024-12-31T00:00', to: '2024-12-31T23:59' }
    rerender(<TimeRangePicker value={newRange} data-testid="time-range-picker" />)
    
    container = screen.getByTestId('time-range-picker')
    inputs = container.querySelectorAll('input[type="datetime-local"]')
    expect((inputs[0] as HTMLInputElement).value).toBe('2024-12-31T00:00')
    expect((inputs[1] as HTMLInputElement).value).toBe('2024-12-31T23:59')
  })

  it('renders disabled state', () => {
    render(<TimeRangePicker disabled data-testid="time-range-picker" />)
    const container = screen.getByTestId('time-range-picker')
    const inputs = container.querySelectorAll('input[type="datetime-local"]')
    
    expect(inputs[0]).toBeDisabled()
    expect(inputs[1]).toBeDisabled()
  })

  it('applies custom className', () => {
    render(<TimeRangePicker className="custom-class" data-testid="time-range-picker" />)
    const container = screen.getByTestId('time-range-picker')
    expect(container).toHaveClass('custom-class')
  })

  it('renders quick pick buttons', () => {
    render(<TimeRangePicker data-testid="time-range-picker" />)
    
    expect(screen.getByRole('button', { name: 'Last 5 minutes' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Last 15 minutes' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Last 1 hour' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Last 24 hours' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Last 7 days' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Last 30 days' })).toBeInTheDocument()
  })

  it('calls onChange when quick pick button is clicked', async () => {
    const user = userEvent.setup()
    const handleChange = vi.fn()
    render(<TimeRangePicker onChange={handleChange} data-testid="time-range-picker" />)
    
    const button = screen.getByRole('button', { name: 'Last 1 hour' })
    await user.click(button)
    
    expect(handleChange).toHaveBeenCalledWith(
      expect.objectContaining({
        from: expect.any(String),
        to: expect.any(String)
      })
    )
  })

  it('disables quick pick buttons when disabled prop is true', () => {
    render(<TimeRangePicker disabled data-testid="time-range-picker" />)
    
    const buttons = screen.getAllByRole('button')
    buttons.forEach(button => {
      expect(button).toBeDisabled()
    })
  })

  it('sets correct time range when "Last 5 minutes" is clicked', async () => {
    const user = userEvent.setup()
    const handleChange = vi.fn()
    render(<TimeRangePicker onChange={handleChange} data-testid="time-range-picker" />)
    
    const button = screen.getByRole('button', { name: 'Last 5 minutes' })
    await user.click(button)
    
    expect(handleChange).toHaveBeenCalled()
    const call = handleChange.mock.calls[0][0]
    
    // Verify that the range is approximately 5 minutes
    const fromTime = new Date(call.from).getTime()
    const toTime = new Date(call.to).getTime()
    const diff = toTime - fromTime
    
    // Allow some tolerance for execution time
    expect(diff).toBeGreaterThan(4.9 * 60 * 1000) // at least 4.9 minutes
    expect(diff).toBeLessThan(5.1 * 60 * 1000) // at most 5.1 minutes
  })
})
