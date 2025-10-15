import * as React from "react"
import { cn } from "@/lib/utils"

export interface DatePickerProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> {
  value?: string
  onChange?: (date: string) => void
}

const DatePicker = React.forwardRef<HTMLInputElement, DatePickerProps>(
  ({ className, value, onChange, ...props }, ref) => {
    const [date, setDate] = React.useState(value || '')

    React.useEffect(() => {
      if (value !== undefined) {
        setDate(value)
      }
    }, [value])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newDate = e.target.value
      setDate(newDate)
      onChange?.(newDate)
    }

    return (
      <input
        type="date"
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        value={date}
        onChange={handleChange}
        ref={ref}
        {...props}
      />
    )
  }
)
DatePicker.displayName = "DatePicker"

export { DatePicker }
