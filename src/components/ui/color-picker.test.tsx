import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ColorPicker } from './color-picker'

describe('ColorPicker', () => {
  it('renders with default color', () => {
    render(<ColorPicker data-testid="color-picker" />)
    const colorInput = screen.getByRole('textbox') as HTMLInputElement
    expect(colorInput).toBeInTheDocument()
    expect(colorInput.value).toBe('#000000')
  })

  it('renders with custom initial color', () => {
    render(<ColorPicker value="#ff0000" data-testid="color-picker" />)
    const colorInput = screen.getByRole('textbox') as HTMLInputElement
    expect(colorInput.value).toBe('#ff0000')
  })

  it('calls onChange when color is selected', async () => {
    const user = userEvent.setup()
    const handleChange = vi.fn()
    render(<ColorPicker onChange={handleChange} data-testid="color-picker" />)
    
    const colorInput = screen.getByRole('textbox') as HTMLInputElement
    await user.clear(colorInput)
    await user.type(colorInput, '#00ff00')
    
    expect(handleChange).toHaveBeenCalled()
  })

  it('updates color when value prop changes', () => {
    const { rerender } = render(<ColorPicker value="#ff0000" />)
    let colorInput = screen.getByRole('textbox') as HTMLInputElement
    expect(colorInput.value).toBe('#ff0000')

    rerender(<ColorPicker value="#00ff00" />)
    colorInput = screen.getByRole('textbox') as HTMLInputElement
    expect(colorInput.value).toBe('#00ff00')
  })

  it('renders disabled state', () => {
    render(<ColorPicker disabled data-testid="color-picker" />)
    const colorInput = screen.getByRole('textbox') as HTMLInputElement
    expect(colorInput).toBeDisabled()
  })

  it('applies custom className', () => {
    const { container } = render(<ColorPicker className="custom-class" />)
    const wrapper = container.querySelector('.custom-class')
    expect(wrapper).toBeInTheDocument()
  })

  it('renders both color and text inputs', () => {
    const { container } = render(<ColorPicker />)
    const colorInputs = container.querySelectorAll('input[type="color"]')
    const textInputs = container.querySelectorAll('input[type="text"]')
    expect(colorInputs).toHaveLength(1)
    expect(textInputs).toHaveLength(1)
  })
})
