import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'

type LexicalTextNode = {
  detail: number
  format: number
  mode: 'normal'
  style: string
  text: string
  type: 'text'
  version: 1
}

type LexicalParagraphNode = {
  children: LexicalTextNode[]
  direction: 'ltr'
  format: ''
  indent: 0
  textFormat: 0
  textStyle: ''
  type: 'paragraph'
  version: 1
}

/**
 * Builds a single Lexical text node.
 */
export const lexicalText = (text: string): LexicalTextNode => ({
  type: 'text',
  detail: 0,
  format: 0,
  mode: 'normal',
  style: '',
  text,
  version: 1,
})

/**
 * Builds a Lexical paragraph node.
 */
export const lexicalParagraph = (text: string): LexicalParagraphNode => ({
  type: 'paragraph',
  children: [lexicalText(text)],
  direction: 'ltr',
  format: '',
  indent: 0,
  textFormat: 0,
  textStyle: '',
  version: 1,
})

/**
 * Builds a Lexical `SerializedEditorState` from plain strings, one per paragraph.
 *
 * Use this for `defaultValue` of `richText` fields. Passing a bare array of
 * `{ type: 'paragraph', children: [...] }` throws at runtime, because that is
 * the old Slate shape and Lexical expects the value to be wrapped in `root`.
 */
export const lexicalEditorState = (...paragraphs: string[]): DefaultTypedEditorState => ({
  root: {
    type: 'root',
    children: paragraphs.map(lexicalParagraph),
    direction: 'ltr',
    format: '',
    indent: 0,
    version: 1,
  },
})