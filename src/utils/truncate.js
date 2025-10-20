// Sentence-aware truncation utilities

function splitIntoSentences(text) {
  return text
    .replace(/\s+/g, ' ')
    .trim()
    .match(/[^.!?\n]+[.!?]?/g) || [text.trim()]
}

export function truncateByChars(text, maxChars) {
  if (!text || text.length <= maxChars) return text
  const slice = text.slice(0, maxChars)
  const lastSpace = slice.lastIndexOf(' ')
  const base = lastSpace > 40 ? slice.slice(0, lastSpace) : slice
  return base.replace(/[\s,;:-]+$/g, '') + '…'
}

export function truncateByWords(text, maxWords) {
  if (!text) return text
  const words = text.trim().split(/\s+/)
  if (words.length <= maxWords) return text
  const out = words.slice(0, maxWords).join(' ')
  return out + '…'
}

export function smartTruncate(text, { chars = 240, preferSentence = true } = {}) {
  if (!text) return text
  if (text.length <= chars) return text

  if (preferSentence) {
    const sentences = splitIntoSentences(text)
    let out = ''
    for (const s of sentences) {
      if ((out + s).length > chars) break
      out += s
    }
    if (out.length >= Math.min(60, chars * 0.4)) {
      return out.replace(/[\s,;:-]+$/g, '') + '…'
    }
  }
  return truncateByChars(text, chars)
}

