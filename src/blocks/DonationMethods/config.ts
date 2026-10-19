import type { Block } from 'payload'

import { iconPicker } from '@/fields/iconPicker'
import { link } from '@/fields/link'
import { linkGroup } from '@/fields/linkGroup'

export const DonationMethods: Block = {
  slug: 'donationMethods',
  interfaceName: 'DonationMethodsBlock',
  labels: {
    singular: 'Donation Methods',
    plural: 'Donation Methods Sections',
  },
  fields: [
    {
      name: 'badgeText',
      type: 'text',
      label: 'Badge Text',
      defaultValue: 'Susține Learnity',
      admin: {
        description: 'Optional small eyebrow label shown above the heading.',
      },
    },
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
      required: true,
      defaultValue: 'Modalități de Donație',
    },
    {
      name: 'sectionDescription',
      type: 'textarea',
      label: 'Section Description',
      defaultValue:
        'Alege metoda preferată pentru a susține misiunea noastră de a transforma educația și a crea oportunități pentru tineri.',
    },
    {
      name: 'methods',
      type: 'array',
      label: 'Donation Methods',
      required: true,
      minRows: 1,
      maxRows: 4,
      admin: {
        initCollapsed: true,
      },
      defaultValue: [
        {
          title: 'Donează prin Stripe',
          description:
            'Donează rapid și sigur folosind cardul tău prin platforma Stripe. Procesul este simplu, securizat și poți alege să faci o donație unică sau recurentă.',
          icon: 'handshake',
          variant: 'blue',
          bullets: [
            { text: 'Plată sigură și criptată' },
            { text: 'Primești confirmare pe email' },
            { text: 'Opțiuni pentru donații recurente' },
          ],
          link: {
            type: 'custom',
            newTab: true,
            url: 'https://buy.stripe.com/3cscNI4ly6ld90I3cf',
            label: 'Donează cu Stripe',
          },
        },
        {
          title: 'Alte Modalități de Donație',
          description:
            'Preferă o altă metodă de plată? Poți susține proiectele noastre educaționale și prin alte modalități, inclusiv transfer bancar sau donații în natură.',
          icon: 'heart',
          variant: 'orange',
          bullets: [
            { text: 'Transfer bancar direct' },
            { text: 'Donații de echipamente sau materiale' },
            { text: 'Sponsorizări și parteneriate' },
          ],
          link: {
            type: 'custom',
            newTab: true,
            url: '#alternative-link-here',
            label: 'Alte Modalități',
          },
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
          required: true,
        },
        {
          name: 'bullets',
          type: 'array',
          label: 'Checklist',
          admin: {
            initCollapsed: true,
            description: 'One-line reassurance items shown with a check icon.',
          },
          fields: [
            {
              name: 'text',
              type: 'text',
              required: true,
            },
          ],
        },
        iconPicker({
          overrides: {
            required: false,
            defaultValue: 'handshake',
          },
        }),
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Header Image',
          admin: {
            description: 'Optional. Replaces the icon in the coloured card header.',
          },
        },
        {
          name: 'variant',
          type: 'select',
          defaultValue: 'blue',
          label: 'Header Colour',
          options: [
            { label: 'Teal', value: 'blue' },
            { label: 'Orange', value: 'orange' },
          ],
        },
        link({
          appearances: false,
          overrides: {
            label: 'Card Button',
          },
        }),
      ],
    },
    {
      name: 'corporate',
      type: 'group',
      label: 'Corporate Donations',
      fields: [
        iconPicker({
          overrides: {
            required: false,
            defaultValue: 'shield',
          },
        }),
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          defaultValue: 'Donații Corporative și Parteneriate',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
          defaultValue:
            'Companiile pot deveni parteneri în misiunea noastră de a transforma educația. Oferim diverse pachete de sponsorizare și posibilitatea de a personaliza implicarea în funcție de valorile și obiectivele companiei tale.',
        },
        linkGroup({
          appearances: false,
          overrides: {
            maxRows: 2,
            label: 'Corporate Buttons',
            defaultValue: [
              {
                link: {
                  type: 'custom',
                  url: 'mailto:contact@learnity.ro',
                  label: 'Contactează-ne',
                },
              },
              {
                link: {
                  type: 'custom',
                  url: '/corporate-partnerships',
                  label: 'Descarcă Broșura',
                },
              },
            ],
          },
        }),
      ],
    },
  ],
}
