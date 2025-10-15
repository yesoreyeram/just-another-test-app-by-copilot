import { ComponentPage } from '@/components/ComponentPage'
import { Separator } from '@/components/ui/separator'

export function SeparatorPage() {
  return (
    <ComponentPage
      title="Separator"
      description="Visually or semantically separates content."
      preview={
        <div className="w-full max-w-sm space-y-4">
          <div>
            <h3 className="text-lg font-medium">Blog Post</h3>
            <p className="text-sm text-muted-foreground">
              A separator component for React.
            </p>
          </div>
          <Separator />
          <div>
            <h3 className="text-lg font-medium">Comments</h3>
            <p className="text-sm text-muted-foreground">
              User feedback and discussions.
            </p>
          </div>
        </div>
      }
      code={`import { Separator } from '@/components/ui/separator'

<div>
  <h3>Blog Post</h3>
  <p>A separator component for React.</p>
</div>
<Separator />
<div>
  <h3>Comments</h3>
  <p>User feedback and discussions.</p>
</div>`}
      variants={[
        {
          title: 'Vertical',
          description: 'A vertical separator',
          preview: (
            <div className="flex h-16 items-center gap-4">
              <div className="text-sm">Item 1</div>
              <Separator orientation="vertical" />
              <div className="text-sm">Item 2</div>
              <Separator orientation="vertical" />
              <div className="text-sm">Item 3</div>
            </div>
          ),
          code: `<div className="flex items-center gap-4">
  <div>Item 1</div>
  <Separator orientation="vertical" />
  <div>Item 2</div>
</div>`,
        },
      ]}
    />
  )
}
