import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const Timeline: Block = {
    slug: 'timeline',
    fields: [
        {
            name: 'items',
            type: 'array',
            fields: [
                {
                    name: 'title',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'description',
                    type: 'richText',
                    editor: lexicalEditor({
                        features: ({ rootFeatures }) => {
                            return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()]
                        },
                    }),
                    required: true,
                },
                {
                    name: 'photo',
                    type: 'upload',
                    relationTo: 'media',
                    required: true,
                }
            ]
        }
    ],
    interfaceName: 'Timeline',
}