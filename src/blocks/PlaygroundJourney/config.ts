import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { linkGroup } from '@/fields/linkGroup'

export const PlaygroundJourney: Block = {
  slug: 'playgroundJourney',
  interfaceName: 'PlaygroundJourney',
  labels: {
    singular: 'Playground Journey',
    plural: 'Playground Journey Sections',
  },
  fields: [
    {
      name: 'areas',
      type: 'array',
      required: true,
      minRows: 1,
      labels: {
        singular: 'Area',
        plural: 'Areas',
      },
      fields: [
        {
          name: 'name',
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
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'color',
          type: 'select',
          required: true,
          defaultValue: 'customWhite',
          options: [
            { label: 'Cream', value: 'customWhite' },
            { label: 'Orange', value: 'customOrange' },
          ],
        },
        {
          name: 'badgeText',
          type: 'text',
          label: 'Badge Text',
          defaultValue: 'Explore',
        },
        {
          name: 'ctaLabel',
          type: 'text',
          label: 'CTA Label',
          defaultValue: 'Discover',
        },
        linkGroup({
          appearances: false,
          overrides: {
            maxRows: 1,
          },
        }),
      ],
    },
  ],
}
