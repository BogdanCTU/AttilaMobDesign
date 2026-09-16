import { useState, useCallback } from 'react'
import type { GalleryImage } from '../../config/images'
import Lightbox from '../Lightbox/Lightbox'
import styles from './Gallery.module.css'

interface GalleryProps {
  images: GalleryImage[]
  columns?: 2 | 3 | 4
  showCount?: number    // 0 = show all
}

export default function Gallery({ images, columns = 3, showCount = 0 }: GalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const displayImages = showCount > 0 ? images.slice(0, showCount) : images

  const openLightbox = useCallback((index: number) => setLightboxIndex(index), [])
  const closeLightbox = useCallback(() => setLightboxIndex(null), [])
  const prev = useCallback(() =>
    setLightboxIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length)), [images.length])
  const next = useCallback(() =>
    setLightboxIndex((i) => (i === null ? null : (i + 1) % images.length)), [images.length])

  const colClass = columns === 2 ? styles.cols2 : columns === 4 ? styles.cols4 : styles.cols3

  return (
    <>
      <div className={`${styles.grid} ${colClass}`} role="list" aria-label="Galerie proiecte">
        {displayImages.map((img, i) => (
          <button
            key={i}
            className={`${styles.item} ${img.aspectRatio === 'portrait' ? styles.portrait : ''}`}
            onClick={() => openLightbox(i)}
            role="listitem"
            aria-label={`Deschide imaginea: ${img.alt}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              decoding="async"
              className={styles.img}
            />
            <div className={styles.overlay} aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.icon}>
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                <line x1="11" y1="8" x2="11" y2="14"/>
                <line x1="8" y1="11" x2="14" y2="11"/>
              </svg>
            </div>
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prev}
          onNext={next}
        />
      )}
    </>
  )
}
