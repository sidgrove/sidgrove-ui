"use client"
import * as React from "react"
import { cn } from "../../lib/utils"

type Props = {
  icon?: React.ReactNode
  title: React.ReactNode
  description?: React.ReactNode
  action?: React.ReactNode
  className?: string
}

export function EmptyState({ icon, title, description, action, className }: Props) {
  return (
    <div
      className={cn(
        "rounded-xl border border-dashed border-[var(--color-line)] p-12",
        "flex flex-col items-center gap-3 text-center",
        className
      )}
    >
      {icon && (
        <div className="size-12 rounded-full bg-[var(--color-bg-subtle)] grid place-items-center text-[var(--color-muted)]">
          {icon}
        </div>
      )}
      <h3 className="text-base font-semibold text-[var(--color-ink)]">{title}</h3>
      {description && (
        <p className="text-sm text-[var(--color-muted)] max-w-sm">{description}</p>
      )}
      {action && <div className="pt-2">{action}</div>}
    </div>
  )
}
