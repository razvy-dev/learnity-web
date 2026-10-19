import 'dotenv/config'
import fs from 'fs'
import path from 'path'
import { getPayload, type Payload } from 'payload'

import config from '../src/payload.config'
import { lexicalEditorState } from '../src/utilities/lexical'

const ROOT = process.cwd()
const SRC = 'learnity-old/learnity.ro/src/components'
const lex = lexicalEditorState

type UploadSpec = { rel: string; alt: string; name: string }

const UPLOADS: Record<string, UploadSpec> = {
  wtf1: { rel: 'Home/assets/4.jpeg', alt: 'What The Future - momente din eveniment', name: 'what-the-future-1.jpeg' },
  wtf2: { rel: 'Home/assets/6.jpeg', alt: 'What The Future - participanți', name: 'what-the-future-2.jpeg' },
  campDare: { rel: 'Home/assets/dare.jpg', alt: 'Tabăra Dare Yourself', name: 'dare-yourself-camp.jpg' },
  testSanzi: { rel: 'Home/assets/sanzi.jpeg', alt: 'Sânziana Tudose', name: 'testimonial-sanziana.jpeg' },
  testKarla: { rel: 'Home/assets/karla.jpeg', alt: 'Karla Ezaru', name: 'testimonial-karla.jpeg' },
  testRazvan: { rel: 'Home/assets/razvan.jpg', alt: 'Andronachi Răzvan', name: 'testimonial-razvan.jpg' },
  testMihaela: { rel: 'Home/assets/mama_lui_kit.jpeg', alt: 'Mihaela Danilov', name: 'testimonial-mihaela.jpeg' },
  pgEvent1: { rel: 'Home/assets/pg1.jpg', alt: 'Excursie: Târgul de Crăciun din Craiova', name: 'playground-excursie-craiova.jpg' },
  pgEvent2: { rel: 'Home/assets/pg2.jpg', alt: 'Halloweenity', name: 'playground-halloweenity.jpg' },
  pgEvent3: { rel: 'Home/assets/pg3.jpg', alt: 'Playground Day', name: 'playground-playground-day.jpg' },

  whySupportImg: { rel: 'Donate/assets/img2.jpeg', alt: 'Elevi Learnity învățând împreună', name: 'why-support.jpg' },
  obj1: { rel: 'Donate/assets/medii-defav.jpeg', alt: 'Copii din comunități defavorizate', name: 'objective-1.jpeg' },
  obj2: { rel: 'Donate/assets/img3.jpeg', alt: 'Elevi la cursuri Learnity', name: 'objective-2.jpeg' },
  obj3: { rel: 'Donate/assets/outside-world.jpeg', alt: 'Tineri în experiențe practice', name: 'objective-3.jpeg' },

  showCoping: { rel: 'Playground/assets/coping.jpeg', alt: 'Coping Mechanisms', name: 'showcase-coping.jpeg' },
  showTraditii: { rel: 'Playground/assets/traditii.jpeg', alt: 'Tradiții libaneze', name: 'showcase-traditii.jpeg' },
  showCinema: { rel: 'Playground/assets/cinema.jpeg', alt: 'Arta cinematografiei', name: 'showcase-cinema.jpeg' },
  showBookClub: { rel: 'Playground/assets/book-club.jpeg', alt: 'Clubul de carte', name: 'showcase-book-club.jpeg' },
  showJam: { rel: 'Playground/assets/jam.jpg', alt: 'Jam Sessions', name: 'showcase-jam.jpg' },
  showPhoto: { rel: 'Playground/assets/photo.jpg', alt: 'Grupul de foto', name: 'showcase-photo.jpg' },
  showHalloween: { rel: 'Playground/assets/pg2.jpg', alt: 'Halloweenity', name: 'showcase-halloweenity.jpg' },
  showTreasure: { rel: 'Playground/assets/trasure_hunt.jpeg', alt: 'Treasure Hunt', name: 'showcase-treasure-hunt.jpeg' },

  cPsihologie: { rel: 'About/assets/psiho.jpeg', alt: 'Psihologie aplicată', name: 'course-psihologie.jpeg' },
  cComunicare: { rel: 'About/assets/comunicare.jpg', alt: 'Comunicare', name: 'course-comunicare.jpg' },
  cPastila: { rel: 'About/assets/pastila-de-arta.jpg', alt: 'Pastila de Artă', name: 'course-pastila-de-arta.jpg' },
  cAntreprenoriat: { rel: 'About/assets/pda.jpeg', alt: 'Povești despre antreprenoriat', name: 'course-antreprenoriat.jpeg' },
  cMarketing: { rel: 'About/assets/hotii-de-subiecte.jpg', alt: 'Marketing: Hoții de subiecte', name: 'course-marketing.jpg' },
  cFilosofie: { rel: 'About/assets/filosofie.jpg', alt: 'Filosofie politică', name: 'course-filosofie.jpg' },
  cRelatii: { rel: 'About/assets/ri.jpg', alt: 'Relații internaționale', name: 'course-relatii-internationale.jpg' },
  cCreative: { rel: 'About/assets/creative-thinking.jpg', alt: 'Creative Thinking', name: 'course-creative-thinking.jpg' },
  cToBe: { rel: 'About/assets/paty.jpeg', alt: 'To be or not to be', name: 'course-to-be-or-not-to-be.jpeg' },
  cSelfDiscovery: { rel: 'About/assets/sdj.jpeg', alt: 'Self Discovery Journey', name: 'course-self-discovery.jpeg' },
  cOnYourMagic: { rel: 'About/assets/oymys.jpg', alt: 'On Your Magic & Your Shit', name: 'course-on-your-magic.jpg' },
  cBuild: { rel: 'About/assets/build.jpeg', alt: 'Build Up Camp', name: 'course-build-up-camp.jpeg' },
  cThinkBig: { rel: 'About/assets/thinkbig.jpeg', alt: 'Think Big Camp', name: 'course-think-big-camp.jpeg' },
  cCreate: { rel: 'About/assets/create.jpeg', alt: 'Create Camp', name: 'course-create-camp.jpeg' },
  cBranding: { rel: 'About/assets/branding.jpeg', alt: 'Personal Branding', name: 'course-personal-branding.jpeg' },
  cWriting: { rel: 'About/assets/writing.jpeg', alt: 'Creative Writing', name: 'course-creative-writing.jpeg' },
}

