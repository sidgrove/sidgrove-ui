"use client"
import { cn } from "../lib/utils"

type Props = {
  appName?: string
  className?: string
}

export function LoadingScreen({ appName = "Sidgrove", className }: Props) {
  return (
    <div
      className={cn(
        "fixed inset-0 flex items-center justify-center",
        className
      )}
    >
      <div className="sg-loading-card">
        <div className="sg-loading-spinner" />
        <p className="sg-loading-label">Loading {appName}…</p>
      </div>
    </div>
  )
}
