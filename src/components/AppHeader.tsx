"use client"
import * as React from "react"
import { cn } from "../lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"

type Props = {
  logo?: React.ReactNode
  appName?: string
  user?: { name?: string | null; email?: string | null; image?: string | null }
  onSignOut?: () => void
  actions?: React.ReactNode
  className?: string
}

export function AppHeader({
  logo,
  appName,
  user,
  onSignOut,
  actions,
  className,
}: Props) {
  const initial = (user?.name || user?.email || "?")[0]?.toUpperCase()

  return (
    <header
      className={cn(
        "sg-app-header flex items-center justify-between gap-4 px-6 py-4",
        className
      )}
    >
      <div className="flex items-center gap-3">
        {logo}
        {appName && <span className="sg-app-header-name">{appName}</span>}
      </div>
      <div className="flex items-center gap-3">
        {actions}
        {user && onSignOut && (
          <DropdownMenu>
            <DropdownMenuTrigger className="sg-app-header-avatar">
              {user.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={user.image} alt="" className="h-full w-full rounded-full object-cover" />
              ) : (
                <span>{initial}</span>
              )}
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {user.name && <div className="px-2 py-1 text-sm font-medium">{user.name}</div>}
              {user.email && <div className="px-2 pb-2 text-xs text-muted-foreground">{user.email}</div>}
              <DropdownMenuItem onClick={onSignOut}>Sign out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </header>
  )
}