const upload = async (payload: Payload, spec: UploadSpec): Promise<number> => {
  const existing = await payload.find({
    collection: 'media',
    where: { filename: { equals: spec.name } },
    limit: 1,
    depth: 0,
  })
  if (existing.totalDocs > 0) return existing.docs[0].id as number

  const abs = path.resolve(ROOT, SRC, spec.rel)
  if (!fs.existsSync(abs)) throw new Error(`Missing asset: ${abs}`)
  const data = fs.readFileSync(abs)
  const ext = path.extname(spec.name).toLowerCase()
  const mimetype = ext === '.png' ? 'image/png' : 'image/jpeg'
  const doc = await payload.create({
    collection: 'media',
    depth: 0,
    data: { alt: spec.alt },
    file: { name: spec.name, data, mimetype, size: data.byteLength },
  })
  return doc.id as number
}

const links = (...items: { url: string; label: string; newTab?: boolean }[]) =>
  items.map((i) => ({
    link: { type: 'custom' as const, newTab: i.newTab ?? false, url: i.url, label: i.label },
  }))

const slugify = (s: string) =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

const run = async () => {
  const payload = await getPayload({ config })

  payload.logger.info('— Uploading media…')
  const M: Record<string, number> = {}
  for (const [key, spec] of Object.entries(UPLOADS)) M[key] = await upload(payload, spec)
  payload.logger.info(`Uploaded/resolved ${Object.keys(M).length} media files.`)

  // ── Events (for home playgroundExamples) ────────────────────────────────
  const eventDefs = [
    {
      title: 'Excursie: Târgu de Crăciun din Craiova',
      text: 'Câțiva learnitași au petrecut o zi la Târgu de Crăciun din Craiova, într-o excursie organizată de Grupul de Fotografie. Ne-am bucurat de oraș, de momente împreună și de magia iernii, într-o atmosferă caldă și plină de voie bună.',
      photo: M.pgEvent1,
      date: '2024-12-20T00:00:00.000Z',
    },
    {
      title: 'Halloweenity',
      text: '🎃 La "Halloweenity", anuala petrecere de Halloween, ne-am costumat, am sculptat dovleci, ne-am jucat diverse joculețe, am avut un murder mystery, iar la final am avut premii și snack-uri tematice. 😋',
      photo: M.pgEvent2,
      date: '2024-10-18T00:00:00.000Z',
    },
    {
      title: 'Playground Day',
      text: 'La Playground Day reflectăm asupra obiectivelor noastre de învățare și stabilim ce alte experiențe de învățare ne dorim în continuare. Learnitașii își stabilesc obiectivele de învățare pe care vor să se concentreze și le transformă în "Badges" – reprezentări grafice ale obiectivului de învățare.',
      photo: M.pgEvent3,
      date: '2024-12-11T00:00:00.000Z',
    },
  ]

  const eventIds: number[] = []
  for (const e of eventDefs) {
    const slug = slugify(e.title)
    const found = await payload.find({
      collection: 'events',
      where: { slug: { equals: slug } },
      limit: 1,
      depth: 0,
    })
    if (found.totalDocs > 0) {
      eventIds.push(found.docs[0].id as number)
      continue
    }
    const created = await payload.create({
      collection: 'events',
      depth: 0,
      data: {
        title: e.title,
        slug,
        description: lex(e.text),
        photo: e.photo,
        date: e.date,
        publishedAt: e.date,
        _status: 'published',
      },
    })
    eventIds.push(created.id as number)
  }
  payload.logger.info(`Events ready: ${eventIds.join(', ')}.`)

  // ── New blocks ──────────────────────────────────────────────────────────
  const playgroundExamples = {
    blockType: 'playgroundExamples' as const,
    sectionTitle: 'Câteva evenimente din Playground',
    sectionDescription:
      'Learnitașii organizează evenimente pentru întreaga comunitate, sub ghidajul și îndrumarea noastră.',
    events: eventIds,
    links: links({ url: '/playground/events', label: 'Vezi mai mult din Playground' }),
  }

  const whatTheFuture = {
    blockType: 'whatTheFuture' as const,
    badgeText: 'Eveniment',
    heading: 'What The Future',
    subtitle: 'Un eveniment despre carieră, vocație și viitor',
    description: lex(
      'What The Future este evenimentul Learnity dedicat liceenilor care își caută direcția. Într-o zi plină de energie, întâlnești oameni care lucrează în domenii diferite și afli, în mod autentic, cum arată drumul lor.',
    ),
    longDescription: lex(
      'Vorbim deschis despre carieră, vocație și viitor, fără rețete prestabilite. Prin ateliere, discuții și povești reale, descoperi ce opțiuni există, cum să le explorezi și cum să-ți construiești propriul traseu. Vine cu întrebări, pleacă cu claritate.',
    ),
    image1: M.wtf1,
    image2: M.wtf2,
    links: links(
      { url: '/what-the-future', label: 'Înscrie-te acum' },
      { url: '/what-the-future', label: 'Detalii complete' },
    ),
  }

  const camps = { blockType: 'camps' as const, image: M.campDare }

  const testimonials = {
    blockType: 'testimonials' as const,
    sectionTitle: 'Testimoniale',
    autoAdvanceInterval: 6000,
    testimonials: [
      {
        name: 'Sânziana Tudose',
        role: 'Learnity Alumni',
        image: M.testSanzi,
        text: 'Learnity mi-a oferit un spațiu în care am învățat să mă ascult, să nu mi fie frică să greșesc și să-mi urmez curiozitatea. Aici am descoperit că învățarea poate fi o bucurie.',
      },
      {
        name: 'Karla Ezaru',
        role: 'Learnitaș',
        image: M.testKarla,
        text: 'Am găsit la Learnity oameni care cred în mine. Fiecare curs m-a ajutat să-mi cunosc mai bine valorile și să-mi găsesc vocea.',
      },
      {
        name: 'Andronachi Răzvan',
        role: 'Learnitaș',
        image: M.testRazvan,
        text: 'Learnity este locul unde am înțeles că educația nu trebuie să fie pe silă, ci o călătorie în care înveți cu plăcere, alături de oameni care te susțin.',
      },
      {
        name: 'Mihaela Danilov',
        role: 'Learnitaș',
        image: M.testMihaela,
        text: 'Learnity m-a ajutat să-mi descopăr pasiunile și să am încredere în propriile idei. Recomand cu drag oricui vrea să învețe altfel.',
      },
    ],
  }

  const presentCourses = {
    blockType: 'presentCourses' as const,
    badge: 'About Learnity',
    sectionTitle: 'Cursurile acestui an',
    sectionDescription: lex(
      'Fiecare modul aduce împreună cursuri care dezvoltă elevii pe plan artistic, științific și uman. Descoperă mai jos cursurile susținute de mentorii noștri.',
    ),
    ctaText: 'Înscrie-te la cursuri',
    links: links({ url: '/contact', label: 'Înscrie-te la cursuri' }),
    modules: [
      {
        name: 'Modulul 1',
        description: 'Cursuri care dezvoltă exprimarea artistică, imaginația și gândirea creativă.',
        items: [
          {
            title: 'Psihologie aplicată',
            description:
              'Ești pasionat de psihologie și de firea umană? Vrei să înțelegi mai bine subiecte precum mecanismele de apărare, tulburările de personalitate și traumele de respingere și de abandon? Prin intermediul cursului de „Psihologie Aplicată”, susținut de psihoterapeutul și psihologul clinician Alexandru Necșulescu, vei primi răspunsuri la aceste întrebări (și nu numai) și vei putea explora aceste subiecte prin intermediul exercițiilor practice din fiecare sesiune.',
            teacher: 'Alex Necșulescu',
            place: 'Str. Duzilor nr. 23',
            timeperiod: 'Luni, 19:30 - 21:30',
            image: M.cPsihologie,
          },
          {
            title: 'Comunicare',
            description:
              'Te invităm la un curs captivant despre comunicare, unde vom descoperi împreună cele trei stări: Părinte, Adult și Copil și modul în care acestea ne modelează comportamentul în relații. Vom explora cum se manifestă fiecare stare în comunicarea noastră de zi cu zi și cum influențează felul în care suntem percepuți și în care suntem tratați de ceilalți.',
            teacher: 'Smaranda Nay',
            place: 'Str. Duzilor nr. 23',
            timeperiod: 'Marți, 19:30 - 21:30',
            image: M.cComunicare,
          },
          {
            title: 'Pastila de Artă',
            description:
              'Arta este pentru toată lumea, oricine poate să se exprime prin intermediul său. Nivelul de skill-uri sau cunoștințe nu contează, ci doar dorința și curajul de a-ți exterioriza trăirile și ideile prin această modalitate. Vom explora diferite tipuri de artă – pictura, modelajul, fotografia, gravura – fiecare având profesori specializați.',
            teacher: 'Andra Achim, Ana Guțǎ, Emma Blaga, Costin Duțu',
            place: 'Str. Duzilor nr. 23',
            timeperiod: 'Luni, 19:30 - 21:30',
            image: M.cPastila,
          },
          {
            title: 'Povești despre antreprenoriat',
            description:
              'Te interesează domeniul antreprenoriatului și ți-ai dori să afli cum arată viața unui antreprenor? Vrei să știi care este importanța cifrelor într-o afacere, cum să îți prezinți proiectul sau cum să îți creezi echipa? Cursul „Povești despre antreprenoriat”, susținut de Cristian Chirnogeanu, își propune să vină cu răspunsuri prin poveștile și experiențele altor antreprenori invitați.',
            teacher: 'Cristi Chirnogeanu',
            place: 'Str. Duzilor nr. 23',
            timeperiod: 'Joi, 19:30 - 21:30',
            image: M.cAntreprenoriat,
          },
          {
            title: 'Marketing: "Hoții de subiecte"',
            description:
              'Anul acesta, Learnity a colaborat cu Promocrat pentru a crea o experiență cât mai aplicată și fun pentru elevii pasionați de marketing. Ghidați de Cosmin Muscălescu, pe parcursul primului modul, learnitașii au avut ocazia să contribuie la gândirea și implementarea strategiei de promovare pentru filmul „Hoții de Subiecte”.',
            teacher: 'Cosmin Mușcălescu',
            place: 'Str. Duzilor nr. 23',
            timeperiod: 'Joi, 19:30 - 21:30',
            image: M.cMarketing,
          },
        ],
      },
      {
        name: 'Modulul 2',
        description: 'Cursuri care explorează știința, tehnologia și gândirea critică într-un mod practic.',
        items: [
          {
            title: 'Filosofie politică',
            description:
              'Un curs care pune întrebări fundamentale despre putere, dreptate și organizarea societății, pornind de la texte și dezbateri actuale.',
            teacher: 'Petrișor Ivan',
            place: 'Str. Duzilor nr. 23',
            timeperiod: 'Luni, 19:30 - 21:30',
            image: M.cFilosofie,
          },
          {
            title: 'Relații internaționale',
            description:
              'Ești interesat de relațiile diplomatice dintre state? Vrei să afli mai multe despre cum funcționează mecanismele din spatele instituțiilor care guvernează, despre regimurile politice și chiar despre drepturile tale? Hai la cursul „Relații internaționale”, susținut de Rebeca Bașuț și Teodora Bălăceanu, unde îți vom răspunde la toate aceste întrebări, punând informațiile în contexte actuale și relevante pentru generația noastră.',
            teacher: 'Rebeca Bășuț & Teodora Bălăceanu',
            place: 'Str. Duzilor nr. 23',
            timeperiod: 'Luni, 19:30 - 21:30',
            image: M.cRelatii,
          },
          {
            title: 'Creative Thinking',
            description:
              'Un curs care antrenează gândirea creativă prin exerciții practice, jocuri și aplicații din lumea reală, dezvoltând încrederea în propriile idei.',
            teacher: 'Cosmin Mușcălescu',
            place: 'Str. Duzilor nr. 23',
            timeperiod: 'Joi, 19:30 - 21:30',
            image: M.cCreative,
          },
          {
            title: 'To be or not to be',
            description:
              'Vrei să afli mai multe despre tine, să-ți ieși din zona de confort și să înveți să te exprimi liber? Dacă răspunsul este da, atunci cursul "To be or not to be", susținut de Patricia Katona, s-ar putea să fie exact ce ai nevoie. Prin intermediul jocurilor de actorie și de improvizație, te vom ajuta să scapi de inhibiții și să faci cunoștință cu varianta ta cea mai autentică.',
            teacher: 'Patricia Katone',
            place: 'Str. Duzilor nr. 23',
            timeperiod: 'Marți, 19:30 - 21:30',
            image: M.cToBe,
          },
          {
            title: 'Self Discovery Journey',
            description:
              'O călătorie de autocunoaștere prin exerciții ghidate, reflecție și discuții, pentru a-ți înțelege mai bine emoțiile, valorile și direcția.',
            teacher: 'Miruna Anin',
            place: 'Str. Duzilor nr. 23',
            timeperiod: 'Vineri, 19:30 - 21:30',
            image: M.cSelfDiscovery,
          },
          {
            title: 'On Your Magic & Your Shit',
            description:
              'Un curs despre autenticitate, vulnerabilitate și puterea de a-ți asuma atât strălucirea, cât și imperfecțiunile.',
            teacher: 'Andreea Mirescu',
            place: 'Str. Duzilor nr. 23',
            timeperiod: 'Joi, 19:30 - 21:30',
            image: M.cOnYourMagic,
          },
        ],
      },
      {
        name: 'Modulul 3',
        description: 'Cursuri care dezvoltă competențe esențiale de viață, inteligență emoțională și bunăstare.',
        items: [
          {
            title: 'Build Up Camp',
            description:
              'Construim căsuțe și deconstruim concepții. Trei zile în mijlocul naturii, departe de agitația orașului, în care ne reconectăm la un alt ritm de viață, punem mâna pe unelte și ne întrebăm ce fel de lume vrem să construim – în afara și înăuntrul nostru. Un bootcamp despre viață alternativă, comunitate, perspective noi și autenticitate.',
            teacher: 'Traian Brumă',
            place: 'Zona Vălenii de Munte',
            timeperiod: '20 - 22 iunie',
            image: M.cBuild,
          },
          {
            title: 'Think Big Camp',
            description:
              'Ai o idee care merită să fie pusă în lume, dar nu știi de unde să începi? Timp de 3 zile, ne distrăm, transformăm ideile în concepte reale, ne antrenăm gândirea strategică și creativă și învățăm cum să lucrăm în echipă – cu scop, deadline și pitch. Proiectul câștigător va fi susținut de Learnity pentru a deveni realitate.',
            teacher: 'Cosmin Muscălescu',
            place: 'Slănic, Prahova',
            timeperiod: '16 - 18 mai',
            image: M.cThinkBig,
          },
          {
            title: 'Create Camp',
            description:
              'Trei zile la mare, departe de agitația orașului, în care ne dăm voie să simțim, să observăm și să spunem lucruri care contează – prin imagine, sunet și poveste. Explorăm, învățăm, ne exprimăm artistic și autentic. Un bootcamp pentru adolescenții care vor să-și găsească vocea și să o transpună în artă.',
            teacher: 'Emma Blaga, Costin Duțu',
            place: 'Corbu, Constanța',
            timeperiod: '13 - 15 iunie',
            image: M.cCreate,
          },
          {
            title: 'Personal Branding',
            description:
              'Cum te prezinți în fața lumii atunci când nu ești acolo să vorbești pentru tine? În acest curs de Personal Branding, Mihaela Tomescu – career coach și fondatoarea PuntoUp Impact – te va ajuta să înțelegi cum să îți construiești un brand personal autentic și puternic.',
            teacher: 'Mihaela Tomescu',
            place: 'Str. Duzilor nr. 23',
            timeperiod: 'Marți, 19:30 - 21:30',
            image: M.cBranding,
          },
          {
            title: 'Creative Writing',
            description:
              'Vrei să scrii, dar nu știi de unde să începi? Sau simți că ai povești de spus, dar cauți forma potrivită? Hai la cursul de Scriere Creativă, susținut de Ștefania Mihalache, poetă și prozatoare! Timp de 7 întâlniri, vei experimenta exerciții inedite care îți vor scoate creativitatea din zona de confort.',
            teacher: 'Ștefania Mihalache',
            place: 'Str. Duzilor nr. 23',
            timeperiod: 'Luni, 19:30 - 21:30',
            image: M.cWriting,
          },
        ],
      },
    ],
  }

  const rulesAndValues = {
    blockType: 'rulesAndValues' as const,
    sectionTitle: 'Valorile și regulile noastre',
    sectionDescription:
      'La Learnity, valorile și acordurile noastre comunitare creează o bază pentru învățarea plină de bucurie și creșterea personală. Aceste principii ghidează modul în care învățăm, interacționăm și creștem împreună.',
    values: [
      {
        title: 'Autonomie',
        description: lex(
          'Autonomia înseamnă încurajarea elevilor să ia decizii proprii, să-și urmeze curiozitatea și să învețe în ritmul lor. Ea promovează responsabilitatea personală, dezvoltarea gândirii critice și formarea unei identități autentice.',
        ),
        icon: 'lightbulb',
        color: 'blue',
      },
      {
        title: 'Proactivitate',
        description: lex(
          'Proactivitatea înseamnă încurajarea elevilor să inițieze acțiuni, să-și asume roluri active în procesul de învățare și să caute soluții înainte ca problemele să apară. Ea dezvoltă spiritul de inițiativă, încrederea în sine și implicarea conștientă în comunitate.',
        ),
        icon: 'heart',
        color: 'orange',
      },
      {
        title: 'Libertate',
        description: lex(
          'Libertatea, ca valoare într-o școală alternativă, presupune oferirea unui cadru flexibil în care elevii pot alege ce, cum și când să învețe. Aceasta cultivă autenticitatea, respectul pentru alegerile celorlalți și responsabilitatea față de propriul parcurs educațional.',
        ),
        icon: 'shield',
        color: 'blue',
      },
    ],
    rules: [
      {
        title: 'Libertatea mea se oprește unde începe libertatea ta',
        description: lex(
          'Acest principiu înseamnă că suntem liberi să facem alegeri, dar fără a-i răni sau a le încălca drepturile celorlalți. Libertatea fiecăruia trebuie să existe în echilibru cu libertatea celorlalți.',
        ),
      },
      {
        title: 'Principiul celor două picioare',
        description: lex(
          'Folosește-ți cele două picioare să te deplasezi din contextele care nu îți aduc valoare către cele care te ajută cu adevărat.',
        ),
      },
      {
        title: 'Responsabilitate',
        description: lex(
          'Am responsabilitate față de alegerile și de învățarea mea, dar și față de ceilalți și de spațiul pe care îl împărțim.',
        ),
      },
      {
        title: 'Safe environment',
        description: lex(
          'Ajută la menținerea siguranței fizice și emoționale pentru toți. Mișcă-te cu grijă în spațiile noastre, folosește materialele în mod corespunzător și gândește-te cum îți afectează cuvintele și acțiunile pe cei din jur.',
        ),
      },
      {
        title: 'Growth Mindset',
        description: lex(
          'Abordează provocările cu perseverență și cu încrederea că poți progresa. Greșelile sunt părți valoroase ale învățării! Primește feedbackul cu deschidere și sărbătorește-ți progresul.',
        ),
      },
    ],
  }

  const whySupport = {
    blockType: 'whySupport' as const,
    badgeText: 'Donează',
    heading: 'De ce să susții educația?',
    image: M.whySupportImg,
  }

  const objectives = {
    blockType: 'objectives' as const,
    badgeText: 'Implică-te',
    heading: 'Obiectivele noastre pentru 2025',
    sectionDescription:
      'Cu ajutorul donațiilor tale, putem transforma educația și crea oportunități pentru tinerii din România.',
    objectives: [
      {
        title: 'Acces la educație pentru comunități defavorizate',
        description:
          'Inspirate de experiența noastră în Brazilia, ne dorim să lansăm un proiect destinat adolescenților din medii vulnerabile, oferindu-le oportunități educaționale și mentorat.',
        target: 'Obiectiv: 100 de tineri în 2025',
        image: M.obj1,
        icon: 'users',
        color: 'blue',
      },
      {
        title: '„Susține un Learnitaș" – Burse pentru elevi',
        description:
          'Prin această inițiativă, oferim burse finanțate din donații, astfel încât educația alternativă să fie accesibilă tuturor celor care își doresc să crească alături de noi.',
        target: 'Obiectiv: 50 de burse în 2025',
        image: M.obj2,
        icon: 'bookOpen',
        color: 'orange',
      },
      {
        title: '„The Outside World" – Conectarea tinerilor cu lumea reală',
        description:
          'Oferim elevilor experiențe practice prin colaborări cu ONG-uri și companii – internshipuri, vizite și voluntariat pentru a explora domeniile care îi pasionează.',
        target: 'Obiectiv: 20 de parteneriate în 2025',
        image: M.obj3,
        icon: 'sparkles',
        color: 'lightOrange',
      },
    ],
  }

  const donationMethods = { blockType: 'donationMethods' as const }

  const donateFaq = {
    blockType: 'faq' as const,
    badgeText: 'Întrebări și Răspunsuri',
    sectionTitle: 'Întrebări Frecvente',
    sectionDescription: 'Află răspunsuri la cele mai comune întrebări despre donații și susținerea Learnity.',
    categories: [
      {
        name: 'Donații',
        icon: 'heart',
        questions: [
          {
            question: 'Cum sunt folosite donațiile?',
            answer:
              'Donațiile sunt folosite pentru a finanța programele noastre educaționale, pentru a oferi burse elevilor din medii defavorizate și pentru a dezvolta noi inițiative care să îmbunătățească accesul la educație de calitate.',
          },
          {
            question: 'Pot să deduc fiscal donația mea?',
            answer:
              'Da, Learnity este o organizație non-profit înregistrată legal, iar donațiile către noi sunt deductibile fiscal conform legislației în vigoare. Vei primi o confirmare a donației tale care poate fi folosită pentru deduceri fiscale.',
          },
          {
            question: 'Pot să donez și în alt mod decât financiar?',
            answer:
              'Absolut! Acceptăm și apreciem donații de materiale educaționale, echipamente, spații pentru evenimente sau chiar timp și expertiză. Contactează-ne pentru a discuta despre cum poți contribui.',
          },
        ],
      },
    ],
  }

  const guidedCourses = { blockType: 'guidedCourses' as const }

  const spinningTop = {
    blockType: 'spinningTop' as const,
    elements: [
      {
        label: 'Acțiune',
        description: 'Învățarea se întâmplă prin implicare activă și experimentare.',
        color: 'customOrange',
        link: { type: 'custom', newTab: false, url: '#elements-section', label: 'Descoperă' },
      },
      {
        label: 'Reflecție',
        description: 'Ne oprim să observăm, să înțelegem și să dăm sens experienței.',
        color: 'customBlue',
        link: { type: 'custom', newTab: false, url: '#elements-section', label: 'Descoperă' },
      },
      {
        label: 'Reziliență',
        description: 'Ne adaptăm, perseverăm și creștem prin provocări.',
        color: 'customLightOrange',
        link: { type: 'custom', newTab: false, url: '#elements-section', label: 'Descoperă' },
      },
      {
        label: 'Design',
        description: 'Îți proiectezi activ propria călătorie de învățare.',
        color: 'customLightBlue',
        link: { type: 'custom', newTab: false, url: '#elements-section', label: 'Descoperă' },
      },
    ],
  }

  const playgroundShowcase = {
    blockType: 'playgroundShowcase' as const,
    badge: 'Playground',
    sectionTitle: 'Learning Experiences',
    sectionDescription:
      'În Playground, elevii au oportunitatea de a-și lua învățarea în propriile mâini, fie prin a deveni ei profi și a susține workshop-uri, fie prin a organiza evenimente alături de alți learnitași pentru restul comunității, sub ghidajul și îndrumarea noastră.',
    tabs: [
      {
        label: 'Workshop-uri',
        cards: [
          {
            title: 'Coping Mechanisms',
            description:
              'La workshopul despre coping mechanisms, am vorbit deschis despre cum facem față emoțiilor puternice, stresului sau situațiilor dificile din viața de zi cu zi. Prin exemple concrete, jocuri și discuții relaxate, am descoperit metode simple și sănătoase de a ne recăpăta echilibrul.',
            image: M.showCoping,
            meta: '15 Iunie 2023',
            icon: 'brain',
          },
          {
            title: 'Tradiții libaneze',
            description:
              'Un workshop care ne-a adus mai aproape de o cultură diferită, prin povești, gusturi și sunete. Am învățat primele litere din alfabetul arab și ne-am bucurat de falafel și humus gătite chiar de gazda noastră.',
            image: M.showTraditii,
            meta: '22 Iulie 2023',
            icon: 'globe',
          },
          {
            title: 'Arta cinematografiei',
            description:
              'La workshopul despre arta cinematografiei am descoperit cum se construiește o poveste pe ecran, de la scenariu și cadru, până la lumină și montaj. Un spațiu creativ din care fiecare a plecat cu idei noi și informații utile.',
            image: M.showCinema,
            meta: '5 August 2023',
            icon: 'play',
          },
        ],
      },
      {
        label: 'Grupuri',
        cards: [
          {
            title: 'Clubul de carte',
            description:
              'Un grup pentru cei care iubesc lectura și vor să descopere cărți noi împreună. Ne întâlnim lunar, împărtășim impresii și ne bucurăm de discuții calde într-o atmosferă relaxată.',
            image: M.showBookClub,
            meta: 'În fiecare Marți',
            icon: 'book',
          },
          {
            title: 'Jam Sessions',
            description:
              'Un grup de muzică în care nu contează nivelul de skill, ci dorința de a crea împreună. Explorăm ritmuri, improvizăm și ne bucurăm de energia muzicii alături de ceilalți.',
            image: M.showJam,
            meta: 'În fiecare Joi',
            icon: 'music',
          },
          {
            title: 'Grupul de foto',
            description:
              'Un grup dedicat pasionaților de fotografie, care explorează orașul, învață tehnici noi și surprind lumea prin obiectivul camerei, antrenându-și ochiul artistic împreună.',
            image: M.showPhoto,
            meta: 'În fiecare Vineri',
            icon: 'palette',
          },
        ],
      },
      {
        label: 'Evenimente',
        cards: [
          {
            title: 'Halloweenity',
            description:
              '🎃 La "Halloweenity", anuala petrecere de Halloween, ne-am costumat, am sculptat dovleci, ne-am jucat diverse joculețe, am avut un murder mystery, iar la final am avut premii și snack-uri tematice. 😋',
            image: M.showHalloween,
            meta: '18 Octombrie 2024',
            icon: 'sparkles',
          },
          {
            title: 'Excursie Foto',
            description:
              'Ne-am urcat în tren și am plecat într-o excursie de o zi spre Târgul de Crăciun din Craiova, organizată de Grupul de Fotografie. Am explorat orașul și ne-am bucurat cu toții de spiritul Crăciunului.',
            image: M.pgEvent1,
            meta: '20 Decembrie 2024',
            icon: 'map',
          },
          {
            title: 'Treasure Hunt',
            description:
              'Un joc de orientare în echipă care combină explorarea, gândirea strategică și multă distracție. Learnitașii colaborează pentru a găsi indiciile și a ajunge la comoară.',
            image: M.showTreasure,
            meta: '25 Septembrie 2023',
            icon: 'compass',
          },
        ],
      },
    ],
  }

  playgroundShowcase.tabs.forEach((tab) => {
    tab.cards.forEach((card) => {
      ;(card as any).link = { type: 'custom', newTab: false, url: '/playground', label: 'Vezi mai mult' }
    })
  })

  const playgroundExamplesHome = playgroundExamples

  // ── Assemble page layouts ───────────────────────────────────────────────
  const getPage = async (slug: string) => {
    const res = await payload.find({ collection: 'pages', where: { slug: { equals: slug } }, limit: 1, depth: 0 })
    if (res.totalDocs === 0) throw new Error(`Page not found: ${slug}`)
    return res.docs[0]
  }
  const byType = (page: any): Record<string, any> =>
    Object.fromEntries(((page.layout as any[]) || []).map((b) => [b.blockType, b]))
  const pick = (byType: Record<string, any>, ...types: string[]) => types.map((t) => byType[t]).filter(Boolean)

  const updatePage = async (slug: string, layout: any[], extra: Record<string, any> = {}) => {
    const page = await getPage(slug)
    await payload.update({
      collection: 'pages',
      id: page.id,
      data: { layout, _status: 'published', ...extra },
      context: { disableRevalidate: true },
    })
    payload.logger.info(`Updated page "${slug}" → [${layout.map((b) => b.blockType).join(', ')}]`)
  }

  // home
  {
    const page = await getPage('home')
    const t = byType(page)
    await updatePage('home', [
      ...pick(t, 'about'),
      ...pick(t, 'guided'),
      ...pick(t, 'guidedExamples'),
      ...pick(t, 'playground'),
      playgroundExamplesHome,
      whatTheFuture,
      camps,
      testimonials,
      ...pick(t, 'faq'),
      ...pick(t, 'donate'),
    ])
  }

  // despre-noi
  {
    const page = await getPage('despre-noi')
    const t = byType(page)
    await updatePage(
      'despre-noi',
      [...pick(t, 'timeline'), presentCourses, rulesAndValues],
      {
        hero: {
          ...(page as any).hero,
          title: 'Despre Noi',
          heading: 'Despre Noi',
          subtitle:
            'Povestea Learnity: cum am pornit, ce am construit și unde mergem. O comunitate care învață altfel, cu autonomie, curiozitate și bucurie.',
        },
      },
    )
  }

  // doneaza
  {
    const page = await getPage('doneaza')
    const t = byType(page)
    await updatePage('doneaza', [
      whySupport,
      objectives,
      donationMethods,
      donateFaq,
      ...pick(t, 'cta'),
    ])
  }

  // guided-learning
  {
    const page = await getPage('guided-learning')
    const t = byType(page)
    const existingCourses = pick(t, 'guidedCourses')
    await updatePage('guided-learning', [
      ...(existingCourses.length ? existingCourses : [guidedCourses]),
      ...pick(t, 'teachers'),
      ...pick(t, 'cta'),
    ])
  }

  // playground
  {
    const page = await getPage('playground')
    const t = byType(page)
    await updatePage(
      'playground',
      [spinningTop, ...pick(t, 'playgroundJourney'), playgroundShowcase],
      {
        hero: {
          ...(page as any).hero,
          title: 'Playground',
          heading: 'Playground',
        },
      },
    )
  }

  // contact: fix form title
  {
    const page = await getPage('contact')
    const layout = ((page.layout as any[]) || []).map((b) =>
      b.blockType === 'formBlock' ? { ...b, sectionTitle: 'Contactează-ne' } : b,
    )
    await updatePage('contact', layout)
  }

  payload.logger.info('✅ Seed complete.')
  process.exit(0)
}

run().catch((e) => {
  console.error(e?.data?.errors ? JSON.stringify(e.data.errors, null, 2) : e)
  process.exit(1)
})
