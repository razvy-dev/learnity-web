import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

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
        {
          name: 'icon',
          type: 'select',
          required: true,
          defaultValue: 'bookOpen',
          options: [
            { label: 'BookOpen', value: 'bookOpen' },
            { label: 'Lightbulb', value: 'lightbulb' },
            { label: 'Target', value: 'target' },
            { label: 'Sparkles', value: 'sparkles' },
            { label: 'Star', value: 'star' },
            { label: 'Heart', value: 'heart' },
            { label: 'Users', value: 'users' },
            { label: 'Shield', value: 'shield' },
            { label: 'ArrowRight', value: 'arrowRight' },
            { label: 'Play', value: 'play' },
            { label: 'Award', value: 'award' },
            { label: 'CheckCircle', value: 'checkCircle' },
          ],
        },
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
