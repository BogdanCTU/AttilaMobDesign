import { Link } from 'react-router-dom'
import type { Category } from '../../config/images'
import styles from './ProductCard.module.css'

interface ProductCardProps {
  category: Category
}

export default function ProductCard({ category }: ProductCardProps) {
  return (
    <Link
      to={`/produse/${category.slug}`}
      className={styles.card}
      aria-label={`Vedere produse: ${category.name}`}
    >
      <div className={styles.imgWrap}>
        <img
          src={category.cardImage}
          alt={category.name}
          loading="lazy"
          decoding="async"
          className={styles.img}
        />
        <div className={styles.imgOverlay} aria-hidden="true" />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{category.shortName}</h3>
        <p className={styles.desc}>{category.description}</p>
        <span className={styles.cta} aria-hidden="true">
          Vezi proiectele
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12,5 19,12 12,19"/>
          </svg>
        </span>
      </div>
    </Link>
  )
}
