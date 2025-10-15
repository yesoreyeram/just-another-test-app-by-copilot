import { ComponentPage } from '@/components/ComponentPage'
import { Button } from '@/components/ui/button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { ChevronDown } from 'lucide-react'

export function CollapsiblePage() {
  return (
    <ComponentPage
      title="Collapsible"
      description="An interactive component which expands/collapses a panel."
      preview={
        <Collapsible className="w-full max-w-md space-y-2">
          <div className="flex items-center justify-between space-x-4">
            <h4 className="text-sm font-semibold">
              @peduarte starred 3 repositories
            </h4>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm" className="w-9 p-0">
                <ChevronDown className="h-4 w-4" />
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>
          <div className="rounded-md border px-4 py-3 text-sm">
            @radix-ui/primitives
          </div>
          <CollapsibleContent className="space-y-2">
            <div className="rounded-md border px-4 py-3 text-sm">
              @radix-ui/colors
            </div>
            <div className="rounded-md border px-4 py-3 text-sm">
              @stitches/react
            </div>
          </CollapsibleContent>
        </Collapsible>
      }
      code={`import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'

<Collapsible>
  <CollapsibleTrigger>Can I use this?</CollapsibleTrigger>
  <CollapsibleContent>
    Yes. Free to use for personal and commercial projects.
  </CollapsibleContent>
</Collapsible>`}
    />
  )
}
