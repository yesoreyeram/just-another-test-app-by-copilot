import { ComponentPage } from '@/components/ComponentPage'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export function ButtonPage() {
  const [playgroundVariant, setPlaygroundVariant] = useState<'default' | 'secondary' | 'outline' | 'ghost' | 'link' | 'destructive'>('default')
  const [playgroundSize, setPlaygroundSize] = useState<'default' | 'sm' | 'lg' | 'icon'>('default')
  const [playgroundText, setPlaygroundText] = useState('Click me')

  return (
    <ComponentPage
      title="Button"
      description="A versatile button component with multiple variants and sizes."
      preview={<Button>Click me</Button>}
      code={`import { Button } from '@/components/ui/button'

<Button>Click me</Button>`}
      playground={
        <div className="w-full space-y-6">
          <Card className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="variant">Variant</Label>
                <Select value={playgroundVariant} onValueChange={(value: 'default' | 'secondary' | 'outline' | 'ghost' | 'link' | 'destructive') => setPlaygroundVariant(value)}>
                  <SelectTrigger id="variant">
                    <SelectValue placeholder="Select variant" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="default">Default</SelectItem>
                    <SelectItem value="secondary">Secondary</SelectItem>
                    <SelectItem value="outline">Outline</SelectItem>
                    <SelectItem value="ghost">Ghost</SelectItem>
                    <SelectItem value="link">Link</SelectItem>
                    <SelectItem value="destructive">Destructive</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="size">Size</Label>
                <Select value={playgroundSize} onValueChange={(value: 'default' | 'sm' | 'lg' | 'icon') => setPlaygroundSize(value)}>
                  <SelectTrigger id="size">
                    <SelectValue placeholder="Select size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sm">Small</SelectItem>
                    <SelectItem value="default">Default</SelectItem>
                    <SelectItem value="lg">Large</SelectItem>
                    <SelectItem value="icon">Icon</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="text">Button Text</Label>
                <input
                  id="text"
                  type="text"
                  value={playgroundText}
                  onChange={(e) => setPlaygroundText(e.target.value)}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
            </div>
          </Card>
          <div className="border rounded-lg p-8 flex items-center justify-center bg-muted/30">
            <Button 
              variant={playgroundVariant} 
              size={playgroundSize}
              onClick={() => alert('Button clicked!')}
            >
              {playgroundSize === 'icon' ? '🎨' : playgroundText}
            </Button>
          </div>
          <Card className="p-4 bg-muted">
            <pre className="text-sm overflow-x-auto">
              <code>{`<Button variant="${playgroundVariant}" size="${playgroundSize}">
  ${playgroundSize === 'icon' ? '🎨' : playgroundText}
</Button>`}</code>
            </pre>
          </Card>
        </div>
      }
      variants={[
        {
          title: 'Variants',
          description: 'Different button styles for various contexts',
          preview: (
            <div className="flex flex-wrap gap-4">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
          ),
          code: `<Button>Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
<Button variant="destructive">Destructive</Button>`,
        },
        {
          title: 'Sizes',
          description: 'Available button sizes',
          preview: (
            <div className="flex flex-wrap items-center gap-4">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon">🎨</Button>
            </div>
          ),
          code: `<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon">🎨</Button>`,
        },
      ]}
    />
  )
}
