import { ComponentPage } from '@/components/ComponentPage'
import { Badge } from '@/components/ui/badge'

export function BadgePage() {
  return (
    <ComponentPage
      title="Badge"
      description="A small label component for displaying status, counts, or categories."
      preview={<Badge>Badge</Badge>}
      code={`import { Badge } from '@/components/ui/badge'

<Badge>Badge</Badge>`}
      variants={[
        {
          title: 'Variants',
          description: 'Different badge styles',
          preview: (
            <div className="flex flex-wrap items-center gap-3">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
          ),
          code: `<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>`,
        },
      ]}
    />
  )
}
