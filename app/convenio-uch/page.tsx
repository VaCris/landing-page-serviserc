import type { Metadata } from 'next';
import Link from 'next/link';
import { agreement } from '@/data/agreement';
import { asset, whatsappLink } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Convenio UCH',
  description: 'Información sobre el convenio de SERVISERC S.A.C. con la Universidad de Ciencias y Humanidades.',
};

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
            <img src={asset('/img/97712-493.webp')} alt="Convenio SERVISERC con UCH" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Beneficios del convenio</h2>
          <p className="section-copy">
            Una sección pensada para comunicar mejor la alianza, orientar a los interesados y llevarlos a consultar por WhatsApp o en sede.
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

          <section className="info-panel">
            <h2>Carreras disponibles</h2>
            <p>
              Estas son las carreras comunicadas en el convenio con la Universidad de Ciencias y Humanidades.
            </p>
            <div className="career-grid">
              {agreement.careers.map((career) => (
                <div key={career} className="career-card">
                  {career}
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
