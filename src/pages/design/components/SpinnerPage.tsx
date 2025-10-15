import { ComponentPage } from '@/components/ComponentPage'
import { Spinner } from '@/components/ui/spinner'

export function SpinnerPage() {
  return (
    <ComponentPage
      title="Spinner"
      description="A loading spinner component to indicate ongoing processes."
      preview={<Spinner />}
      code={`import { Spinner } from '@/components/ui/spinner'

<Spinner />`}
      variants={[
        {
          title: 'Sizes',
          description: 'Available sizes: sm, md (default), lg, xl',
          preview: (
            <div className="flex items-center gap-4">
              <Spinner size="sm" />
              <Spinner size="md" />
              <Spinner size="lg" />
              <Spinner size="xl" />
            </div>
          ),
          code: `<Spinner size="sm" />
<Spinner size="md" />
<Spinner size="lg" />
<Spinner size="xl" />`,
        },
        {
          title: 'With Label',
          description: 'Show a label alongside the spinner',
          preview: (
            <div className="space-y-4">
              <Spinner label="Loading..." showLabel />
              <Spinner label="Processing your request..." showLabel size="lg" />
            </div>
          ),
          code: `<Spinner label="Loading..." showLabel />
<Spinner label="Processing your request..." showLabel size="lg" />`,
        },
      ]}
    />
  )
}
