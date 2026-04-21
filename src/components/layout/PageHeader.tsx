"use client"
import * as React from "react"
import { cn } from "../../lib/utils"

type Props = {
  /** Small uppercase tracker above the title (optional). */
  eyebrow?: React.ReactNode
  /**
   * Main heading. Pass `<>Month-End <PageHeader.Accent>Intelligence</PageHeader.Accent></>`
   * for the canonical sans + italic-serif pattern. Plain strings render all-sans.
   */
  title: React.ReactNode
  /** Optional supporting copy below the title. */
  description?: React.ReactNode
  /** Slot right of the title (actions, meta, avatar, etc). */
  actions?: React.ReactNode
  /**
   * "compact" for utility/settings pages.
   * "hero" for top-of-app surfaces — smaller than a display heading, room for Accent.
   */
  variant?: "compact" | "hero"
  className?: string
}

function PageHeaderImpl({
  eyebrow,
  title,
  description,
  actions,
  variant = "compact",
  className,
}: Props) {
  const isHero = variant === "hero"
  return (
    <header
      className={cn(
        "flex flex-wrap items-start justify-between gap-6",
        className
      )}
    >
      <div className="space-y-2 max-w-3xl">
        {eyebrow && (
          <p className="text-[0.7rem] uppercase tracking-[0.2em] text-[var(--color-muted)]">
            {eyebrow}
          </p>
        )}
        <h1
          className={cn(
            "text-[var(--color-ink)] leading-tight",
            isHero
              ? "text-[2.25rem] font-semibold tracking-tight"
              : "text-2xl font-semibold"
          )}
        >
          {title}
        </h1>
        {description && (
          <p className="text-sm text-[var(--color-muted)]">{description}</p>
        )}
      </div>
      {actions && <div className="flex items-center gap-2">{actions}</div>}
    </header>
  )
}

function Accent({ children }: { children: React.ReactNode }) {
  return <span className="font-serif italic font-normal">{children}</span>
}

export const PageHeader = Object.assign(PageHeaderImpl, { Accent })
