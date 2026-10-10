export function richTextToPlainText(node: unknown): string {
  if (!node) return ''
  if (Array.isArray(node)) return node.map(richTextToPlainText).join('')
  if (typeof node !== 'object') return ''

  const record = node as { children?: unknown; text?: unknown; type?: unknown }

  if (typeof record.text === 'string') return record.text

  if (Array.isArray(record.children)) {
    const inner = record.children.map(richTextToPlainText).join('')
    return record.type === 'paragraph' || record.type === 'heading' ? `${inner} ` : inner
  }

  return ''
}
