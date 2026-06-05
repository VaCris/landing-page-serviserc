import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';
import { ZoomableImage } from '@/components/ZoomableImage';
import { agreement } from '@/data/agreement';
import { absoluteAsset, absoluteUrl, asset, siteConfig, whatsappLink } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Convenio UCH en Lima',
  description: 'Información sobre el convenio de SERVISERC S.A.C. con la Universidad de Ciencias y Humanidades para carreras y beneficios en Lima.',
  alternates: {
    canonical: absoluteUrl('/convenio-uch/'),
  },
  keywords: [
    'Convenio UCH',
    'Universidad de Ciencias y Humanidades',
    'SERVISERC convenio',
    'carreras UCH Lima',
    'descuentos UCH',
  ],
  openGraph: {
    title: 'Convenio UCH | SERVISERC S.A.C.',
    description: 'Información sobre carreras, beneficios y orientación del convenio UCH con SERVISERC S.A.C.',
    url: absoluteUrl('/convenio-uch/'),
    images: [
      {
        url: absoluteAsset('/img/uch-1.webp'),
        width: 1200,
        height: 630,
        alt: 'Convenio UCH SERVISERC',
      },
    ],
    locale: siteConfig.locale,
    type: 'website',
  },
};

const agreementSteps = [
  {
    title: 'Consulta el convenio',
    text: 'Solicita información vigente por WhatsApp o en nuestras sedes.',
  },
  {
    title: 'Elige una carrera',
    text: 'Revisa las opciones académicas disponibles en el convenio.',
  },
  {
    title: 'Recibe orientación',
    text: 'Te guiamos sobre beneficios, sedes y próximos pasos.',
  },
];

export default function AgreementPage() {
  return (
    <main>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'EducationalOccupationalProgram',
          name: 'Convenio UCH SERVISERC',
          description: agreement.description,
          url: absoluteUrl('/convenio-uch/'),
          provider: {
            '@id': `${siteConfig.url}/#organization`,
          },
          areaServed: {
            '@type': 'City',
            name: 'Lima',
          },
        }}
      />
      <section
        className="uch-hero"
        style={{
          backgroundImage: `linear-gradient(110deg, rgb(5 18 38 / 94%), rgb(7 29 61 / 82%) 48%, rgb(216 35 42 / 38%)), url(${asset('/img/uch-1.webp')})`,
        }}
      >
        <div className="container uch-hero-grid uch-hero-background-layout">
          <div className="uch-hero-content">
            <span className="hero-kicker">Convenio educativo</span>
            <h1 className="agreement-hero-title">{agreement.title}</h1>
            <p className="agreement-hero-copy">{agreement.description}</p>
            <div className="uch-hero-badges">
              <span>Descuentos especiales</span>
              <span>Orientación en sedes</span>
              <span>Información académica</span>
            </div>
            <div className="hero-actions">
              <a className="btn btn-secondary" href={whatsappLink('Hola Serviserc, necesito información sobre el convenio UCH')} target="_blank" rel="noopener noreferrer">
                Consultar convenio
              </a>
              <Link className="btn btn-outline" href="/#sedes">
                Ver sedes
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-separated">
        <div className="container">
          <span className="section-eyebrow">Beneficios</span>
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

      <section className="section section-muted section-separated">
        <div className="container agreement-careers-layout">
          <div className="agreement-careers-image">
            <ZoomableImage src={asset('/img/convenio-uch.webp')} alt="Carreras disponibles del convenio UCH" />
          </div>

          <section className="info-panel careers-panel careers-panel-compact">
            <span className="hero-kicker" style={{ background: '#d8232a', color: '#ffffff' }}>Orientación académica</span>
            <h2>Consulta carreras y beneficios</h2>
            <p>
              Escríbenos para recibir información sobre carreras, descuentos especiales y sedes de atención.
            </p>

            <div className="agreement-compact-list">
              {agreementSteps.map((step, index) => (
                <article key={step.title} className="agreement-compact-item">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </article>
              ))}
            </div>

            <a className="btn btn-primary compact-cta" href={whatsappLink('Hola Serviserc, quiero información sobre una carrera del convenio UCH')} target="_blank" rel="noopener noreferrer">
              Consultar por WhatsApp
            </a>
          </section>
        </div>
      </section>
    </main>
  );
}
