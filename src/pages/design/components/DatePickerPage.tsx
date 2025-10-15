import { ComponentPage } from '@/components/ComponentPage'
import { DatePicker } from '@/components/ui/date-picker'
import { Label } from '@/components/ui/label'
import { useState } from 'react'

export function DatePickerPage() {
  const [date, setDate] = useState('')

  return (
    <ComponentPage
      title="Date Picker"
      description="A date picker component for selecting dates."
      preview={
        <div className="w-full max-w-sm space-y-2">
          <Label>Select Date</Label>
          <DatePicker value={date} onChange={setDate} />
        </div>
      }
      code={`import { DatePicker } from '@/components/ui/date-picker'

const [date, setDate] = useState('')

<DatePicker value={date} onChange={setDate} />`}
    />
  )
}
