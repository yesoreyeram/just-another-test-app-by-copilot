import { ComponentPage } from '@/components/ComponentPage'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function InputPage() {
  return (
    <ComponentPage
      title="Input"
      description="A form input component for text entry."
      preview={
        <div className="w-full max-w-sm space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Email" />
        </div>
      }
      code={`import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input type="email" id="email" placeholder="Email" />
</div>`}
      variants={[
        {
          title: 'Types',
          description: 'Different input types',
          preview: (
            <div className="w-full max-w-sm space-y-4">
              <div className="space-y-2">
                <Label htmlFor="text">Text</Label>
                <Input type="text" id="text" placeholder="Enter text" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email-type">Email</Label>
                <Input type="email" id="email-type" placeholder="your@email.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input type="password" id="password" placeholder="Enter password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="number">Number</Label>
                <Input type="number" id="number" placeholder="Enter number" />
              </div>
            </div>
          ),
          code: `<Input type="text" placeholder="Enter text" />
<Input type="email" placeholder="your@email.com" />
<Input type="password" placeholder="Enter password" />
<Input type="number" placeholder="Enter number" />`,
        },
        {
          title: 'States',
          description: 'Different input states',
          preview: (
            <div className="w-full max-w-sm space-y-4">
              <Input placeholder="Default" />
              <Input placeholder="Disabled" disabled />
            </div>
          ),
          code: `<Input placeholder="Default" />
<Input placeholder="Disabled" disabled />`,
        },
      ]}
    />
  )
}
