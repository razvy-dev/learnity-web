import * as React from 'react'

import { cn } from '@/utilities/ui'

export const Width: React.FC<{
  children: React.ReactNode
  className?: string
  width?: number | string
}> = ({ children, className, width }) => {
  const span = React.useMemo(() => {
    if (width === undefined || width === null || width === '') return 12

    const parsed = Number(width)
    if (Number.isNaN(parsed) || parsed >= 100) return 12

    return Math.min(12, Math.max(1, Math.round((parsed / 100) * 12)))
  }, [width])

  return (
    <div
      className={cn('col-span-1 md:[grid-column:span_var(--field-span)]', className)}
      style={{ '--field-span': String(span) } as React.CSSProperties}
    >
      {children}
    </div>
  )
}
