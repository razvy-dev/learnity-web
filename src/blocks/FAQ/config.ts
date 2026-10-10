import type { Block } from 'payload'

import { iconPicker } from '@/fields/iconPicker'
import { linkGroup } from '@/fields/linkGroup'

export const FAQ: Block = {
  slug: 'faq',
  interfaceName: 'FAQ',
  labels: {
    singular: 'FAQ',
    plural: 'FAQ Sections',
  },
  fields: [
    {
      name: 'badgeText',
      type: 'text',
      defaultValue: 'Întrebări și Răspunsuri',
    },
    {
      name: 'sectionTitle',
      type: 'text',
      required: true,
      defaultValue: 'Întrebări Frecvente',
    },
    {
      name: 'sectionDescription',
      type: 'textarea',
      defaultValue:
        'Află răspunsuri la cele mai comune întrebări despre Learnity, metodele noastre de predare și comunitatea noastră.',
    },
    {
      name: 'searchPlaceholder',
      type: 'text',
      defaultValue: 'Caută întrebări...',
    },
    {
      name: 'noResultsText',
      type: 'text',
      defaultValue: 'Nu am găsit întrebări care să corespundă căutării tale.',
    },
    {
      name: 'categories',
      type: 'array',
      label: 'Categories',
      required: true,
      minRows: 1,
      labels: {
        singular: 'Category',
        plural: 'Categories',
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        iconPicker(),
        {
          name: 'questions',
          type: 'array',
          label: 'Questions',
          required: true,
          minRows: 1,
          labels: {
            singular: 'Question',
            plural: 'Questions',
          },
          fields: [
            {
              name: 'question',
              type: 'text',
              required: true,
            },
            {
              name: 'answer',
              type: 'textarea',
              required: true,
            },
          ],
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Contact call to action',
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'ctaTitle',
          type: 'text',
          defaultValue: 'Nu ai găsit răspunsul căutat?',
        },
        {
          name: 'ctaDescription',
          type: 'textarea',
          defaultValue:
            'Suntem aici să răspundem la toate întrebările tale. Contactează-ne direct și îți vom răspunde cât mai curând posibil.',
        },
        linkGroup({
          appearances: false,
          overrides: {
            maxRows: 2,
          },
        }),
      ],
    },
  ],
}
