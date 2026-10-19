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
            Informații complete și riguroase privind prelucrarea datelor cu caracter personal de către <strong>MOBATIDOR SRL</strong> în legătură cu site-ul web <strong>mobatidor.ro</strong> și activitatea de producție de mobilier la comandă, în conformitate cu Regulamentul (UE) 2016/679 (GDPR).
          </p>
          <span className={styles.lastUpdated}>Data ultimei actualizări: octombrie 2026</span>
        </div>
      </header>

      <div className={`container ${styles.body}`}>
        {/* 1. Operatorul de date */}
        <section className={styles.card} aria-labelledby="sec-operator">
          <h2 id="sec-operator" className={styles.cardTitle}>1. Cine este Operatorul de date</h2>
          <p className={styles.paragraph}>
            În conformitate cu Regulamentul (UE) 2016/679 privind protecția persoanelor fizice în ceea ce privește prelucrarea datelor cu caracter personal (GDPR), operatorul responsabil pentru prelucrarea datelor dumneavoastră este:
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
              <span className={styles.operatorLabel}>Nr. Înregistrare Reg. Comerțului</span>
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
              <span className={styles.operatorLabel}>Persoană de contact</span>
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
          <h2 id="sec-nature" className={styles.cardTitle}>2. Natura site-ului web și activitățile de prelucrare</h2>
          <p className={styles.paragraph}>
            Site-ul web <strong>mobatidor.ro</strong> este o pagină statică de prezentare a portofoliului de mobilier realizat la comandă.
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Fără formulare de colectare online:</strong> Site-ul nu utilizează formulare de contact, formulare de cerere de ofertă, formulare de newsletter sau câmpuri de introducere de text.
            </li>
            <li className={styles.listItem}>
              <strong>Fără conturi de utilizator sau baze de date pe site:</strong> Nu există sisteme de autentificare, înregistrare sau baze de date de clienți găzduite pe site.
            </li>
            <li className={styles.listItem}>
              <strong>Fără colectare de date de plată pe site:</strong> Pe site nu se efectuează tranzacții financiare și nu se solicită, nu se procesează și nu se stochează date ale cardurilor bancare.
            </li>
            <li className={styles.listItem}>
              <strong>Fără instrumente de urmărire sau analiză a traficului:</strong> Site-ul nu utilizează Google Analytics, Hotjar, Matomo, pixeli de urmărire (Meta Pixel) sau mecanisme de profilare automată a vizitatorilor.
            </li>
          </ul>
          <p className={styles.paragraph}>
            <strong>Categoriile de date cu caracter personal prelucrate sunt:</strong>
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Date tehnice de conectare (Server Logs ale furnizorului de găzduire):</strong> Adresa IP, marcajul temporal al accesării (data și ora), resursa solicitată (URL), identificatorul de browser (User-Agent) și pagina de proveniență (Referrer). Aceste date sunt generate automat la nivel de server de către furnizorul platformei de găzduire statică pentru transmiterea fișierelor și protecția infrastructurii.
            </li>
            <li className={styles.listItem}>
              <strong>Date furnizate voluntar prin contact direct:</strong> Numele și prenumele, numărul de telefon, adresa de email, schițe, dimensiuni ale spațiului sau adresa de livrare/montaj comunicate voluntar prin apel telefonic, SMS, email, WhatsApp sau Facebook.
            </li>
            <li className={styles.listItem}>
              <strong>Date conținute în documentele financiar-contabile obligatorii (pentru comenzi confirmate):</strong> Numele, adresa de domiciliu sau de facturare și mențiunile prevăzute obligatoriu de legislația fiscală pe facturile emise și pe documentele de plată (extrase bancare sau chitanțe conform legii). Plățile se efectuează exclusiv offline, prin transfer bancar în contul societății sau numerar în limitele legale; MOBATIDOR SRL nu stochează date bancare sensibile (cum ar fi datele cardurilor de plată).
            </li>
          </ul>
        </section>

        {/* 3. Tehnologii utilizate: Fonturi locale și Harta la cerere */}
        <section className={styles.card} aria-labelledby="sec-tech-fonts-map">
          <h2 id="sec-tech-fonts-map" className={styles.cardTitle}>3. Tehnologii utilizate pe site: Fonturi locale și Harta la cerere</h2>
          <p className={styles.paragraph}>
            Pentru a garanta un nivel ridicat de protecție a vieții private și a elimina transmisiile neautorizate de date către terți, site-ul aplică soluții tehnice prietenoase cu confidențialitatea:
          </p>

          <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--color-text)', marginTop: 'var(--space-4)', marginBottom: 'var(--space-2)' }}>
            A. Fonturi găzduite local (Self-hosted Fonts)
          </h3>
          <p className={styles.paragraph}>
            Fonturile tipografice utilizate pe site (<em>Playfair Display</em> și <em>Inter</em>, licențiate sub SIL Open Font License) sunt <strong>găzduite local (self-hosted)</strong> direct pe serverul site-ului. La încărcarea oricărei pagini pe mobatidor.ro, <strong>nu se inițiază nicio conexiune externă și nu se transmite nicio cerere HTTP către serverele Google Fonts</strong> (<code>fonts.googleapis.com</code> sau <code>fonts.gstatic.com</code>).
          </p>

          <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--color-text)', marginTop: 'var(--space-4)', marginBottom: 'var(--space-2)' }}>
            B. Harta Google Maps – Încărcare exclusiv la cerere (Soluție 2-Click)
          </h3>
          <p className={styles.paragraph}>
            În secțiunea de contact, harta Google Maps <strong>nu este încărcată automat</strong> la vizitarea site-ului. Niciun cadru (iframe) și nicio solicitare tehnică nu este trimisă către Google LLC înainte ca vizitatorul să aleagă în mod expres să afișeze harta:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              Dacă apăsați butonul <em>„Afișează harta interactivă”</em>, cadrul Google Maps se va încărca punctual în pagină, moment în care Google LLC va recepționa cererea și adresa dumneavoastră IP.
            </li>
            <li className={styles.listItem}>
              Dacă alegeți linkul <em>„Deschide direct în Google Maps ↗”</em>, veți fi redirecționat într-o filă nouă către serviciul extern Google Maps, fără ca scripturile hărții să ruleze pe mobatidor.ro.
            </li>
          </ul>

          <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--color-text)', marginTop: 'var(--space-4)', marginBottom: 'var(--space-2)' }}>
            C. Legături web externe simple (Ordinary Links)
          </h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>WhatsApp (<code>wa.me</code>) și Facebook:</strong> Reprezintă simple legături web externe către platformele operate de WhatsApp Ireland Limited, respectiv Meta Platforms Ireland Limited. La simpla vizualizare a paginii noastre nu se transmit date către aceste companii; redirecționarea are loc exclusiv la click-ul voluntar al utilizatorului.
            </li>
            <li className={styles.listItem}>
              <strong>Legături directe de apel și email (<code>tel:</code> și <code>mailto:</code>):</strong> Deschid aplicația de apelare sau programul de email instalat pe dispozitivul dumneavoastră.
            </li>
          </ul>
        </section>

        {/* 4. Scopuri și temeiuri juridice */}
        <section className={styles.card} aria-labelledby="sec-purposes">
          <h2 id="sec-purposes" className={styles.cardTitle}>4. Scopurile și temeiurile juridice ale prelucrării</h2>
          <p className={styles.paragraph}>
            MOBATIDOR SRL prelucrează datele cu caracter personal exclusiv în baza temeiurilor legale prevăzute de Art. 6 din GDPR:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Livrarea tehnică și securitatea paginii web:</strong> Procesarea datelor tehnice generate la conexiune pentru transmiterea fișierelor și prevenirea atacurilor cibernetice.<br />
              <em>Temei legal:</em> <strong>Art. 6 alin. (1) lit. (f) GDPR</strong> (interesul legitim al operatorului de a asigura funcționarea stabilă și sigură a site-ului).
            </li>
            <li className={styles.listItem}>
              <strong>Răspunsul la solicitări, consultanță și estimări de preț:</strong> Preluarea mesajelor, evaluarea specificațiilor tehnice și formularea cotațiilor pentru mobilier.<br />
              <em>Temei legal:</em> <strong>Art. 6 alin. (1) lit. (b) GDPR</strong> (demersuri la cererea persoanei vizate înainte de încheierea unui contract).
            </li>
            <li className={styles.listItem}>
              <strong>Încheierea și executarea contractului:</strong> Fabricarea, livrarea și montajul mobilierului la comandă conform comenzii confirmate.<br />
              <em>Temei legal:</em> <strong>Art. 6 alin. (1) lit. (b) GDPR</strong> (executarea contractului).
            </li>
            <li className={styles.listItem}>
              <strong>Respectarea obligațiilor financiar-contabile și fiscale:</strong> Emiterea facturilor, înregistrarea plăților și declararea fiscală conform legislației române.<br />
              <em>Temei legal:</em> <strong>Art. 6 alin. (1) lit. (c) GDPR</strong> (îndeplinirea unei obligații legale ce revine operatorului conform Legii contabilității nr. 82/1991 și Codului fiscal).
            </li>
            <li className={styles.listItem}>
              <strong>Gestiunea garanției și apărarea drepturilor în justiție:</strong> Asigurarea remedierilor în perioada de garanție și apărarea drepturilor legitime în eventuale dispute.<br />
              <em>Temei legal:</em> <strong>Art. 6 alin. (1) lit. (f) GDPR</strong> (interesul legitim al operatorului de a-și apăra drepturile legitime).
            </li>
          </ul>
        </section>

        {/* 5. Găzduire, destinatari și transferuri internaționale */}
        <section className={styles.card} aria-labelledby="sec-hosting-transfers">
          <h2 id="sec-hosting-transfers" className={styles.cardTitle}>5. Găzduire, destinatari și transferuri internaționale de date</h2>
          <p className={styles.paragraph}>
            <strong>Găzduirea site-ului web (GitHub Pages):</strong><br />
            Site-ul este găzduit prin intermediul serviciului static <strong>GitHub Pages</strong>, operat de <strong>GitHub, Inc.</strong> (88 Colin P. Kelly Jr. St., San Francisco, CA 94107, SUA), companie deținută de Microsoft Corporation.
          </p>
          <p className={styles.paragraph}>
            Conform documentației oficiale GitHub (<em>About GitHub Pages</em> și <em>GitHub Global Privacy Statement</em>), furnizorul de găzduire poate colecta automat adrese IP și detalii tehnice de solicitare pentru a asigura securitatea platformei și pentru îndeplinirea obligațiilor sale legale. Operatorul MOBATIDOR SRL nu deține acces direct la fișiere detaliate de jurnale de server și nu utilizează aceste date pentru identificarea vizitatorilor.
          </p>
          <p className={styles.paragraph}>
            În ceea ce privește transferul internațional al datelor de conexiune către serverele din SUA: entitatea furnizoare <strong>GitHub, Inc.</strong> deține o certificare proprie și independentă în cadrul <strong>Cadrului de confidențialitate a datelor UE-SUA (EU-U.S. Data Privacy Framework)</strong>, verificabilă în registrul oficial administrat de Departamentul Comerțului din SUA (DPF Participant Search), aplicându-se totodată <strong>Clauzele Contractuale Standard (SCC)</strong> ale Comisiei Europene integrate în acordul de prelucrare a datelor GitHub. Găzduirea statică gratuită prin GitHub Pages funcționează pe baza termenilor standard online ai furnizorului.
          </p>
          <p className={styles.paragraph}>
            <strong>Alți destinatari / împuterniciți:</strong>
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Google Ireland Limited / Google LLC:</strong> Pentru căsuța de email de contact (Gmail) și pentru afișarea hărții Google Maps exclusiv atunci când activați opțiunea 2-click. Entitatea <strong>Google LLC</strong> deține propria certificare activă în cadrul EU-U.S. Data Privacy Framework pentru transferurile de date tehnice către serverele sale din SUA.
            </li>
            <li className={styles.listItem}>
              <strong>Platforme externe de comunicare:</strong> WhatsApp Ireland Limited și Meta Platforms Ireland Limited, exclusiv în măsura în care alegeți voluntar să inițiați contactul prin aceste canale.
            </li>
            <li className={styles.listItem}>
              <strong>Servicii profesionale contabile autorizate din România:</strong> Pentru întocmirea evidențelor contabile și a declarațiilor fiscale ale societății conform legii.
            </li>
            <li className={styles.listItem}>
              <strong>Autorități publice:</strong> Agenția Națională de Administrare Fiscală (ANAF) sau alte instituții competente, exclusiv în cazurile prevăzute expres de lege.
            </li>
          </ul>
        </section>

        {/* 6. Durata de păstrare a datelor */}
        <section className={styles.card} aria-labelledby="sec-retention">
          <h2 id="sec-retention" className={styles.cardTitle}>6. Durata de păstrare a datelor (Data Retention)</h2>
          <p className={styles.paragraph}>
            MOBATIDOR SRL aplică o politică strictă de limitare a duratei de stocare, diferențiind clar între termenele administrative interne pentru solicitări și termenele legale obligatorii:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Solicitări generale non-contractuale:</strong> Întrebările generale, mesajele sau discuțiile informative care nu conduc la un proiect sau ofertare de mobilier sunt păstrate pentru o perioadă țintă de <strong>maximum 1 lună</strong> de la clarificarea solicitării, după care sunt șterse în cadrul revizuirilor periodice ale corespondenței.
            </li>
            <li className={styles.listItem}>
              <strong>Cereri de ofertă și proiecte neconfirmate:</strong> Discuțiile tehnice, schițele și estimările de preț pentru proiecte de mobilier care <em>nu s-au concretizat printr-un contract sau comandă fermă</em> sunt păstrate pentru o perioadă de <strong>maximum 1 an</strong> de la data ultimei comunicări (în măsura în care este permis legal), pentru a permite reluarea discuțiilor dacă potențialul client revine asupra proiectului.
            </li>
            <li className={styles.listItem}>
              <strong>Excepție legală obligatorie – Documente financiar-contabile (termen legal de 5 ani):</strong> Registrele de contabilitate obligatorii și documentele justificative care stau la baza înregistrărilor în contabilitatea financiară (facturi fiscale emise, chitanțe, ordine de plată etc.) se păstrează în arhivă timp de <strong>5 ani</strong>, conform <strong>Art. 25 alin. (1) din Legea contabilității nr. 82/1991, republicată</strong> (astfel cum a fost modificată prin <strong>Legea nr. 36/2023</strong>). Acest termen se calculează începând de la data de 1 iulie a anului următor celui de încheiere a exercițiului financiar în care au fost întocmite, fiind corelat cu termenul de prescripție a dreptului de a stabili creanțe fiscale prevăzut de <strong>Art. 110 din Legea nr. 207/2015 privind Codul de procedură fiscală</strong>.
            </li>
            <li className={styles.listItem}>
              <strong>Excepție legală obligatorie – Situații financiare anuale (termen legal de 10 ani):</strong> Situațiile financiare anuale și raportările contabile ale societății se păstrează în arhivă timp de <strong>10 ani</strong>, în conformitate cu dispozițiile exprese ale <strong>Art. 35 alin. (3) din Legea contabilității nr. 82/1991, republicată</strong>.
            </li>
            <li className={styles.listItem}>
              <strong>Garanția produselor și eventuale litigii:</strong> Datele strict necesare atestării calității și soluționării cererilor de garanție se păstrează pe durata termenului de garanție convenit în contractul individual sau certificatul de garanție emis pentru piesa de mobilier. În cazul unor pretenții contractuale sau litigii potențiale, documentele strict necesare apărării drepturilor pot fi păstrate ținând cont de termenul general de prescripție extinctivă de <strong>3 ani</strong> prevăzut de <strong>Art. 2517 din Codul civil (Legea nr. 287/2009)</strong>, termen care curge de la data la care se naște dreptul la acțiune (de exemplu, data predării mobilierului sau apariția neconformității), iar în cazul declanșării unei proceduri judiciare, până la soluționarea definitivă a acesteia.
            </li>
          </ul>
          <div className={styles.callout}>
            <p>
              <strong>Notă privind evidențele contabile:</strong> Termenele concrete de arhivare aplicabile diferitelor categorii de documente justificative, registre și raportări fiscale ale societății sunt stabilite și validate periodic în strânsă colaborare cu <strong>expertul contabil autorizat</strong> al MOBATIDOR SRL, în conformitate cu legislația contabilă și fiscală din România.
            </p>
          </div>
        </section>

        {/* 7. Cookies și browser storage */}
        <section className={styles.card} aria-labelledby="sec-cookies">
          <h2 id="sec-cookies" className={styles.cardTitle}>7. Module cookie și tehnologii de stocare în browser</h2>
          <p className={styles.paragraph}>
            Site-ul <strong>mobatidor.ro</strong> funcționează fără a utiliza cookie-uri proprii sau mecanisme de urmărire:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>Nu utilizează module cookie proprii (first-party cookies);</li>
            <li className={styles.listItem}>Nu utilizează spațiul de stocare local al navigatorului (localStorage, sessionStorage sau IndexedDB);</li>
            <li className={styles.listItem}>Nu utilizează cookie-uri de analiză a traficului, marketing sau publicitate comportamentală;</li>
            <li className={styles.listItem}>
              Datorită auto-găzduirii fonturilor și implementării soluției la cerere (2-click) pentru Google Maps, site-ul nu plasează cookie-uri neesențiale pe dispozitivul dumneavoastră la accesare. În consecință, conform Legii nr. 506/2004 și Directivei ePrivacy nu este necesară afișarea unui banner de consimțământ.
            </li>
          </ul>
          <p className={styles.paragraph}>
            Pentru detalii complete privind modul în care sunt tratate tehnologiile web, consultați{' '}
            <Link to="/politica-de-cookies" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>
              Politica privind modulele cookie
            </Link>.
          </p>
        </section>

        {/* 8. Drepturile persoanei vizate */}
        <section className={styles.card} aria-labelledby="sec-rights">
          <h2 id="sec-rights" className={styles.cardTitle}>8. Drepturile dumneavoastră conform GDPR și delimitarea lor</h2>
          <p className={styles.paragraph}>
            În calitate de persoană vizată, Regulamentul (UE) 2016/679 vă garantează următoarele drepturi, fiecare având condiții de exercitare distincte:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Dreptul de acces (Art. 15 GDPR):</strong> Dreptul de a obține din partea operatorului o confirmare dacă se prelucrează sau nu date cu caracter personal care vă privesc și, în caz afirmativ, acces la datele respective și la informațiile privind prelucrarea.
            </li>
            <li className={styles.listItem}>
              <strong>Dreptul la rectificare (Art. 16 GDPR):</strong> Dreptul de a obține corectarea fără întârzieri nejustificate a datelor inexacte sau completarea celor incomplete.
            </li>
            <li className={styles.listItem}>
              <strong>Dreptul la opoziție (Art. 21 GDPR) — Drept de sine stătător:</strong> Aveți dreptul de a vă opune în orice moment, din motive legate de situația dumneavoastră particulară, prelucrărilor întemeiate pe interesul legitim al operatorului (Art. 6 alin. (1) lit. (f) GDPR). La primirea opoziției, operatorul încetează prelucrarea datelor în cauză, <em>cu excepția cazului în care demonstrează motive legitime și imperioase</em> care justifică prelucrarea și care prevalează asupra intereselor, drepturilor și libertăților dumneavoastră, sau dacă scopul este constatarea, exercitarea sau apărarea unui drept în instanță.<br />
              <em>Notă:</em> Exercitarea dreptului la opoziție vizează încetarea prelucrării active și <strong>nu conduce automat la ștergerea tuturor datelor</strong>, dacă există temeiuri legale obligatorii care impun păstrarea lor.
            </li>
            <li className={styles.listItem}>
              <strong>Dreptul la ștergerea datelor – „dreptul de a fi uitat” (Art. 17 GDPR) — Condiții și limitări:</strong> Puteți solicita ștergerea datelor dumneavoastră exclusiv în cazurile expres prevăzute de Art. 17 alin. (1) GDPR (de exemplu, când datele nu mai sunt necesare pentru scopurile pentru care au fost colectate sau când v-ați opus prelucrării conform Art. 21 alin. (1) și nu există motive legitime prevalente).<br />
              <em>Limitare legală expresă:</em> Dreptul la ștergere <strong>nu se aplică</strong> dacă prelucrarea este necesară pentru respectarea unei obligații legale ce impune păstrarea datelor conform legislației române (cum sunt facturile și evidențele fiscale contabile) sau pentru constatarea, exercitarea ori apărarea unui drept în instanță (Art. 17 alin. (3) lit. (b) și (e) GDPR).
            </li>
            <li className={styles.listItem}>
              <strong>Dreptul la restricționarea prelucrării (Art. 18 GDPR):</strong> În situațiile în care contestați exactitatea datelor, pe perioada verificărilor, sau când vă opuneți ștergerii datelor în caz de prelucrare ilegală, solicitând în schimb restricționarea utilizării lor.
            </li>
            <li className={styles.listItem}>
              <strong>Dreptul la portabilitatea datelor (Art. 20 GDPR) — Aplicare condiționată:</strong> Acest drept se aplică <strong>doar dacă sunt îndeplinite cumulativ următoarele condiții prevăzute de Art. 20 din GDPR</strong>:
              <br />
              1. Prelucrarea se bazează pe <em>consimțământ</em> (Art. 6(1)(a)) sau pe un <em>contract</em> (Art. 6(1)(b)); <em>ȘI</em>
              <br />
              2. Prelucrarea este efectuată prin <em>mijloace automatizate</em>.
              <br />
              Dreptul la portabilitate nu se aplică datelor prelucrate exclusiv pe suport de hârtie sau în documente fizice de evidență și nu poate aduce atingere drepturilor și libertăților altora.
            </li>
            <li className={styles.listItem}>
              <strong>Dreptul de a nu face obiectul unei decizii automate:</strong> MOBATIDOR SRL nu aplică decizii bazate exclusiv pe prelucrare automată și nu efectuează profilare (Art. 22 GDPR).
            </li>
          </ul>

          <p className={styles.paragraph}>
            <strong>Modalitatea de exercitare a drepturilor:</strong><br />
            Pentru a vă exercita oricare dintre drepturile de mai sus, puteți transmite o cerere prin email la <a href={CONTACT.emailMailto}>{CONTACT.email}</a> sau în scris prin poștă la sediul social din Sat Gura Arieșului, nr. 152, jud. Alba, cod 517406. Nu solicităm formulare tipizate sau cerințe formale de semnare olografă; în cazul în care avem îndoieli întemeiate cu privire la identitatea persoanei care formulează cererea, putem solicita doar informațiile suplimentare strict necesare pentru confirmarea identității, conform Art. 12 alin. (6) din GDPR.
          </p>

          <p className={styles.paragraph}>
            <strong>Termenul de răspuns:</strong><br />
            Conform <strong>Art. 12 alin. (3) din GDPR</strong>, vă vom furniza informații privind acțiunile întreprinse în urma cererii dumneavoastră <strong>în termen de cel mult o lună de la primirea cererii</strong>. Această perioadă poate fi prelungită cu <strong>două luni</strong> atunci când este necesar, ținându-se seama de complexitatea și numărul cererilor. Operatorul vă va informa cu privire la orice astfel de prelungire, în termen de o lună de la primirea cererii, prezentând și motivele întârzierii.
          </p>

          <div className={styles.callout}>
            <p>
              <strong>Dreptul de a depune o plângere la autoritatea de supraveghere:</strong><br />
              Dacă apreciați că prelucrarea datelor dumneavoastră cu caracter personal încalcă dispozițiile GDPR, aveți dreptul legal de a depune o plângere la autoritatea națională de supraveghere:
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

        {/* 9. Contact */}
        <section className={styles.card} aria-labelledby="sec-contact-info">
          <h2 id="sec-contact-info" className={styles.cardTitle}>9. Întrebări și Contact</h2>
          <p className={styles.paragraph}>
            Pentru orice întrebări sau solicitări referitoare la confidențialitatea datelor dumneavoastră, ne puteți contacta la:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}><strong>Operator:</strong> {CONTACT.legalName} (CUI: {CONTACT.cui}, Reg. Com.: {CONTACT.regCom})</li>
            <li className={styles.listItem}><strong>Persoană de contact:</strong> {CONTACT.contactPerson}</li>
            <li className={styles.listItem}><strong>Email:</strong> <a href={CONTACT.emailMailto}>{CONTACT.email}</a></li>
            <li className={styles.listItem}><strong>Telefon:</strong> <a href={CONTACT.phoneTel}>{CONTACT.phone}</a></li>
            <li className={styles.listItem}><strong>Sediu social:</strong> {CONTACT.registeredOffice}</li>
            <li className={styles.listItem}><strong>Punct de lucru / Atelier:</strong> {CONTACT.fullAddress}</li>
          </ul>
        </section>

        {/* Bottom navigation card */}
        <div className={styles.actionsCard}>
          <span className={styles.actionsText}>
            Doriți informații despre modul în care utilizăm fișierele cookie și tehnologiile web?
          </span>
          <Link to="/politica-de-cookies" className={styles.actionsLink}>
            Consultați Politica de cookies →
          </Link>
        </div>
      </div>
    </div>
  )
}
