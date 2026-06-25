import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';
import { agreement } from '@/data/agreement';
import { absoluteAsset, absoluteUrl, asset, siteConfig, whatsappLink } from '@/lib/site';
import ActiveFacultySection from './active-faculty-section';
import './uch-careers-overrides.css';

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
        url: absoluteAsset('/img/uch-1.avif'),
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
          backgroundImage: `linear-gradient(110deg, rgb(5 18 38 / 94%), rgb(7 29 61 / 82%) 48%, rgb(216 35 42 / 38%)), url(${asset('/img/uch-2.avif')})`,
        }}
      >
        <div className="container uch-hero-grid uch-hero-background-layout">
          <div className="uch-hero-content">
            <span className="hero-kicker">Convenio educativo</span>
            <h1 className="agreement-hero-title">{agreement.title}</h1>
            <p className="agreement-hero-copy">{agreement.description}</p>
            <div className="hero-actions">
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

      <section className="section section-separated">
        <div className="container">
          <ActiveFacultySection faculties={agreement.faculties} />
        </div>
      </section>

      <section className="uch-corp-footer-wrapper">
        <div className="uch-corp-wave">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" fill="currentColor">
            <path d="M0,60 C360,120 1080,0 1440,60 L1440,0 L0,0 Z" />
          </svg>
        </div>
        <div className="container agreement-corp-info">
          <div className="agreement-corp-text">
            <h3>Sobre el convenio</h3>
            <p>{agreement.note}</p>
          </div>
          <div className="agreement-corp-columns">
            <div>
              <strong>Dirección principal</strong>
              <p>{agreement.address}</p>
            </div>
            <div>
              <strong>Contacto</strong>
              <p>
                <a href={`tel:${agreement.phone}`}>{agreement.phone}</a>
              </p>
              <p>
                <a href={`mailto:${agreement.email}`}>{agreement.email}</a>
              </p>
              <p>
                <a href={agreement.web} target="_blank" rel="noopener noreferrer">{agreement.web}</a>
              </p>
            </div>
          </div>
        </div>
        <div className="uch-corp-wave-bottom">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" fill="currentColor">
            <path d="M0,50 C360,100 1080,0 1440,50 L1440,100 L0,100 Z" />
          </svg>
        </div>
      </section>
    </main>
  );
}
