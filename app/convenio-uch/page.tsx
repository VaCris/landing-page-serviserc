import type { Metadata } from 'next';
import { agreement } from '@/data/agreement';
import { whatsappLink } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Convenio UCH',
  description: 'Información sobre el convenio de SERVISERC S.A.C. con la Universidad de Ciencias y Humanidades.',
};

export default function AgreementPage() {
  return (
    <main>
      <section className="service-detail-hero">
        <div className="container">
          <span className="hero-kicker">Convenio educativo</span>
          <h1 className="service-detail-title">{agreement.title}</h1>
          <p className="hero-copy">{agreement.description}</p>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container agreement-grid">
          <div className="detail-box">
            <h2>Carreras disponibles</h2>
            <ul className="agreement-list">
              {agreement.careers.map((career) => (
                <li key={career}>{career}</li>
              ))}
            </ul>
          </div>

          <div className="agreement-card">
            <h3>Informes</h3>
            <p>{agreement.note}</p>
            <p>Aprovecha los descuentos especiales e infórmate en nuestras sedes.</p>
            <a className="btn btn-secondary" href={whatsappLink('Hola Serviserc, necesito información sobre el convenio UCH')} target="_blank" rel="noopener noreferrer" style={{ marginTop: 18 }}>
              Consultar convenio
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
