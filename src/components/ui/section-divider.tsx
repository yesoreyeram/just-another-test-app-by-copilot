import * as React from "react"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

export interface SectionDividerProps extends React.HTMLAttributes<HTMLDivElement> {
  text?: string
  orientation?: "horizontal" | "vertical"
}

const SectionDivider = React.forwardRef<HTMLDivElement, SectionDividerProps>(
  ({ className, text, orientation = "horizontal", ...props }, ref) => {
    if (!text) {
      return (
        <div ref={ref} className={cn("my-6", className)} {...props}>
          <Separator orientation={orientation} />
        </div>
      )
    }

    if (orientation === "vertical") {
      return (
        <div ref={ref} className={cn("flex items-center h-full", className)} {...props}>
          <Separator orientation="vertical" className="flex-1" />
          <span className="px-3 text-sm text-muted-foreground whitespace-nowrap">
            {text}
          </span>
          <Separator orientation="vertical" className="flex-1" />
        </div>
      )
    }

    return (
      <div ref={ref} className={cn("relative my-6", className)} {...props}>
        <div className="absolute inset-0 flex items-center">
          <Separator />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-background px-4 text-sm text-muted-foreground">
            {text}
          </span>
        </div>
      </div>
    )
  }
)
SectionDivider.displayName = "SectionDivider"

export { SectionDivider }
