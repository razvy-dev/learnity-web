import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'

import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { linkGroup } from '../../fields/linkGroup'

const richTextEditor = lexicalEditor({
  features: ({ rootFeatures }) => {
    return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()]
  },
})

export const WhatTheFuture: CollectionConfig<'whatTheFuture'> = {
  slug: 'whatTheFuture',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['heading', 'subtitle', 'updatedAt'],
    useAsTitle: 'heading',
  },
  fields: [
    {
      name: 'badgeText',
      type: 'text',
      label: 'Badge Text',
      admin: {
        description: 'Optional small label shown above the heading.',
      },
    },
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
      required: true,
      defaultValue: 'What The Future',
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Subtitle',
      defaultValue: 'Un eveniment despre carieră, vocație și viitor',
    },
    {
      name: 'description',
      type: 'richText',
      editor: richTextEditor,
      label: 'Short Description',
      admin: {
        description: 'Intro paragraph shown in the "Despre eveniment" card.',
      },
    },
    {
      name: 'longDescription',
      type: 'richText',
      editor: richTextEditor,
      label: 'Long Description',
      admin: {
        description: 'Second paragraph shown in the "Despre eveniment" card.',
      },
    },
    {
      name: 'aboutHeading',
      type: 'text',
      label: 'About Heading',
      defaultValue: 'Despre eveniment',
    },
    {
      name: 'image1',
      type: 'upload',
      relationTo: 'media',
      label: 'Image 1',
      required: true,
      admin: {
        description: 'First image of the event photo carousel.',
      },
    },
    {
      name: 'image2',
      type: 'upload',
      relationTo: 'media',
      label: 'Image 2',
      admin: {
        description: 'Second image of the event photo carousel.',
      },
    },
    {
      name: 'previousImageLabel',
      type: 'text',
      label: 'Previous Image Label',
      defaultValue: 'Imaginea anterioară',
      admin: {
        description: 'Accessible label for the carousel "previous" button.',
      },
    },
    {
      name: 'nextImageLabel',
      type: 'text',
      label: 'Next Image Label',
      defaultValue: 'Imaginea următoare',
      admin: {
        description: 'Accessible label for the carousel "next" button.',
      },
    },
    {
      name: 'detailsHeading',
      type: 'text',
      label: 'Details Heading',
      defaultValue: 'Detalii eveniment',
    },
    {
      name: 'details',
      type: 'array',
      label: 'Event Details',
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'icon',
          type: 'select',
          label: 'Icon',
          required: true,
          defaultValue: 'calendar',
          options: [
            { label: 'Calendar', value: 'calendar' },
            { label: 'Clock', value: 'clock' },
            { label: 'Map Pin', value: 'mapPin' },
            { label: 'Users', value: 'users' },
          ],
        },
        {
          name: 'label',
          type: 'text',
          label: 'Label',
          required: true,
        },
        {
          name: 'value',
          type: 'text',
          label: 'Value',
          required: true,
        },
      ],
      defaultValue: [
        { icon: 'calendar', label: 'Data', value: '7 - 8 iunie 2025' },
        { icon: 'clock', label: 'Program', value: '11:00 - 19:00' },
        { icon: 'mapPin', label: 'Locație', value: 'NOD Makerspace' },
        {
          icon: 'users',
          label: 'Participanți',
          value: 'Locuri limitate (max. 100 participanți)',
        },
      ],
    },
    {
      name: 'featuresHeading',
      type: 'text',
      label: 'Features Heading',
      defaultValue: 'Ce vei experimenta',
    },
    {
      name: 'features',
      type: 'array',
      label: 'Features',
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Text',
          required: true,
        },
      ],
      defaultValue: [
        { text: 'Speakeri din diverse domenii de interes' },
        { text: 'Workshop-uri și panel-uri despre carieră și vocație' },
        { text: 'Networking cu profesioniști' },
        { text: 'Discuții cu oameni faini care să te inspire' },
        { text: 'Certificate de participare' },
        { text: 'Răspunsul la anxietățile tale legate de viitor' },
      ],
    },
    linkGroup({
      appearances: false,
      overrides: {
        maxRows: 2,
        label: 'Call to Action',
        admin: {
          description:
            'Primary button is the first link, the outlined secondary button is the second. Both should point to /guided-learning/what-the-future.',
        },
        defaultValue: [
          {
            link: {
              type: 'custom',
              url: '/guided-learning/what-the-future',
              label: 'Înscrie-te acum',
            },
          },
          {
            link: {
              type: 'custom',
              url: '/guided-learning/what-the-future',
              label: 'Află mai multe detalii',
            },
          },
        ],
      },
    }),
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
        position: 'sidebar',
      },
    },
  ],
  versions: {
    drafts: {
      autosave: {
        interval: 100,
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
}
