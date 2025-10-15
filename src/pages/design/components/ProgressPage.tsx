import { ComponentPage } from '@/components/ComponentPage'
import { Progress } from '@/components/ui/progress'

export function ProgressPage() {
  return (
    <ComponentPage
      title="Progress"
      description="Display the progress of an operation or task."
      preview={<Progress value={50} className="max-w-md" />}
      code={`import { Progress } from '@/components/ui/progress'

<Progress value={50} />`}
      variants={[
        {
          title: 'With Percentage',
          description: 'Show the percentage value',
          preview: <Progress value={75} showPercentage className="max-w-md" />,
          code: `<Progress value={75} showPercentage />`,
        },
        {
          title: 'With Label',
          description: 'Add a descriptive label',
          preview: <Progress value={60} label="Uploading files..." className="max-w-md" />,
          code: `<Progress value={60} label="Uploading files..." />`,
        },
        {
          title: 'With Label and Percentage',
          description: 'Combine label with percentage',
          preview: <Progress value={85} label="Processing" showPercentage className="max-w-md" />,
          code: `<Progress value={85} label="Processing" showPercentage />`,
        },
        {
          title: 'Variants',
          description: 'Different color variants',
          preview: (
            <div className="space-y-3 max-w-md">
              <Progress value={50} variant="default" label="Default" showPercentage />
              <Progress value={75} variant="success" label="Success" showPercentage />
              <Progress value={60} variant="warning" label="Warning" showPercentage />
              <Progress value={30} variant="destructive" label="Error" showPercentage />
            </div>
          ),
          code: `<Progress value={50} variant="default" label="Default" showPercentage />
<Progress value={75} variant="success" label="Success" showPercentage />
<Progress value={60} variant="warning" label="Warning" showPercentage />
<Progress value={30} variant="destructive" label="Error" showPercentage />`,
        },
      ]}
    />
  )
}
