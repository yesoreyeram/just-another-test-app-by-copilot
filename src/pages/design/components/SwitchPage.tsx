import { ComponentPage } from '@/components/ComponentPage'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'

export function SwitchPage() {
  return (
    <ComponentPage
      title="Switch"
      description="A control that allows the user to toggle between checked and not checked."
      preview={
        <div className="flex items-center space-x-2">
          <Switch id="airplane-mode" />
          <Label htmlFor="airplane-mode">Airplane Mode</Label>
        </div>
      }
      code={`import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'

<div className="flex items-center space-x-2">
  <Switch id="airplane-mode" />
  <Label htmlFor="airplane-mode">Airplane Mode</Label>
</div>`}
      variants={[
        {
          title: 'States',
          description: 'Different switch states',
          preview: (
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Switch id="on" defaultChecked />
                <Label htmlFor="on">On</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="off" />
                <Label htmlFor="off">Off</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="disabled-switch" disabled />
                <Label htmlFor="disabled-switch">Disabled</Label>
              </div>
            </div>
          ),
          code: `<Switch id="on" defaultChecked />
<Switch id="off" />
<Switch id="disabled" disabled />`,
        },
      ]}
    />
  )
}
