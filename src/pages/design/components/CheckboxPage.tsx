import { ComponentPage } from '@/components/ComponentPage'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { useState } from 'react'
import { Card } from '@/components/ui/card'

export function CheckboxPage() {
  const [checked, setChecked] = useState(false)

  return (
    <ComponentPage
      title="Checkbox"
      description="A control that allows the user to toggle between checked and not checked."
      preview={
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms">Accept terms and conditions</Label>
        </div>
      }
      code={`import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>`}
      playground={
        <div className="w-full space-y-6">
          <div className="border rounded-lg p-8 flex items-center justify-center bg-muted/30">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="playground-checkbox"
                checked={checked}
                onCheckedChange={(checked) => setChecked(checked as boolean)}
              />
              <Label htmlFor="playground-checkbox">
                {checked ? 'Checked ✓' : 'Unchecked'}
              </Label>
            </div>
          </div>
          <Card className="p-4 bg-muted">
            <pre className="text-sm overflow-x-auto">
              <code>{`<Checkbox
  checked={${checked}}
  onCheckedChange={setChecked}
/>
// Current state: ${checked ? 'Checked' : 'Unchecked'}`}</code>
            </pre>
          </Card>
        </div>
      }
      variants={[
        {
          title: 'States',
          description: 'Different checkbox states',
          preview: (
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox id="checked" defaultChecked />
                <Label htmlFor="checked">Checked</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="unchecked" />
                <Label htmlFor="unchecked">Unchecked</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="disabled" disabled />
                <Label htmlFor="disabled">Disabled</Label>
              </div>
            </div>
          ),
          code: `<Checkbox id="checked" defaultChecked />
<Checkbox id="unchecked" />
<Checkbox id="disabled" disabled />`,
        },
      ]}
    />
  )
}
