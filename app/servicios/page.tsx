import type { Metadata } from 'next';
import Link from 'next/link';
import { ServiceCard } from '@/components/ServiceCard';
import { services } from '@/data/services';
import { asset, whatsappLink } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Servicios',
  description: 'Servicios contables, tributarios, laborales, documentarios y empresariales de SERVISERC S.A.C.',
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
      <section
        className="services-hero services-hero-image"
        style={{
          backgroundImage: `linear-gradient(115deg, rgb(5 18 38 / 94%), rgb(7 29 61 / 82%) 52%, rgb(216 35 42 / 35%)), url(${asset('/img/servicios-generales.webp')})`,
        }}
      >
        <div className="container services-hero-grid">
          <div>
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
          <div className="services-hero-panel">
            <strong>Atención integral</strong>
            <p>Servicios pensados para reducir errores, mejorar el control documental y cumplir obligaciones ante entidades correspondientes.</p>
            <div className="services-stats">
              <span>Contable</span>
              <span>Tributario</span>
              <span>Laboral</span>
              <span>Documentario</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container section-heading-row">
          <div>
            <h2 className="section-title">Servicios principales</h2>
            <p className="section-copy">
              Cada servicio cuenta con una página de detalle para explicar qué incluye, sus beneficios y cómo podemos ayudarte.
            </p>
          </div>
          <a className="btn btn-primary" href={whatsappLink('Hola Serviserc, deseo asesoría sobre un servicio')} target="_blank" rel="noopener noreferrer">
            Solicitar asesoría
          </a>
        </div>
        <div className="container">
          <div className="services-grid">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-heading-row">
            <div>
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
