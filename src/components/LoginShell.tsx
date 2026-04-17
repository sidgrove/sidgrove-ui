"use client"
import * as React from "react"
import { cn } from "../lib/utils"

type Props = {
  appName: string
  tagline?: string
  logo?: React.ReactNode
  children: React.ReactNode
  className?: string
}

export function LoginShell({ appName, tagline, logo, children, className }: Props) {
  return (
    <main className={cn("sg-login-main", className)}>
      <div className="sg-login-card sg-login-spinning-border">
        <div className="sg-login-card-inner">
          {logo && <div className="mb-6 flex justify-center">{logo}</div>}
          <h1 className="sg-login-title">{appName}</h1>
          {tagline && <p className="sg-login-tagline">{tagline}</p>}
          <div className="mt-8 flex flex-col gap-3">{children}</div>
        </div>
      </div>
    </main>
  )
}
