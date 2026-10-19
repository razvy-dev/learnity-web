import type { Block } from 'payload'

import { linkGroup } from '@/fields/linkGroup'

const defaultCourses = [
  {
    title: 'Filosofie Politică',
    teacher: 'Petrișor Ivan',
    dateInterval: '20 ianuarie - 3 martie, 2025',
    description: `Dacă politica ultimelor luni din România ne-a arătat ceva, este că democraţia nu ne este dată de-a gata şi că, odată obţinută,  ea nu este dincolo de orice pericol. ⚖️ Spectrul totalitarismului ne bântuie în continuare, iar libertatea noastră trebuie apărată. Pentru asta, avem nevoie să înţelegem care sunt sursele şi formele de manifestare ale acţiunilor politice antidemocratice, de ce diversele forme de fascism şi comunism exercită în continuare o putere de convingere asupra oamenilor şi, în final, faptul că statul de drept este destul de bun chiar şi când e foarte prost. Despre toate acestea discutam la cursul de filosofie politică alături de Petrișor Ivan .✨`,
    subjects: ['Marxismul', 'Fascismul', 'Nietzsche', 'Sisteme de guvernare'],
  },
  {
    title: 'Creative Thinking',
    teacher: 'Cosmin Mușcălescu',
    dateInterval: '23 ianuarie - 13 martie, 2025',
    description: `Să fii creativ înseamnă doar să ştii să pictezi? Ce este creativitatea? Care e diferenta dintre gândirea convergentă și cea divergentă şi cum poți să depașeşti bariere sau blocaje în creativitate? Cum arată un om creativ şi oare sunt şi eu unul dintre ei? Răspunsul la aceste întrebări și multe altele le afli la cursul “Creative Thinking” susținut de Cosmin Muscălescu, Head of Creative & Communications la Promocrat (agenție de publicitate).`,
    subjects: ['Brainstorming', 'Team working', 'Hackathon', 'Pitching'],
  },
  {
    title: 'Pastila de Artă',
    teacher: 'Andra Achim, Ana Guțǎ, Emma Blaga, Costin Duțu',
    dateInterval: '11 noiembrie - 16 decembrie, 2024',
    description: `Arta este pentru toată lumea, oricine poate să se exprime prin intermediul său. Nivelul de skill-uri sau cunoștințe nu contează, ci doar dorința și curajul de a-ți exterioriza trăirile și ideile prin această modalitate. Vrem să creăm un spațiu în cadrul căruia putem cu toții să ne regăsim și să comunicăm cine suntem cu ajutorul mijloacelor plastice. În cadrul acestui curs avem 6 ședințe în care exploram diferite tipuri de artă - pictura, modelajul, fotografia, gravura, fiecare având profesori separați, specializați pe fiecare domeniu în parte.`,
    subjects: ['Fotografie', 'Gravură', 'Pictură', 'Sculptură'],
  },
  {
    title: 'Self Discovery Journey',
    teacher: 'Miruna Anin',
    dateInterval: '14 martie - 18 aprilie, 2025',
    description: `Un parcurs în 7 întâlniri săptămânale, unde vei explora cine ești, ce te motivează și cum poți deveni o versiune mai încrezătoare și mai autentică a ta. Ce vei descoperi pe parcurs:
1. Gândirea, Cogniții și Bias-uri – Cum ne influențează gândurile deciziile și felul în care vedem lumea.
2. Nevoi și Motivații– Ce te impulsionează cu adevărat și cum poți învăța să-ți recunoști și să-ți respecți nevoile.
3. Emoții și Inteligența Emoțională– Cum să înțelegi ce simți și să gestionezi emoțiile într-un mod sănătos.
4. Stiluri de Decizie – Cum să iei decizii mai clare și mai potrivite pentru tine.
5. Imagine de sine și Încredere în sine – Cum să-ți construiești o relație mai bună cu tine și să crezi în valoarea ta.
6. Idealuri și Valori– Ce contează cu adevărat pentru tine și cum să faci alegeri care reflectă asta.
Acest grup este mai mult decât o serie de întâlniri – este o oportunitate să înveți mai multe despre tine și despre ce te face să te simți bine în pielea ta.`,
    subjects: ['Gândire și bias-uri', 'Nevoi și motivații', 'Emoții', 'Stiluri de decizie', 'Imagine de sine', 'Idealuri și valori'],
  },
]

export const GuidedCourses: Block = {
  slug: 'guidedCourses',
  interfaceName: 'GuidedCoursesBlock',
  labels: {
    singular: 'Guided Courses',
    plural: 'Guided Courses Sections',
  },
  fields: [
    {
      name: 'badge',
      type: 'text',
      label: 'Badge/Eyebrow',
      admin: {
        description: 'Optional small pill shown above the section title.',
      },
    },
    {
      name: 'sectionTitle',
      type: 'text',
      label: 'Section Title',
      required: true,
      defaultValue: 'Câteva dintre cursurile noastre',
    },
    {
      name: 'sectionDescription',
      type: 'textarea',
      label: 'Section Description',
      required: true,
      defaultValue:
        'Explorați unele dintre cele mai populare cursuri din trimestrele anterioare. Aceste exemple prezintă diversele experiențe de învățare pe care le oferim la Learnity.',
    },
    {
      name: 'courses',
      type: 'array',
      label: 'Courses',
      required: true,
      minRows: 1,
      defaultValue: defaultCourses,
      admin: {
        initCollapsed: true,
        description: 'Timeline course cards, shown in the order they are listed here.',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          required: true,
        },
        {
          name: 'teacher',
          type: 'text',
          label: 'Teacher(s)',
          admin: {
            description: 'Shown as "Taught by <name>" under the title.',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
          required: true,
        },
        {
          name: 'dateInterval',
          type: 'text',
          label: 'Date Interval',
          admin: {
            description:
              'e.g. "20 ianuarie - 3 martie, 2025". Leave empty to hide the date badge.',
          },
        },
        {
          name: 'subjects',
          type: 'text',
          hasMany: true,
          label: 'Subjects',
          admin: {
            description: 'Revealed by the "Show Subjects" toggle on the card.',
          },
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Image',
        },
        linkGroup({
          appearances: false,
          overrides: {
            maxRows: 1,
            label: 'Course Link',
            admin: {
              description: 'Optional link shown under the course card content.',
            },
          },
        }),
      ],
    },
    linkGroup({
      appearances: false,
      overrides: {
        maxRows: 1,
        admin: {
          description: 'Section CTA button (defaults to /guided-learning/cursuri).',
        },
        defaultValue: [
          {
            link: {
              type: 'custom',
              url: '/guided-learning/cursuri',
              label: 'Vezi cursurile acestui an',
            },
          },
        ],
      },
    }),
  ],
}
