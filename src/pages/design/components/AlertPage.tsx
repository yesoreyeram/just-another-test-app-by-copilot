import { ComponentPage } from '@/components/ComponentPage'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

export function AlertPage() {
  return (
    <ComponentPage
      title="Alert"
      description="Display contextual messages and notifications to users."
      preview={
        <Alert className="max-w-2xl">
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components to your app using the cli.
          </AlertDescription>
        </Alert>
      }
      code={`import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

<Alert>
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components to your app using the cli.
  </AlertDescription>
</Alert>`}
      variants={[
        {
          title: 'Variants',
          description: 'Different alert types for various contexts',
          preview: (
            <div className="space-y-4 max-w-2xl">
              <Alert>
                <AlertTitle>Default</AlertTitle>
                <AlertDescription>Default alert message.</AlertDescription>
              </Alert>
              <Alert variant="info">
                <AlertTitle>Information</AlertTitle>
                <AlertDescription>Informational message.</AlertDescription>
              </Alert>
              <Alert variant="success">
                <AlertTitle>Success!</AlertTitle>
                <AlertDescription>Operation completed successfully.</AlertDescription>
              </Alert>
              <Alert variant="warning">
                <AlertTitle>Warning</AlertTitle>
                <AlertDescription>Please review before proceeding.</AlertDescription>
              </Alert>
              <Alert variant="destructive">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>An error occurred.</AlertDescription>
              </Alert>
            </div>
          ),
          code: `<Alert>
  <AlertTitle>Default</AlertTitle>
  <AlertDescription>Default alert message.</AlertDescription>
</Alert>

<Alert variant="info">
  <AlertTitle>Information</AlertTitle>
  <AlertDescription>Informational message.</AlertDescription>
</Alert>

<Alert variant="success">
  <AlertTitle>Success!</AlertTitle>
  <AlertDescription>Operation completed successfully.</AlertDescription>
</Alert>

<Alert variant="warning">
  <AlertTitle>Warning</AlertTitle>
  <AlertDescription>Please review before proceeding.</AlertDescription>
</Alert>

<Alert variant="destructive">
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>An error occurred.</AlertDescription>
</Alert>`,
        },
      ]}
    />
  )
}
