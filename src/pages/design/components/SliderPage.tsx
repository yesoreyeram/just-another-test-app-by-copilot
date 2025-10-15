import { ComponentPage } from '@/components/ComponentPage'
import { Slider } from '@/components/ui/slider'
import { Label } from '@/components/ui/label'
import { useState } from 'react'
import { Card } from '@/components/ui/card'

export function SliderPage() {
  const [value, setValue] = useState([50])

  return (
    <ComponentPage
      title="Slider"
      description="An input where the user selects a value from within a given range."
      preview={
        <div className="w-full max-w-sm space-y-2">
          <Label>Volume</Label>
          <Slider defaultValue={[50]} max={100} step={1} />
        </div>
      }
      code={`import { Slider } from '@/components/ui/slider'

<Slider defaultValue={[50]} max={100} step={1} />`}
      playground={
        <div className="w-full space-y-6">
          <div className="border rounded-lg p-8 flex items-center justify-center bg-muted/30">
            <div className="w-full max-w-sm space-y-4">
              <div className="flex items-center justify-between">
                <Label>Volume</Label>
                <span className="text-sm font-medium">{value[0]}%</span>
              </div>
              <Slider
                value={value}
                onValueChange={setValue}
                max={100}
                step={1}
              />
            </div>
          </div>
          <Card className="p-4 bg-muted">
            <pre className="text-sm overflow-x-auto">
              <code>{`<Slider
  value={[${value[0]}]}
  onValueChange={setValue}
  max={100}
  step={1}
/>`}</code>
            </pre>
          </Card>
        </div>
      }
      variants={[
        {
          title: 'Range',
          description: 'Slider with a range selection',
          preview: (
            <div className="w-full max-w-sm space-y-2">
              <Label>Price Range</Label>
              <Slider defaultValue={[25, 75]} max={100} step={1} />
            </div>
          ),
          code: `<Slider defaultValue={[25, 75]} max={100} step={1} />`,
        },
      ]}
    />
  )
}
