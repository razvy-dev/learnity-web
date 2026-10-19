import type { Metadata } from 'next/types'

import { notFound } from 'next/navigation'
import React from 'react'

import { PostsListing } from '../../PostsListing'

export const dynamic = 'force-dynamic'

type Args = {
  params: Promise<{
    pageNumber: string
  }>
}

export default async function Page({ params: paramsPromise }: Args) {
  const { pageNumber } = await paramsPromise

  const sanitizedPageNumber = Number(pageNumber)

  if (!Number.isInteger(sanitizedPageNumber) || sanitizedPageNumber < 1) notFound()

  return <PostsListing page={sanitizedPageNumber} />
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { pageNumber } = await paramsPromise
  return {
    title: `Articole — Pagina ${pageNumber || ''}`,
  }
}
