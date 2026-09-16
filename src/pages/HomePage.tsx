import { Link } from 'react-router-dom'
import { CATEGORIES, HOME_GALLERY_IMAGES, HERO_IMAGE } from '../config/images'
import { CONTACT } from '../config/contact'
import ProductCard from '../components/ProductCard/ProductCard'
import Gallery from '../components/Gallery/Gallery'
import ProcessSection from '../components/ProcessSection/ProcessSection'
import ContactSection from '../components/ContactSection/ContactSection'
import styles from './HomePage.module.css'

export default function HomePage() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────── */}
      <section className={styles.hero} aria-label="Secțiunea principală">
        <div className={styles.heroBg}>
          <img
            src={HERO_IMAGE}
            alt="Bucătărie personalizată la comandă – Mob Atidol"
            className={styles.heroBgImg}
            loading="eager"
          />
          <div className={styles.heroBgOverlay} />
        </div>
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroBadge} aria-hidden="true">
            <span className={styles.heroBadgeDot} />
            Ocna Mureș, Alba, România
          </div>
          <h1 className={styles.heroTitle}>
            Mobilier la comandă,<br />
            <em>exact cum îți dorești.</em>
          </h1>
          <p className={styles.heroDesc}>
            Realizăm mobilier personalizat pentru locuințe și spații profesionale, adaptat dimensiunilor, stilului și cerințelor fiecărui proiect.
          </p>
          <div className={styles.heroCtas}>
            <Link to="/produse" className="btn btn--primary btn--lg">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" style={{width:18,height:18}}>
                <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
                <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
              </svg>
              Vezi produsele
            </Link>
            <a href={CONTACT.whatsappLink} className="btn btn--outline btn--lg" target="_blank" rel="noopener noreferrer">
              Contactează-ne
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={styles.scrollIndicator} aria-hidden="true">
          <div className={styles.scrollLine} />
        </div>
      </section>

      {/* ── Despre Noi ──────────────────────────────────── */}
      <section id="despre" className={styles.about} aria-labelledby="about-heading">
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutImages}>
              <div className={styles.aboutImgMain}>
                <img
                  src="./images/kitchen/Proiect_11_1.jpg"
                  alt="Bucătărie modernă realizată de Mob Atidol"
                  loading="lazy"
                />
              </div>
              <div className={styles.aboutImgSecond}>
                <img
                  src="./images/bedroom/Proiect_6_1.jpg"
                  alt="Dormitor personalizat realizat de Mob Atidol"
                  loading="lazy"
                />
              </div>
              <div className={styles.aboutAccentCard} aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
                <span>Mobilier</span>
                <span>la comandă</span>
              </div>
            </div>

            <div className={styles.aboutText}>
              <span className="section-header__eyebrow">Despre noi</span>
              <h2 className={styles.aboutTitle} id="about-heading">
                Atelierul nostru din Ocna Mureș
              </h2>
              <div className={styles.aboutDivider} />
              <p className={styles.aboutPara}>
                Atelierul nostru din Ocna Mureș produce mobilier personalizat, adaptat cerințelor fiecărui client.
              </p>
              <p className={styles.aboutPara}>
                Utilizăm materiale de calitate și soluții moderne pentru a crea piese durabile, estetice și funcționale, destinate locuințelor și spațiilor profesionale.
              </p>
              <p className={styles.aboutPara}>
                Oferim implicare completă în fiecare proiect, de la concept până la realizarea produsului final.
              </p>
              <div className={styles.aboutFeatures}>
                {['Materiale de calitate', 'Design personalizat', 'Montaj inclus', 'Soluții moderne'].map((f) => (
                  <div key={f} className={styles.aboutFeature}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <polyline points="20,6 9,17 4,12"/>
                    </svg>
                    {f}
                  </div>
                ))}
              </div>
              <Link to="/produse" className={`btn btn--outline-dark ${styles.aboutBtn}`}>
                Descoperă produsele noastre
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Produsele Noastre ───────────────────────────── */}
      <section id="produse" className={styles.products} aria-labelledby="products-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-header__eyebrow">Portofoliu</span>
            <h2 className="section-header__title" id="products-heading">Produsele Noastre</h2>
            <p className="section-header__description">
              Realizăm mobilier la comandă pentru fiecare cameră a locuinței tale și pentru spații profesionale.
            </p>
            <div className="divider" />
          </div>
          <div className={styles.productsGrid}>
            {CATEGORIES.map((cat) => (
              <ProductCard key={cat.slug} category={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Galerie ─────────────────────────────────────── */}
      <section id="galerie" className={styles.gallery} aria-labelledby="gallery-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-header__eyebrow">Galerie</span>
            <h2 className="section-header__title" id="gallery-heading">Proiecte realizate</h2>
            <p className="section-header__description">
              O selecție din proiectele noastre recente. Click pe orice imagine pentru mărire.
            </p>
            <div className="divider" />
          </div>
          <Gallery images={HOME_GALLERY_IMAGES} columns={4} />
          <div className={styles.galleryMore}>
            <Link to="/produse" className="btn btn--outline-dark">
              Vezi toate proiectele
            </Link>
          </div>
        </div>
      </section>

      {/* ── Process ─────────────────────────────────────── */}
      <ProcessSection />

      {/* ── CTA Banner ──────────────────────────────────── */}
      <section className={styles.ctaBanner} aria-label="Cere o ofertă">
        <div className={styles.ctaBannerBg}>
          <img
            src="./images/kitchen/Proiect_23_1.jpg"
            alt=""
            aria-hidden="true"
            loading="lazy"
            className={styles.ctaBannerImg}
          />
          <div className={styles.ctaBannerOverlay} />
        </div>
        <div className={`container ${styles.ctaBannerContent}`}>
          <h2 className={styles.ctaTitle}>Ești gata să începi proiectul tău?</h2>
          <p className={styles.ctaDesc}>
            Contactează-ne pentru o consultație gratuită și vom crea împreună mobilierul perfect pentru tine.
          </p>
          <div className={styles.ctaButtons}>
            <a href={CONTACT.phoneTel} className="btn btn--primary btn--lg">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" style={{width:18,height:18}}>
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.91a16 16 0 006.72 6.72l1.28-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              Sună acum
            </a>
            <a href={CONTACT.whatsappLink} className="btn btn--outline btn--lg" target="_blank" rel="noopener noreferrer">
              Trimite mesaj WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── Contact ─────────────────────────────────────── */}
      <ContactSection />
    </>
  )
}
