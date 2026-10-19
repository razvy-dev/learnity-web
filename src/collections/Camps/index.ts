import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'

import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { iconPicker } from '../../fields/iconPicker'
import { linkGroup } from '../../fields/linkGroup'
import { lexicalEditorState } from '../../utilities/lexical'

export const Camps: CollectionConfig<'camps'> = {
  slug: 'camps',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['title', 'dates', 'location', 'updatedAt'],
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'badgeText',
      type: 'text',
      label: 'Badge Text',
      defaultValue: 'Dare Yourself',
      admin: {
        description: 'Optional small eyebrow label shown above the heading.',
      },
    },
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
      required: true,
      defaultValue: 'Tabăra de Vară',
      admin: {
        description: 'Big display headline shown at the top of the section.',
      },
    },
    {
      name: 'sectionSubtitle',
      type: 'text',
      label: 'Section Subtitle',
      defaultValue: 'O experiență de neuitat în inima naturii',
    },
    {
      name: 'title',
      type: 'text',
      label: 'Camp Title',
      required: true,
      defaultValue: 'Dare Yourself',
      admin: {
        description: 'Camp title shown over the image.',
      },
    },
    {
      name: 'titleSubtitle',
      type: 'text',
      label: 'Camp Subtitle',
      defaultValue: 'Tabăra Learnity care îți activează curajul și vocea interioară',
      admin: {
        description: 'Short line shown under the camp title on the image.',
      },
    },
    {
      name: 'description',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()]
        },
      }),
      label: 'Description',
      required: true,
      defaultValue: lexicalEditorState(
        'Vara asta, Learnity te provoacă să te descoperi cu adevărat. Dare Yourself este o tabără de dezvoltare personală pentru liceeni curajoși, dornici să-și descopere vocea, să-și înțeleagă emoțiile și să devină schimbarea pe care o vor în lume.',
        'Timp de o săptămână, vei fi înconjurat de oameni ca tine – care caută sens, autenticitate și conexiune. Vei explora ce înseamnă să te înțelegi pe tine, să relaționezi sănătos cu ceilalți, să îți depășești fricile și să te implici în ceea ce contează cu adevărat.',
        'Este o tabără care îmbină jocul, introspecția, provocările și comunitatea, într-un proces ghidat de o echipă de psihologi cu experiență.',
      ),
    },
    {
      name: 'age',
      type: 'text',
      label: 'Age Group',
      defaultValue: '14-18 ani',
      admin: {
        description: 'Badge shown on the image, e.g. "14-18 ani".',
      },
    },
    {
      name: 'dates',
      type: 'text',
      label: 'Dates',
      defaultValue: '17-23 August 2025',
    },
    {
      name: 'datesNote',
      type: 'text',
      label: 'Dates Note',
      defaultValue: '7 zile / 6 nopți',
      admin: {
        description: 'Small line under the dates.',
      },
    },
    {
      name: 'location',
      type: 'text',
      label: 'Location',
      defaultValue: 'Predeluț, Bran',
    },
    {
      name: 'locationNote',
      type: 'text',
      label: 'Location Note',
      defaultValue: 'Locație premium',
      admin: {
        description: 'Small line under the location.',
      },
    },
    {
      name: 'price',
      type: 'text',
      label: 'Price',
      defaultValue: '2100 RON',
    },
    {
      name: 'priceNote',
      type: 'text',
      label: 'Price Note',
      defaultValue: 'Preț',
      admin: {
        description: 'Small line under the price.',
      },
    },
    {
      name: 'featuresTitle',
      type: 'text',
      label: 'Features Title',
      defaultValue: 'Ce include tabăra:',
    },
    {
      name: 'features',
      type: 'array',
      label: 'Features',
      required: true,
      minRows: 1,
      admin: {
        description: 'Highlight bullets shown in the "Ce include tabăra" list.',
      },
      defaultValue: [
        {
          title: 'Ateliere de autocunoaștere și explorare emoțională',
          icon: 'brain',
        },
        {
          title: 'Recunoașterea valorilor și setarea limitelor sănătoase',
          icon: 'target',
        },
        {
          title: 'Activități creative care te scot din zona de confort',
          icon: 'palette',
        },
        {
          title: 'Explorarea curajului și a resurselor interioare',
          icon: 'compass',
        },
        {
          title: 'Construirea unei comunități autentice și empatice',
          icon: 'users',
        },
        {
          title: 'Dezvoltarea conexiunii prin ascultare și susținere reciprocă',
          icon: 'messagesSquare',
        },
      ],
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
          admin: {
            description: 'Optional extra line shown under the bullet title.',
          },
        },
        iconPicker({
          overrides: {
            required: false,
            defaultValue: 'star',
          },
        }),
      ],
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Image',
      required: true,
      admin: {
        description: 'Photo shown on the left side of the camp card.',
      },
    },
    linkGroup({
      appearances: false,
      overrides: {
        maxRows: 2,
        label: 'Call to Action',
        admin: {
          description:
            'Primary button is the first link, the outlined secondary button is the second.',
        },
        defaultValue: [
          {
            link: {
              type: 'custom',
              url: '/dare-yourself-form',
              label: 'Înscrie-te acum',
            },
          },
          {
            link: {
              type: 'custom',
              url: '/dare-yourself',
              label: 'Detalii complete',
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
