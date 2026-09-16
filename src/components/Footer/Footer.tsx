import { Link } from 'react-router-dom'
import { CONTACT } from '../../config/contact'
import { CATEGORIES } from '../../config/images'
import styles from './Footer.module.css'

const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`container ${styles.inner}`}>
        <div className={styles.grid}>
          {/* Brand column */}
          <div className={styles.brand}>
            <Link to="/" className={styles.logo} aria-label="Mob Atidol">
              <span className={styles.logo__icon} aria-hidden="true">M</span>
              <span className={styles.logo__text}>
                <span className={styles.logo__name}>Mob Atidol</span>
                <span className={styles.logo__tagline}>Mobilier la comandă</span>
              </span>
            </Link>
            <p className={styles.brand__desc}>
              Mobilier personalizat pentru locuințe și spații profesionale, adaptat fiecărui proiect.
            </p>
            <address className={styles.brand__address}>
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                <circle cx="12" cy="9" r="2.5"/>
              </svg>
              {CONTACT.address}, {CONTACT.city}, {CONTACT.county}, {CONTACT.country}
            </address>
          </div>

          {/* Products column */}
          <div className={styles.col}>
            <h3 className={styles.col__title}>Produse</h3>
            <ul className={styles.col__list}>
              {CATEGORIES.map((cat) => (
                <li key={cat.slug}>
                  <Link to={`/produse/${cat.slug}`} className={styles.col__link}>
                    {cat.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div className={styles.col}>
            <h3 className={styles.col__title}>Contact</h3>
            <ul className={styles.col__list}>
              <li>
                <a href={CONTACT.phoneTel} className={styles.col__link}>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.91a16 16 0 006.72 6.72l1.28-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a href={CONTACT.emailMailto} className={styles.col__link}>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a href={CONTACT.facebook} className={styles.col__link} target="_blank" rel="noopener noreferrer">
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                  </svg>
                  Facebook
                </a>
              </li>
              <li>
                <a href={CONTACT.whatsappLink} className={styles.col__link} target="_blank" rel="noopener noreferrer">
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.524 5.847L.057 23.887l6.198-1.44A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.969 0-3.8-.541-5.362-1.479l-.384-.228-3.683.855.876-3.591-.251-.404A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                  </svg>
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {currentYear} Mob Atidol. Toate drepturile rezervate.</p>
          <p className={styles.bottom__location}>{CONTACT.city}, {CONTACT.county}, {CONTACT.country}</p>
        </div>
      </div>
    </footer>
  )
}
