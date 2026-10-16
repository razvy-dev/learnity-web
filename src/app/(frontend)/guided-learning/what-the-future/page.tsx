import type { Metadata } from 'next/types'

import React from 'react'

import { ComingSoon } from '@/components/ComingSoon'

export default function Page() {
  return <ComingSoon title="What the Future" />
}

export function generateMetadata(): Metadata {
  return { title: 'What the Future' }
}
