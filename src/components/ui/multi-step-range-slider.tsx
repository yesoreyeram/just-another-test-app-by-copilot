import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

export interface MultiStepRangeSliderProps
  extends Omit<React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>, 'min' | 'max' | 'step'> {
  /**
   * Array of step labels (e.g., ['XS', 'S', 'M', 'L', 'XL'])
   */
  steps: string[]
  /**
   * Callback when the selected step changes
   */
  onStepChange?: (step: string, index: number) => void
  /**
   * Show labels below the slider
   */
  showLabels?: boolean
}

const MultiStepRangeSlider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  MultiStepRangeSliderProps
>(({ className, steps, onStepChange, showLabels = true, defaultValue, value, onValueChange, ...props }, ref) => {
  const max = steps.length - 1
  
  const handleValueChange = (newValue: number[]) => {
    if (onValueChange) {
      onValueChange(newValue)
    }
    if (onStepChange && newValue[0] !== undefined) {
      const stepIndex = newValue[0]
      onStepChange(steps[stepIndex] || '', stepIndex)
    }
  }

  return (
    <div className={cn("w-full", className)}>
      <SliderPrimitive.Root
        ref={ref}
        className="relative flex w-full touch-none select-none items-center"
        min={0}
        max={max}
        step={1}
        defaultValue={defaultValue}
        value={value}
        onValueChange={handleValueChange}
        {...props}
      >
        <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
          <SliderPrimitive.Range className="absolute h-full bg-primary" />
        </SliderPrimitive.Track>
        
        {/* Step indicators */}
        {steps.map((_, index) => (
          <div
            key={index}
            className="absolute h-3 w-3 rounded-full bg-secondary border-2 border-background -translate-x-1/2"
            style={{
              left: `${(index / max) * 100}%`,
            }}
          />
        ))}
        
        <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 z-10" />
      </SliderPrimitive.Root>
      
      {/* Labels */}
      {showLabels && (
        <div className="relative w-full mt-2">
          <div className="flex justify-between">
            {steps.map((step, index) => (
              <span
                key={index}
                className="text-xs text-muted-foreground"
                style={{
                  width: `${100 / steps.length}%`,
                  textAlign: index === 0 ? 'left' : index === steps.length - 1 ? 'right' : 'center',
                }}
              >
                {step}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
})
MultiStepRangeSlider.displayName = "MultiStepRangeSlider"

export { MultiStepRangeSlider }
