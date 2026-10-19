import configPromise from '@payload-config'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import React from 'react'

import PageClient from './page.client'
import { PostsArchive } from './PostsArchive'
import { Pagination } from '@/components/Pagination'

export const POSTS_LIMIT = 12

type Args = {
  page: number
}

export const PostsListing: React.FC<Args> = async ({ page }) => {
  const payload = await getPayload({ config: configPromise })

  const posts = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: POSTS_LIMIT,
    page,
    overrideAccess: false,
    sort: '-publishedAt',
    select: {
      title: true,
      slug: true,
      excerpt: true,
      categories: true,
      meta: true,
      heroImage: true,
      publishedAt: true,
      authors: true,
      populatedAuthors: true,
    },
  })

  const currentPage = posts.page ?? 1

  if (page > 1 && (currentPage !== page || posts.docs.length === 0)) notFound()

  return (
    <div className="pt-16 pb-24">
      <PageClient />

      <PostsArchive
        posts={posts.docs}
        currentPage={currentPage}
        limit={POSTS_LIMIT}
        totalDocs={posts.totalDocs}
      />

      {posts.totalPages > 1 && (
        <div className="mx-auto max-w-7xl px-4">
          <Pagination page={currentPage} totalPages={posts.totalPages} />
        </div>
      )}
    </div>
  )
}
