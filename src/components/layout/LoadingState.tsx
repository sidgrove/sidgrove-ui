"use client"
import * as React from "react"
import { cn } from "../../lib/utils"

type Props = {
  label?: React.ReactNode
  className?: string
}

export function LoadingState({ label = "Loading…", className }: Props) {
  return (
    <div
      className={cn(
        "flex items-center justify-center gap-3 py-12 text-sm text-[var(--color-muted)]",
        className
      )}
      role="status"
      aria-live="polite"
    >
      <span className="size-4 rounded-full border-2 border-[var(--color-line)] border-t-[var(--color-brand-strong)] animate-spin" />
      <span>{label}</span>
    </div>
  )
}
