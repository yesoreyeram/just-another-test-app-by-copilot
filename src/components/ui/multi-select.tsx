import * as React from "react"
import { Check, X, ChevronDown } from "lucide-react"
import * as PopoverPrimitive from "@radix-ui/react-popover"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

interface MultiSelectProps {
  options: { value: string; label: string }[]
  selected: string[]
  onChange: (selected: string[]) => void
  placeholder?: string
  className?: string
}

const MultiSelect = React.forwardRef<HTMLButtonElement, MultiSelectProps>(
  ({ options, selected, onChange, placeholder = "Select items...", className }, ref) => {
    const [open, setOpen] = React.useState(false)

    const handleSelect = (value: string) => {
      const newSelected = selected.includes(value)
        ? selected.filter((item) => item !== value)
        : [...selected, value]
      onChange(newSelected)
    }

    const handleRemove = (value: string) => {
      onChange(selected.filter((item) => item !== value))
    }

    const selectedLabels = options
      .filter((option) => selected.includes(option.value))
      .map((option) => option.label)

    return (
      <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
        <PopoverPrimitive.Trigger asChild>
          <button
            ref={ref}
            className={cn(
              "flex min-h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
              className
            )}
          >
            <div className="flex flex-wrap gap-1">
              {selected.length > 0 ? (
                selectedLabels.map((label, index) => (
                  <Badge
                    key={selected[index]}
                    variant="secondary"
                    className="cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleRemove(selected[index])
                    }}
                  >
                    {label}
                    <X className="ml-1 h-3 w-3" />
                  </Badge>
                ))
              ) : (
                <span className="text-muted-foreground">{placeholder}</span>
              )}
            </div>
            <ChevronDown className="h-4 w-4 opacity-50" />
          </button>
        </PopoverPrimitive.Trigger>
        <PopoverPrimitive.Portal>
          <PopoverPrimitive.Content
            className="z-50 w-full min-w-[var(--radix-popover-trigger-width)] rounded-md border bg-popover p-1 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
            align="start"
            sideOffset={4}
          >
            <div className="max-h-64 overflow-auto">
              {options.map((option) => {
                const isSelected = selected.includes(option.value)
                return (
                  <div
                    key={option.value}
                    className={cn(
                      "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
                      isSelected && "bg-accent"
                    )}
                    onClick={() => handleSelect(option.value)}
                  >
                    <div className="flex h-3.5 w-3.5 items-center justify-center mr-2">
                      {isSelected && <Check className="h-4 w-4" />}
                    </div>
                    <span>{option.label}</span>
                  </div>
                )
              })}
            </div>
          </PopoverPrimitive.Content>
        </PopoverPrimitive.Portal>
      </PopoverPrimitive.Root>
    )
  }
)
MultiSelect.displayName = "MultiSelect"

export { MultiSelect }
