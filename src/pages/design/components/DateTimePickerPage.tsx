import { ComponentPage } from '@/components/ComponentPage'
import { DateTimePicker } from '@/components/ui/datetime-picker'
import { Label } from '@/components/ui/label'
import { useState } from 'react'

export function DateTimePickerPage() {
  const [datetime, setDatetime] = useState('')

  return (
    <ComponentPage
      title="DateTime Picker"
      description="A date and time picker component for selecting both date and time."
      preview={
        <div className="w-full max-w-sm space-y-2">
          <Label>Select Date & Time</Label>
          <DateTimePicker value={datetime} onChange={setDatetime} />
        </div>
      }
      code={`import { DateTimePicker } from '@/components/ui/datetime-picker'

const [datetime, setDatetime] = useState('')

<DateTimePicker value={datetime} onChange={setDatetime} />`}
    />
  )
}
