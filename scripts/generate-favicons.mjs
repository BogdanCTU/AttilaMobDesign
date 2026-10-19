// ============================================================
// Favicon and Browser Asset Generator – MobAtidor
// Reads public/images/MobAtidorLogo.png (preserved original)
// Generates:
// - public/favicon-16x16.png
// - public/favicon-32x32.png
// - public/favicon.ico (16, 32, 48)
// - public/apple-touch-icon.png (180x180)
// - public/apple-touch-icon-precomposed.png (180x180)
// - public/android-chrome-192x192.png (192x192)
// - public/android-chrome-512x512.png (512x512)
// - public/favicon.svg
// - public/site.webmanifest
// ============================================================

import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const SOURCE_LOGO = path.join(ROOT, 'public', 'images', 'MobAtidorLogo.png')
const PUBLIC_DIR = path.join(ROOT, 'public')

// Logo exact bounding box in 770x770 original
const BBOX = { left: 8, top: 130, width: 754, height: 496 }

function createIco(images) {
  const count = images.length
  const headerSize = 6
  const dirEntrySize = 16
  const dirSize = count * dirEntrySize
  let offset = headerSize + dirSize

  const header = Buffer.alloc(headerSize)
  header.writeUInt16LE(0, 0) // Reserved
  header.writeUInt16LE(1, 2) // Type 1 = ICO
  header.writeUInt16LE(count, 4) // Number of images

  const entries = []
  for (const img of images) {
    const entry = Buffer.alloc(dirEntrySize)
    entry.writeUInt8(img.width === 256 ? 0 : img.width, 0)
    entry.writeUInt8(img.height === 256 ? 0 : img.height, 1)
    entry.writeUInt8(0, 2) // Color count (0 = >=8bpp)
    entry.writeUInt8(0, 3) // Reserved
    entry.writeUInt16LE(1, 4) // Color planes
    entry.writeUInt16LE(32, 6) // Bits per pixel
    entry.writeUInt32LE(img.buffer.length, 8) // Size of image data
    entry.writeUInt32LE(offset, 12) // Offset of image data
    entries.push(entry)
    offset += img.buffer.length
  }

  return Buffer.concat([header, ...entries, ...images.map((img) => img.buffer)])
}

/**
 * Creates a square icon with the logo centered and padded to prevent clipping.
 */
async function generateSquareIcon(targetSize, scaleFactor = 0.86) {
  const contentWidth = Math.max(1, Math.round(targetSize * scaleFactor))
  const contentHeight = Math.max(1, Math.round(contentWidth * (BBOX.height / BBOX.width)))

  const resizedContent = await sharp(SOURCE_LOGO)
    .extract(BBOX)
    .resize(contentWidth, contentHeight, { fit: 'fill', kernel: 'lanczos3' })
    .toBuffer()

  return sharp({
    create: {
      width: targetSize,
      height: targetSize,
      channels: 3,
      background: '#FFFFFF',
    },
  })
    .composite([{ input: resizedContent, gravity: 'center' }])
    .png({ compressionLevel: 9 })
    .toBuffer()
}

async function run() {
  console.log('Generating browser branding assets from:', SOURCE_LOGO)

  // Verify source logo exists
  await fs.access(SOURCE_LOGO)

  // 1. Generate PNG variants
  const sizes = [
    { name: 'favicon-16x16.png', size: 16, scale: 0.90 },
    { name: 'favicon-32x32.png', size: 32, scale: 0.88 },
    { name: 'apple-touch-icon.png', size: 180, scale: 0.84 },
    { name: 'apple-touch-icon-precomposed.png', size: 180, scale: 0.84 },
    { name: 'android-chrome-192x192.png', size: 192, scale: 0.84 },
    { name: 'android-chrome-512x512.png', size: 512, scale: 0.84 },
  ]

  for (const { name, size, scale } of sizes) {
    const buf = await generateSquareIcon(size, scale)
    const dest = path.join(PUBLIC_DIR, name)
    await fs.writeFile(dest, buf)
    console.log(`✓ Generated ${name} (${size}x${size})`)
  }

  // 2. Generate multi-resolution favicon.ico (16x16, 32x32, 48x48)
  const icoSizes = [
    { size: 16, scale: 0.90 },
    { size: 32, scale: 0.88 },
    { size: 48, scale: 0.86 },
  ]
  const icoImages = []
  for (const { size, scale } of icoSizes) {
    const buf = await generateSquareIcon(size, scale)
    icoImages.push({ width: size, height: size, buffer: buf })
  }
  const icoBuffer = createIco(icoImages)
  await fs.writeFile(path.join(PUBLIC_DIR, 'favicon.ico'), icoBuffer)
  console.log('✓ Generated favicon.ico (16, 32, 48)')

  // 3. Generate favicon.svg containing embedded high-resolution vector/image container
  const svgBuf = await generateSquareIcon(512, 0.84)
  const b64 = svgBuf.toString('base64')
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <rect width="512" height="512" fill="#FFFFFF"/>
  <image href="data:image/png;base64,${b64}" width="512" height="512"/>
</svg>
`
  await fs.writeFile(path.join(PUBLIC_DIR, 'favicon.svg'), svgContent, 'utf8')
  console.log('✓ Updated favicon.svg with business logo')

  // 4. Generate site.webmanifest
  const manifest = {
    name: 'MobAtidor – AttilaMobDesign',
    short_name: 'MobAtidor',
    description: 'Mobilier la comandă în Ocna Mureș și județul Alba. Producător MOBATIDOR SRL.',
    icons: [
      {
        src: './android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any maskable',
      },
      {
        src: './android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      },
    ],
    theme_color: '#8F5434',
    background_color: '#FFFFFF',
    display: 'standalone',
    start_url: './',
  }

  await fs.writeFile(
    path.join(PUBLIC_DIR, 'site.webmanifest'),
    JSON.stringify(manifest, null, 2) + '\n',
    'utf8',
  )
  console.log('✓ Generated site.webmanifest')
}

run().catch((err) => {
  console.error('Error generating assets:', err)
  process.exit(1)
})
