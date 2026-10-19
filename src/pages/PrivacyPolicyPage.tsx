import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CONTACT } from '../config/contact'
import styles from './PolicyPage.module.css'

export default function PrivacyPolicyPage() {
  useEffect(() => {
    document.title = 'Politica de Confidențialitate | AttilaMobDesign – MobAtidor'
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
            Informații transparente privind prelucrarea datelor cu caracter personal în cadrul activității AttilaMobDesign (MobAtidor), conform Regulamentului (UE) 2016/679 (GDPR).
          </p>
          <span className={styles.lastUpdated}>Data ultimei actualizări: octombrie 2026</span>
        </div>
      </header>

      <div className={`container ${styles.body}`}>
        {/* 1. Operator */}
        <section className={styles.card} aria-labelledby="sec-operator">
          <h2 id="sec-operator" className={styles.cardTitle}>1. Cine este Operatorul de date</h2>
          <p className={styles.paragraph}>
            Prezentul document stabilește modul în care datele cu caracter personal sunt gestionate în legătură cu site-ul web <strong>mobatidor.ro</strong> și activitatea de producție de mobilier personalizat la comandă:
          </p>
          <div className={styles.operatorGrid}>
            <div className={styles.operatorItem}>
              <span className={styles.operatorLabel}>Denumire atelier / brand</span>
              <span className={styles.operatorValue}>AttilaMobDesign – MobAtidor</span>
            </div>
            <div className={styles.operatorItem}>
              <span className={styles.operatorLabel}>Persoană de contact / reprezentant</span>
              <span className={styles.operatorValue}>Attila Csegoldi</span>
            </div>
            <div className={styles.operatorItem}>
              <span className={styles.operatorLabel}>Adresă atelier</span>
              <span className={styles.operatorValue}>{CONTACT.fullAddress}</span>
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
            <div className={styles.operatorItem}>
              <span className={styles.operatorLabel}>Domeniu web</span>
              <span className={styles.operatorValue}>mobatidor.ro</span>
            </div>
          </div>
          <div className={styles.callout}>
            <p>
              <strong>Notă de transparență:</strong> Datele de identificare fiscală complete (forma exactă de organizare juridică – SRL sau PFA, Codul Unic de Înregistrare CUI/CIF și numărul de înregistrare la Registrul Comerțului) sunt furnizate punctual clienților la întocmirea documentelor contractuale și fiscale (oferte oficiale, contracte de execuție, facturi).
            </p>
          </div>
        </section>

        {/* 2. Natura site-ului */}
        <section className={styles.card} aria-labelledby="sec-nature">
          <h2 id="sec-nature" className={styles.cardTitle}>2. Natura site-ului web și prelucrarea datelor</h2>
          <p className={styles.paragraph}>
            Site-ul <strong>mobatidor.ro</strong> este o pagină web statică, dedicată exclusiv prezentării atelierului și a portofoliului de lucrări de mobilier executate la comandă.
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Fără formulare pe site:</strong> Site-ul nu include formulare de contact, formulare de abonare la newsletter, formulare de cerere de ofertă sau câmpuri de introducere de text.
            </li>
            <li className={styles.listItem}>
              <strong>Fără conturi de utilizator:</strong> Site-ul nu dispune de secțiuni de autentificare sau înregistrare, nu creează și nu gestionează conturi de client.
            </li>
            <li className={styles.listItem}>
              <strong>Fără baze de date pe site:</strong> Nu există o bază de date conectată direct la site care să stocheze informații introduse de vizitatori.
            </li>
            <li className={styles.listItem}>
              <strong>Fără plăți online:</strong> Pe acest site nu se efectuează tranzacții financiare sau procesări de carduri bancare.
            </li>
            <li className={styles.listItem}>
              <strong>Fără instrumente de profilare / analytics:</strong> Site-ul nu utilizează instrumente de analiză a comportamentului utilizatorilor (cum ar fi Google Analytics, Hotjar sau Matomo) și nu creează profiluri automate.
            </li>
          </ul>
        </section>

        {/* 3. Server logs */}
        <section className={styles.card} aria-labelledby="sec-server">
          <h2 id="sec-server" className={styles.cardTitle}>3. Jurnale tehnice de server (Server Logs)</h2>
          <p className={styles.paragraph}>
            Site-ul este găzduit pe platforma de găzduire statică <strong>GitHub Pages</strong> (oferită de GitHub Inc., subsidiară a Microsoft Corporation, SUA) și este distribuit prin rețele de livrare de conținut (CDN, inclusiv Fastly).
          </p>
          <p className={styles.paragraph}>
            La fiecare accesare a unei pagini web, serverul recepționează și stochează în mod automat date tehnice transmise de browserul dvs. (jurnale de acces):
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>Adresa IP a dispozitivului de pe care se face accesul;</li>
            <li className={styles.listItem}>Data și ora exactă a solicitării paginii;</li>
            <li className={styles.listItem}>Resursa sau fișierul solicitat (URL);</li>
            <li className={styles.listItem}>Tipul, limba și versiunea browserului (User-Agent);</li>
            <li className={styles.listItem}>Sistemul de operare utilizat;</li>
            <li className={styles.listItem}>Pagina web de la care ați accesat site-ul (Referrer URL).</li>
          </ul>
          <p className={styles.paragraph}>
            <strong>Temeiul juridic:</strong> Prelucrarea acestor date tehnice se întemeiază pe <em>interesul legitim</em> (Art. 6 alin. (1) lit. (f) din GDPR) de a asigura funcționarea tehnică corectă a site-ului, securitatea infrastructurii, detectarea și prevenirea tentativelor de fraudă sau atacuri cibernetice (ex. atacuri DDoS). Aceste date nu sunt utilizate de noi pentru identificarea persoanei dvs.
          </p>
        </section>

        {/* 4. Date prelucrate la contact direct */}
        <section className={styles.card} aria-labelledby="sec-contact">
          <h2 id="sec-contact" className={styles.cardTitle}>4. Date prelucrate la inițierea unui contact direct</h2>
          <p className={styles.paragraph}>
            Deoarece site-ul nu include un formular de contact, orice comunicare cu atelierul nostru este inițiată direct și voluntar de către dumneavoastră, utilizând datele de contact afișate:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Apel telefonic / SMS:</strong> Prelucrăm numărul de telefon, numele dvs. (dacă este comunicat) și detaliile pe care ni le oferiți cu privire la proiectul de mobilier dorit.
            </li>
            <li className={styles.listItem}>
              <strong>Email:</strong> Prelucrăm adresa de email de la care ne scrieți, numele expeditorului, data transmiterii și conținutul mesajului sau atașamentelor trimise (schițe, dimensiuni, specificații tehnice).
            </li>
            <li className={styles.listItem}>
              <strong>WhatsApp:</strong> Dacă alegeți să ne scrieți prin WhatsApp, prelucrăm numărul de telefon, numele de profil și istoricul conversației. Serviciul WhatsApp este operat de WhatsApp Ireland Limited / Meta Platforms.
            </li>
            <li className={styles.listItem}>
              <strong>Facebook:</strong> Dacă interacționați cu pagina noastră de Facebook, datele sunt prelucrate conform politicilor platformei Meta Platforms Ireland Limited.
            </li>
          </ul>
          <p className={styles.paragraph}>
            <strong>Scopul prelucrării:</strong> Preluarea solicitării, acordarea de consultanță de design și tehnică, calcularea devizelor de preț, stabilirea măsurătorilor și, ulterior, redactarea, încheierea și executarea contractului de prestări servicii / comandă de mobilier personalizat.
          </p>
          <p className={styles.paragraph}>
            <strong>Temeiul legal:</strong>
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Art. 6 alin. (1) lit. (b) GDPR:</strong> Demersuri la cererea persoanei vizate înainte de încheierea unui contract (discuții preliminare, oferte) și executarea contractului de realizare a mobilierului;
            </li>
            <li className={styles.listItem}>
              <strong>Art. 6 alin. (1) lit. (c) GDPR:</strong> Îndeplinirea obligațiilor legale (în special obligații financiar-contabile și fiscale de emitere și păstrare a documentelor de plată/facturi, conform Codului fiscal din România);
            </li>
            <li className={styles.listItem}>
              <strong>Art. 6 alin. (1) lit. (f) GDPR:</strong> Interesul legitim de a menține evidența comenzilor, a asigura garanția lucrărilor executate și a gestiona eventuale reclamații.
            </li>
          </ul>
        </section>

        {/* 5. Servicii și conținut terț */}
        <section className={styles.card} aria-labelledby="sec-third-parties">
          <h2 id="sec-third-parties" className={styles.cardTitle}>5. Conținut terț încorporat și servicii externe</h2>
          <p className={styles.paragraph}>
            Pentru a asigura o prezentare vizuală optimă și pentru a vă ajuta să găsiți atelierul, pe site sunt prezente următoarele integrări tehnice:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Google Fonts:</strong> Pentru afișarea tipografiei personalizate (Playfair Display și Inter), site-ul utilizează serviciul Google Fonts, furnizat de Google LLC. La accesarea paginii, browserul dvs. realizează conexiuni către serverele Google (<code>fonts.googleapis.com</code> și <code>fonts.gstatic.com</code>) pentru a descărca fișierele de font, moment în care adresa IP a dispozitivului dvs. este transmisă către Google.
            </li>
            <li className={styles.listItem}>
              <strong>Google Maps (hartă încorporată):</strong> În secțiunea de contact este încorporat un cadru (iframe) Google Maps care afișează locația atelierului din Ocna Mureș. La afișarea hărții, serverele Google recepționează solicitarea și adresa dvs. IP. De asemenea, linkul aferent permite deschiderea directă a adresei în aplicația Google Maps.
            </li>
            <li className={styles.listItem}>
              <strong>Linkuri externe către terți (WhatsApp, Facebook, Google Maps):</strong> Butoanele și linkurile prezente pe site către aceste servicii nu transmit date personale la simpla vizualizare a site-ului, dar la accesarea lor veți fi redirecționat către platformele operate de companiile respective, care își aplică propriile politici de confidențialitate.
            </li>
          </ul>
        </section>

        {/* 6. Perioada de păstrare */}
        <section className={styles.card} aria-labelledby="sec-retention">
          <h2 id="sec-retention" className={styles.cardTitle}>6. Durata de păstrare a datelor</h2>
          <p className={styles.paragraph}>
            Nu păstrăm datele cu caracter personal mai mult decât este necesar pentru îndeplinirea scopurilor în care au fost colectate:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Solicitări fără finalitate contractuală:</strong> Discuțiile telefonice, mesajele sau emailurile cu caracter informativ care nu se concretizează într-o comandă sau contract sunt păstrate doar pe durata necesară soluționării solicitării, fiind șterse periodic.
            </li>
            <li className={styles.listItem}>
              <strong>Documente contractuale și financiar-contabile:</strong> Datele asociate comenzilor finalizate, facturilor și documentelor de plată sunt păstrate conform termenelor legale obligatorii stabilite de Legea contabilității nr. 82/1991 și Codul fiscal din România (în mod obișnuit 5 sau 10 ani pentru evidențele financiar-contabile).
            </li>
            <li className={styles.listItem}>
              <strong>Date legate de garanție:</strong> Datele necesare acordării garanției mobilierului realizat sunt păstrate pe durata termenului de garanție convenit.
            </li>
          </ul>
        </section>

        {/* 7. Drepturile persoanei vizate */}
        <section className={styles.card} aria-labelledby="sec-rights">
          <h2 id="sec-rights" className={styles.cardTitle}>7. Drepturile dumneavoastră conform GDPR</h2>
          <p className={styles.paragraph}>
            În calitate de persoană vizată, Regulamentul (UE) 2016/679 vă garantează următoarele drepturi:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Dreptul de acces (Art. 15 GDPR):</strong> Puteți solicita o confirmare a faptului că prelucrăm sau nu datele dvs. și detalii privind modul de prelucrare.
            </li>
            <li className={styles.listItem}>
              <strong>Dreptul la rectificare (Art. 16 GDPR):</strong> Puteți solicita corectarea oricăror date inexacte sau completarea celor incomplete.
            </li>
            <li className={styles.listItem}>
              <strong>Dreptul la ștergere („dreptul de a fi uitat”) (Art. 17 GDPR):</strong> Puteți solicita ștergerea datelor dvs. atunci când acestea nu mai sunt necesare scopurilor pentru care au fost colectate, cu excepția cazului în care păstrarea este impusă de o obligație legală (ex. legislația fiscală).
            </li>
            <li className={styles.listItem}>
              <strong>Dreptul la restricționarea prelucrării (Art. 18 GDPR):</strong> În situațiile prevăzute de lege (de exemplu, când contestați exactitatea datelor, pe perioada verificării).
            </li>
            <li className={styles.listItem}>
              <strong>Dreptul la portabilitatea datelor (Art. 20 GDPR):</strong> Puteți solicita primirea datelor furnizate într-un format structurat, utilizat în mod curent și care poate fi citit automat.
            </li>
            <li className={styles.listItem}>
              <strong>Dreptul la opoziție (Art. 21 GDPR):</strong> Aveți dreptul de a vă opune prelucrării întemeiate pe interes legitim.
            </li>
            <li className={styles.listItem}>
              <strong>Dreptul de a nu face obiectul unei decizii automate:</strong> Vă asigurăm că nu aplicăm procese decizionale automatizate și nu realizăm profilare.
            </li>
          </ul>
          <p className={styles.paragraph}>
            <strong>Cum vă puteți exercita aceste drepturi:</strong> Pentru orice cerere referitoare la datele dvs. cu caracter personal, ne puteți contacta prin email la <a href={CONTACT.emailMailto}>{CONTACT.email}</a> sau telefonic la <a href={CONTACT.phoneTel}>{CONTACT.phone}</a>.
          </p>
          <div className={styles.callout}>
            <p>
              <strong>Dreptul de a depune o plângere:</strong> Dacă apreciați că prelucrarea datelor dvs. încalcă dispozițiile legale în vigoare, aveți dreptul de a depune o plângere la autoritatea de supraveghere competentă din România:
              <br />
              <strong>Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP)</strong>
              <br />
              Adresă: B-dul G-ral. Gheorghe Magheru 28-30, Sector 1, cod poștal 010336, București, România
              <br />
              Telefon: +40.318.059.211 / +40.318.059.212 | Email: anspdcp@dataprotection.ro | Website:{' '}
              <a href="https://www.dataprotection.ro" target="_blank" rel="noopener noreferrer">
                www.dataprotection.ro
              </a>
            </p>
          </div>
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
