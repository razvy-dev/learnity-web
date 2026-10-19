import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { iconPicker } from '@/fields/iconPicker'
import { linkGroup } from '@/fields/linkGroup'
import { lexicalEditorState } from '@/utilities/lexical'

export const Objectives: Block = {
  slug: 'objectives',
  interfaceName: 'ObjectivesBlock',
  labels: {
    plural: 'Objectives Sections',
    singular: 'Objectives',
  },
  fields: [
    {
      name: 'badgeText',
      type: 'text',
      label: 'Badge Text',
      admin: {
        description: 'Optional small eyebrow label shown above the heading.',
      },
    },
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
      required: true,
      defaultValue: 'Obiectivele noastre pentru 2025',
      admin: {
        description: 'Big display headline shown at the top of the section.',
      },
    },
    {
      name: 'sectionDescription',
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
      defaultValue: lexicalEditorState(
        'Cu ajutorul donațiilor tale, putem transforma educația și crea oportunități pentru tinerii din România.',
      ),
    },
    {
      name: 'objectives',
      type: 'array',
      label: 'Objectives',
      required: true,
      minRows: 1,
      labels: {
        singular: 'Objective',
        plural: 'Objectives',
      },
      admin: {
        initCollapsed: true,
        description: 'One card per objective. Images must be uploaded to the media library.',
      },
      defaultValue: [
        {
          title: 'Acces la educație pentru comunități defavorizate',
          description:
            'Inspirate de experiența noastră în Brazilia, ne dorim să lansăm un proiect destinat adolescenților din medii vulnerabile, oferindu-le oportunități educaționale și mentorat.',
          target: 'Obiectiv: 100 de tineri în 2025',
          icon: 'users',
          color: 'blue',
        },
        {
          title: '„Susține un Learnitaș" – Burse pentru elevi',
          description:
            'Prin această inițiativă, oferim burse finanțate din donații, astfel încât educația alternativă să fie accesibilă tuturor celor care își doresc să crească alături de noi.',
          target: 'Obiectiv: 50 de burse în 2025',
          icon: 'bookOpen',
          color: 'orange',
        },
        {
          title: '„The Outside World" – Conectarea tinerilor cu lumea reală',
          description:
            'Oferim elevilor experiențe practice prin colaborări cu ONG-uri și companii - internshipuri, vizite și voluntariat pentru a explora domeniile care îi pasionează.',
          target: 'Obiectiv: 20 de parteneriate în 2025',
          icon: 'sparkles',
          color: 'lightOrange',
        },
      ],
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
          admin: {
            description: 'Short paragraph shown under the card title.',
          },
        },
        {
          name: 'target',
          type: 'text',
          label: 'Target / Value',
          admin: {
            description: 'Highlighted goal line, e.g. "Obiectiv: 100 de tineri în 2025".',
          },
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Image',
          admin: {
            description:
              'Card photo (shown cropped in a 48 height banner). Suggested alt texts — 1: "Copii din comunități defavorizate", 2: "Elevi la cursuri Learnity", 3: "Tineri în experiențe practice".',
          },
        },
        iconPicker({
          overrides: {
            required: false,
            defaultValue: 'users',
          },
        }),
        {
          name: 'color',
          type: 'select',
          label: 'Accent Color',
          defaultValue: 'blue',
          options: [
            { label: 'Blue', value: 'blue' },
            { label: 'Light Blue', value: 'lightBlue' },
            { label: 'Orange', value: 'orange' },
            { label: 'Light Orange', value: 'lightOrange' },
            { label: 'Black', value: 'black' },
            { label: 'Cream', value: 'white' },
          ],
          admin: {
            description:
              'Site palette color used for the icon badge and the target line. Blue/Orange/Black get white icons, light colors get dark icons.',
          },
        },
      ],
    },
    {
      name: 'footerText',
      type: 'textarea',
      label: 'Closing Text',
      defaultValue:
        'Pentru a face toate acestea posibile, avem nevoie de sprijinul comunității. Poți contribui printr-o donație, parteneriate sau promovând inițiativele noastre. Orice ajutor contează!',
      admin: {
        description: 'Optional paragraph shown below the cards, above the call to action.',
      },
    },
    linkGroup({
      appearances: false,
      overrides: {
        maxRows: 1,
        label: 'Call to Action',
        admin: {
          description: 'Optional button shown at the bottom of the section.',
        },
        defaultValue: [
          {
            link: {
              type: 'custom',
              url: '#donate-section',
              label: 'Vreau să Susțin',
            },
          },
        ],
      },
    }),
  ],
}
