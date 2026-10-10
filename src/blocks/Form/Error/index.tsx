'use client'

import * as React from 'react'
import { AlertCircle } from 'lucide-react'
import { useFormContext } from 'react-hook-form'

export const Error = ({ name }: { name: string }) => {
  const {
    formState: { errors },
  } = useFormContext()
  return (
    <div className="mt-2 flex items-center gap-1.5 text-sm font-medium text-destructive">
      <AlertCircle className="size-3.5 shrink-0" />
      {(errors[name]?.message as string) || 'This field is required'}
    </div>
  )
}
