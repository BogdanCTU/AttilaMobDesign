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
            Informații complete și transparente privind prelucrarea datelor cu caracter personal de către <strong>MOBATIDOR SRL</strong> în legătură cu site-ul web <strong>mobatidor.ro</strong> și activitatea de producție de mobilier la comandă, în conformitate cu Regulamentul (UE) 2016/679 (GDPR).
          </p>
          <span className={styles.lastUpdated}>Data ultimei actualizări: octombrie 2026</span>
        </div>
      </header>

      <div className={`container ${styles.body}`}>
        {/* 1. Operatorul de date */}
        <section className={styles.card} aria-labelledby="sec-operator">
          <h2 id="sec-operator" className={styles.cardTitle}>1. Cine este Operatorul de date</h2>
          <p className={styles.paragraph}>
            În conformitate cu Regulamentul (UE) 2016/679 privind protecția persoanelor fizice în ceea ce privește prelucrarea datelor cu caracter personal (GDPR), operatorul de date responsabil pentru prelucrarea datelor dumneavoastră este:
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
              <strong>Fără formulare de contact sau colectare online:</strong> Site-ul nu conține formulare de contact, formulare de cerere de ofertă, formulare de newsletter sau câmpuri de introducere de date.
            </li>
            <li className={styles.listItem}>
              <strong>Fără conturi de utilizator sau baze de date pe site:</strong> Nu există sisteme de autentificare, înregistrare sau stocare de baze de date de clienți găzduite pe site.
            </li>
            <li className={styles.listItem}>
              <strong>Fără plăți online sau date bancare pe site:</strong> Pe site nu se desfășoară tranzacții financiare, nu se solicită și nu se stochează date de card bancar.
            </li>
            <li className={styles.listItem}>
              <strong>Fără instrumente de urmărire sau analiză a traficului:</strong> Site-ul nu utilizează Google Analytics, Hotjar, Matomo, pixeli de urmărire (Meta/Facebook Pixel) sau mecanisme de profilare automată a vizitatorilor.
            </li>
          </ul>
          <p className={styles.paragraph}>
            <strong>Categoriile de date cu caracter personal prelucrate sunt limitate strict la:</strong>
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Date tehnice de conectare (Server Logs ale furnizorului de găzduire):</strong> Adresa IP, marcajul temporal al accesării (data și ora), resursa sau fișierul solicitat, identificatorul de browser (User-Agent) și adresa paginii de la care s-a efectuat accesul (Referrer). Aceste date sunt generate automat la nivel de protocol HTTP de către infrastructura de găzduire.
            </li>
            <li className={styles.listItem}>
              <strong>Date furnizate voluntar prin contact direct:</strong> Numele și prenumele, numărul de telefon, adresa de email, schițe, dimensiuni de mobilier sau adresa de livrare/montaj comunicate voluntar prin apel telefonic, SMS, email, WhatsApp sau Facebook.
            </li>
            <li className={styles.listItem}>
              <strong>Date conținute în documentele contabile obligatorii (pentru comenzi confirmate):</strong> Numele, adresa de domiciliu sau de facturare și mențiunile prevăzute obligatoriu de Codul fiscal pe facturile emise și pe chitanțele/extrasele de cont bancar aferente plăților prin bancă.
            </li>
          </ul>
        </section>

        {/* 3. Distincție servicii terțe integrate vs linkuri externe */}
        <section className={styles.card} aria-labelledby="sec-third-parties">
          <h2 id="sec-third-parties" className={styles.cardTitle}>3. Servicii terțe integrate (Embedded) vs. Legături externe simple</h2>
          <p className={styles.paragraph}>
            Facem o distincție clară între tehnologiile integrate tehnic în pagină și legăturile externe pe care le accesați exclusiv la alegerea dumneavoastră:
          </p>

          <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--color-text)', marginTop: 'var(--space-4)', marginBottom: 'var(--space-2)' }}>
            A. Servicii terțe integrate în pagină
          </h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Google Fonts (Google LLC / Google Ireland Limited):</strong> Fonturile utilizate pentru afișarea textului (<em>Playfair Display</em> și <em>Inter</em>) sunt încărcate tehnic prin intermediul serviciului Google Fonts (<code>fonts.googleapis.com</code> și <code>fonts.gstatic.com</code>). Conform documentației oficiale Google Fonts, cererile de fonturi sunt neautentificate și nu setează cookie-uri în browser, însă adresa IP a dispozitivului dvs. este transmisă tehnic către serverele Google pentru a permite descărcarea fișierelor de stil și font.
            </li>
            <li className={styles.listItem}>
              <strong>Google Maps – Încărcare la cerere (Soluție 2-Click):</strong> Pentru a vă proteja confidențialitatea, harta Google Maps din secțiunea de contact <strong>nu se încarcă automat</strong> la vizitarea site-ului. Nicio conexiune și nicio transmisie de date către serverele Google Maps nu are loc până când nu alegeți în mod expres să apăsați pe butonul <em>„Afișează harta interactivă”</em> sau să deschideți linkul către aplicația externă.
            </li>
          </ul>

          <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--color-text)', marginTop: 'var(--space-4)', marginBottom: 'var(--space-2)' }}>
            B. Legături web externe simple (Ordinary Links)
          </h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>WhatsApp (<code>wa.me</code>):</strong> Butonul de WhatsApp este o simplă legătură web externă. La simpla navigare pe site, nu se transmit date și nu se încarcă scripturi WhatsApp. Numai dacă dați click voluntar pe buton, veți fi redirecționat către platforma externă operată de WhatsApp Ireland Limited / Meta Platforms Ireland Limited.
            </li>
            <li className={styles.listItem}>
              <strong>Facebook:</strong> Linkul către pagina noastră de Facebook nu încarcă widgeturi sau scripturi de urmărire pe site-ul nostru. La click, se deschide platforma externă operată de Meta Platforms Ireland Limited.
            </li>
            <li className={styles.listItem}>
              <strong>Legături directe de apel și email (<code>tel:</code> și <code>mailto:</code>):</strong> Activează doar aplicația de apelare sau clientul de email instalat pe dispozitivul dumneavoastră, fără ca datele să fie intermediate prin site.
            </li>
          </ul>
        </section>

        {/* 4. Scopuri și temeiuri juridice */}
        <section className={styles.card} aria-labelledby="sec-purposes">
          <h2 id="sec-purposes" className={styles.cardTitle}>4. Scopurile și temeiurile juridice ale prelucrării</h2>
          <p className={styles.paragraph}>
            Prelucrarea datelor dumneavoastră se întemeiază strict pe prevederile Art. 6 din GDPR:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Livrarea tehnică și securitatea paginii web:</strong> Gestionarea jurnalelor de acces ale serverului pentru transmiterea conținutului, mentenanța rețelei și prevenirea incidentelor de securitate cibernetică.<br />
              <em>Temei legal:</em> <strong>Art. 6 alin. (1) lit. (f) GDPR</strong> (interesul legitim al operatorului de a menține un site web funcțional și protejat).
            </li>
            <li className={styles.listItem}>
              <strong>Răspunsul la solicitări, consultanță și estimări de preț:</strong> Preluarea mesajelor, evaluarea schițelor tehnice și formularea ofertelor pentru mobilier la comandă.<br />
              <em>Temei legal:</em> <strong>Art. 6 alin. (1) lit. (b) GDPR</strong> (demersuri la cererea persoanei vizate înainte de încheierea unui contract).
            </li>
            <li className={styles.listItem}>
              <strong>Încheierea și executarea contractului:</strong> Proiectarea, producția, livrarea și montajul mobilierului personalizat contractat.<br />
              <em>Temei legal:</em> <strong>Art. 6 alin. (1) lit. (b) GDPR</strong> (executarea contractului).
            </li>
            <li className={styles.listItem}>
              <strong>Respectarea obligațiilor financiar-contabile și fiscale:</strong> Emiterea facturilor, ținerea evidenței contabile și declararea obligațiilor fiscale către autoritățile competente.<br />
              <em>Temei legal:</em> <strong>Art. 6 alin. (1) lit. (c) GDPR</strong> (îndeplinirea unei obligații legale ce revine operatorului conform Legii contabilității nr. 82/1991 și Codului fiscal).
            </li>
            <li className={styles.listItem}>
              <strong>Garanția produselor și constatarea sau apărarea drepturilor în justiție:</strong> Asigurarea remediilor în cadrul termenului de garanție și gestiunea eventualelor litigii.<br />
              <em>Temei legal:</em> <strong>Art. 6 alin. (1) lit. (f) GDPR</strong> (interesul legitim al operatorului de a-și asigura apărarea drepturilor legitime).
            </li>
          </ul>
        </section>

        {/* 5. Găzduire, destinatari și transferuri internaționale */}
        <section className={styles.card} aria-labelledby="sec-hosting-transfers">
          <h2 id="sec-hosting-transfers" className={styles.cardTitle}>5. Găzduire, destinatari și transferuri internaționale de date</h2>
          <p className={styles.paragraph}>
            <strong>Găzduirea site-ului web și server logs:</strong><br />
            Site-ul este găzduit prin intermediul serviciului static <strong>GitHub Pages</strong>, furnizat de <strong>GitHub, Inc.</strong> (88 Colin P. Kelly Jr. St., San Francisco, CA 94107, SUA), companie deținută de Microsoft Corporation.
          </p>
          <p className={styles.paragraph}>
            Conform documentației oficiale GitHub Pages, furnizorul de găzduire poate colecta și stoca informații de jurnalizare tehnică (inclusiv adrese IP ale vizitatorilor) pentru a respecta obligațiile legale și pentru a menține securitatea și integritatea infrastructurii de găzduire. Operatorul MOBATIDOR SRL nu deține acces direct la fișiere detaliate de jurnale de server și nu le utilizează pentru identificarea vizitatorilor.
          </p>
          <p className={styles.paragraph}>
            <strong>Alți destinatari / împuterniciți:</strong>
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Google Ireland Limited / Google LLC:</strong> Pentru livrarea Google Fonts, afișarea la cerere a hărții Google Maps și gestionarea căsuței de email de contact (Gmail);
            </li>
            <li className={styles.listItem}>
              <strong>Servicii externe de comunicare:</strong> WhatsApp Ireland Limited și Meta Platforms Ireland Limited, în măsura în care alegeți voluntar aceste canale;
            </li>
            <li className={styles.listItem}>
              <strong>Servicii profesionale contabile autorizate din România:</strong> Pentru întocmirea evidențelor contabile și a declarațiilor fiscale obligatorii conform legii;
            </li>
            <li className={styles.listItem}>
              <strong>Autorități publice:</strong> Agenția Națională de Administrare Fiscală (ANAF) sau instanțele judecătorești, exclusiv în limitele unei cerințe legale exprese.
            </li>
          </ul>

          <div className={styles.callout}>
            <p>
              <strong>Transferuri internaționale de date (în afara UE/SEE):</strong><br />
              Găzduirea pe GitHub Pages și utilizarea serviciilor Google pot implica stocarea sau tranzitul tehnic al datelor de conexiune sau email pe servere situate în Statele Unite ale Americii. Transferurile internaționale către GitHub, Inc. (prin Microsoft Corporation) și Google LLC se bazează pe decizia de adecvare privind <strong>Cadrul de confidențialitate a datelor UE-SUA (EU-U.S. Data Privacy Framework)</strong> la care aceste entități sunt certificate, precum și pe <strong>Clauzele Contractuale Standard (SCC)</strong> aprobate de Comisia Europeană integrate în acordurile lor de prelucrare a datelor.
            </p>
          </div>
        </section>

        {/* 6. Durata de păstrare */}
        <section className={styles.card} aria-labelledby="sec-retention">
          <h2 id="sec-retention" className={styles.cardTitle}>6. Durata de păstrare a datelor (Data Retention)</h2>
          <p className={styles.paragraph}>
            MOBATIDOR SRL aplică o politică strictă de limitare a stocării, distingând clar între solicitările nefinalizate și documentele supuse unor termene legale obligatorii de păstrare:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Solicitări generale non-contractuale:</strong> Întrebările generale, mesajele sau conversațiile informative care nu conduc la o cerere de proiect sau ofertare de preț sunt păstrate pentru o perioadă de <strong>maximum 1 lună</strong> de la data clarificării, după care sunt șterse.
            </li>
            <li className={styles.listItem}>
              <strong>Cereri de ofertă și proiecte neconfirmate:</strong> Discuțiile tehnice, schițele, măsurătorile și cotațiile de preț pentru proiecte de mobilier care <em>nu s-au concretizat printr-un contract sau comandă fermă</em> sunt păstrate pentru o perioadă de <strong>maximum 1 an</strong> de la data ultimei comunicări (acolo unde este permis legal), pentru a facilita reluarea discuțiilor dacă potențialul client revine asupra proiectului.
            </li>
            <li className={styles.listItem}>
              <strong>Excepție obligatorie – Documente financiar-contabile (termen legal de 5 ani):</strong> Facturile fiscale emise, chitanțele și documentele justificative care stau la baza înregistrărilor contabile <em>nu pot fi șterse la cerere sau după termenele menționate anterior</em>. Conform <strong>Art. 25 alin. (1) din Legea contabilității nr. 82/1991</strong> (astfel cum a fost modificată prin <strong>Legea nr. 36/2023</strong>), documentele justificative contabile se păstrează în arhivă timp de <strong>5 ani</strong>, calculat de la data de 1 iulie a anului următor celui de încheiere a exercițiului financiar în care au fost întocmite, coroborat cu termenul de prescripție a dreptului de stabilire a creanțelor fiscale prevăzut de <strong>Art. 110 din Legea nr. 207/2015 privind Codul de procedură fiscală</strong>.
            </li>
            <li className={styles.listItem}>
              <strong>Excepție obligatorie – Situații financiare anuale (termen legal de 10 ani):</strong> Bilanțurile și situațiile financiare anuale ale societății se păstrează timp de <strong>10 ani</strong>, în conformitate cu <strong>Art. 25 alin. (1) teza a doua din Legea contabilității nr. 82/1991</strong>.
            </li>
            <li className={styles.listItem}>
              <strong>Garanția mobilierului și apărarea în justiție (termen de 3 ani):</strong> Datele contractuale minime necesare atestării calității și acordării garanției pentru mobilierul executat sunt păstrate pe durata termenului de garanție convenit și pe durata termenului general de prescripție extinctivă de <strong>3 ani</strong> prevăzut de <strong>Art. 2517 din Codul civil (Legea nr. 287/2009)</strong>, ori până la soluționarea definitivă a eventualelor litigii.
            </li>
          </ul>
        </section>

        {/* 7. Cookies și browser storage */}
        <section className={styles.card} aria-labelledby="sec-cookies">
          <h2 id="sec-cookies" className={styles.cardTitle}>7. Module cookie și tehnologii de stocare în browser</h2>
          <p className={styles.paragraph}>
            Site-ul <strong>mobatidor.ro</strong> funcționează fără a utiliza module cookie sau tehnologii intruzive de urmărire:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>Nu utilizează module cookie proprii (first-party cookies);</li>
            <li className={styles.listItem}>Nu utilizează spațiul de stocare local al navigatorului (localStorage, sessionStorage sau IndexedDB);</li>
            <li className={styles.listItem}>Nu utilizează cookie-uri de analiză a traficului, marketing sau publicitate comportamentală;</li>
            <li className={styles.listItem}>
              Datorită implementării soluției la cerere (2-click) pentru harta Google Maps și lipsei modulelor cookie neesențiale, nu este necesară afișarea unui banner de consimțământ conform Legii nr. 506/2004 și Directivei ePrivacy.
            </li>
          </ul>
          <p className={styles.paragraph}>
            Pentru analiza completă privind tehnologiile utilizate, consultați{' '}
            <Link to="/politica-de-cookies" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>
              Politica privind modulele cookie
            </Link>.
          </p>
        </section>

        {/* 8. Drepturile persoanei vizate */}
        <section className={styles.card} aria-labelledby="sec-rights">
          <h2 id="sec-rights" className={styles.cardTitle}>8. Drepturile dumneavoastră conform GDPR și limitările lor</h2>
          <p className={styles.paragraph}>
            În calitate de persoană vizată, Regulamentul (UE) 2016/679 vă garantează următoarele drepturi:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Dreptul de acces (Art. 15 GDPR):</strong> Dreptul de a obține o confirmare dacă prelucrăm sau nu date ale dumneavoastră și informații detaliate privind prelucrarea.
            </li>
            <li className={styles.listItem}>
              <strong>Dreptul la rectificare (Art. 16 GDPR):</strong> Dreptul de a solicita corectarea fără întârzieri nejustificate a datelor inexacte sau completarea celor incomplete.
            </li>
            <li className={styles.listItem}>
              <strong>Dreptul la ștergerea datelor – „dreptul de a fi uitat” (Art. 17 GDPR):</strong> Puteți solicita ștergerea datelor atunci când acestea nu mai sunt necesare scopurilor pentru care au fost colectate sau dacă vă opuneți prelucrării bazate pe interes legitim.<br />
              <em>Limitare legală expresă:</em> Dreptul la ștergere <strong>nu se aplică</strong> dacă prelucrarea este necesară pentru respectarea unei obligații legale ce impune păstrarea datelor (cum sunt facturile și evidențele fiscale contabile conform legii române) sau pentru constatarea, exercitarea sau apărarea unui drept în instanță (Art. 17 alin. (3) lit. (b) și (e) GDPR).
            </li>
            <li className={styles.listItem}>
              <strong>Dreptul la restricționarea prelucrării (Art. 18 GDPR):</strong> În condițiile prevăzute de lege (de exemplu, când contestați exactitatea datelor, pe perioada necesară verificării).
            </li>
            <li className={styles.listItem}>
              <strong>Dreptul la portabilitatea datelor (Art. 20 GDPR):</strong> Se aplică <strong>doar dacă sunt îndeplinite cumulativ condițiile prevăzute de Art. 20 din GDPR</strong>, respectiv: (1) prelucrarea se bazează pe consimțământ (Art. 6(1)(a)) sau pe un contract (Art. 6(1)(b)), <em>ȘI</em> (2) prelucrarea este efectuată prin mijloace automatizate. Dreptul la portabilitate nu se aplică documentelor și arhivelor deținute exclusiv pe suport de hârtie și nu se poate exercita în mod contrar drepturilor altor persoane.
            </li>
            <li className={styles.listItem}>
              <strong>Dreptul la opoziție (Art. 21 GDPR):</strong> Dreptul de a vă opune în orice moment, din motive legate de situația dumneavoastră particulară, prelucrărilor întemeiate pe interesul legitim al operatorului (Art. 6 alin. (1) lit. (f) GDPR).
            </li>
            <li className={styles.listItem}>
              <strong>Dreptul de a nu face obiectul unei decizii individuale automatizate:</strong> MOBATIDOR SRL nu utilizează procese decizionale automatizate și nu efectuează profilare în sensul Art. 22 GDPR.
            </li>
          </ul>

          <p className={styles.paragraph}>
            <strong>Modalitatea de exercitare a drepturilor:</strong><br />
            Pentru a vă exercita oricare dintre drepturile de mai sus, puteți transmite o cerere simplă prin email la <a href={CONTACT.emailMailto}>{CONTACT.email}</a> sau în scris prin poștă/curier la sediul social din Sat Gura Arieșului, nr. 152, jud. Alba, cod 517406. Nu impunem cerințe excesive de formă (cererea nu trebuie să respecte un tipizat anume), însă dacă avem îndoieli întemeiate cu privire la identitatea solicitantului, putem solicita informații suplimentare necesare pentru confirmarea acesteia, conform Art. 12 alin. (6) din GDPR.
          </p>

          <p className={styles.paragraph}>
            <strong>Termenul de răspuns:</strong><br />
            Conform <strong>Art. 12 alin. (3) din GDPR</strong>, vă vom furniza informații privind acțiunile întreprinse în urma cererii dumneavoastră <strong>în termen de cel mult o lună de la primirea cererii</strong>. Această perioadă poate fi prelungită cu <strong>două luni</strong> atunci când este necesar, ținându-se seama de complexitatea și numărul cererilor. Operatorul vă va informa cu privire la orice astfel de prelungire, în termen de o lună de la primirea cererii, prezentând și motivele întârzierii.
          </p>

          <div className={styles.callout}>
            <p>
              <strong>Dreptul de a depune o plângere la autoritatea de supraveghere:</strong><br />
              Dacă apreciați că prelucrarea datelor dumneavoastră cu caracter personal încalcă reglementările GDPR, aveți dreptul legal de a depune o plângere la autoritatea națională de supraveghere:
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
            Doriți informații despre modul în care utilizăm fișierele cookie și conținutul terț?
          </span>
          <Link to="/politica-de-cookies" className={styles.actionsLink}>
            Consultați Politica de cookies →
          </Link>
        </div>
      </div>
    </div>
  )
}
