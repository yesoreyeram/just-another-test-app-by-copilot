import { ComponentPage } from '@/components/ComponentPage'
import { Section } from '@/components/ui/section'

export function SectionPage() {
  return (
    <ComponentPage
      title="Section"
      description="A semantic section component with optional title and description."
      preview={
        <Section
          title="Features"
          description="Explore the key features of our platform"
          className="max-w-2xl"
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 border rounded">Feature 1</div>
            <div className="p-4 border rounded">Feature 2</div>
          </div>
        </Section>
      }
      code={`import { Section } from '@/components/ui/section'

<Section
  title="Features"
  description="Explore the key features"
>
  <div>Content goes here</div>
</Section>`}
      variants={[
        {
          title: 'Spacing',
          description: 'Different spacing sizes',
          preview: (
            <div className="space-y-4 w-full">
              <Section spacing="sm" title="Small Spacing" className="bg-muted/30" />
              <Section spacing="md" title="Medium Spacing" className="bg-muted/30" />
              <Section spacing="lg" title="Large Spacing" className="bg-muted/30" />
            </div>
          ),
          code: `<Section spacing="sm" title="Small" />
<Section spacing="md" title="Medium" />
<Section spacing="lg" title="Large" />`,
        },
      ]}
    />
  )
}
