"use client"
import * as React from "react"
import { cn } from "../../lib/utils"

type Props = React.HTMLAttributes<HTMLDivElement> & {
  /** Left-side content — typically search/filter slot. */
  leading?: React.ReactNode
  /** Right-side content — typically actions. */
  trailing?: React.ReactNode
  density?: "compact" | "comfortable"
}

export function Toolbar({
  leading,
  trailing,
  density = "comfortable",
  className,
  children,
  ...rest
}: Props) {
  const padding = density === "compact" ? "px-3 py-2" : "px-4 py-3"
  const base = cn(
    "rounded-xl bg-white/70 backdrop-blur-sm border border-[var(--color-line)]",
    padding,
    className
  )

  if (children) {
    return (
      <div className={cn("flex items-center gap-3", base)} {...rest}>
        {children}
      </div>
    )
  }

  return (
    <div className={cn("flex items-center justify-between gap-3", base)} {...rest}>
      <div className="flex items-center gap-2 min-w-0 flex-1">{leading}</div>
      {trailing && <div className="flex items-center gap-2 shrink-0">{trailing}</div>}
    </div>
  )
}
