import { ComponentPage } from '@/components/ComponentPage'
import { Breadcrumbs } from '@/components/ui/breadcrumbs'

export function BreadcrumbsPage() {
  return (
    <ComponentPage
      title="Breadcrumbs"
      description="Displays the path to the current resource using a hierarchy of links."
      preview={
        <Breadcrumbs
          items={[
            { label: 'Home', href: '#' },
            { label: 'Components', href: '#' },
            { label: 'Breadcrumbs' },
          ]}
        />
      }
      code={`import { Breadcrumbs } from '@/components/ui/breadcrumbs'

<Breadcrumbs
  items={[
    { label: 'Home', href: '#' },
    { label: 'Components', href: '#' },
    { label: 'Breadcrumbs' },
  ]}
/>`}
      variants={[
        {
          title: 'With onClick',
          description: 'Breadcrumbs with click handlers',
          preview: (
            <Breadcrumbs
              items={[
                { label: 'Home', onClick: () => console.log('Home') },
                { label: 'Settings', onClick: () => console.log('Settings') },
                { label: 'Profile' },
              ]}
            />
          ),
          code: `<Breadcrumbs
  items={[
    { label: 'Home', onClick: () => {} },
    { label: 'Settings', onClick: () => {} },
    { label: 'Profile' },
  ]}
/>`,
        },
      ]}
    />
  )
}
