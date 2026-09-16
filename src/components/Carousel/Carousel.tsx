import { useState, useCallback, useEffect, useRef } from 'react'
import type { GalleryImage } from '../../config/images'
import Lightbox from '../Lightbox/Lightbox'
import styles from './Carousel.module.css'

interface CarouselProps {
  images: GalleryImage[]
  autoPlay?: boolean
  autoPlayInterval?: number
}

export default function Carousel({ images, autoPlay = false, autoPlayInterval = 4000 }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const touchStartX = useRef(0)
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const prev = useCallback(() =>
    setCurrentIndex((i) => (i - 1 + images.length) % images.length), [images.length])
  const next = useCallback(() =>
    setCurrentIndex((i) => (i + 1) % images.length), [images.length])

  // AutoPlay
  useEffect(() => {
    if (!autoPlay) return
    autoPlayRef.current = setInterval(next, autoPlayInterval)
    return () => { if (autoPlayRef.current) clearInterval(autoPlayRef.current) }
  }, [autoPlay, autoPlayInterval, next])

  const pauseAutoPlay = () => { if (autoPlayRef.current) clearInterval(autoPlayRef.current) }

  const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX }
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) { diff > 0 ? next() : prev() }
  }

  return (
    <>
      <div
        className={styles.carousel}
        onMouseEnter={pauseAutoPlay}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        role="region"
        aria-label="Carusel proiecte"
        aria-roledescription="carousel"
      >
        {/* Main image */}
        <div className={styles.main}>
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className={styles.mainImg}
            loading="lazy"
            onClick={() => setLightboxIndex(currentIndex)}
          />
          <div className={styles.mainOverlay} onClick={() => setLightboxIndex(currentIndex)} aria-hidden="true">
            <span className={styles.mainOverlayText}>Click pentru mărire</span>
          </div>

          {/* Nav buttons */}
          <button className={`${styles.navBtn} ${styles.prevBtn}`} onClick={prev} aria-label="Imaginea anterioară">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <polyline points="15,18 9,12 15,6"/>
            </svg>
          </button>
          <button className={`${styles.navBtn} ${styles.nextBtn}`} onClick={next} aria-label="Imaginea următoare">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <polyline points="9,18 15,12 9,6"/>
            </svg>
          </button>

          {/* Counter */}
          <div className={styles.counter} aria-live="polite" aria-atomic="true">
            {currentIndex + 1} / {images.length}
          </div>
        </div>

        {/* Thumbnails */}
        <div className={styles.thumbs} role="tablist" aria-label="Miniaturi">
          {images.map((img, i) => (
            <button
              key={i}
              className={`${styles.thumb} ${i === currentIndex ? styles.thumbActive : ''}`}
              onClick={() => setCurrentIndex(i)}
              role="tab"
              aria-selected={i === currentIndex}
              aria-label={`Imaginea ${i + 1}: ${img.alt}`}
            >
              <img src={img.src} alt="" loading="lazy" decoding="async" />
            </button>
          ))}
        </div>

        {/* Dots for mobile */}
        <div className={styles.dots} role="tablist" aria-label="Navigare imagini">
          {images.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === currentIndex ? styles.dotActive : ''}`}
              onClick={() => setCurrentIndex(i)}
              role="tab"
              aria-selected={i === currentIndex}
              aria-label={`Imaginea ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((i) => i === null ? null : (i - 1 + images.length) % images.length)}
          onNext={() => setLightboxIndex((i) => i === null ? null : (i + 1) % images.length)}
        />
      )}
    </>
  )
}
