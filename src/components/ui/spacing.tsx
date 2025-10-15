import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const spacerVariants = cva("", {
  variants: {
    size: {
      0: "h-0 w-0",
      1: "h-1 w-1",
      2: "h-2 w-2",
      3: "h-3 w-3",
      4: "h-4 w-4",
      5: "h-5 w-5",
      6: "h-6 w-6",
      8: "h-8 w-8",
      10: "h-10 w-10",
      12: "h-12 w-12",
      16: "h-16 w-16",
      20: "h-20 w-20",
      24: "h-24 w-24",
    },
    direction: {
      horizontal: "h-px",
      vertical: "w-px",
      both: "",
    },
  },
  defaultVariants: {
    size: 4,
    direction: "both",
  },
})

export interface SpacerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof spacerVariants> {}

function Spacer({ className, size, direction, ...props }: SpacerProps) {
  return (
    <div className={cn(spacerVariants({ size, direction }), className)} {...props} />
  )
}

const boxVariants = cva("", {
  variants: {
    p: {
      0: "p-0",
      1: "p-1",
      2: "p-2",
      3: "p-3",
      4: "p-4",
      5: "p-5",
      6: "p-6",
      8: "p-8",
      10: "p-10",
      12: "p-12",
    },
    px: {
      0: "px-0",
      1: "px-1",
      2: "px-2",
      3: "px-3",
      4: "px-4",
      5: "px-5",
      6: "px-6",
      8: "px-8",
      10: "px-10",
      12: "px-12",
    },
    py: {
      0: "py-0",
      1: "py-1",
      2: "py-2",
      3: "py-3",
      4: "py-4",
      5: "py-5",
      6: "py-6",
      8: "py-8",
      10: "py-10",
      12: "py-12",
    },
    m: {
      0: "m-0",
      1: "m-1",
      2: "m-2",
      3: "m-3",
      4: "m-4",
      5: "m-5",
      6: "m-6",
      8: "m-8",
      10: "m-10",
      12: "m-12",
    },
    mx: {
      0: "mx-0",
      1: "mx-1",
      2: "mx-2",
      3: "mx-3",
      4: "mx-4",
      5: "mx-5",
      6: "mx-6",
      8: "mx-8",
      10: "mx-10",
      12: "mx-12",
      auto: "mx-auto",
    },
    my: {
      0: "my-0",
      1: "my-1",
      2: "my-2",
      3: "my-3",
      4: "my-4",
      5: "my-5",
      6: "my-6",
      8: "my-8",
      10: "my-10",
      12: "my-12",
    },
  },
})

export interface BoxProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof boxVariants> {}

function Box({ className, p, px, py, m, mx, my, ...props }: BoxProps) {
  return (
    <div className={cn(boxVariants({ p, px, py, m, mx, my }), className)} {...props} />
  )
}

export { Spacer, Box }
