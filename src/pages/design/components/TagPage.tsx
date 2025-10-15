import { ComponentPage } from '@/components/ComponentPage'
import { Tag, Tags } from '@/components/ui/tag'

export function TagPage() {
  return (
    <ComponentPage
      title="Tag"
      description="A component for displaying tags or labels with optional remove functionality."
      preview={
        <Tags>
          <Tag>React</Tag>
          <Tag>TypeScript</Tag>
          <Tag>Tailwind</Tag>
        </Tags>
      }
      code={`import { Tag, Tags } from '@/components/ui/tag'

<Tags>
  <Tag>React</Tag>
  <Tag>TypeScript</Tag>
  <Tag>Tailwind</Tag>
</Tags>`}
      variants={[
        {
          title: 'Variants',
          description: 'Different tag styles',
          preview: (
            <Tags>
              <Tag>Default</Tag>
              <Tag variant="secondary">Secondary</Tag>
              <Tag variant="outline">Outline</Tag>
            </Tags>
          ),
          code: `<Tag>Default</Tag>
<Tag variant="secondary">Secondary</Tag>
<Tag variant="outline">Outline</Tag>`,
        },
        {
          title: 'Removable',
          description: 'Tags with remove button',
          preview: (
            <Tags>
              <Tag onRemove={() => console.log('Remove React')}>React</Tag>
              <Tag onRemove={() => console.log('Remove TypeScript')}>TypeScript</Tag>
              <Tag onRemove={() => console.log('Remove Tailwind')}>Tailwind</Tag>
            </Tags>
          ),
          code: `<Tag onRemove={() => {}}>React</Tag>
<Tag onRemove={() => {}}>TypeScript</Tag>
<Tag onRemove={() => {}}>Tailwind</Tag>`,
        },
      ]}
    />
  )
}
