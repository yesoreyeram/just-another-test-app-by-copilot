import { ComponentPage } from '@/components/ComponentPage'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import { useState } from 'react'
import { Card } from '@/components/ui/card'

export function SelectPage() {
  const [selectedValue, setSelectedValue] = useState('')

  return (
    <ComponentPage
      title="Select"
      description="Displays a list of options for the user to pick from—triggered by a button."
      preview={
        <div className="w-full max-w-sm space-y-2">
          <Label>Select a fruit</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="orange">Orange</SelectItem>
              <SelectItem value="grape">Grape</SelectItem>
            </SelectContent>
          </Select>
        </div>
      }
      code={`import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
    <SelectItem value="orange">Orange</SelectItem>
  </SelectContent>
</Select>`}
      playground={
        <div className="w-full space-y-6">
          <div className="border rounded-lg p-8 flex items-center justify-center bg-muted/30">
            <div className="w-full max-w-sm space-y-2">
              <Label>Choose your favorite fruit</Label>
              <Select value={selectedValue} onValueChange={setSelectedValue}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apple">🍎 Apple</SelectItem>
                  <SelectItem value="banana">🍌 Banana</SelectItem>
                  <SelectItem value="orange">🍊 Orange</SelectItem>
                  <SelectItem value="grape">🍇 Grape</SelectItem>
                  <SelectItem value="strawberry">🍓 Strawberry</SelectItem>
                  <SelectItem value="watermelon">🍉 Watermelon</SelectItem>
                </SelectContent>
              </Select>
              {selectedValue && (
                <p className="text-sm text-muted-foreground">
                  Selected: {selectedValue}
                </p>
              )}
            </div>
          </div>
          <Card className="p-4 bg-muted">
            <pre className="text-sm overflow-x-auto">
              <code>{`<Select value="${selectedValue}" onValueChange={setSelectedValue}>
  <SelectTrigger>
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">🍎 Apple</SelectItem>
    <SelectItem value="banana">🍌 Banana</SelectItem>
    <SelectItem value="orange">🍊 Orange</SelectItem>
    {/* ... more items */}
  </SelectContent>
</Select>`}</code>
            </pre>
          </Card>
        </div>
      }
    />
  )
}
