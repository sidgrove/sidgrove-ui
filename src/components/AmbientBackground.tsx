"use client"
import { cn } from "../lib/utils"

type Props = {
  className?: string
}

export function AmbientBackground({ className }: Props) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none fixed inset-0 -z-10 overflow-hidden",
        className
      )}
    >
      <div className="sg-ambient-gradient" />
      <div className="sg-ambient-orb sg-ambient-orb-1" />
      <div className="sg-ambient-orb sg-ambient-orb-2" />
      <div className="sg-ambient-orb sg-ambient-orb-3" />
      <div className="sg-ambient-grain" />
    </div>
  )
}
