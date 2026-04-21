"use client"
import * as React from "react"
import { cn } from "../../lib/utils"

type SectionHeaderProps = {
  eyebrow?: React.ReactNode
  title: React.ReactNode
  description?: React.ReactNode
  actions?: React.ReactNode
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  actions,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("flex items-end justify-between gap-4", className)}>
      <div className="space-y-1">
        {eyebrow && (
          <p className="text-[0.7rem] uppercase tracking-[0.2em] text-[var(--color-muted)]">
            {eyebrow}
          </p>
        )}
        <h2 className="text-lg font-semibold text-[var(--color-ink)]">{title}</h2>
        {description && (
          <p className="text-sm text-[var(--color-muted)]">{description}</p>
        )}
      </div>
      {actions && <div className="flex items-center gap-2">{actions}</div>}
    </div>
  )
}

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  density?: "compact" | "comfortable"
}

export function Section({
  density = "comfortable",
  className,
  children,
  ...rest
}: SectionProps) {
  return (
    <section
      className={cn(
        density === "compact" ? "space-y-3" : "space-y-5",
        className
      )}
      {...rest}
    >
      {children}
    </section>
  )
}
