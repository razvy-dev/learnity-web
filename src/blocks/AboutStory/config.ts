import type { Block } from 'payload'

import { FixedToolbarFeature, InlineToolbarFeature, lexicalEditor } from '@payloadcms/richtext-lexical'

import { linkGroup } from '../../fields/linkGroup'
import { lexicalEditorState } from '@/utilities/lexical'

export const AboutStory: Block = {
  slug: 'aboutStory',
  interfaceName: 'AboutStoryBlock',
  labels: {
    singular: 'About Story',
    plural: 'About Story Sections',
  },
  fields: [
    {
      name: 'badgeText',
      type: 'text',
      label: 'Badge Text',
      defaultValue: 'Povestea noastră',
      admin: {
        description: 'Optional small label shown above the heading.',
      },
    },
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
      required: true,
      defaultValue: 'Despre Learnity',
      admin: {
        description: 'Big display headline shown at the top of the section.',
      },
    },
    {
      name: 'subheading',
      type: 'text',
      label: 'Subheading',
      defaultValue: 'Cum a început?',
      admin: {
        description: 'Secondary heading shown below the main heading.',
      },
    },
    {
      name: 'story',
      type: 'richText',
      label: 'Story',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()]
        },
      }),
      required: true,
      defaultValue: lexicalEditorState(
        'În Universitatea Alternativă, în cadrul ”Incubatorului de Afaceri”, Silvia Chirnogeanu și Paul Crăciun creionează și mai apoi fondează Learnity.',
        'Comunitatea se formează, crește, apar proiecte conexe precum taberele și diverse evenimente cu focus pe educație, atât pentru elevi cât și pentru părinți și cadre didactice.',
      ),
    },
    {
      name: 'founders',
      type: 'text',
      label: 'Founders / Signature',
      defaultValue: 'Silvia Chirnogeanu & Paul Crăciun',
      admin: {
        description: 'Founder name(s) shown as a signature under the story.',
      },
    },
    {
      name: 'quote',
      type: 'text',
      label: 'Quote',
      admin: {
        description: 'Optional pull-quote shown under the founders signature.',
      },
      defaultValue:
        'Vrem să ne retragem din Learnity - ori îl închidem, ori îl preluați voi.',
    },
    {
      name: 'images',
      type: 'array',
      label: 'Story Images',
      required: true,
      minRows: 1,
      maxRows: 6,
      labels: {
        singular: 'Image',
        plural: 'Images',
      },
      admin: {
        description:
          'The first photo is shown next to the story. Every following photo becomes its own alternating chapter of the section.',
      },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          label: 'Chapter Title',
          admin: {
            description: 'Optional heading for this chapter (only used from the second photo on).',
          },
        },
        {
          name: 'caption',
          type: 'text',
          label: 'Caption',
          admin: {
            description:
              'Optional text shown next to the photo (chapter body from the second photo on).',
          },
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
