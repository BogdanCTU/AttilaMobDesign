import { CATEGORIES } from '../config/images'
import ProductCard from '../components/ProductCard/ProductCard'
import styles from './ProductsPage.module.css'

export default function ProductsPage() {
  return (
    <div className={styles.page}>
      {/* Page header */}
      <div className={styles.header}>
        <div className="container">
          <div className={styles.breadcrumb} aria-label="Navigare ierarhică">
            <a href="/" className={styles.breadcrumbLink}>Acasă</a>
            <span aria-hidden="true">›</span>
            <span aria-current="page">Produse</span>
          </div>
          <h1 className={styles.title}>Produsele Noastre</h1>
          <p className={styles.desc}>
            Mobilier personalizat realizat la comandă pentru fiecare spațiu. Alegeți categoria dorită pentru a vedea proiectele noastre.
          </p>
        </div>
      </div>

      {/* Categories grid */}
      <section className={styles.section} aria-label="Categorii de produse">
        <div className="container">
          <div className={styles.grid}>
            {CATEGORIES.map((cat) => (
              <ProductCard key={cat.slug} category={cat} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
