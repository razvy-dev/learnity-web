'use client'
import { Social } from '@/payload-types'
import { RowLabelProps, useRowLabel } from '@payloadcms/ui'

export const RowLabel: React.FC<RowLabelProps> = () => {
  const data = useRowLabel<NonNullable<Social['platforms']>[number]>()

  const label = data?.data?.name
    ? `Platform ${data.rowNumber !== undefined ? data.rowNumber + 1 : ''}: ${data?.data?.name}`
    : 'Row'

  return <div>{label}</div>
}
