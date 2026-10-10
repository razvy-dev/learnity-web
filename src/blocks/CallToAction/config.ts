import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { linkGroup } from '../../fields/linkGroup'

export const CallToAction: Block = {
  slug: 'cta',
  interfaceName: 'CallToActionBlock',
  labels: {
    plural: 'Calls to Action',
    singular: 'Call to Action',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
      defaultValue: 'Hai să facem parte din Learnity',
      admin: {
        description: 'Big display headline shown at the top of the section.',
      },
    },
    {
      name: 'richText',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
      label: 'Description',
    },
    {
      name: 'badgeText',
      type: 'text',
      label: 'Badge Text',
      admin: {
        description: 'Optional small label shown above the heading.',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Image',
      admin: {
        description:
          'Optional image. When set, the text and image are shown side by side; otherwise the content is centered.',
      },
    },
    {
      name: 'variant',
      type: 'select',
      defaultValue: 'teal',
      label: 'Background Variant',
      options: [
        { label: 'Teal', value: 'teal' },
        { label: 'Orange', value: 'orange' },
        { label: 'Dark', value: 'dark' },
        { label: 'Cream', value: 'cream' },
      ],
    },
    {
      name: 'alignment',
      type: 'select',
      defaultValue: 'center',
      label: 'Alignment',
      options: [
        { label: 'Center', value: 'center' },
        { label: 'Left', value: 'left' },
      ],
      admin: {
        description: 'Only applies when no image is selected.',
      },
    },
    {
      name: 'showDecorations',
      type: 'checkbox',
      defaultValue: true,
      label: 'Show Decorations',
      admin: {
        description: 'Show animated floating shapes and icons in the background.',
      },
    },
    linkGroup({
      appearances: false,
      overrides: {
        maxRows: 2,
      },
    }),
  ],
}
