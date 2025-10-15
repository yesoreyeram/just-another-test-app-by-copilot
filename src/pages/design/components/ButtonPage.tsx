import { ComponentPage } from '@/components/ComponentPage'
import { Button } from '@/components/ui/button'

export function ButtonPage() {
  return (
    <ComponentPage
      title="Button"
      description="A versatile button component with multiple variants and sizes."
      preview={<Button>Click me</Button>}
      code={`import { Button } from '@/components/ui/button'

<Button>Click me</Button>`}
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
