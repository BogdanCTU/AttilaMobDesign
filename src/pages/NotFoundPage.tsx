import { Link } from 'react-router-dom'
import styles from './NotFoundPage.module.css'

export default function NotFoundPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.icon} aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 8v4M12 16h.01"/>
            </svg>
          </div>
          <p className={styles.code}>404</p>
          <h1 className={styles.title}>Pagina nu a fost găsită</h1>
          <p className={styles.desc}>
            Ne pare rău, pagina pe care o căutați nu există sau a fost mutată.
          </p>
          <div className={styles.actions}>
            <Link to="/" className="btn btn--primary btn--lg">
              Înapoi acasă
            </Link>
            <Link to="/produse" className="btn btn--outline-dark">
              Vezi produsele
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
