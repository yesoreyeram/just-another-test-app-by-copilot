import { ComponentPage } from '@/components/ComponentPage'
import { TimeRangePicker, type TimeRange } from '@/components/ui/time-range-picker'
import { Label } from '@/components/ui/label'
import { useState } from 'react'

export function TimeRangePickerPage() {
  const [range, setRange] = useState<TimeRange>({ from: '', to: '' })

  return (
    <ComponentPage
      title="Time Range Picker"
      description="A time range picker component for selecting a time range with quick shortcuts."
      preview={
        <div className="w-full max-w-sm space-y-2">
          <Label>Select Time Range</Label>
          <TimeRangePicker value={range} onChange={setRange} />
        </div>
      }
      code={`import { TimeRangePicker, type TimeRange } from '@/components/ui/time-range-picker'

const [range, setRange] = useState<TimeRange>({ from: '', to: '' })

<TimeRangePicker value={range} onChange={setRange} />`}
    />
  )
}
