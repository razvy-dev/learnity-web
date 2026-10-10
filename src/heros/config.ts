import type { Condition, Field } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { iconPicker } from '@/fields/iconPicker'
import { linkGroup } from '@/fields/linkGroup'
import { lexicalEditorState } from '@/utilities/lexical'

const isHighImpact: Condition = (_data, siblingData) => siblingData?.type === 'highImpact'
const isMediumImpact: Condition = (_data, siblingData) => siblingData?.type === 'mediumImpact'
const isLowImpact: Condition = (_data, siblingData) => siblingData?.type === 'lowImpact'
const isDonate: Condition = (_data, siblingData) => siblingData?.type === 'donate'
const isDonateOrMediumImpact: Condition = (_data, siblingData) =>
  siblingData?.type === 'donate' || siblingData?.type === 'mediumImpact'
const isNotHighImpact: Condition = (_data, siblingData) => siblingData?.type !== 'highImpact'

export const hero: Field = {
  name: 'hero',
  type: 'group',
  fields: [
    {
      name: 'type',
      type: 'select',
      defaultValue: 'lowImpact',
      label: 'Type',
      options: [
        {
          label: 'None',
          value: 'none',
        },
        {
          label: 'High Impact',
          value: 'highImpact',
        },
        {
          label: 'Medium Impact',
          value: 'mediumImpact',
        },
        {
          label: 'Low Impact',
          value: 'lowImpact',
        },
        {
          label: 'Donate',
          value: 'donate',
        },
      ],
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      admin: {
        condition: isHighImpact,
        description: 'The animated hero title. Every letter "a" is replaced by the spinning logo.',
      },
      defaultValue: 'Learnity',
      label: 'Title',
    },
    {
      name: 'subtitle',
      type: 'textarea',
      admin: {
        condition: isHighImpact,
      },
      defaultValue:
        'Learnity: o comunitate democratică de învățare alternativă pentru adolescenți, locul în care aceștia descoperă cine sunt, dezvoltă relații autentice cu ceilalți și învață despre mediul în care trăiesc.',
      label: 'Subtitle',
    },
    {
      name: 'ctaLabel',
      type: 'text',
      admin: {
        condition: isHighImpact,
        description: 'Button label. Scrolls visitors to the contact section below.',
      },
      defaultValue: 'Vezi mai mult',
      label: 'Call to action label',
    },
    {
      name: 'contact',
      type: 'group',
      admin: {
        condition: isHighImpact,
        description: 'Contact details and social links are managed in the Socials global.',
      },
      fields: [
        {
          name: 'heading',
          type: 'text',
          defaultValue: 'Contactează-ne',
          label: 'Heading',
        },
      ],
      label: 'Contact',
    },
    {
      name: 'heading',
      type: 'text',
      admin: {
        condition: isDonateOrMediumImpact,
        description: 'Main headline shown next to the hero image.',
      },
      defaultValue: 'Guided Learning',
      label: 'Heading',
    },
    {
      name: 'description',
      type: 'richText',
      admin: {
        condition: isDonateOrMediumImpact,
      },
      defaultValue: lexicalEditorState(
        'Partea din Learnity care oferă experiențe de învățare precum cursuri și workshop-uri susținute de profesioniști. Acestea diferă de educația formală prin modul de predare cât mai practic și atractiv, lipsa temelor obligatorii sau activităților impuse și relația de egalitate dintre profesori și elevi.',
      ),
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()]
        },
      }),
      label: 'Description',
    },
    {
      name: 'image',
      type: 'upload',
      admin: {
        condition: isDonateOrMediumImpact,
        description: 'Main framed image of the hero.',
      },
      label: 'Main Image',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'floatingImage',
      type: 'upload',
      admin: {
        condition: isMediumImpact,
        description: 'Optional smaller image that floats over the main image.',
      },
      label: 'Floating Image',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'badgeText',
      type: 'text',
      admin: {
        condition: isDonateOrMediumImpact,
        description: 'Optional badge shown over the hero image.',
      },
      label: 'Badge Text',
    },
    {
      name: 'imagePosition',
      type: 'select',
      admin: {
        condition: isDonateOrMediumImpact,
        description: 'Which side the image is displayed on.',
      },
      defaultValue: 'left',
      label: 'Image Position',
      options: [
        { label: 'Left', value: 'left' },
        { label: 'Right', value: 'right' },
      ],
    },
    {
      name: 'features',
      type: 'array',
      admin: {
        condition: isMediumImpact,
        description: 'Optional highlight cards shown below the text (e.g. Cursuri, Workshop-uri).',
        initCollapsed: true,
      },
      labels: {
        singular: 'Highlight',
        plural: 'Highlights',
      },
      maxRows: 4,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        iconPicker({
          overrides: {
            defaultValue: 'bookOpen',
          },
        }),
      ],
    },
    {
      name: 'backgroundColor',
      type: 'select',
      admin: {
        condition: isDonateOrMediumImpact,
      },
      defaultValue: 'lightBlue',
      label: 'Background Color',
      options: [
        { label: 'Light Blue', value: 'lightBlue' },
        { label: 'Cream', value: 'cream' },
        { label: 'White', value: 'white' },
      ],
    },
    {
      name: 'showDecorations',
      type: 'checkbox',
      admin: {
        condition: isDonateOrMediumImpact,
        description: 'Show animated floating shapes and icons in the background.',
      },
      defaultValue: true,
      label: 'Show Decorations',
    },
    {
      name: 'stats',
      type: 'array',
      admin: {
        condition: isDonate,
        description: 'Impact numbers shown next to the heading (e.g. "100 Tineri sprijiniți").',
        initCollapsed: true,
      },
      labels: {
        singular: 'Stat',
        plural: 'Stats',
      },
      maxRows: 3,
      fields: [
        {
          name: 'value',
          type: 'text',
          required: true,
          label: 'Value',
        },
        {
          name: 'label',
          type: 'text',
          required: true,
          label: 'Label',
        },
      ],
    },
    {
      name: 'floatingText',
      type: 'text',
      admin: {
        condition: isDonate,
        description: 'Rotating badge floating over the hero image.',
      },
      defaultValue: 'Împreună facem diferența!',
      label: 'Floating Badge Text',
    },
    {
      name: 'goalLabel',
      type: 'text',
      admin: {
        condition: isDonate,
        description: 'Label of the donation progress card floating over the image.',
      },
      defaultValue: 'Obiectiv 2025 · 100 de tineri',
      label: 'Goal Label',
    },
    {
      name: 'goalProgress',
      type: 'number',
      admin: {
        condition: isDonate,
        description: 'Progress percentage (0-100) shown on the donation progress card.',
      },
      defaultValue: 45,
      label: 'Goal Progress',
      min: 0,
      max: 100,
    },
    {
      name: 'waveDivider',
      type: 'checkbox',
      admin: {
        condition: isMediumImpact,
        description: 'Show a wavy divider at the bottom of the hero.',
      },
      defaultValue: true,
      label: 'Wave Divider',
    },
    {
      name: 'richText',
      type: 'richText',
      admin: {
        condition: isLowImpact,
      },
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
      label: false,
    },
    linkGroup({
      appearances: false,
      overrides: {
        maxRows: 2,
        admin: {
          condition: isNotHighImpact,
          initCollapsed: true,
        },
      },
    }),
  ],
  label: false,
}
