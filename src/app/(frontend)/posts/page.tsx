import type { Metadata } from 'next/types'

import React from 'react'

import { PostsListing } from './PostsListing'

export const dynamic = 'force-dynamic'

export default async function Page() {
  return <PostsListing page={1} />
}

export function generateMetadata(): Metadata {
  return {
    title: `Articole`,
  }
}
