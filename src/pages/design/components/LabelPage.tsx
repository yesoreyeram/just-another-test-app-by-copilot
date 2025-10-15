import { ComponentPage } from '@/components/ComponentPage'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

export function LabelPage() {
  return (
    <ComponentPage
      title="Label"
      description="A caption for a form field."
      preview={
        <div className="w-full max-w-sm space-y-2">
          <Label htmlFor="username">Username</Label>
          <Input id="username" placeholder="Enter your username" />
        </div>
      }
      code={`import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

<div className="space-y-2">
  <Label htmlFor="username">Username</Label>
  <Input id="username" placeholder="Enter your username" />
</div>`}
    />
  )
}
