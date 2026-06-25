import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';
import { ServiceCard } from '@/components/ServiceCard';
import { services } from '@/data/services';
import { servicesItemListJsonLd } from '@/lib/seo';
import { absoluteAsset, absoluteUrl, asset, siteConfig, whatsappLink } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Servicios Contables, Tributarios y Laborales en Lima',
  description: 'Servicios contables, tributarios, laborales, documentarios y empresariales para emprendedores, pymes y empresas en Lima, Perú.',
  alternates: {
    canonical: absoluteUrl('/servicios/'),
  },
  keywords: [
    'servicios contables Lima',
    'asesoría tributaria Lima',
    'asesoría laboral para empresas',
    'constitución de empresas Perú',
    'facturación electrónica SUNAT',
    ...siteConfig.keywords,
  ],
  openGraph: {
    title: 'Servicios Contables, Tributarios y Laborales en Lima | SERVISERC S.A.C.',
    description: 'Asesoría contable, tributaria, laboral y empresarial para emprendedores, pymes y empresas en Lima.',
    url: absoluteUrl('/servicios/'),
    images: [
      {
        url: absoluteAsset('/img/servicios-generales.webp'),
        width: 1200,
        height: 630,
        alt: 'Servicios contables y tributarios de SERVISERC',
      },
    ],
    locale: siteConfig.locale,
    type: 'website',
  },
};

const processSteps = [
  {
    title: 'Diagnóstico inicial',
    text: 'Revisamos tu necesidad, el estado de tu negocio y la documentación disponible.',
  },
  {
    title: 'Plan de atención',
    text: 'Definimos el servicio adecuado, los requisitos y el camino más ordenado para avanzar.',
  },
  {
    title: 'Acompañamiento',
    text: 'Te guiamos durante el proceso contable, tributario, laboral o documentario.',
  },
];

export default function ServicesPage() {
  return (
    <main>
      <JsonLd data={servicesItemListJsonLd()} />
      <section
        className="services-hero services-hero-image"
        style={{
          position: 'relative',
          backgroundImage: `linear-gradient(115deg, rgb(5 18 38 / 94%), rgb(7 29 61 / 82%) 52%, rgb(216 35 42 / 35%)), url(${asset('/img/servicios-generales.webp')})`,
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <span className="hero-kicker">Servicios SERVISERC</span>
            <h1 className="service-detail-title">Soluciones para ordenar, formalizar y hacer crecer tu negocio</h1>
            <p className="hero-copy">
              Asesoría contable, tributaria, laboral y empresarial con atención cercana para emprendedores, pymes y empresas.
            </p>
            <div className="hero-actions">
              <a className="btn btn-secondary" href={whatsappLink('Hola Serviserc, quiero consultar por sus servicios')} target="_blank" rel="noopener noreferrer">
                Consultar por WhatsApp
              </a>
              <Link className="btn btn-outline" href="/#sedes">
                Ver sedes
              </Link>
            </div>
          </div>
        </div>
        <div className="b2b-slant-separator" style={{ color: 'var(--brand-blue-dark)' }}>
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" fill="currentColor">
            <polygon points="0,100 100,0 100,100" />
          </svg>
        </div>
      </section>

      <div className="b2b-trust-bar">
        <div className="container b2b-trust-grid">
          <div className="b2b-trust-item">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>
            <strong>Absoluta Confidencialidad</strong>
          </div>
          <div className="b2b-trust-item">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
            <strong>Atención de Socios Expertos</strong>
          </div>
          <div className="b2b-trust-item">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
            <strong>Diagnóstico Preciso</strong>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-heading-row" style={{ marginBottom: '40px' }}>
            <div>
              <h2 className="section-title">Todos nuestros servicios</h2>
              <p className="section-copy">
                Soluciones integrales para ordenar, formalizar y escalar tu empresa con seguridad.
              </p>
            </div>
          </div>
          <div className="b2b-services-grid">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted" style={{ position: 'relative' }}>
        <div className="b2b-chevron-separator top">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" fill="currentColor">
            <polygon points="0,0 100,0 50,100" />
          </svg>
        </div>
        <div className="container">
          <div className="section-heading-row">
            <div>
              <span className="section-eyebrow">Nuestro Método</span>
              <h2 className="section-title">Cómo trabajamos</h2>
              <p className="section-copy">
                Un proceso simple para entender tu caso, ordenar la información y acompañarte con claridad.
              </p>
            </div>
          </div>
          <div className="process-grid">
            {processSteps.map((step, index) => (
              <article key={step.title} className="process-card">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
