import type { Form } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

type ContactArgs = {
  contactForm: Form
}

export const contact: (args: ContactArgs) => RequiredDataFromCollectionSlug<'pages'> = ({
  contactForm,
}) => {
  return {
    slug: 'contact',
    _status: 'published',
    hero: {
      type: 'none',
    },
    layout: [
      {
        blockType: 'formBlock',
        sectionTitle: 'Contact',
        sectionDescription:
          'Ai o întrebare sau vrei să afli mai multe? Completează formularul de mai jos și te vom contacta în cel mai scurt timp.',
        form: contactForm,
      },
    ],
    title: 'Contact',
  }
}
