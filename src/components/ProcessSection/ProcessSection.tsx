import styles from './ProcessSection.module.css'

const steps = [
  {
    number: '01',
    title: 'Consiliere design interior',
    description:
      'Oferim consultanță pentru amenajarea spațiilor, punând accent pe funcționalitate, ergonomie și cerințele clientului. Designul poate fi realizat de echipa noastră sau pus la dispoziție de client.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Proiectare design',
    description:
      'Realizăm proiecte personalizate și propunem soluții adaptate bugetului și cerințelor estetice. Lucrăm atât pe baza conceptelor și designurilor proprii, cât și după proiectele furnizate de client.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M9 9h6M9 12h6M9 15h4"/>
        <path d="M7 3v18"/>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Transport și montaj',
    description:
      'Asigurăm transport și montaj profesionist pentru mobilierul realizat, oferind soluții logistice adaptate fiecărui proiect.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="1" y="3" width="15" height="13" rx="1"/>
        <path d="M16 8h4l3 3v5h-7V8z"/>
        <circle cx="5.5" cy="18.5" r="2.5"/>
        <circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
  },
]

export default function ProcessSection() {
  return (
    <section id="proces" className={styles.section} aria-labelledby="process-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-header__eyebrow">Cum lucrăm</span>
          <h2 className="section-header__title" id="process-heading">Procesul Nostru</h2>
          <p className="section-header__description">
            De la prima discuție până la livrare și montaj, suntem alături de tine în fiecare etapă.
          </p>
          <div className="divider" />
        </div>

        <div className={styles.steps}>
          {steps.map((step, i) => (
            <div key={step.number} className={styles.step} aria-label={`Pasul ${step.number}: ${step.title}`}>
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className={styles.connector} aria-hidden="true" />
              )}
              <div className={styles.stepInner}>
                <div className={styles.iconWrap} aria-hidden="true">
                  {step.icon}
                </div>
                <div className={styles.stepNumber} aria-hidden="true">{step.number}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
