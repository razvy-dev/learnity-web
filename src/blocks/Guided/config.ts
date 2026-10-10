import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { iconPicker } from '@/fields/iconPicker'

export const Guided: Block = {
  slug: 'guided',
  interfaceName: 'Guided',
  fields: [
    {
      name: 'sectionTitle',
      type: 'text',
      defaultValue: 'Guided Learning',
      required: true,
    },
    {
      name: 'sectionDescription',
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
      label: 'Main Image',
    },
    {
      name: 'features',
      type: 'array',
      required: true,
      minRows: 1,
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
        iconPicker({
          overrides: {
            defaultValue: 'bookOpen',
          },
        }),
        {
          name: 'iconColor',
          type: 'select',
          required: true,
          defaultValue: 'blue',
          options: [
            { label: 'Blue', value: 'blue' },
            { label: 'Orange', value: 'orange' },
            { label: 'LightOrange', value: 'lightOrange' },
          ],
        },
        {
          name: 'iconRotation',
          type: 'select',
          required: true,
          defaultValue: 'left',
          options: [
            { label: 'Left (-3deg)', value: 'left' },
            { label: 'Right (3deg)', value: 'right' },
          ],
        },
      ],
    },
    {
      name: 'ctaText',
      type: 'text',
      defaultValue: 'Vezi mai multe',
    },
    {
      name: 'ctaLink',
      type: 'text',
      defaultValue: '/guided-learning',
      label: 'CTA Link',
    },
  ],
}
