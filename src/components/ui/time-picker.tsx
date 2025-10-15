import * as React from "react"
import { cn } from "@/lib/utils"

export interface TimePickerProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> {
  value?: string
  onChange?: (time: string) => void
}

const TimePicker = React.forwardRef<HTMLInputElement, TimePickerProps>(
  ({ className, value, onChange, ...props }, ref) => {
    const [time, setTime] = React.useState(value || '')

    React.useEffect(() => {
      if (value !== undefined) {
        setTime(value)
      }
    }, [value])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newTime = e.target.value
      setTime(newTime)
      onChange?.(newTime)
    }

    return (
      <input
        type="time"
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        value={time}
        onChange={handleChange}
        ref={ref}
        {...props}
      />
    )
  }
)
TimePicker.displayName = "TimePicker"

export { TimePicker }
