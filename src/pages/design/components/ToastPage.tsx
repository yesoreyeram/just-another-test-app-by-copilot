import { ComponentPage } from '@/components/ComponentPage'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'

export function ToastPage() {
  const { toast } = useToast()

  return (
    <ComponentPage
      title="Toast"
      description="A succinct message that is displayed temporarily."
      preview={
        <Button
          onClick={() => {
            toast({
              title: "Scheduled: Catch up",
              description: "Friday, February 10, 2023 at 5:57 PM",
            })
          }}
        >
          Show Toast
        </Button>
      }
      code={`import { useToast } from '@/components/ui/use-toast'

const { toast } = useToast()

<Button
  onClick={() => {
    toast({
      title: "Scheduled: Catch up",
      description: "Friday, February 10, 2023 at 5:57 PM",
    })
  }}
>
  Show Toast
</Button>`}
      variants={[
        {
          title: 'Variants',
          description: 'Different toast types',
          preview: (
            <div className="flex gap-2">
              <Button
                onClick={() => {
                  toast({
                    title: "Success!",
                    description: "Your changes have been saved.",
                    variant: "success",
                  })
                }}
              >
                Success
              </Button>
              <Button
                variant="destructive"
                onClick={() => {
                  toast({
                    title: "Error!",
                    description: "Something went wrong.",
                    variant: "destructive",
                  })
                }}
              >
                Error
              </Button>
            </div>
          ),
          code: `toast({
  title: "Success!",
  description: "Changes saved.",
  variant: "success",
})

toast({
  title: "Error!",
  description: "Something went wrong.",
  variant: "destructive",
})`,
        },
      ]}
    />
  )
}
