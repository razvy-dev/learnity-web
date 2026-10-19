import 'dotenv/config'
import { getPayload } from 'payload'
import fs from 'fs'
import path from 'path'

import config from '../src/payload.config'

const run = async () => {
  const payload = await getPayload({ config })

  const pages = await payload.find({ collection: 'pages', limit: 100, depth: 2, sort: 'slug' })
  const media = await payload.find({ collection: 'media', limit: 500, depth: 0, sort: 'filename' })
  const header = await payload.findGlobal({ slug: 'header', depth: 2 })

  const out = {
    pages: pages.docs.map((p: any) => ({
      id: p.id,
      slug: p.slug,
      title: p.title,
      layout: (p.layout || []).map((b: any) => b.blockType),
    })),
    media: media.docs.map((m: any) => ({ id: m.id, filename: m.filename, alt: m.alt })),
    headerNav: (header as any).navItems,
  }

  const outDir = path.resolve(process.cwd(), '.dump')
  fs.mkdirSync(outDir, { recursive: true })
  fs.writeFileSync(path.join(outDir, 'pages.json'), JSON.stringify(pages.docs, null, 2))
  fs.writeFileSync(path.join(outDir, 'summary.json'), JSON.stringify(out, null, 2))

  console.log(JSON.stringify(out, null, 2))
  process.exit(0)
}

run().catch((e) => {
  console.error(e)
  process.exit(1)
})
