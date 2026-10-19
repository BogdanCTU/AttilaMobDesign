import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CONTACT } from '../config/contact'
import styles from './PolicyPage.module.css'

export default function PrivacyPolicyPage() {
  useEffect(() => {
    document.title = 'Politica de Confidențialitate | MOBATIDOR SRL'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={`container ${styles.headerInner}`}>
          <nav className={styles.breadcrumb} aria-label="Navigare ierarhică">
            <Link to="/" className={styles.breadcrumbLink}>Acasă</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">Politica de confidențialitate</span>
          </nav>
          <span className={styles.eyebrow}>Protecția Datelor (GDPR)</span>
          <h1 className={styles.title}>Politica de Confidențialitate</h1>
          <p className={styles.subtitle}>
            Informații complete și transparente privind prelucrarea datelor cu caracter personal de către <strong>MOBATIDOR SRL</strong> în legătură cu site-ul web <strong>mobatidor.ro</strong> și serviciile noastre de mobilier la comandă, în conformitate cu Regulamentul (UE) 2016/679 (GDPR).
          </p>
          <span className={styles.lastUpdated}>Data ultimei actualizări: octombrie 2026</span>
        </div>
      </header>

      <div className={`container ${styles.body}`}>
        {/* 1. Operatorul de date */}
        <section className={styles.card} aria-labelledby="sec-operator">
          <h2 id="sec-operator" className={styles.cardTitle}>1. Cine este Operatorul de date</h2>
          <p className={styles.paragraph}>
            În sensul Regulamentului General privind Protecția Datelor (Regulamentul UE 2016/679 – GDPR), operatorul responsabil pentru prelucrarea datelor dumneavoastră cu caracter personal este:
          </p>
          <div className={styles.operatorGrid}>
            <div className={styles.operatorItem}>
              <span className={styles.operatorLabel}>Denumire juridică (Operator)</span>
              <span className={styles.operatorValue}><strong>{CONTACT.legalName}</strong></span>
            </div>
            <div className={styles.operatorItem}>
              <span className={styles.operatorLabel}>Cod Unic de Înregistrare (CUI)</span>
              <span className={styles.operatorValue}>{CONTACT.cui}</span>
            </div>
            <div className={styles.operatorItem}>
              <span className={styles.operatorLabel}>Nr. Reg. Comerțului</span>
              <span className={styles.operatorValue}>{CONTACT.regCom}</span>
            </div>
            <div className={styles.operatorItem}>
              <span className={styles.operatorLabel}>Identificator Unic European (EUID)</span>
              <span className={styles.operatorValue}>{CONTACT.euid}</span>
            </div>
            <div className={styles.operatorItem}>
              <span className={styles.operatorLabel}>Sediu social</span>
              <span className={styles.operatorValue}>{CONTACT.registeredOffice}</span>
            </div>
            <div className={styles.operatorItem}>
              <span className={styles.operatorLabel}>Punct de lucru / Atelier</span>
              <span className={styles.operatorValue}>{CONTACT.fullAddress}</span>
            </div>
            <div className={styles.operatorItem}>
              <span className={styles.operatorLabel}>Denumire comercială / Brand</span>
              <span className={styles.operatorValue}>AttilaMobDesign – MobAtidor</span>
            </div>
            <div className={styles.operatorItem}>
              <span className={styles.operatorLabel}>Persoană de contact / reprezentant</span>
              <span className={styles.operatorValue}>{CONTACT.contactPerson}</span>
            </div>
            <div className={styles.operatorItem}>
              <span className={styles.operatorLabel}>Telefon</span>
              <span className={styles.operatorValue}>
                <a href={CONTACT.phoneTel}>{CONTACT.phone}</a>
              </span>
            </div>
            <div className={styles.operatorItem}>
              <span className={styles.operatorLabel}>Email de contact</span>
              <span className={styles.operatorValue}>
                <a href={CONTACT.emailMailto}>{CONTACT.email}</a>
              </span>
            </div>
          </div>
        </section>

        {/* 2. Natura site-ului și datele prelucrate */}
        <section className={styles.card} aria-labelledby="sec-nature">
          <h2 id="sec-nature" className={styles.cardTitle}>2. Natura site-ului web și categoriile de date prelucrate</h2>
          <p className={styles.paragraph}>
            Site-ul <strong>mobatidor.ro</strong> este o pagină web statică destinată prezentării portofoliului de mobilier executat la comandă.
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Fără colectare automată prin formulare:</strong> Site-ul nu conține formulare de contact online, formulare de cerere de ofertă, formulare de abonare la buletine informative (newsletter) sau câmpuri de introducere de date.
            </li>
            <li className={styles.listItem}>
              <strong>Fără conturi de utilizator sau baze de date:</strong> Nu există sisteme de înregistrare, autentificare sau baze de date de clienți găzduite direct pe acest site.
            </li>
            <li className={styles.listItem}>
              <strong>Fără plăți online:</strong> Nu se procesează plăți sau date financiare/bancare prin intermediul site-ului.
            </li>
            <li className={styles.listItem}>
              <strong>Fără instrumente de profilare sau analiză a traficului:</strong> Site-ul nu utilizează Google Analytics, Hotjar, Matomo sau alte instrumente automate de analiză a comportamentului vizitatorilor.
            </li>
          </ul>
          <p className={styles.paragraph}>
            <strong>Categoriile de date cu caracter personal prelucrate sunt:</strong>
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Date tehnice de conectare (Server Logs):</strong> Adresa IP, data și ora accesării paginilor, resursa solicitată (URL), tipul și versiunea browserului (User-Agent), sistemul de operare și adresa paginii de proveniență (Referrer).
            </li>
            <li className={styles.listItem}>
              <strong>Date furnizate voluntar la inițierea contactului:</strong> Numele și prenumele, numărul de telefon, adresa de email, schițe, dimensiuni, detalii despre spațiul de amenajat sau adresa de livrare/montaj comunicate telefonic, prin email, WhatsApp sau Facebook.
            </li>
            <li className={styles.listItem}>
              <strong>Date financiar-contabile (în cazul comenzilor confirmate):</strong> Numele, adresa de domiciliu/facturare, date de plată și detalii legate de contract și factură (aceste date sunt colectate doar offline/direct pentru emiterea documentelor fiscale conform legii).
            </li>
          </ul>
        </section>

        {/* 3. Distincție servicii terțe vs linkuri */}
        <section className={styles.card} aria-labelledby="sec-third-parties">
          <h2 id="sec-third-parties" className={styles.cardTitle}>3. Servicii terțe integrate (Embedded) vs. Legături externe simple</h2>
          <p className={styles.paragraph}>
            Pentru deplină transparență, facem o distincție clară între tehnologiile care se încarcă automat în browser și legăturile externe pe care le accesați doar la cerere:
          </p>

          <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--color-text)', marginTop: 'var(--space-4)', marginBottom: 'var(--space-2)' }}>
            A. Servicii terțe integrate (se încarcă automat la vizitarea site-ului)
          </h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Google Fonts (Google LLC):</strong> Pentru randarea fonturilor tipografice (<em>Playfair Display</em> și <em>Inter</em>), site-ul descarcă fișierele de stil și font direct de pe serverele Google (<code>fonts.googleapis.com</code> și <code>fonts.gstatic.com</code>). În momentul solicitării, adresa IP a dispozitivului dvs. este transmisă către Google LLC.
            </li>
            <li className={styles.listItem}>
              <strong>Harta Google Maps – iframe (Google LLC):</strong> În secțiunea de contact este încorporat un cadru (iframe) Google Maps care prezintă vizual amplasamentul atelierului. La randarea paginii, browserul stabilește o conexiune cu serverele <code>maps.google.com</code>, transmițând date tehnice de rețea (adresa IP). Cadrul are setată proprietatea de protecție <code>pointer-events: none</code>, acționând ca o previzualizare vizuală.
            </li>
          </ul>

          <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--color-text)', marginTop: 'var(--space-4)', marginBottom: 'var(--space-2)' }}>
            B. Legături externe simple (se activează exclusiv la click-ul voluntar al utilizatorului)
          </h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>WhatsApp (<code>wa.me</code>):</strong> Butoanele WhatsApp reprezintă simple legături web externe. La simpla navigare pe site <em>nu se transmit date</em> către WhatsApp. Doar dacă dați click pe buton, browserul va deschide platforma WhatsApp (operată de WhatsApp Ireland Limited / Meta Platforms Ireland Ltd.), unde comunicarea este guvernată de politica acestora.
            </li>
            <li className={styles.listItem}>
              <strong>Facebook:</strong> Linkul către pagina noastră de Facebook nu încarcă module sau scripturi de urmărire Facebook la vizitarea site-ului. La accesarea linkului sunteți redirecționat către platforma Facebook (Meta Platforms Ireland Ltd.).
            </li>
            <li className={styles.listItem}>
              <strong>Link Google Maps extern (<code>maps.app.goo.gl</code>):</strong> Butonul „Deschide în Google Maps” permite deschiderea locației în aplicația sau site-ul Google Maps numai la apăsare.
            </li>
            <li className={styles.listItem}>
              <strong>Linkuri de apel și email (<code>tel:</code> și <code>mailto:</code>):</strong> Deschid aplicația implicită de apelare, respectiv clientul local de email al dispozitivului dvs., fără a transmite date intermediare prin site.
            </li>
          </ul>
        </section>

        {/* 4. Scopurile și temeiurile legale */}
        <section className={styles.card} aria-labelledby="sec-purposes">
          <h2 id="sec-purposes" className={styles.cardTitle}>4. Scopurile și temeiurile juridice ale prelucrării</h2>
          <p className={styles.paragraph}>
            Prelucrarea datelor se realizează strict pe baza temeiurilor legale prevăzute de Art. 6 din GDPR:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Livrarea tehnică a site-ului și securitatea IT:</strong> Prelucrarea jurnalelor de acces ale serverului pentru funcționarea site-ului, prevenirea abuzurilor și combaterea atacurilor cibernetice (ex. atacuri DDoS).<br />
              <em>Temei legal:</em> <strong>Art. 6 alin. (1) lit. (f) GDPR</strong> – interesul legitim al operatorului de a asigura funcționarea stabilă și sigură a paginii web.
            </li>
            <li className={styles.listItem}>
              <strong>Preluarea solicitărilor, ofertarea și stabilirea măsurătorilor:</strong> Răspunsul la mesajele, emailurile sau apelurile telefonice prin care solicitați informații, estimări de preț sau consiliere pentru mobilier.<br />
              <em>Temei legal:</em> <strong>Art. 6 alin. (1) lit. (b) GDPR</strong> – demersuri la cererea persoanei vizate înainte de încheierea unui contract.
            </li>
            <li className={styles.listItem}>
              <strong>Încheierea și executarea comenzilor de mobilier:</strong> Proiectarea, fabricarea, transportul și montajul pieselor de mobilier comandate.<br />
              <em>Temei legal:</em> <strong>Art. 6 alin. (1) lit. (b) GDPR</strong> – executarea contractului încheiat între părți.
            </li>
            <li className={styles.listItem}>
              <strong>Îndeplinirea obligațiilor financiar-contabile și fiscale:</strong> Emiterea facturilor, chitanțelor, încasarea plăților și evidența contabilă conform legii.<br />
              <em>Temei legal:</em> <strong>Art. 6 alin. (1) lit. (c) GDPR</strong> – îndeplinirea unor obligații legale impuse de Codul fiscal și Legea contabilității din România.
            </li>
            <li className={styles.listItem}>
              <strong>Garanția produselor și apărarea drepturilor în justiție:</strong> Asigurarea service-ului și a garanției legale/comerciale pentru mobilierul executat, precum și soluționarea eventualelor dispute juridice.<br />
              <em>Temei legal:</em> <strong>Art. 6 alin. (1) lit. (f) GDPR</strong> – interesul legitim al operatorului de a-și exercita sau apăra drepturile legitime.
            </li>
          </ul>
        </section>

        {/* 5. Destinatari și transferuri internaționale */}
        <section className={styles.card} aria-labelledby="sec-recipients">
          <h2 id="sec-recipients" className={styles.cardTitle}>5. Destinatarii datelor și transferurile internaționale</h2>
          <p className={styles.paragraph}>
            MOBATIDOR SRL nu vinde, nu închiriază și nu înstrăinează datele dumneavoastră personale către terți în scopuri publicitare sau comerciale. Datele pot fi transmise strict următorilor destinatari/împuterniciți:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Furnizorul de găzduire web a paginii statice:</strong> GitHub, Inc. (SUA, parte a Microsoft Corporation) prin serviciul GitHub Pages și rețelele CDN partenere (Fastly, Inc.), responsabile de livrarea tehnică a fișierelor statice.
            </li>
            <li className={styles.listItem}>
              <strong>Furnizorul serviciilor terțe integrate și de email:</strong> Google LLC (SUA), pentru afișarea Google Fonts și Google Maps, precum și pentru căsuța de poștă electronică (Gmail) utilizată la corespondență.
            </li>
            <li className={styles.listItem}>
              <strong>Platforme de comunicare externă (doar la alegerea dumneavoastră):</strong> WhatsApp Ireland Ltd. și Meta Platforms Ireland Ltd.
            </li>
            <li className={styles.listItem}>
              <strong>Servicii profesionale contabile:</strong> Expert contabil / societate autorizată de contabilitate din România, pentru îndeplinirea obligațiilor declarative și fiscale ale societății.
            </li>
            <li className={styles.listItem}>
              <strong>Autorități și instituții publice:</strong> Agenția Națională de Administrare Fiscală (ANAF) sau alte autorități ale statului, numai în cazurile strict prevăzute de legislația aplicabilă.
            </li>
          </ul>
          <div className={styles.callout}>
            <p>
              <strong>Transferuri internaționale de date (în afara UE/SEE):</strong> Găzduirea statică pe GitHub Pages și serviciile Google implică tranzitul sau stocarea tehnică a datelor (adrese IP, date de conexiune, emailuri) pe servere situate în Statele Unite ale Americii. Aceste transferuri sunt reglementate prin decizia de adecvare a Comisiei Europene privind <strong>Cadrul de confidențialitate a datelor UE-SUA (EU-U.S. Data Privacy Framework)</strong> și/sau pe baza <strong>Clauzelor Contractuale Standard (SCC)</strong> adoptate de Comisia Europeană, asigurând un nivel adecvat de protecție a datelor.
            </p>
          </div>
        </section>

        {/* 6. Durata de păstrare */}
        <section className={styles.card} aria-labelledby="sec-retention">
          <h2 id="sec-retention" className={styles.cardTitle}>6. Durata de păstrare a datelor (Data Retention)</h2>
          <p className={styles.paragraph}>
            Datele cu caracter personal sunt păstrate pe baza unor criterii clare și proporționale, respectând cerințele legale specifice:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Regula generală (Termen maxim de 1 an):</strong> Solicitările cu caracter informativ, mesajele, conversațiile WhatsApp, schițele preliminare, estimările de preț sau ofertele de mobilier care <em>nu se concretizează într-o comandă fermă sau contract</em> sunt păstrate pentru o perioadă de <strong>maximum 1 an</strong> de la data ultimei comunicări, după care sunt șterse definitiv.
            </li>
            <li className={styles.listItem}>
              <strong>Excepție obligatorie – Documente financiar-contabile și fiscale:</strong> Datele personale înscrise pe facturi, chitanțe, contracte de execuție sau anexe contabile <em>nu pot fi șterse la împlinirea termenului de 1 an</em>. Conform Legii contabilității nr. 82/1991 și Codului de procedură fiscală din România, documentele justificative și registrele contabile se păstrează pe durata obligatorie prevăzută de lege (în mod obișnuit 5 ani, începând de la data de 1 iulie a anului următor celui pentru care se întocmesc, respectiv 10 ani pentru situațiile financiare anuale).
            </li>
            <li className={styles.listItem}>
              <strong>Excepție obligatorie – Garanția produselor și apărarea în instanță:</strong> Datele minime necesare atestării executării mobilierului și a acordării garanției sunt păstrate pe durata termenului de garanție convenit și, dacă este cazul, pe durata termenului general de prescripție civilă (în principiu 3 ani conform Codului civil) sau până la soluționarea definitivă a eventualelor litigii.
            </li>
          </ul>
        </section>

        {/* 7. Cookies */}
        <section className={styles.card} aria-labelledby="sec-cookies">
          <h2 id="sec-cookies" className={styles.cardTitle}>7. Politica privind modulele cookie</h2>
          <p className={styles.paragraph}>
            Site-ul <strong>mobatidor.ro</strong> respectă principiul minimizării datelor:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>Nu utilizează module cookie proprii (first-party cookies);</li>
            <li className={styles.listItem}>Nu utilizează spațiul de stocare local al browserului (localStorage, sessionStorage sau IndexedDB);</li>
            <li className={styles.listItem}>Nu utilizează cookie-uri de urmărire, analiză sau publicitate;</li>
            <li className={styles.listItem}>
              Întrucât nu sunt instalate fișiere cookie neesențiale pe dispozitivul dumneavoastră, conform Legii nr. 506/2004 și Directivei ePrivacy nu este necesară afișarea unui banner de consimțământ.
            </li>
          </ul>
          <p className={styles.paragraph}>
            Pentru informații complete privind modul în care sunt tratate tehnologiile web și conținutul terț încorporat, vă invităm să consultați{' '}
            <Link to="/politica-de-cookies" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>
              Politica privind modulele cookie
            </Link>.
          </p>
        </section>

        {/* 8. Drepturile persoanei vizate */}
        <section className={styles.card} aria-labelledby="sec-rights">
          <h2 id="sec-rights" className={styles.cardTitle}>8. Drepturile dumneavoastră conform GDPR și limitările lor</h2>
          <p className={styles.paragraph}>
            În calitate de persoană vizată, beneficiați de următoarele drepturi garantate de Regulamentul (UE) 2016/679:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Dreptul de acces (Art. 15 GDPR):</strong> Puteți solicita o confirmare dacă prelucrăm sau nu date ale dumneavoastră și o copie a acestora.
            </li>
            <li className={styles.listItem}>
              <strong>Dreptul la rectificare (Art. 16 GDPR):</strong> Puteți solicita corectarea datelor inexacte sau completarea celor incomplete.
            </li>
            <li className={styles.listItem}>
              <strong>Dreptul la ștergerea datelor – „dreptul de a fi uitat” (Art. 17 GDPR):</strong> Puteți solicita ștergerea datelor când acestea nu mai sunt necesare scopurilor pentru care au fost colectate.<br />
              <em>Limitare legală importantă:</em> Dreptul la ștergere <strong>nu se aplică</strong> în măsura în care prelucrarea este necesară pentru respectarea unei obligații legale ce impune păstrarea datelor (ex. păstrarea facturilor conform legislației fiscale) sau pentru constatarea, exercitarea ori apărarea unui drept în instanță.
            </li>
            <li className={styles.listItem}>
              <strong>Dreptul la restricționarea prelucrării (Art. 18 GDPR):</strong> În situațiile în care contestați exactitatea datelor sau legalitatea prelucrării, pe durata verificărilor.
            </li>
            <li className={styles.listItem}>
              <strong>Dreptul la portabilitatea datelor (Art. 20 GDPR):</strong> Dreptul de a primi datele furnizate într-un format structurat, utilizat în mod curent și lizibil automat.
            </li>
            <li className={styles.listItem}>
              <strong>Dreptul la opoziție (Art. 21 GDPR):</strong> Aveți dreptul de a vă opune în orice moment prelucrărilor întemeiate pe interes legitim (Art. 6 alin. (1) lit. (f)).
            </li>
            <li className={styles.listItem}>
              <strong>Dreptul de a nu face obiectul unei decizii automate:</strong> Vă confirmăm că MOBATIDOR SRL nu aplică decizii bazate exclusiv pe prelucrare automată și nu efectuează profilare.
            </li>
          </ul>

          <p className={styles.paragraph}>
            <strong>Cum vă puteți exercita drepturile:</strong><br />
            Puteți transmite o solicitare scrisă, datată și semnată către <strong>MOBATIDOR SRL</strong> la adresa de email <a href={CONTACT.emailMailto}>{CONTACT.email}</a> sau prin poștă la sediul social din Sat Gura Arieșului, nr. 152, jud. Alba, cod 517406. Răspunsul va fi furnizat în mod gratuit în termen de cel mult 30 de zile de la primirea cererii.
          </p>

          <div className={styles.callout}>
            <p>
              <strong>Dreptul de a depune o plângere la autoritatea de supraveghere:</strong><br />
              În cazul în care considerați că drepturile dumneavoastră au fost încălcate, aveți dreptul de a depune o plângere la autoritatea națională competentă:
              <br /><br />
              <strong>Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP)</strong><br />
              Adresă: B-dul G-ral. Gheorghe Magheru 28-30, Sector 1, cod poștal 010336, București, România<br />
              Telefon: +40.318.059.211 / +40.318.059.212 | Fax: +40.318.059.602<br />
              Email: <a href="mailto:anspdcp@dataprotection.ro">anspdcp@dataprotection.ro</a> | Website:{' '}
              <a href="https://www.dataprotection.ro" target="_blank" rel="noopener noreferrer">
                www.dataprotection.ro
              </a>
            </p>
          </div>
        </section>

        {/* 9. Întrebări și Contact */}
        <section className={styles.card} aria-labelledby="sec-contact-info">
          <h2 id="sec-contact-info" className={styles.cardTitle}>9. Contact pentru chestiuni legate de confidențialitate</h2>
          <p className={styles.paragraph}>
            Pentru orice întrebare referitoare la prezenta politică de confidențialitate sau la datele dumneavoastră personale, ne puteți contacta direct:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}><strong>Operator:</strong> {CONTACT.legalName}</li>
            <li className={styles.listItem}><strong>Persoană de contact:</strong> {CONTACT.contactPerson}</li>
            <li className={styles.listItem}><strong>Email:</strong> <a href={CONTACT.emailMailto}>{CONTACT.email}</a></li>
            <li className={styles.listItem}><strong>Telefon:</strong> <a href={CONTACT.phoneTel}>{CONTACT.phone}</a></li>
            <li className={styles.listItem}><strong>Sediu social:</strong> {CONTACT.registeredOffice}</li>
            <li className={styles.listItem}><strong>Atelier:</strong> {CONTACT.fullAddress}</li>
          </ul>
        </section>

        {/* Bottom navigation card */}
        <div className={styles.actionsCard}>
          <span className={styles.actionsText}>
            Doriți informații despre modul în care utilizăm fișierele cookie?
          </span>
          <Link to="/politica-de-cookies" className={styles.actionsLink}>
            Consultați Politica de cookies →
          </Link>
        </div>
      </div>
    </div>
  )
}
