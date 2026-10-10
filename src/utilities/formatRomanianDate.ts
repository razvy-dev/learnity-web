const RO_MONTHS = [
  'ianuarie',
  'februarie',
  'martie',
  'aprilie',
  'mai',
  'iunie',
  'iulie',
  'august',
  'septembrie',
  'octombrie',
  'noiembrie',
  'decembrie',
]

export function formatRomanianDate(value?: string | null): string {
  if (!value) return ''

  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Europe/Bucharest',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  }).formatToParts(new Date(value))

  const get = (type: string) => parts.find((part) => part.type === type)?.value ?? ''
  const day = Number(get('day'))
  const month = Number(get('month'))
  const year = get('year')

  if (!day || !month || !year) return ''

  return `${day} ${RO_MONTHS[month - 1]}, ${year}`
}
