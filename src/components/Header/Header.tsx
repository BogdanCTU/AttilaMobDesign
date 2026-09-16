import { useState, useEffect, useCallback } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import styles from './Header.module.css'

const NAV_LINKS = [
  { to: '/',         label: 'Acasă',           exact: true },
  { to: '/produse',  label: 'Produse',          exact: false },
  { to: '/#despre',  label: 'Despre Noi',       exact: false, isAnchor: true },
  { to: '/#proces',  label: 'Procesul Nostru',  exact: false, isAnchor: true },
  { to: '/#contact', label: 'Contact',          exact: false, isAnchor: true },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => { setMenuOpen(false) }, [location])

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleAnchorClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    setMenuOpen(false)
    const scrollToSection = () => {
      const el = document.getElementById(sectionId)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
    if (location.pathname !== '/') {
      // Navigate to home first, then scroll
      window.location.hash = '#/'
      setTimeout(scrollToSection, 300)
    } else {
      scrollToSection()
    }
  }, [location.pathname])

  return (
    <>
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`} role="banner">
        <div className={`container ${styles.inner}`}>
          {/* Logo */}
          <Link to="/" className={styles.logo} aria-label="Mob Atidol – Acasă">
            <span className={styles.logo__icon} aria-hidden="true">M</span>
            <span className={styles.logo__text}>
              <span className={styles.logo__brand}>Mob Atidol</span>
              <span className={styles.logo__tagline}>Mobilier la comandă</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className={styles.nav} role="navigation" aria-label="Navigare principală">
            {NAV_LINKS.map((link) =>
              link.isAnchor ? (
                <a
                  key={link.to}
                  href={link.to}
                  className={styles.navLink}
                  onClick={(e) => handleAnchorClick(e, link.to.split('#')[1])}
                >
                  {link.label}
                </a>
              ) : (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.exact}
                  className={({ isActive }) =>
                    `${styles.navLink} ${isActive ? styles.active : ''}`
                  }
                >
                  {link.label}
                </NavLink>
              )
            )}
          </nav>

          {/* CTA Button */}
          <a
            href="/#contact"
            className={`btn btn--primary ${styles.ctaBtn}`}
            onClick={(e) => handleAnchorClick(e, 'contact')}
          >
            Cere o ofertă
          </a>

          {/* Hamburger */}
          <button
            className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Închide meniul' : 'Deschide meniul'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav role="navigation" aria-label="Navigare mobilă">
          {NAV_LINKS.map((link) =>
            link.isAnchor ? (
              <a
                key={link.to}
                href={link.to}
                className={styles.drawerLink}
                onClick={(e) => handleAnchorClick(e, link.to.split('#')[1])}
              >
                {link.label}
              </a>
            ) : (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.exact}
                className={({ isActive }) =>
                  `${styles.drawerLink} ${isActive ? styles.active : ''}`
                }
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            )
          )}
          <a
            href="/#contact"
            className={`btn btn--primary ${styles.drawerCta}`}
            onClick={(e) => handleAnchorClick(e, 'contact')}
          >
            Cere o ofertă
          </a>
        </nav>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className={styles.overlay}
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  )
}
