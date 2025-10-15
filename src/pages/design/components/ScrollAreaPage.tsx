import { ComponentPage } from '@/components/ComponentPage'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'

const tags = Array.from({ length: 50 }).map(
  (_, i) => `Tag ${i + 1}`
)

export function ScrollAreaPage() {
  return (
    <ComponentPage
      title="Scroll Area"
      description="A scrollable area with custom scrollbars."
      preview={
        <ScrollArea className="h-72 w-48 rounded-md border">
          <div className="p-4">
            <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
            {tags.map((tag) => (
              <div key={tag}>
                <div className="text-sm">{tag}</div>
                <Separator className="my-2" />
              </div>
            ))}
          </div>
        </ScrollArea>
      }
      code={`import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'

const tags = Array.from({ length: 50 }).map(
  (_, i) => \`Tag \${i + 1}\`
)

<ScrollArea className="h-72 w-48 rounded-md border">
  <div className="p-4">
    <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
    {tags.map((tag) => (
      <div key={tag}>
        <div className="text-sm">{tag}</div>
        <Separator className="my-2" />
      </div>
    ))}
  </div>
</ScrollArea>`}
      variants={[
        {
          title: 'Horizontal Scrolling',
          description: 'Scroll horizontally with a custom width',
          preview: (
            <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
              <div className="flex w-max space-x-4 p-4">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-32 w-32 shrink-0 rounded-md bg-primary/10 flex items-center justify-center"
                  >
                    <span className="text-sm font-medium">Item {i + 1}</span>
                  </div>
                ))}
              </div>
            </ScrollArea>
          ),
          code: `<ScrollArea className="w-96 whitespace-nowrap rounded-md border">
  <div className="flex w-max space-x-4 p-4">
    {Array.from({ length: 10 }).map((_, i) => (
      <div
        key={i}
        className="h-32 w-32 shrink-0 rounded-md bg-primary/10 flex items-center justify-center"
      >
        <span className="text-sm font-medium">Item {i + 1}</span>
      </div>
    ))}
  </div>
</ScrollArea>`,
        },
        {
          title: 'Full Height',
          description: 'Scroll area that fills available height',
          preview: (
            <div className="h-96 w-full rounded-md border">
              <ScrollArea className="h-full w-full">
                <div className="p-4 space-y-4">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div key={i} className="p-4 rounded-md bg-muted">
                      <h3 className="font-medium">Section {i + 1}</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        This is a scrollable section with content that extends beyond the visible area.
                      </p>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          ),
          code: `<div className="h-96 w-full rounded-md border">
  <ScrollArea className="h-full w-full">
    <div className="p-4 space-y-4">
      {Array.from({ length: 20 }).map((_, i) => (
        <div key={i} className="p-4 rounded-md bg-muted">
          <h3 className="font-medium">Section {i + 1}</h3>
          <p className="text-sm text-muted-foreground mt-1">
            This is a scrollable section with content that extends beyond the visible area.
          </p>
        </div>
      ))}
    </div>
  </ScrollArea>
</div>`,
        },
      ]}
    />
  )
}
