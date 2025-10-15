import { ComponentPage } from '@/components/ComponentPage'
import { MultiStepRangeSlider } from '@/components/ui/multi-step-range-slider'
import { Label } from '@/components/ui/label'
import { useState } from 'react'

export function MultiStepRangeSliderPage() {
  const [value, setValue] = useState([2])
  const steps = ['XS', 'S', 'M', 'L', 'XL']

  return (
    <ComponentPage
      title="Multi-Step Range Slider"
      description="A slider with predefined steps and labels."
      preview={
        <div className="w-full max-w-sm space-y-4">
          <Label>Select Size</Label>
          <MultiStepRangeSlider
            steps={steps}
            value={value}
            onValueChange={setValue}
          />
          <p className="text-sm text-muted-foreground">
            Selected: {steps[value[0]]}
          </p>
        </div>
      }
      code={`import { MultiStepRangeSlider } from '@/components/ui/multi-step-range-slider'

const [value, setValue] = useState([2])
const steps = ['XS', 'S', 'M', 'L', 'XL']

<MultiStepRangeSlider
  steps={steps}
  value={value}
  onValueChange={setValue}
/>`}
    />
  )
}
