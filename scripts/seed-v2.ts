import 'dotenv/config'
import { getPayload, type Payload } from 'payload'

import config from '../src/payload.config'
import { lexicalEditorState } from '../src/utilities/lexical'

const lex = lexicalEditorState

const slugify = (s: string) =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

const links = (...items: { url: string; label: string; newTab?: boolean }[]) =>
  items.map((i) => ({
    link: { type: 'custom' as const, newTab: i.newTab ?? false, url: i.url, label: i.label },
  }))

const media = async (payload: Payload, filename: string): Promise<number> => {
  const res = await payload.find({
    collection: 'media',
    where: { filename: { equals: filename } },
    limit: 1,
    depth: 0,
  })
  if (res.totalDocs === 0) throw new Error(`Media not found: ${filename}`)
  return res.docs[0].id as number
}

const upsert = async (
  payload: Payload,
  collection: any,
  where: Record<string, any>,
  data: Record<string, any>,
): Promise<number> => {
  const found = await payload.find({
    collection,
    where,
    limit: 1,
    depth: 0,
  })
  if (found.totalDocs > 0) {
    const updated = await payload.update({
      collection,
      id: found.docs[0].id as number,
      data,
      depth: 0,
      context: { disableRevalidate: true },
    })
    return updated.id as number
  }
  const created = await payload.create({
    collection,
    data,
    depth: 0,
    context: { disableRevalidate: true },
  })
  return created.id as number
}

const upsertBySlug = (
  payload: Payload,
  collection: any,
  slug: string,
  data: Record<string, any>,
) => upsert(payload, collection, { slug: { equals: slug } }, data)

const getPage = async (payload: Payload, slug: string) => {
  const res = await payload.find({
    collection: 'pages',
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 0,
  })
  if (res.totalDocs === 0) throw new Error(`Page not found: ${slug}`)
  return res.docs[0] as any
}

const updatePage = async (
  payload: Payload,
  slug: string,
  layout: any[],
  extra: Record<string, any> = {},
) => {
  const page = await getPage(payload, slug)
  await payload.update({
    collection: 'pages',
    id: page.id,
    data: { layout, _status: 'published', ...extra },
    context: { disableRevalidate: true },
  })
  payload.logger.info(`Updated page "${slug}" → [${layout.map((b) => b.blockType).join(', ')}]`)
}

