"use client"
import * as React from "react"
import { cn } from "../../lib/utils"

type Props = React.HTMLAttributes<HTMLDivElement> & {
  label: React.ReactNode
  value: React.ReactNode
  /** Optional delta/trend indicator (ReactNode so caller controls colour + icon). */
  delta?: React.ReactNode
  /** Optional supporting line under the value. */
  sublabel?: React.ReactNode
}

export function KpiTile({
  label,
  value,
  delta,
  sublabel,
  className,
  ...rest
}: Props) {
  return (
    <div
      className={cn(
        "rounded-xl bg-white/80 backdrop-blur-sm border border-[var(--color-line)] p-4 space-y-1",
        className
      )}
      {...rest}
    >
      <p className="text-[0.65rem] uppercase tracking-[0.2em] text-[var(--color-muted)]">
        {label}
      </p>
      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-semibold text-[var(--color-ink)]">{value}</span>
        {delta}
      </div>
      {sublabel && <p className="text-xs text-[var(--color-muted)]">{sublabel}</p>}
    </div>
  )
}
