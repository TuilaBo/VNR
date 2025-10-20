import fs from 'fs/promises'
import path from 'path'
import mammoth from 'mammoth'

async function main() {
  const inputPath = process.argv[2]
  if (!inputPath) {
    console.error('Usage: node scripts/extract-docx.mjs <path-to-docx>')
    process.exit(1)
  }
  const absPath = path.resolve(inputPath)
  const result = await mammoth.convertToHtml({ path: absPath })
  const html = result.value
  await fs.mkdir('content', { recursive: true })
  const htmlOut = path.join('content', 'doc.html')
  await fs.writeFile(htmlOut, html, 'utf8')

  // naive block extraction: split by <p> and headings
  const blocks = []
  const regex = /<(h[1-6]|p)[^>]*>([\s\S]*?)<\/\1>/gi
  let match
  while ((match = regex.exec(html))) {
    const tag = match[1].toLowerCase()
    const text = match[2]
      .replace(/<[^>]+>/g, '')
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .trim()
    if (!text) continue
    blocks.push({ type: tag.startsWith('h') ? 'heading' : 'paragraph', level: tag.startsWith('h') ? Number(tag[1]) : undefined, text })
  }

  const jsonOut = path.join('content', 'doc.json')
  await fs.writeFile(jsonOut, JSON.stringify({ blocks }, null, 2), 'utf8')
  console.log(`Wrote: ${htmlOut} and ${jsonOut}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})

