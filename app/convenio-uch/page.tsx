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
    title: 'Revisa las carreras',
    text: 'La imagen del convenio muestra las carreras disponibles comunicadas por la Universidad de Ciencias y Humanidades.',
  },
  {
    title: 'Solicita orientación',
    text: 'Te indicamos dónde consultar beneficios, descuentos y requisitos según la información disponible.',
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
            <span className="panel-kicker">Carreras y orientación</span>
            <h2>Elige una carrera y solicita información</h2>
            <p>
              La imagen del convenio ya contiene el listado de carreras. Por eso usamos este espacio para guiar al visitante hacia la consulta y evitar repetir la misma información.
            </p>
            <div className="agreement-step-list">
              {agreementSteps.map((step, index) => (
                <article key={step.title} className="agreement-step-card">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="agreement-side-cta">
              <strong>¿Quieres consultar por una carrera?</strong>
              <p>Indícanos la carrera de tu interés y la sede donde deseas recibir orientación.</p>
              <a className="btn btn-primary" href={whatsappLink('Hola Serviserc, quiero información sobre una carrera del convenio UCH')} target="_blank" rel="noopener noreferrer">
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
