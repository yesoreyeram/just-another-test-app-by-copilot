import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const sectionVariants = cva(
  "w-full",
  {
    variants: {
      spacing: {
        none: "py-0",
        sm: "py-4",
        md: "py-8",
        lg: "py-12",
        xl: "py-16",
      },
    },
    defaultVariants: {
      spacing: "md",
    },
  }
)

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {
  title?: string
  description?: string
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, spacing, title, description, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(sectionVariants({ spacing }), className)}
        {...props}
      >
        {(title || description) && (
          <div className="mb-6 space-y-2">
            {title && <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>}
            {description && (
              <p className="text-sm text-muted-foreground">{description}</p>
            )}
          </div>
        )}
        {children}
      </section>
    )
  }
)
Section.displayName = "Section"

export { Section }
