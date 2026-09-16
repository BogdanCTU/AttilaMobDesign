import { Link } from 'react-router-dom'
import type { Category } from '../config/images'
import { CONTACT } from '../config/contact'
import Carousel from '../components/Carousel/Carousel'
import Gallery from '../components/Gallery/Gallery'
import styles from './CategoryPage.module.css'

interface CategoryPageProps {
  category: Category
}

export default function CategoryPage({ category }: CategoryPageProps) {
  const hasMany = category.images.length > 6

  return (
    <div className={styles.page}>
      {/* Hero banner */}
      <div className={styles.hero}>
        <div className={styles.heroBg}>
          <img
            src={category.images[0].src}
            alt={category.images[0].alt}
            loading="eager"
            className={styles.heroBgImg}
          />
          <div className={styles.heroBgOverlay} />
        </div>
        <div className={`container ${styles.heroContent}`}>
          <nav className={styles.breadcrumb} aria-label="Navigare ierarhică">
            <Link to="/" className={styles.breadcrumbLink}>Acasă</Link>
            <span aria-hidden="true">›</span>
            <Link to="/produse" className={styles.breadcrumbLink}>Produse</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">{category.shortName}</span>
          </nav>
          <h1 className={styles.heroTitle}>{category.heading}</h1>
          <p className={styles.heroDesc}>{category.longDescription}</p>
          <a href={CONTACT.whatsappLink} className="btn btn--primary btn--lg" target="_blank" rel="noopener noreferrer">
            Cere o ofertă
          </a>
        </div>
      </div>

      {/* Gallery section */}
      <section className={styles.gallerySection} aria-labelledby={`gallery-${category.slug}`}>
        <div className="container">
          <div className="section-header">
            <span className="section-header__eyebrow">{category.name}</span>
            <h2 className="section-header__title" id={`gallery-${category.slug}`}>
              {category.galleryTitle}
            </h2>
            <p className="section-header__description">
              Mai multe imagini cu proiectele realizate
            </p>
            <div className="divider" />
          </div>

          {/* Use carousel for small galleries, grid for large ones */}
          {hasMany ? (
            <Gallery images={category.images} columns={3} />
          ) : (
            <>
              <Carousel images={category.images} />
              {category.images.length > 3 && (
                <div className={styles.galleryGridBelow}>
                  <h3 className={styles.galleryGridTitle}>Toate proiectele</h3>
                  <Gallery images={category.images} columns={3} />
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* CTA section */}
      <section className={styles.cta} aria-label="Cere o ofertă">
        <div className="container">
          <div className={styles.ctaInner}>
            <div className={styles.ctaText}>
              <h2 className={styles.ctaTitle}>Ai un proiect în minte?</h2>
              <p className={styles.ctaDesc}>
                Contactează-ne și îți vom oferi o consultație gratuită pentru a crea mobilierul perfect pentru spațiul tău.
              </p>
            </div>
            <div className={styles.ctaButtons}>
              <a href={CONTACT.phoneTel} className="btn btn--primary btn--lg">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" style={{width:18,height:18}}>
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.91a16 16 0 006.72 6.72l1.28-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
                {CONTACT.phone}
              </a>
              <a href={CONTACT.whatsappLink} className="btn btn--outline-dark" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Other categories */}
      <section className={styles.otherCats} aria-label="Alte categorii">
        <div className="container">
          <div className={styles.otherCatsHeader}>
            <span className="section-header__eyebrow">Explorează</span>
            <h2 className={styles.otherCatsTitle}>Alte categorii</h2>
          </div>
          <div className={styles.otherCatsLinks}>
            <Link to="/produse" className={`btn btn--outline-dark`}>
              ← Toate produsele
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
