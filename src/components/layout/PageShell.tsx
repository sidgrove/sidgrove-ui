"use client"
import * as React from "react"
import { cn } from "../../lib/utils"

type Props = React.HTMLAttributes<HTMLElement> & {
  /** Max content width. Default: "6xl" (72rem). Use "full" for edge-to-edge surfaces. */
  width?: "4xl" | "5xl" | "6xl" | "7xl" | "full"
  /** Vertical rhythm between top-level children. Default: "comfortable". */
  density?: "compact" | "comfortable" | "spacious"
}

const widthMap = {
  "4xl": "max-w-4xl",
  "5xl": "max-w-5xl",
  "6xl": "max-w-6xl",
  "7xl": "max-w-7xl",
  full: "max-w-none",
} as const

const densityMap = {
  compact: "space-y-8",
  comfortable: "space-y-12",
  spacious: "space-y-16",
} as const

export function PageShell({
  width = "6xl",
  density = "comfortable",
  className,
  children,
  ...rest
}: Props) {
  return (
    <main
      className={cn(
        "mx-auto w-full px-6 py-12 md:px-8",
        widthMap[width],
        densityMap[density],
        className
      )}
      {...rest}
    >
      {children}
    </main>
  )
}
