"use client"
import * as React from "react"
import { cn } from "../../lib/utils"

type Density = "compact" | "comfortable" | "hero"

type Props = React.HTMLAttributes<HTMLDivElement> & {
  density?: Density
  /** Icon slot — typically a small Lucide icon, rendered inside a chip. */
  icon?: React.ReactNode
  /** Small uppercase label above the primary value. */
  label?: React.ReactNode
  /** The main content — number, text, or arbitrary node. */
  primary?: React.ReactNode
  /** Supporting copy below primary. */
  secondary?: React.ReactNode
  /** Action slot (top-right). */
  action?: React.ReactNode
}

const densityPad = {
  compact: "p-4",
  comfortable: "p-6",
  hero: "p-8",
} as const

const densityPrimary = {
  compact: "text-xl font-semibold",
  comfortable: "text-2xl font-semibold",
  hero: "font-serif text-4xl font-normal leading-tight",
} as const

export function SurfaceCard({
  density = "comfortable",
  icon,
  label,
  primary,
  secondary,
  action,
  className,
  children,
  ...rest
}: Props) {
  const structured = label || primary || secondary || icon || action
  return (
    <div
      className={cn(
        "rounded-2xl bg-white/80 backdrop-blur-sm",
        "border border-[var(--color-line)] shadow-sm",
        densityPad[density],
        className
      )}
      {...rest}
    >
      {structured ? (
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3 min-w-0">
            {icon && (
              <div className="shrink-0 size-10 rounded-lg bg-[var(--color-bg-subtle)] grid place-items-center text-[var(--color-muted)]">
                {icon}
              </div>
            )}
            <div className="space-y-1 min-w-0">
              {label && (
                <p className="text-[0.65rem] uppercase tracking-[0.2em] text-[var(--color-muted)]">
                  {label}
                </p>
              )}
              {primary && (
                <div className={cn("text-[var(--color-ink)]", densityPrimary[density])}>
                  {primary}
                </div>
              )}
              {secondary && (
                <p className="text-sm text-[var(--color-muted)]">{secondary}</p>
              )}
            </div>
          </div>
          {action && <div className="shrink-0">{action}</div>}
        </div>
      ) : (
        children
      )}
    </div>
  )
}
