import { ComponentPage } from '@/components/ComponentPage'
import { Slider } from '@/components/ui/slider'
import { Label } from '@/components/ui/label'

export function SliderPage() {
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
