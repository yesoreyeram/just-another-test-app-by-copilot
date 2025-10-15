import { ComponentPage } from '@/components/ComponentPage'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'

export function HoverCardPage() {
  return (
    <ComponentPage
      title="Hover Card"
      description="For sighted users to preview content available behind a link."
      preview={
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="link">@nextjs</Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex justify-between space-x-4">
              <Avatar fallback="N" />
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">@nextjs</h4>
                <p className="text-sm">
                  The React Framework – created and maintained by @vercel.
                </p>
                <div className="flex items-center pt-2">
                  <span className="text-xs text-muted-foreground">
                    Joined December 2021
                  </span>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      }
      code={`import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'

<HoverCard>
  <HoverCardTrigger asChild>
    <Button variant="link">@nextjs</Button>
  </HoverCardTrigger>
  <HoverCardContent>
    <div className="space-y-1">
      <h4 className="text-sm font-semibold">@nextjs</h4>
      <p className="text-sm">
        The React Framework.
      </p>
    </div>
  </HoverCardContent>
</HoverCard>`}
    />
  )
}
