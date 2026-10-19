import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { linkGroup } from '@/fields/linkGroup'
import { lexicalEditorState } from '@/utilities/lexical'

export const WhySupport: Block = {
  slug: 'whySupport',
  interfaceName: 'WhySupportBlock',
  labels: {
    plural: 'Why Support Sections',
    singular: 'Why Support Section',
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
      defaultValue: 'De ce să susții educația?',
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
      label: 'Body',
      defaultValue: lexicalEditorState(
        'În ultima vreme, fiecare discuție despre situația social-economică și politică din România și din lume pare să se încheie cu aceeași concluzie:',
        '„Totul pleacă de la educație."',
        'Dacă ne-am cunoaște mai bine istoria, poate nu am repeta-o, crezând orbește că extremismul este soluția radicală de care avem nevoie.',
        'Dacă am învăța să gândim critic, în loc să memorăm mecanic orice informație ni se livrează, poate nu am cădea atât de ușor pradă manipulării și dezinformării.',
        'Dacă ne-ar fi cultivată încrederea în noi înșine, creativitatea și unicitatea, în loc să fim forțați să ne încadrăm în standarde rigide, poate am înțelege că schimbarea depinde de noi.',
        'Și, chiar dacă poate suna clișeic, generația aceasta este viitorul. Așadar, dacă nu investim în ea, atunci în ce?',
      ),
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Image',
      admin: {
        description: 'Image shown on the left side, with the quote overlaid on its bottom edge.',
      },
    },
    {
      name: 'quoteText',
      type: 'textarea',
      label: 'Quote Text',
      defaultValue:
        '"Educația este cea mai puternică armă pe care o puteți folosi pentru a schimba lumea."',
      admin: {
        description: 'Quote overlaid on the image. Leave empty to hide it.',
      },
    },
    {
      name: 'quoteAuthor',
      type: 'text',
      label: 'Quote Author',
      defaultValue: 'Nelson Mandela',
      admin: {
        description: 'Rendered after an em dash, below the quote.',
      },
    },
    {
      name: 'highlights',
      type: 'array',
      label: 'Highlights',
      admin: {
        description:
          'Optional highlight/stat items shown in the light blue callout box below the section.',
      },
      fields: [
        {
          name: 'value',
          type: 'text',
          label: 'Value',
          admin: {
            description: 'Optional short stat or headline, e.g. "100%". Leave empty for plain text.',
          },
        },
        {
          name: 'text',
          type: 'textarea',
          label: 'Text',
          required: true,
        },
      ],
      defaultValue: [
        {
          text: 'Vrem să le oferim adolescenților un spațiu în care să fie ei înșiși, unde părerea și emoțiile lor contează, unde sunt liberi să ia decizii în funcție de propriile nevoi. Un loc în care pot învăța orice își doresc într-un mod aplicat și distractiv, în care se susțin unii pe ceilalți și creează conexiuni autentice.',
        },
        {
          text: 'Lucrând cu tinerii și fiind, la rândul nostru, la început de drum, am realizat cât de important este să îi ascultăm și să avem încredere în ei. Au atât de multe lucruri de spus, atât de multă energie și dorință de implicare!',
        },
      ],
    },
    linkGroup({
      appearances: false,
      overrides: {
        maxRows: 2,
      },
    }),
  ],
}
