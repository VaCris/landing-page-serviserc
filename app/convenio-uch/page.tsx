import type { Metadata } from 'next';
import Link from 'next/link';
import { agreement } from '@/data/agreement';
import { asset, whatsappLink } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Convenio UCH',
  description: 'Información sobre el convenio de SERVISERC S.A.C. con la Universidad de Ciencias y Humanidades.',
};

const agreementSteps = [
  {
    title: 'Consulta el convenio',
    text: 'Escríbenos por WhatsApp o acércate a una sede de SERVISERC para solicitar información vigente.',
  },
  {
    title: 'Conoce las opciones académicas',
    text: 'Te orientamos sobre las carreras disponibles y los beneficios comunicados por la universidad.',
  },
  {
    title: 'Recibe acompañamiento',
    text: 'Te ayudamos a resolver tus dudas y a identificar la sede más conveniente para recibir atención.',
  },
];

export default function AgreementPage() {
  return (
    <main>
      <section className="agreement-hero">
        <div className="container agreement-hero-grid">
          <div>
            <span className="hero-kicker">Convenio educativo</span>
            <h1 className="agreement-hero-title">{agreement.title}</h1>
            <p className="agreement-hero-copy">{agreement.description}</p>
            <div className="hero-actions">
              <a className="btn btn-secondary" href={whatsappLink('Hola Serviserc, necesito información sobre el convenio UCH')} target="_blank" rel="noopener noreferrer">
                Consultar convenio
              </a>
              <Link className="btn btn-outline" href="/#sedes">
                Ver sedes
              </Link>
            </div>
          </div>
          <div className="agreement-poster">
            <img src={asset('/img/convenio-uch.png')} alt="Convenio SERVISERC con Universidad de Ciencias y Humanidades" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Beneficios del convenio</h2>
          <p className="section-copy">
            Una alianza pensada para acercar oportunidades académicas, descuentos especiales e información clara para clientes, familias y emprendedores.
          </p>
          <div className="agreement-summary">
            {agreement.highlights.map((item) => (
              <div key={item.title} className="summary-item">
                <strong>{item.title}</strong>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container agreement-careers-layout">
          <div className="agreement-careers-image">
            <img src={asset('/img/convenio-uch.png')} alt="Carreras disponibles del convenio UCH" />
          </div>

          <section className="info-panel careers-panel">
            <span className="hero-kicker" style={{ background: '#d8232a', color: '#ffffff' }}>Orientación académica</span>
            <h2>Información sobre carreras y beneficios</h2>
            <p>
              Consulta las opciones disponibles del convenio UCH y recibe orientación sobre beneficios, sedes de atención y pasos para solicitar mayor información.
            </p>

            <div className="process-grid" style={{ gridTemplateColumns: '1fr', marginTop: 28 }}>
              {agreementSteps.map((step, index) => (
                <article key={step.title} className="process-card">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>

            <div className="agreement-card" style={{ marginTop: 28 }}>
              <h3>¿Deseas más información?</h3>
              <p>Escríbenos indicando la carrera de tu interés y te orientaremos según la información disponible del convenio.</p>
              <a className="btn btn-secondary" href={whatsappLink('Hola Serviserc, quiero información sobre una carrera del convenio UCH')} target="_blank" rel="noopener noreferrer" style={{ marginTop: 18 }}>
                Consultar por WhatsApp
              </a>
            </div>
          </section>
        </div>
      </section>

      <section className="section">
        <div className="container agreement-info-grid">
          <aside className="info-panel">
            <h2>Informes</h2>
            <p>{agreement.note}</p>
            <ul className="info-list">
              <li>Consulta disponibilidad de descuentos especiales.</li>
              <li>Recibe orientación sobre carreras y sedes de atención.</li>
              <li>Solicita información desde WhatsApp o presencialmente.</li>
            </ul>
            <a className="btn btn-primary" href={whatsappLink('Hola Serviserc, deseo información sobre el convenio con UCH')} target="_blank" rel="noopener noreferrer">
              Solicitar información
            </a>
          </aside>

          <div className="agreement-card">
            <h3>Atención SERVISERC</h3>
            <p>
              Acércate a nuestras sedes o escríbenos por WhatsApp para recibir información sobre el convenio, carreras disponibles y beneficios vigentes.
            </p>
            <Link className="btn btn-secondary" href="/#sedes" style={{ marginTop: 18 }}>
              Ver ubicación de sedes
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
