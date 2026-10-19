import type { Metadata } from 'next'
import { Bangers, Nunito } from 'next/font/google'

import { RelatedPosts } from '@/blocks/RelatedPosts/Component'
import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'
import RichText from '@/components/RichText'

import type { Post } from '@/payload-types'

import { PostHero } from '@/heros/PostHero'
import { generateMeta } from '@/utilities/generateMeta'
import { LivePreviewListener } from '@/components/LivePreviewListener'

import './styles.css'

export const dynamic = 'force-dynamic'

const nunito = Nunito({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
})

const bangers = Bangers({
  subsets: ['latin', 'latin-ext'],
  weight: '400',
  display: 'swap',
})

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function Post({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug = '' } = await paramsPromise
  // Decode to support slugs with special characters
  const decodedSlug = decodeURIComponent(slug)
  const url = '/posts/' + decodedSlug
  const post = await queryPostBySlug({ slug: decodedSlug })

  if (!post) return <PayloadRedirects url={url} />

  const relatedPosts = post.relatedPosts?.filter((post) => typeof post === 'object') || []

  return (
    <article className="pt-16 pb-0">
      {/* Allows redirects for valid pages too */}
      <PayloadRedirects disableNotFound url={url} />

      {draft && <LivePreviewListener />}

      <PostHero post={post} />

      <section
        className="bg-customWhite px-4 py-16 md:py-24"
        style={{ fontFamily: nunito.style.fontFamily }}
      >
        <div className="mx-auto max-w-[52rem]">
          <div
            className="post-content rounded-3xl bg-white p-6 shadow-xl md:p-12"
            style={
              {
                '--post-heading-font': bangers.style.fontFamily,
              } as React.CSSProperties
            }
          >
            <RichText
              className="prose md:prose-md max-w-none"
              data={post.content}
              enableGutter={false}
            />
          </div>
        </div>

        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <RelatedPosts docs={relatedPosts} />
          </div>
        )}
      </section>
    </article>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  // Decode to support slugs with special characters
  const decodedSlug = decodeURIComponent(slug)
  const post = await queryPostBySlug({ slug: decodedSlug })

  return generateMeta({ doc: post })
}

const queryPostBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'posts',
    draft,
    limit: 1,
    overrideAccess: draft,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})
