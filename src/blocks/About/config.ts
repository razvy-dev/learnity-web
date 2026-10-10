import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { linkGroup } from '../../fields/linkGroup'
import { lexicalEditorState } from '@/utilities/lexical'

export const About: Block = {
  slug: 'about',
  interfaceName: 'About',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Ce este Learnity?',
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
      defaultValue: lexicalEditorState(
        'Misiunea noastră este să ghidăm fiecare adolescent să devină un adult care se cunoaște pe el însuși, își urmează pasiunile și contribuie la o lume mai bună. Credem că orice schimbare începe din interior – odată ce se descoperă pe sine, poate apoi să creeze un impact real în jurul lui.',
        'Pentru asta, le oferim un spațiu sigur în care să se exploreze fără teama de a fi judecați, să își dezvolte gândirea critică și să capete încredere în cine sunt și în ce pot face.',
        'Learnity este și despre comunitate – despre a întâlni oameni cu aceleași valori și principii, despre conexiuni autentice și sprijin reciproc. Încurajăm adolescenții să fie proactivi, să își exprime ideile și să ia inițiativă atunci când simt că pot face o diferență.',
        'Mai mult decât un loc de învățare, Learnity este un mediu în care adolescenții cresc, își descoperă vocea și găsesc inspirația de a contribui la o lume mai bună. Aici învață să trăiască autentic, cu încredere și curaj, transformând fiecare experiență într-un pas spre un viitor cu impact.',
      ),
    },
    {
      name: 'caption',
      type: 'text',
      label: 'Video caption',
      defaultValue:
        'Descoperă povestea Learnity și cum transformăm educația prin joc și creativitate',
    },
    {
      type: 'row',
      fields: [
        {
          name: 'video',
          type: 'upload',
          relationTo: 'media',
          label: 'Video',
          required: true,
        },
        {
          name: 'poster',
          type: 'upload',
          relationTo: 'media',
          label: 'Video poster',
        },
      ],
    },
    linkGroup({
      appearances: false,
      overrides: {
        maxRows: 1,
      },
    }),
  ],
}