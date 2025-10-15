import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "./button"

export interface TimeRange {
  from: string
  to: string
}

export interface TimeRangePickerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value?: TimeRange
  onChange?: (range: TimeRange) => void
  disabled?: boolean
}

interface QuickRange {
  label: string
  getValue: () => TimeRange
}

const quickRanges: QuickRange[] = [
  {
    label: 'Last 5 minutes',
    getValue: () => {
      const to = new Date()
      const from = new Date(to.getTime() - 5 * 60 * 1000)
      return {
        from: from.toISOString().slice(0, 16),
        to: to.toISOString().slice(0, 16)
      }
    }
  },
  {
    label: 'Last 15 minutes',
    getValue: () => {
      const to = new Date()
      const from = new Date(to.getTime() - 15 * 60 * 1000)
      return {
        from: from.toISOString().slice(0, 16),
        to: to.toISOString().slice(0, 16)
      }
    }
  },
  {
    label: 'Last 1 hour',
    getValue: () => {
      const to = new Date()
      const from = new Date(to.getTime() - 60 * 60 * 1000)
      return {
        from: from.toISOString().slice(0, 16),
        to: to.toISOString().slice(0, 16)
      }
    }
  },
  {
    label: 'Last 24 hours',
    getValue: () => {
      const to = new Date()
      const from = new Date(to.getTime() - 24 * 60 * 60 * 1000)
      return {
        from: from.toISOString().slice(0, 16),
        to: to.toISOString().slice(0, 16)
      }
    }
  },
  {
    label: 'Last 7 days',
    getValue: () => {
      const to = new Date()
      const from = new Date(to.getTime() - 7 * 24 * 60 * 60 * 1000)
      return {
        from: from.toISOString().slice(0, 16),
        to: to.toISOString().slice(0, 16)
      }
    }
  },
  {
    label: 'Last 30 days',
    getValue: () => {
      const to = new Date()
      const from = new Date(to.getTime() - 30 * 24 * 60 * 60 * 1000)
      return {
        from: from.toISOString().slice(0, 16),
        to: to.toISOString().slice(0, 16)
      }
    }
  }
]

const TimeRangePicker = React.forwardRef<HTMLDivElement, TimeRangePickerProps>(
  ({ className, value, onChange, disabled, ...props }, ref) => {
    const [range, setRange] = React.useState<TimeRange>(value || { from: '', to: '' })

    React.useEffect(() => {
      if (value !== undefined) {
        setRange(value)
      }
    }, [value])

    const handleFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newRange = { ...range, from: e.target.value }
      setRange(newRange)
      onChange?.(newRange)
    }

    const handleToChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newRange = { ...range, to: e.target.value }
      setRange(newRange)
      onChange?.(newRange)
    }

    const handleQuickRange = (quickRange: QuickRange) => {
      const newRange = quickRange.getValue()
      setRange(newRange)
      onChange?.(newRange)
    }

    return (
      <div ref={ref} className={cn("space-y-4", className)} {...props}>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              From
            </label>
            <input
              type="datetime-local"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              value={range.from}
              onChange={handleFromChange}
              disabled={disabled}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              To
            </label>
            <input
              type="datetime-local"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              value={range.to}
              onChange={handleToChange}
              disabled={disabled}
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium leading-none">Quick pick</label>
          <div className="flex flex-wrap gap-2">
            {quickRanges.map((quickRange) => (
              <Button
                key={quickRange.label}
                type="button"
                variant="outline"
                size="sm"
                onClick={() => handleQuickRange(quickRange)}
                disabled={disabled}
              >
                {quickRange.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    )
  }
)
TimeRangePicker.displayName = "TimeRangePicker"

export { TimeRangePicker }
