import { ComponentPage } from '@/components/ComponentPage'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

export function CheckboxPage() {
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
