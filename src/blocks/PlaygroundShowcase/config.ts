import type { Block } from 'payload'

import { linkGroup } from '@/fields/linkGroup'

export const PlaygroundShowcase: Block = {
  slug: 'playgroundShowcase',
  interfaceName: 'PlaygroundShowcaseBlock',
  labels: {
    singular: 'Playground Showcase',
    plural: 'Playground Showcase Sections',
  },
  fields: [
    {
      name: 'badge',
      type: 'text',
      label: 'Badge',
      admin: {
        description: 'Optional small eyebrow label shown above the section title.',
      },
    },
    {
      name: 'sectionTitle',
      type: 'text',
      label: 'Section Title',
      required: true,
      defaultValue: 'Learning Experiences',
    },
    {
      name: 'sectionDescription',
      type: 'textarea',
      label: 'Section Description',
      defaultValue:
        'In Playground, elevii au oportunitatea de a-si lua invatarea in propriile maini, fie prin a deveni ei profi si a sustine workshop-uri sau prin a organiza evenimente alaturi de alti learnitasi pentru restul comunitatii, toate acestea sub ghidajul si indrumarea noastra',
    },
    {
      name: 'tabs',
      type: 'array',
      label: 'Tabs',
      required: true,
      minRows: 1,
      labels: {
        singular: 'Tab',
        plural: 'Tabs',
      },
      admin: {
        description:
          'Each tab automatically pulls its cards from a Playground collection (Workshops, Autonomous Groups, Events, Courses).',
      },
      defaultValue: [
        { label: 'Workshop-uri', source: 'workshops' },
        { label: 'Grupuri', source: 'autonomousGroups' },
        { label: 'Evenimente', source: 'events' },
        { label: 'Cursuri', source: 'courses' },
      ],
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Tab Label',
          required: true,
        },
        {
          name: 'source',
          type: 'select',
          label: 'Content Source',
          required: true,
          defaultValue: 'workshops',
          options: [
            { label: 'Playground Workshops', value: 'workshops' },
            { label: 'Autonomous Groups', value: 'autonomousGroups' },
            { label: 'Events', value: 'events' },
            { label: 'Courses', value: 'courses' },
          ],
        },
        {
          name: 'limit',
          type: 'number',
          label: 'Max Items',
          defaultValue: 3,
          min: 1,
          max: 12,
          admin: {
            description: 'How many of the latest documents to show in this tab.',
          },
        },
      ],
    },
    linkGroup({
      appearances: false,
      overrides: {
        maxRows: 1,
        label: 'Section CTA',
        admin: {
          description: 'Optional button shown below the cards.',
        },
      },
    }),
  ],
}
