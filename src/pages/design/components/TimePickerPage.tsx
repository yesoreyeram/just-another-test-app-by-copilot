import { ComponentPage } from '@/components/ComponentPage'
import { TimePicker } from '@/components/ui/time-picker'
import { Label } from '@/components/ui/label'
import { useState } from 'react'

export function TimePickerPage() {
  const [time, setTime] = useState('')

  return (
    <ComponentPage
      title="Time Picker"
      description="A time picker component for selecting time."
      preview={
        <div className="w-full max-w-sm space-y-2">
          <Label>Select Time</Label>
          <TimePicker value={time} onChange={setTime} />
        </div>
      }
      code={`import { TimePicker } from '@/components/ui/time-picker'

const [time, setTime] = useState('')

<TimePicker value={time} onChange={setTime} />`}
    />
  )
}
