import { ComponentPage } from '@/components/ComponentPage'
import { ColorPicker } from '@/components/ui/color-picker'
import { Label } from '@/components/ui/label'
import { useState } from 'react'

export function ColorPickerPage() {
  const [color, setColor] = useState('#3b82f6')

  return (
    <ComponentPage
      title="Color Picker"
      description="A color picker component for selecting colors."
      preview={
        <div className="w-full max-w-sm space-y-2">
          <Label>Select Color</Label>
          <ColorPicker value={color} onChange={setColor} />
        </div>
      }
      code={`import { ColorPicker } from '@/components/ui/color-picker'

const [color, setColor] = useState('#3b82f6')

<ColorPicker value={color} onChange={setColor} />`}
    />
  )
}
