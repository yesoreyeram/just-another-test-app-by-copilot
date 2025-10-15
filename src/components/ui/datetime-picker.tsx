import * as React from "react"
import { cn } from "@/lib/utils"

export interface DateTimePickerProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> {
  value?: string
  onChange?: (datetime: string) => void
}

const DateTimePicker = React.forwardRef<HTMLInputElement, DateTimePickerProps>(
  ({ className, value, onChange, ...props }, ref) => {
    const [datetime, setDatetime] = React.useState(value || '')

    React.useEffect(() => {
      if (value !== undefined) {
        setDatetime(value)
      }
    }, [value])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newDatetime = e.target.value
      setDatetime(newDatetime)
      onChange?.(newDatetime)
    }

    return (
      <input
        type="datetime-local"
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        value={datetime}
        onChange={handleChange}
        ref={ref}
        {...props}
      />
    )
  }
)
DateTimePicker.displayName = "DateTimePicker"

export { DateTimePicker }
