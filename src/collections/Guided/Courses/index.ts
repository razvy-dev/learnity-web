import type { CollectionConfig } from 'payload';

import { authenticated } from '../../../access/authenticated'
import { authenticatedOrPublished } from '../../../access/authenticatedOrPublished'

import { generatePreviewPath } from '../../../utilities/generatePreviewPath'

import { Banner } from '../../../blocks/Banner/config'
import { Code } from '../../../blocks/Code/config'
import { MediaBlock } from '../../../blocks/MediaBlock/config'

import {
  BlocksFeature,
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'

export const GuidedCourses: CollectionConfig<'guidedCourses'> = {
    slug: 'guidedCourses',
    access: {
        create: authenticated,
        delete: authenticated,
        read: authenticatedOrPublished,
        update: authenticated,
    },

    defaultPopulate: {
        title: true,
        slug: true,
        categories: true,
        meta: {
            image: true,
            description: true,
        },
    },

    admin: {
        defaultColumns: ['title', 'slug', 'updatedAt'],
        livePreview: {
            url: ({ data, req }) =>
                generatePreviewPath({
                    slug: data?.slug,
                    collection: 'guidedCourses',
                    req,
                }),
        },
        preview: (data, { req }) =>
            generatePreviewPath({
                slug: data?.slug as string,
                collection: 'guidedCourses',
                req,
            }),
        useAsTitle: 'title',
    },

    fields: [
        {
            type: 'tabs',
            tabs: [
                {
                    label: 'Content',
                    fields: [
                        {
                            name: 'title',
                            type: 'text',
                            required: true,
                        },
                        {
                            name: 'slug',
                            type: 'text',
                            required: true,
                            unique: true,
                        },
                        {
                            name: 'description',
                            type: 'richText',
                            editor: lexicalEditor({
                                features: ({ rootFeatures }) => {
                                    return [
                                        ...rootFeatures,
                                        HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
                                        BlocksFeature({ blocks: [Banner, Code, MediaBlock] }),
                                        FixedToolbarFeature(),
                                        InlineToolbarFeature(),
                                        HorizontalRuleFeature(),
                                    ]
                                },
                            }),
                            label: false,
                            required: true,
                        },
                        {
                            name: 'photo',
                            type: 'upload',
                            relationTo: 'media',
                            required: true,
                        },
                        {
                            name: 'teachers',
                            type: 'array',
                            fields: [
                                {
                                    name: 'teacher',
                                    type: 'text',
                                    required: true,
                                },
                            ],
                        }
                        {
                            name: 'startDate',
                            type: 'date',
                            required: true,
                        },
                        {
                            name: 'endDate',
                            type: 'date',
                            required: true,
                        }
                    ]
                },
                {
                    name: 'meta',
                    label: 'SEO',
                    fields: [
                        OverviewField({
                            titlePath: 'meta.title',
                            descriptionPath: 'meta.description',
                            imagePath: 'meta.image',
                        }),
                        MetaTitleField({
                            hasGenerateFn: true,
                        }),
                        MetaImageField({
                            relationTo: 'media',
                        }),

                        MetaDescriptionField({}),
                        PreviewField({
                            // if the `generateUrl` function is configured
                            hasGenerateFn: true,

                            // field paths to match the target field for data
                            titlePath: 'meta.title',
                            descriptionPath: 'meta.description',
                        }),
                    ],
                }
            ]
        },

        {
            name: 'publishedAt',
            type: 'date',
            admin: {
                date: {
                    pickerAppearance: 'dayAndTime',
                },
                position: 'sidebar',
            },
            // hooks: {
            //     beforeChange: [
            //     ({ siblingData, value }) => {
            //         if (siblingData._status === 'published' && !value) {
            //         return new Date()
            //         }
            //         return value
            //     },
            //     ],
            // },

            // TODO: to see what Ana wouldd like here
        },

        {
            name: 'authors',
            type: 'relationship',
            admin: {
                position: 'sidebar',
            },
            hasMany: true,
            relationTo: 'users',
        },
    ],

    // hooks: {
    //     afterChange: [revalidatePost],
    //     afterRead: [populateAuthors],
    //     afterDelete: [revalidateDelete],
    // },

    // TODO: to see what Ana would like here
    versions: {
    drafts: {
        autosave: {
            interval: 100, // We set this interval for optimal live preview
        },
        schedulePublish: true,
    },
    maxPerDoc: 50,
    },
}