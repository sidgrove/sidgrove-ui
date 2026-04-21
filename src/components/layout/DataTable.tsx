"use client"
import * as React from "react"
import { cn } from "../../lib/utils"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table"

type Column<T> = {
  key: string
  header: React.ReactNode
  /** Cell renderer. Gets row + row-index. */
  cell: (row: T, index: number) => React.ReactNode
  /** Text align for both header and cell. Default: "left". */
  align?: "left" | "right" | "center"
  /** Tailwind width class (e.g. "w-24"). */
  widthClass?: string
}

type Props<T> = {
  data: T[]
  columns: Column<T>[]
  /** React key getter — defaults to index. */
  rowKey?: (row: T, index: number) => React.Key
  /** Show sticky header with gradient. Default: false. */
  stickyHeader?: boolean
  /** Node rendered when data is empty. */
  emptyState?: React.ReactNode
  className?: string
}

export function DataTable<T>({
  data,
  columns,
  rowKey,
  stickyHeader = false,
  emptyState,
  className,
}: Props<T>) {
  const alignClass = (a: Column<T>["align"]) =>
    a === "right" ? "text-right" : a === "center" ? "text-center" : "text-left"

  if (data.length === 0 && emptyState) return <>{emptyState}</>

  return (
    <div className={cn("rounded-xl border border-[var(--color-line)] overflow-hidden", className)}>
      <Table>
        <TableHeader
          className={cn(
            stickyHeader &&
              "sticky top-0 z-10 bg-gradient-to-b from-[var(--color-bg)] to-[var(--color-bg-subtle)] backdrop-blur"
          )}
        >
          <TableRow>
            {columns.map((col) => (
              <TableHead
                key={col.key}
                className={cn(
                  "text-[0.7rem] uppercase tracking-[0.15em] text-[var(--color-muted)]",
                  alignClass(col.align),
                  col.widthClass
                )}
              >
                {col.header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, i) => (
            <TableRow key={rowKey ? rowKey(row, i) : i}>
              {columns.map((col) => (
                <TableCell
                  key={col.key}
                  className={cn(alignClass(col.align), col.widthClass)}
                >
                  {col.cell(row, i)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
