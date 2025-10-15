import * as React from "react"
import { cn } from "@/lib/utils"

export interface ColorPickerProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> {
  value?: string
  onChange?: (color: string) => void
}

const ColorPicker = React.forwardRef<HTMLInputElement, ColorPickerProps>(
  ({ className, value, onChange, ...props }, ref) => {
    const [color, setColor] = React.useState(value || '#000000')

    React.useEffect(() => {
      if (value) {
        setColor(value)
      }
    }, [value])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newColor = e.target.value
      setColor(newColor)
      onChange?.(newColor)
    }

    return (
      <div className={cn("flex items-center gap-2", className)}>
        <input
          type="color"
          className="h-10 w-20 rounded-md border border-input bg-background cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
          value={color}
          onChange={handleChange}
          ref={ref}
          {...props}
        />
        <input
          type="text"
          className="flex h-10 flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-mono uppercase"
          value={color}
          onChange={handleChange}
          maxLength={7}
          pattern="^#[0-9A-Fa-f]{6}$"
          {...props}
        />
      </div>
    )
  }
)
ColorPicker.displayName = "ColorPicker"

export { ColorPicker }
