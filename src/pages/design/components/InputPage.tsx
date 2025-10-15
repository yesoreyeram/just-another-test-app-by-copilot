import { ComponentPage } from '@/components/ComponentPage'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export function InputPage() {
  const [inputType, setInputType] = useState<'text' | 'email' | 'password' | 'number'>('text')
  const [inputValue, setInputValue] = useState('')
  const [placeholder, setPlaceholder] = useState('Enter text...')
  const [disabled, setDisabled] = useState(false)

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
      playground={
        <div className="w-full space-y-6">
          <Card className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="type">Type</Label>
                <Select value={inputType} onValueChange={(value: 'text' | 'email' | 'password' | 'number') => setInputType(value)}>
                  <SelectTrigger id="type">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="text">Text</SelectItem>
                    <SelectItem value="email">Email</SelectItem>
                    <SelectItem value="password">Password</SelectItem>
                    <SelectItem value="number">Number</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="placeholder-input">Placeholder</Label>
                <input
                  id="placeholder-input"
                  type="text"
                  value={placeholder}
                  onChange={(e) => setPlaceholder(e.target.value)}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="disabled-checkbox" className="flex items-center gap-2">
                  <input
                    id="disabled-checkbox"
                    type="checkbox"
                    checked={disabled}
                    onChange={(e) => setDisabled(e.target.checked)}
                    className="h-4 w-4"
                  />
                  Disabled
                </Label>
              </div>
            </div>
          </Card>
          <div className="border rounded-lg p-8 flex items-center justify-center bg-muted/30">
            <div className="w-full max-w-sm">
              <Input
                type={inputType}
                placeholder={placeholder}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                disabled={disabled}
              />
            </div>
          </div>
          <Card className="p-4 bg-muted">
            <pre className="text-sm overflow-x-auto">
              <code>{`<Input
  type="${inputType}"
  placeholder="${placeholder}"
  ${disabled ? 'disabled' : ''}
/>`}</code>
            </pre>
          </Card>
        </div>
      }
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
