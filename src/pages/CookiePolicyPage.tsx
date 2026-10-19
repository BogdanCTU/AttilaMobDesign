import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CONTACT } from '../config/contact'
import styles from './PolicyPage.module.css'

export default function CookiePolicyPage() {
  useEffect(() => {
    document.title = 'Politica de Cookies | AttilaMobDesign – MobAtidor'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={`container ${styles.headerInner}`}>
          <nav className={styles.breadcrumb} aria-label="Navigare ierarhică">
            <Link to="/" className={styles.breadcrumbLink}>Acasă</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">Politica de cookies</span>
          </nav>
          <span className={styles.eyebrow}>Directiva ePrivacy & Legea 506/2004</span>
          <h1 className={styles.title}>Politica privind Modulele Cookie</h1>
          <p className={styles.subtitle}>
            Informații clare și transparente cu privire la utilizarea fișierelor cookie și a tehnologiilor similare pe site-ul mobatidor.ro.
          </p>
          <span className={styles.lastUpdated}>Data ultimei actualizări: octombrie 2026</span>
        </div>
      </header>

      <div className={`container ${styles.body}`}>
        {/* 1. Ce sunt cookie-urile */}
        <section className={styles.card} aria-labelledby="sec-what-are-cookies">
          <h2 id="sec-what-are-cookies" className={styles.cardTitle}>1. Ce sunt modulele cookie</h2>
          <p className={styles.paragraph}>
            Un modul cookie („cookie”) este un fișier text de mici dimensiuni pe care un site web îl salvează pe computerul, tableta sau dispozitivul mobil al utilizatorului atunci când acesta vizitează site-ul. Cookie-urile permit site-ului să memoreze acțiunile și preferințele utilizatorului (cum ar fi limba, dimensiunea fontului sau datele de autentificare) pe o anumită perioadă de timp.
          </p>
          <p className={styles.paragraph}>
            Există cookie-uri primare (first-party, setate direct de domeniul vizitat) și cookie-uri terțe (third-party, setate de servicii integrate de pe alte domenii, precum analitice, rețele sociale sau publicitate).
          </p>
        </section>

        {/* 2. Ce cookie-uri foloseste site-ul */}
        <section className={styles.card} aria-labelledby="sec-cookies-used">
          <h2 id="sec-cookies-used" className={styles.cardTitle}>2. Module cookie utilizate pe mobatidor.ro</h2>
          <p className={styles.paragraph}>
            Pentru a vă respecta intimitatea și a vă oferi o experiență simplă și rapidă, site-ul <strong>mobatidor.ro</strong> a fost proiectat pe principiul minimizării datelor:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Fără cookie-uri proprii (first-party):</strong> Site-ul mobatidor.ro <em>nu plasează și nu citește niciun modul cookie propriu</em> în browserul dvs.
            </li>
            <li className={styles.listItem}>
              <strong>Fără stocare locală (localStorage / sessionStorage / IndexedDB):</strong> Nu utilizăm memoria locală a browserului pentru a stoca identificatori, preferințe sau date cu caracter personal.
            </li>
            <li className={styles.listItem}>
              <strong>Fără cookie-uri de analiză (Analytics):</strong> Nu utilizăm instrumente de măsurare sau monitorizare a traficului (fără Google Analytics, Hotjar, Matomo etc.).
            </li>
            <li className={styles.listItem}>
              <strong>Fără cookie-uri publicitare sau pixeli de urmărire:</strong> Nu folosim pixeli de urmărire (fără Meta/Facebook Pixel, TikTok Pixel, Google Ads etc.) și nu efectuăm reclame comportamentale sau retargeting.
            </li>
          </ul>
        </section>

        {/* 3. Conținut terț încorporat */}
        <section className={styles.card} aria-labelledby="sec-third-party-cookies">
          <h2 id="sec-third-party-cookies" className={styles.cardTitle}>3. Conținut terț încorporat și linkuri externe</h2>
          <p className={styles.paragraph}>
            Pe site-ul nostru sunt prezente câteva servicii externe puse la dispoziție de furnizori terți independenți:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Google Maps:</strong> În secțiunea „Contact”, pentru a vă arăta amplasamentul fizic al atelierului din Ocna Mureș, este încorporat un cadru de hartă (iframe) furnizat de Google LLC. La afișarea hărții, browserul realizează conexiuni directe către serverele Google (<code>maps.google.com</code>). În funcție de setările browserului dvs. și de existența unei conectări prealabile într-un cont Google, Google poate prelucra date tehnice (cum ar fi adresa IP) sau poate accesa module cookie conform propriei sale politici. Detalii complete sunt disponibile în{' '}
              <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer">
                Politica privind cookie-urile Google
              </a>.
            </li>
            <li className={styles.listItem}>
              <strong>Google Fonts:</strong> Fonturile vizuale ale paginii sunt livrate de Google Fonts. Google Fonts nu plasează cookie-uri pe dispozitivul dvs., însă la descărcarea fonturilor se realizează o interogare tehnică HTTP către <code>fonts.googleapis.com</code>.
            </li>
            <li className={styles.listItem}>
              <strong>Linkuri către rețele sociale (WhatsApp, Facebook):</strong> Butoanele către WhatsApp și pagina de Facebook sunt simple legături web (linkuri externe). La simpla navigare pe mobatidor.ro nu sunt plasate cookie-uri de către WhatsApp sau Facebook; la accesarea linkului, se deschid aplicațiile sau paginile respective, guvernate de politicile Meta Platforms.
            </li>
          </ul>
        </section>

        {/* 4. De ce nu există banner de consimțământ */}
        <section className={styles.card} aria-labelledby="sec-no-banner">
          <h2 id="sec-no-banner" className={styles.cardTitle}>4. De ce nu afișăm un banner de consimțământ pentru cookies</h2>
          <p className={styles.paragraph}>
            Conform legislației din România (Legea nr. 506/2004 privind prelucrarea datelor cu caracter personal şi protecţia vieţii private în sectorul comunicaţiilor electronice, Art. 4 alin. (5)) și Directivei europene ePrivacy (Directiva 2002/58/CE cu modificările ulterioare), acordul prealabil al utilizatorului este necesar doar atunci când pe terminalul acestuia sunt instalate fișiere cookie neesențiale (de urmărire, analiză sau marketing).
          </p>
          <div className={styles.callout}>
            <p>
              Întrucât <strong>mobatidor.ro nu utilizează module cookie proprii și nu instalează fișiere cookie neesențiale</strong> pe dispozitivul dumneavoastră, afișarea unui banner intruziv de consimțământ nu este necesară din punct de vedere legal și nu ar aduce niciun beneficiu real pentru confidențialitatea datelor dumneavoastră.
            </p>
          </div>
        </section>

        {/* 5. Cum puteți controla cookie-urile */}
        <section className={styles.card} aria-labelledby="sec-manage-cookies">
          <h2 id="sec-manage-cookies" className={styles.cardTitle}>5. Cum puteți controla sau șterge cookie-urile în browser</h2>
          <p className={styles.paragraph}>
            Chiar dacă site-ul nostru nu plasează cookie-uri, aveți în permanență controlul asupra cookie-urilor plasate de alte site-uri sau de servicii terțe, direct prin intermediul setărilor browserului pe care îl folosiți. Puteți șterge toate cookie-urile existente și puteți seta majoritatea navigatoarelor să blocheze plasarea lor:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Google Chrome:</strong> Setări → Confidențialitate și securitate → Module cookie terțe;
            </li>
            <li className={styles.listItem}>
              <strong>Mozilla Firefox:</strong> Setări → Confidențialitate și securitate → Protecție îmbunătățită împotriva urmăririi;
            </li>
            <li className={styles.listItem}>
              <strong>Apple Safari:</strong> Preferințe → Confidențialitate → Blocare completă a modulelor cookie;
            </li>
            <li className={styles.listItem}>
              <strong>Microsoft Edge:</strong> Setări → Module cookie și permisiuni de site → Gestionați și ștergeți modulele cookie.
            </li>
          </ul>
        </section>

        {/* 6. Contact */}
        <section className={styles.card} aria-labelledby="sec-contact-cookies">
          <h2 id="sec-contact-cookies" className={styles.cardTitle}>6. Întrebări și Contact</h2>
          <p className={styles.paragraph}>
            Dacă aveți întrebări suplimentare cu privire la modul în care este administrat acest site web, ne puteți contacta la:
          </p>
          <p className={styles.paragraph}>
            Email: <a href={CONTACT.emailMailto}>{CONTACT.email}</a> | Telefon: <a href={CONTACT.phoneTel}>{CONTACT.phone}</a> | Adresă: {CONTACT.fullAddress}
          </p>
        </section>

        {/* Bottom navigation card */}
        <div className={styles.actionsCard}>
          <span className={styles.actionsText}>
            Doriți informații detaliate privind protecția datelor cu caracter personal?
          </span>
          <Link to="/politica-de-confidentialitate" className={styles.actionsLink}>
            Consultați Politica de confidențialitate →
          </Link>
        </div>
      </div>
    </div>
  )
}
