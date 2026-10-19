import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { iconPicker } from '@/fields/iconPicker'
import { linkGroup } from '@/fields/linkGroup'

const courseModulesDefault = [
  {
    name: 'Modulul 1',
    description:
      'Cursuri care dezvoltă exprimarea artistică, imaginația și gândirea creativă.',
    items: [
      {
        title: 'Psihologie aplicată',
        description:
          "Ești pasionat de psihologie și de firea umană? Vrei să înțelegi mai bine subiecte precum mecanismele de apărare, tulburările de personalitate și traumele de respingere și de abandon? Prin intermediul cursului de „Psihologie Aplicată”, susținut de psihoterapeutul și psihologul clinician Alexandru Necșulescu, vei primi răspunsuri la aceste întrebări (și nu numai) și vei putea explora aceste subiecte prin intermediul exercițiilor practice din fiecare sesiune.",
        teacher: 'Alex Necșulescu',
        place: 'Str. Duzilor nr. 23',
        timeperiod: 'Luni, 19:30 - 21:30',
      },
      {
        title: 'Comunicare',
        description:
          'Te invităm la un curs captivant despre comunicare, unde vom descoperi împreună cele trei stări: Părinte, Adult și Copil și modul în care acestea ne modelează comportamentul în relații. Vom explora cum se manifestă fiecare stare în comunicarea noastră de zi cu zi și cum influențează felul în care suntem percepuți și în care suntem tratați de ceilalți. Prin exerciții interactive, vom experimenta atât laturile constructive, cât și pe cele mai puțin constructive ale acestor stări, iar împreună vom căuta soluții pentru a îmbunătăți comunicarea cu părinții, profesorii și colegii.',
        teacher: 'Smaranda Nay',
        place: 'Str. Duzilor nr. 23',
        timeperiod: 'Marți, 19:30 - 21:30',
      },
      {
        title: 'Pastila de Artă',
        description:
          'Arta este pentru toată lumea, oricine poate să se exprime prin intermediul său. Nivelul de skill-uri sau cunoștințe nu contează, ci doar dorința și curajul de a-ți exterioriza trăirile și ideile prin această modalitate. Vrem să creăm un spațiu în cadrul căruia putem cu toții să ne regăsim și să comunicăm cine suntem cu ajutorul mijloacelor plastice. În cadrul acestui curs vom avea 6 ședințe în care vom explora diferite tipuri de artă - pictura, modelajul, fotografia, gravura, fiecare având profesori separați, specializați pe fiecare domeniu în parte.',
        teacher: 'Andra Achim, Ana Guțǎ, Emma Blaga, Costin Duțu',
        place: 'Str. Duzilor nr. 23',
        timeperiod: 'Luni, 19:30 - 21:30',
      },
      {
        title: 'Povești despre antreprenoriat',
        description:
          'Te interesează domeniul antreprenoriatului și ți-ai dori să afli cum arată viața unui antreprenor? Vrei să știi care este importanța cifrelor într-o afacere, cum să îți prezinți proiectul, cum să îi determini pe oameni să cumpere de la tine sau cum să îți creezi echipa? Cursul „Povești despre antreprenoriat”, susținut de Cristian Chirnogeanu își propune să vină cu răspunsuri la aceste întrebări prin poveștile și experiențele altor antreprenori invitați.',
        teacher: 'Cristi Chirnogeanu',
        place: 'Str. Duzilor nr. 23',
        timeperiod: 'Joi, 19:30 - 21:30',
      },
      {
        title: 'Marketing: "Hoții de subiecte"',
        description:
          'Anul acesta, Learnity a colaborat cu Promocrat pentru a crea o experiență cât mai aplicată și fun pentru elevii pasionați de marketing. Ghidați de Cosmin Muscălescu, pe parcursul primului modul, learnitașii au avut ocazia să contribuie la gândirea și implementarea strategiei de promovare pentru filmul „Hoții de Subiecte”.',
        teacher: 'Cosmin Mușcălescu',
        place: 'Str. Duzilor nr. 23',
        timeperiod: 'Joi, 19:30 - 21:30',
      },
    ],
  },
  {
    name: 'Modulul 2',
    description:
      'Cursuri care explorează știința, tehnologia și gândirea critică într-un mod practic.',
    items: [
      {
        title: 'Filosofie politică',
        description:
          'Un curs care pune întrebări fundamentale despre putere, dreptate și organizarea societății, pornind de la texte și dezbateri actuale.',
        teacher: 'Petrișor Ivan',
        place: 'Str. Duzilor nr. 23',
        timeperiod: 'Luni, 19:30 - 21:30',
      },
      {
        title: 'Relații internaționale',
        description:
          'Ești interesat de relațiile diplomatice dintre state? Vrei să afli mai multe despre cum funcționează mecanismele din spatele instituțiilor care guvernează, despre regimurile politice și chiar despre drepturile tale? Hai la cursul „Relații internaționale”, susținut de Rebeca Bașuț și Teodora Bălăceanu, unde îți vom răspunde la toate aceste întrebări și la multe altele, punând toate informațiile în contexte actuale și relevante pentru generația noastră.',
        teacher: 'Rebeca Bășuț & Teodora Bălăceanu',
        place: 'Str. Duzilor nr. 23',
        timeperiod: 'Luni, 19:30 - 21:30',
      },
      {
        title: 'Creative Thinking',
        description:
          'Un curs care antrenează gândirea creativă prin exerciții practice, jocuri și aplicații din lumea reală, dezvoltând încrederea în propriile idei.',
        teacher: 'Cosmin Mușcălescu',
        place: 'Str. Duzilor nr. 23',
        timeperiod: 'Joi, 19:30 - 21:30',
      },
      {
        title: 'To be or not to be',
        description:
          'Vrei să afli mai multe despre tine, să-ți ieși din zona de confort și să înveți să te exprimi liber? Dacă răspunsul este da, atunci cursul "To be or not to be", susținut de Patricia Katona, s-ar putea să fie exact ce ai nevoie. Prin intermediul jocurilor de actorie și de improvizație, te vom ajuta să scapi de inhibiții și să faci cunoștință cu varianta ta cea mai autentică.',
        teacher: 'Patricia Katone',
        place: 'Str. Duzilor nr. 23',
        timeperiod: 'Marți, 19:30 - 21:30',
      },
      {
        title: 'Self Discovery Journey',
        description:
          'O călătorie de autocunoaștere prin exerciții ghidate, reflecție și discuții, pentru a-ți înțelege mai bine emoțiile, valorile și direcția.',
        teacher: 'Miruna Anin',
        place: 'Str. Duzilor nr. 23',
        timeperiod: 'Vineri, 19:30 - 21:30',
      },
      {
        title: 'On Your Magic & Your Shit',
        description:
          'Un curs despre autenticitate, vulnerabilitate și puterea de a-ți asuma atât strălucirea, cât și imperfecțiunile.',
        teacher: 'Andreea Mirescu',
        place: 'Str. Duzilor nr. 23',
        timeperiod: 'Joi, 19:30 - 21:30',
      },
    ],
  },
  {
    name: 'Modulul 3',
    description:
      'Cursuri care dezvoltă competențe esențiale de viață, inteligență emoțională și bunăstare.',
    items: [
      {
        title: 'Build Up Camp',
        description:
          'Construim căsuțe și deconstruim concepții. Trei zile în mijlocul naturii, departe de agitația orașului, în care ne reconectăm la un alt ritm de viață, punem mâna pe unelte și ne întrebăm ce fel de lume vrem să construim – în afara și înăuntrul nostru. Un bootcamp despre viață alternativă, comunitate, perspective noi și autenticitate.',
        teacher: 'Traian Brumă',
        place: 'Zona Vălenii de Munte',
        timeperiod: '20 - 22 iunie',
      },
      {
        title: 'Think Big Camp',
        description:
          'Ai o idee care merită să fie pusă în lume, dar nu știi de unde să începi? Timp de 3 zile, ne distrăm, transformăm ideile în concepte reale, ne antrenăm gândirea strategică și creativă și învățăm cum să lucrăm în echipă – cu scop, deadline și pitch. Proiectul câștigător va fi susținut de Learnity pentru a deveni realitate.',
        teacher: 'Cosmin Muscălescu',
        place: 'Slănic, Prahova',
        timeperiod: '16 - 18 mai',
      },
      {
        title: 'Create Camp',
        description:
          'Trei zile la mare, departe de agitația orașului, în care ne dăm voie să simțim, să observăm și să spunem lucruri care contează – prin imagine, sunet și poveste. Explorăm, învățăm, ne exprimăm artistic și autentic. Un bootcamp pentru adolescenții care vor să-și găsească vocea și să o transpună în artă.',
        teacher: 'Emma Blaga, Costin Duțu',
        place: 'Corbu, Constanța',
        timeperiod: '13 - 15 iunie',
      },
      {
        title: 'Personal Branding',
        description:
          'Cum te prezinți în fața lumii atunci când nu ești acolo să vorbești pentru tine? În acest curs de Personal Branding, Mihaela Tomescu – career coach și fondatoarea PuntoUp Impact – te va ajuta să înțelegi cum să îți construiești un brand personal autentic și puternic.',
        teacher: 'Mihaela Tomescu',
        place: 'Str. Duzilor nr. 23',
        timeperiod: 'Marți, 19:30 - 21:30',
      },
      {
        title: 'Creative Writing',
        description:
          'Vrei să scrii, dar nu știi de unde să începi? Sau simți că ai povești de spus, dar cauți forma potrivită? Hai la cursul de Scriere Creativă, susținut de Ștefania Mihalache, poetă și prozatoare! Timp de 7 întâlniri, vei experimenta exerciții inedite care îți vor scoate creativitatea din zona de confort.',
        teacher: 'Ștefania Mihalache',
        place: 'Str. Duzilor nr. 23',
        timeperiod: 'Luni, 19:30 - 21:30',
      },
    ],
  },
]

