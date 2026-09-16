import { useEffect, useCallback } from 'react'
import type { GalleryImage } from '../../config/images'
import styles from './Lightbox.module.css'

interface LightboxProps {
  images: GalleryImage[]
  currentIndex: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export default function Lightbox({ images, currentIndex, onClose, onPrev, onNext }: LightboxProps) {
  const current = images[currentIndex]

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    switch (e.key) {
      case 'Escape': onClose(); break
      case 'ArrowLeft': onPrev(); break
      case 'ArrowRight': onNext(); break
    }
  }, [onClose, onPrev, onNext])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [handleKeyDown])

  // Touch swipe support
  let touchStartX = 0
  const handleTouchStart = (e: React.TouchEvent) => { touchStartX = e.touches[0].clientX }
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) { diff > 0 ? onNext() : onPrev() }
  }

  return (
    <div
      className={styles.overlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Imagine ${currentIndex + 1} din ${images.length}: ${current.alt}`}
    >
      {/* Counter */}
      <div className={styles.counter} aria-live="polite">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Close button */}
      <button className={styles.closeBtn} onClick={onClose} aria-label="Închide galeria">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>

      {/* Prev */}
      {images.length > 1 && (
        <button
          className={`${styles.navBtn} ${styles.prevBtn}`}
          onClick={(e) => { e.stopPropagation(); onPrev() }}
          aria-label="Imaginea anterioară"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <polyline points="15,18 9,12 15,6"/>
          </svg>
        </button>
      )}

      {/* Image */}
      <div
        className={styles.imageWrap}
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={current.src}
          alt={current.alt}
          className={styles.image}
          draggable={false}
        />
        <p className={styles.caption}>{current.alt}</p>
      </div>

      {/* Next */}
      {images.length > 1 && (
        <button
          className={`${styles.navBtn} ${styles.nextBtn}`}
          onClick={(e) => { e.stopPropagation(); onNext() }}
          aria-label="Imaginea următoare"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <polyline points="9,18 15,12 9,6"/>
          </svg>
        </button>
      )}

      {/* Dots */}
      {images.length > 1 && (
        <div className={styles.dots} role="tablist" aria-label="Navigare imagini">
          {images.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === currentIndex ? styles.dotActive : ''}`}
              onClick={(e) => { e.stopPropagation() }}
              role="tab"
              aria-selected={i === currentIndex}
              aria-label={`Imaginea ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
