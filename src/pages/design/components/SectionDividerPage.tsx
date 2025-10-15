import { ComponentPage } from '@/components/ComponentPage'
import { SectionDivider } from '@/components/ui/section-divider'

export function SectionDividerPage() {
  return (
    <ComponentPage
      title="Section Divider"
      description="A divider with optional text label for separating sections."
      preview={
        <div className="w-full max-w-2xl space-y-4">
          <p className="text-sm">Content above</p>
          <SectionDivider text="OR" />
          <p className="text-sm">Content below</p>
        </div>
      }
      code={`import { SectionDivider } from '@/components/ui/section-divider'

<div>
  <p>Content above</p>
  <SectionDivider text="OR" />
  <p>Content below</p>
</div>`}
      variants={[
        {
          title: 'Without Text',
          description: 'Simple divider without label',
          preview: (
            <div className="w-full max-w-2xl space-y-4">
              <p className="text-sm">Content above</p>
              <SectionDivider />
              <p className="text-sm">Content below</p>
            </div>
          ),
          code: `<SectionDivider />`,
        },
      ]}
    />
  )
}
