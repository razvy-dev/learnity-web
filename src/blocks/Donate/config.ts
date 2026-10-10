import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { link } from '@/fields/link'
import { linkGroup } from '@/fields/linkGroup'
import { lexicalEditorState } from '@/utilities/lexical'

export const Donate: Block = {
  slug: 'donate',
  interfaceName: 'DonateBlock',
  labels: {
    plural: 'Donation CTAs',
    singular: 'Donation CTA',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      defaultValue: 'Susține Educația pentru Viitorul Tinerilor',
      label: 'Heading',
    },
    {
      name: 'richText',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()]
        },
      }),
      label: 'Description',
      defaultValue: lexicalEditorState(
        'Fiecare donație, indiferent de mărime, contribuie la crearea unui viitor mai bun pentru tinerii din România. Alătură-te misiunii noastre de a transforma educația!',
      ),
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
      name: 'amounts',
      type: 'array',
      admin: {
        description: 'Optional preset amount chips. Each chip links to its own donation page.',
        initCollapsed: true,
      },
      fields: [
        {
          name: 'amount',
          type: 'text',
          required: true,
          label: 'Amount',
          admin: {
            description: 'Chip label, e.g. "50 lei".',
          },
        },
        link({
          appearances: false,
          overrides: {
            label: 'Donation link',
          },
        }),
      ],
      label: 'Donation Amounts',
      maxRows: 4,
    },
    {
      name: 'trustText',
      type: 'text',
      label: 'Trust Note',
      admin: {
        description: 'Optional reassurance note shown below the CTAs.',
      },
      defaultValue: 'Donațiile sunt deductibile fiscal',
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
