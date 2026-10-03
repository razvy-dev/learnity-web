import type { Metadata } from "next";

import { getPayload } from "payload";
import { PayloadRedirects } from "@/components/PayloadRedirects";
import configPromise from "@payload-config";
import { draftMode } from "next/headers";
import { cache } from "react";

import type { Course } from "@/payload-types";

import { generateMeta } from '@/utilities/generateMeta'
import { LivePreviewListener } from "@/components/LivePreviewListener";

export async function generateStaticParams() {
    const payload = await getPayload({ config: configPromise });
    const courses = await payload.find({
        collection: "courses",
        draft: false,
        limit: 1000,
        overrideAccess: false,
        pagination: false,
        select: {
            slug: true,
        },
    })

    const params = courses.docs.map(({ slug }) => {
        return { slug }
    })

    return params
}

type Args = {
    params: Promise<{
        slug?: string
    }>
}

export default async function Course({ params: paramsPromise }: Args) {
    const { isEnabled: draft } = await draftMode()
    const { slug = '' } = await paramsPromise
    // Decode to support slugs with special characters
    const decodedSlug = decodeURIComponent(slug)
    const url = '/guided-learning/cursuri/' + decodedSlug
    const course = await queryCourseBySlug({ slug: decodedSlug })

    if (!course) return <PayloadRedirects url={url} />

    return (
        <article className="pt-16 pb-16">
            {/* <PageClient /> */}

            {/* Allows redirects for valid pages too */}
            <PayloadRedirects disableNotFound url={url} />

            {draft && <LivePreviewListener />}

            {/* <CourseHero course={course} /> */}

        
        </article>
    )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
    const { slug = '' } = await paramsPromise
    // Decode to support slugs with special characters
    const decodedSlug = decodeURIComponent(slug)
    const course = await queryCourseBySlug({ slug: decodedSlug })

    return generateMeta({ doc: course })
}

const queryCourseBySlug = cache(async ({ slug }: { slug: string }) => {
    const { isEnabled: draft } = await draftMode()

    const payload = await getPayload({ config: configPromise })

    const result = await payload.find({
        collection: 'courses',
        draft,
        where: {
            slug: {
                equals: slug,
            },
        },
        limit: 1,
        overrideAccess: draft,
        pagination: false,
    })

    return result.docs?.[0] || null
})