const run = async () => {
  const payload = await getPayload({ config })

  const M = {
    wtf1: await media(payload, 'what-the-future-1.jpeg'),
    wtf2: await media(payload, 'what-the-future-2.jpeg'),
    campDare: await media(payload, 'dare-yourself-camp.jpg'),
    showCoping: await media(payload, 'showcase-coping.jpeg'),
    showTraditii: await media(payload, 'showcase-traditii.jpeg'),
    showCinema: await media(payload, 'showcase-cinema.jpeg'),
    showBookClub: await media(payload, 'showcase-book-club.jpeg'),
    showJam: await media(payload, 'showcase-jam.jpg'),
    showPhoto: await media(payload, 'showcase-photo.jpg'),
    cPsihologie: await media(payload, 'course-psihologie.jpeg'),
    cComunicare: await media(payload, 'course-comunicare.jpg'),
    cMarketing: await media(payload, 'course-marketing.jpg'),
    cFilosofie: await media(payload, 'course-filosofie.jpg'),
    cCreative: await media(payload, 'course-creative-thinking.jpg'),
    cPastila: await media(payload, 'course-pastila-de-arta.jpg'),
    cSelfDiscovery: await media(payload, 'course-self-discovery.jpeg'),
  }

  // ── What The Future document ────────────────────────────────────────────
  const wtfId = await upsert(payload, 'whatTheFuture', { heading: { equals: 'What The Future' } }, {
    badgeText: 'Eveniment',
    heading: 'What The Future',
    subtitle: 'Un eveniment despre carieră, vocație și viitor',
    description: lex(
      'What The Future este evenimentul Learnity dedicat liceenilor care își caută direcția. Într-o zi plină de energie, întâlnești oameni care lucrează în domenii diferite și afli, în mod autentic, cum arată drumul lor.',
    ),
    longDescription: lex(
      'Vorbim deschis despre carieră, vocație și viitor, fără rețete prestabilite. Prin ateliere, discuții și povești reale, descoperi ce opțiuni există, cum să le explorezi și cum să-ți construiești propriul traseu. Vine cu întrebări, pleacă cu claritate.',
    ),
    aboutHeading: 'Despre eveniment',
    image1: M.wtf1,
    image2: M.wtf2,
    detailsHeading: 'Detalii eveniment',
    details: [
      { icon: 'calendar', label: 'Data', value: '7 - 8 iunie 2025' },
      { icon: 'clock', label: 'Program', value: '11:00 - 19:00' },
      { icon: 'mapPin', label: 'Locație', value: 'NOD Makerspace' },
      { icon: 'users', label: 'Participanți', value: 'Locuri limitate (max. 100 participanți)' },
    ],
    featuresHeading: 'Ce vei experimenta',
    features: [
      { text: 'Speakeri din diverse domenii de interes' },
      { text: 'Workshop-uri și panel-uri despre carieră și vocație' },
      { text: 'Networking cu profesioniști' },
      { text: 'Discuții cu oameni faini care să te inspire' },
      { text: 'Certificate de participare' },
      { text: 'Răspunsul la anxietățile tale legate de viitor' },
    ],
    links: links(
      { url: '/guided-learning/what-the-future', label: 'Înscrie-te acum' },
      { url: '/guided-learning/what-the-future', label: 'Află mai multe detalii' },
    ),
    publishedAt: '2025-05-01T00:00:00.000Z',
    _status: 'published',
  })
  payload.logger.info(`What The Future doc → ${wtfId}`)

  // ── Camp document ───────────────────────────────────────────────────────
  const campId = await upsert(payload, 'camps', { title: { equals: 'Dare Yourself' } }, {
    badgeText: 'Dare Yourself',
    heading: 'Tabăra de Vară',
    sectionSubtitle: 'O experiență de neuitat în inima naturii',
    title: 'Dare Yourself',
    titleSubtitle: 'Tabăra Learnity care îți activează curajul și vocea interioară',
    description: lex(
      'Vara asta, Learnity te provoacă să te descoperi cu adevărat. Dare Yourself este o tabără de dezvoltare personală pentru liceeni curajoși, dornici să-și descopere vocea, să-și înțeleagă emoțiile și să devină schimbarea pe care o vor în lume.',
      'Timp de o săptămână, vei fi înconjurat de oameni ca tine – care caută sens, autenticitate și conexiune. Vei explora ce înseamnă să te înțelegi pe tine, să relaționezi sănătos cu ceilalți, să îți depășești fricile și să te implici în ceea ce contează cu adevărat.',
      'Este o tabără care îmbină jocul, introspecția, provocările și comunitatea, într-un proces ghidat de o echipă de psihologi cu experiență.',
    ),
    age: '14-18 ani',
    dates: '17-23 August 2025',
    datesNote: '7 zile / 6 nopți',
    location: 'Predeluț, Bran',
    locationNote: 'Locație premium',
    price: '2100 RON',
    priceNote: 'Preț',
    featuresTitle: 'Ce include tabăra:',
    features: [
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
    image: M.campDare,
    links: links(
      { url: '/dare-yourself-form', label: 'Înscrie-te acum' },
      { url: '/dare-yourself', label: 'Detalii complete' },
    ),
    publishedAt: '2025-05-01T00:00:00.000Z',
    _status: 'published',
  })
  payload.logger.info(`Camp doc → ${campId}`)

  // ── Playground Workshops ────────────────────────────────────────────────
  const workshopDocs = [
    {
      title: 'Coping Mechanisms',
      text: 'La workshopul despre coping mechanisms, am vorbit deschis despre cum facem față emoțiilor puternice, stresului sau situațiilor dificile din viața de zi cu zi. Prin exemple concrete, jocuri și discuții relaxate, am descoperit metode simple și sănătoase de a ne recăpăta echilibrul.',
      photo: M.showCoping,
      date: '2023-06-15T00:00:00.000Z',
    },
    {
      title: 'Tradiții libaneze',
      text: 'Un workshop care ne-a adus mai aproape de o cultură diferită, prin povești, gusturi și sunete. Am învățat primele litere din alfabetul arab și ne-am bucurat de falafel și humus gătite chiar de gazda noastră.',
      photo: M.showTraditii,
      date: '2023-07-22T00:00:00.000Z',
    },
    {
      title: 'Arta cinematografiei',
      text: 'La workshopul despre arta cinematografiei am descoperit cum se construiește o poveste pe ecran, de la scenariu și cadru, până la lumină și montaj. Un spațiu creativ din care fiecare a plecat cu idei noi și informații utile.',
      photo: M.showCinema,
      date: '2023-08-05T00:00:00.000Z',
    },
  ]

  for (const w of workshopDocs) {
    await upsertBySlug(payload, 'workshops', slugify(w.title), {
      title: w.title,
      slug: slugify(w.title),
      description: lex(w.text),
      photo: w.photo,
      date: w.date,
      publishedAt: w.date,
      _status: 'published',
    })
  }
  payload.logger.info('Playground workshops ready.')

  // ── Autonomous Groups ───────────────────────────────────────────────────
  const groupDocs = [
    {
      title: 'Clubul de carte',
      text: 'Un grup pentru cei care iubesc lectura și vor să descopere cărți noi împreună. Ne întâlnim lunar, împărtășim impresii și ne bucurăm de discuții calde într-o atmosferă relaxată.',
      photo: M.showBookClub,
      date: '2024-11-05T00:00:00.000Z',
    },
    {
      title: 'Jam Sessions',
      text: 'Un grup de muzică în care nu contează nivelul de skill, ci dorința de a crea împreună. Explorăm ritmuri, improvizăm și ne bucurăm de energia muzicii alături de ceilalți.',
      photo: M.showJam,
      date: '2024-11-07T00:00:00.000Z',
    },
    {
      title: 'Grupul de foto',
      text: 'Un grup dedicat pasionaților de fotografie, care explorează orașul, învață tehnici noi și surprind lumea prin obiectivul camerei, antrenându-și ochiul artistic împreună.',
      photo: M.showPhoto,
      date: '2024-11-08T00:00:00.000Z',
    },
  ]

  for (const g of groupDocs) {
    await upsertBySlug(payload, 'autonomousGroups', slugify(g.title), {
      title: g.title,
      slug: slugify(g.title),
      description: lex(g.text),
      photo: g.photo,
      date: g.date,
      publishedAt: g.date,
      _status: 'published',
    })
  }
  payload.logger.info('Autonomous groups ready.')

  // ── Playground Courses ──────────────────────────────────────────────────
  const courseDocs = [
    {
      title: 'Psihologie aplicată',
      text: 'Ești pasionat de psihologie și de firea umană? Prin intermediul cursului de „Psihologie Aplicată", susținut de psihoterapeutul și psihologul clinician Alexandru Necșulescu, vei explora mecanismele de apărare, tulburările de personalitate și traumele de respingere și abandon prin exerciții practice.',
      photo: M.cPsihologie,
      startDate: '2025-01-20T00:00:00.000Z',
      endDate: '2025-03-03T00:00:00.000Z',
    },
    {
      title: 'Comunicare',
      text: 'Un curs captivant despre comunicare, unde descoperim împreună cele trei stări: Părinte, Adult și Copil și modul în care acestea ne modelează comportamentul în relații.',
      photo: M.cComunicare,
      startDate: '2025-01-22T00:00:00.000Z',
      endDate: '2025-03-05T00:00:00.000Z',
    },
    {
      title: 'Marketing: Hoții de subiecte',
      text: 'Un proiect realizat cu Promocrat, în care learnitașii au contribuit la gândirea și implementarea strategiei de promovare pentru filmul „Hoții de Subiecte".',
      photo: M.cMarketing,
      startDate: '2025-01-23T00:00:00.000Z',
      endDate: '2025-03-13T00:00:00.000Z',
    },
  ]

  for (const c of courseDocs) {
    await upsertBySlug(payload, 'courses', slugify(c.title), {
      title: c.title,
      slug: slugify(c.title),
      description: lex(c.text),
      photo: c.photo,
      startDate: c.startDate,
      endDate: c.endDate,
      publishedAt: c.startDate,
      _status: 'published',
    })
  }
  payload.logger.info('Playground courses ready.')

  // ── Guided Courses ──────────────────────────────────────────────────────
  const guidedCourseDocs = [
    {
      title: 'Pastila de Artă',
      text: 'Arta este pentru toată lumea, oricine poate să se exprime prin intermediul său. Nivelul de skill-uri sau cunoștințe nu contează, ci doar dorința și curajul de a-ți exterioriza trăirile și ideile prin această modalitate.',
      teachers: ['Andra Achim', 'Ana Guță', 'Emma Blaga', 'Costin Duțu'],
      photo: M.cPastila,
      startDate: '2025-11-11T00:00:00.000Z',
      endDate: '2025-12-16T00:00:00.000Z',
      module: 'module1',
    },
    {
      title: 'Self Discovery Journey',
      text: 'Un parcurs în 7 întâlniri săptămânale, unde vei explora cine ești, ce te motivează și cum poți deveni o versiune mai încrezătoare și mai autentică a ta.',
      teachers: ['Miruna Anin'],
      photo: M.cSelfDiscovery,
      startDate: '2025-03-14T00:00:00.000Z',
      endDate: '2025-04-18T00:00:00.000Z',
      module: 'module1',
    },
    {
      title: 'Filosofie Politică',
      text: 'Dacă politica ultimelor luni din România ne-a arătat ceva, este că democrația nu ne este dată de-a gata. Pentru a o apăra, avem nevoie să înțelegem sursele și formele de manifestare ale acțiunilor politice antidemocratice.',
      teachers: ['Petrișor Ivan'],
      photo: M.cFilosofie,
      startDate: '2025-01-20T00:00:00.000Z',
      endDate: '2025-03-03T00:00:00.000Z',
      module: 'module2',
    },
    {
      title: 'Creative Thinking',
      text: 'Să fii creativ înseamnă doar să știi să pictezi? Care e diferența dintre gândirea convergentă și cea divergentă și cum poți să depășești barierele în creativitate? Răspunsurile le afli la cursul susținut de Cosmin Mușcălescu.',
      teachers: ['Cosmin Mușcălescu'],
      photo: M.cCreative,
      startDate: '2025-01-23T00:00:00.000Z',
      endDate: '2025-03-13T00:00:00.000Z',
      module: 'module2',
    },
  ]

  for (const c of guidedCourseDocs) {
    await upsertBySlug(payload, 'guidedCourses', slugify(c.title), {
      title: c.title,
      slug: slugify(c.title),
      description: lex(c.text),
      photo: c.photo,
      teachers: c.teachers.map((teacher) => ({ teacher })),
      startDate: c.startDate,
      endDate: c.endDate,
      module: c.module,
      publishedAt: c.startDate,
      _status: 'published',
    })
  }
  payload.logger.info('Guided courses ready.')

  // ── Home page: relink WhatTheFuture + Camps ─────────────────────────────
  {
    const page = await getPage(payload, 'home')
    const layout = ((page.layout as any[]) || []).map((b) => {
      if (b.blockType === 'whatTheFuture') {
        return { blockType: 'whatTheFuture', document: wtfId }
      }
      if (b.blockType === 'camps') {
        return { blockType: 'camps', camp: campId }
      }
      return b
    })
    await updatePage(payload, 'home', layout)
  }

  // ── Playground page: showcase pulls from collections ────────────────────
  {
    const page = await getPage(payload, 'playground')
    const showcase = {
      blockType: 'playgroundShowcase',
      badge: 'Playground',
      sectionTitle: 'Learning Experiences',
      sectionDescription:
        'În Playground, elevii au oportunitatea de a-și lua învățarea în propriile mâini, fie prin a deveni ei profi și a susține workshop-uri, fie prin a organiza evenimente alături de alți learnitași pentru restul comunității, sub ghidajul și îndrumarea noastră.',
      tabs: [
        { label: 'Workshop-uri', source: 'workshops', limit: 3 },
        { label: 'Grupuri', source: 'autonomousGroups', limit: 3 },
        { label: 'Evenimente', source: 'events', limit: 3 },
        { label: 'Cursuri', source: 'courses', limit: 3 },
      ],
    }

    let replaced = false
    const layout = ((page.layout as any[]) || []).map((b) => {
      if (b.blockType === 'playgroundShowcase') {
        replaced = true
        return showcase
      }
      return b
    })
    if (!replaced) layout.push(showcase)

    await updatePage(payload, 'playground', layout)
  }

  // ── Guided-learning page: module-based Learning Experiences ─────────────
  {
    const page = await getPage(payload, 'guided-learning')
    const guidedByYear = {
      blockType: 'guidedLearningByYear',
      sectionTitle: 'Experiențe de învățare ghidate',
      year: 2025,
      showEmptyModules: true,
      moduleLabels: [
        { moduleValue: 'module1', label: 'Modulul 1', description: 'Descoperire și explorare', color: 'blue' },
        { moduleValue: 'module2', label: 'Modulul 2', description: 'Aprofundare și practică', color: 'orange' },
        { moduleValue: 'module3', label: 'Modulul 3', description: 'Proiect final și prezentare', color: 'green' },
      ],
    }

    let replaced = false
    const layout = ((page.layout as any[]) || []).map((b) => {
      if (b.blockType === 'guidedCourses') {
        replaced = true
        return guidedByYear
      }
      return b
    })
    if (!replaced) layout.unshift(guidedByYear)

    await updatePage(payload, 'guided-learning', layout)
  }

  payload.logger.info('✅ v2 seed complete.')
  process.exit(0)
}

run().catch((e) => {
  console.error(e?.data?.errors ? JSON.stringify(e.data.errors, null, 2) : e)
  process.exit(1)
})