export const PresentCourses: Block = {
  slug: 'presentCourses',
  interfaceName: 'PresentCoursesBlock',
  labels: {
    plural: 'Present Courses',
    singular: 'Present Courses',
  },
  fields: [
    {
      name: 'badge',
      type: 'text',
      label: 'Badge/Eyebrow',
    },
    {
      name: 'sectionTitle',
      type: 'text',
      label: 'Section Title',
      defaultValue: 'Cursurile acestui an',
      required: true,
    },
    {
      name: 'sectionDescription',
      type: 'richText',
      label: 'Section Description',
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
      required: true,
    },
    {
      name: 'ctaText',
      type: 'text',
      label: 'CTA Text',
      defaultValue: 'Înscrie-te la cursuri',
    },
    linkGroup({
      appearances: false,
      overrides: {
        maxRows: 1,
        admin: {
          description: 'CTA link (default to /contact)',
        },
      },
    }),
    {
      name: 'modules',
      type: 'array',
      label: 'Course Modules',
      required: true,
      minRows: 1,
      admin: {
        initCollapsed: true,
      },
      defaultValue: courseModulesDefault,
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Module Name',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Module Description',
        },
        {
          name: 'items',
          type: 'array',
          label: 'Courses',
          required: true,
          minRows: 1,
          admin: {
            initCollapsed: true,
          },
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
            },
            {
              name: 'teacher',
              type: 'text',
              label: 'Teacher',
            },
            {
              name: 'place',
              type: 'text',
              label: 'Place',
            },
            {
              name: 'timeperiod',
              type: 'text',
              label: 'Time Period',
            },
            iconPicker({
              overrides: {
                required: false,
                defaultValue: 'bookOpen',
              },
            }),
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              label: 'Image',
            },
          ],
        },
      ],
    },
  ],
}
